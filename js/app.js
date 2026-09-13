const money = cents => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(cents / 100);
const cents = value => Math.round(value * 100);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const optimized = path => 'assets/optimized/' + path.split('/').pop().replace(/\.(jpe?g|png)$/i, '.webp');
const t = key => I18n.t(key);
const local = value => value[I18n.language];
const translated = key => escapeHTML(t(key));
const external = ' target="_blank" rel="noopener noreferrer"';
let showHistory = false;
let selectedArea = 'all';
let dogsOnly = true;
const imgIdx = {};
const tripCopy = {
  madison: {en: {title:'Madison family vacation',date:'March 22–24, 2026'},ko:{title:'매디슨 가족 휴가',date:'2026년 3월 22–24일'}},
  milwaukee: {en:{title:'Milwaukee — where our fund began',date:'March 27–28, 2025',memory:'This is where our family travel fund began.'},ko:{title:'밀워키 — 계의 시작',date:'2025년 3월 27–28일',memory:'이곳에서 우리 가족 여행 계가 시작되었습니다'}}
};
function calculateFund(fund) {
  const contributions = fund.contributions.reduce((sum,row) => sum + row.p.reduce((a,b)=>a+b,0)*5000,0);
  const interest = fund.interest.reduce((sum,row) => sum+cents(row.amount),0);
  const expenses = fund.trips.reduce((sum,trip) => sum+cents(trip.cost||0),0);
  return {contributions,interest,expenses,balance:contributions+interest-expenses};
}
function renderFund() {
  const totals = calculateFund(data);
  document.getElementById('balance').textContent = money(totals.balance);
  document.getElementById('pending-receipt').textContent = `${t('pendingParents')} ${money(cents(data.pendingReceipt.amount))} · ${t('pendingIncluded')}`;
  const bankRows = [
    {label:t('statement')+' · '+data.bankStatement.date,amount:cents(data.bankStatement.balance)},
    ...data.confirmedOutsideStatement.map(row=>({label:t('joeJuly'),amount:cents(row.amount)})),
    {label:t('pendingParents')+' · '+t('incoming'),amount:cents(data.pendingReceipt.amount)}
  ];
  document.getElementById('bank-reconciliation').innerHTML = bankRows.map((row,i)=>`<div><dt>${escapeHTML(row.label)}</dt><dd>${i?'+':''}${money(row.amount)}</dd></div>`).join('');
  document.querySelector('.reconciliation-warning')?.remove();
  if (bankRows.reduce((sum,row)=>sum+row.amount,0)!==totals.balance) {
    const warning = document.createElement('p');
    warning.className = 'reconciliation-warning'; warning.textContent = t('mismatch');
    document.querySelector('.reconciliation').append(warning);
  }
  document.getElementById('fund-equation').innerHTML = [['contributionsTotal',totals.contributions],['interest',totals.interest],['expenses',-totals.expenses],['balance',totals.balance]].map(([key,amount])=>`<div><dt>${translated(key)}</dt><dd>${money(amount)}</dd></div>`).join('');
}
function renderLedger() {
  let cumulative = 0;
  const rows = data.contributions.map(row=>{cumulative+=row.p.reduce((a,b)=>a+b,0)*5000;return {...row,cumulative};});
  const currentMonth = new Date().toLocaleDateString('sv-SE',{timeZone:'America/Chicago'}).slice(0,7);
  const parties = [t('parents'),'Joe / Heejin / Ben','Dominica / Matty'];
  document.getElementById('contribution-body').innerHTML = rows.filter(row=>showHistory||row.m>='2026-01').reverse().map(row=>{
    const [year,month] = row.m.split('-');
    const label = new Intl.DateTimeFormat(I18n.language==='ko'?'ko-KR':'en-US',{year:'numeric',month:'short',timeZone:'UTC'}).format(new Date(Date.UTC(Number(year),Number(month)-1,1)));
    const payments = row.p.map((paid,i)=>{
      const future = row.m>currentMonth;
      const status = t(paid?'paid':future?'upcoming':'unrecorded');
      return `<td><span class="${paid?'paid':'unrecorded'}" aria-label="${escapeHTML(parties[i]+' · '+status)}">${paid?'✓':future?translated('upcoming'):'—'}</span></td>`;
    }).join('');
    return `<tr><th scope="row">${label}</th>${payments}<td class="numeric">${money(row.cumulative)}</td></tr>`;
  }).join('');
  const toggle = document.getElementById('history-toggle');
  toggle.textContent = t(showHistory?'hideHistory':'showHistory');
  toggle.setAttribute('aria-expanded',String(showHistory));
}
function renderAreaControls() {
  const options = [{id:'all',name:{ko:t('allAreas'),en:t('allAreas')}},...regions];
  const controls = document.getElementById('area-controls');
  controls.innerHTML = options.map(area=>`<button type="button" data-area="${area.id}" aria-controls="stay-list" aria-pressed="${area.id===selectedArea}">${escapeHTML(local(area.name))}</button>`).join('');
  controls.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
    selectedArea = button.dataset.area;
    controls.querySelectorAll('button').forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
    renderStays();
  }));
}
function sourceLink(source, context = '') {
  const label = typeof source.label === 'string' ? source.label : local(source.label);
  return `<a href="${escapeHTML(source.url)}"${external}>${escapeHTML(label)}<span class="sr-only">${context?' — '+escapeHTML(context):''} (${translated('newTab')})</span></a>`;
}
function renderStay(stay) {
  const copy = local(stay.text), name = local(stay.name);
  const facts = I18n.language==='ko' ? `최대 ${stay.capacity}명 · 침실 ${stay.bedrooms} · 욕실 ${stay.baths}` : `Up to ${stay.capacity} guests · ${stay.bedrooms} bedrooms · ${stay.baths} bathrooms`;
  const policy = stay.petPolicy || {status:'unknown',detail:{en:t('petUnknownDetail'),ko:t('petUnknownDetail')}};
  const policyKey = {allowed:'petAllowed',not_allowed:'petNotAllowed',unknown:'petUnknown'}[policy.status] || 'petUnknown';
  const sources = stay.sources || [];
  const photo = stay.photo ? `<img src="${escapeHTML(stay.photo)}" alt="${escapeHTML(name+' · '+t('hostPhoto'))}" width="960" height="640" loading="lazy" decoding="async">` : `<span>${translated('photoFallback')}</span>`;
  const rating = Number.isFinite(stay.rating) ? ` · ${stay.rating.toFixed(2)} / 5` : '';
  const sourceNames = {'Owner website':t('ownerWebsite'),'Manager website':t('managerWebsite')};
  const sourceName = typeof stay.sourceName === 'object' && stay.sourceName ? local(stay.sourceName) : sourceNames[stay.sourceName] || stay.sourceName;
  return `<article class="stay">
    <a class="stay-photo" href="${escapeHTML(stay.url)}"${external} aria-label="${escapeHTML(name+' · '+t('viewProperty')+' ('+t('newTab')+')')}">${photo}</a>
    <div class="stay-content"><h4>${escapeHTML(name)}</h4><p class="stay-location">${escapeHTML(local(stay.location))}</p><p class="stay-fit">${escapeHTML(copy.fit)}</p><p class="stay-facts">${facts}</p>
    <div class="pet-policy pet-policy-${escapeHTML(policy.status)}"><strong>${translated(policyKey)}</strong><p>${escapeHTML(local(policy.detail))}</p></div><p>${escapeHTML(copy.description)}</p>
    <dl class="stay-details"><div><dt>${translated('beds')}</dt><dd>${escapeHTML(copy.beds)}</dd></div><div><dt>${translated('check')}</dt><dd>${escapeHTML(copy.check)}</dd></div>${stay.priceNote?`<div><dt>${translated('priceInformation')}</dt><dd>${escapeHTML(local(stay.priceNote))}</dd></div>`:''}</dl>
    <div class="stay-links"><a class="primary-link" href="${escapeHTML(stay.url)}"${external}>${translated('viewProperty')}<span class="sr-only"> — ${escapeHTML(name)} (${translated('newTab')})</span></a></div>
    ${sources.length?`<div class="stay-sources" aria-label="${translated('listingSources')}">${sources.map(source=>sourceLink(source,name)).join('')}</div>`:''}
    <p class="listing-source">${escapeHTML(sourceName || t('propertyListing'))}${rating} · ${translated('sourceDate')}</p></div>
  </article>`;
}
function renderStays() {
  const totalAreas = new Set(stays.map(stay=>stay.region)).size;
  document.getElementById('research-status').textContent = I18n.language==='ko'?`${totalAreas}개 지역 · 숙소 후보 ${stays.length}곳`:`${totalAreas} areas · ${stays.length} possible stays`;
  document.getElementById('dogs-only').checked = dogsOnly;
  const filteredStays = stays.filter(stay=>(selectedArea==='all'||stay.region===selectedArea)&&(!dogsOnly||stay.petPolicy?.status==='allowed'));
  const shownRegions = regions.filter(area=>(selectedArea==='all'||area.id===selectedArea)&&filteredStays.some(stay=>stay.region===area.id));
  const count = filteredStays.length;
  document.getElementById('stay-count').textContent = I18n.language==='ko'?`${count}개 숙소 후보 · 날짜별 요금 미확인`:`${count} possible stays · Date-specific prices unverified`;
  if (!count) {
    document.getElementById('stay-list').innerHTML = `<div class="stay-empty"><p>${translated(selectedArea==='all'?'noDogStaysAll':'noDogStays')}</p>${selectedArea!=='all'?`<button id="show-all-areas" type="button" aria-controls="stay-list">${translated('showAllAreas')}</button>`:''}</div>`;
    document.getElementById('show-all-areas')?.addEventListener('click',()=>{
      selectedArea = 'all';
      renderAreaControls();
      renderStays();
      document.querySelector('[data-area="all"]').focus();
    });
    return;
  }
  document.getElementById('stay-list').innerHTML = shownRegions.map(area=>{
    const searches = (area.sources || []).map(source=>sourceLink(source,local(area.name))).join('');
    return `<div class="stay-area"><div class="area-heading"><h3>${escapeHTML(local(area.name))}</h3><p>${escapeHTML(local(area.description))}</p>${searches?`<div class="area-searches">${searches}</div><p class="search-date-note">${translated('chooseMarch')}</p>`:''}</div>${filteredStays.filter(stay=>stay.region===area.id).map(renderStay).join('')}</div>`;
  }).join('');
  document.querySelectorAll('.stay-photo img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;const message=document.createElement('span');message.textContent=t('photoFallback');img.parentElement.append(message);},{once:true}));
}
const arrow = direction => '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="'+(direction<0?'M15 5l-7 7 7 7':'M9 5l7 7-7 7')+'"/></svg>';
function renderTrips() {
  const openNotes = [...document.querySelectorAll('.trip-details[open]')].map(el=>el.dataset.tripNotes);
  document.getElementById('trip-grid').innerHTML = data.trips.map(trip=>{
    const copy = local(tripCopy[trip.id]);
    imgIdx[trip.id] ??= 0;
    const index = imgIdx[trip.id];
    const activities = trip.activities ? [
      `<a href="https://milwaukeezoo.org"${external}>${I18n.language==='ko'?'밀워키 동물원':'Milwaukee Zoo'}</a>`,
      `<a href="https://maps.google.com/?q=Stone+Bowl+Grill+1958+N+Farwell+Ave+Milwaukee+WI"${external}>${I18n.language==='ko'?'스톤볼 그릴':'Stone Bowl Grill'}</a>`,
      I18n.language==='ko'?'동네 산책':'Neighborhood walks',
      `<a href="https://www.mitchellparkdomes.com/"${external}>${I18n.language==='ko'?'미첼 파크 돔스':'Mitchell Park Domes'}</a>`
    ].join(' · ') : '';
    return `<article class="trip-card"><div class="trip-image-container"><img id="image-${trip.id}" src="${optimized(trip.photos[index])}" alt="${escapeHTML(copy.title+' · '+t('photo')+' '+(index+1))}" width="1000" height="700" loading="lazy" decoding="async"><div class="photo-controls"><button type="button" data-trip="${trip.id}" data-direction="-1" aria-label="${escapeHTML(copy.title+' · '+t('prevPhoto'))}">${arrow(-1)}</button><span id="count-${trip.id}" aria-live="polite">${index+1} / ${trip.photos.length}</span><button type="button" data-trip="${trip.id}" data-direction="1" aria-label="${escapeHTML(copy.title+' · '+t('nextPhoto'))}">${arrow(1)}</button></div></div>
    <div class="trip-content"><h3>${escapeHTML(copy.title)}</h3><p class="trip-date">${escapeHTML(copy.date)}</p>${trip.cost?`<p class="trip-cost">${translated('lodgingCost')} ${money(cents(trip.cost))}</p>`:''}
    <div class="trip-links">${trip.id==='madison'?`<a href="madison-photos.html">${translated('galleryLink')}</a><a href="madison.html">${translated('guideLink')}</a>`:''}${trip.airbnb?`<a href="${trip.airbnb}"${external}>${translated('pastStay')}<span class="sr-only"> (${translated('newTab')})</span></a>`:''}</div>
    <details class="trip-details" data-trip-notes="${trip.id}" ${openNotes.includes(trip.id)?'open':''}><summary>${translated('tripNotes')}</summary><p>${escapeHTML(trip.address)}</p><a href="https://maps.google.com/?q=${encodeURIComponent(trip.address)}"${external}>${translated('map')}<span class="sr-only"> (${translated('newTab')})</span></a>${activities?`<p>${activities}</p>`:''}${copy.memory?`<p>${escapeHTML(copy.memory)}</p>`:''}</details></div></article>`;
  }).join('');
  document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>cycleImg(button.dataset.trip,Number(button.dataset.direction))));
  I18n.syncLinks();
}
function cycleImg(id,direction) {
  const trip = data.trips.find(trip=>trip.id===id);
  imgIdx[id] = (imgIdx[id]+direction+trip.photos.length)%trip.photos.length;
  const img = document.getElementById('image-'+id);
  img.src = optimized(trip.photos[imgIdx[id]]);
  img.alt = local(tripCopy[id]).title+' · '+t('photo')+' '+(imgIdx[id]+1);
  document.getElementById('count-'+id).textContent = (imgIdx[id]+1)+' / '+trip.photos.length;
}
function renderHome() {renderFund();renderLedger();renderAreaControls();renderStays();renderTrips();}
document.addEventListener('DOMContentLoaded',()=>{
  renderHome();
  document.getElementById('dogs-only').addEventListener('change',event=>{dogsOnly=event.target.checked;renderStays();});
  document.getElementById('history-toggle').addEventListener('click',()=>{showHistory=!showHistory;renderLedger();});
});
document.addEventListener('languagechange',renderHome);
