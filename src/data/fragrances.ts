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
    id: "aurum",
    name: "Aurum",
    mood: "Command",
    line: "The scent of certainty.",
    notes: {
      top: "Bergamot, Black Pepper",
      heart: "Cedar, Amber",
      base: "Vetiver, Musk",
    },
  },
  {
    id: "nocturne",
    name: "Nocturne",
    mood: "After Dark",
    line: "For nights that don't end early.",
    notes: {
      top: "Blackcurrant, Pink Pepper",
      heart: "Leather, Iris",
      base: "Oud, Tonka Bean",
    },
  },
  {
    id: "velvet-hour",
    name: "Velvet Hour",
    mood: "Undeniable",
    line: "Warmth, before you say a word.",
    notes: {
      top: "Bergamot, Saffron",
      heart: "Rose, Suede",
      base: "Sandalwood, Vanilla",
    },
  },
  {
    id: "first-light",
    name: "First Light",
    mood: "Departure",
    line: "Clean confidence, at altitude.",
    notes: {
      top: "Yuzu, Sea Salt",
      heart: "White Tea, Neroli",
      base: "Ambergris, Musk",
    },
  },
  {
    id: "silk-route",
    name: "Silk Route",
    mood: "Timeless",
    line: "A memory, worn.",
    notes: {
      top: "Cardamom, Bergamot",
      heart: "Fig, Jasmine",
      base: "Sandalwood, Amber",
    },
  },
  {
    id: "midnight-bloom",
    name: "Midnight Bloom",
    mood: "Unspoken",
    line: "Quiet magnetism.",
    notes: {
      top: "Blackberry, Bergamot",
      heart: "Tuberose, Violet",
      base: "Patchouli, Musk",
    },
  },
];
