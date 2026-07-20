/** Shared content types for Liar Liar. These map 1:1 to the WordPress
 *  custom post types defined in /wordpress (see that folder's README). */

export type EventCategory = "featured" | "upcoming" | "weekly" | "past";

export interface LLEvent {
  id: string;
  slug: string;
  title: string;
  /** Short kicker shown above the title, e.g. "Every Wednesday". */
  cadence?: string;
  /** Human date/time line, e.g. "Saturday 10.08 · 9:30PM". */
  dateLabel: string;
  /** ISO date used for sorting and SEO. */
  date?: string;
  excerpt: string;
  body?: string;
  price?: string;
  category: EventCategory;
  image?: string;
  /** Which experience this event belongs to, used for filtering. */
  strands?: Array<"omakase" | "after-dark" | "dining">;
  soundcloudUrl?: string;
  bookingUrl?: string;
}

export interface Confession {
  id: string;
  text: string;
  author: string;
  month: string;
  featured?: boolean;
}

export interface Cocktail {
  id: string;
  name: string;
  month: string;
  description: string;
  inspiredBy?: string;
  image?: string;
}

export interface Position {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
}

export interface MenuHighlight {
  id: string;
  name: string;
  description: string;
}
