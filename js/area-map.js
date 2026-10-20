// Marker provenance and access notes: docs/map-sources.md.
(() => {
  function setup() {
    const container = document.getElementById('area-map');
    if (!container || !window.L) return;
    const fallback = document.getElementById('map-fallback');
    const reset = document.getElementById('map-reset');
    const places = [
      {id: 'pike', latlng: [43.318606, -88.308451], name: 'mapPikeShort', detail: 'mapPopupPike', direction: 'right'},
      {id: 'fox', latlng: [43.236006, -88.287809], name: 'mapFoxShort', detail: 'mapPopupFox', direction: 'bottom'},
      {id: 'holy', latlng: [43.244404, -88.327742], name: 'mapHolyShort', detail: 'mapPopupHoly', direction: 'top'},
      {id: 'house', latlng: [43.23951, -88.27414], name: 'mapHouseShort', detail: 'mapHouseApprox', direction: 'top', isHouse: true}
    ];
    const t = key => window.I18n.t(key);
    let initialized = false;
    function initialize() {
      if (initialized) return;
      initialized = true;
      const map = L.map(container, {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        touchZoom: false,
        doubleClickZoom: false,
        zoomSnap: 0.25,
        zoomDelta: 0.5,
        zoomControl: false
      });
      const bounds = L.latLngBounds(places.map(place => place.latlng));
      const fit = () => {
        map.closePopup();
        map.fitBounds(bounds, {padding: [55, 45], maxZoom: 12});
      };
      const zoom = L.control.zoom().addTo(map);
      L.control.scale({metric: true, imperial: true, maxWidth: 80}).addTo(map);
      map.attributionControl.setPrefix('<a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet</a>');
      const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
      });
      // Directions remain available even if tile requests fail.
      tiles.on('tileload', () => { fallback.hidden = true; });
      tiles.on('tileerror', () => { fallback.hidden = false; });
      tiles.addTo(map);
      const markers = places.map((place, index) => {
        const marker = L.marker(place.latlng, {
          icon: L.divIcon({
            className: 'map-marker' + (place.isHouse ? ' map-house-marker' : ''),
            html: place.isHouse
              ? '<span class="map-house-star" aria-hidden="true">★</span>'
              : '<span class="map-number" aria-hidden="true">' + (index + 1) + '</span>',
            iconSize: [44, 44],
            iconAnchor: [22, 22]
          }),
          title: t(place.name),
          alt: t(place.name),
          riseOnHover: true,
          zIndexOffset: place.isHouse ? 1000 : 0
        }).addTo(map);
        marker.bindTooltip(t(place.name), {
          permanent: true,
          direction: place.direction,
          className: 'map-place-label' + (place.isHouse ? ' map-house-label' : ''),
          offset: {right: [12, 0], left: [-12, 0], top: [0, -12], bottom: [0, 12]}[place.direction]
        });
        return {marker, place};
      });
      function localize() {
        const control = zoom.getContainer();
        for (const [selector, key] of [['.leaflet-control-zoom-in', 'mapZoomIn'], ['.leaflet-control-zoom-out', 'mapZoomOut']]) {
          const button = control.querySelector(selector);
          button.title = t(key);
          button.setAttribute('aria-label', t(key));
        }
        markers.forEach(({marker, place}) => {
          const icon = marker.getElement();
          icon.title = t(place.name);
          icon.setAttribute('aria-label', place.isHouse ? t(place.name) + '. ' + t(place.detail) : t(place.name));
          marker.setTooltipContent(t(place.name));
          const content = document.createElement('div');
          const name = document.createElement('p');
          name.className = 'map-popup-title';
          name.textContent = t(place.name);
          const detail = document.createElement('p');
          detail.textContent = t(place.detail);
          const link = document.createElement('a');
          link.className = 'map-popup-link';
          link.href = document.querySelector('[data-map-destination="' + place.id + '"]').href;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.textContent = t(place.isHouse ? 'mapHouseListing' : 'mapDirections');
          content.append(name, detail, link);
          if (marker.getPopup()) marker.setPopupContent(content);
          else marker.bindPopup(content);
        });
        const close = container.querySelector('.leaflet-popup-close-button');
        if (close) close.setAttribute('aria-label', t('mapClosePopup'));
      }
      fit();
      localize();
      document.addEventListener('languagechange', localize);
      map.on('popupopen', () => {
        const close = container.querySelector('.leaflet-popup-close-button');
        if (close) close.setAttribute('aria-label', t('mapClosePopup'));
      });
      reset.hidden = false;
      reset.addEventListener('click', fit);
      // Refit when the responsive column changes width, not on ordinary scrolling.
      let lastWidth = container.clientWidth;
      if (window.ResizeObserver) {
        new ResizeObserver(() => {
          if (lastWidth === container.clientWidth) return;
          lastWidth = container.clientWidth;
          map.invalidateSize();
          fit();
        }).observe(container);
      }
    }
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        observer.disconnect();
        initialize();
      }, {rootMargin: '200px'});
      observer.observe(container);
    } else {
      initialize();
    }
  }
  document.addEventListener('DOMContentLoaded', setup);
})();
