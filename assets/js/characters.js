// =========================
// Characters Data
// =========================
const characters = [

    // ---- Attack on Titan ----
    {
        id: "eren-yeager",
        name: "Eren Yeager",
        anime: "Attack on Titan",
        animeId: "aot",
        type: "Villain",
        image: "./assets/images/anime-character/aot/eren_jeager.webp",
        bio: "Once a passionate young boy driven by a burning hatred for Titans, Eren Yeager evolved into one of the most complex and terrifying figures in anime history. His desire for freedom led him down a path of destruction that shook the entire world.",
        abilities: ["Titan Shifting", "Attack Titan", "Founding Titan", "War Hammer Titan"],
        gallery: [
            "./assets/images/anime-character/aot/eren_jeager.webp",
        ],
        related: ["levi-ackerman", "mikasa-ackerman", "armin-arlert"],
        videos: [
            {
                id: "c9nPu6pLfNk",
                title: "Eren Yeager Edit",
                type: "short"
            }
        ]
    },

    {
        id: "levi-ackerman",
        name: "Levi Ackerman",
        anime: "Attack on Titan",
        animeId: "aot",
        type: "Protagonist",
        image: "./assets/images/anime-character/aot/levi_ackerman.webp",
        bio: "Humanity's strongest soldier and captain of the Survey Corps. Levi is cold, precise, and devastatingly efficient in combat. Beneath his stoic exterior lies a man who carries the weight of every soldier lost under his command.",
        abilities: ["Ackerman Power", "Omni-Directional Mobility Gear", "Master Swordsman"],
        gallery: [
            "./assets/images/anime-character/aot/levi_ackerman.webp",
            "./assets/images/anime-character/aot/levi_ackermanaa.webp",
        ],
        related: ["eren-yeager", "mikasa-ackerman", "historia-reiss"],
        videos: []
    },

    {
        id: "mikasa-ackerman",
        name: "Mikasa Ackerman",
        anime: "Attack on Titan",
        animeId: "aot",
        type: "Protagonist",
        image: "./assets/images/anime-character/aot/mikasa_ackerman.webp",
        bio: "One of the most skilled soldiers in the Survey Corps, Mikasa carries the blood of the Ackerman clan. Fiercely loyal and emotionally resilient, she fights not for glory but for the people she loves.",
        abilities: ["Ackerman Power", "Master Combat", "Omni-Directional Mobility Gear"],
        gallery: [
            "./assets/images/anime-character/aot/mikasa_ackerman.webp",
        ],
        related: ["eren-yeager", "levi-ackerman", "armin-arlert"],
        videos: []
    },

    {
        id: "armin-arlert",
        name: "Armin Arlert",
        anime: "Attack on Titan",
        animeId: "aot",
        type: "Protagonist",
        image: "./assets/images/anime-character/aot/armin.webp",
        bio: "The strategic genius of the Survey Corps. Armin may lack physical strength, but his brilliant mind and unwavering courage have saved humanity more times than any blade ever could.",
        abilities: ["Strategic Genius", "Colossal Titan", "Tactical Leadership"],
        gallery: [
            "./assets/images/anime-character/aot/armin.webp",
        ],
        related: ["eren-yeager", "mikasa-ackerman", "levi-ackerman"],
        videos: []
    },

    {
        id: "historia-reiss",
        name: "Historia Reiss",
        anime: "Attack on Titan",
        animeId: "aot",
        type: "Support",
        image: "./assets/images/anime-character/aot/historia.webp",
        bio: "The true queen of the Walls. Historia transformed from a girl hiding her identity to a brave leader who defied fate and chose humanity over power. Her warmth and resilience inspire all who fight beside her.",
        abilities: ["Royal Blood", "Leadership", "Compassion"],
        gallery: [
            "./assets/images/anime-character/aot/historia.webp",
        ],
        related: ["eren-yeager", "levi-ackerman", "armin-arlert"],
        videos: []
    },

    // ---- Demon Slayer ----
    {
        id: "tanjiro-kamado",
        name: "Tanjiro Kamado",
        anime: "Demon Slayer",
        animeId: "demon-slayer",
        type: "Protagonist",
        image: "./assets/images/anime-character/demon-slayer/tanjiro.webp",
        bio: "A kind-hearted boy turned demon slayer after his family was slaughtered. Tanjiro wields the rare Sun Breathing technique and fights with both incredible skill and boundless compassion — even for his enemies.",
        abilities: ["Water Breathing", "Sun Breathing", "Enhanced Smell", "Demon Slayer Mark"],
        gallery: [
            "./assets/images/anime-character/demon-slayer/tanjiro.webp",
        ],
        related: ["nezuko-kamado", "zenitsu-agatsuma"],
        videos: []
    },

    {
        id: "nezuko-kamado",
        name: "Nezuko Kamado",
        anime: "Demon Slayer",
        animeId: "demon-slayer",
        type: "Protagonist",
        image: "./assets/images/anime-character/demon-slayer/nezuko.webp",
        bio: "Tanjiro's younger sister who was turned into a demon yet retained her human heart. Nezuko fights to protect humans despite her nature, and her explosive Blood Demon Art makes her a fearsome force on the battlefield.",
        abilities: ["Blood Demon Art", "Pyrokinesis", "Regeneration", "Size Manipulation"],
        gallery: [
            "./assets/images/anime-character/demon-slayer/nezuko.webp",
            "./assets/images/anime-character/demon-slayer/nezukos.webp",
        ],
        related: ["tanjiro-kamado", "zenitsu-agatsuma"],
        videos: []
    },

    {
        id: "zenitsu-agatsuma",
        name: "Zenitsu Agatsuma",
        anime: "Demon Slayer",
        animeId: "demon-slayer",
        type: "Protagonist",
        image: "./assets/images/anime-character/demon-slayer/zenitsu.webp",
        bio: "Cowardly by day, lightning-fast by night. Zenitsu only mastered one Thunder Breathing form — but he perfected it beyond all limits. When unconscious, he becomes an unstoppable force of pure instinct and speed.",
        abilities: ["Thunder Breathing", "Godlike Speed", "Enhanced Hearing"],
        gallery: [
            "./assets/images/anime-character/demon-slayer/zenitsu.webp",
        ],
        related: ["tanjiro-kamado", "nezuko-kamado"],
        videos: []
    },

    // ---- Nier Automata ----
    {
        id: "2b",
        name: "2B",
        anime: "Nier: Automata",
        animeId: "nier-automata",
        type: "Protagonist",
        image: "./assets/images/anime-character/nier-automata/2b.webp",
        bio: "YoRHa No.2 Type B — an android warrior built for combat, cold in demeanor but deeply emotional beneath the surface. 2B carries a tragic secret that defines her every mission and her bond with 9S.",
        abilities: ["Dual Sword Mastery", "Pod Support System", "Self-Destruct", "Android Physiology"],
        gallery: [
            "./assets/images/anime-character/nier-automata/2b.webp",
        ],
        related: [],
        videos: []
    },

    // ---- My Dress-Up Darling ----
    {
        id: "marin-kitagawa",
        name: "Marin Kitagawa",
        anime: "My Dress-Up Darling",
        animeId: "my-dressup-darling",
        type: "Protagonist",
        image: "./assets/images/anime-character/my-dressup-darling/marin_kitagawa.webp",
        bio: "A radiant and passionate gyaru with an obsessive love for anime and cosplay. Marin is unapologetically herself — bold, energetic, and completely charming. She inspires everyone around her to embrace what they love.",
        abilities: ["Cosplay Expertise", "Infectious Energy", "Modeling", "Anime Knowledge"],
        gallery: [
            "./assets/images/anime-character/my-dressup-darling/marin_kitagawa.webp",
        ],
        related: [],
        videos: []
    },

    // ---- The Girl Downstairs ----
    {
        id: "shiya-li",
        name: "Shiya Li",
        anime: "The Girl Downstairs",
        animeId: "the-girl-downstairs",
        type: "Protagonist",
        image: "./assets/images/anime-character/the-girl-downstairs/shiya_li.webp",
        bio: "A mysterious and elegant character whose presence commands attention. Shiya Li carries a quiet strength and depth that draws people in, making her one of the most intriguing characters in the series.",
        abilities: ["Elegance", "Intelligence", "Emotional Depth"],
        gallery: [
            "./assets/images/anime-character/the-girl-downstairs/shiya_li.webp",
        ],
        related: [],
        videos: []
    },

];

// Unique anime series list (for filters)
const animeSeries = [...new Set(characters.map(c => c.anime))];

// Unique types list (for filters)
const characterTypes = [...new Set(characters.map(c => c.type))];

// Get character by ID
function getCharacterById(id) {
    return characters.find(c => c.id === id) || null;
}

// Get characters by anime
function getCharactersByAnime(animeId) {
    return characters.filter(c => c.animeId === animeId);
}

// Get characters by type
function getCharactersByType(type) {
    return characters.filter(c => c.type === type);
}

// Get related characters
function getRelatedCharacters(ids) {
    return characters.filter(c => ids.includes(c.id));
}
// =========================
// End Characters Data
// =========================