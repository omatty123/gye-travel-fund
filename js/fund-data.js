// Data
const data = {
  confirmedOutsideStatement: [{ label: "Joe 7월 회비 · 가족 확인", amount: 50 }],
  bankStatement: { balance: 1454.07, date: "2026-09-02" },
  pendingReceipt: { amount: 200, label: "부모님 7–10월 회비" },
  interest: [
    { label: "2025 이자", amount: 19.47 },
    { label: "2026 이자 (1-8월)", amount: 21.82 }
  ],
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
    { m: "2026-02", p: [1,1,1] },
    { m: "2026-03", p: [1,1,1] },
    { m: "2026-04", p: [1,1,1] },
    { m: "2026-05", p: [1,1,1] },
    { m: "2026-06", p: [1,1,1] },
    { m: "2026-07", p: [1,1,1] },
    { m: "2026-08", p: [1,0,1] },
    { m: "2026-09", p: [1,0,1] },
    { m: "2026-10", p: [1,0,0] }
  ],
  trips: [
    {
      id: "madison",
      title: "매디슨 가족 휴가",
      subtitle: "",
      date: "2026년 3월 22일 - 24일",
      status: "completed",
      cost: 987.22,
      tags: [],
      address: "725 Jenifer St, Madison, WI 53703",
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
