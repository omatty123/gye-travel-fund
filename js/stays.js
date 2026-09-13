// Preliminary candidates checked September 13, 2026. Prices and March 2027 availability unverified.
const regions = [
  {
    "id": "milwaukee",
    "name": {
      "ko": "밀워키",
      "en": "Milwaukee"
    },
    "description": {
      "ko": "도시 여행: 식당·카페와 호숫가를 함께. 계단, 주차, 밤 소음을 비교해요.",
      "en": "City stay: restaurants, cafés, and the lakefront. Compare stairs, parking, and nighttime noise."
    },
    "query": "Milwaukee, Wisconsin"
  },
  {
    "id": "sheboygan",
    "name": {
      "ko": "셰보이건",
      "en": "Sheboygan"
    },
    "description": {
      "ko": "작은 도시와 호수: 개성 있는 오래된 집이나 해변 근처 주택에서 머물러요.",
      "en": "Small city meets lake: a characterful historic home or a house close to the beach."
    },
    "query": "Sheboygan, Wisconsin"
  },
  {
    "id": "smalltown",
    "name": {
      "ko": "시더버그 · 포트워싱턴",
      "en": "Cedarburg · Port Washington"
    },
    "description": {
      "ko": "작은 마을 여행: 시더버그의 상점과 카페, 또는 포트워싱턴의 항구 산책.",
      "en": "Small-town stay: Cedarburg shops and cafés, or harbor walks in Port Washington."
    },
    "query": "Cedarburg, Wisconsin"
  },
  {
    "id": "geneva",
    "name": {
      "ko": "제네바 · 로더데일 호수",
      "en": "Geneva · Lauderdale Lakes"
    },
    "description": {
      "ko": "남부 위스콘신: 호수 마을과 통나무집. Chicago 쪽에 더 가까워요.",
      "en": "Southern Wisconsin: lake towns and log cabins, nearer Chicago."
    },
    "query": "Elkhorn, Wisconsin"
  },
  {
    "id": "shore",
    "name": {
      "ko": "오스트버그 호숫가",
      "en": "Oostburg lakeshore"
    },
    "description": {
      "ko": "Lake Michigan 전망과 해변 산책. Appleton 쪽에 더 가깝고 Kohler-Andrae를 함께 둘러보기 좋아요.",
      "en": "Lake Michigan views and shoreline walks, nearer Appleton, with Kohler-Andrae nearby."
    },
    "query": "Oostburg, Wisconsin"
  },
  {
    "id": "forest",
    "name": {
      "ko": "캐스케이드 · 케틀모레인",
      "en": "Cascade · Kettle Moraine"
    },
    "description": {
      "ko": "북부 Kettle Moraine 주변의 숲속 숙소. 집에서 쉬고 숲길을 걷는 여행이에요.",
      "en": "Woodland stays around northern Kettle Moraine, for time at the house and on forest trails."
    },
    "query": "Cascade, Wisconsin"
  }
];
const stays = [
  {
    "id": "569027432195208903",
    "region": "milwaukee",
    "name": {
      "ko": "미드센추리 모던 무스",
      "en": "Mid-Century Modern Moose"
    },
    "location": {
      "en": "Milwaukee · Brady Street",
      "ko": "밀워키 · 브래디 스트리트"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 2,
    "rating": 4.97,
    "url": "https://www.airbnb.com/rooms/569027432195208903",
    "photo": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-569027432195208903/original/5549568a-89bb-4c7b-9f7b-7e36418f389e.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "걸어서 식당과 카페로",
        "description": "1891년 빅토리아풍 건물 안의 현대적인 아파트. 전용 주차 한 자리.",
        "beds": "퀸 2개 + 싱글 2개. 일곱 번째는 침대형 의자 확인.",
        "check": "계단, 추가 차량 주차, 식탁 배치를 확인해요. 호스트가 별도 계약과 $500 보증금 홀드를 명시했어요."
      },
      "en": {
        "fit": "Walk to restaurants and cafés",
        "description": "Modern apartment in an 1891 Victorian building, with one dedicated parking space.",
        "beds": "2 queens + 2 twins; check the pullout chair for the seventh guest.",
        "check": "Check stairs, extra parking, and dining layout. Host lists a separate rental agreement and $500 security hold."
      }
    }
  },
  {
    "id": "1395673693479252768",
    "region": "milwaukee",
    "name": {
      "ko": "브래디 스트리트 클래식 하우스",
      "en": "Timeless & Classic near Brady Street"
    },
    "location": {
      "en": "Milwaukee · Brady Street",
      "ko": "밀워키 · 브래디 스트리트"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 1.5,
    "rating": 4.86,
    "url": "https://www.airbnb.com/rooms/1395673693479252768",
    "photo": "https://a0.muscache.com/im/pictures/miso/Hosting-1395673693479252768/original/98535daf-ae5e-47a9-85b2-40d912590a42.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "도시 속 개성 있는 집",
        "description": "8인 주방 좌석, 전기 벽난로, 위층 라운지가 있는 주택.",
        "beds": "킹 1개 + 퀸 2개 + 퀸 소파베드. 아이는 소파베드가 필요해요.",
        "check": "입구와 침실까지 계단이 있어요. 밤 소음과 주차 조건도 확인해요."
      },
      "en": {
        "fit": "A characterful city house",
        "description": "Kitchen seating for eight, an electric fireplace, and an upstairs lounge.",
        "beds": "1 king + 2 queens + queen sofa bed; child would use the sofa bed.",
        "check": "Stairs at the entrance and up to every bedroom. Check nighttime noise and parking arrangements."
      }
    }
  },
  {
    "id": "49572965",
    "region": "sheboygan",
    "name": {
      "ko": "허먼 하이슨 빅토리아 저택",
      "en": "Herman Hayssen Victorian Manor"
    },
    "location": {
      "en": "Sheboygan · Historic Grant",
      "ko": "셰보이건 · 히스토릭 그랜트"
    },
    "capacity": 8,
    "bedrooms": 4,
    "baths": 3.5,
    "rating": 4.97,
    "url": "https://www.airbnb.com/rooms/49572965",
    "photo": "https://a0.muscache.com/im/pictures/miso/Hosting-49572965/original/03d4b233-e729-41af-9b87-9de81ad440c1.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "숙소 자체가 특별한 여행",
        "description": "1895년 저택의 스테인드글라스, 피아노, 벽난로 두 개.",
        "beds": "퀸 4개로 7명 수용 가능. 침실 네 개를 나눠 써요.",
        "check": "큰 저택이라 전체 요금을 먼저 비교해요. 침실 층과 벽난로 사용 조건 확인."
      },
      "en": {
        "fit": "A destination in itself",
        "description": "An 1895 manor with stained glass, a piano, and two fireplaces.",
        "beds": "4 queen beds accommodate seven across four bedrooms.",
        "check": "Compare the full quote for this large manor. Confirm bedroom floors and fireplace use."
      }
    }
  },
  {
    "id": "1102526909065242585",
    "region": "sheboygan",
    "name": {
      "ko": "쿨 체인지 레이크 하우스",
      "en": "Cool Change Lake & Beach House"
    },
    "location": {
      "en": "Sheboygan · North Side Beach",
      "ko": "셰보이건 · 노스사이드 비치"
    },
    "capacity": 8,
    "bedrooms": 4,
    "baths": 2,
    "rating": 5,
    "url": "https://www.airbnb.com/rooms/1102526909065242585",
    "photo": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwMjUyNjkwOTA2NTI0MjU4NQ%3D%3D/original/b9f4b881-ec0d-4922-a1ff-a8533fad299a.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "도시·호수·편한 잠자리",
        "description": "호수에서 한 블록 떨어진 주택. 벽난로와 1층 침실이 있어요.",
        "beds": "킹 2개 + 퀸 1개 + 긴 싱글 2개. 소파베드 없이 가능.",
        "check": "3월에는 산책 위주로 생각해요. 총요금과 욕실의 층별 위치를 확인해요."
      },
      "en": {
        "fit": "City, lake, and a strong bed layout",
        "description": "A house one block from the lake, with a fireplace and main-floor bedroom.",
        "beds": "2 kings + 1 queen + 2 Twin XL beds; no sofa bed needed.",
        "check": "Plan for walks in March. Check the total quote and bathroom locations by floor."
      }
    }
  },
  {
    "id": "41060231",
    "region": "smalltown",
    "name": {
      "ko": "아워 해피 플레이스",
      "en": "Our Happy Place in Cedarburg"
    },
    "location": {
      "en": "Cedarburg · Historic downtown",
      "ko": "시더버그 · 구시가지"
    },
    "capacity": 7,
    "bedrooms": 3,
    "baths": 2,
    "rating": 4.98,
    "url": "https://www.airbnb.com/rooms/41060231",
    "photo": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDEwNjAyMzE%3D/original/bd8601cd-fc0c-4e41-a424-8aa7dcb9524e.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "작은 마을을 걸어서 즐기기",
        "description": "시내 상점 근처의 집. 포치, 피아노, 게임룸이 있어요.",
        "beds": "퀸 3개와 일반 소파가 표시돼 있어요. 아이의 잠자리를 꼭 확인해야 해요.",
        "check": "정원은 7명이지만 침대는 6명분이에요. 일곱 번째 잠자리 해결 전에는 조건부 후보."
      },
      "en": {
        "fit": "Walkable small-town weekend",
        "description": "Home near downtown shops, with a porch, piano, and game room.",
        "beds": "3 queens plus ordinary couches are listed. Confirm the child’s sleeping arrangement.",
        "check": "Capacity is seven, but beds cover six. A conditional option until the seventh sleeping spot is resolved."
      }
    }
  },
  {
    "id": "1115482145177109031",
    "region": "smalltown",
    "name": {
      "ko": "그레이트 레이크스 스테이",
      "en": "Great Lakes Stay"
    },
    "location": {
      "en": "Port Washington · Marina area",
      "ko": "포트워싱턴 · 항구 주변"
    },
    "capacity": 8,
    "bedrooms": 4,
    "baths": 2,
    "rating": 4.96,
    "url": "https://www.airbnb.com/rooms/1115482145177109031",
    "photo": "https://a0.muscache.com/im/pictures/hosting/Hosting-1115482145177109031/original/2d480c60-8c63-468b-9b76-b19ac3d94aac.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "항구 마을 + 침실 네 개",
        "description": "항구·식당 근처의 듀플렉스 위층 두 개 층을 사용해요.",
        "beds": "큰 침대 3개 + 싱글 2개. 퀸·더블 표기가 서로 달라 확인 필요.",
        "check": "입구 계단과 내부 계단, 주차 한 자리. 다른 세대가 있는 건물이에요."
      },
      "en": {
        "fit": "Harbor town with four bedrooms",
        "description": "Upper duplex unit across two levels, near the marina and restaurants.",
        "beds": "3 larger beds + 2 twins; queen/full sizes differ between listing sections.",
        "check": "Entry and internal stairs; one driveway space. Another household occupies the building."
      }
    }
  },
  {
    "id": "632787861244278518",
    "region": "geneva",
    "name": {
      "ko": "로더데일 레이크 통나무집",
      "en": "Lake House Log Cabin"
    },
    "location": {
      "en": "Elkhorn · Lauderdale Lakes",
      "ko": "엘크혼 · 로더데일 호수"
    },
    "capacity": 8,
    "bedrooms": 4,
    "baths": 3,
    "rating": 4.87,
    "url": "https://www.airbnb.com/rooms/632787861244278518",
    "photo": "https://a0.muscache.com/im/pictures/miso/Hosting-632787861244278518/original/f7fb0cb0-7694-414e-8f7f-8ad153eda65a.jpeg?im_w=960",
    "text": {
      "ko": {
        "fit": "가족 잠자리 구성이 편리",
        "description": "통나무집의 벽난로와 큰 식탁. 호수와 숲길을 함께 즐길 후보.",
        "beds": "퀸 3개 + 싱글 2개. 소파베드 없이 7명 가능.",
        "check": "침실이 세 층에 있어요. 아이 방과 로프트의 독립성, 호수 접근을 확인해요."
      },
      "en": {
        "fit": "An easy sleeping layout for seven",
        "description": "Log cabin with a fireplace and large dining table, near lakes and woodland walks.",
        "beds": "3 queens + 2 twins; seven can sleep without a sofa bed.",
        "check": "Bedrooms span three floors. Check child placement, loft privacy, and lake access."
      }
    }
  },
  {
    "id": "736213061316661642",
    "region": "geneva",
    "name": {
      "ko": "애비 스프링스 A프레임",
      "en": "Abbey Springs A-frame"
    },
    "location": {
      "en": "Fontana · Geneva Lake",
      "ko": "폰태나 · 제네바 호수"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 2,
    "rating": 4.83,
    "url": "https://www.airbnb.com/rooms/736213061316661642",
    "photo": "https://a0.muscache.com/im/pictures/miso/Hosting-736213061316661642/original/dadda6dd-1119-4d72-bd57-d920bcbe978a.jpeg?im_w=960",
    "text": {
      "ko": {
        "fit": "A프레임 + 전용 온수 욕조",
        "description": "독특한 지붕의 집과 커뮤니티 호수 접근.",
        "beds": "킹 1개 + 퀸 1개 + 싱글 2개. 아이는 소파베드 또는 유아 침대 확인.",
        "check": "온수 욕조 봄 운영, 클럽·수영장 이용료와 소파베드 크기 확인."
      },
      "en": {
        "fit": "A-frame with a private hot tub",
        "description": "Distinctive roofline and community lake access.",
        "beds": "1 king + 1 queen + 2 twins. Check sofa bed or crib for the child.",
        "check": "Confirm spring hot-tub operation, club/pool fees, and sofa-bed size."
      }
    }
  },
  {
    "id": "45351720",
    "region": "geneva",
    "name": {
      "ko": "링컨 통나무집",
      "en": "Lincoln Log Cabin"
    },
    "location": {
      "en": "Elkhorn · Lake Geneva countryside",
      "ko": "엘크혼 · 제네바 호수 인근 전원"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 2,
    "rating": 4.87,
    "url": "https://www.airbnb.com/rooms/45351720",
    "photo": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45351720/original/1b8c9b13-b26a-4d8f-ac0d-47546fa0966c.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "전원 속 아늑한 통나무집",
        "description": "벽난로, 마당과 화덕. Lake Geneva 시내까지 차로 이동.",
        "beds": "퀸 4개를 침실 세 개에 배치. 한 가족은 퀸 두 개 방 사용 가능.",
        "check": "사진 설명과 침대 표기를 다시 확인해요. 호숫가 숙소는 아니에요."
      },
      "en": {
        "fit": "A cozy countryside cabin",
        "description": "Fireplace, yard, and fire pit, a drive from downtown Lake Geneva.",
        "beds": "4 queens in three bedrooms; one family can use the two-queen room.",
        "check": "Reconfirm beds against photo captions. This is a countryside stay, not lakefront."
      }
    }
  },
  {
    "id": "22672718",
    "region": "shore",
    "name": {
      "ko": "샴바 온 더 레이크",
      "en": "Shamba on the Lake"
    },
    "location": {
      "en": "Oostburg · Lake Michigan",
      "ko": "오스트버그 · 미시간 호수"
    },
    "capacity": 9,
    "bedrooms": 3,
    "baths": 2,
    "rating": 4.96,
    "url": "https://www.airbnb.com/rooms/22672718",
    "photo": "https://a0.muscache.com/im/pictures/miso/Hosting-22672718/original/661929f3-5a4c-487d-8834-8b0213237204.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "호수 전망과 해변 바로 앞",
        "description": "숲으로 둘러싸인 부지, 호수 전망, 가스 벽난로.",
        "beds": "킹 1개 + 퀸 1개 + 싱글 3개. 일곱 명 모두 침대 사용 가능.",
        "check": "성인 2명과 아이가 싱글 침대 방을 함께 쓰는 구성이에요. 봄 해변 상태 확인."
      },
      "en": {
        "fit": "Direct beach access and lake views",
        "description": "Wooded grounds, lake views, and a gas fireplace.",
        "beds": "1 king + 1 queen + 3 twins; beds for all seven.",
        "check": "Two adults and the child would share the twin room. Check spring beach conditions."
      }
    }
  },
  {
    "id": "30311883",
    "region": "shore",
    "name": {
      "ko": "오스트버그 비치프런트 하우스",
      "en": "Renovated Beachfront Home"
    },
    "location": {
      "en": "Oostburg · Lake Michigan",
      "ko": "오스트버그 · 미시간 호수"
    },
    "capacity": 10,
    "bedrooms": 4,
    "baths": 3,
    "rating": 4.79,
    "url": "https://www.airbnb.com/rooms/30311883",
    "photo": "https://a0.muscache.com/im/pictures/714d9cd2-4af6-48cc-801b-68996685c039.jpg?im_w=720",
    "text": {
      "ko": {
        "fit": "집 안에서도 넓은 호수 전망",
        "description": "호수 전망의 위층 라운지, 전용 마당과 데크.",
        "beds": "퀸 1개 + 더블 1개 + 싱글 3개가 표시돼 있어요.",
        "check": "요약은 침실 4개지만 잠자리 표에는 3개만 나와요. 최신 배치를 확인해요."
      },
      "en": {
        "fit": "Big lake views from indoors",
        "description": "Upper lounge overlooking the lake, with private yard and decks.",
        "beds": "Listed sleeping rooms show 1 queen + 1 double + 3 twins.",
        "check": "Summary says four bedrooms; sleeping cards show three. Confirm the current layout."
      }
    }
  },
  {
    "id": "24282648",
    "region": "shore",
    "name": {
      "ko": "숲속 캐빈과 미시간 해변",
      "en": "Woodsy Cabin & Lake Michigan Beach"
    },
    "location": {
      "en": "Oostburg · Lake Michigan",
      "ko": "오스트버그 · 미시간 호수"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 2,
    "rating": 4.94,
    "url": "https://www.airbnb.com/rooms/24282648",
    "photo": "https://a0.muscache.com/im/pictures/prohost-api/Hosting-24282648/original/12c11638-6e96-42e3-ac20-c13df31aece9.jpeg?im_w=960",
    "text": {
      "ko": {
        "fit": "숲속 숙소와 호수 산책",
        "description": "실내 벽난로와 호숫가 산책. 침실 외에 덴이 있어요.",
        "beds": "퀸 2개 + 싱글 2개, 추가 소파베드. 아이 잠자리 확인.",
        "check": "해변까지 실제 도보 거리와 접근 조건, 소파베드 크기 확인."
      },
      "en": {
        "fit": "Woodland cabin and shoreline walks",
        "description": "Indoor fireplace and lake walks, with a den beyond the three bedrooms.",
        "beds": "2 queens + 2 twins, plus pullouts. Check the child’s sleeping spot.",
        "check": "Confirm walking distance and access to the beach, plus pullout-bed size."
      }
    }
  },
  {
    "id": "52426262",
    "region": "forest",
    "name": {
      "ko": "레이븐스우드",
      "en": "The Ravenswood"
    },
    "location": {
      "en": "Cascade · Kettle Moraine",
      "ko": "캐스케이드 · 케틀모레인"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 1.5,
    "rating": 5,
    "url": "https://www.airbnb.com/rooms/52426262",
    "photo": "https://a0.muscache.com/im/pictures/9318976a-12da-4162-a143-cebc6ccfd811.jpg?im_w=960",
    "text": {
      "ko": {
        "fit": "숲속 분위기 · 침대는 조건부",
        "description": "주립 숲에 접한 부지, 벽난로 두 개와 게임룸.",
        "beds": "킹 1개 + 퀸 1개 + 2층 침대 두 세트. 성인 2명도 벙크룸 사용.",
        "check": "침실은 모두 위층이고 벙크룸 천장이 낮아요. 성인에게 편한지 확인."
      },
      "en": {
        "fit": "Woodland atmosphere; conditional bed fit",
        "description": "Grounds bordering state forest, with two fireplaces and a game room.",
        "beds": "1 king + 1 queen + two bunk sets. Two adults also use the bunk room.",
        "check": "All bedrooms upstairs; low bunk-room ceiling. Confirm comfort for adults."
      }
    }
  },
  {
    "id": "19294134",
    "region": "forest",
    "name": {
      "ko": "버드 하우스 앳 더 윌로스",
      "en": "The Bird House at the Willows"
    },
    "location": {
      "en": "Cascade · Private lake community",
      "ko": "캐스케이드 · 호수 커뮤니티"
    },
    "capacity": 12,
    "bedrooms": 5,
    "baths": 3,
    "rating": 4.96,
    "url": "https://www.airbnb.com/rooms/19294134",
    "photo": "https://a0.muscache.com/im/pictures/miso/Hosting-19294134/original/56dc89f0-9806-4494-927b-158f91e3e8a8.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "넉넉한 공간의 호숫가 캐빈",
        "description": "가족 중심 호수 커뮤니티의 큰 집. 벽난로와 공용 게임룸.",
        "beds": "킹 방 1개 + 퀸 방 2개, 추가 벙크·로프트 침대.",
        "check": "큰 집의 총요금을 비교해요. 로프트는 사다리 접근이라 아이 자리로 신중히 검토."
      },
      "en": {
        "fit": "A spacious lake-community cabin",
        "description": "Large family-oriented lake house, with fireplace and shared game room.",
        "beds": "1 king room + 2 queen rooms, plus bunks and loft beds.",
        "check": "Compare the quote for this larger house. Ladder-access loft needs careful child placement."
      }
    }
  },
  {
    "id": "1196675674918172644",
    "region": "forest",
    "name": {
      "ko": "하이랜더 하이드어웨이",
      "en": "Highlander Hideaway"
    },
    "location": {
      "en": "Cascade · Private lake community",
      "ko": "캐스케이드 · 호수 커뮤니티"
    },
    "capacity": 11,
    "bedrooms": 3,
    "baths": 1.5,
    "rating": 5,
    "url": "https://www.airbnb.com/rooms/1196675674918172644",
    "photo": "https://a0.muscache.com/im/pictures/hosting/Hosting-1196675674918172644/original/585431df-9c29-42c6-83cc-73e945212861.jpeg?im_w=720",
    "text": {
      "ko": {
        "fit": "숲길과 공용 호수 접근",
        "description": "70에이커 이상 숲·산책로가 있는 호수 커뮤니티.",
        "beds": "퀸 2개 + 더블 2개 + 싱글·벙크 침대.",
        "check": "공용 공간 범위와 봄 이용 조건 확인. 숙소 정보에 CO 경보기가 미기재되어 호스트 확인 필요."
      },
      "en": {
        "fit": "Woodland trails and shared lake access",
        "description": "Lake community with access to more than 70 acres of woods and trails.",
        "beds": "2 queens + 2 doubles, plus single and bunk beds.",
        "check": "Confirm shared areas and spring access. Listing does not report a CO alarm; verify with the host."
      }
    }
  }
];
