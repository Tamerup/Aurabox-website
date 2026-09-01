export type Fragrance = {
  id: string;
  name: string;
  mood: string;
  line: string;
  category: "him" | "her" | "unisex";
  notes: {
    top: string;
    heart: string;
    base: string;
  };
};

export const FRAGRANCES: Fragrance[] = [
  // FOR HIM
  {
    id: "layton-exclusif",
    name: "Parfums de Marly - Layton Exclusif",
    mood: "Legacy",
    line: "Warm, sweet, old money.",
    category: "him",
    notes: {
      top: "Apple, Bergamot, Nutmeg",
      heart: "Jasmine, Violet, Geranium",
      base: "Sandalwood, Vanilla, Musk",
    },
  },
  {
    id: "le-male-elixir",
    name: "Jean Paul Gaultier - Le Male Elixir",
    mood: "Modern",
    line: "Addictive and unapologetically bold.",
    category: "him",
    notes: {
      top: "Lavender, Cardamom",
      heart: "Vanilla, Cumin",
      base: "Amber, Musk, Sandalwood",
    },
  },
  {
    id: "terre-hermes",
    name: "Hermès - Terre d'Hermès EDP Intense",
    mood: "Timeless",
    line: "Masculine, earthy, refined.",
    category: "him",
    notes: {
      top: "Grapefruit, Pepper",
      heart: "Geranium, Vetiver",
      base: "Benzene, Flint, Cedar",
    },
  },
  {
    id: "luna-rossa-ocean",
    name: "Prada - Luna Rossa Ocean",
    mood: "Freedom",
    line: "Open sea. Pure confidence.",
    category: "him",
    notes: {
      top: "Bergamot, Neroli",
      heart: "Ambroxan, Iso E Super",
      base: "Musk, Sandalwood",
    },
  },
  {
    id: "ysl-myself",
    name: "YSL - MYSLF",
    mood: "Power",
    line: "Bold, modern, unapologetic.",
    category: "him",
    notes: {
      top: "Bergamot, Cardamom, Grapefruit",
      heart: "Ambroxan, Vetiver",
      base: "Cedar, Labdanum, Musk",
    },
  },

  // FOR HER
  {
    id: "barenia-intense",
    name: "Hermès - Barénia Intense",
    mood: "Mystique",
    line: "Leather, mystery, strength.",
    category: "her",
    notes: {
      top: "Butterfly Lily",
      heart: "Oakwood, Patchouli",
      base: "Leather, Musk, Vetiver",
    },
  },
  {
    id: "divine-le-parfum",
    name: "Jean Paul Gaultier - Divine Le Parfum",
    mood: "Feminine",
    line: "Floral, warm, irresistible.",
    category: "her",
    notes: {
      top: "Frangipani, Sea Salt",
      heart: "Heliotrope, Iris",
      base: "Amber, Vanilla, Musk",
    },
  },
  {
    id: "atomic-rose",
    name: "Initio - Atomic Rose",
    mood: "Obsession",
    line: "Dark, intense, addictive.",
    category: "her",
    notes: {
      top: "Bulgarian Rose, Jasmine",
      heart: "Ambroxan, Iso E Super",
      base: "Vanilla, Musk, Sandalwood",
    },
  },
  {
    id: "armani-si-intense",
    name: "Giorgio Armani - Sì Intense",
    mood: "Power",
    line: "Sensual, timeless, powerful.",
    category: "her",
    notes: {
      top: "Blackcurrant, Bergamot",
      heart: "Rose, Freesia",
      base: "Vanilla, Patchouli, Labdanum",
    },
  },
  {
    id: "prada-paradoxe",
    name: "Prada - Paradoxe",
    mood: "Confidence",
    line: "Elegant, fresh, self-assured.",
    category: "her",
    notes: {
      top: "Neroli, Bergamot",
      heart: "Jasmine, Ambroxide",
      base: "Musk, Sandalwood, Vanilla",
    },
  },

  // UNISEX
  {
    id: "baccarat-rouge",
    name: "MFK - Baccarat Rouge 540",
    mood: "Iconic",
    line: "Electric. Unique. Obsession.",
    category: "unisex",
    notes: {
      top: "Saffron, Jasmine",
      heart: "Amberwood, Ambergris",
      base: "Fir Resin, Cedar",
    },
  },
  {
    id: "sailing-day",
    name: "Maison Margiela Replica - Sailing Day",
    mood: "Freedom",
    line: "Salt air. Open horizon. Pure freedom.",
    category: "unisex",
    notes: {
      top: "Bergamot, Sea Notes",
      heart: "Driftwood, Marine Accord",
      base: "Musk, Cedarwood, Ambergris",
    },
  },
  {
    id: "when-rain-stops",
    name: "Maison Margiela Replica - When the Rain Stops",
    mood: "Moment",
    line: "That exact moment after the rain.",
    category: "unisex",
    notes: {
      top: "Petrichor, Aldehydes",
      heart: "Violet Leaf, Iris",
      base: "Musk, Cedarwood, Vetiver",
    },
  },
];

export const FRAGRANCES_HIM = FRAGRANCES.filter((f) => f.category === "him");
export const FRAGRANCES_HER = FRAGRANCES.filter((f) => f.category === "her");
export const FRAGRANCES_UNISEX = FRAGRANCES.filter((f) => f.category === "unisex");