gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// =========================
// Initialize Smooth
// ==============
const smoother = ScrollSmoother.create({
  wrapper: ".smooth-wrapper",
  content: ".smooth-content",
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

  const navLinksText = link.querySelector("span.menu-text");
  const data = link.getAttribute("data-text");
  navLinksText.innerHTML = `<span>${data}</span><span>${data}</span>`;
});
// =========================
// End Header Menu
// =========================


// =========================
// Footer Giant Text
// =========================
gsap.from(".footer-giant-text span", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".footer-giant-text",
        start: "top 90%",
        toggleActions: "play none none none"
    }
});
// =========================
// End Footer
// =========================

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

const mobileNavClose = document.getElementById("mobileNavClose");

if (mobileNavClose) {
    mobileNavClose.addEventListener("click", () => {
        const mobileNav = document.getElementById("mobileNav");
        const hamburger = document.querySelector(".hamburger");
        mobileNav.classList.remove("open");
        hamburger.classList.remove("open");
        document.body.style.overflow = "";
    });
}
// =========================
// End Mobile Menu
// =========================

// =========================
// Back to Top
// =========================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// =========================
// End Back to Top
// =========================