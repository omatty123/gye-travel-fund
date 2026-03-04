// Madison Activities Data
const activities = [
  // OUTDOOR
  {
    name: "Henry Vilas Zoo",
    nameKo: "헨리 빌라스 동물원",
    category: "outdoor",
    weather: "fair",
    description: "Free admission every day. Tigers, polar bears, bison, red pandas, and two playgrounds.",
    distance: "10 min drive",
    address: "702 S Randall Ave",
    url: "https://www.henryvilaszoo.gov/",
    tags: ["free", "kid-friendly"],
    hours: "Daily 9:30am - 5pm"
  },
  {
    name: "Olbrich Botanical Gardens",
    nameKo: "올브리치 식물원",
    category: "outdoor",
    weather: "any",
    description: "16 acres of gardens on the shore of Lake Monona. The Bolz Conservatory is a year-round tropical oasis with a waterfall, birds, and fish. Small fee for conservatory.",
    distance: "7 min drive",
    address: "3330 Atwood Ave",
    url: "https://www.olbrich.org/",
    tags: ["kid-friendly"],
    hours: "Daily 10am - 4pm"
  },
  {
    name: "Tenney Park",
    nameKo: "테니 공원",
    category: "outdoor",
    weather: "fair",
    description: "Two playgrounds, a beach, and the famous Tenney Lock. Great for running around.",
    distance: "10 min drive",
    address: "402 N Thornton Ave",
    url: null,
    tags: ["free", "kid-friendly"],
    hours: "Dawn to dusk"
  },
  {
    name: "Lake Monona Shoreline Walk",
    nameKo: "모노나 호수 산책",
    category: "outdoor",
    weather: "fair",
    description: "The lakefront path runs right near the house. Walk south along the shore for lake views and small parks.",
    distance: "Walk from house",
    address: "Jenifer St lakefront",
    url: null,
    tags: ["free", "walkable"],
    hours: "Always open"
  },

  // INDOOR
  {
    name: "Madison Children's Museum",
    nameKo: "매디슨 어린이 박물관",
    category: "indoor",
    weather: "rainy",
    description: "Hands-on exhibits across multiple floors. Rooftop garden with animals. Free admission Thursdays 4-8pm.",
    distance: "8 min drive",
    address: "100 N Hamilton St",
    url: "https://madisonchildrensmuseum.org/",
    tags: ["kid-friendly"],
    hours: "Wed-Sun 9am - 4pm"
  },
  {
    name: "Wisconsin State Capitol Tour",
    nameKo: "위스콘신 주청사 투어",
    category: "indoor",
    weather: "rainy",
    description: "Free guided tours of the beautiful state capitol building. 45-55 minutes. Note: observation deck is summer only.",
    distance: "8 min drive",
    address: "2 E Main St",
    url: "https://tours.wisconsin.gov/",
    tags: ["free", "kid-friendly"],
    hours: "Mon-Sat hourly 9am-3pm, Sun 1-3pm"
  },
  {
    name: "Chazen Museum of Art",
    nameKo: "차젠 미술관",
    category: "indoor",
    weather: "rainy",
    description: "Second-largest art collection in Wisconsin. Free admission. On the UW-Madison campus.",
    distance: "10 min drive",
    address: "750 University Ave",
    url: "https://chazen.wisc.edu/",
    tags: ["free"],
    hours: "Mon-Fri 10am-7pm, Sat-Sun 11am-5pm"
  },

  // FOOD
  {
    name: "Lazy Jane's Cafe & Bakery",
    nameKo: "레이지 제인스 카페",
    category: "food",
    weather: "any",
    description: "Beloved Willy Street breakfast and brunch spot. Right in the neighborhood.",
    distance: "3 min walk",
    address: "1358 Williamson St",
    url: "https://www.lazyjanes.com/",
    tags: ["walkable", "kid-friendly"],
    hours: "Mon-Fri 7am-2pm, Sat-Sun 8am-2pm"
  },
  {
    name: "Tex Tubb's Taco Palace",
    nameKo: "텍스 텁스 타코",
    category: "food",
    weather: "any",
    description: "Austin-style taco joint on Atwood Ave. Fun, family-friendly atmosphere.",
    distance: "5 min drive",
    address: "2009 Atwood Ave",
    url: "https://www.textubbstacos.com/",
    tags: ["kid-friendly"],
    hours: "Sun-Thu 11:30am-8:30pm, Fri-Sat 11:30am-10pm"
  },
  {
    name: "Ian's Pizza",
    nameKo: "이안스 피자",
    category: "food",
    weather: "any",
    description: "Famous for creative slices (mac and cheese pizza, etc.). A Madison institution on State Street.",
    distance: "8 min drive",
    address: "100 State St",
    url: "https://ianspizza.com/",
    tags: ["kid-friendly"],
    hours: "Mon-Wed 11am-10pm, Thu-Sat 11am-2am, Sun 11am-10pm"
  },

  // NEIGHBORHOOD
  {
    name: "Willy Street Stroll",
    nameKo: "윌리 스트릿 산책",
    category: "neighborhood",
    weather: "fair",
    description: "Williamson Street is a 10-block stretch of shops, cafes, and character. Thrift stores, bookshops, the co-op, and coffee.",
    distance: "Walk from house",
    address: "Williamson St corridor",
    url: null,
    tags: ["free", "walkable"],
    hours: "Varies by shop"
  },
  {
    name: "Willy Street Co-op",
    nameKo: "윌리 스트릿 협동조합",
    category: "neighborhood",
    weather: "any",
    description: "Community grocery co-op with a great deli counter, prepared foods, and baked goods. Good for grabbing lunch or snacks.",
    distance: "2 min walk",
    address: "1221 Williamson St",
    url: "https://www.willystreet.coop/",
    tags: ["walkable", "kid-friendly"],
    hours: "Daily 7:30am - 9pm"
  }
];

const categoryInfo = {
  outdoor:      { label: "Outdoors", labelKo: "야외", color: "var(--forest)" },
  indoor:       { label: "Indoors / Rainy Day", labelKo: "실내 / 비 오는 날", color: "var(--coral)" },
  food:         { label: "Food", labelKo: "먹거리", color: "var(--gold)" },
  neighborhood: { label: "Walk from House", labelKo: "동네 산책", color: "var(--gray-600)" }
};

const tagColors = {
  "free": "var(--forest)",
  "kid-friendly": "var(--coral)",
  "walkable": "var(--gray-600)"
};

// State
let activeCategory = "all";
let rainyOnly = false;

// Init
document.addEventListener("DOMContentLoaded", function() {
  renderActivities();
  setupFilters();
});

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
    header.innerHTML =
      '<h3>' + info.label + ' <span class="category-header-ko">' + info.labelKo + '</span></h3>';
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
        return '<span class="activity-tag" style="border-color:' + color + ';color:' + color + '">' + t + '</span>';
      }).join("");

      var linkHtml = act.url
        ? '<a href="' + act.url + '" target="_blank" class="activity-link">Visit Website</a>'
        : '';

      var weatherIcon = act.weather === "rainy" ? "Indoor" : act.weather === "any" ? "Rain or shine" : "Fair weather";

      card.innerHTML =
        '<div class="activity-card-top">' +
          '<span class="activity-category-pill" style="background:' + info.color + '">' + info.label + '</span>' +
          '<span class="activity-weather-label">' + weatherIcon + '</span>' +
        '</div>' +
        '<h4 class="activity-name">' + act.name + '</h4>' +
        '<p class="activity-name-ko">' + act.nameKo + '</p>' +
        '<p class="activity-description">' + act.description + '</p>' +
        '<div class="activity-meta">' +
          '<span class="activity-address">' + act.address + '</span>' +
          '<span class="activity-distance">' + act.distance + '</span>' +
        '</div>' +
        '<p class="activity-hours">' + act.hours + '</p>' +
        '<div class="activity-tags">' + tagsHtml + '</div>' +
        linkHtml;

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
  // Filter cards
  document.querySelectorAll(".activity-card").forEach(function(card) {
    var cat = card.dataset.category;
    var weather = card.dataset.weather;

    var catMatch = activeCategory === "all" || cat === activeCategory;
    var weatherMatch = !rainyOnly || weather !== "fair";

    card.style.display = (catMatch && weatherMatch) ? "" : "none";
  });

  // Toggle section visibility
  document.querySelectorAll(".category-section").forEach(function(section) {
    var sectionCat = section.dataset.category;
    var catMatch = activeCategory === "all" || sectionCat === activeCategory;

    if (!catMatch) {
      section.style.display = "none";
      return;
    }

    var visibleCards = section.querySelectorAll('.activity-card:not([style*="display: none"])');
    section.style.display = visibleCards.length > 0 ? "" : "none";
  });
}
