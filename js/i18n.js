// Shared English/Korean preference for every page. No translation service required.
(() => {
  const messages = {
  "siteTitle": {
    "ko": "우리 가족 여행 계",
    "en": "Our Family Travel Fund"
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
    "ko": "2027년 3월 · 위스콘신 숙소 살펴보기 →",
    "en": "March 2027 · Explore Wisconsin stays →"
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
  "researchStatus": {
    "ko": "6개 지역 · 숙소 후보 15곳",
    "en": "6 areas · 15 possible stays"
  },
  "springIntro": {
    "ko": "도시도, 작은 마을도, 숲속도 좋아요. Milwaukee·Sheboygan부터 Cedarburg·Port Washington, 호수와 캐빈까지 여섯 지역을 비교해요. 각 지역에 2–3개 후보가 있어요.",
    "en": "Cities, small towns, lakes, and cabins are all on the table. Compare six areas, including Milwaukee, Sheboygan, Cedarburg, and Port Washington, with two or three candidates in each."
  },
  "bookingNote": {
    "ko": "정확한 날짜·숙박 일수·예산은 아직 미정이에요. 2026년 9월 13일 확인한 숙소 정보이며, 2027년 3월 예약 가능 여부와 총요금은 아직 확인하지 않았어요.",
    "en": "Exact dates, number of nights, and budget are still undecided. Listing details were checked September 13, 2026; March 2027 availability and total prices have not been checked."
  },
  "seasonNote": {
    "ko": "3월에는 호숫가 산책과 실내에서 함께 보내는 시간을 중심으로 생각해요. 수영·보트·야외 시설 운영은 별도 확인이 필요해요. 사진은 각 Airbnb 숙소 호스트가 제공한 사진이에요.",
    "en": "For March, think shoreline walks and time together indoors. Swimming, boats, and outdoor facilities need separate seasonal checks. Photos are supplied by the Airbnb hosts."
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
    "ko": "호스트 제공 숙소 사진",
    "en": "host-provided lodging photo"
  },
  "photoFallback": {
    "ko": "Airbnb에서 숙소 사진 보기",
    "en": "View photos on Airbnb"
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
    "ko": "Airbnb에서 2027년 3월 날짜를 직접 선택해 주세요. 검색 결과의 기본 날짜는 다를 수 있어요.",
    "en": "Choose your March 2027 dates on Airbnb; its default search dates may differ."
  },
  "siteDescription": {
    "ko": "가족 여행 회비, 여행 기록, 2027년 3월 위스콘신의 도시·마을·호숫가 숙소 후보.",
    "en": "Family travel contributions, memories, and city, small-town, and lakeside stays for March 2027 in Wisconsin."
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
