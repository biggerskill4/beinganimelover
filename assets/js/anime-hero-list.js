const animeHeroList = [
  {
    animeName: "Attack on Titan",
    characterName: "Eren Yeager",
    characterImage: "#", // path to character image
    bgImage: "images/attack_on_titan_bg.jpg", // path to background image
    cards: [
      { title: "Power of Titans", description: "Eren possesses the ability to transform into a Titan." },
      { title: "Survey Corps", description: "Fights alongside the Survey Corps to protect humanity." },
      { title: "Determined Hero", description: "Driven by revenge and a strong sense of justice." }
    ]
  },
  {
    animeName: "Demon Slayer",
    characterName: "Tanjiro Kamado",
    characterImage: "./assets/images/anime-character/demon-slayer/tanjiro.webp",
    bgImage: "images/demon_slayer_bg.jpg",
    cards: [
      { title: "Water Breathing", description: "Master of the Water Breathing sword technique." },
      { title: "Protective Brother", description: "Seeks to save his sister from demon transformation." },
      { title: "Determined Fighter", description: "Never gives up despite tough battles." }
    ]
  },
  {
    animeName: "My Hero Academia",
    characterName: "Izuku Midoriya",
    characterImage: "images/deku.png",
    bgImage: "images/mha_bg.jpg",
    cards: [
      { title: "One For All", description: "Inherits the powerful quirk 'One For All'." },
      { title: "Aspiring Hero", description: "Dreams of becoming the number one hero." },
      { title: "Brave & Kind", description: "Always helps others even at his own risk." }
    ]
  },
  {
    animeName: "Nier: Automata",
    characterName: "2B",
    characterImage: "./assets/images/anime-character/nier-automata/2b.webp",
    bgImage: "./assets/images/hero/2b/bg-hero.webp",
    cards: [
      { title: "Yorha 2B", description: "An elite combat android engineered to eliminate machine lifeforms and restore control of Earth, 2B executes missions with unmatched and lethal efficiency." },
      { title: "Built for Battle", description: "Designed for close-range combat, 2B wields advanced weaponry and acrobatic strength while operating under strict protocols emotion obedience." },
      { title: "More Than a Weapon", description: "Behind her calm demeanor lies a hidden struggle with memory, loss, and identity, making 2B a symbol of the conflict and emerging humanity." }
    ]
  },
  {
    animeName: "The Girl Downstairs",
    characterName: "Shiya Li",
    characterImage: "./assets/images/anime-character/the-girl-downstairs/shiya_li.webp",
    bgImage: "./assets/images/hero/2b/bg-hero.webp",
    cards: [
      { title: "Shiya Li", description: "An elite combat android engineered to eliminate machine lifeforms and restore control of Earth, 2B executes missions with unmatched and lethal efficiency." },
      { title: "Built for Battle", description: "Designed for close-range combat, 2B wields advanced weaponry and acrobatic strength while operating under strict protocols emotion obedience." },
      { title: "More Than a Weapon", description: "Behind her calm demeanor lies a hidden struggle with memory, loss, and identity, making 2B a symbol of the conflict and emerging humanity." }
    ]
  },
  {
    animeName: "My Dress-up Darling",
    characterName: "marin kitagawa",
    characterImage: "./assets/images/anime-character/my-dressup-darling/marin_kitagawa.webp",
    bgImage: "./assets/images/hero/2b/bg-hero.webp",
    cards: [
      { title: "marin kitagawa", description: "An elite combat android engineered to eliminate machine lifeforms and restore control of Earth, 2B executes missions with unmatched and lethal efficiency." },
      { title: "Built for Battle", description: "Designed for close-range combat, 2B wields advanced weaponry and acrobatic strength while operating under strict protocols emotion obedience." },
      { title: "More Than a Weapon", description: "Behind her calm demeanor lies a hidden struggle with memory, loss, and identity, making 2B a symbol of the conflict and emerging humanity." }
    ]
  }
];

// Function to get a random anime
function getRandomAnimeIndex() {
  const lastIndex = localStorage.getItem("lastAnimeIndex");
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * animeHeroList.length);
  } while (newIndex == lastIndex && animeHeroList.length > 1); 
  // ensure we don't repeat the last one

  // Save new index for next refresh
  localStorage.setItem("lastAnimeIndex", newIndex);
  return newIndex;
};
