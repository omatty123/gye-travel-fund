const money = cents => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
const cents = value => Math.round(value * 100);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const optimized = path => 'assets/optimized/' + path.split('/').pop().replace(/\.(jpe?g|png)$/i, '.webp');
function calculateFund(fund) {
  const contributions = fund.contributions.reduce((sum, row) => sum + row.p.reduce((a,b)=>a+b,0)*5000,0);
  const interest = fund.interest.reduce((sum,row)=>sum+cents(row.amount),0);
  const expenses = fund.trips.reduce((sum,trip)=>sum+cents(trip.cost||0),0);
  return {contributions,interest,expenses,balance:contributions+interest-expenses};
}
function renderFund() {
  const totals=calculateFund(data);
  document.getElementById('balance').textContent=money(totals.balance);
  document.getElementById('pending-receipt').textContent=data.pendingReceipt.label+' '+money(cents(data.pendingReceipt.amount))+' 입금 예정액 포함';
  const bankRows=[{label:'은행 명세서 · '+data.bankStatement.date,amount:cents(data.bankStatement.balance)},...data.confirmedOutsideStatement.map(row=>({label:row.label,amount:cents(row.amount)})),{label:data.pendingReceipt.label+' · 입금 예정',amount:cents(data.pendingReceipt.amount)}];
  document.getElementById('bank-reconciliation').innerHTML=bankRows.map((row,i)=>'<div><dt>'+escapeHTML(row.label)+'</dt><dd>'+(i?'+':'')+money(row.amount)+'</dd></div>').join('');
  if(bankRows.reduce((sum,row)=>sum+row.amount,0)!==totals.balance){const warning=document.createElement('p');warning.className='reconciliation-warning';warning.textContent='회비 기록과 은행 확인 내역의 차이를 확인해 주세요.';document.querySelector('.reconciliation').append(warning);}
  document.getElementById('fund-equation').innerHTML=[['누적 회비',totals.contributions],['이자',totals.interest],['여행비',-totals.expenses],['계 잔액',totals.balance]].map(([label,amount])=>'<div><dt>'+label+'</dt><dd>'+money(amount)+'</dd></div>').join('');
}
let showHistory=false;
function renderLedger(){
  let cumulative=0;
  const rows=data.contributions.map(row=>{cumulative+=row.p.reduce((a,b)=>a+b,0)*5000;return {...row,cumulative};});
  const currentMonth=new Date().toLocaleDateString('sv-SE',{timeZone:'America/Chicago'}).slice(0,7);
  document.getElementById('contribution-body').innerHTML=rows.filter(row=>showHistory||row.m>='2026-01').reverse().map(row=>{
    const [year,month]=row.m.split('-');
    const payments=row.p.map((paid,i)=>{const future=row.m>currentMonth;const status=paid?'납부 확인':future?'예정':'기록 확인 필요';return '<td><span class="'+(paid?'paid':'unrecorded')+'" aria-label="'+escapeHTML(data.parties[i]+' '+status)+'">'+(paid?'✓':future?'예정':'—')+'</span></td>';}).join('');
    return '<tr><th scope="row">'+year+'년 '+Number(month)+'월</th>'+payments+'<td class="numeric">'+money(row.cumulative)+'</td></tr>';
  }).join('');
}
function renderStays(){
  document.getElementById('stay-list').innerHTML=stays.map(stay=>'<article class="stay"><a class="stay-photo" href="'+stay.url+'" target="_blank" rel="noopener noreferrer" aria-label="'+escapeHTML(stay.name)+' 숙소 사진 보기 (새 창)"><img src="'+stay.photo+'" alt="'+escapeHTML(stay.name)+'의 호스트 제공 숙소 사진" width="960" height="640" loading="lazy" decoding="async"></a><div class="stay-content"><h3>'+escapeHTML(stay.name)+'</h3><p class="stay-location">'+escapeHTML(stay.location)+'</p><p class="stay-fit">'+escapeHTML(stay.fit)+'</p><p class="stay-facts">'+escapeHTML(stay.facts)+'</p><p>'+escapeHTML(stay.description)+'</p><dl class="stay-details"><div><dt>잠자리</dt><dd>'+escapeHTML(stay.beds)+'</dd></div><div><dt>확인할 점</dt><dd>'+escapeHTML(stay.check)+'</dd></div></dl><p class="stay-location">'+escapeHTML(stay.setting)+'</p><div class="stay-links"><a class="primary-link" href="'+stay.url+'?adults=6&children=1" target="_blank" rel="noopener noreferrer">사진·예약 날짜 보기<span class="sr-only"> — '+escapeHTML(stay.name)+' (새 창)</span></a><a href="'+stay.natureUrl+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(stay.nature)+'<span class="sr-only"> (새 창)</span></a></div><p class="listing-source">Airbnb · '+escapeHTML(stay.rating)+' · 2026.09.13 확인</p></div></article>').join('');
  document.querySelectorAll('.stay-photo img').forEach(img=>img.addEventListener('error',()=>{img.hidden=true;const message=document.createElement('span');message.textContent='Airbnb에서 숙소 사진 보기';img.parentElement.append(message);},{once:true}));
}
const imgIdx={};
const arrow=direction=>'<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="'+(direction<0?'M15 5l-7 7 7 7':'M9 5l7 7-7 7')+'"/></svg>';
function renderTrips(){
  document.getElementById('trip-grid').innerHTML=data.trips.map(trip=>{
    imgIdx[trip.id]=0;
    return '<article class="trip-card"><div class="trip-image-container"><img id="image-'+trip.id+'" src="'+optimized(trip.photos[0])+'" alt="'+escapeHTML(trip.title)+' · 사진 1" width="1000" height="700" loading="lazy" decoding="async"><div class="photo-controls"><button type="button" data-trip="'+trip.id+'" data-direction="-1" aria-label="'+escapeHTML(trip.title)+' 이전 사진">'+arrow(-1)+'</button><span id="count-'+trip.id+'" aria-live="polite">1 / '+trip.photos.length+'</span><button type="button" data-trip="'+trip.id+'" data-direction="1" aria-label="'+escapeHTML(trip.title)+' 다음 사진">'+arrow(1)+'</button></div></div><div class="trip-content"><h3>'+escapeHTML(trip.title)+'</h3><p class="trip-date">'+escapeHTML(trip.date)+'</p>'+(trip.cost?'<p class="trip-cost">숙소 비용 '+money(cents(trip.cost))+'</p>':'')+'<div class="trip-links">'+(trip.id==='madison'?'<a href="madison-photos.html">가족 사진 보기</a><a href="madison.html">매디슨에서 할 거리</a>':'')+(trip.airbnb?'<a href="'+trip.airbnb+'" target="_blank" rel="noopener noreferrer">머물렀던 숙소<span class="sr-only"> (새 창)</span></a>':'')+'</div><details class="trip-details"><summary>장소와 여행 메모</summary><p>'+escapeHTML(trip.address)+'</p><a href="https://maps.google.com/?q='+encodeURIComponent(trip.address)+'" target="_blank" rel="noopener noreferrer">지도에서 보기<span class="sr-only"> (새 창)</span></a>'+(trip.activities?'<p>'+trip.activities.join(' · ')+'</p>':'')+(trip.memory?'<p>'+escapeHTML(trip.memory)+'</p>':'')+'</details></div></article>';
  }).join('');
  document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>cycleImg(button.dataset.trip,Number(button.dataset.direction))));
  document.querySelectorAll('#trip-grid a[target="_blank"]').forEach(a=>a.rel='noopener noreferrer');
}
function cycleImg(id,direction){const trip=data.trips.find(trip=>trip.id===id);imgIdx[id]=(imgIdx[id]+direction+trip.photos.length)%trip.photos.length;const img=document.getElementById('image-'+id);img.src=optimized(trip.photos[imgIdx[id]]);img.alt=trip.title+' · 사진 '+(imgIdx[id]+1);document.getElementById('count-'+id).textContent=(imgIdx[id]+1)+' / '+trip.photos.length;}
document.addEventListener('DOMContentLoaded',()=>{renderFund();renderLedger();renderStays();renderTrips();document.getElementById('history-toggle').addEventListener('click',event=>{showHistory=!showHistory;event.currentTarget.setAttribute('aria-expanded',String(showHistory));event.currentTarget.textContent=showHistory?'2026년만 보기':'2025년 내역도 보기';renderLedger();});});
