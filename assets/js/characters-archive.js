// =========================
// Characters Archive Page
// =========================

let activeSeries = "all";
let activeType = "all";

// Build filter pills
function buildFilters() {
    const seriesSelect = document.getElementById("seriesSelect");
    const typeWrap = document.getElementById("typeFilters");

    animeSeries.forEach(series => {
        const option = document.createElement("option");
        option.value = series;
        option.textContent = series;
        seriesSelect.appendChild(option);
    });

    characterTypes.forEach(type => {
        const btn = document.createElement("button");
        btn.className = "filter-pill";
        btn.dataset.filter = "type";
        btn.dataset.value = type;
        btn.textContent = type;
        typeWrap.appendChild(btn);
    });

    seriesSelect.addEventListener("change", () => {
        activeSeries = seriesSelect.value;
        gsap.to(".archive-card", {
            y: 20, opacity: 0, duration: 0.25, stagger: 0.03, ease: "power2.in",
            onComplete: () => renderCards(getFiltered())
        });
    });
}

// Search
const searchInput = document.getElementById("archiveSearch");
const searchClear = document.getElementById("searchClear");
let searchQuery = "";

searchInput.addEventListener("input", () => {
    searchQuery = searchInput.value.toLowerCase().trim();
    searchClear.style.display = searchQuery ? "flex" : "none";
    renderCards(getFiltered());
});

searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClear.style.display = "none";
    searchInput.focus();
    renderCards(getFiltered());
});

// Filter logic
function getFiltered() {
    return characters.filter(c => {
        const matchSeries = activeSeries === "all" || c.anime === activeSeries;
        const matchType = activeType === "all" || c.type === activeType;
        const matchSearch = !searchQuery ||
            c.name.toLowerCase().includes(searchQuery) ||
            c.anime.toLowerCase().includes(searchQuery);
        return matchSeries && matchType && matchSearch;
    });
}

// Render cards
function renderCards(list) {
    const grid = document.getElementById("archiveGrid");
    const empty = document.getElementById("archiveEmpty");
    const count = document.getElementById("charCount");

    grid.innerHTML = "";

    if (list.length === 0) {
        empty.style.display = "flex";
        count.textContent = 0;
        return;
    }

    empty.style.display = "none";
    count.textContent = list.length;

    list.forEach(char => {
        const card = document.createElement("a");
        card.href = `./character.html?id=${char.id}`;
        card.className = "archive-card";
        card.innerHTML = `
            <div class="archive-card-img">
                <img src="${char.image}" alt="${char.name}" loading="lazy">
                <div class="archive-card-overlay">
                    <span class="archive-card-type ${char.type.toLowerCase()}">${char.type}</span>
                </div>
            </div>
            <div class="archive-card-info">
                <span class="archive-card-anime">${char.anime}</span>
                <h3>${char.name}</h3>
                <span class="archive-card-arrow"><ion-icon name="arrow-forward-outline"></ion-icon></span>
            </div>
        `;
        grid.appendChild(card);
    });

    // GSAP stagger entrance
    gsap.from(".archive-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        clearProps: "all"
    });
}

// Filter pill click
document.addEventListener("click", e => {
    const pill = e.target.closest(".filter-pill");
    if (!pill) return;

    const filterType = pill.dataset.filter;
    const value = pill.dataset.value;

    // Update active pill in group
    document.querySelectorAll(`.filter-pill[data-filter="${filterType}"]`).forEach(p => p.classList.remove("active"));
    pill.classList.add("active");

    if (filterType === "series") activeSeries = value;
    if (filterType === "type") activeType = value;

    // Animate out then re-render
    gsap.to(".archive-card", {
        y: 20,
        opacity: 0,
        duration: 0.25,
        stagger: 0.03,
        ease: "power2.in",
        onComplete: () => renderCards(getFiltered())
    });
});

// Init
buildFilters();
renderCards(characters);

// Hero entrance
gsap.from(".archive-hero-tag, .archive-hero-title, .archive-hero-sub", {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out"
});

// =========================
// End Characters Archive
// =========================