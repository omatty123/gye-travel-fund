// Owner, manager, county, and Vrbo research checked September 13, 2026.
// March 2027 availability and dated totals unverified. Published pet permission remains subject to limits.
const regions = [
  {
    "id": "forest",
    "name": {
      "en": "Elkhart Lake · Kettle Moraine",
      "ko": "엘크하트 레이크 · 케틀모레인"
    },
    "description": {
      "en": "Indoor-pool retreat, lakeside log cabin, or a house inside a county park. Three different ways to spend time together near trails.",
      "ko": "실내 수영장, 호숫가 통나무집, 공원 안 주택. 산책로 가까이에서 함께 쉬는 세 가지 선택이에요."
    }
  },
  {
    "id": "shore",
    "name": {
      "en": "Port Washington · Sheboygan",
      "ko": "포트워싱턴 · 셰보이건"
    },
    "description": {
      "en": "Lake Michigan towns with restaurants and shoreline walks. Home Port has the clearest sleeping layout; Suncatcher adds a fenced yard.",
      "ko": "식당과 호숫가 산책을 함께 즐기는 작은 도시들. 홈 포트는 잠자리 구성이 명확하고, 선캐처에는 울타리 마당이 있어요."
    }
  },
  {
    "id": "city",
    "name": {
      "en": "Milwaukee · Racine",
      "ko": "밀워키 · 러신"
    },
    "description": {
      "en": "An urban base near Brady Street or a distinctive mid-century home near Racine. These are farther south toward Chicago.",
      "ko": "브래디 스트리트 근처 도시 숙소 또는 러신의 개성 있는 미드센추리 주택. 시카고 쪽에 더 가까운 남부 후보예요."
    }
  },
  {
    "id": "geneva",
    "name": {
      "en": "Geneva Lake · Williams Bay",
      "ko": "제네바 호수 · 윌리엄스베이"
    },
    "description": {
      "en": "A practical lake-town alternative, with a family house close to the shore and dining.",
      "ko": "호숫가와 식당 가까이에서 머무는 실용적인 호수 마을 대안이에요."
    }
  }
];
const stays = [
  {
    "id": "elkhart-pool",
    "region": "forest",
    "name": {
      "en": "Elkhart Lake indoor-pool home",
      "ko": "엘크하트 레이크 실내 수영장 하우스"
    },
    "location": {
      "en": "Near Elkhart Lake",
      "ko": "엘크하트 레이크 근교"
    },
    "capacity": 13,
    "bedrooms": 5,
    "baths": 4,
    "rating": null,
    "url": "https://evolve.com/vacation-rentals/us/wi/elkhart-lake/512606",
    "sourceName": "Evolve",
    "photo": "https://d3kpuwe9hkbxpz.cloudfront.net/listings/512606/a0FPl000002jvk9MAA?width=1200",
    "sources": [
      {
        "label": {
          "en": "Manager listing & house rules",
          "ko": "관리업체 숙소 정보·이용 규정"
        },
        "url": "https://evolve.com/vacation-rentals/us/wi/elkhart-lake/512606"
      }
    ],
    "text": {
      "en": {
        "fit": "Top pick for March amenities",
        "description": "Private indoor pool and hot tub in a separate pool house; Ice Age Trail 0.2 mile away.",
        "beds": "Two kings + queen for six adults; twins for the child. Additional bunks and sofa bed.",
        "check": "Three entry steps, multiple floors; fourth bathroom is in the pool house. Confirm pool access and heating for your dates."
      },
      "ko": {
        "fit": "3월 실내 시설을 중시한다면 첫 후보",
        "description": "별동에 전용 실내 수영장과 온수 욕조가 있고, 아이스 에이지 트레일이 약 320m 거리예요.",
        "beds": "성인은 킹 2개와 퀸 1개, 아이는 싱글 침대를 쓸 수 있어요. 이층침대와 소파베드도 있어요.",
        "check": "입구 계단 3개와 여러 층이 있어요. 네 번째 욕실은 수영장 별동에 있어요. 해당 날짜의 수영장 이용과 난방을 확인해요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Up to 2 pets. Published $50 pet fee, plus fees/taxes; weight limit unstated.",
        "ko": "최대 2마리. 반려동물 요금 $50에 수수료·세금이 추가돼요. 몸무게 제한은 미기재."
      },
      "source": "https://evolve.com/vacation-rentals/us/wi/elkhart-lake/512606",
      "checked": "2026-09-13"
    },
    "priceNote": {
      "en": "Splurge candidate; no March 2027 quote yet.",
      "ko": "비용이 큰 후보예요. 2027년 3월 견적은 아직 없어요."
    }
  },
  {
    "id": "birchwood-cabin",
    "region": "forest",
    "name": {
      "en": "Birchwood Log Cabin",
      "ko": "버치우드 통나무집"
    },
    "location": {
      "en": "Campbellsport · Kettle Moraine",
      "ko": "캠벨스포트 · 케틀모레인"
    },
    "capacity": 14,
    "bedrooms": 4,
    "baths": 2,
    "rating": null,
    "url": "https://www.birchwoodlogcabin.com/listings/455104",
    "sourceName": "Owner website",
    "photo": "https://bookingenginecdn.hostaway.com/listing/174384-455104-RIQTsOehtNK4fpLQurnPKmUFhHF4ODKX2wpWHzhGdFc-691de39d2abb4?width=1920&quality=70&format=webp&v=2",
    "sources": [
      {
        "label": {
          "en": "Vrbo rules",
          "ko": "Vrbo 이용 규정"
        },
        "url": "https://www.vrbo.com/3495865"
      },
      {
        "label": {
          "en": "Owner pet terms",
          "ko": "공식 반려견 약관"
        },
        "url": "https://www.birchwoodlogcabin.com/terms-and-conditions"
      }
    ],
    "text": {
      "en": {
        "fit": "Top pick for cabin atmosphere",
        "description": "Year-round log cabin on a peninsula, with lake views, wood stove, and generous gathering space.",
        "beds": "Three kings accommodate six adults; a queen in one downstairs room can suit the child. Fourth sleeping area is an open loft.",
        "check": "Birchwood Lake is view-only: no swimming, fishing, or boating. Stairs and a steep embankment; supervise the child."
      },
      "ko": {
        "fit": "통나무집 분위기를 원한다면 첫 후보",
        "description": "반도 지형에 자리한 연중 운영 통나무집. 호수 전망, 장작 난로, 넉넉한 공용 공간이 있어요.",
        "beds": "킹 3개에 성인 6명, 아래층 방의 추가 퀸에 아이가 잘 수 있어요. 네 번째 침실 공간은 개방형 로프트예요.",
        "check": "버치우드 호수는 감상만 가능해요. 수영·낚시·보트는 금지예요. 계단과 가파른 물가 경사가 있어 아이를 살펴야 해요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Prior approval required. Up to 2 dogs, each under 50 lb; kennel when alone, no beds/furniture. Fee unlisted.",
        "ko": "사전 승인 필요. 각각 50lb(약 22.7kg) 미만인 개 최대 2마리. 혼자 두면 켄넬 사용, 침대·가구 금지. 요금 미기재."
      },
      "source": "https://www.vrbo.com/3495865",
      "checked": "2026-09-13"
    }
  },
  {
    "id": "sandy-knoll",
    "region": "forest",
    "name": {
      "en": "Sandy Knoll Ranger House",
      "ko": "샌디놀 레인저 하우스"
    },
    "location": {
      "en": "West Bend · Sandy Knoll County Park",
      "ko": "웨스트벤드 · 샌디놀 카운티 공원"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 2.5,
    "rating": null,
    "url": "https://www.vrbo.com/739483",
    "sourceName": "Vrbo",
    "photo": "https://media.vrbo.com/lodging/32000000/31540000/31533200/31533148/ec4181e9.jpg?impolicy=resizecrop&ra=fit&rw=297",
    "sources": [
      {
        "label": {
          "en": "County park & rental information",
          "ko": "카운티 공원·대여 안내"
        },
        "url": "https://www.washcowisco.gov/departments/parks___trails/venues/the_barn_at_sandy_knoll"
      }
    ],
    "text": {
      "en": {
        "fit": "Practical park stay for a dog-centered trip",
        "description": "A straightforward house inside a county park, with trails, playgrounds, and an eight-acre dog park.",
        "beds": "Queen + double + two twins for six adults; double futon for the child.",
        "check": "Less design-focused than the other picks. Confirm the futon setup and dog-park access rules."
      },
      "ko": {
        "fit": "강아지와 공원에서 보내는 실용적인 선택",
        "description": "산책로와 놀이터, 약 9,800평 규모의 반려견 공원이 있는 카운티 공원 안 주택이에요.",
        "beds": "퀸 1개·더블 1개·싱글 2개에 성인 6명, 더블 푸톤에 아이가 잘 수 있어요.",
        "check": "다른 후보보다 디자인은 수수해요. 푸톤 침구와 반려견 공원 이용 규정을 확인해요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Up to 2 dogs; crate when unattended, no beds/furniture. Additional fee applies; confirm amount.",
        "ko": "개 최대 2마리. 혼자 두면 크레이트 사용, 침대·가구 금지. 추가 요금 액수는 확인이 필요해요."
      },
      "source": "https://www.vrbo.com/739483",
      "checked": "2026-09-13"
    }
  },
  {
    "id": "home-port",
    "region": "shore",
    "name": {
      "en": "Home Port Vacation Escape",
      "ko": "홈 포트 베케이션 이스케이프"
    },
    "location": {
      "en": "Port Washington · near downtown",
      "ko": "포트워싱턴 · 시내 근처"
    },
    "capacity": 14,
    "bedrooms": 4,
    "baths": 3,
    "rating": null,
    "url": "https://homeportvacationescapes.holidayfuture.com/listings/161404",
    "sourceName": "Owner website",
    "photo": "https://bookingenginecdn.hostaway.com/listing/52954-161404-0afj2--MZzyWrrZaoRhybnKtUi6fl9YqwZ1QXCVxe85s-66b69e5961191?width=1920&quality=70&format=webp&v=2",
    "sources": [
      {
        "label": {
          "en": "Vrbo listing & dog limit",
          "ko": "Vrbo 숙소 정보·반려견 제한"
        },
        "url": "https://www.vrbo.com/3238984"
      }
    ],
    "text": {
      "en": {
        "fit": "Top pick for a small-town weekend",
        "description": "An 1865 brick house, four blocks from downtown and Lake Michigan. Piano, wood stove, and heated downstairs tile.",
        "beds": "King + three queens + twin, with additional child/sofa beds. Plenty of conventional beds for seven.",
        "check": "Whole-house rental combines two apartments. Stairs between floors; upstairs footsteps can carry below."
      },
      "ko": {
        "fit": "작은 마을에서 보낼 주말의 첫 후보",
        "description": "1865년 벽돌집으로 시내와 미시간 호수에서 네 블록 거리예요. 피아노, 장작 난로, 아래층 온돌 타일이 있어요.",
        "beds": "킹 1개·퀸 3개·싱글 1개에 추가 아동용 침대와 소파베드가 있어요. 일곱 명의 일반 침대가 충분해요.",
        "check": "아파트 두 채를 합친 집 전체 대여예요. 층 사이 계단이 있고 위층 발소리가 아래로 들릴 수 있어요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Dogs only, up to 3. Weight limit and pet fee not published; confirm both.",
        "ko": "개만 가능하며 최대 3마리. 몸무게 제한과 반려견 요금은 미기재로 확인이 필요해요."
      },
      "source": "https://www.vrbo.com/3238984",
      "checked": "2026-09-13"
    }
  },
  {
    "id": "suncatcher",
    "region": "shore",
    "name": {
      "en": "The Suncatcher",
      "ko": "선캐처"
    },
    "location": {
      "en": "Sheboygan · near the lakefront",
      "ko": "셰보이건 · 호숫가 근처"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 2,
    "rating": null,
    "url": "https://www.vrbo.com/3711777",
    "sourceName": "Vrbo",
    "photo": "https://media.vrbo.com/lodging/101000000/100400000/100391500/100391495/a4ffea08.jpg?impolicy=resizecrop&ra=fit&rw=598",
    "sources": [],
    "text": {
      "en": {
        "fit": "Lake-and-town option with a fenced yard",
        "description": "Walkable to the shoreline and downtown, with a gas fireplace and child equipment.",
        "beds": "King + two queens cover six adults. Two extra sleeping spots are listed, but descriptions disagree: twins or floor mattresses.",
        "check": "Confirm the child’s actual bed before choosing this one; verify which child equipment is provided."
      },
      "ko": {
        "fit": "울타리 마당이 있는 호수 도시 숙소",
        "description": "호숫가와 시내까지 걸어갈 수 있고 가스 벽난로와 아동용 물품이 있어요.",
        "beds": "킹 1개·퀸 2개에 성인 6명. 추가 두 자리는 싱글 침대인지 바닥 매트리스인지 설명이 서로 달라요.",
        "check": "선택 전에 아이의 실제 침대를 꼭 확인해요. 제공되는 아동용 물품도 확인이 필요해요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Up to 2 pets; fully fenced yard. Weight limits and pet fee are not stated in the checked Vrbo rules.",
        "ko": "반려동물 최대 2마리, 울타리 마당. 확인한 Vrbo 규정에는 몸무게 제한과 요금이 나와 있지 않아요."
      },
      "source": "https://www.vrbo.com/3711777",
      "checked": "2026-09-13"
    }
  },
  {
    "id": "brady-retreat",
    "region": "city",
    "name": {
      "en": "Brady St Retreat #2",
      "ko": "브래디 스트리트 리트리트 #2"
    },
    "location": {
      "en": "Milwaukee · Brady Street",
      "ko": "밀워키 · 브래디 스트리트"
    },
    "capacity": 8,
    "bedrooms": 4,
    "baths": 2,
    "rating": null,
    "url": "https://www.vrbo.com/4822393",
    "sourceName": "Vrbo",
    "photo": "https://media.vrbo.com/lodging/121000000/120450000/120444400/120444316/cacd3ff0.jpg?impolicy=resizecrop&rw=297&ra=fit",
    "sources": [
      {
        "label": {
          "en": "Expedia pet-policy cross-check",
          "ko": "Expedia 반려동물 규정 교차 확인"
        },
        "url": "https://www.expedia.com/Milwaukee-Hotels-Brady-St-Retreat-4BR-House-W-Patio-Fenced-Yard.h120444316.Hotel-Information"
      }
    ],
    "text": {
      "en": {
        "fit": "Top pick for an urban weekend",
        "description": "Restaurants a minute’s walk away, a private fenced yard, and one garage space.",
        "beds": "Three queens for six adults; fourth bedroom has a twin daybed that expands to a full bed.",
        "check": "Near nightlife, so consider possible evening noise. Confirm stairs and parking for additional cars."
      },
      "ko": {
        "fit": "도시에서 보낼 주말의 첫 후보",
        "description": "식당까지 도보 약 1분. 전용 울타리 마당과 차고 한 자리가 있어요.",
        "beds": "퀸 3개에 성인 6명. 네 번째 방에는 더블 크기로 펼쳐지는 싱글 데이베드가 있어요.",
        "check": "유흥가 근처라 저녁 소음 가능성을 고려해요. 계단과 추가 차량 주차를 확인해요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Up to 2 pets, each under 50 lb. Pet fee not disclosed.",
        "ko": "각각 50lb(약 22.7kg) 미만인 반려동물 최대 2마리. 요금은 미기재."
      },
      "source": "https://www.vrbo.com/4822393",
      "checked": "2026-09-13"
    }
  },
  {
    "id": "racine-modern",
    "region": "city",
    "name": {
      "en": "Mid-Century Modern Dream Getaway",
      "ko": "미드센추리 모던 드림 겟어웨이"
    },
    "location": {
      "en": "Racine area · near Lake Michigan",
      "ko": "러신 지역 · 미시간 호수 근처"
    },
    "capacity": 7,
    "bedrooms": 3,
    "baths": 2.5,
    "rating": null,
    "url": "https://www.vrbo.com/3809365",
    "sourceName": "Vrbo",
    "photo": "https://media.vrbo.com/lodging/102000000/101750000/101747500/101747484/e401416a.jpg?impolicy=resizecrop&rw=598&ra=fit",
    "sources": [],
    "text": {
      "en": {
        "fit": "Architecture wildcard — one dog only",
        "description": "Window-filled mid-century home with billiards, piano, and a fenced dog run. Seasonal lake views from a wooded bluff; no direct lake access.",
        "beds": "Listing disagrees: king + two queens + twin versus two queens + double + folding twin. Confirm all bed sizes.",
        "check": "Suitable only after resolving beds. Interior steps and a backyard ravine."
      },
      "ko": {
        "fit": "건축이 매력적인 별도 후보 — 개 한 마리만",
        "description": "큰 창이 있는 미드센추리 주택. 당구대, 피아노, 울타리 반려견 공간이 있어요. 숲이 우거진 절벽 위 계절별 호수 전망이며 호수로 직접 내려갈 수 없어요.",
        "beds": "침대 설명이 달라요. 킹·퀸 2개·싱글인지, 퀸 2개·더블·접이식 싱글인지 전부 확인해야 해요.",
        "check": "잠자리 확인 후 판단할 후보예요. 실내 단차와 뒤뜰 계곡이 있어요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Only 1 dog, under 50 lb. Pet fee not specified.",
        "ko": "50lb(약 22.7kg) 미만인 개 한 마리만 가능해요. 요금은 미기재."
      },
      "source": "https://www.vrbo.com/3809365",
      "checked": "2026-09-13"
    }
  },
  {
    "id": "williams-bay",
    "region": "geneva",
    "name": {
      "en": "Lakeside Family Home · Walk to Beach",
      "ko": "호숫가 패밀리 홈 · 해변 도보 거리"
    },
    "location": {
      "en": "Williams Bay · Geneva Lake",
      "ko": "윌리엄스베이 · 제네바 호수"
    },
    "capacity": 8,
    "bedrooms": 3,
    "baths": 2,
    "rating": null,
    "url": "https://www.vrppartners.com/rentals/lakeside-family-home-walk-to-beach",
    "sourceName": "VRP Partners",
    "photo": "https://assets.guesty.com/image/upload/v1764267552/production/63ac959132a6260056687d2f/baiahdrbbetebnwoib8q.jpg",
    "sources": [
      {
        "label": {
          "en": "Matching Vrbo listing",
          "ko": "동일 숙소 Vrbo 정보"
        },
        "url": "https://www.vrbo.com/4975251"
      }
    ],
    "text": {
      "en": {
        "fit": "Practical alternative near Geneva Lake",
        "description": "Covered porch, substantial kitchen, and a walkable lake-and-dining location. A convenient town house rather than a secluded retreat.",
        "beds": "King; queen; queen + twin bunks. Six adults use conventional beds; child shares a family bedroom.",
        "check": "Reviews mention road noise and occasional cleaning issues. Confirm current condition before booking."
      },
      "ko": {
        "fit": "제네바 호수 근처의 실용적인 대안",
        "description": "지붕 있는 현관, 넉넉한 주방, 걸어갈 수 있는 호숫가와 식당. 외딴 휴양지보다는 편리한 마을 주택이에요.",
        "beds": "킹 방, 퀸 방, 퀸과 싱글 이층침대 방. 성인 6명은 일반 침대, 아이는 가족과 같은 방을 써요.",
        "check": "후기에 도로 소음과 일부 청결 문제가 언급돼요. 예약 전 현재 상태를 확인해요."
      }
    },
    "petPolicy": {
      "status": "allowed",
      "detail": {
        "en": "Pets explicitly allowed. Number, size limits, and fees are unpublished; confirm for your dogs.",
        "ko": "반려동물 허용 명시. 마릿수·크기 제한과 요금이 미기재라 우리 강아지 조건으로 확인해야 해요."
      },
      "source": "https://www.vrppartners.com/rentals/lakeside-family-home-walk-to-beach",
      "checked": "2026-09-13"
    }
  }
];
