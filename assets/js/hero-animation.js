
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
// Video Thumbnail Click Play
// =========================
document.querySelectorAll(".video-card, .video-card-featured, .video-card-sm").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.id;
        const iframe = card.querySelector("iframe");
        iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
        card.classList.add("playing");
    });
});
// =========================
// End Video Click Play
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
    draggable: true,
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
    toggleActions: "play none none reverse"
  }
});

// =========================
// End Character Spotlight
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
    scrub: true,
  }
});
// =========================
// End Parallax Effect
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
