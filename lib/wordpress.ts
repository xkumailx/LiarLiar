/**
 * WordPress headless data layer.
 *
 * The frontend reads dynamic content (events, confessions, cocktails, careers)
 * from a headless WordPress install via the REST API. Custom post types and
 * fields are registered by the plugin in `/wordpress` (see its README).
 *
 * If `WORDPRESS_API_URL` is not set, or a request fails, every fetcher falls
 * back to the local content in `lib/content/*` so the site always renders.
 * This makes local development and design review possible without a live CMS.
 *
 * NOTE: every exported fetcher is async and uses the server `fetch` cache —
 * only call them from Server Components / Route Handlers.
 */
import type {
  Cocktail,
  Confession,
  EventCategory,
  LLEvent,
  Position,
} from "@/lib/types";
import { events as localEvents } from "@/lib/content/events";
import {
  confessions as localConfessions,
  cocktails as localCocktails,
} from "@/lib/content/confessions";
import { positions as localPositions } from "@/lib/content/menu";

const API_URL = process.env.WORDPRESS_API_URL?.replace(/\/$/, "");
const REVALIDATE = Number(process.env.WORDPRESS_REVALIDATE_SECONDS ?? 300);

export const isWordPressConnected = Boolean(API_URL);

type WPNode = {
  id: number;
  slug: string;
  date?: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  acf?: Record<string, unknown>;
  meta?: Record<string, unknown>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string }>;
  };
};

/** Strip HTML tags WordPress wraps around rendered fields. */
function clean(html?: string): string {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&hellip;/g, "…")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function fields(node: WPNode): Record<string, unknown> {
  return { ...(node.meta ?? {}), ...(node.acf ?? {}) };
}

function featuredImage(node: WPNode): string | undefined {
  return node._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
}

async function wpFetch<T>(path: string): Promise<T | null> {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: REVALIDATE },
      headers: { Accept: "application/json" },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    // Network/CMS unavailable — fall back to local content.
    return null;
  }
}

/* ------------------------------------------------------------------ Events */

function mapEvent(node: WPNode): LLEvent {
  const f = fields(node);
  return {
    id: String(node.id),
    slug: node.slug,
    title: clean(node.title?.rendered) || "Untitled",
    cadence: (f.cadence as string) || undefined,
    dateLabel: (f.date_label as string) || "",
    date: (f.event_date as string) || node.date,
    excerpt: clean(node.excerpt?.rendered),
    body: clean(node.content?.rendered) || undefined,
    price: (f.price as string) || undefined,
    category: ((f.category as EventCategory) || "upcoming") as EventCategory,
    image: featuredImage(node),
    strands: (f.strands as LLEvent["strands"]) || undefined,
    soundcloudUrl: (f.soundcloud_url as string) || undefined,
    bookingUrl: (f.booking_url as string) || undefined,
  };
}

export async function getEvents(): Promise<LLEvent[]> {
  const data = await wpFetch<WPNode[]>(
    "/wp-json/wp/v2/event?_embed&per_page=100&orderby=date&order=desc",
  );
  if (!data || data.length === 0) return localEvents;
  return data.map(mapEvent);
}

export async function getEventsByStrand(
  strand: NonNullable<LLEvent["strands"]>[number],
): Promise<LLEvent[]> {
  const all = await getEvents();
  return all.filter((e) => e.strands?.includes(strand));
}

export async function getEvent(slug: string): Promise<LLEvent | null> {
  const data = await wpFetch<WPNode[]>(
    `/wp-json/wp/v2/event?_embed&slug=${encodeURIComponent(slug)}`,
  );
  if (data && data.length > 0) return mapEvent(data[0]);
  return localEvents.find((e) => e.slug === slug) ?? null;
}

/* ------------------------------------------------------------- Confessions */

function mapConfession(node: WPNode): Confession {
  const f = fields(node);
  return {
    id: String(node.id),
    text: clean(node.content?.rendered) || clean(node.title?.rendered),
    author: (f.author_name as string) || "Anonymous",
    month: (f.month as string) || "",
    featured: Boolean(f.featured),
  };
}

// export async function getConfessions(): Promise<Confession[]> {
//   const data = await wpFetch<WPNode[]>(
//     "/wp-json/wp/v2/confession?per_page=50&orderby=date&order=desc",
//   );
//   if (!data || data.length === 0) return localConfessions;
//   return data.map(mapConfession);
// }

/* --------------------------------------------------------------- Cocktails */

function mapCocktail(node: WPNode): Cocktail {
  const f = fields(node);
  return {
    id: String(node.id),
    name: clean(node.title?.rendered),
    month: (f.month as string) || "",
    description: clean(node.content?.rendered) || clean(node.excerpt?.rendered),
    inspiredBy: (f.inspired_by as string) || undefined,
    image: featuredImage(node),
  };
}

export async function getCocktailOfTheMonth(): Promise<Cocktail | null> {
  const data = await wpFetch<WPNode[]>(
    "/wp-json/wp/v2/cocktail?_embed&per_page=1&orderby=date&order=desc",
  );
  if (data && data.length > 0) return mapCocktail(data[0]);
  return localCocktails[0] ?? null;
}

/* ---------------------------------------------------------------- Careers */

function mapPosition(node: WPNode): Position {
  const f = fields(node);
  return {
    id: String(node.id),
    title: clean(node.title?.rendered),
    type: (f.employment_type as string) || "",
    location: (f.location as string) || "Braeside, VIC",
    description: clean(node.content?.rendered) || clean(node.excerpt?.rendered),
  };
}

export function cleanWordPressContent(content: string): string {
  return content
    .replace(/\[\/?[^\]]+\]/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8221;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export async function getPositions(): Promise<Position[]> {
  const data = await wpFetch<WPNode[]>("/wp-json/wp/v2/position?per_page=50");
  if (!data || data.length === 0) return localPositions;
  return data.map(mapPosition);
}

export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export async function getConfessions(): Promise<WordPressPost[]> {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?status=publish&per_page=100&orderby=date&order=desc`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch confessions");
  }

  return response.json();
}
