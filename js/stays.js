// Preliminary spring shortlist. Listing facts checked September 13, 2026.
// Prices and date-specific availability have not been checked.
const stays = [
  {
    name: "Lake House Log Cabin", location: "Elkhorn · Lauderdale Lakes", fit: "우리 가족에게 가장 잘 맞는 구조",
    url: "https://www.airbnb.com/rooms/632787861244278518",
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-632787861244278518/original/f7fb0cb0-7694-414e-8f7f-8ad153eda65a.jpeg?im_w=960",
    facts: "최대 8명 · 침실 4 · 욕실 3", rating: "4.87 / 5 · 후기 98개",
    description: "통나무집의 벽난로와 8명이 함께 앉을 수 있는 식탁. Lauderdale Lakes와 숲길을 함께 즐기기 좋은 후보예요.",
    beds: "퀸 3개 + 싱글 2개. 성인 6명과 아이 1명이 소파베드 없이 잘 수 있어요.",
    check: "침실이 세 층에 나뉘어 있어요. 아이의 방 배치와 로프트의 독립성을 확인해요. 호수 바로 앞 전용 부지는 아니에요.",
    setting: "Lake Geneva 북쪽 · 시카고 쪽에 더 가까운 남부 위스콘신",
    nature: "Kettle Moraine 숲길", natureUrl: "https://dnr.wisconsin.gov/topic/parks/kms"
  },
  {
    name: "Abbey Springs A-frame", location: "Fontana · Geneva Lake", fit: "독특한 집 + 프라이빗 온수 욕조",
    url: "https://www.airbnb.com/rooms/736213061316661642",
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-736213061316661642/original/dadda6dd-1119-4d72-bd57-d920bcbe978a.jpeg?im_w=960",
    facts: "최대 8명 · 침실 3 · 욕실 2", rating: "4.83 / 5 · 후기 69개",
    description: "높은 지붕의 A-frame, 전용 온수 욕조, Geneva Lake 커뮤니티 비치. 쌀쌀한 봄에도 집에서 보내는 시간이 즐거울 후보예요.",
    beds: "킹 1개 + 퀸 1개 + 싱글 2개. 일곱 번째 자리는 거실 소파베드 또는 유아용 침대 확인이 필요해요.",
    check: "온수 욕조의 봄 운영, 수영장·클럽 이용료, 소파베드 크기를 확인해요. 호숫가까지는 도보 이동이에요.",
    setting: "Geneva Lake 남서쪽 · 시카고 쪽에 더 가까워요",
    nature: "숙소의 호수·편의시설 안내", natureUrl: "https://www.airbnb.com/rooms/736213061316661642"
  },
  {
    name: "Woodsy Cabin & Lake Michigan Beach", location: "Oostburg · Lake Michigan", fit: "호숫가 산책과 모래언덕",
    url: "https://www.airbnb.com/rooms/24282648",
    photo: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-24282648/original/12c11638-6e96-42e3-ac20-c13df31aece9.jpeg?im_w=960",
    facts: "최대 8명 · 침실 3 + 덴 · 욕실 2", rating: "4.94 / 5 · 후기 47개",
    description: "숲속 오두막과 Lake Michigan 산책을 함께. 실내 벽난로가 있고 Kohler-Andrae의 모래언덕과 해변을 둘러보기 좋아요.",
    beds: "퀸 2개 + 싱글 2개, 추가 소파베드. 일곱 번째 사람의 잠자리를 확인해요.",
    check: "바닷가 같은 풍경을 보러 가는 봄 여행에 적합해요. 해변까지의 실제 거리와 이용 조건은 호스트에게 확인해요.",
    setting: "Sheboygan 남쪽 · Appleton 쪽에 더 가까운 호숫가",
    nature: "Kohler-Andrae 모래언덕", natureUrl: "https://dnr.wisconsin.gov/topic/parks/kohlerandrae"
  },
  {
    name: "The Ravenswood", location: "Cascade · Kettle Moraine", fit: "숲속 분위기는 매력적 · 침대 조건부",
    url: "https://www.airbnb.com/rooms/52426262",
    photo: "https://a0.muscache.com/im/pictures/9318976a-12da-4162-a143-cebc6ccfd811.jpg?im_w=960",
    facts: "최대 8명 · 침실 3 · 욕실 1.5", rating: "5.0 / 5 · 후기 63개",
    description: "주립 숲에 접한 3에이커 부지, 벽난로 두 개와 게임룸. 숲에서 시간을 보내는 봄 여행의 분위기가 가장 뚜렷한 후보예요.",
    beds: "킹 1개 + 퀸 1개 + 2층 침대 두 세트. 성인 2명도 2층 침대 방을 써야 해요.",
    check: "침실은 모두 위층이고 2층 침대 방의 천장이 낮아요. 성인 6명에게 편한지 사진을 보고 결정해요.",
    setting: "Kettle Moraine 북부 · Appleton 쪽에 더 가까워요",
    nature: "Kettle Moraine Northern Unit", natureUrl: "https://dnr.wisconsin.gov/topic/parks/kmn"
  }
];
