import type { MenuHighlight, Position } from "@/lib/types";

/** Menu teaser copy sourced from the Figma "Dining" / "Landing" pages. */
export const foodHighlights: MenuHighlight[] = [
  {
    id: "oysters",
    name: "Oysters",
    description:
      "Natural, dressed, or loaded with Hokkaido caviar and poached baby prawn.",
  },
  {
    id: "one-and-done",
    name: "One and Done — Single Bites",
    description:
      "Maximum impact. The wagyu beef cornetto, lobster taco, and tuna crispy rice are not to be skipped.",
  },
  {
    id: "little-liars",
    name: "Little Liars",
    description:
      "The heart of the menu. Share everything — the kingfish, the ramenara, the master stock pork belly. Order more than you think you need.",
  },
];

export const drinkHighlights: MenuHighlight[] = [
  {
    id: "sake",
    name: "Sake & Japanese Whisky",
    description:
      "An extensive sake list and Japanese whisky featuring Yamazaki, Hibiki and Nikka.",
  },
  {
    id: "cocktails",
    name: "Signature Cocktails",
    description:
      "A cocktail program that changes with the confessions — crafted to complement the dining experience and carry the night long after.",
  },
  {
    id: "wine",
    name: "Wine",
    description:
      "A considered list to sit alongside the food, from the delicate to the bold.",
  },
];

/** Careers — open positions. */
export const positions: Position[] = [
  {
    id: "floor",
    title: "Floor & Bar Staff",
    type: "Full-time / Casual",
    location: "Braeside, VIC",
    description:
      "Front of house with personality. You read a room, move with intent, and make every table feel like the best seat in the house.",
  },
  {
    id: "chef",
    title: "Chef de Partie",
    type: "Full-time",
    location: "Braeside, VIC",
    description:
      "Robata, raw bar, and a kitchen that moves fast. Precision under pressure, respect for the produce.",
  },
];
