// Madison Activities Data
var lang = "ko"; // default to Korean

const activities = [
  // OUTDOOR
  {
    name: "Henry Vilas Zoo", nameKo: "헨리 빌라스 동물원",
    category: "outdoor", weather: "fair",
    description: "Free admission every day. Tigers, polar bears, bison, red pandas, and two playgrounds.",
    descriptionKo: "매일 무료 입장. 호랑이, 북극곰, 들소, 레서판다, 놀이터 2개.",
    distance: "10 min drive", distanceKo: "차로 10분",
    address: "702 S Randall Ave",
    url: "https://www.henryvilaszoo.gov/",
    image: "assets/images/activities/henry-vilas-zoo.jpg",
    tags: ["free", "kid-friendly"],
    hours: "매일 9:30am - 5pm"
  },
  {
    name: "Olbrich Botanical Gardens", nameKo: "올브리치 식물원",
    category: "outdoor", weather: "any",
    description: "16 acres of gardens on Lake Monona. The Bolz Conservatory is a tropical oasis with waterfall, birds, and fish. Small fee for conservatory.",
    descriptionKo: "모노나 호수변 식물원. 볼츠 온실은 폭포, 새, 물고기가 있는 열대 온실. 온실 소액 입장료.",
    distance: "7 min drive", distanceKo: "차로 7분",
    address: "3330 Atwood Ave",
    url: "https://www.olbrich.org/",
    image: "assets/images/activities/olbrich-gardens.jpg",
    tags: ["kid-friendly"],
    hours: "매일 10am - 4pm"
  },
  {
    name: "Tenney Park", nameKo: "테니 공원",
    category: "outdoor", weather: "fair",
    description: "Two playgrounds, a beach, and the famous Tenney Lock. Great for running around.",
    descriptionKo: "놀이터 2개, 해변, 유명한 테니 수문. 아이들이 뛰어놀기 좋은 곳.",
    distance: "10 min drive", distanceKo: "차로 10분",
    address: "402 N Thornton Ave",
    url: null,
    image: "assets/images/activities/tenney-park.jpg",
    tags: ["free", "kid-friendly"],
    hours: "일출~일몰"
  },
  {
    name: "Lake Monona Shoreline Walk", nameKo: "모노나 호수 산책",
    category: "outdoor", weather: "fair",
    description: "The lakefront path runs right near the house. Walk south along the shore for lake views and small parks.",
    descriptionKo: "숙소 바로 옆 호숫가 산책로. 남쪽으로 걸으면 호수 전망과 작은 공원들.",
    distance: "Walk from house", distanceKo: "숙소에서 도보",
    address: "Jenifer St lakefront",
    url: null,
    image: "assets/images/activities/lake-monona.jpg",
    tags: ["free", "walkable"],
    hours: "항상 개방"
  },
  {
    name: "Picnic Point", nameKo: "피크닉 포인트",
    category: "outdoor", weather: "fair",
    description: "A narrow peninsula jutting into Lake Mendota on the UW campus. A 1.5 mile round-trip walk through woods with lake views on both sides.",
    descriptionKo: "멘도타 호수로 뻗어나간 반도. 왕복 2.4km 숲길 산책, 양쪽으로 호수 전망.",
    distance: "15 min drive", distanceKo: "차로 15분",
    address: "2000 University Bay Dr",
    url: null,
    image: "assets/images/activities/picnic-point.jpg",
    tags: ["free", "kid-friendly"],
    hours: "매일 6am - 10pm"
  },
  {
    name: "UW-Madison Campus Walk", nameKo: "위스콘신 대학교 캠퍼스 투어",
    category: "outdoor", weather: "fair",
    description: "Walk the beautiful UW-Madison campus. Bascom Hill, the Red Gym, Memorial Union Terrace (great for sitting by the lake).",
    descriptionKo: "아름다운 위스콘신 대학교 캠퍼스 산책. 바스컴 힐, 레드 짐, 메모리얼 유니온 테라스(호숫가 휴식).",
    distance: "10 min drive", distanceKo: "차로 10분",
    address: "716 Langdon St (Memorial Union)",
    url: null,
    image: "assets/images/activities/uw-campus.jpg",
    tags: ["free"],
    hours: "항상 개방"
  },
  {
    name: "Union South", nameKo: "유니온 사우스",
    category: "outdoor", weather: "any",
    description: "UW's newer student union with climbing wall, bowling, billiards, and dining. The Sett recreation area is fun for kids.",
    descriptionKo: "위스콘신 대학교 학생회관. 클라이밍 월, 볼링, 당구, 식당. 더 셋 레크리에이션 공간은 아이들에게 인기.",
    distance: "10 min drive", distanceKo: "차로 10분",
    address: "1308 W Dayton St",
    url: null,
    image: "assets/images/activities/union-south.jpg",
    tags: ["kid-friendly"],
    hours: "매일 7am-midnight"
  },

  // INDOOR
  {
    name: "UW Geology Museum", nameKo: "위스콘신 대학교 지질박물관",
    category: "indoor", weather: "rainy",
    description: "Free museum with dinosaur skeletons, minerals, fossils, and a glowing fluorescent rock room. Great for kids.",
    descriptionKo: "무료 박물관. 공룡 화석, 광물, 형광 암석 전시실. 아이들에게 인기.",
    distance: "10 min drive", distanceKo: "차로 10분",
    address: "1215 W Dayton St",
    url: "https://geologymuseum.wisc.edu/",
    image: "assets/images/activities/geology-museum.jpg",
    tags: ["free", "kid-friendly"],
    hours: "월-금 8:30am-4:30pm, 토 9am-1pm"
  },
  {
    name: "Madison Children's Museum", nameKo: "매디슨 어린이 박물관",
    category: "indoor", weather: "rainy",
    description: "Hands-on exhibits across multiple floors. Rooftop garden with animals. Open Sunday only (closed Mon-Tue during our trip).",
    descriptionKo: "다층 체험형 전시관. 옥상 정원에 동물들. 일요일만 개관 (월-화 휴관으로 여행 중 일요일만 가능).",
    distance: "8 min drive", distanceKo: "차로 8분",
    address: "100 N Hamilton St",
    url: "https://madisonchildrensmuseum.org/",
    image: "assets/images/activities/childrens-museum.jpg",
    tags: ["kid-friendly"],
    hours: "수-일 9am - 4pm (월·화 휴관)"
  },
  {
    name: "Wisconsin State Capitol Tour", nameKo: "위스콘신 주청사 투어",
    category: "indoor", weather: "rainy",
    description: "Free guided tours of the beautiful state capitol building. 45-55 minutes. Observation deck is summer only.",
    descriptionKo: "아름다운 주청사 무료 가이드 투어. 45-55분 소요. 전망대는 여름만 운영.",
    distance: "8 min drive", distanceKo: "차로 8분",
    address: "2 E Main St",
    url: "https://tours.wisconsin.gov/",
    image: "assets/images/activities/state-capitol.jpg",
    tags: ["free", "kid-friendly"],
    hours: "월-토 매시 9am-3pm, 일 1-3pm"
  },
  {
    name: "Chazen Museum of Art", nameKo: "차젠 미술관",
    category: "indoor", weather: "rainy",
    description: "Second-largest art collection in Wisconsin. Free admission. On the UW-Madison campus.",
    descriptionKo: "위스콘신주 두 번째로 큰 미술 컬렉션. 무료 입장. 위스콘신 대학교 캠퍼스 내.",
    distance: "10 min drive", distanceKo: "차로 10분",
    address: "750 University Ave",
    url: "https://chazen.wisc.edu/",
    image: "assets/images/activities/chazen-museum.jpg",
    tags: ["free"],
    hours: "월-금 10am-7pm, 토-일 11am-5pm"
  },

  // FOOD - KOREAN
  {
    name: "New Seoul Korean", nameKo: "뉴서울",
    category: "food", weather: "any",
    description: "Madison's longtime favorite Korean restaurant. Rock cooker bibimbap, bulgogi, kimbap, tteokbokki. Best of Madison winner.",
    descriptionKo: "매디슨 최고 한식당. 돌솥비빔밥, 불고기, 김밥, 떡볶이. Best of Madison 수상.",
    distance: "15 min drive", distanceKo: "차로 15분",
    address: "721 N High Point Rd",
    url: "https://newseoulmadison.com/",
    image: "assets/images/activities/new-seoul.jpg",
    tags: ["kid-friendly", "korean"],
    hours: "월 11am-1:30pm & 5-8pm, 수-토 동일, 화 저녁만, 일 휴무"
  },
  {
    name: "SGD Dubu Tofu & Korean BBQ", nameKo: "소공동 순두부",
    category: "food", weather: "any",
    description: "Signature sundubu jjigae on State Street. Also Korean BBQ and bibimbap. Closed Tuesdays (March 24).",
    descriptionKo: "스테이트 스트릿 순두부찌개 전문점. 한식 바베큐, 비빔밥도 있음. 화요일 휴무 (3/24).",
    distance: "8 min drive", distanceKo: "차로 8분",
    address: "559 State St",
    url: "https://www.sgdrestaurant.com/",
    image: "assets/images/activities/sgd-dubu.jpg",
    tags: ["korean"],
    hours: "월, 수-일 11am-9pm (화 휴무)"
  },
  {
    name: "Sol's On the Square", nameKo: "솔스 온 더 스퀘어",
    category: "food", weather: "any",
    description: "Korean classics just off the Capitol Square. Bibimbap, bulgogi, seafood pancake, kimchi soup.",
    descriptionKo: "캐피톨 스퀘어 근처 한식당. 비빔밥, 불고기, 해물파전, 김치찌개. 예약 가능.",
    distance: "8 min drive", distanceKo: "차로 8분",
    address: "117 E Mifflin St",
    url: null,
    image: "assets/images/activities/sols-square.jpg",
    tags: ["kid-friendly", "korean"],
    hours: "점심 월-토 11am-2:30pm, 저녁 월-토 4:30pm+"
  },
  {
    name: "Korill Hut Korean BBQ & Hot Pot", nameKo: "코릴 헛 한식뷔페",
    category: "food", weather: "any",
    description: "All-you-can-eat Korean BBQ and hot pot. Grill at your table. Fun interactive format for kids.",
    descriptionKo: "한식 바베큐 & 샤브샤브 무한리필. 테이블에서 직접 구워 먹는 재미. 아이들에게 인기.",
    distance: "15 min drive", distanceKo: "차로 15분",
    address: "232 East Towne Way",
    url: "https://www.korillhut.com/",
    image: "assets/images/activities/korill-hut.jpg",
    tags: ["kid-friendly", "korean"],
    hours: "매일 11:30am-10pm, 금-토 11pm까지"
  },
  {
    name: "K-Peppers", nameKo: "케이페퍼스",
    category: "food", weather: "any",
    description: "Small, stylish Korean spot known for rock cooker bibimbap and Korean BBQ. Opened in 2009 by a couple from Busan. Vegetarian and gluten-free options.",
    descriptionKo: "돌솥비빔밥과 한식 바베큐로 유명한 한식당. 부산 출신 부부가 2009년 오픈. 채식 및 글루텐프리 옵션.",
    distance: "20 min drive", distanceKo: "차로 20분",
    address: "601 Junction Rd",
    url: "http://www.k-peppers.com/",
    image: "assets/images/activities/kpeppers.jpg",
    tags: ["kid-friendly", "korean"],
    hours: "화-금 11am-1:30pm & 5-8:30pm, 토 5-8:30pm (일·월 휴무)"
  },
  {
    name: "5 Star Korean BBQ", nameKo: "5스타 코리안 바베큐",
    category: "food", weather: "any",
    description: "Bibimbap, bulgogi, jajangmyeon, fried dumplings, kimchi jjigae. Broad menu at various spice levels.",
    descriptionKo: "비빔밥, 불고기, 짜장면, 군만두, 김치찌개. 다양한 매운맛 단계의 풍부한 메뉴.",
    distance: "8 min drive", distanceKo: "차로 8분",
    address: "605 E Washington Ave",
    url: "https://5starkoreanbbq.com/",
    image: "assets/images/activities/five-star-bbq.jpg",
    tags: ["korean"],
    hours: "화-목 3:30-9pm, 금-토 11am-9pm, 일 11am-8:30pm (월 휴무)"
  },

  // FOOD - OTHER
  {
    name: "Lazy Jane's Cafe & Bakery", nameKo: "레이지 제인스 카페",
    category: "food", weather: "any",
    description: "Beloved Willy Street breakfast and brunch spot. Right in the neighborhood.",
    descriptionKo: "윌리 스트릿의 인기 브런치 카페. 숙소 근처.",
    distance: "3 min walk", distanceKo: "도보 3분",
    address: "1358 Williamson St",
    url: "https://www.lazyjanes.com/",
    image: "assets/images/activities/lazy-janes.jpg",
    tags: ["walkable", "kid-friendly"],
    hours: "월-금 7am-2pm, 토-일 8am-2pm"
  },
  {
    name: "Tex Tubb's Taco Palace", nameKo: "텍스 텁스 타코",
    category: "food", weather: "any",
    description: "Austin-style taco joint on Atwood Ave. Fun, family-friendly atmosphere.",
    descriptionKo: "오스틴 스타일 타코 전문점. 가족 친화적인 분위기.",
    distance: "5 min drive", distanceKo: "차로 5분",
    address: "2009 Atwood Ave",
    url: "https://www.textubbstacos.com/",
    image: "assets/images/activities/tex-tubbs.jpg",
    tags: ["kid-friendly"],
    hours: "일-목 11:30am-8:30pm, 금-토 11:30am-10pm"
  },
  {
    name: "Ian's Pizza", nameKo: "이안스 피자",
    category: "food", weather: "any",
    description: "Famous for creative slices (mac and cheese pizza, etc.). A Madison institution on State Street.",
    descriptionKo: "독창적인 피자로 유명 (맥앤치즈 피자 등). 스테이트 스트릿의 매디슨 명물.",
    distance: "8 min drive", distanceKo: "차로 8분",
    address: "100 State St",
    url: "https://ianspizza.com/",
    image: "assets/images/activities/ians-pizza.jpg",
    tags: ["kid-friendly"],
    hours: "월-수 11am-10pm, 목-토 11am-2am, 일 11am-10pm"
  },

  // NEIGHBORHOOD
  {
    name: "Willy Street Stroll", nameKo: "윌리 스트릿 산책",
    category: "neighborhood", weather: "fair",
    description: "Williamson Street is a 10-block stretch of shops, cafes, and character. Thrift stores, bookshops, the co-op, and coffee.",
    descriptionKo: "윌리엄슨 스트릿은 10블록에 걸친 상점, 카페, 개성 넘치는 거리. 중고 가게, 서점, 협동조합, 커피숍.",
    distance: "Walk from house", distanceKo: "숙소에서 도보",
    address: "Williamson St corridor",
    url: null,
    image: "assets/images/activities/willy-street.jpg",
    tags: ["free", "walkable"],
    hours: "상점마다 다름"
  },
  {
    name: "State Street", nameKo: "스테이트 스트릿",
    category: "outdoor", weather: "fair",
    description: "Madison's famous pedestrian street connecting the Capitol to UW campus. Shops, restaurants, and people-watching for 8 blocks.",
    descriptionKo: "주청사에서 대학교까지 이어지는 매디슨의 유명한 보행자 전용 거리. 8블록의 상점, 식당, 거리 구경.",
    distance: "8 min drive", distanceKo: "차로 8분",
    address: "State St (Capitol to campus)",
    url: null,
    image: "assets/images/activities/state-street.jpg",
    tags: ["free"],
    hours: "항상 개방"
  },
  {
    name: "West High School", nameKo: "웨스트 고등학교",
    category: "outdoor", weather: "fair",
    description: "Drive by and see the school.",
    descriptionKo: "학교 앞을 지나가며 구경.",
    distance: "10 min drive", distanceKo: "차로 10분",
    address: "30 Ash St",
    url: null,
    image: "assets/images/activities/west-high.jpg",
    tags: ["free"],
    hours: "드라이브"
  },
  {
    name: "Willy Street Co-op", nameKo: "윌리 스트릿 협동조합",
    category: "neighborhood", weather: "any",
    description: "Community grocery co-op with a great deli counter, prepared foods, and baked goods.",
    descriptionKo: "동네 협동조합 마켓. 좋은 델리 카운터, 반찬, 빵류. 점심이나 간식 사기 좋음.",
    distance: "2 min walk", distanceKo: "도보 2분",
    address: "1221 Williamson St",
    url: "https://www.willystreet.coop/",
    image: "assets/images/activities/willy-coop.jpg",
    tags: ["walkable", "kid-friendly"],
    hours: "매일 7:30am - 9pm"
  }
];

const categoryInfo = {
  outdoor:      { label: "Outdoors", labelKo: "야외 활동", color: "var(--forest)" },
  indoor:       { label: "Indoors / Rainy Day", labelKo: "실내 / 비 오는 날", color: "var(--coral)" },
  food:         { label: "Food", labelKo: "먹거리", color: "var(--gold)" },
  neighborhood: { label: "Neighborhood", labelKo: "동네 산책", color: "var(--gray-600)" }
};

const tagLabels = {
  "free": { en: "free", ko: "무료" },
  "kid-friendly": { en: "kid-friendly", ko: "아이 OK" },
  "walkable": { en: "walkable", ko: "도보" },
  "korean": { en: "korean", ko: "한식" }
};

const tagColors = {
  "free": "var(--forest)",
  "kid-friendly": "var(--coral)",
  "walkable": "var(--gray-600)",
  "korean": "#d94f70"
};

const weatherLabels = {
  rainy: { en: "Indoor", ko: "실내" },
  any:   { en: "Rain or shine", ko: "날씨 무관" },
  fair:  { en: "Fair weather", ko: "맑은 날" }
};

const filterLabels = {
  all:          { en: "All", ko: "전체" },
  outdoor:      { en: "Outdoors", ko: "야외" },
  indoor:       { en: "Indoors", ko: "실내" },
  food:         { en: "Food", ko: "먹거리" },
  neighborhood: { en: "Neighborhood", ko: "동네" }
};

// State
var activeCategory = "all";
var rainyOnly = false;

// Init
document.addEventListener("DOMContentLoaded", function() {
  renderActivities();
  setupFilters();
  setupLangToggle();
  fetchWeather();
  updateLangUI();
});

// Language toggle
function setupLangToggle() {
  var btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", function() {
      lang = lang === "ko" ? "en" : "ko";
      btn.innerHTML = lang === "ko"
        ? '<span class="lang-flag">\u{1F1FA}\u{1F1F8}</span> ENG'
        : '<span class="lang-flag">\u{1F1F0}\u{1F1F7}</span> 한국어';
      renderActivities();
      filterActivities();
      updateLangUI();
    });
  }
}

function updateLangUI() {
  // Update filter pills
  document.querySelectorAll(".filter-pill").forEach(function(pill) {
    var cat = pill.dataset.category;
    if (filterLabels[cat]) {
      pill.textContent = filterLabels[cat][lang];
    }
  });
  // Update weather toggle label
  var toggleLabel = document.getElementById("rainy-label");
  if (toggleLabel) {
    toggleLabel.textContent = lang === "ko" ? "비 와도 OK" : "Rain-friendly only";
  }
  // Update hero
  var heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.textContent = lang === "ko" ? "매디슨에서 할 거리" : "Things to Do in Madison";
  }
}

// Weather via Open-Meteo (free, no API key)
function fetchWeather() {
  var widget = document.getElementById("weather-widget");
  fetch("https://api.open-meteo.com/v1/forecast?latitude=43.0731&longitude=-89.4012&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America/Chicago")
    .then(function(res) { return res.json(); })
    .then(function(data) {
      var temp = Math.round(data.current.temperature_2m);
      var code = data.current.weather_code;
      var desc = weatherCodeToText(code);
      widget.innerHTML = '<span class="weather-temp">' + temp + '\u00B0F</span><span class="weather-desc">' + desc + '</span>';
    })
    .catch(function() {
      widget.innerHTML = '<span class="weather-desc">Weather unavailable</span>';
    });
}

function weatherCodeToText(code) {
  if (code === 0) return lang === "ko" ? "맑음" : "Clear";
  if (code <= 3) return lang === "ko" ? "구름 조금" : "Partly cloudy";
  if (code <= 49) return lang === "ko" ? "안개" : "Foggy";
  if (code <= 59) return lang === "ko" ? "이슬비" : "Drizzle";
  if (code <= 69) return lang === "ko" ? "비" : "Rain";
  if (code <= 79) return lang === "ko" ? "눈" : "Snow";
  if (code <= 82) return lang === "ko" ? "소나기" : "Rain showers";
  if (code <= 86) return lang === "ko" ? "눈보라" : "Snow showers";
  if (code >= 95) return lang === "ko" ? "뇌우" : "Thunderstorm";
  return lang === "ko" ? "흐림" : "Cloudy";
}

function renderActivities() {
  var container = document.getElementById("activity-container");
  container.innerHTML = "";

  var categories = ["outdoor", "indoor", "food", "neighborhood"];

  categories.forEach(function(cat) {
    var catActivities = activities.filter(function(a) { return a.category === cat; });
    if (catActivities.length === 0) return;

    var info = categoryInfo[cat];

    var section = document.createElement("div");
    section.className = "category-section";
    section.dataset.category = cat;

    var header = document.createElement("div");
    header.className = "category-header";
    header.innerHTML = '<h3>' + (lang === "ko" ? info.labelKo : info.label) + '</h3>';
    section.appendChild(header);

    var grid = document.createElement("div");
    grid.className = "activity-grid";

    catActivities.forEach(function(act) {
      var card = document.createElement("div");
      card.className = "activity-card";
      card.dataset.category = cat;
      card.dataset.weather = act.weather;

      var tagsHtml = act.tags.map(function(t) {
        var color = tagColors[t] || "var(--gray-400)";
        var label = tagLabels[t] ? tagLabels[t][lang] : t;
        return '<span class="activity-tag" style="border-color:' + color + ';color:' + color + '">' + label + '</span>';
      }).join("");

      var linkHtml = act.url
        ? '<a href="' + act.url + '" target="_blank" class="activity-link">' + (lang === "ko" ? "웹사이트" : "Website") + '</a>'
        : '';

      var wl = weatherLabels[act.weather] || {};
      var weatherText = wl[lang] || "";

      var desc = lang === "ko" ? (act.descriptionKo || act.description) : act.description;
      var dist = lang === "ko" ? (act.distanceKo || act.distance) : act.distance;
      var displayName = lang === "ko" ? act.nameKo : act.name;
      var subName = lang === "ko" ? act.name : act.nameKo;

      var imageHtml = act.image
        ? '<div class="activity-image"><img src="' + act.image + '" alt="' + act.name + '" onerror="this.parentElement.style.display=\'none\'"></div>'
        : '';

      card.innerHTML =
        imageHtml +
        '<div class="activity-card-body">' +
          '<div class="activity-card-top">' +
            '<span class="activity-category-pill" style="background:' + info.color + '">' + (lang === "ko" ? info.labelKo : info.label) + '</span>' +
            '<span class="activity-weather-label">' + weatherText + '</span>' +
          '</div>' +
          '<h4 class="activity-name">' + displayName + '</h4>' +
          '<p class="activity-name-ko">' + subName + '</p>' +
          '<p class="activity-description">' + desc + '</p>' +
          '<div class="activity-meta">' +
            '<span class="activity-address">' + act.address + '</span>' +
            '<span class="activity-distance">' + dist + '</span>' +
          '</div>' +
          '<p class="activity-hours">' + act.hours + '</p>' +
          '<div class="activity-tags">' + tagsHtml + '</div>' +
          linkHtml +
        '</div>';

      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

function setupFilters() {
  var pills = document.querySelectorAll(".filter-pill");
  pills.forEach(function(pill) {
    pill.addEventListener("click", function() {
      pills.forEach(function(p) { p.classList.remove("active"); });
      pill.classList.add("active");
      activeCategory = pill.dataset.category;
      filterActivities();
    });
  });

  var toggle = document.getElementById("rainy-toggle");
  if (toggle) {
    toggle.addEventListener("change", function() {
      rainyOnly = toggle.checked;
      filterActivities();
    });
  }
}

function filterActivities() {
  document.querySelectorAll(".activity-card").forEach(function(card) {
    var cat = card.dataset.category;
    var weather = card.dataset.weather;
    var catMatch = activeCategory === "all" || cat === activeCategory;
    var weatherMatch = !rainyOnly || weather !== "fair";
    card.style.display = (catMatch && weatherMatch) ? "" : "none";
  });

  document.querySelectorAll(".category-section").forEach(function(section) {
    var sectionCat = section.dataset.category;
    var catMatch = activeCategory === "all" || sectionCat === activeCategory;
    if (!catMatch) { section.style.display = "none"; return; }
    var visibleCards = section.querySelectorAll('.activity-card:not([style*="display: none"])');
    section.style.display = visibleCards.length > 0 ? "" : "none";
  });
}
