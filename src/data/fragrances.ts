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
    id: "tobacco-vanille",
    name: "Tom Ford Tobacco Vanille",
    mood: "Premium",
    line: "Warm, rich and unforgettable.",
    notes: {
      top: "Tobacco, Spices",
      heart: "Tobacco Blossom, Jasmine",
      base: "Vanilla, Cacao, Sandalwood",
    },
  },
  {
    id: "black-opium",
    name: "YSL Black Opium",
    mood: "After Dark",
    line: "Addictive and modern.",
    notes: {
      top: "Pink Pepper, Orange Blossom",
      heart: "Coffee, Jasmine",
      base: "Vanilla, Patchouli, Cedarwood",
    },
  },
  {
    id: "lost-cherry",
    name: "Tom Ford Lost Cherry",
    mood: "Undeniable",
    line: "Delicate yet intense.",
    notes: {
      top: "Cherry, Plum",
      heart: "Almond, Turkish Rose",
      base: "Tonka Bean, Sandalwood, Vanilla",
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