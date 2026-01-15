// Data
const data = {
  balance: 582.25,
  interest: 19.47,
  parties: ["아버지 어머니", "Joe/Heejin/Ben", "Dominica/Matty"],
  partiesShort: ["부모님", "Joe", "Dom"],
  contributions: [
    { m: "2025-04", p: [1,1,1] },
    { m: "2025-05", p: [1,1,1] },
    { m: "2025-06", p: [1,1,1] },
    { m: "2025-07", p: [1,1,1] },
    { m: "2025-08", p: [1,1,1] },
    { m: "2025-09", p: [1,1,1] },
    { m: "2025-10", p: [1,1,1] },
    { m: "2025-11", p: [1,1,1] },
    { m: "2025-12", p: [1,1,1] },
    { m: "2026-01", p: [1,1,1] },
    { m: "2026-02", p: [1,0,0] }
  ],
  trips: [
    {
      id: "madison",
      title: "매디슨 가족 휴가",
      subtitle: "",
      date: "2026년 3월 22일 - 24일",
      status: "upcoming",
      cost: 987.22,
      tags: [],
      address: "723 Jenifer St, Madison, WI 53703",
      airbnb: "https://www.airbnb.com/rooms/24139465",
      photos: ["assets/images/madison-new-1.jpg","assets/images/madison-new-2.jpg","assets/images/madison-new-3.jpg","assets/images/madison-new-4.jpg","assets/images/madison-new-5.jpg","assets/images/madison-new-6.jpg","assets/images/madison-new-7.png","assets/images/madison-new-8.jpg","assets/images/madison-new-9.jpg","assets/images/madison-1.jpg","assets/images/madison-2.jpg","assets/images/madison-3.jpg","assets/images/madison-4.jpg"]
    },
    {
      id: "milwaukee",
      title: "밀워키 - 계의 시작",
      subtitle: "",
      date: "2025년 3월 27일 - 28일",
      status: "completed",
      cost: 0,
      tags: [],
      address: "2210 N Lake Dr, Milwaukee, WI 53202",
      photos: ["assets/images/family-hero.jpg","assets/images/photo-3.jpg","assets/images/photo-4.jpg","assets/images/photo-2.jpg","assets/images/madison-external.jpg","assets/images/madison-externalangle.jpg","assets/images/madison-frontporch.jpg","assets/images/madison-livingroom.jpg","assets/images/madison-viewtolivingroom.jpg","assets/images/madison-masterbedroom.jpg","assets/images/madison-upstairslanding.jpg","assets/images/madison-staircase.jpg","assets/images/madison-steepstairs.jpg","assets/images/milwaukee-1.jpg","assets/images/milwaukee-2.jpg","assets/images/milwaukee-3.jpg","assets/images/milwaukee-4.jpg","assets/images/photo-1.jpg"],
      activities: ["<a href=\"https://milwaukeezoo.org\" target=\"_blank\">Milwaukee Zoo</a>", "<a href=\"https://maps.google.com/?q=Stone+Bowl+Grill+1958+N+Farwell+Ave+Milwaukee+WI\" target=\"_blank\">Stone Bowl Grill</a>", "Walks in the neighborhood", "<a href=\"https://www.mitchellparkdomes.com/\" target=\"_blank\">Mitchell Park Domes</a>"],
      memory: "이곳에서 우리 가족 여행 계가 시작되었습니다"
    }
  ]
};

const months = {"01":"1월","02":"2월","03":"3월","04":"4월","05":"5월","06":"6월","07":"7월","08":"8월","09":"9월","10":"10월","11":"11월","12":"12월"};
const monthsEn = {"01":"January","02":"February","03":"March","04":"April","05":"May","06":"June","07":"July","08":"August","09":"September","10":"October","11":"November","12":"December"};

// Init
document.addEventListener("DOMContentLoaded", function() {
  // Balance
  document.getElementById("balance").textContent = "$" + data.balance.toFixed(2);

  // Countdown
  const tripDate = new Date("2026-03-22");
  const days = Math.floor((tripDate - new Date()) / 86400000);
  document.getElementById("countdown").textContent = days > 0 ? "D-" + days : "NOW";
  document.getElementById("destination").textContent = "매디슨";

  // Party headers - desktop uses full names
  document.getElementById("party-1").textContent = data.parties[0];
  document.getElementById("party-2").textContent = data.parties[1];
  document.getElementById("party-3").textContent = data.parties[2];

  // Mobile party headers - use short names
  document.getElementById("mobile-party-1").textContent = data.partiesShort[0];
  document.getElementById("mobile-party-2").textContent = data.partiesShort[1];
  document.getElementById("mobile-party-3").textContent = data.partiesShort[2];

  renderTrips();
  renderLedger();
  renderMobileLedger();
});

// Trips
function renderTrips() {
  const container = document.getElementById("trip-grid");

  data.trips.forEach(trip => {
    // Extract month/year for big title
    const monthYear = trip.date.match(/(\d{4})년\s*(\d+)월/);
    const bigTitle = monthYear ? monthsEn[monthYear[2].padStart(2,'0')] + ' ' + monthYear[1] : '';

    // Create wrapper with title
    const wrapper = document.createElement("div");
    wrapper.className = "trip-wrapper";
    wrapper.innerHTML = '<div class="trip-month-title">' + bigTitle + '</div>';

    const card = document.createElement("div");
    card.className = "trip-card " + trip.status;

    const tags = trip.tags.map(t => '<span class="trip-detail-tag">' + t + '</span>').join("");
    const dots = trip.photos.map((_, i) => '<div class="image-dot' + (i===0?' active':'') + '" data-trip="'+trip.id+'" data-i="'+i+'"></div>').join("");

    card.innerHTML =
      '<div class="trip-image-container">' +
        '<div class="trip-images" id="images-' + trip.id + '">' +
          '<img src="' + trip.photos[0] + '" alt="' + trip.title + '">' +
        '</div>' +
        '<span class="trip-badge ' + trip.status + '">' + (trip.status === "upcoming" ? "Coming Up" : "Completed") + '</span>' +
        (trip.photos.length > 1 ? '<button class="image-nav prev" onclick="cycleImg(\'' + trip.id + '\',-1)">‹</button>' : '') +
        (trip.photos.length > 1 ? '<button class="image-nav next" onclick="cycleImg(\'' + trip.id + '\',1)">›</button>' : '') +
        '<div class="image-dots">' + dots + '</div>' +
      '</div>' +
      '<div class="trip-content">' +
        '<div class="trip-header-line"><span class="trip-title">' + trip.title + '</span><span class="trip-date">' + trip.date + '</span></div>' +
        '<div class="trip-info">' + trip.subtitle + (trip.tags.length ? ' · ' + trip.tags.join(' · ') : '') + '</div>' +
        (trip.cost ? '<div class="trip-price"><strong>$' + trip.cost.toFixed(2) + '</strong> total</div>' : '') +
        (trip.airbnb ? '<a href="' + trip.airbnb + '" target="_blank" class="airbnb-link">View on Airbnb</a>' : '') +
        '<div class="trip-map">' +
          '<iframe src="https://maps.google.com/maps?q=' + encodeURIComponent(trip.address) + '&z=14&output=embed" loading="lazy"></iframe>' +
          '<div class="trip-address">' + trip.address + '</div>' +
        '</div>' +
        (trip.activities ? '<div class="trip-activities"><strong>What we did:</strong> ' + trip.activities.join(' · ') + '</div>' : '') +
        (trip.memory ? '<div class="trip-memories">' + trip.memory + '</div>' : '') +
      '</div>';

    wrapper.appendChild(card);
    container.appendChild(wrapper);
  });
}

// Image cycling
const imgIdx = {};
function cycleImg(id, dir) {
  const trip = data.trips.find(t => t.id === id);
  if (!trip || trip.photos.length <= 1) return;

  dir = dir || 1;
  imgIdx[id] = imgIdx[id] || 0;
  imgIdx[id] += dir;
  if (imgIdx[id] < 0) imgIdx[id] = trip.photos.length - 1;
  if (imgIdx[id] >= trip.photos.length) imgIdx[id] = 0;

  const container = document.getElementById("images-" + id);
  container.innerHTML = '<img src="' + trip.photos[imgIdx[id]] + '" alt="' + trip.title + '">';

  document.querySelectorAll('.image-dot[data-trip="'+id+'"]').forEach((d, i) => {
    d.className = "image-dot" + (i === imgIdx[id] ? " active" : "");
  });
}

// Ledger
function renderLedger() {
  const tbody = document.getElementById("contribution-body");
  let total = 0;

  data.contributions.forEach(c => {
    const [y, m] = c.m.split("-");
    const paid = c.p.reduce((a,b) => a+b, 0) * 50;
    total += paid;

    const row = document.createElement("tr");
    row.innerHTML =
      '<td class="month-cell">' + y.slice(2) + '년 ' + months[m] + '</td>' +
      '<td><span class="' + (c.p[0] ? 'check' : 'pending') + '">' + (c.p[0] ? '✓' : '—') + '</span></td>' +
      '<td><span class="' + (c.p[1] ? 'check' : 'pending') + '">' + (c.p[1] ? '✓' : '—') + '</span></td>' +
      '<td><span class="' + (c.p[2] ? 'check' : 'pending') + '">' + (c.p[2] ? '✓' : '—') + '</span></td>' +
      '<td class="running-total">$' + total + '</td>';
    tbody.appendChild(row);
  });

  // Interest
  total += data.interest;
  const iRow = document.createElement("tr");
  iRow.className = "interest-row";
  iRow.innerHTML = '<td class="month-cell">2025 이자</td><td></td><td></td><td>+$' + data.interest.toFixed(2) + '</td><td class="running-total">$' + total.toFixed(2) + '</td>';
  tbody.appendChild(iRow);

  // Madison expense
  const madison = data.trips.find(t => t.id === "madison");
  if (madison && madison.cost) {
    total -= madison.cost;
    const eRow = document.createElement("tr");
    eRow.className = "expense-row";
    eRow.innerHTML = '<td class="month-cell">매디슨 숙소</td><td></td><td></td><td class="expense">-$' + madison.cost.toFixed(2) + '</td><td class="running-total">$' + total.toFixed(2) + '</td>';
    tbody.appendChild(eRow);
  }

  // Final
  const tRow = document.createElement("tr");
  tRow.className = "final-row";
  tRow.innerHTML = '<td class="month-cell"><strong>잔액</strong></td><td></td><td></td><td></td><td class="running-total final-total">$' + total.toFixed(2) + '</td>';
  tbody.appendChild(tRow);
}

// Mobile Ledger
function renderMobileLedger() {
  const tbody = document.getElementById("mobile-contribution-body");
  if (!tbody) return;

  let total = 0;

  data.contributions.forEach(c => {
    const [y, m] = c.m.split("-");
    const paid = c.p.reduce((a,b) => a+b, 0) * 50;
    total += paid;

    const row = document.createElement("tr");
    row.innerHTML =
      '<td class="month-cell">' + y.slice(2) + '년 ' + months[m] + '</td>' +
      '<td><span class="' + (c.p[0] ? 'check' : 'pending') + '">' + (c.p[0] ? '✓' : '—') + '</span></td>' +
      '<td><span class="' + (c.p[1] ? 'check' : 'pending') + '">' + (c.p[1] ? '✓' : '—') + '</span></td>' +
      '<td><span class="' + (c.p[2] ? 'check' : 'pending') + '">' + (c.p[2] ? '✓' : '—') + '</span></td>' +
      '<td class="running-total">$' + total + '</td>';
    tbody.appendChild(row);
  });

  // Interest
  total += data.interest;
  const iRow = document.createElement("tr");
  iRow.className = "interest-row";
  iRow.innerHTML = '<td class="month-cell">2025 이자</td><td></td><td></td><td>+$' + data.interest.toFixed(2) + '</td><td class="running-total">$' + total.toFixed(2) + '</td>';
  tbody.appendChild(iRow);

  // Madison expense
  const madison = data.trips.find(t => t.id === "madison");
  if (madison && madison.cost) {
    total -= madison.cost;
    const eRow = document.createElement("tr");
    eRow.className = "expense-row";
    eRow.innerHTML = '<td class="month-cell">매디슨 숙소</td><td></td><td></td><td class="expense">-$' + madison.cost.toFixed(2) + '</td><td class="running-total">$' + total.toFixed(2) + '</td>';
    tbody.appendChild(eRow);
  }

  // Final
  const tRow = document.createElement("tr");
  tRow.className = "final-row";
  tRow.innerHTML = '<td class="month-cell"><strong>잔액</strong></td><td></td><td></td><td></td><td class="running-total final-total">$' + total.toFixed(2) + '</td>';
  tbody.appendChild(tRow);
}
