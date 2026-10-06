const DATA = [
  {
    id: "airport",
    name: "공항",
    subs: [
      {
        name: "시드니 국제선(킹스포드 스미스)",
        places: [
          {
            name: "T1 국제선 터미널 출국장",
            mapsQuery: "Sydney Airport Terminal 1 Departures",
          },
          {
            name: "T1 국제선 픽업존",
            mapsQuery: "Regis Hotel Sydney Airport",
          },
          {
            name: "T1 승용차 주차장",
            mapsQuery: "Sydney Airport Terminal 1 Parking",
          },
        ],
      },
      {
        name: "시드니 국내선(킹스포드 스미스)",
        places: [
          {
            name: "T2 국내선 터미널",
            mapsQuery: "Sydney Airport Terminal 2",
          },
          {
            name: "T3 국내선 터미널",
            mapsQuery: "Sydney Airport Terminal 3",
          },
          {
            name: "국내선 도착장",
            mapsQuery: "Sydney Airport Terminal 2 Arrivals",
          },
        ],
      },
      {
        name: "내 차고지",
        places: [
          { name: "차고지 입구", mapsQuery: "차고지 입구" },
          { name: "주차 구역", mapsQuery: "주차 구역" },
          { name: "출차 게이트", mapsQuery: "출차 게이트" },
        ],
      },
    ],
  },
  {
    id: "spot",
    name: "관광지",
    subs: [
      {
        name: "도심 명소",
        places: ["도쿄 타워", "센소지", "시부야 스크램블"],
      },
      {
        name: "자연·전망",
        places: ["후지산 5합목", "하코네 아시노코", "오다이바 해변공원"],
      },
      {
        name: "테마파크",
        places: ["디즈니랜드", "유니버설 스튜디오"],
      },
    ],
  },
  {
    id: "food",
    name: "식당",
    subs: [
      {
        name: "한식",
        places: ["본가 설렁탕", "골목 비빔밥집", "제주 흑돼지 집"],
      },
      {
        name: "일식",
        places: ["스시 하나", "라멘 요코초", "돈카츠 마루"],
      },
      {
        name: "카페·디저트",
        places: ["시부야 로스팅 카페", "긴자 디저트 공방"],
      },
    ],
  },
  {
    id: "hotel",
    name: "호텔",
    subs: [
      {
        name: "시내 호텔",
        places: ["시티 센터 호텔", "그랜드 스테이 신주쿠"],
      },
      {
        name: "온천 숙소",
        places: ["하코네 온천 료칸", "아타미 바다 여관"],
      },
      {
        name: "게스트하우스",
        places: ["스테이 아사쿠사", "백팩커스 인 우에노"],
      },
    ],
  },
  {
    id: "shop",
    name: "쇼핑",
    subs: [
      {
        name: "백화점",
        places: ["신주쿠 이세탄", "긴자 미츠코시"],
      },
      {
        name: "시장·거리",
        places: ["츠키지 장외시장", "아메요코 상점가", "다케시타 거리"],
      },
      {
        name: "면세·잡화",
        places: ["공항 면세점", "돈키호테 시부야"],
      },
    ],
  },
  {
    id: "etc",
    name: "기타",
    subs: [
      {
        name: "교통",
        places: ["JR 패스 교환소", "시부야 버스 터미널", "우에노 역"],
      },
      {
        name: "생활 편의",
        places: ["세븐일레븐 편의점", "마츠모토 약국"],
      },
      {
        name: "의료·긴급",
        places: ["시내 종합병원", "여행자 클리닉"],
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

function mapsDirectionsUrl(place, origin) {
  const destination = placeDestinationParam(place);
  if (!destination) return null;
  const params = new URLSearchParams({
    api: "1",
    destination,
    travelmode: "driving",
  });
  // 출발점은 항상 현재 접속 위치(좌표)로 고정
  if (origin) params.set("origin", origin);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function openUrl(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function openMapsDirections(place, onStatus) {
  const destination = placeDestinationParam(place);
  if (!destination) return;

  saveLastPlace(place);

  const openWithOrigin = (origin) => {
    const url = mapsDirectionsUrl(place, origin);
    if (!url) return;
    if (onStatus) onStatus(null);
    openUrl(url);
  };

  if (!navigator.geolocation) {
    // 좌표를 못 구할 때는 origin 없이 열어 지도 앱이 현재 위치를 쓰게 함
    openWithOrigin(null);
    return;
  }

  if (onStatus) onStatus("현재 위치를 확인하는 중…");

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      openWithOrigin(`${pos.coords.latitude},${pos.coords.longitude}`);
    },
    () => {
      // 권한 거부·실패 시에도 목적지 길찾기는 열되, 지도가 현재 위치를 쓰도록 origin 생략
      openWithOrigin(null);
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 15000 }
  );
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
      <h1 class="screen-title">SYD Tour Map</h1>
      <p class="screen-desc">장소를 저장하고 바로 찾아가기</p>
      <p class="screen-notice">모든 경로는 유료도로 포함 빠른길로 안내합니다</p>
      <p class="screen-notice">이 목적지는 25인승 버스 기준으로 안내하는 것으로, 해당 차량이 아닌 경우 목적지 주변에서 다시 살펴보기 바랍니다</p>
      <div class="category-grid" role="list">
        ${DATA.map(
          (cat) => `
          <button type="button" class="cat-btn" data-cat="${cat.id}" role="listitem">
            <span class="cat-label">${cat.name}</span>
            <span class="cat-meta">${cat.subs.length}개 그룹</span>
          </button>`
        ).join("")}
      </div>
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
      <h1 class="screen-title">${cat.name}</h1>
      <p class="screen-desc">아래에서 소그룹을 선택하세요.</p>
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
  screenHint.textContent = `${cat.name} · ${sub.name}`;
  const places = sub.places.map(normalizePlace);
  footNote.textContent =
    "목적지를 누르면 저장 후, 현재 위치에서 경로 안내가 열립니다";
  screenEl.innerHTML = `
    <h1 class="screen-title">${sub.name}</h1>
    <p class="screen-desc">목적지를 누르면 저장되고, 지금 위치에서 구글 지도 길찾기가 열립니다.</p>
    <p class="screen-status" id="mapsStatus" hidden></p>
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
  const statusEl = document.getElementById("mapsStatus");
  const setStatus = (text) => {
    if (!statusEl) return;
    if (!text) {
      statusEl.hidden = true;
      statusEl.textContent = "";
      return;
    }
    statusEl.hidden = false;
    statusEl.textContent = text;
  };
  screenEl.querySelectorAll("[data-place].dest-item--maps").forEach((btn) => {
    btn.addEventListener("click", () => {
      const place = places[Number(btn.getAttribute("data-place"))];
      openMapsDirections(place, setStatus);
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
