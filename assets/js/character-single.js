// =========================
// Single Character Page
// =========================

gsap.registerPlugin(ScrollTrigger);

const params = new URLSearchParams(window.location.search);
const charId = params.get("id");
const char = getCharacterById(charId);

// Not found
if (!char) {
    document.querySelector(".smooth-content").innerHTML = `
        <div class="char-not-found">
            <h2>Character Not Found</h2>
            <p>The character you're looking for doesn't exist.</p>
            <a href="./characters.html" class="cta">Back to Characters</a>
        </div>
    `;
} else {

    // Page title
    document.title = `${char.name} — Beinganimelover`;

    // Hero BG
    document.getElementById("charHeroBg").src = char.image;
    document.getElementById("charHeroBg").alt = char.name;

    // Hero character img
    document.getElementById("charHeroImg").src = char.image;
    document.getElementById("charHeroImg").alt = char.name;

    // Ghost name
    document.getElementById("charGhostName").textContent = char.name;

    // Breadcrumb
    document.getElementById("charBreadcrumbName").textContent = char.name;

    // Type badge
    const badge = document.getElementById("charTypeBadge");
    badge.textContent = char.type;
    badge.classList.add(char.type.toLowerCase());

    // Name — split into word spans
    const nameEl = document.getElementById("charName");
    const words = char.name.trim().split(" ");
    nameEl.innerHTML = words.map(w =>
        `<span class="line-wrap"><span class="line-inner">${w}</span></span>`
    ).join(" ");

    // Anime label
    document.getElementById("charAnimeLabel").textContent = char.anime;

    // Bio
    document.getElementById("charBio").innerHTML = char.bio.replace(
        /anime|titan|demon|hunter|android|soldier/gi,
        match => `<strong>${match}</strong>`
    );

    // Stat cards
    const statsWrap = document.getElementById("charStats");
    const statsData = [
        { key: "Anime Series", val: char.anime },
        { key: "Type", val: char.type },
        { key: "Abilities", val: char.abilities.length + "+" },
    ];
    statsData.forEach((s, i) => {
        const card = document.createElement("div");
        card.className = `char-stat-card${i === 2 ? " pink" : ""}`;
        card.innerHTML = `<span class="stat-key">${s.key}</span><span class="stat-val">${s.val}</span>`;
        statsWrap.appendChild(card);
    });

    // Abilities
    const abilitiesWrap = document.getElementById("charAbilities");
    char.abilities.forEach(ability => {
        const item = document.createElement("div");
        item.className = "char-ability-item";
        item.innerHTML = `<span>${ability}</span><div class="char-ability-dot"></div>`;
        abilitiesWrap.appendChild(item);
    });

    // Gallery
    const gallerySection = document.getElementById("charGallerySection");
    if (char.gallery && char.gallery.length > 0) {
        const galleryWrap = document.getElementById("charGallery");
        char.gallery.forEach(img => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";
            slide.innerHTML = `<img src="${img}" alt="${char.name}" loading="lazy">`;
            galleryWrap.appendChild(slide);
        });
        new Swiper(".charGallerySwiper", {
            slidesPerView: 1.3,
            spaceBetween: 16,
            grabCursor: true,
            centeredSlides: true,
            pagination: { el: ".swiper-pagination", clickable: true },
            breakpoints: {
                768: { slidesPerView: 2.3 },
                1024: { slidesPerView: 3.3 }
            }
        });
    } else {
        gallerySection.style.display = "none";
    }

    // Videos
    const videosSection = document.getElementById("charVideosSection");
    if (char.videos && char.videos.length > 0) {
        const videosWrap = document.getElementById("charVideos");
        char.videos.forEach(video => {
            const card = document.createElement("div");
            card.className = "char-video-card";
            card.innerHTML = `
                <img class="video-thumb"
                    src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg"
                    alt="${video.title}"
                    loading="lazy"
                    onerror="this.src='https://i.ytimg.com/vi/${video.id}/0.jpg'"
                >
                <div class="video-play-btn">
                    <span><ion-icon name="play"></ion-icon></span>
                </div>
                <div class="char-video-title">${video.title}</div>
            `;
            card.addEventListener("click", () => {
                const url = video.type === "short"
                    ? `https://www.youtube.com/shorts/${video.id}`
                    : `https://www.youtube.com/watch?v=${video.id}`;
                window.open(url, "_blank");
            });
            videosWrap.appendChild(card);
        });
    } else {
        videosSection.style.display = "none";
    }


    // Related
    const relatedSection = document.getElementById("charRelatedSection");
    const relatedChars = getRelatedCharacters(char.related);
    if (relatedChars && relatedChars.length > 0) {
        const relatedWrap = document.getElementById("charRelated");
        relatedChars.forEach(rel => {
            const card = document.createElement("a");
            card.href = `./character.html?id=${rel.id}`;
            card.className = "archive-card";
            card.innerHTML = `
                <div class="archive-card-img">
                    <img src="${rel.image}" alt="${rel.name}" loading="lazy">
                    <div class="archive-card-overlay">
                        <span class="archive-card-type ${rel.type.toLowerCase()}">${rel.type}</span>
                    </div>
                </div>
                <div class="archive-card-info">
                    <span class="archive-card-anime">${rel.anime}</span>
                    <h3>${rel.name}</h3>
                    <span class="archive-card-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></span>
                </div>
            `;
            relatedWrap.appendChild(card);
        });
    } else {
        relatedSection.style.display = "none";
    }

    // Related grid animation
    if (relatedChars && relatedChars.length > 0) {
        gsap.from(".char-related-grid .archive-card", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".char-related-section",
                start: "top 85%",
                toggleActions: "play none none none"
            }
        });
    }

    // =========================
    // GSAP Cinematic Animations
    // =========================

    // Hero BG parallax
    gsap.to(".char-hero-bg img", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
            trigger: ".char-hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Character image parallax
    gsap.to(".char-hero-img-wrap", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
            trigger: ".char-hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Ghost name parallax
    gsap.to(".char-hero-ghost-name", {
        xPercent: -8,
        ease: "none",
        scrollTrigger: {
            trigger: ".char-hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // Entrance timeline
    const tl = gsap.timeline({ delay: 0.1 });

    tl.to(".char-breadcrumb", {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out"
    })
        .to(".char-type-badge", {
            opacity: 1, duration: 0.5, ease: "power3.out"
        }, "-=0.3")
        .to(".char-name .line-inner", {
            y: "0%", duration: 1, stagger: 0.1, ease: "power4.out"
        }, "-=0.3")
        .to(".char-anime-label", {
            opacity: 1, duration: 0.5, ease: "power3.out"
        }, "-=0.5")
        .to(".char-ability-item", {
            opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: "power3.out"
        }, "-=0.6")
        .to(".char-scroll-hint", {
            opacity: 1, duration: 0.6, ease: "power3.out"
        }, "-=0.2");

    // Section headers slide in
    gsap.utils.toArray(".char-section").forEach(section => {
        const header = section.querySelector(".char-section-header");
        if (!header) return;
        gsap.from(header, {
            x: -30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });

    // Bio text reveal
    gsap.from(".char-bio-text", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".char-bio-section",
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });

    // Stat cards stagger
    gsap.to(".char-stat-card", {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".char-bio-section",
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });

    // Gallery
    gsap.from(".charGallerySwiper", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".char-gallery-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Video cards stagger
    if (char.videos && char.videos.length > 0) {
        gsap.from(".char-video-card", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".char-videos-section",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }


    // Back to top
    const backToTop = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("visible", window.scrollY > 400);
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
// =========================
// End Single Character Page
// =========================