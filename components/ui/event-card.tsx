"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  slug: string;
  status: string;

  title: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  class_list?: string[];

  acf?: {
    event_date?: string;
    inclusions?: string;
    price?: string;
    event_status?: string;
    event_banner?: string;
  };

  _embedded?: {
    "wp:featuredmedia"?: {
      source_url?: string;
      alt_text?: string;
    }[];
  };
}

interface EventsListProps {
  taxonomy: "homepage" | "eventspage";
}

function EventsList({ taxonomy }: EventsListProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data: Event[] = await response.json();

        const filteredEvents = data.filter((event) => {
          if (event.status !== "publish") {
            return false;
          }

          const classes = event.class_list || [];

          if (taxonomy === "homepage") {
            return classes.includes("events-condition-homepage");
          }

          return classes.includes("events-condition-eventspage");
        });

        setEvents(filteredEvents);
      } catch (error) {
        console.error("Events API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, [taxonomy]);

  if (loading) {
    return null;
  }

  if (!events.length) {
    return null;
  }

  return (
    <>
      {events.map((event) => {
        const image =
          event.acf?.event_banner ||
          event._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/images/event-placeholder.jpg";

        const title = event.title?.rendered || "";

        // const description = event.excerpt?.rendered || "";

        const href = `/events/${event.slug}`;

        const category =
          event.class_list
            ?.find((item) => item.startsWith("category-"))
            ?.replace("category-", "")
            .replace(/-/g, " ") || "";

        // const inclusion = event.acf?.inclusions;

        return (
          <article key={event.id} className="group w-full">
            {/* Image */}
            <Link href={href} className="block w-full">
              <div className="relative w-full overflow-hidden">
                {/* Event Status */}
                {event.acf?.event_status && (
                  <span className="absolute left-3 top-3 sm:left-4 sm:top-4 z-10 bg-[#F0E9DF] px-3 py-2 font-space text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#22040C]">
                    {event.acf.event_status}
                  </span>
                )}

                {/* Responsive Image */}
                <div className="relative w-full h-[420px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] overflow-hidden">
                  <Image
                    src={image}
                    alt={
                      event._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                      title.replace(/<[^>]*>/g, "")
                    }
                    width={800}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </Link>

            {/* Content */}
            <div className="mt-5 sm:mt-6">
              {/* Title + Category */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h3
                  className="font-migra text-3xl sm:text-4xl lg:text-5xl leading-none text-[#F0E9DF]"
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                />

                <span className="h-fit shrink-0 self-start rounded-full bg-[#FF6A55] px-4 py-2 font-space text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#22040C]">
                  {category}
                </span>
              </div>

              {/* Description */}
              {event.acf?.inclusions && (
                <div
                  className="mt-4 font-space text-sm leading-6 text-[#F0E9DF] sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: event.acf.inclusions,
                  }}
                />
              )}

              {/* Date */}
              {event.acf?.event_date && (
                <p className="mt-3 font-space text-sm text-[#F0E9DF]">
                  {event.acf.event_date}
                </p>
              )}

              {/* Divider + Learn More */}
              <div className="mt-4 border-t border-[#F0E9DF]/30 pt-4">
                <Link
                  href={href}
                  className="flex items-center justify-between font-space text-xs font-bold uppercase tracking-[0.15em] text-[#F0E9DF] transition-opacity hover:opacity-70"
                >
                  <span>Learn More</span>

                  <span className="text-lg font-normal leading-none transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}

/* ================================
   HOMEPAGE EVENTS
================================ */

export function Eventshome() {
  return <EventsList taxonomy="homepage" />;
}

/* ================================
   EVENTS PAGE
================================ */

export default function Events() {
  return <EventsList taxonomy="eventspage" />;
}
