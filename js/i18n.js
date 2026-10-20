// Shared English/Korean preference for every page. No translation service required.
(() => {
  const messages = {
  "siteTitle": {
    "ko": "우리 가족 여행 계",
    "en": "Our Family Travel Fund"
  },
  "mapClosePopup": {
    "ko": "장소 설명 닫기",
    "en": "Close popup"
  },
  "subtitle": {
    "ko": "함께 모아, 함께 떠나요",
    "en": "Save together. Travel together."
  },
  "skip": {
    "ko": "본문으로 건너뛰기",
    "en": "Skip to content"
  },
  "mainNav": {
    "ko": "주요 메뉴",
    "en": "Main navigation"
  },
  "nextTrip": {
    "ko": "다음 여행",
    "en": "Next trip"
  },
  "ledger": {
    "ko": "회비 내역",
    "en": "Contributions"
  },
  "memories": {
    "ko": "여행 기록",
    "en": "Past trips"
  },
  "fundBalance": {
    "ko": "여행 계 잔액",
    "en": "Travel fund balance"
  },
  "calculating": {
    "ko": "계산 중",
    "en": "Calculating"
  },
  "springLink": {
    "ko": "2027년 3월 21–23일 · Hubertus 숙소 예약 완료 →",
    "en": "March 21–23, 2027 · Booked Hubertus stay →"
  },
  "reconcile": {
    "ko": "잔액 확인",
    "en": "Balance breakdown"
  },
  "reconcileNote": {
    "ko": "은행에 도착한 금액과 가족이 납부를 확인한 금액을 구분해 기록해요.",
    "en": "Bank-statement funds and family-confirmed payments are recorded separately."
  },
  "springTitle": {
    "ko": "다음 봄, 어디로 갈까요?",
    "en": "Where shall we go next spring?"
  },
  "springGroup": {
    "ko": "2027년 3월 · 성인 6명 + 아이 1명 · 위스콘신",
    "en": "March 2027 · 6 adults + 1 child · Wisconsin"
  },
  "springIntro": {
    "ko": "도시, 작은 마을, 호숫가와 숲속 숙소를 함께 비교해요. 숙소·관리업체의 공식 웹사이트와 Vrbo 등 여러 출처에서 성인 6명과 아이 1명의 잠자리, 반려견 동반 규정을 확인했어요. 각 후보의 근거 링크도 함께 볼 수 있어요.",
    "en": "Compare cities, small towns, lakes, and cabins. We researched owner and rental-agency websites, Vrbo, and other sources for sleeping space for six adults and one child, with an explicit check of pet-dog policies. Each candidate links to the sources behind it."
  },
  "bookingNote": {
    "ko": "아래 8개 후보는 2026년 9월 13일 확인한 숙소 정보예요. 2027년 3월 예약 가능 여부와 총요금은 아직 확인하지 않았어요.",
    "en": "The eight alternatives below were researched September 13, 2026. March 2027 availability and total prices have not been checked."
  },
  "leadingStatus": {
    "ko": "숙소 예약 완료",
    "en": "House booked"
  },
  "leadingLocation": {
    "ko": "4768 Sonseeahray Dr, Hubertus, WI 53033",
    "en": "4768 Sonseeahray Dr, Hubertus, WI 53033"
  },
  "leadingDates": {
    "ko": "2027년 3월 21–23일 · 2박",
    "en": "March 21–23, 2027 · 2 nights"
  },
  "leadingGuests": {
    "ko": "성인 6명 + 아이 1명",
    "en": "6 adults + 1 child"
  },
  "leadingFacts": {
    "ko": "침실 3개 + 로프트 · 욕실 3.5개 · 최대 12명",
    "en": "3 bedrooms + loft · 3.5 bathrooms · Sleeps 12"
  },
  "leadingBedsLabel": {
    "ko": "침대 구성과 실내 이동",
    "en": "Beds and indoor access"
  },
  "leadingBeds": {
    "ko": "침실 1: 퀸 침대. 침실 2·3: 각각 퀸 침대 + 싱글 2층 침대. 로프트: 킹 침대. 실내에 계단이 있어요.",
    "en": "Bedroom 1: queen. Bedrooms 2 and 3: each has a queen and a twin bunk bed. Loft: king. Stairs are required indoors."
  },
  "leadingPets": {
    "ko": "반려동물 동반 가능. 등록 페이지에 반려동물 요금 $50가 표시되어 있으며, 추가 수수료와 세금이 적용돼요. 마릿수·크기 제한은 아직 확인하지 않았어요.",
    "en": "Pets allowed. The listing shows a $50 pet fee; additional fees and taxes apply. Pet count and size limits have not been verified."
  },
  "leadingLink": {
    "ko": "숙소 등록 페이지 보기",
    "en": "View house listing"
  },
  "leadingSource": {
    "ko": "2026년 10월 20일 가족이 예약 완료를 알려주었어요. 숙소 시설은 공개 등록 페이지에서 확인했어요.",
    "en": "Booking confirmed by the family on October 20, 2026. House features checked against the public listing."
  },
  "houseLiving": {
    "ko": "거실",
    "en": "Living room"
  },
  "houseBasement": {
    "ko": "지하 게임룸",
    "en": "Basement game room"
  },
  "houseDeck": {
    "ko": "숲이 보이는 데크",
    "en": "Deck overlooking the woods"
  },
  "houseLivingAlt": {
    "ko": "소파와 큰 창문이 있고 데크 쪽이 보이는 거실",
    "en": "Living room with sofas, large windows, and a view toward the deck"
  },
  "houseBasementAlt": {
    "ko": "당구대, 좌석, 테이블형 아케이드 게임기와 싱크대가 있는 바를 갖춘 지하 게임룸",
    "en": "Basement game room with a pool table, seating, arcade table, and wet bar"
  },
  "houseDeckAlt": {
    "ko": "빨간 쿠션이 놓인 좌석과 숲 전망이 있는 데크",
    "en": "Deck with red-cushioned seating and woodland views"
  },
  "housePhotoSource": {
    "ko": "Vrbo 숙소 사진 · 사진을 선택하면 크게 볼 수 있어요",
    "en": "Vrbo listing photos · Select a photo to enlarge"
  },
  "itineraryTitle": {
    "ko": "여유로운 3월 21–23일 일정",
    "en": "A relaxed March 21–23 itinerary"
  },
  "itineraryStatus": {
    "ko": "2027년 · 제안 일정",
    "en": "2027 · Suggested plan"
  },
  "itineraryIntro": {
    "ko": "짧게 나들이하고, 숙소에서 함께 보내는 시간을 넉넉히 두어요. 아래 시간은 모두 조정할 수 있어요.",
    "en": "Short outings, with plenty of time together at the house. All times below are flexible."
  },
  "sundayTitle": {
    "ko": "3월 21일 일요일",
    "en": "Sunday, March 21"
  },
  "sundayTheme": {
    "ko": "도착해서 편히 쉬기",
    "en": "Arrive and settle in"
  },
  "sundayArrivalLabel": {
    "ko": "오후 · 숙소 도착",
    "en": "Afternoon · Arrive at the house"
  },
  "sundayArrival": {
    "ko": "호스트가 정한 체크인 시간에 맞춰 도착해 짐을 풀고, 간식을 먹으며 집을 둘러봐요. 오후에는 다른 일정을 넣지 않아요.",
    "en": "Arrive at the host’s confirmed check-in time, unpack, have a snack, and explore the house. Keep the rest of the afternoon open."
  },
  "sundayDinnerLabel": {
    "ko": "오후 5시 30분쯤 · Fox & Hounds",
    "en": "Around 5:30 p.m. · Fox & Hounds"
  },
  "sundayDinner": {
    "ko": "함께하는 첫 저녁 식사. 도착 시간에 맞춰 조정하고, 7명 자리는 미리 예약해요. 아직 예약하지 않았어요.",
    "en": "Our first dinner together. Adjust the time to suit our arrival and reserve a table for seven in advance. No reservation has been made."
  },
  "sundayHomeLabel": {
    "ko": "저녁 · 다시 숙소로",
    "en": "Evening · Back to the house"
  },
  "sundayHome": {
    "ko": "편한 옷으로 갈아입고, 게임이나 이야기를 나누며 쉬어요. 저녁에는 더 나가지 않아요.",
    "en": "Get comfortable, play games, or catch up. No more outings this evening."
  },
  "mondayTitle": {
    "ko": "3월 22일 월요일",
    "en": "Monday, March 22"
  },
  "mondayTheme": {
    "ko": "아침 식사와 천문 산책",
    "en": "Breakfast and the Astronomy Trail"
  },
  "mondayBreakfastLabel": {
    "ko": "오전 9시쯤 · Java Dancer",
    "en": "Around 9 a.m. · Java Dancer"
  },
  "mondayBreakfast": {
    "ko": "Hubertus에서 커피와 가벼운 아침을 먹어요. 서두르지 않고 천천히 출발해요.",
    "en": "Coffee and a light breakfast in Hubertus, with no rush to get going."
  },
  "mondayWalkLabel": {
    "ko": "오전 늦게 · Astronomy Trail",
    "en": "Late morning · Astronomy Trail"
  },
  "mondayWalk": {
    "ko": "Pike Lake에서 태양계 산책을 해요. 주차장부터 오가는 길을 포함해 1–2시간을 넉넉히 잡고, 짧게 걸어도 좋아요.",
    "en": "Take a solar-system walk at Pike Lake. Allow a relaxed 1–2 hours, including the walk from and back to parking. A shorter walk is fine, too."
  },
  "mondayHomeLabel": {
    "ko": "점심부터 밤까지 · 숙소에서",
    "en": "Lunch through evening · At the house"
  },
  "mondayHome": {
    "ko": "간단한 점심, 낮잠, 독서, 지하 게임룸, 함께하는 저녁 식사. 날씨가 좋으면 데크에서도 쉬어요. 오후와 저녁에는 외출 일정을 넣지 않아요.",
    "en": "An easy lunch, naps, reading, the basement game room, and dinner together. Relax on the deck if the weather allows. Keep the whole afternoon and evening free of outings."
  },
  "tuesdayTitle": {
    "ko": "3월 23일 화요일",
    "en": "Tuesday, March 23"
  },
  "tuesdayTheme": {
    "ko": "천천히 아침을 먹고 귀가하기",
    "en": "An easy breakfast, then head home"
  },
  "tuesdayHomeLabel": {
    "ko": "아침 · 숙소에서 커피와 짐 정리",
    "en": "Morning · Coffee and packing at the house"
  },
  "tuesdayHome": {
    "ko": "조금 더 함께 시간을 보내고, 호스트가 정한 체크아웃 시간에 맞춰 출발해요.",
    "en": "Enjoy a little more time together, then leave by the host’s confirmed checkout time."
  },
  "tuesdayBreakfastLabel": {
    "ko": "체크아웃 후 · Perc Place",
    "en": "After checkout · Perc Place"
  },
  "tuesdayBreakfast": {
    "ko": "Hartford에서 늦은 아침을 먹어요. 현재 화요일에는 오후 2시에 닫아요. 이동을 줄이고 싶으면 Hubertus의 Java Dancer로 바꿔도 좋아요.",
    "en": "Have a late breakfast in Hartford. Current Tuesday closing time is 2 p.m. Choose Java Dancer in Hubertus instead if we want less driving."
  },
  "tuesdayHolyLabel": {
    "ko": "귀가 전 · Holy Hill",
    "en": "Before heading home · Holy Hill"
  },
  "tuesdayHoly": {
    "ko": "성당과 야외 공간을 30–45분 정도 둘러본 뒤 집으로 향해요. 전망탑은 3월에 닫혀 있어요.",
    "en": "Allow about 30–45 minutes for a look around the basilica and grounds, then head home. The scenic tower is closed in March."
  },
  "itineraryFlex": {
    "ko": "숙소는 예약했으며, 나들이 시간은 조정할 수 있어요. 식당은 아직 예약하지 않았어요. 호스트의 체크인·체크아웃 시간을 따르고 식당 영업시간은 방문 전에 다시 확인해 주세요.",
    "en": "The house is booked; outings are flexible and dinner is not reserved. Follow the host’s check-in and checkout times, and recheck restaurant hours before visiting."
  },
  "itineraryWeather": {
    "ko": "월요일 산책은 도보 이용이 가능할 때만 해요. 눈이 쌓여 스키 코스로 사용 중이거나 길 상태가 좋지 않으면, 그 시간도 숙소에서 편히 쉬어요.",
    "en": "Take Monday’s walk only if hiking access is available. If the trail is in use for skiing or conditions are poor, enjoy more time at the house instead."
  },
  "dinnerStatus": {
    "ko": "저녁 식사 후보 · 미정",
    "en": "Dinner idea · Tentative"
  },
  "dinnerDates": {
    "ko": "제안: 2027년 3월 21일 일요일 오후 5시 30분쯤 · 월요일은 예비 선택지",
    "en": "Suggested: Sunday, March 21, 2027, around 5:30 p.m. · Monday is the backup"
  },
  "dinnerPending": {
    "ko": "위 일정에서는 일요일을 제안해요. 도착 시간에 맞춰 바꿀 수 있으며, 아직 예약하지 않았어요.",
    "en": "The itinerary above suggests Sunday. We can adjust it to suit our arrival. No reservation has been made."
  },
  "dinnerHours": {
    "ko": "현재 안내된 저녁 영업시간: 일요일 오후 3–9시 · 월요일 오후 4–9시 (미국 중부시간). 일–목요일에는 손님 수에 따라 일찍 닫을 수 있어요.",
    "en": "Posted dinner hours: Sunday 3–9 p.m. · Monday 4–9 p.m. (Central). Sunday–Thursday closing may be earlier depending on customer volume."
  },
  "dinnerMenu": {
    "ko": "공식 메뉴",
    "en": "Official menu"
  },
  "dinnerWebsite": {
    "ko": "식당 웹사이트",
    "en": "Restaurant website"
  },
  "dinnerPhone": {
    "ko": "예약 문의: 262-628-1111",
    "en": "Reservations: 262-628-1111"
  },
  "dinnerSource": {
    "ko": "예약을 권장하는 식당이에요. 2026년 10월 20일 공식 웹사이트 확인. 2027년 3월 방문 전에 영업시간을 다시 확인해 주세요.",
    "en": "Reservations recommended. Official website checked October 20, 2026. Recheck hours before the March 2027 visit."
  },
  "astronomyPriority": {
    "ko": "가족이 고른 산책",
    "en": "Our chosen walk"
  },
  "astronomyTitle": {
    "ko": "Pike Lake Astronomy Trail",
    "en": "Pike Lake Astronomy Trail"
  },
  "astronomyFacts": {
    "ko": "천문 구간 약 0.5마일 · Blue Trail의 일부",
    "en": "Astronomy section: about 0.5 mile · Part of the Blue Trail"
  },
  "astronomyDescription": {
    "ko": "숲길을 걸으며 태양계의 규모를 알아보는 낮 산책 코스예요. 전체 Blue Loop는 3.8마일이며, 천문 구간까지 오가는 거리는 별도로 계산해야 해요.",
    "en": "A daytime woodland walk that illustrates the scale of the solar system. The full Blue Loop is 3.8 miles; allow extra distance to reach and return from the astronomy section."
  },
  "astronomyAccess": {
    "ko": "Nature Trail 주차장(450 Powder Hill Road)에서 출발해 공식 지도에 표시된 천문 구간으로 가세요. 주차장 바로 남쪽에는 가족 캠핑장이 있어요.",
    "en": "Start at the Nature Trail parking lot, 450 Powder Hill Road, and follow the official map to the astronomy section. The family campground is immediately south of the parking lot."
  },
  "astronomyMarch": {
    "ko": "Powder Hill Road 동쪽 길은 적설 상태가 좋으면 정비된 스키 코스로 사용돼요. 3월 방문 전에 도보 이용 가능 여부와 진흙·얼음 상태를 확인해 주세요. 차량 입장권이 필요해요.",
    "en": "The trail east of Powder Hill Road is groomed for skiing when snow conditions permit. Check hiking access and mud or ice before the March visit. Vehicle admission is required."
  },
  "astronomyMap": {
    "ko": "공식 산책로 지도",
    "en": "Official trail map"
  },
  "astronomyDnr": {
    "ko": "DNR 산책로 안내",
    "en": "DNR hiking information"
  },
  "astronomyWinter": {
    "ko": "눈이 있을 때 이용 안내",
    "en": "Snow-season access"
  },
  "astronomyScaleSource": {
    "ko": "태양계 산책 설명",
    "en": "About the solar-system walk"
  },
  "areaMapTitle": {
    "ko": "주변 지도와 길찾기",
    "en": "Area map and directions"
  },
  "areaMapIntro": {
    "ko": "HOUSE HQ와 주변 세 곳의 위치를 확인하세요.",
    "en": "HOUSE HQ and our three nearby stops."
  },
  "areaMapLabel": {
    "ko": "HOUSE HQ, Pike Lake, Fox & Hounds, Holy Hill 지도",
    "en": "Map of HOUSE HQ, Pike Lake, Fox & Hounds, and Holy Hill"
  },
  "areaMapFallback": {
    "ko": "지도 표시가 안 되면 아래 길찾기 링크를 이용해 주세요.",
    "en": "If the map does not load, use the directions links below."
  },
  "areaMapReset": {
    "ko": "숙소와 모든 방문지 보기",
    "en": "Show house and all stops"
  },
  "mapPike": {
    "ko": "Pike Lake · Nature Trail 주차장",
    "en": "Pike Lake · Nature Trail parking"
  },
  "mapDirections": {
    "ko": "길찾기 ↗",
    "en": "Directions ↗"
  },
  "mapOriginNote": {
    "ko": "세 방문지의 길찾기는 HOUSE HQ에서 출발해요. Google Maps에서 출발지를 바꿀 수 있어요. Pike Lake 도착지는 Nature Trail 주차장이에요.",
    "en": "Directions to the three stops start at HOUSE HQ. You can change the starting point in Google Maps. Pike Lake directions lead to the Nature Trail parking lot."
  },
  "mapZoomIn": {
    "ko": "지도 확대",
    "en": "Zoom in"
  },
  "mapZoomOut": {
    "ko": "지도 축소",
    "en": "Zoom out"
  },
  "mapPikeShort": {
    "ko": "Pike Lake",
    "en": "Pike Lake"
  },
  "mapHolyShort": {
    "ko": "Holy Hill",
    "en": "Holy Hill"
  },
  "mapFoxShort": {
    "ko": "Fox & Hounds",
    "en": "Fox & Hounds"
  },
  "mapPopupPike": {
    "ko": "Nature Trail 주차장 · 450 Powder Hill Road",
    "en": "Nature Trail parking · 450 Powder Hill Road"
  },
  "mapPopupFox": {
    "ko": "1298 Friess Lake Road",
    "en": "1298 Friess Lake Road"
  },
  "mapPopupHoly": {
    "ko": "1525 Carmel Road",
    "en": "1525 Carmel Road"
  },
  "mapLoading": {
    "ko": "지도를 불러오는 중…",
    "en": "Loading map…"
  },
  "holyHillMarch": {
    "ko": "Holy Hill 전망탑은 3월에 닫혀 있어요. 성당과 야외 공간은 방문할 수 있어요.",
    "en": "Holy Hill’s scenic tower is closed in March. The basilica and grounds can be visited."
  },
  "holyHillVisit": {
    "ko": "Holy Hill 방문 안내",
    "en": "Holy Hill visitor information"
  },
  "breakfastTitle": {
    "ko": "다른 아침 식사 선택지",
    "en": "More breakfast options"
  },
  "javaDescription": {
    "ko": "Nutman 매장 안의 카페. 키시, 아사이 볼, 아침 랩과 에그 샌드위치가 있어요.",
    "en": "A café inside the Nutman shop, with quiche, açaí bowls, breakfast wraps, and egg sandwiches."
  },
  "javaHours": {
    "ko": "일요일 오전 8시–오후 3시 · 월·화요일 오전 7시–오후 6시 (카페 운영시간)",
    "en": "Sunday 8 a.m.–3 p.m. · Monday/Tuesday 7 a.m.–6 p.m. (café hours)"
  },
  "percDescription": {
    "ko": "감자 팬케이크 위 훈제 연어 베네딕트, 구운 오트밀과 키시. 6명 이상은 팁 20%가 자동으로 추가돼요.",
    "en": "Smoked salmon Benedict on potato pancakes, baked oatmeal, and quiche. A 20% gratuity applies to groups of six or more."
  },
  "percHours": {
    "ko": "일·화요일 오전 7시–오후 2시 · 월요일 커피숍 오전 7시–정오. 월요일 전체 아침 메뉴 제공 여부는 확인이 필요해요.",
    "en": "Sunday/Tuesday 7 a.m.–2 p.m. · Monday coffee shop 7 a.m.–noon; full Monday breakfast service needs confirmation."
  },
  "allyDescription": {
    "ko": "콘비프 해시, 베리를 곁들인 프렌치토스트, 오믈렛과 채소 메뉴. 월요일 아침 식사에 좋은 선택이에요.",
    "en": "Corned beef hash, French toast with berries, omelets, and vegetable dishes. A good option for Monday breakfast."
  },
  "allyHours": {
    "ko": "일요일 휴무 · 월·화요일 아침 메뉴 오전 7–11시",
    "en": "Closed Sunday · Monday/Tuesday breakfast 7–11 a.m."
  },
  "areaChecked": {
    "ko": "2026년 10월 20일 공식 정보 확인. 시간은 미국 중부시간이며, 2027년 3월 방문 전에 다시 확인해 주세요.",
    "en": "Official information checked October 20, 2026. Times are Central; recheck before the March 2027 visit."
  },
  "otherOptions": {
    "ko": "기존에 조사한 다른 숙소",
    "en": "Other researched stays"
  },
  "seasonNote": {
    "ko": "3월에는 호숫가 산책과 실내에서 함께 보내는 시간을 중심으로 생각해요. 수영·보트·야외 시설 운영은 별도 확인이 필요해요. 숙소 사진은 각 소유주·관리업체의 등록 페이지에서 제공해요.",
    "en": "For March, think shoreline walks and time together indoors. Swimming, boats, and outdoor facilities need separate seasonal checks. Property photos come from the owner or manager’s listing."
  },
  "ledgerDate": {
    "ko": "가족별 매월 $50 · 2026년 9월 13일 업데이트",
    "en": "$50 per family each month · Updated September 13, 2026"
  },
  "showHistory": {
    "ko": "2025년 내역도 보기",
    "en": "Include 2025 history"
  },
  "hideHistory": {
    "ko": "2026년만 보기",
    "en": "Show 2026 only"
  },
  "legend": {
    "ko": "✓ 납부 확인 · — 아직 기록 없음 (미납 확정 아님) · 예정: 다음 달",
    "en": "✓ Payment confirmed · — Not yet recorded (not confirmed unpaid) · Upcoming: future month"
  },
  "tableLabel": {
    "ko": "가족별 월 회비 내역",
    "en": "Monthly contributions by family"
  },
  "tableCaption": {
    "ko": "가족별 월 회비 납부 확인과 누적 회비. 누적 회비는 이자와 여행비를 반영하기 전 금액입니다.",
    "en": "Monthly payment confirmations and cumulative contributions by family. Cumulative contributions exclude interest and trip expenses."
  },
  "month": {
    "ko": "월",
    "en": "Month"
  },
  "parents": {
    "ko": "부모님",
    "en": "Mom & Dad"
  },
  "contributionsTotal": {
    "ko": "누적 회비",
    "en": "Contributions to date"
  },
  "interest": {
    "ko": "이자",
    "en": "Interest"
  },
  "expenses": {
    "ko": "여행비",
    "en": "Trip expenses"
  },
  "balance": {
    "ko": "계 잔액",
    "en": "Fund balance"
  },
  "pastTitle": {
    "ko": "함께한 여행",
    "en": "Our trips together"
  },
  "pastIntro": {
    "ko": "우리 가족의 여행 기록",
    "en": "Memories from our family travels"
  },
  "footer": {
    "ko": "사랑으로 함께하는 우리 가족",
    "en": "Our family, together with love"
  },
  "signature": {
    "ko": "올림, 양코사위",
    "en": "With love, your Yankee son-in-law"
  },
  "top": {
    "ko": "맨 위로",
    "en": "Back to top"
  },
  "noscript": {
    "ko": "잔액과 여행 목록을 보려면 JavaScript를 켜 주세요. / Enable JavaScript to view the fund and stays.",
    "en": "Enable JavaScript to view the fund and stays. / 잔액과 여행 목록을 보려면 JavaScript를 켜 주세요."
  },
  "back": {
    "ko": "← 여행 계 홈",
    "en": "← Back to Travel Fund"
  },
  "language": {
    "ko": "언어 선택",
    "en": "Choose language"
  },
  "pendingParents": {
    "ko": "부모님 7–10월 회비",
    "en": "Mom & Dad · July–October contributions"
  },
  "pendingIncluded": {
    "ko": "입금 예정액 포함",
    "en": "included as incoming funds"
  },
  "incoming": {
    "ko": "입금 예정",
    "en": "Incoming"
  },
  "statement": {
    "ko": "은행 명세서",
    "en": "Bank statement"
  },
  "joeJuly": {
    "ko": "Joe 7월 회비 · 가족 확인",
    "en": "Joe · July payment, family confirmed"
  },
  "mismatch": {
    "ko": "회비 기록과 은행 확인 내역의 차이를 확인해 주세요.",
    "en": "Please check the difference between the contribution record and bank reconciliation."
  },
  "paid": {
    "ko": "납부 확인",
    "en": "Payment confirmed"
  },
  "upcoming": {
    "ko": "예정",
    "en": "Upcoming"
  },
  "unrecorded": {
    "ko": "기록 확인 필요",
    "en": "Not yet recorded"
  },
  "beds": {
    "ko": "잠자리",
    "en": "Sleeping arrangements"
  },
  "check": {
    "ko": "확인할 점",
    "en": "Before choosing"
  },
  "photosDates": {
    "ko": "사진·예약 날짜 보기",
    "en": "Photos & dates"
  },
  "newTab": {
    "ko": "새 창",
    "en": "new tab"
  },
  "hostPhoto": {
    "ko": "소유주·관리업체가 제공한 숙소 사진",
    "en": "owner- or manager-provided property photo"
  },
  "photoFallback": {
    "ko": "숙소 페이지에서 사진 보기",
    "en": "View photos on the property page"
  },
  "sourceDate": {
    "ko": "2026.09.13 확인",
    "en": "Checked Sep 13, 2026"
  },
  "reviews": {
    "ko": "후기",
    "en": "reviews"
  },
  "allAreas": {
    "ko": "전체 지역",
    "en": "All areas"
  },
  "dogsOnly": {
    "ko": "반려견 동반이 가능한 숙소만 보기",
    "en": "Only stays that allow pet dogs"
  },
  "petFilterNote": {
    "ko": "반려견 동반 가능 여부가 확인된 숙소만 표시해요. 마릿수·크기 제한과 추가 요금은 예약 전에 확인해 주세요.",
    "en": "This filter includes only stays confirmed to allow pet dogs. Check the number and size limits, and any extra fees, before booking."
  },
  "petAllowed": {
    "ko": "반려견 동반 가능",
    "en": "Pet dogs allowed"
  },
  "petNotAllowed": {
    "ko": "반려견 동반 불가",
    "en": "Pet dogs not allowed"
  },
  "petUnknown": {
    "ko": "반려견 동반 여부 미확인",
    "en": "Pet-dog policy unconfirmed"
  },
  "petUnknownDetail": {
    "ko": "예약 전에 호스트에게 반려견 동반 가능 여부를 확인해 주세요.",
    "en": "Ask the host whether pet dogs are allowed before booking."
  },
  "noDogStays": {
    "ko": "이 지역에는 반려견 동반이 확인된 숙소가 없어요. 전체 지역에서 찾아보세요.",
    "en": "No confirmed dog-friendly stays in this area. Try All areas."
  },
  "noDogStaysAll": {
    "ko": "반려견 동반 가능 여부가 확인된 숙소가 아직 없어요. 필터를 해제하면 전체 후보를 볼 수 있어요.",
    "en": "No stays are yet confirmed to allow pet dogs. Turn off this filter to see all candidates."
  },
  "showAllAreas": {
    "ko": "전체 지역에서 보기",
    "en": "Show all areas"
  },
  "areaFilter": {
    "ko": "숙소 지역 선택",
    "en": "Choose a lodging area"
  },
  "searchArea": {
    "ko": "이 지역에서 더 찾아보기",
    "en": "Search more stays in this area"
  },
  "choices": {
    "ko": "개 숙소 후보",
    "en": "possible stays"
  },
  "lodgingCost": {
    "ko": "숙소 비용",
    "en": "Lodging cost"
  },
  "galleryLink": {
    "ko": "가족 사진 보기",
    "en": "Family photos"
  },
  "guideLink": {
    "ko": "매디슨에서 할 거리",
    "en": "Things to do in Madison"
  },
  "pastStay": {
    "ko": "머물렀던 숙소",
    "en": "Where we stayed"
  },
  "tripNotes": {
    "ko": "장소와 여행 메모",
    "en": "Location & trip notes"
  },
  "map": {
    "ko": "지도에서 보기",
    "en": "Open map"
  },
  "prevPhoto": {
    "ko": "이전 사진",
    "en": "Previous photo"
  },
  "nextPhoto": {
    "ko": "다음 사진",
    "en": "Next photo"
  },
  "photo": {
    "ko": "사진",
    "en": "Photo"
  },
  "video": {
    "ko": "영상",
    "en": "Video"
  },
  "closePhoto": {
    "ko": "사진 닫기",
    "en": "Close photo"
  },
  "galleryTitle": {
    "ko": "매디슨, 2026년 3월",
    "en": "Madison, March 2026"
  },
  "gallerySubtitle": {
    "ko": "매디슨 가족 휴가 사진",
    "en": "Photos from our Madison family vacation"
  },
  "galleryPageTitle": {
    "ko": "매디슨 가족 사진",
    "en": "Madison Family Photos"
  },
  "galleryDialog": {
    "ko": "매디슨 가족 여행 사진",
    "en": "Madison family travel photos"
  },
  "guidePageTitle": {
    "ko": "매디슨에서 할 거리",
    "en": "Things to Do in Madison"
  },
  "guideDate": {
    "ko": "3월 22–24, 2026",
    "en": "March 22–24, 2026"
  },
  "archiveNote": {
    "ko": "지난 여행 · 2026년 3월",
    "en": "Past trip · March 2026"
  },
  "archiveContext": {
    "ko": "2026년 3월 여행 때의 안내입니다. 영업시간 등은 방문 전 각 장소의 웹사이트에서 확인해 주세요.",
    "en": "Guide from our March 2026 trip. Check each venue’s website for current opening hours before visiting."
  },
  "rainy": {
    "ko": "비 와도 OK",
    "en": "Rain-friendly only"
  },
  "website": {
    "ko": "웹사이트",
    "en": "Website"
  },
  "chooseMarch": {
    "ko": "예약 사이트에서 2027년 3월의 실제 날짜와 인원·반려견 수를 선택해 주세요. 기본 날짜는 다를 수 있으며, 예약 가능 여부와 총요금은 아직 확인하지 않았어요.",
    "en": "Enter your actual March 2027 dates, guests, and dogs on the booking site. Default dates may differ; availability and total prices remain unchecked."
  },
  "siteDescription": {
    "ko": "가족 여행 회비, 여행 기록, 2027년 3월 위스콘신의 도시·마을·호숫가 숙소 후보.",
    "en": "Family travel contributions, memories, and city, small-town, and lakeside stays for March 2027 in Wisconsin."
  },
  "viewProperty": {
    "ko": "숙소 보기",
    "en": "View property"
  },
  "priceInformation": {
    "ko": "요금 안내",
    "en": "Price information"
  },
  "listingSources": {
    "ko": "숙소 정보 출처",
    "en": "Property information sources"
  },
  "propertyListing": {
    "ko": "숙소 등록 정보",
    "en": "Property listing"
  },
  "ownerWebsite": {
    "ko": "숙소 공식 웹사이트",
    "en": "Owner website"
  },
  "managerWebsite": {
    "ko": "관리업체 웹사이트",
    "en": "Manager website"
  },
  "mapHouseShort": {
    "ko": "HOUSE HQ",
    "en": "HOUSE HQ"
  },
  "mapHouseApprox": {
    "ko": "지도 표시는 숙소 등록 페이지를 기준으로 하며, 길찾기는 위 주소를 이용해요.",
    "en": "Map pin from the rental listing. Directions use the address above."
  },
  "mapHouseListing": {
    "ko": "Vrbo 숙소 보기",
    "en": "View house on Vrbo"
  },
  "mapHouseAddress": {
    "ko": "4768 Sonseeahray Dr, Hubertus, WI 53033",
    "en": "4768 Sonseeahray Dr, Hubertus, WI 53033"
  },
  "mapHouseDirections": {
    "ko": "숙소로 길찾기 ↗",
    "en": "Directions to the house ↗"
  },
  "compactTitle": {
    "ko": "Hubertus · 2027년 3월 21–23일",
    "en": "Hubertus · March 21–23, 2027"
  },
  "compactDescription": {
    "ko": "예약한 가족 숙소, 여유로운 3일 일정, 숙소 사진과 주변 길찾기.",
    "en": "Our booked family stay, relaxed three-day plan, house photos, and nearby directions."
  },
  "compactBooked": {
    "ko": "숙소 예약 완료",
    "en": "House booked"
  },
  "compactGroup": {
    "ko": "일–화요일 · 2박 · 성인 6명 + 아이 1명",
    "en": "Sunday–Tuesday · 2 nights · 6 adults + 1 child"
  },
  "compactPlanLink": {
    "ko": "일정",
    "en": "The plan"
  },
  "compactMapLink": {
    "ko": "지도와 길찾기",
    "en": "Map & directions"
  },
  "compactArchiveLink": {
    "ko": "여행 계 · 지난 여행",
    "en": "Fund & past trips"
  },
  "compactPlanTitle": {
    "ko": "여유로운 3일",
    "en": "A relaxed three days"
  },
  "compactPlanIntro": {
    "ko": "하루에 짧은 나들이 하나씩. 숙소에서 보내는 시간은 넉넉하게.",
    "en": "One short outing a day. Plenty of time at the house."
  },
  "compactSunday": {
    "ko": "3월 21일 일요일",
    "en": "Sun · March 21"
  },
  "compactSundayArrival": {
    "ko": "체크인 시간에 맞춰 도착해 짐을 풀고 쉬어요.",
    "en": "Arrive after check-in, unpack, and settle in."
  },
  "compactSundayDinner": {
    "ko": "5시 30분쯤 Fox & Hounds에서 저녁을 먹고 숙소에서 게임을 해요. 월요일로 바꿔도 좋아요. 식당은 아직 예약하지 않았어요.",
    "en": "Fox & Hounds around 5:30 pm, then games at home. Monday is the backup; dinner is not reserved."
  },
  "compactDinnerCall": {
    "ko": "식당 예약: 262-628-1111",
    "en": "Reserve: 262-628-1111"
  },
  "compactMonday": {
    "ko": "3월 22일 월요일",
    "en": "Mon · March 22"
  },
  "compactMondayBreakfast": {
    "ko": "Java Dancer에서 천천히 아침을 먹어요.",
    "en": "Slow breakfast at Java Dancer."
  },
  "compactMondayTrail": {
    "ko": "Pike Lake Astronomy Trail",
    "en": "Pike Lake Astronomy Trail"
  },
  "compactTrailDetail": {
    "ko": "Blue Trail의 태양계 산책 구간은 약 0.5마일이고, 주차장에서 오가는 길은 별도예요. 1–2시간을 여유롭게 잡아요.",
    "en": "A half-mile solar-system walk on the Blue Trail, plus the walk from parking. Allow 1–2 easy hours."
  },
  "compactMondayHome": {
    "ko": "점심부터 오후와 저녁까지 숙소에서 편히 쉬어요.",
    "en": "Lunch, the whole afternoon, and dinner at the house."
  },
  "compactTuesday": {
    "ko": "3월 23일 화요일",
    "en": "Tue · March 23"
  },
  "compactTuesdayMorning": {
    "ko": "커피를 마시고 짐을 정리한 뒤 체크아웃해요. Perc Place에서 늦은 아침을 먹거나, 이동이 적은 Java Dancer로 가요.",
    "en": "Coffee, pack up, and check out. Late breakfast at Perc Place, or Java Dancer for less driving."
  },
  "compactTuesdayHoly": {
    "ko": "Holy Hill 성당과 야외 공간을 30–45분 둘러본 뒤 귀가해요. 전망탑은 3월에 닫혀 있어요.",
    "en": "Holy Hill: 30–45 minutes for the basilica and grounds, then home. The tower is closed in March."
  },
  "compactBreakfastTitle": {
    "ko": "아침 식사",
    "en": "Breakfast stops"
  },
  "compactJava": {
    "ko": "Hubertus · 커피, 키시, 에그 샌드위치.",
    "en": "Hubertus · Coffee, quiche, egg sandwiches."
  },
  "compactPerc": {
    "ko": "Hartford · 화요일 오후 2시까지. 6명 이상은 20% 서비스 요금이 붙어요.",
    "en": "Hartford · Tuesday breakfast until 2 pm. Groups of 6+ add 20% gratuity."
  },
  "compactAlly": {
    "ko": "Menomonee Falls · 월·화요일 아침 7–11시. 일요일 휴무.",
    "en": "Menomonee Falls · Monday/Tuesday breakfast 7–11 am; closed Sunday."
  },
  "compactMapNote": {
    "ko": "길찾기는 HOUSE HQ에서 출발해요. Pike Lake 도착지는 Nature Trail 주차장이에요.",
    "en": "These directions start at HOUSE HQ. Pike Lake goes to the Nature Trail parking lot."
  },
  "compactDetails": {
    "ko": "숙소와 산책로 안내",
    "en": "House & trail details"
  },
  "compactCheckIn": {
    "ko": "호스트가 안내한 체크인·체크아웃 시간을 따라 주세요. 실내 벽난로 두 곳은 장식용이에요.",
    "en": "Use the host’s confirmed check-in and checkout times. Both indoor fireplaces are decorative only."
  },
  "compactTrailWeather": {
    "ko": "Pike Lake는 출발 전에 보행 가능 여부를 확인하세요. 눈이 있으면 Blue Trail을 스키 코스로 사용해요. 진흙이나 얼음이 있으면 숙소에서 쉬어도 좋아요. 차량 입장권이 필요해요.",
    "en": "For Pike Lake, check walking access before going: snow can turn the Blue Trail into a ski trail. Mud or ice may change the plan. Vehicle admission is required."
  },
  "compactSources": {
    "ko": "영업시간과 이용 안내는 2026년 10월 20일 확인했어요. 여행 전에 다시 확인해 주세요.",
    "en": "Hours and access checked October 20, 2026. Recheck before the trip."
  },
  "compactNotesLink": {
    "ko": "자세한 여행 메모",
    "en": "Full planning notes"
  },
  "archiveTitle": {
    "ko": "여행 계와 여행 기록",
    "en": "Travel fund & trip archive"
  },
  "archiveIntro": {
    "ko": "여행 계 내역, 지난 여행과 이전 계획 메모.",
    "en": "The fund, past trips, and earlier planning notes."
  },
  "currentTrip": {
    "ko": "이번 여행 →",
    "en": "Current trip →"
  }
};
  const valid = value => value === 'en' || value === 'ko';
  let saved;
  try { saved = localStorage.getItem('gye-language'); } catch (_) {}
  const requested = new URLSearchParams(location.search).get('lang');
  let language = valid(requested) ? requested : valid(saved) ? saved : 'ko';
  function t(key) {
    if (!messages[key]) throw new Error('Missing translation: ' + key);
    return messages[key][language];
  }
  function syncLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
      const raw = link.getAttribute('href');
      if (raw.startsWith('#')) return;
      const url = new URL(raw, location.href);
      if (url.origin === location.origin && /\.html$/.test(url.pathname)) {
        url.searchParams.set('lang', language);
        link.href = url.href;
      }
    });
  }
  function apply() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    ['aria-label', 'title', 'alt', 'content'].forEach(attr => {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(el => el.setAttribute(attr, t(el.getAttribute('data-i18n-' + attr))));
    });
    document.querySelectorAll('[data-language-switch]').forEach(group => {
      group.setAttribute('aria-label', t('language'));
      group.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    });
    syncLinks();
  }
  function setLanguage(value) {
    if (!valid(value)) return;
    language = value;
    try { localStorage.setItem('gye-language', value); } catch (_) {}
    try { const url = new URL(location.href); url.searchParams.set('lang', value); history.replaceState(null, '', url); } catch (_) {}
    apply();
    document.dispatchEvent(new CustomEvent('languagechange', {detail: value}));
    syncLinks();
  }
  window.I18n = {get language() { return language; }, t, apply, setLanguage, syncLinks};
  document.documentElement.lang = language;
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
    apply();
  });
})();
