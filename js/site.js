(function () {
  const BRANCHES = [
    {
      id: "seongsu",
      name: "성수본점",
      short: "성수",
      directors: "대표원장 최홍택 · 김인준",
      team: "1:1 근골격 · 기능 트레이닝",
      address: "서울특별시 성동구 성수일로 8길 39, 3층",
      near: "성수역 1번 출구 도보 약 3분",
      phone: "0507-1424-1377",
      tel: "050714241377",
      hours: "평일 09:00–22:00 · 토 09:00–16:00 · 일·공휴일 휴무",
      book: "https://naver.me/FqWQKXE8",
      map: "https://map.naver.com/p/search/%EB%A6%AC%EC%96%BC%EB%AC%B4%EB%B8%8C%EB%A8%BC%ED%8A%B8%20%EC%84%B1%EC%88%98",
      page: "branch-seongsu.html"
    },
    {
      id: "yeoksam",
      name: "역삼한티점",
      short: "역삼·한티",
      directors: "대표원장 최홍택 · 김인준",
      team: "1:1 근골격 · 기능 트레이닝",
      address: "서울특별시 강남구 언주로69길 8, 2층",
      near: "한티역·역삼역 인근",
      phone: "0507-1321-8512",
      tel: "050713218512",
      hours: "평일 09:00–22:00 · 토 09:00–16:00 · 일·공휴일 휴무",
      book: "https://naver.me/5IfSnoxj",
      map: "https://map.naver.com/p/search/%EB%A6%AC%EC%96%BC%EB%AC%B4%EB%B8%8C%EB%A8%BC%ED%8A%B8%20%EC%97%AD%EC%82%BC",
      page: "branch-yeoksam.html"
    },
    {
      id: "yaksu",
      name: "약수점",
      short: "약수",
      directors: "대표원장 박준규",
      team: "1:1 근골격 · 기능 트레이닝",
      address: "서울특별시 중구 동호로7길 32, 더약수빌딩 4층",
      near: "약수역 5·6·7번 출구 도보 약 3분",
      phone: "0507-1359-4596",
      tel: "050713594596",
      hours: "평일 09:00–21:00 · 토 09:00–18:00 · 일·공휴일 휴무",
      book: "https://naver.me/x2YstInq",
      map: "https://map.naver.com/p/entry/place/2018185163",
      page: "branch-yaksu.html"
    },
    {
      id: "incheon",
      name: "인천점",
      short: "인천·작전",
      directors: "대표원장 박준규",
      team: "1:1 근골격 · 기능 트레이닝",
      address: "인천광역시 계양구 봉오대로651번길 9, 힐스테이트자이(계양) 1층 커뮤니티",
      near: "작전역 7번 출구 도보 약 2분",
      phone: "0507-1312-4596",
      tel: "050713124596",
      hours: "평일 09:00–21:00 · 토 09:00–18:00 · 일·공휴일 휴무",
      book: "https://naver.me/xYNbHrY9",
      map: "https://map.naver.com/p/entry/place/2044467520",
      page: "branch-incheon.html"
    }
  ];

  const PAGES = [
    { t: "홈", h: "index.html", k: "소개 지점 상담" },
    { t: "왜 리얼무브먼트인가", h: "about.html", k: "소개 about" },
    { t: "원장 소개", h: "directors.html", k: "최홍택 김인준 박준규 원장" },
    { t: "강사진", h: "instructors.html", k: "물리치료사 강사" },
    { t: "평가 과정", h: "evaluation.html", k: "체형검사 4DEYE 움직임" },
    { t: "프로그램", h: "programs.html", k: "자세교정 기능재활" },
    { t: "자세교정 프로그램", h: "program-posture.html", k: "거북목 스웨이백 골반" },
    { t: "기능재활 프로그램", h: "program-conditioning.html", k: "어깨 허리 무릎 고관절" },
    { t: "전후 변화", h: "before-after.html", k: "before after 결과" },
    { t: "칼럼", h: "columns.html", k: "글 스트레칭 허리" },
    { t: "성수본점", h: "branch-seongsu.html", k: "성수" },
    { t: "역삼한티점", h: "branch-yeoksam.html", k: "역삼 한티" },
    { t: "약수점", h: "branch-yaksu.html", k: "약수" },
    { t: "인천점", h: "branch-incheon.html", k: "인천 작전 계양" },
    { t: "오시는 길 · 예약", h: "contact.html", k: "연락처 전화 예약" },
    { t: "자주 묻는 질문", h: "faq.html", k: "faq 상담" },
    { t: "채용", h: "recruiting.html", k: "구인 강사" }
  ];

  function header(page) {
    return (
      '<header class="site-header">' +
        '<a class="skip" href="#main">본문 바로가기</a>' +
        '<div class="wrap header-inner">' +
          '<button class="icon-btn" type="button" data-open-nav aria-label="메뉴 열기">' +
            '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true"><path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" stroke-width="1.8"/></svg>' +
          '</button>' +
          '<a class="logo" href="index.html"><img src="assets/logo.png" alt="REAL MOVEMENT"></a>' +
          '<div class="header-right">' +
            '<button class="icon-btn" type="button" data-open-search aria-label="검색">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="1.8"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="search-panel" id="search-panel">' +
          '<div class="wrap">' +
            '<input id="site-search" type="search" placeholder="지점, 프로그램, 강사를 검색해 보세요" autocomplete="off">' +
            '<div class="search-hits" id="search-hits"></div>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="nav-overlay" data-close-nav></div>' +
      '<aside class="nav-drawer" id="nav-drawer">' +
        '<div class="nav-top"><a class="brand" href="index.html">REAL MOVEMENT</a>' +
          '<button class="icon-btn" type="button" data-close-nav aria-label="닫기">✕</button></div>' +
        navBlock("소개", [
          ["about.html", "왜 리얼무브먼트인가"],
          ["instructors.html", "강사진"],
          ["directors.html", "원장 소개"]
        ], page) +
        navBlock("평가 · 프로그램", [
          ["evaluation.html", "평가 과정"],
          ["programs.html", "프로그램 한눈에"],
          ["program-posture.html", "자세교정 프로그램"],
          ["program-conditioning.html", "기능재활 프로그램"],
          ["before-after.html", "전후 변화"]
        ], page) +
        navBlock("지점", [
          ["branch-seongsu.html", "성수본점"],
          ["branch-yeoksam.html", "역삼한티점"],
          ["branch-yaksu.html", "약수점"],
          ["branch-incheon.html", "인천점"],
          ["contact.html", "오시는 길 · 예약"]
        ], page) +
        navBlock("콘텐츠", [
          ["columns.html", "칼럼"],
          ["faq.html", "자주 묻는 질문"],
          ["recruiting.html", "채용"],
          ["english.html", "English"]
        ], page) +
      '</aside>'
    );
  }

  function navBlock(title, items, page) {
    var html = '<div class="nav-group"><span>' + title + '</span><div class="nav-sub">';
    items.forEach(function (it) {
      html += '<a href="' + it[0] + '"' + (page === it[0] ? ' aria-current="page"' : "") + ">" + it[1] + "</a>";
    });
    return html + "</div></div>";
  }

  function footer() {
    var phones = BRANCHES.map(function (b) {
      var label = { seongsu: "성수", yeoksam: "역삼", yaksu: "약수", incheon: "인천" }[b.id] || b.short;
      return '<a href="tel:' + b.tel + '"><b>' + label + '</b> ' + b.phone + '</a>';
    }).join("");
    return (
      '<p class="disclaimer">리얼무브먼트는 운동·웰니스 프로그램입니다. 급성 통증, 마비, 최근 수술 직후라면 병원 진료를 먼저 권합니다.</p>' +
      '<footer class="site-footer"><div class="wrap">' +
        '<div class="foot-grid">' +
          '<div class="foot-brand"><h4>REAL MOVEMENT</h4>' +
            '<div>기능성 트레이닝 전문 스튜디오 · 성수 · 역삼한티 · 약수 · 인천</div>' +
            '<div class="sns-row">' +
              '<a href="https://www.instagram.com/real_movement_official/" target="_blank" rel="noopener">Instagram</a>' +
              '<a href="http://pf.kakao.com/_qFmxixj/chat" target="_blank" rel="noopener">카카오</a>' +
              '<a href="https://talk.naver.com/ct/wc56be" target="_blank" rel="noopener">네이버 톡톡</a>' +
            '</div>' +
          '</div>' +
          '<div><h4>바로가기</h4>' +
            '<div class="foot-links">' +
              '<a href="instructors.html">강사진</a>' +
              '<a href="evaluation.html">평가</a>' +
              '<a href="faq.html">FAQ</a>' +
              '<a href="contact.html">예약</a>' +
              '<a href="recruiting.html">채용</a>' +
            '</div>' +
          '</div>' +
          '<div><h4>상담 전화</h4>' +
            '<div class="foot-phones">' + phones + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="legal">메드넥스 — 리얼무브먼트 · 238-87-03980 · mednex@naver.com · © 2026</div>' +
      '</div></footer>' +
      '<a class="float-chat is-kakao" href="http://pf.kakao.com/_qFmxixj/chat" target="_blank" rel="noopener" aria-label="카카오 상담">상담</a>'
    );
  }

  function bind() {
    var drawer = document.getElementById("nav-drawer");
    var overlay = document.querySelector(".nav-overlay");
    function openNav() {
      if (drawer) drawer.classList.add("on");
      if (overlay) overlay.classList.add("on");
      document.body.style.overflow = "hidden";
    }
    function closeNav() {
      if (drawer) drawer.classList.remove("on");
      if (overlay) overlay.classList.remove("on");
      document.body.style.overflow = "";
    }
    document.querySelectorAll("[data-open-nav]").forEach(function (el) { el.addEventListener("click", openNav); });
    document.querySelectorAll("[data-close-nav]").forEach(function (el) { el.addEventListener("click", closeNav); });
    var panel = document.getElementById("search-panel");
    var input = document.getElementById("site-search");
    var hits = document.getElementById("search-hits");
    document.querySelectorAll("[data-open-search]").forEach(function (el) {
      el.addEventListener("click", function () {
        if (!panel) return;
        panel.classList.toggle("on");
        if (panel.classList.contains("on") && input) input.focus();
      });
    });
    if (input && hits) {
      input.addEventListener("input", function () {
        var q = input.value.trim().toLowerCase();
        if (!q) { hits.innerHTML = ""; return; }
        hits.innerHTML = PAGES.filter(function (p) {
          return (p.t + p.k).toLowerCase().indexOf(q) !== -1;
        }).slice(0, 8).map(function (p) {
          return '<a href="' + p.h + '">' + p.t + "<span>" + p.h + "</span></a>";
        }).join("") || "<div class='tiny'>검색 결과가 없습니다.</div>";
      });
    }
  }

  window.RM = {
    BRANCHES: BRANCHES,
    branchCards: function () {
      return BRANCHES.map(function (b) {
        return (
          '<article class="branch-card">' +
            "<h3>" + b.name + "</h3>" +
            '<div class="dir">' + b.team + "</div>" +
            '<div class="kv"><b>주소</b> ' + b.address + "</div>" +
            '<div class="kv"><b>위치</b> ' + b.near + "</div>" +
            '<div class="kv"><b>전화</b> <a href="tel:' + b.tel + '">' + b.phone + "</a></div>" +
            '<div class="kv"><b>시간</b> ' + b.hours + "</div>" +
            '<div class="actions">' +
              '<a class="btn btn-primary" href="' + b.book + '" target="_blank" rel="noopener">네이버 예약</a>' +
              '<a class="btn btn-line" href="' + b.map + '" target="_blank" rel="noopener">지도</a>' +
              '<a class="btn btn-line" href="' + b.page + '">지점 소개</a>' +
            "</div></article>"
        );
      }).join("");
    },
    branchChips: function () {
      return BRANCHES.map(function (b) {
        return '<a class="branch-chip" href="' + b.page + '"><b>' + b.name + "</b><span>" + b.near + "<br>" + b.phone + "</span></a>";
      }).join("");
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    var h = document.getElementById("site-header");
    var f = document.getElementById("site-footer");
    var page = (h && h.getAttribute("data-page")) || "";
    if (h) h.outerHTML = header(page);
    if (f) f.outerHTML = footer();
    bind();
    document.querySelectorAll("[data-branches]").forEach(function (el) {
      el.innerHTML = window.RM.branchCards();
    });
    document.querySelectorAll("[data-branch-chips]").forEach(function (el) {
      el.innerHTML = window.RM.branchChips();
    });
  });
})();
