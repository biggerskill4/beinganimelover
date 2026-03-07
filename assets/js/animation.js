gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// =========================
// Initialize Smooth
// ==============
const smoother = ScrollSmoother.create({
  wrapper: ".smooth-wrapper",
  content: ".smooth-conten",
  smooth: 1.2,
  effects: true
});

// Optional: Sync ScrollTrigger with smoother
ScrollTrigger.addEventListener("refresh", () => smoother.content());
// =========================
// End Initialize Lenis
// =========================



// =========================
// Cursor
// =========================
const cursor = document.querySelector(".custom-cursor");
const cursorCircle = document.querySelector(".custom-cursor-circle");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.8,
    ease: "power2.out"
  });
});

window.addEventListener("mousemove", (e) => {
  gsap.to(cursorCircle, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.4,
    ease: "power2.out"
  });
});

// All links Cursor Hover Effect
const links = document.querySelectorAll("a, button, .cta, .changeCursor");

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(cursorCircle, {
      scale: 5,
      backgroundColor: "#FFFFFF",
      duration: 0.3,
      ease: "power2.out"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(cursorCircle, {
      scale: 1,
      backgroundColor: "#F89DA2",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

const iFrame = document.querySelectorAll("iframe");
iFrame.forEach(frame => {

  frame.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(cursorCircle, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  frame.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
    gsap.to(cursorCircle, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

});
// =========================
// End Cursor
// =========================

// =========================
// Parallax Effect
// =========================
gsap.to(".parallax-img", {
  y: -150,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
// =========================
// End Parallax Effect
// =========================

// =========================
// Gsap Fade
// =========================
gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
  gsap.from(el, {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none",
    }
  });
});
// =========================
// End Gsap Fade
// =========================

// =========================
// Header Menu
// =========================
const navLinks = document.querySelectorAll("header .menu ul li a");

navLinks.forEach(link => {

  const navLinksText = link.querySelector("header .menu ul li a span.menu-text");
  const data = link.getAttribute("data-text");
  navLinksText.innerHTML = `<span>${data}</span><span>${data}</span>`;
});
// =========================
// End Header Menu
// =========================


// =========================
// Hero
// =========================
const heroSection = document.querySelector('.hero');
const heroImg = document.querySelectorAll('.hero img.character');
const heroBgImg = document.querySelector('.hero img.hero-bg-img');
const heroCharName = document.querySelector('.hero .char-name');


heroSection.addEventListener('mousemove', (e) => {

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  gsap.to(heroImg, {
    x: -x,
    y: -y,
    duration: 0.5,
    ease: "power2.out"
  });

  gsap.to(heroBgImg, {
    x: x - 10,
    y: y - 10,
    duration: 0.5,
    ease: "power2.out"
  });
});

// Slider
const swiper = new Swiper(".myHeroSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
});

swiper.autoplay.stop(); // wait for preloader to finish

function resetSlide(slide) {
  gsap.set(slide.querySelector(".hero .char-name"), { opacity: 0, y: -50 });
  gsap.set(slide.querySelector(".hero .hero-title"), { opacity: 0, y: -50 });
  gsap.set(slide.querySelector(".hero .character"), { opacity: 0, scale: 0.8 });
  gsap.set(slide.querySelectorAll(".hero .hero-cards .card"), { opacity: 0, y: 30 });
}

function animateSlide(slide) {
  gsap.to(slide.querySelector(".hero .char-name"), {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });
   gsap.to(slide.querySelector(".hero .hero-title"), {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(slide.querySelector(".hero .character"), {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.to(slide.querySelectorAll(".hero .hero-cards .card"), {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
}

// Animate first slide — waits for preloader to finish
const slides = document.querySelectorAll(".hero .swiper-slide");
slides.forEach(slide => resetSlide(slide));

function startHeroSlider() {
  animateSlide(document.querySelector(".hero .swiper-slide-active"));

  // Start autoplay after first slide finishes animating
  setTimeout(() => {
    swiper.autoplay.start();
  }, 1200);
}

if (document.body.classList.contains("page-ready")) {
  // Preloader already done (e.g. cached page)
  startHeroSlider();
} else {
  // Watch for page-ready class added by preloader
  const observer = new MutationObserver(() => {
    if (document.body.classList.contains("page-ready")) {
      observer.disconnect();
      startHeroSlider();
    }
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
}

// Animate on slide change
swiper.on("slideChangeTransitionStart", () => {
  slides.forEach(slide => resetSlide(slide));
  slides.forEach(slide => slide.style.opacity = '0');
  const activeSlide = document.querySelector(".hero .swiper-slide-active");
  activeSlide.style.opacity = '1';
  animateSlide(activeSlide); // animate only active
});


gsap.to(".hero .myHeroSwiper", {
  scale: 0.85,
  transformOrigin: "center center",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: 0.3,
  }
});

// =========================
// End Hero
// =========================


// =========================
// Character Spotlight
// =========================

// Spotlight cursor glow effect
document.querySelectorAll(".cs-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", x + "%");
    card.style.setProperty("--my", y + "%");
  });
});

// Swiper — smooth free drag with momentum
const csSwiper = new Swiper(".csSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.8,
    momentumVelocityRatio: 0.8,
    momentumBounce: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
});

// GSAP entrance — cards slide in on scroll
gsap.from(".cs-card", {
  x: 80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.12,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".character-spotlight",
    start: "top 75%",
    toggleActions: "play none none none"
  }
});

// =========================
// End Character Spotlight
// =========================


// =========================
// About Section
// =========================

gsap.utils.toArray(".split-text").forEach((text) => {

  function splitLetters(element) {
    const nodes = [...element.childNodes];

    nodes.forEach(node => {

      if (node.nodeType === 3) {
        const letters = node.textContent.split("");
        const frag = document.createDocumentFragment();

        letters.forEach(letter => {
          const span = document.createElement("span");
          span.textContent = letter;
          frag.appendChild(span);
        });

        node.replaceWith(frag);
      }
      else if (node.nodeType === 1) {
        splitLetters(node);
      }

    });
  }

  splitLetters(text);

  gsap.to(text.querySelectorAll("span"), {
    color: "#FFFFFF",
    stagger: 0.01,
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "bottom 50%",
      scrub: true
    }
  });

});
// =========================
// End About Section
// =========================


// =========================
// Featured Anime
// =========================
gsap.from(".anime-card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".featured-anime",
    start: "top 75%",
    toggleActions: "play none none reverse"
  }
});
// =========================
// End Featured Anime
// =========================

// Responsive Gsap
ScrollTrigger.matchMedia({

  "(max-width: 767px)": function () {
    document.querySelector(".myHeroSwiper").removeAttribute("data-speed");
  }
});

// =========================
// Mobile Menu
// =========================
const hamburger  = document.getElementById("hamburger");
const mobileNav  = document.getElementById("mobileNav");
const mobileLinks = document.querySelectorAll(".mobile-nav ul li a");

hamburger.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// Close on link click
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("open");
    document.body.style.overflow = "";
  });
});

// GSAP stagger animate links when menu opens
const observer = new MutationObserver(() => {
  if (mobileNav.classList.contains("open")) {
    gsap.fromTo(".mobile-nav ul li",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(".mobile-nav-footer",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.6 }
    );
  }
});
observer.observe(mobileNav, { attributes: true, attributeFilter: ["class"] });
// =========================
// End Mobile Menu
// =========================

