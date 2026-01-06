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
  ],
  currentBalance: 1362,
  trips: [
    {
      id: "madison-2026",
      name: "매디슨 가족 휴가",
      nameEn: "Madison Family Vacation",
      date: "2026-03",
      status: "upcoming",
      budget: 1362,
      photos: [],
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
  const detailEl = document.getElementById("balance-detail");

  balanceEl.textContent = `$${fundData.currentBalance.toLocaleString()}`;

  const totalContributions = fundData.contributions.length * fundData.parties.length * fundData.monthlyAmount;
  detailEl.textContent = `${fundData.contributions.length}개월 × 3가족 × $${fundData.monthlyAmount} + 이자`;
}

// Render countdown to next trip
function renderCountdown() {
  const countdownEl = document.getElementById("countdown");
  const destinationEl = document.getElementById("destination");

  const upcomingTrip = fundData.trips.find(t => t.status === "upcoming");

  if (!upcomingTrip) {
    document.getElementById("countdown-section").style.display = "none";
    return;
  }

  // Set trip date to March 15, 2026 (middle of month as placeholder)
  const tripDate = new Date(upcomingTrip.date + "-15");
  const now = new Date();
  const diff = tripDate - now;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    countdownEl.textContent = `D-${days}`;
  } else {
    countdownEl.textContent = "여행 중!";
  }

  destinationEl.textContent = upcomingTrip.name;
}

// Render contribution table
function renderContributionTable() {
  // Set party headers
  fundData.parties.forEach((party, i) => {
    document.getElementById(`party-${i + 1}`).textContent = party;
  });

  const tbody = document.getElementById("contribution-body");

  fundData.contributions.forEach(contrib => {
    const row = document.createElement("tr");

    // Month cell
    const [year, month] = contrib.month.split("-");
    const monthCell = document.createElement("td");
    monthCell.className = "month-cell";
    monthCell.textContent = `${year.slice(2)}년 ${monthNames[month]}`;
    row.appendChild(monthCell);

    // Payment status for each party
    contrib.paid.forEach(isPaid => {
      const cell = document.createElement("td");
      if (isPaid) {
        cell.innerHTML = '<span class="check">&#10003;</span>';
      } else {
        cell.innerHTML = '<span class="pending">-</span>';
      }
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
}

// Render trips
function renderTrips() {
  const tripGrid = document.getElementById("trip-grid");

  fundData.trips.forEach(trip => {
    const card = document.createElement("div");
    card.className = `trip-card ${trip.status}`;

    const statusText = trip.status === "upcoming" ? "예정" : "완료";
    const statusClass = trip.status;

    const [year, month] = trip.date.split("-");
    const dateText = `${year}년 ${monthNames[month]}`;

    card.innerHTML = `
      <div class="trip-header" onclick="toggleTripPhotos('${trip.id}')">
        <div class="trip-info">
          <h3>${trip.name}</h3>
          <div class="trip-date">${dateText}</div>
        </div>
        <span class="trip-status ${statusClass}">${statusText}</span>
      </div>
      <div class="trip-budget">
        예산: <strong>$${trip.budget.toLocaleString()}</strong>
      </div>
      <div class="trip-photos" id="photos-${trip.id}">
        ${trip.photos.length > 0 ? `
          <div class="photo-grid">
            ${trip.photos.map(photo => `<img src="${photo}" alt="여행 사진">`).join("")}
          </div>
        ` : '<p style="color: var(--gray); font-size: 0.9rem;">여행 후 사진이 추가됩니다</p>'}
        ${trip.memories ? `<div class="trip-memories">${trip.memories}</div>` : ""}
      </div>
    `;

    tripGrid.appendChild(card);
  });
}

// Toggle trip photos section
function toggleTripPhotos(tripId) {
  const photosEl = document.getElementById(`photos-${tripId}`);
  photosEl.classList.toggle("expanded");
}
