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
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
// =========================
// End Parallax Effect
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
// Hero Image
// =========================
const heroSection = document.querySelector('.hero');
const heroImg = document.querySelectorAll('.hero img.character');
const heroBgImg = document.querySelector('.hero img.hero-bg-img');


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
// =========================
// End Hero Image
// =========================


// =========================
// Hero Slider
// =========================
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

function resetSlide(slide) {
  gsap.set(slide.querySelector(".hero-title"), { opacity: 0, y: -50 });
  gsap.set(slide.querySelector(".character"), { opacity: 0, scale: 0.8 });
  gsap.set(slide.querySelectorAll(".hero-cards .card"), { opacity: 0, y: 30 });
}

function animateSlide(slide) {
  gsap.to(slide.querySelector(".hero-title"), {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(slide.querySelector(".character"), {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.to(slide.querySelectorAll(".hero-cards .card"), {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
  });
}

// Animate first slide
const slides = document.querySelectorAll(".swiper-slide");
slides.forEach(slide => resetSlide(slide));
animateSlide(document.querySelector(".swiper-slide-active"));

// Animate on slide change
swiper.on("slideChangeTransitionStart", () => {
  slides.forEach(slide => resetSlide(slide));
  slides.forEach(slide => slide.style.opacity = '0');
  const activeSlide = document.querySelector(".swiper-slide-active");
  activeSlide.style.opacity = '1';
  animateSlide(activeSlide); // animate only active
});
// =========================
// End Hero Slider
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
  }
});
// =========================
// End Featured Anime
// =========================

