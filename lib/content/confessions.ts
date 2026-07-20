import type { Confession, Cocktail } from "@/lib/types";

/** Copy sourced from the Figma "Confessions Page With Cocktail of the Month". */
export const confessions: Confession[] = [
  {
    id: "may-2025",
    text: "I ordered the most expensive thing on the menu and then googled what it was.",
    author: "Anonymous",
    month: "May 2025",
    featured: true,
  },
  {
    id: "apr-2025",
    text: "I told everyone I'd 'definitely had omakase before.' I had not.",
    author: "Anonymous",
    month: "April 2025",
  },
  {
    id: "mar-2025",
    text: "I came for one cocktail. I left at closing.",
    author: "Anonymous",
    month: "March 2025",
  },
];

export const cocktails: Cocktail[] = [
  {
    id: "accidental-expert",
    name: "The Accidental Expert",
    month: "May 2025",
    inspiredBy: "Inspired by our Caviar Sando",
    description:
      "Our mixologist embraced the same scenario as this month's confession — a quiet moment of panic, a Google search, and complete confidence in something unknown. Sparkling sake, citrus, and a whisper of brine.",
  },
];
