// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// =========================
// Dynamic Hero Section Data
// =========================
const hero = document.querySelector(".hero");
// Data
let heroAnimeName = document.querySelector(".hero .hero-title");
let heroAnimeCharacter = document.querySelector(".hero img.character");
// let heroAnimeBg = document.querySelector(".hero img.hero-bg-img");
// Cards
let heroCardOne = document.querySelector(".hero .cardOne");
let heroCardTwo = document.querySelector(".hero .cardTwo");
let heroCardThree = document.querySelector(".hero .cardThree");

// Display Dynamic Data
function heroRandomData() {

  // Get the anime object
  const randomIndex = getRandomAnimeIndex();
  const animeToShow = animeHeroList[randomIndex];

  heroAnimeName.textContent = animeToShow.animeName;
  heroAnimeCharacter.src = animeToShow.characterImage;

  // Cards
  heroCardOne.innerHTML = `<h3>${animeToShow.cards[0].title}</h3><p>${animeToShow.cards[0].description}</p>`;
  heroCardTwo.innerHTML = `<h3>${animeToShow.cards[1].title}</h3><p>${animeToShow.cards[1].description}</p>`;
  heroCardThree.innerHTML = `<h3>${animeToShow.cards[2].title}</h3><p>${animeToShow.cards[2].description}</p>`;

};


heroRandomData();
// =============================
// End Dynamic Hero Section Data
// =============================