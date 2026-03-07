// ================================
// BEINGANIMELOVER — GSAP Preloader
// ================================

(function () {
  // ── Elements ──
  const preloader  = document.getElementById("preloader");
  const counter    = document.getElementById("pl-counter");
  const bar        = document.getElementById("pl-bar");
  const statusEl   = document.getElementById("pl-status");
  const logoImg    = document.querySelector(".pl-logo-wrap img");
  const logoTag    = document.querySelector(".pl-logo-tagline");
  const pct        = document.querySelector(".pl-counter-pct");
  const topPanel   = document.querySelector("#preloader .pl-panel.top");
  const botPanel   = document.querySelector("#preloader .pl-panel.bottom");
  const kanjis     = document.querySelectorAll(".pl-kanji");

  // Prevent scroll during load
  document.body.style.overflow = "hidden";

  const statuses = [
    "Initializing…",
    "Loading assets…",
    "Summoning characters…",
    "Powering up…",
    "Almost ready…",
    "Enter the world ✦",
  ];

  let lastStatusIdx = -1;

  // ── Master Timeline ──
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // 1 — Flash pink panels in/out
  tl.to([topPanel, botPanel], { scaleY: 1, duration: 0.25, ease: "power2.inOut" })
    .to([topPanel, botPanel], { scaleY: 0, duration: 0.25, ease: "power2.inOut" });

  // 2 — Kanji + logo appear together
  tl.from(kanjis, { opacity: 0, y: 30, stagger: 0.1, duration: 0.8 }, "-=0.1")
    .to(logoImg,  { opacity: 1, duration: 0.5 }, "-=0.6")
    .to(logoTag,  { opacity: 1, duration: 0.4 }, "-=0.3");

  // 3 — Counter + bar + status appear
  tl.to([counter, pct, statusEl], { opacity: 1, stagger: 0.06, duration: 0.4 }, "-=0.2");

  // 4 — Count 0 → 100
  const countObj = { val: 0 };
  tl.to(countObj, {
    val: 100,
    duration: 3.0,
    ease: "power1.inOut",
    onUpdate() {
      const v = Math.round(countObj.val);
      counter.textContent = v;
      bar.style.width = v + "%";

      const idx = Math.min(Math.floor(v / 17), statuses.length - 1);
      if (idx !== lastStatusIdx) {
        lastStatusIdx = idx;
        gsap.fromTo(statusEl,
          { y: 6, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.25, ease: "power2.out" }
        );
        statusEl.textContent = statuses[idx];
      }

      if (v === 100) {
        gsap.to(counter, { color: "var(--primary-color)", duration: 0.12 });
        gsap.to(counter, { color: "var(--text-color)", duration: 0.3, delay: 0.15 });
      }
    }
  }, "-=0.1");

  // 5 — Brief pause at 100
  tl.to({}, { duration: 0.5 });

  // 6 — Everything fades + slides up together (smooth single move)
  tl.to(preloader, {
    yPercent: -100,
    duration: 0.9,
    ease: "expo.inOut",
    onComplete() {
      // Only hide AFTER the slide is fully done — no glitch
      preloader.style.visibility = "hidden";
      preloader.style.pointerEvents = "none";
      document.body.style.overflow = "";
      document.body.classList.add("page-ready");
    }
  });

  // 7 — Page entry: header + hero slide in underneath
  tl.from("header", {
    y: -60,
    opacity: 0,
    duration: 0.7,
    ease: "power3.out"
  }, "-=0.5");

  tl.from(".hero .hero-bg-img", {
    scale: 1.08,
    opacity: 0,
    duration: 1.0,
    ease: "power2.out"
  }, "-=0.6");

})();
