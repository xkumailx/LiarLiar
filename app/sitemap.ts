import type { MetadataRoute } from "next";
import { site } from "@/lib/content/site";
import { getEvents } from "@/lib/wordpress";

const staticRoutes = [
  "",
  "/dining",
  "/omakase",
  "/after-dark",
  "/whats-on",
  "/reservations",
  "/about",
  "/confessions",
  "/gift-cards",
  "/careers",
  "/djs",
  "/sponsors",
  "/contact",
  "/terms",
  "/privacy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const events = await getEvents();
  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...events.map((e) => ({
      url: `${site.url}/whats-on/${e.slug}`,
      lastModified: e.date ? new Date(e.date) : now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
