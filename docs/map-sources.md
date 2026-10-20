# Family Trip area map: sources and coordinates

Research checked on **2026-10-20** for the tentative March 21–23, 2027 trip.

The map helps the family locate Pike Lake, Fox & Hounds, and Holy Hill. It uses an actual street basemap. It does not draw route lines or provide travel-time estimates.

## Marker ledger

Coordinates below use **WGS84 (EPSG:4326), latitude, longitude**, in decimal degrees. Leaflet receives them in that order. The points represent mapped parking areas or buildings; they are not surveyed entrances.

| Destination | Latitude | Longitude | Marker meaning | Map record |
| --- | ---: | ---: | --- | --- |
| Pike Lake — Nature Trail parking | 43.318606 | -88.308451 | Representative point within the parking area used to access the Astronomy Trail; 450 Powder Hill Road, Hartford, Wisconsin | [OpenStreetMap way 24247567](https://www.openstreetmap.org/way/24247567) |
| Fox & Hounds | 43.236006 | -88.287809 | Representative point within the restaurant building; 1298 Friess Lake Road, Hubertus, WI 53033 | [OpenStreetMap way 879134496](https://www.openstreetmap.org/way/879134496) |
| Holy Hill | 43.244404 | -88.327742 | Representative point within the basilica building; 1525 Carmel Road, Hubertus, WI 53033 | [OpenStreetMap way 979371872](https://www.openstreetmap.org/way/979371872) |

The representative points were derived from each OpenStreetMap way's node coordinates. They provide useful orientation at this map's scale without implying entrance-level precision.

### Primary-source and independent checks

- **Pike Lake:** The [Wisconsin DNR event notice](https://dnr.wisconsin.gov/events/94341) identifies the Nature Trail parking lot as **450 Powder Hill Road**. The [Wisconsin Society for Ornithology site guide](https://www.wsobirds.org/haunts/haunts-washington/1412-kettle-moraine-state-forest-pike-lake) places the Black Forest Nature Trail parking lot at **43.31878, -88.30870**, within the same parking area. The [official DNR trail map](https://widnr.widen.net/s/nhbdpgfhj9/kmsf-pike-lake_trail-map) supplies local trail context.
- **Fox & Hounds:** The [restaurant's official contact page](https://foxandhoundsrestaurant.com/contact/) confirms the name and street address and links to its Google Maps listing.
- **Holy Hill:** The [official hours and directions page](https://www.holyhill.com/hours-directions) confirms the name and street address. Its directions identify access from Highway 167; visitors must use the property's parking areas. The [official grounds map](https://www.holyhill.com/visit) distinguishes the basilica, grounds, and visitor facilities.

The Pike Lake marker deliberately uses the Nature Trail parking area. The DNR park homepage's general directions target, **43.3196, -88.3195**, is near the park office and is not the selected Astronomy Trail access point.

Holy Hill's large religious-property polygon is not used as the basilica marker. Its representative center can fall several hundred feet from the church.

## Basemap, licenses, and updates

- Street tiles load dynamically from **OpenStreetMap**, using `https://tile.openstreetmap.org/{z}/{x}/{y}.png`. The tile provider may update the underlying map independently of this website. Tiles require a network connection.
- Display **© OpenStreetMap contributors**, linked to [OpenStreetMap copyright and license information](https://www.openstreetmap.org/copyright). OpenStreetMap data is available under the **Open Database License (ODbL)**. Follow the [OpenStreetMap standard tile usage policy](https://operations.osmfoundation.org/policies/tiles/) when changing tile behavior.
- **Leaflet** supplies the interactive map controls and rendering. It is separate from the geographic data and is licensed under the **BSD 2-Clause License**. The bundled license is retained at `assets/vendor/leaflet/LICENSE`; see the [upstream Leaflet license](https://github.com/Leaflet/Leaflet/blob/main/LICENSE).
- Pin coordinates are a static snapshot checked on the research date. A later map-data update does not automatically revise these coordinates. Recheck access, operating hours, and conditions before the March 2027 visit.

## Directions and fallback behavior

Each destination has an ordinary Google Maps driving-directions link in the page's HTML. These three links remain available when Leaflet, JavaScript, or basemap tiles fail to load.

Fox & Hounds and Holy Hill directions use the place name and full street address. Pike Lake directions target the verified Nature Trail parking area, rather than a generic park-name search that could select the office. The displayed address identifies the parking area as 450 Powder Hill Road.

The links omit a fixed origin. Google Maps lets the visitor use their current location or choose another starting point. Google Maps computes road routes and current directions after the link opens; the small area map does not invent connecting lines.

No rental-house pin or house-to-destination route is shown. The exact address of the proposed Vrbo rental is unknown. Search-region coordinates in the Vrbo URL do not establish the rental's location.

## Astronomy Trail and March conditions

The [DNR hiking page](https://dnr.wisconsin.gov/topic/parks/pikelake/recreation/hiking) identifies the **Astronomy Trail** as a **0.5-mile segment of the Blue Trail**. That distance describes the named segment, not necessarily the full walk from the parking area and back.

The trail is east of Powder Hill Road, as shown by the [official trail map](https://widnr.widen.net/s/nhbdpgfhj9/kmsf-pike-lake_trail-map) and the [mapped Astronomy Trail geometry](https://www.openstreetmap.org/way/1182103327).

The [DNR winter recreation page](https://dnr.wisconsin.gov/topic/parks/pikelake/recreation/winter) identifies groomed ski trails east of Powder Hill Road and permits winter hiking and snowshoeing on trails west of that road and on the Ice Age Trail. March walking access to the Astronomy Trail therefore depends on snow, grooming, and posted conditions. Check current park conditions before treating it as a confirmed walking activity.
