import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const read = file => fs.readFileSync(new URL('../'+file,import.meta.url),'utf8');
const i18nSource = read('js/i18n.js');
function languageContext(search='',saved='ko',blocked=false) {
  const context = {URL,URLSearchParams,location:{search,href:'https://example.test/index.html'+search},document:{documentElement:{},addEventListener(){},querySelectorAll(){return []},dispatchEvent(){}},localStorage:{getItem(){if(blocked)throw Error('blocked');return saved},setItem(){}},history:{replaceState(){}},CustomEvent:class {},window:{}};
  vm.runInNewContext(i18nSource,context);
  return context.window.I18n;
}
const api = languageContext('?lang=en','ko');
assert.equal(api.language,'en');
assert.equal(languageContext('','en').language,'en');
assert.equal(languageContext('?lang=invalid','ko').language,'ko');
assert.equal(languageContext('','en',true).language,'ko');
const messages = JSON.parse(i18nSource.match(/const messages = (\{[\s\S]*?\n\});/)[1]);
for (const [key,value] of Object.entries(messages)) {
  assert(value.en?.trim() && value.ko?.trim(),`Incomplete translation: ${key}`);
}
for (const file of ['index.html','madison.html','madison-photos.html']) {
  const html = read(file);
  assert.equal((html.match(/data-language="en"/g)||[]).length,1,file);
  assert.equal((html.match(/data-language="ko"/g)||[]).length,1,file);
  assert(html.includes('js/i18n.js'),file);
  for(const [,key] of html.matchAll(/data-i18n(?:-[\w-]+)?="([\w]+)"/g)) assert(messages[key],`Missing ${key} in ${file}`);
  for(const [,script] of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script,{filename:file});
}
for(const file of ['js/app.js','js/madison.js','js/stays.js','js/fund-data.js']) new vm.Script(read(file),{filename:file});
const catalogue = JSON.parse(vm.runInNewContext(read('js/stays.js')+';JSON.stringify({regions,stays})'));
assert.equal(catalogue.regions.length,4);
assert.equal(catalogue.stays.length,8);
assert.equal(new Set(catalogue.stays.map(stay=>stay.id)).size,catalogue.stays.length);
for (const area of catalogue.regions) assert(catalogue.stays.some(s=>s.region===area.id),area.id);
assert(catalogue.regions.filter(area=>catalogue.stays.filter(s=>s.region===area.id).length>=2).length>=3);
const sourceHosts = new Set(catalogue.stays.map(stay=>new URL(stay.url).hostname));
assert(sourceHosts.size>=4,'Research must include owner and manager sources beyond a single marketplace');
for (const stay of catalogue.stays) {
  assert(stay.capacity>=7,stay.id);
  assert.equal(stay.petPolicy?.status,'allowed',stay.id);
  assert(stay.petPolicy.detail.en && stay.petPolicy.detail.ko,stay.id);
  assert.equal(stay.petPolicy.checked,'2026-09-13');
  assert(stay.petPolicy.source===stay.url || stay.sources.some(source=>source.url===stay.petPolicy.source),`Missing visible policy source: ${stay.id}`);
  for (const url of [stay.url,stay.petPolicy.source,...stay.sources.map(source=>source.url)]) {
    assert.equal(new URL(url).protocol,'https:');
    assert(!new URL(url).hostname.endsWith('airbnb.com'),stay.id);
  }
  assert(stay.sourceName,stay.id);
  assert.equal(stay.rating,null,'Do not mix incompatible marketplace rating scales');
  for(const source of stay.sources) assert(source.label.en && source.label.ko);
  for(const lang of ['en','ko']) for(const key of ['fit','description','beds','check']) assert(stay.text[lang][key],`${stay.id} ${lang} ${key}`);
  assert(!/[가-힣]/.test(JSON.stringify(stay.text.en)),stay.id);
}
for (const language of ['en','ko']) {
  const cards=JSON.parse(vm.runInNewContext(read('js/stays.js')+'\n'+read('js/app.js')+';JSON.stringify(stays.map(renderStay))',{I18n:{language,t:key=>messages[key][language]},document:{addEventListener(){}}}));
  cards.forEach((card,index)=>{
    assert(card.includes(catalogue.stays[index].url),`Changed property link: ${index}`);
    assert(!/NaN|undefined|Airbnb|adults=7/.test(card),`Invalid card: ${index}`);
    if(language==='en') assert(!/[가-힣]/.test(card),`Korean leaks into English card: ${index}`);
  });
}
const fundSource=read('js/fund-data.js');
const financial = JSON.parse(vm.runInNewContext(fundSource+'\n'+read('js/app.js')+';JSON.stringify({data,totals:calculateFund(data)})',{document:{addEventListener(){}}}));
assert.equal(financial.totals.balance,170407);
assert.equal(financial.totals.contributions,265000);
const previous=execFileSync('git',['show','8b48c1d:js/fund-data.js'],{encoding:'utf8'});
assert.equal(fundSource,previous,'Financial data changed during localization');
const activities=JSON.parse(vm.runInNewContext(read('js/madison.js')+';JSON.stringify(activities)',{I18n:{language:'en'},document:{addEventListener(){}}}));
assert.equal(activities.length,23);
assert(activities.every(a=>a.hoursEn&&!/[가-힣]/.test(a.hoursEn)));
console.log('PASS: all 3 pages bilingual, 8 dog-friendly stays in 4 areas with multiple primary sources, exact property links, 23 translated schedules, unchanged $1,704.07 fund, and JavaScript syntax.');
