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
        places: [],
      },
      {
        name: "저비스 베이",
        places: [],
      },
      {
        name: "울릉공(카이야마)",
        places: [],
      },
      {
        name: "뉴카슬",
        places: [],
      },
    ],
  },
  {
    id: "food",
    name: "식당",
    subs: [
      {
        name: "시티. 공항",
        places: [],
      },
      {
        name: "파라마타",
        places: [],
      },
      {
        name: "실버워터 웨스트라이드",
        places: [],
      },
      {
        name: "혼스비",
        places: [],
      },
      {
        name: "에핑지역",
        places: [],
      },
      {
        name: "불루마운틴(펜리스.블랙타운)",
        places: [],
      },
      {
        name: "부페",
        places: [],
      },
    ],
  },
  {
    id: "hotel",
    name: "호텔",
    subs: [
      { name: "시티.공항", places: [] },
      { name: "아타몬. 노스라이드", places: [] },
      { name: "올림픽 팍. 맥콰리 팍", places: [] },
      { name: "파라마타. 뱅스타운", places: [] },
      { name: "카브라마타,워릭팜", places: [] },
      { name: "블랙타운.이스턴 클릭", places: [] },
      { name: "벨라비스타.노웨스트", places: [] },
      { name: "웨스트 HQ. 펜리스.리버플", places: [] },
      { name: "뉴카슬.나우라", places: [] },
    ],
  },
  {
    id: "shop",
    name: "쇼핑",
    subs: [
      {
        name: "양모",
        places: [],
      },
      {
        name: "제약",
        places: [],
      },
      {
        name: "잡화",
        places: [],
      },
    ],
  },
  {
    id: "etc",
    name: "기타",
    subs: [
      {
        name: "벤 정비공장",
        places: [],
      },
      {
        name: "회사",
        places: [],
      },
      {
        name: "금호 타이어",
        places: [],
      },
      {
        name: "코치 검사",
        places: [],
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
