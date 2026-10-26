(async function () {
 const host = document.querySelector('#trip-map');
 try {
  if (!window.L) throw new Error('Map library unavailable');
  const response = await fetch('map-data.json');
  if (!response.ok) throw new Error('Map data unavailable');
  const places = await response.json();
  const map = L.map(host, {scrollWheelZoom:false, dragging:!L.Browser.mobile, tap:false}).setView([45.02,-87.155],11);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  L.control.scale({imperial:true,metric:true}).addTo(map);
  const markers = new Map();
  let activeView="overview";
  const esc = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function popup(p) {
   const ko=document.documentElement.lang==='ko';
   return `<strong>${esc(p.name)}</strong><p>${esc(p.address)}</p><p>${esc(ko?p.kr:p.desc)}</p><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name+' '+p.address)}">${ko?'길찾기 ↗':'Directions ↗'}</a>`;
  }
  for (const p of places) {
   const marker=L.marker([p.lat,p.lon],{title:p.name,alt:p.name,zIndexOffset:p.hotel?1000:0,icon:L.divIcon({className:'place-pin '+(p.hotel?'hotel-pin':'poi-pin'),html:esc(p.label),iconSize:p.hotel?[36,36]:[28,28],iconAnchor:p.hotel?[18,18]:[14,14]})}).addTo(map).bindPopup(popup(p),{maxWidth:220,autoPanPadding:[20,35]});
   if(p.hotel) marker.bindTooltip(p.name,{permanent:true,direction:'right',offset:[17,0],className:'hotel-label'});
   markers.set(p.id,marker);
  }
  function showNearby() {
   places.filter(p=>!p.hotel).forEach(p=>{const marker=markers.get(p.id);if(map.getZoom()>=14 || (activeView==="hikes" && p.hike)){if(!map.hasLayer(marker))marker.addTo(map);}else if(map.hasLayer(marker))map.removeLayer(marker);});
  }
  map.on('zoomend',showNearby);
  function view(which) {
   map.closePopup();
   activeView=which;
   if(which==='overview') map.fitBounds(places.filter(p=>p.hotel).map(p=>[p.lat,p.lon]),{padding:[55,55],maxZoom:12});
   else if(which==='hikes') map.fitBounds(places.filter(p=>p.hike||p.hotel).map(p=>[p.lat,p.lon]),{padding:[40,40],maxZoom:12});
   else {const p=places.find(p=>p.hotel&&p.town===which);map.setView([p.lat,p.lon],15);}
   showNearby();
   document.querySelectorAll('[data-map-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mapView===which)));
  }
  document.querySelectorAll('[data-map-view]').forEach(b=>b.addEventListener('click',()=>view(b.dataset.mapView)));
  document.querySelectorAll('[data-place]').forEach(b=>b.addEventListener('click',()=>{
   document.querySelectorAll('[data-map-view]').forEach(button=>button.setAttribute('aria-pressed','false'));
   const p=places.find(p=>p.id===b.dataset.place);map.setView([p.lat,p.lon],16);markers.get(p.id).openPopup();host.scrollIntoView({behavior:'smooth',block:'center'});
  }));
  new MutationObserver(()=>places.forEach(p=>markers.get(p.id).setPopupContent(popup(p)))).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  view('overview');
  showNearby();
 } catch(error) {
  console.error(error);
  host.innerHTML='<p>Map unavailable. Use the Directions links below.<br>지도를 불러올 수 없습니다. 아래 길찾기 링크를 이용하세요.</p>';
 }
})();
