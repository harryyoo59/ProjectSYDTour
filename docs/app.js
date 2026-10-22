const DATA = [
  {
    id: "airport",
    name: "공항",
    subs: [
      {
        name: "국제선 출국장",
        places: [
          {
            name: "국제선 출국장",
            mapsQuery: "Sydney Airport Terminal 1 Departures",
          },
        ],
      },
      {
        name: "국내선 출국장",
        places: [
          {
            name: "국내선 출국장",
            mapsQuery: "Sydney Airport Terminal 2 Departures",
          },
        ],
      },
    ],
  },
  {
    id: "spot-city",
    name: "관광지(시티)",
    subs: [
      {
        name: "시티",
        places: [
          {
            name: "오페라하우스",
            mapsQuery: "Sydney Opera House",
          },
          {
            name: "성당",
            mapsQuery: "St Mary's Cathedral Sydney",
          },
          {
            name: "해양 박물관",
            mapsQuery: "Australian National Maritime Museum",
          },
          {
            name: "킹스 와프",
            mapsQuery: "King Street Wharf Sydney",
          },
          {
            name: "수족관",
            mapsQuery: "SEA LIFE Sydney Aquarium",
          },
          {
            name: "시드니타워",
            mapsQuery: "Sydney Tower Eye",
          },
          {
            name: "시드니 대학",
            mapsQuery: "University of Sydney",
          },
          {
            name: "천문대",
            mapsQuery: "Sydney Observatory",
          },
          {
            name: "미술관",
            mapsQuery: "Art Gallery of New South Wales",
          },
          {
            name: "라페 로즈",
            mapsQuery: "La Perouse Sydney",
          },
          {
            name: "수산시장",
            mapsQuery: "Sydney Fish Market",
          },
          {
            name: "트램쉐드",
            mapsQuery: "Tramsheds Harold Park Sydney",
          },
        ],
      },
      {
        name: "본다이 비치",
        places: [
          {
            name: "갭팍",
            mapsQuery: "Gap Park Sydney",
          },
          {
            name: "더들리 페이지",
            mapsQuery: "Dudley Page Reserve Dover Heights",
          },
          {
            name: "본다이비치",
            mapsQuery: "Bondi Beach",
          },
          {
            name: "브론테 비치",
            mapsQuery: "Bronte Beach Sydney",
          },
          {
            name: "캠프 코브 비치",
            mapsQuery: "Camp Cove Beach Sydney",
          },
        ],
      },
      {
        name: "맨리",
        places: [
          {
            name: "맨리와프",
            mapsQuery: "Manly Wharf",
          },
          {
            name: "노스 헤드",
            mapsQuery: "North Head Manly",
          },
          {
            name: "맨리 스타벅스",
            mapsQuery: "Starbucks Manly",
          },
          {
            name: "셀리 비치",
            mapsQuery: "Shelly Beach Manly",
          },
          {
            name: "사우스 스테인 메디컬 센터",
            mapsQuery: "South Steyne Medical Centre Manly",
          },
          {
            name: "드리프트 카페",
            mapsQuery: "Drift Cafe Manly",
          },
        ],
      },
      {
        name: "야경투어",
        places: [
          {
            name: "오페라하우스",
            mapsQuery: "Sydney Opera House",
          },
          {
            name: "크루즈 터미널",
            mapsQuery: "Overseas Passenger Terminal Circular Quay",
          },
          {
            name: "브릿지 스테어",
            mapsQuery: "Sydney Harbour Bridge stairs",
          },
          {
            name: "밀슨스 포인트",
            mapsQuery: "Milsons Point Sydney",
          },
          {
            name: "소피텔 호텔",
            mapsQuery: "Sofitel Sydney Darling Harbour",
          },
          {
            name: "천문대",
            mapsQuery: "Sydney Observatory",
          },
          {
            name: "블루스 포인트",
            mapsQuery: "Blues Point Reserve Sydney",
          },
          {
            name: "파크 하얏트",
            mapsQuery: "Park Hyatt Sydney",
          },
        ],
      },
    ],
  },
  {
    id: "spot-outer",
    name: "관광지(외곽)",
    subs: [
      {
        name: "불루 마운틴",
        places: [
          {
            name: "시닉",
            mapsQuery: "Scenic World Blue Mountains",
          },
          {
            name: "누라 마을",
            mapsQuery: "Leura Village Blue Mountains",
          },
          {
            name: "보어스 락",
            mapsQuery: "Boars Head Rock Blue Mountains",
          },
          {
            name: "카힐스룩아웃",
            mapsQuery: "Cahills Lookout Blue Mountains",
          },
          {
            name: "엘시언 룩아웃",
            mapsQuery: "Olympian Lookout Blue Mountains",
          },
          {
            name: "린콜스 락",
            mapsQuery: "Lincolns Rock Blue Mountains",
          },
          {
            name: "웬트워스 폴",
            mapsQuery: "Wentworth Falls Lookout",
          },
          {
            name: "웬트워스 폭포",
            mapsQuery: "Wentworth Falls waterfall",
          },
        ],
      },
      {
        name: "포트 스테판",
        places: [
          {
            name: "와용 휴게소",
            mapsQuery: "Wyong Rest Area",
          },
          {
            name: "오크 베일 동물원",
            mapsQuery: "Oakvale Wildlife Park Port Stephens",
          },
          {
            name: "B 팜 머레이",
            mapsQuery: "B Farm Murray Port Stephens",
          },
          {
            name: "안나 베이",
            mapsQuery: "Anna Bay NSW",
          },
          {
            name: "넬슨 베이",
            mapsQuery: "Nelson Bay NSW",
          },
          {
            name: "엠폴 푸더리",
            mapsQuery: "Ample Fudgery Nelson Bay",
          },
        ],
      },
      {
        name: "헌터스 벨리",
        places: [
          {
            name: "헌터스 밸리 치즈 팩토리",
            mapsQuery: "Hunter Valley Cheese Company",
          },
          {
            name: "헌터 밸리 가든스",
            mapsQuery: "Hunter Valley Gardens",
          },
          {
            name: "헌터 밸리 와이너리",
            mapsQuery: "Mistletoe Lane & Hermitage Road Pokolbin",
          },
        ],
      },
      {
        name: "저비스 베이",
        places: [
          {
            name: "쿨랑가타 와이너리",
            mapsQuery: "Coolangatta Estate Winery Shoalhaven",
          },
          {
            name: "저비스베이",
            mapsQuery: "Jervis Bay NSW",
          },
          {
            name: "하이엄스 비치",
            mapsQuery: "Hyams Beach Jervis Bay",
          },
          {
            name: "미나무라 rain Forest",
            mapsQuery: "Minnamurra Rainforest",
          },
          {
            name: "베리 마을",
            mapsQuery: "Berry NSW",
          },
        ],
      },
      {
        name: "울릉공(카이야마)",
        places: [
          {
            name: "발드힐 룩 아웃",
            mapsQuery: "Bald Hill Lookout Stanwell Park",
          },
          {
            name: "하버사이드 수산식당",
            mapsQuery: "Harbourside Seafood Restaurant Wollongong",
          },
          {
            name: "울릉공 플래그 스태프 등대",
            mapsQuery: "Flagstaff Hill Lighthouse Wollongong",
          },
          {
            name: "난천사",
            mapsQuery: "Nan Tien Temple Wollongong",
          },
          {
            name: "카이아마 등대",
            mapsQuery: "Kiama Lighthouse",
          },
          {
            name: "윈당 R S L",
            mapsQuery: "Windang RSL",
          },
        ],
      },
      {
        name: "뉴카슬",
        places: [
          {
            name: "노비스 비치",
            mapsQuery: "Nobbys Beach Newcastle",
          },
          {
            name: "뉴카슬 메모리얼 파크",
            mapsQuery: "Newcastle Memorial Park",
          },
          {
            name: "뉴카슬 성당",
            mapsQuery: "Christ Church Cathedral Newcastle",
          },
          {
            name: "엔터런스",
            mapsQuery: "The Entrance NSW",
          },
          {
            name: "캐이브즈 비치 룩 아웃",
            mapsQuery: "Caves Beach Lookout",
          },
        ],
      },
    ],
  },
  {
    id: "food",
    name: "식당",
    subs: [
      {
        name: "시티. 공항",
        places: [
          {
            name: "노보텔",
            mapsQuery: "Novotel Sydney",
          },
          {
            name: "목시",
            mapsQuery: "Moxy Sydney",
          },
          {
            name: "수련",
            mapsQuery: "수련 Sydney",
          },
          {
            name: "카페 퀸즈",
            mapsQuery: "Cafe Queens Sydney",
          },
          {
            name: "밀레오레",
            mapsQuery: "Milleore Sydney",
          },
          {
            name: "명장",
            mapsQuery: "명장 Sydney",
          },
          {
            name: "스크러피 머피",
            mapsQuery: "Scruffy Murphy's Sydney",
          },
          {
            name: "하버뷰",
            mapsQuery: "Harbour View Hotel Sydney",
          },
          {
            name: "디지 버드",
            mapsQuery: "Dizzy Bird Sydney",
          },
          {
            name: "리플스",
            mapsQuery: "Ripples Australian National Maritime Museum",
          },
          {
            name: "시나 마리나",
            mapsQuery: "6/7-41 Cowper Wharf Roadway, Woolloomooloo NSW 2011",
          },
          {
            name: "포춘 BAR",
            mapsQuery: "Fortune Bar Sydney",
          },
        ],
      },
      {
        name: "파라마타",
        places: [
          {
            name: "사리원",
            mapsQuery: "사리원 Parramatta",
          },
          {
            name: "마마 짱",
            mapsQuery: "마마 짱 Parramatta",
          },
          {
            name: "코리안 프라이드 치킨",
            mapsQuery: "1 Broughton St, Parramatta NSW 2150",
          },
        ],
      },
      {
        name: "실버 워터. 웨스트 라이드",
        places: [
          {
            name: "K푸드 초이스",
            mapsQuery: "K Food Choice Silverwater",
          },
          {
            name: "우마미마미",
            mapsQuery: "Umami Mami West Ryde",
          },
          {
            name: "함지박 웨스트 라이드",
            mapsQuery: "함지박 West Ryde",
          },
          {
            name: "원티드 치킨",
            mapsQuery: "Wanted Chicken West Ryde",
          },
        ],
      },
      {
        name: "혼스비. 에핑 지역",
        places: [
          {
            name: "비원 혼스비",
            mapsQuery: "비원 Hornsby",
          },
          {
            name: "토르",
            mapsQuery: "토르 Hornsby Epping",
          },
          {
            name: "갈비 하우스",
            mapsQuery: "갈비 하우스 Hornsby",
          },
          {
            name: "먼데이 모닝 카페",
            mapsQuery: "Monday Morning Cafe Hornsby",
          },
        ],
      },
      {
        name: "불루마운틴(펜리스.블랙타운)",
        places: [
          {
            name: "커피클럽 네피안 리버",
            mapsQuery: "Coffee Club Nepean River Penrith",
          },
          {
            name: "라샤의 팬니스",
            mapsQuery: "라샤의 펜리스 Penrith",
          },
          {
            name: "에버튼",
            mapsQuery: "Everton Penrith Blacktown",
          },
          {
            name: "마운틴코",
            mapsQuery: "Mountain Co Blue Mountains",
          },
          {
            name: "팔레 로얄",
            mapsQuery: "Palais Royal Penrith",
          },
          {
            name: "라샤의 웨더릴 팍",
            mapsQuery: "Shop 200, 581/583 Polding St, Wetherill Park NSW 2164",
          },
        ],
      },
      {
        name: "부페",
        places: [
          {
            name: "메릴랜드 RSL",
            mapsQuery: "Merrylands RSL",
          },
          {
            name: "루소 RSL",
            mapsQuery: "루소 RSL Sydney",
          },
          {
            name: "펜리스 RSL",
            mapsQuery: "Penrith RSL",
          },
          {
            name: "88부페",
            mapsQuery: "88 Buffet Sydney",
          },
          {
            name: "BBQ 시티부페",
            mapsQuery: "BBQ City Buffet Sydney",
          },
          {
            name: "스타시티 부페",
            mapsQuery: "The Star Sydney Buffet",
          },
        ],
      },
    ],
  },
  {
    id: "hotel",
    name: "호텔",
    subs: [
      {
        name: "시티.공항",
        places: [
          {
            name: "노보텔 에어포트",
            mapsQuery: "Novotel Sydney Airport",
          },
          {
            name: "목시 에어포트",
            mapsQuery: "Moxy Sydney Airport",
          },
          {
            name: "노보텔 브라이트 레 샌드",
            mapsQuery: "Novotel Brighton-le-Sands",
          },
          {
            name: "크라운 플라자 공항",
            mapsQuery: "Crowne Plaza Sydney Airport",
          },
          {
            name: "아이비스 공항",
            mapsQuery: "ibis Sydney Airport",
          },
          {
            name: "트레블로지 공항",
            mapsQuery: "Travelodge Hotel Sydney Airport",
          },
          {
            name: "아모라 자미슨 호텔",
            mapsQuery: "Amora Hotel Jamison Sydney",
          },
          {
            name: "그레이스 호텔",
            mapsQuery: "The Grace Hotel Sydney",
          },
          {
            name: "레디슨 블루 프라자",
            mapsQuery: "Radisson Blu Plaza Hotel Sydney",
          },
          {
            name: "푸라마 달링 하버",
            mapsQuery: "Pullman Sydney Darling Harbour",
          },
          {
            name: "노스 시드니 하버뷰 호텔",
            mapsQuery: "North Sydney Harbourview Hotel",
          },
        ],
      },
      {
        name: "아타몬. 노스라이드",
        places: [
          {
            name: "로열 퍼시픽",
            mapsQuery: "Royal Pacific Hotel Artarmon",
          },
          {
            name: "옥스 노스라이드",
            mapsQuery: "Oaks Northside Hotel Sydney",
          },
        ],
      },
      {
        name: "올림픽 팍. 맥콰리 팍",
        places: [
          {
            name: "폴먼 올림픽 팍",
            mapsQuery: "Pullman Sydney Olympic Park",
          },
          {
            name: "노보텔 올림픽 팍",
            mapsQuery: "Novotel Sydney Olympic Park",
          },
          {
            name: "크라운 플라자 멕쿼리 팍",
            mapsQuery: "Crowne Plaza Sydney Macquarie Park",
          },
          {
            name: "홀리데이인 익스프레스멕쿼리 팍",
            mapsQuery: "Holiday Inn Express Sydney Macquarie Park",
          },
          {
            name: "머큐어 멕쿼리 팍",
            mapsQuery: "Mercure Sydney Macquarie Park",
          },
        ],
      },
      {
        name: "파라마타. 뱅스타운",
        places: [
          {
            name: "리지스 뱅스타운",
            mapsQuery: "Rydges Bankstown",
          },
          {
            name: "머큐어 뱅스타운",
            mapsQuery: "Mercure Sydney Bankstown",
          },
          {
            name: "리지스 파라마타",
            mapsQuery: "Rydges Parramatta",
          },
          {
            name: "머큐어 파라마타",
            mapsQuery: "Mercure Sydney Parramatta",
          },
          {
            name: "맨트라 파라마타",
            mapsQuery: "Mantra Parramatta",
          },
          {
            name: "홀리데이인 파라마타",
            mapsQuery: "Holiday Inn Parramatta",
          },
          {
            name: "노보텔 파라마타",
            mapsQuery: "Novotel Sydney Parramatta",
          },
          {
            name: "파크로얄 파라마타",
            mapsQuery: "Parkroyal Parramatta",
          },
        ],
      },
      {
        name: "카브라마타,워릭팜",
        places: [
          {
            name: "라마다 카브라마타",
            mapsQuery: "Ramada Hotel Cabramatta",
          },
          {
            name: "홀리데이인 워릭 팜",
            mapsQuery: "Holiday Inn Warwick Farm",
          },
          {
            name: "노보텔 카브라마타",
            mapsQuery: "Novotel Sydney Cabramatta",
          },
          {
            name: "읠리암 워릭팜",
            mapsQuery: "Gov Macquarie Dr, Warwick Farm NSW 2170",
          },
        ],
      },
      {
        name: "블랙타운.이스턴 클릭",
        places: [
          {
            name: "에투라 블랙타운",
            mapsQuery: "Atura Blacktown",
          },
          {
            name: "머큐어 블랙타운",
            mapsQuery: "Mercure Blacktown",
          },
          {
            name: "알파 호텔 이스턴 클릭",
            mapsQuery: "Alpha Hotel Eastern Creek",
          },
        ],
      },
      {
        name: "벨라비스타.노웨스트",
        places: [
          {
            name: "퀘스트 벨라 비스타",
            mapsQuery: "Quest Bella Vista",
          },
          {
            name: "비시 디어 노웨스트",
            mapsQuery: "Visy Dior Hotel Norwest",
          },
        ],
      },
      {
        name: "웨스트 HQ. 펜리스.리버플",
        places: [
          {
            name: "노보텔 루테힐",
            mapsQuery: "Novotel Rooty Hill",
          },
          {
            name: "머큐어 펜리스",
            mapsQuery: "Mercure Penrith",
          },
          {
            name: "홀리데이인 세인트 메리스",
            mapsQuery: "Holiday Inn St Marys Sydney",
          },
          {
            name: "헌츠 호텔 리버플",
            mapsQuery: "Hunts Hotel Liverpool",
          },
        ],
      },
      {
        name: "뉴카슬.나우라",
        places: [
          {
            name: "더 게이트웨이 뉴카슬",
            mapsQuery: "The Gateway Inn Newcastle",
          },
          {
            name: "머큐어 뉴카슬",
            mapsQuery: "Mercure Newcastle",
          },
          {
            name: "아처 호텔 나우라",
            mapsQuery: "Archer Hotel Nowra",
          },
        ],
      },
    ],
  },
  {
    id: "shop",
    name: "동물원. 쇼핑",
    subs: [
      {
        name: "동물원",
        places: [
          {
            name: "시드니 주",
            mapsQuery: "Sydney Zoo",
          },
          {
            name: "페더데일",
            mapsQuery: "Featherdale Wildlife Park",
          },
          {
            name: "캄슬리 시티 팜",
            mapsQuery: "Calmsley Hill City Farm",
          },
        ],
      },
      {
        name: "양모",
        places: [
          {
            name: "울랜드",
            mapsQuery: "Wooland near McDonald's, Minchinbury NSW 2770",
          },
          {
            name: "스미스 필드 양모",
            mapsQuery: "193-197 Warren Rd, Smithfield NSW",
          },
          {
            name: "실버워터 양모",
            mapsQuery: "2 Vore St, Silverwater NSW",
          },
        ],
      },
      {
        name: "제약",
        places: [
          {
            name: "퓨어 오스트레일리아",
            mapsQuery: "Pure Australia Sydney",
          },
          {
            name: "바이오",
            mapsQuery: "31 Maddox St, Alexandria NSW",
          },
          {
            name: "아이시스",
            mapsQuery: "195 Botany Rd, Waterloo NSW 2017",
          },
          {
            name: "더 그라운드",
            mapsQuery: "7a/2 Huntley St, Alexandria NSW 2015",
          },
        ],
      },
      {
        name: "잡화",
        places: [
          {
            name: "시드니 듀티 프리 SDF",
            mapsQuery: "136 Liverpool St, Sydney NSW",
          },
          {
            name: "로시드",
            mapsQuery: "101 Sussex St, Sydney NSW 2000",
          },
          {
            name: "피어몬트",
            mapsQuery: "25 Harvey St, Pyrmont NSW",
          },
        ],
      },
    ],
  },
  {
    id: "etc",
    name: "기타",
    subs: [
      {
        name: "벤 정비공장",
        places: [
          {
            name: "V $ G 모터 메카닉 리페어",
            mapsQuery: "V & G Motor Mechanic Repairs, 21 Forrester St, Kingsgrove NSW 2208",
          },
        ],
      },
      {
        name: "회사",
        places: [
          {
            name: "샤인코치",
            mapsQuery: "187 John St, Lidcombe NSW 2141",
          },
        ],
      },
      {
        name: "금호 타이어",
        places: [
          {
            name: "보쉬 카 서비스",
            mapsQuery: "1-5 Vore St, Silverwater NSW",
          },
        ],
      },
      {
        name: "코치 검사",
        places: [
          {
            name: "서비스 NSW",
            mapsQuery: "15 River St, Silverwater NSW",
          },
        ],
      },
      {
        name: "버스 수리",
        places: [],
      },
    ],
  },
];

const state = {
  level: "home", // home | sub | dest
  categoryId: null,
  subIndex: null,
};

const screenEl = document.getElementById("screen");
const backBtn = document.getElementById("backBtn");
const screenHint = document.getElementById("screenHint");
const footNote = document.getElementById("footNote");
const topbar = document.querySelector(".topbar");

function getCategory() {
  return DATA.find((c) => c.id === state.categoryId) || null;
}

function getSub() {
  const cat = getCategory();
  if (!cat || state.subIndex == null) return null;
  return cat.subs[state.subIndex] || null;
}

const LAST_PLACE_KEY = "syd-tour-map:last-place";

function normalizePlace(place) {
  if (typeof place === "string") {
    return {
      name: place,
      mapsQuery: place,
      mapsLat: null,
      mapsLng: null,
    };
  }
  return {
    name: place.name,
    mapsQuery: place.mapsQuery || place.name,
    mapsLat: place.mapsLat ?? null,
    mapsLng: place.mapsLng ?? null,
  };
}

function placeDestinationParam(place) {
  if (place.mapsLat != null && place.mapsLng != null) {
    return `${place.mapsLat},${place.mapsLng}`;
  }
  if (place.mapsQuery) return place.mapsQuery;
  return place.name || null;
}

function saveLastPlace(place) {
  try {
    localStorage.setItem(
      LAST_PLACE_KEY,
      JSON.stringify({
        name: place.name,
        mapsQuery: place.mapsQuery,
        mapsLat: place.mapsLat,
        mapsLng: place.mapsLng,
        savedAt: Date.now(),
      })
    );
  } catch (_) {
    /* ignore quota / private mode */
  }
}

function mapsDirectionsUrl(place) {
  const destination = placeDestinationParam(place);
  if (!destination) return null;
  // 현재 위치 → 목적지, 운전·베스트(추천) 경로, 바로 길안내
  const params = new URLSearchParams({
    api: "1",
    destination,
    travelmode: "driving",
    dir_action: "navigate",
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function openMapsDirections(place) {
  const destination = placeDestinationParam(place);
  if (!destination) return;

  saveLastPlace(place);

  const q = encodeURIComponent(destination);
  const ua = navigator.userAgent || "";
  const webUrl = mapsDirectionsUrl(place);

  // 핸드폰: 구글 지도 앱에서 베스트 운전 경로로 바로 길안내
  // (인터넷 지도 설명·경로 고르기 화면을 건너뜀)
  if (/Android/i.test(ua)) {
    window.location.href = `google.navigation:q=${q}&mode=d`;
    return;
  }
  if (/iPhone|iPad|iPod/i.test(ua)) {
    const appUrl = `comgooglemaps://?daddr=${q}&directionsmode=driving&navigate=1`;
    let openedApp = false;
    const onHide = () => {
      openedApp = true;
      document.removeEventListener("visibilitychange", onHide);
    };
    document.addEventListener("visibilitychange", onHide);
    window.location.href = appUrl;
    setTimeout(() => {
      document.removeEventListener("visibilitychange", onHide);
      // 앱이 안 열린 경우에만 인터넷 지도로 이동
      if (!openedApp && !document.hidden) {
        window.location.href = webUrl;
      }
    }, 1200);
    return;
  }

  // 컴퓨터: 구글이 경로 설명 화면을 강제하므로 Best 운전 경로로만 연다
  window.location.assign(webUrl);
}

function setHomeChrome(isHome) {
  topbar.classList.toggle("is-home", isHome);
  screenEl.classList.toggle("is-home", isHome);
}

function render() {
  if (state.level === "home") {
    backBtn.hidden = true;
    setHomeChrome(true);
    screenHint.textContent = "투어 지도";
    footNote.textContent = "원하는 곳을 눌러 주세요";
    screenEl.innerHTML = `
      <div class="home-hero">
        <img class="home-icon" src="./icon.png" alt="" width="72" height="72" />
        <div class="home-hero-text">
          <h1 class="screen-title">SYD Tour Map</h1>
          <p class="screen-desc">장소를 저장하고 바로 찾아가기</p>
        </div>
      </div>
      <div class="category-grid" role="list">
        ${DATA.map(
          (cat) => `
          <button type="button" class="cat-btn" data-cat="${cat.id}" role="listitem">
            <span class="cat-label">${cat.name}</span>
            <span class="cat-meta">${cat.subs.length}개 그룹</span>
          </button>`
        ).join("")}
      </div>
      <p class="screen-notice">모든 경로는 유료도로 포함 최단·빠른길로 바로 안내합니다</p>
      <p class="screen-notice">이 목적지는 25인승 버스 기준으로 안내하는 것으로, 해당 차량이 아닌 경우 목적지 주변에서 다시 살펴보기 바랍니다</p>
    `;
    screenEl.querySelectorAll("[data-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.level = "sub";
        state.categoryId = btn.getAttribute("data-cat");
        state.subIndex = null;
        render();
      });
    });
    return;
  }

  setHomeChrome(false);

  const cat = getCategory();
  if (!cat) {
    state.level = "home";
    render();
    return;
  }

  if (state.level === "sub") {
    backBtn.hidden = false;
    screenHint.textContent = cat.name;
    footNote.textContent = "소그룹을 고르면 장소 목록이 나옵니다";
    screenEl.innerHTML = `
      <div class="list" role="list">
        ${cat.subs
          .map(
            (sub, idx) => `
          <button type="button" class="list-item" data-sub="${idx}" role="listitem">
            <span class="list-name">${sub.name}</span>
            <span class="list-hint">${sub.places.length}곳</span>
          </button>`
          )
          .join("")}
      </div>
    `;
    screenEl.querySelectorAll("[data-sub]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.level = "dest";
        state.subIndex = Number(btn.getAttribute("data-sub"));
        render();
      });
    });
    return;
  }

  const sub = getSub();
  if (!sub) {
    state.level = "sub";
    render();
    return;
  }

  backBtn.hidden = false;
  screenHint.textContent = sub.name;
  const places = sub.places.map(normalizePlace);
  if (places.length === 0) {
    footNote.textContent = "목적지를 추가하면 여기에서 안내합니다";
    screenEl.innerHTML = `
      <p class="screen-desc">아직 저장된 목적지가 없습니다.</p>
    `;
    return;
  }
  footNote.textContent = "";
  screenEl.innerHTML = `
    <div class="list" role="list">
      ${places
        .map(
          (place, idx) => `
        <button type="button" class="list-item dest-item dest-item--maps" data-place="${idx}" role="listitem">
          <div class="dest-row">
            <span class="dest-mark" aria-hidden="true"></span>
            <span class="list-name">${place.name}</span>
          </div>
        </button>`
        )
        .join("")}
    </div>
  `;
  screenEl.querySelectorAll("[data-place].dest-item--maps").forEach((btn) => {
    btn.addEventListener("click", () => {
      const place = places[Number(btn.getAttribute("data-place"))];
      openMapsDirections(place);
    });
  });
}

backBtn.addEventListener("click", () => {
  if (state.level === "dest") {
    state.level = "sub";
    state.subIndex = null;
  } else if (state.level === "sub") {
    state.level = "home";
    state.categoryId = null;
    state.subIndex = null;
  }
  render();
});

render();
