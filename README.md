# Family Trip · 우리 가족 여행 계

LIVE website: https://omatty123.github.io/gye-travel-fund/

GitHub repository: https://github.com/omatty123/gye-travel-fund

This is the existing English/Korean family travel site. The home page gives
the essentials for the booked March 21–23, 2027 Hubertus stay. The travel fund,
past trips and photographs, and expanded planning notes remain in the archive.

## Work on the site

The site uses plain HTML, CSS, and JavaScript with no build dependencies.
Run the existing checks from the repository root:

```sh
node tests/check-site.mjs
```

The checks need the full Git history because they compare the financial data
with its recorded baseline. GitHub Actions runs them on pushes and pull requests.

GitHub Pages automatically publishes the root of the `main` branch. Check the
Pages deployment and the live page after pushing.

## Source files

- `index.html`: compact current-trip page with the booked house, photographs, relaxed itinerary, map, and food stops.
- `css/trip.css`: styles for the compact current-trip page.
- `trip-archive.html`: travel fund, past trips, and expanded planning notes, including the eight earlier lodging alternatives.
- `css/home.css`: retained styles for the archive.
- `js/i18n.js`: English/Korean text and saved language preference.
- `js/area-map.js`: nearby map, with coordinate and source notes in `docs/map-sources.md`.
- `assets/vendor/leaflet/`: locally bundled Leaflet 1.9.4 and license; street tiles load from OpenStreetMap.
- `js/stays.js`: the eight alternative stays researched in September 2026.
- `js/fund-data.js`: financial source records; only change with confirmed data.
- `madison.html` and `madison-photos.html`: the past trip guide and gallery.

Keep every page bilingual. Preserve the original photos, financial history,
and existing trip records. Use sans-serif fonts and natural heading wraps.
Keep proposed dates separate from confirmed bookings, and record the date and
source of listing checks. A dated booking link does not verify availability
or price.

The family confirmed the house booking on October 20, 2026. Private booking
confirmation links and access details must stay out of this public repository.
The confirmation does not change the fund ledger without confirmed financial data.
