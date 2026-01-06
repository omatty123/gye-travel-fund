// Family Travel Fund Data
const fundData = {
  startDate: "2025-03",
  monthlyAmount: 50,
  parties: ["아버지 어머니", "Joe/Heejin/Ben", "Dominica/Matty"],
  contributions: [
    { month: "2025-04", paid: [true, true, true] },
    { month: "2025-05", paid: [true, true, true] },
    { month: "2025-06", paid: [true, true, true] },
    { month: "2025-07", paid: [true, true, true] },
    { month: "2025-08", paid: [true, true, true] },
    { month: "2025-09", paid: [true, true, true] },
    { month: "2025-10", paid: [true, true, true] },
    { month: "2025-11", paid: [true, true, true] },
    { month: "2025-12", paid: [true, true, true] },
    { month: "2026-01", paid: [false, true, true] },
  ],
  currentBalance: 474.78,
  interestEarned: 12,
  trips: [
    {
      id: "milwaukee-2025",
      name: "밀워키 - 계의 시작",
      nameEn: "Milwaukee - Where It All Began",
      date: "2025-03",
      status: "completed",
      budget: 0,
      accommodation: "Lake Dr Mansion",
      address: "2210 N Lake Dr, Milwaukee, WI 53202",
      photos: [
        "assets/images/milwaukee-1.jpg",
        "assets/images/milwaukee-2.jpg",
        "assets/images/milwaukee-3.jpg",
        "assets/images/milwaukee-4.jpg"
      ],
      memories: "이곳에서 우리 가족 여행 계가 시작되었습니다"
    },
    {
      id: "madison-2026",
      name: "매디슨 가족 휴가",
      nameEn: "Madison Family Vacation",
      date: "2026-03",
      dateRange: "3월 22일 - 24일",
      status: "upcoming",
      cost: 987.22,
      accommodation: "Lakefront 3BR Retreat",
      amenities: ["Sauna", "Hot Tub", "Fireplace", "Lakefront"],
      guests: "6명 + 아이 1명 + 반려동물 2마리",
      address: "723 Jenifer St, Madison, WI 53703",
      photos: [
        "assets/images/madison-1.jpg",
        "assets/images/madison-2.jpg",
        "assets/images/madison-3.jpg",
        "assets/images/madison-4.jpg"
      ],
      memories: ""
    }
  ]
};

// Month names in Korean
const monthNames = {
  "01": "1월", "02": "2월", "03": "3월", "04": "4월",
  "05": "5월", "06": "6월", "07": "7월", "08": "8월",
  "09": "9월", "10": "10월", "11": "11월", "12": "12월"
};

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderBalance();
  renderCountdown();
  renderContributionTable();
  renderTrips();
});

// Render balance
function renderBalance() {
  const balanceEl = document.getElementById("balance");
  balanceEl.textContent = `$${fundData.currentBalance.toLocaleString()}`;
}

// Render countdown to next trip
function renderCountdown() {
  const countdownEl = document.getElementById("countdown");
  const labelEl = document.getElementById("next-trip");

  const upcomingTrip = fundData.trips.find(t => t.status === "upcoming");

  if (!upcomingTrip) {
    countdownEl.textContent = "—";
    labelEl.textContent = "계획 중";
    return;
  }

  const tripDate = new Date(upcomingTrip.date + "-22");
  const now = new Date();
  const diff = tripDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdownEl.textContent = `D-${days}`;
  } else {
    countdownEl.textContent = "NOW";
  }

  labelEl.textContent = upcomingTrip.name;
}

// Render contribution table
function renderContributionTable() {
  // Set party headers
  fundData.parties.forEach((party, i) => {
    document.getElementById(`party-${i + 1}`).textContent = party;
  });

  const tbody = document.getElementById("contribution-body");
  let runningTotal = 0;

  fundData.contributions.forEach(contrib => {
    const row = document.createElement("tr");

    // Month cell
    const [year, month] = contrib.month.split("-");
    const monthCell = document.createElement("td");
    monthCell.className = "month-cell";
    monthCell.textContent = `${year.slice(2)}년 ${monthNames[month]}`;
    row.appendChild(monthCell);

    // Payment status for each party and calculate monthly total
    let monthlyTotal = 0;
    contrib.paid.forEach(isPaid => {
      const cell = document.createElement("td");
      if (isPaid) {
        cell.innerHTML = '<span class="check">&#10003;</span>';
        monthlyTotal += fundData.monthlyAmount;
      } else {
        cell.innerHTML = '<span class="pending">-</span>';
      }
      row.appendChild(cell);
    });

    // Running total cell
    runningTotal += monthlyTotal;
    const totalCell = document.createElement("td");
    totalCell.className = "running-total";
    totalCell.textContent = `$${runningTotal}`;
    row.appendChild(totalCell);

    tbody.appendChild(row);
  });

  // Add interest row
  if (fundData.interestEarned > 0) {
    runningTotal += fundData.interestEarned;
    const interestRow = document.createElement("tr");
    interestRow.className = "interest-row";
    interestRow.innerHTML = `
      <td class="month-cell">이자</td>
      <td colspan="3"></td>
      <td class="running-total">$${runningTotal}</td>
    `;
    tbody.appendChild(interestRow);
  }

  // Add expense rows for trips with costs
  fundData.trips.forEach(trip => {
    if (trip.cost) {
      runningTotal -= trip.cost;
      const expenseRow = document.createElement("tr");
      expenseRow.className = "expense-row";
      expenseRow.innerHTML = `
        <td class="month-cell">${trip.name}</td>
        <td colspan="3" style="font-size: 0.75rem; color: var(--gray);">숙소</td>
        <td class="running-total expense">-$${trip.cost.toLocaleString()}</td>
      `;
      tbody.appendChild(expenseRow);
    }
  });

  // Final total row
  const finalRow = document.createElement("tr");
  finalRow.className = "final-row";
  finalRow.innerHTML = `
    <td class="month-cell"><strong>잔액</strong></td>
    <td colspan="3"></td>
    <td class="running-total final-total">$${runningTotal.toFixed(2)}</td>
  `;
  tbody.appendChild(finalRow);
}

// Render trips
function renderTrips() {
  const tripGrid = document.getElementById("trip-grid");

  // Sort: upcoming first
  const sortedTrips = [...fundData.trips].sort((a, b) => {
    if (a.status === 'upcoming') return -1;
    if (b.status === 'upcoming') return 1;
    return 0;
  });

  sortedTrips.forEach(trip => {
    const card = document.createElement("div");
    card.className = "trip-card";

    const [year, month] = trip.date.split("-");
    const dateText = trip.dateRange ? `${year}년 ${trip.dateRange}` : `${year}년 ${monthNames[month]}`;
    const badgeText = trip.status === "upcoming" ? "Upcoming" : "Completed";

    const tags = trip.amenities
      ? trip.amenities.map(a => `<span class="trip-tag">${a}</span>`).join('')
      : '';

    const mapHtml = trip.address ? `
      <div class="trip-map">
        <iframe src="https://maps.google.com/maps?q=${encodeURIComponent(trip.address)}&z=14&output=embed" loading="lazy"></iframe>
        <div class="trip-address">${trip.address}</div>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="trip-image" onclick="cycleImage('${trip.id}')">
        <img id="img-${trip.id}" src="${trip.photos[0]}" alt="${trip.name}">
        <span class="trip-badge ${trip.status}">${badgeText}</span>
        ${trip.photos.length > 1 ? `
          <div class="trip-image-nav">
            ${trip.photos.map((_, i) => `<button class="${i === 0 ? 'active' : ''}" data-trip="${trip.id}" data-i="${i}"></button>`).join('')}
          </div>
        ` : ''}
      </div>
      <div class="trip-body">
        <div class="trip-title">${trip.name}</div>
        <div class="trip-subtitle">${trip.accommodation || ''}</div>
        <div class="trip-date">${dateText}</div>
        ${tags ? `<div class="trip-tags">${tags}</div>` : ''}
        ${trip.cost ? `<div class="trip-price"><strong>$${trip.cost.toLocaleString()}</strong> total</div>` : ''}
        ${mapHtml}
        ${trip.memories ? `<div class="trip-memories">${trip.memories}</div>` : ''}
      </div>
    `;

    tripGrid.appendChild(card);
  });
}

// Simple image cycling on click
const imgIndex = {};
function cycleImage(tripId) {
  const trip = fundData.trips.find(t => t.id === tripId);
  if (!trip || trip.photos.length <= 1) return;

  imgIndex[tripId] = ((imgIndex[tripId] || 0) + 1) % trip.photos.length;
  document.getElementById(`img-${tripId}`).src = trip.photos[imgIndex[tripId]];

  document.querySelectorAll(`button[data-trip="${tripId}"]`).forEach((btn, i) => {
    btn.classList.toggle('active', i === imgIndex[tripId]);
  });
}
