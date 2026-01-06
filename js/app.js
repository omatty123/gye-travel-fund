// Data
const data = {
  balance: 482.25,
  interest: 19.47,
  parties: ["아버지 어머니", "Joe/Heejin/Ben", "Dominica/Matty"],
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
    { m: "2026-01", p: [0,1,1] }
  ],
  trips: [
    {
      id: "madison",
      title: "매디슨 가족 휴가",
      subtitle: "Lakefront 3BR Retreat",
      date: "2026년 3월 22일 - 24일",
      status: "upcoming",
      cost: 987.22,
      tags: ["Sauna", "Hot Tub", "Fireplace", "Lakefront"],
      address: "723 Jenifer St, Madison, WI 53703",
      photos: ["assets/images/madison-1.jpg","assets/images/madison-2.jpg","assets/images/madison-3.jpg","assets/images/madison-4.jpg"],
      memory: ""
    },
    {
      id: "milwaukee",
      title: "밀워키 - 계의 시작",
      subtitle: "Lake Dr Mansion",
      date: "2025년 3월",
      status: "completed",
      cost: 0,
      tags: [],
      address: "2210 N Lake Dr, Milwaukee, WI 53202",
      photos: ["assets/images/photo-1.jpg","assets/images/milwaukee-1.jpg","assets/images/photo-2.jpg","assets/images/milwaukee-2.jpg","assets/images/photo-3.jpg","assets/images/milwaukee-3.jpg","assets/images/photo-4.jpg","assets/images/milwaukee-4.jpg"],
      memory: "이곳에서 우리 가족 여행 계가 시작되었습니다"
    }
  ]
};

// Init
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("balance").textContent = "$" + data.balance.toFixed(2);

  // Countdown
  const tripDate = new Date("2026-03-22");
  const days = Math.floor((tripDate - new Date()) / 86400000);
  document.getElementById("countdown").textContent = days > 0 ? "D-" + days : "NOW";
  document.getElementById("next-trip-label").textContent = "매디슨";

  // Parties
  document.getElementById("p1").textContent = data.parties[0];
  document.getElementById("p2").textContent = data.parties[1];
  document.getElementById("p3").textContent = data.parties[2];

  renderTrips();
  renderLedger();
});

// Trips
function renderTrips() {
  const container = document.getElementById("trips-container");

  data.trips.forEach(trip => {
    const card = document.createElement("div");
    card.className = "card";

    const tags = trip.tags.map(t => '<span class="card-tag">' + t + '</span>').join("");
    const dots = trip.photos.map((_, i) => '<span class="card-dot' + (i===0?' active':'') + '"></span>').join("");

    card.innerHTML =
      '<div class="card-img" onclick="cycleImg(\'' + trip.id + '\')">' +
        '<img id="img-' + trip.id + '" src="' + trip.photos[0] + '">' +
        '<span class="card-badge ' + trip.status + '">' + (trip.status === "upcoming" ? "UPCOMING" : "COMPLETED") + '</span>' +
        '<div class="card-dots">' + dots + '</div>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-title">' + trip.title + '</div>' +
        '<div class="card-subtitle">' + trip.subtitle + '</div>' +
        '<div class="card-date">' + trip.date + '</div>' +
        (tags ? '<div class="card-tags">' + tags + '</div>' : '') +
        (trip.cost ? '<div class="card-price"><strong>$' + trip.cost.toFixed(2) + '</strong> total</div>' : '') +
        '<div class="card-map">' +
          '<iframe src="https://maps.google.com/maps?q=' + encodeURIComponent(trip.address) + '&z=14&output=embed" loading="lazy"></iframe>' +
          '<div class="card-address">' + trip.address + '</div>' +
        '</div>' +
        (trip.memory ? '<div class="card-memory">' + trip.memory + '</div>' : '') +
      '</div>';

    container.appendChild(card);
  });
}

// Image cycling
const imgIdx = {};
function cycleImg(id) {
  const trip = data.trips.find(t => t.id === id);
  imgIdx[id] = ((imgIdx[id] || 0) + 1) % trip.photos.length;
  document.getElementById("img-" + id).src = trip.photos[imgIdx[id]];

  const card = document.getElementById("img-" + id).closest(".card");
  card.querySelectorAll(".card-dot").forEach((d, i) => {
    d.className = "card-dot" + (i === imgIdx[id] ? " active" : "");
  });
}

// Ledger
function renderLedger() {
  const tbody = document.getElementById("ledger-body");
  let total = 0;

  const months = {"01":"1월","02":"2월","03":"3월","04":"4월","05":"5월","06":"6월","07":"7월","08":"8월","09":"9월","10":"10월","11":"11월","12":"12월"};

  data.contributions.forEach(c => {
    const [y, m] = c.m.split("-");
    const paid = c.p.reduce((a,b) => a+b, 0) * 50;
    total += paid;

    const row = document.createElement("tr");
    row.innerHTML =
      '<td class="month">' + y.slice(2) + '년 ' + months[m] + '</td>' +
      '<td class="' + (c.p[0] ? 'check' : 'miss') + '">' + (c.p[0] ? '✓' : '—') + '</td>' +
      '<td class="' + (c.p[1] ? 'check' : 'miss') + '">' + (c.p[1] ? '✓' : '—') + '</td>' +
      '<td class="' + (c.p[2] ? 'check' : 'miss') + '">' + (c.p[2] ? '✓' : '—') + '</td>' +
      '<td class="bal">$' + total + '</td>';
    tbody.appendChild(row);
  });

  // Interest
  total += data.interest;
  const iRow = document.createElement("tr");
  iRow.className = "row-interest";
  iRow.innerHTML = '<td class="month">2025 이자 (연이자)</td><td></td><td></td><td>+$' + data.interest + '</td><td class="bal">$' + total + '</td>';
  tbody.appendChild(iRow);

  // Madison expense
  const madison = data.trips.find(t => t.id === "madison");
  if (madison && madison.cost) {
    total -= madison.cost;
    const eRow = document.createElement("tr");
    eRow.className = "row-expense";
    eRow.innerHTML = '<td class="month">매디슨 숙소</td><td></td><td></td><td></td><td class="bal expense">-$' + madison.cost.toFixed(2) + '</td>';
    tbody.appendChild(eRow);
  }

  // Total
  const tRow = document.createElement("tr");
  tRow.className = "row-total";
  tRow.innerHTML = '<td class="month">잔액</td><td></td><td></td><td></td><td class="bal total-bal">$' + total.toFixed(2) + '</td>';
  tbody.appendChild(tRow);
}
