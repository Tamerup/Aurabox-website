export type Fragrance = {
  id: string;
  name: string;
  mood: string;
  line: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
};
export const FRAGRANCES: Fragrance[] = [
  {
    id: "creed-aventus",
    name: "Creed Aventus",
    mood: "Command",
    line: "Born to celebrate success.",
    notes: {
      top: "Bergamot, Blackcurrant, Apple",
      heart: "Birch, Patchouli, Rose",
      base: "Musk, Oakmoss, Vanilla",
    },
  },
  {
    id: "le-male-elixir",
    name: "JPG Le Male Elixir",
    mood: "Intensity",
    line: "Addictive and modern.",
    notes: {
      top: "Lavender, Cardamom",
      heart: "Vanilla, Cumin",
      base: "Amber, Musk, Sandalwood",
    },
  },
  {
    id: "black-opium",
    name: "YSL Black Opium",
    mood: "After Dark",
    line: "Seductive and unforgettable.",
    notes: {
      top: "Pink Pepper, Orange Blossom",
      heart: "Coffee, Jasmine",
      base: "Vanilla, Patchouli, Cedarwood",
    },
  },
  {
    id: "prada-paradoxe",
    name: "Prada Paradoxe",
    mood: "Modern",
    line: "Elegant, fresh and self-assured.",
    notes: {
      top: "Neroli, Bergamot",
      heart: "Jasmine, Ambroxide",
      base: "Musk, Sandalwood, Vanilla",
    },
  },
  {
    id: "baccarat-rouge",
    name: "Baccarat Rouge 540",
    mood: "Iconic",
    line: "Electric. Unique. Obsession.",
    notes: {
      top: "Saffron, Jasmine",
      heart: "Amberwood, Ambergris",
      base: "Fir Resin, Cedar",
    },
  },
];
