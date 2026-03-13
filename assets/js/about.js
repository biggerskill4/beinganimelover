/* =============================================
   ABOUT.JS — About Us & Privacy Page JS
   Beinganimelover
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {

    // =============================================
    // HERO ENTRANCE ANIMATION
    // =============================================
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // BG parallax
    const heroBg = document.getElementById("aboutHeroBg");
    if (heroBg) {
        gsap.to(heroBg, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // Ghost text parallax
    const ghostText = document.getElementById("aboutGhostText");
    if (ghostText) {
        gsap.to(ghostText, {
            xPercent: -6,
            ease: "none",
            scrollTrigger: {
                trigger: ".about-hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // Entrance timeline
    const breadcrumb = document.getElementById("aboutBreadcrumb");
    const tag = document.getElementById("aboutTag");
    const titleLines = document.querySelectorAll(".about-hero-title .line-inner");
    const sub = document.getElementById("aboutSub");
    const scrollHint = document.getElementById("aboutScrollHint");

    if (breadcrumb) tl.from(breadcrumb, { y: 20, opacity: 0, duration: 0.6 }, 0.2);
    if (tag) tl.from(tag, { y: 20, opacity: 0, duration: 0.6 }, 0.35);
    if (titleLines.length) {
        tl.from(titleLines, {
            y: "110%",
            duration: 0.9,
            stagger: 0.1,
            ease: "power4.out"
        }, 0.5);
    }
    if (sub) tl.from(sub, { y: 20, opacity: 0, duration: 0.6 }, 0.9);
    if (scrollHint) tl.from(scrollHint, { opacity: 0, y: 10, duration: 0.5 }, 1.1);


    // =============================================
    // STATS COUNTER ANIMATION
    // =============================================
    const statNums = document.querySelectorAll(".about-stat-num");

    statNums.forEach(el => {
        const target = parseInt(el.getAttribute("data-target"), 10);
        const obj = { val: 0 };

        gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                once: true
            },
            onUpdate: () => {
                el.textContent = Math.round(obj.val);
            }
        });
    });


    // =============================================
    // SECTION HEADER SLIDE-IN
    // =============================================
    gsap.utils.toArray(".about-section-title").forEach(el => {
        gsap.from(el, {
            x: -30,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    });


    // =============================================
    // PRIVACY TOC — Active link on scroll
    // =============================================
    const tocLinks = document.querySelectorAll(".toc-link");
    const privacySections = document.querySelectorAll(".privacy-section[id]");

    if (tocLinks.length && privacySections.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tocLinks.forEach(link => link.classList.remove("active"));
                    const activeLink = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
                    if (activeLink) activeLink.classList.add("active");
                }
            });
        }, { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" });

        privacySections.forEach(section => observer.observe(section));

        // Smooth scroll for TOC links
        tocLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        });
    }


    // =============================================
    // BACK TO TOP
    // =============================================
    const backToTop = document.getElementById("backToTop");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            backToTop.classList.toggle("visible", window.scrollY > 400);
        });
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});
