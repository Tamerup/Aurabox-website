export type Experience = {
  id: string;
  number: string;
  title: string;
  line: string;
  tone: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "meeting",
    number: "01",
    title: "Before the meeting.",
    line: "Walk in already certain.",
    tone: "radial-gradient(120% 100% at 50% 0%, #1a1712 0%, #000 60%)",
  },
  {
    id: "date",
    number: "02",
    title: "Before the date.",
    line: "Let the room notice before you speak.",
    tone: "radial-gradient(120% 100% at 50% 100%, #171310 0%, #000 60%)",
  },
  {
    id: "festival",
    number: "03",
    title: "Before the festival.",
    line: "Carry the night with you.",
    tone: "radial-gradient(120% 100% at 0% 50%, #161310 0%, #000 60%)",
  },
  {
    id: "flight",
    number: "04",
    title: "Before your flight.",
    line: "Arrive as you left — unshaken.",
    tone: "radial-gradient(120% 100% at 100% 50%, #151310 0%, #000 60%)",
  },
  {
    id: "memories",
    number: "05",
    title: "Before your memories.",
    line: "Some moments deserve a scent of their own.",
    tone: "radial-gradient(120% 100% at 50% 50%, #181410 0%, #000 65%)",
  },
];
