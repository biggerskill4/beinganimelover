// =========================
// Dynamic Hero Section Data
// =========================
// Trigger anime name randomly (or you can set manually)
function getRandomAnimeName() {
  const lastAnimeIndex = localStorage.getItem("lastAnimeIndex");
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * animeHeroList.length);
  } while (newIndex == lastAnimeIndex && animeHeroList.length > 1);

  localStorage.setItem("lastAnimeIndex", newIndex);
  return animeHeroList[newIndex].animeName;
}

const triggerAnime = getRandomAnimeName();

// Get the swiper wrapper
const heroSlider = document.getElementById("hero-slider");

// Find the anime object
const animeToShow = animeHeroList.find(a => a.animeName === triggerAnime);

// Create slides for each character
animeToShow.characters.forEach(char => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  // Use template literal for inner HTML
  slide.innerHTML = `
    <div class="title-charname">
      <h4 class="char-name">${char.characterName}</h4>
      <h2 class="hero-title">${animeToShow.animeName}</h2>
    </div>
    <img class="character" src="${char.characterImage}" alt="${char.characterName}">
    <div class="hero-cards">
      ${char.cards.map((card, index) => `
        <div class="card card${index + 1}">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      `).join('')}
      <div class="card">
        <h3>DANGER</h3>
        <img src="./assets/images/danger.webp" alt="Danger">
      </div>
    </div>
  `;
  heroSlider.appendChild(slide);
});
// =============================
// End Dynamic Hero Section Data
// =============================