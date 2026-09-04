"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface TaxonomyTerm {
  id: number;
  name: string;
  slug: string;
  description: string;
}

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

  featured_image?: {
    id: number;
    url: string;
  } | null;

  taxonomies?: {
    [key: string]: TaxonomyTerm[];
  };

  acf?: {
    event_date?: string;
    inclusions?: string;
    price?: string;
    event_status?: string;
    event_banner?: string;
  };
}

interface Venue {
  id: number;
  slug: string;
  status: string;

  title: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  featured_image?: {
    id: number;
    url: string;
  } | null;

  taxonomies?: {
    [key: string]: TaxonomyTerm[];
  };

  acf?: {
    venue_fields?: {
      seats?: string;
      venue_type?: string;
    };
  };
}

interface EventsResponse {
  events: Event[];
  venues: Venue[];
}

interface EventsVenuesProps {
  taxonomy?: string;
}

type CardItem =
  | {
      type: "event";
      data: Event;
    }
  | {
      type: "venue";
      data: Venue;
    };

export default function EventsVenues({ taxonomy }: EventsVenuesProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/events-venue");

        if (!response.ok) {
          throw new Error("Failed to fetch events and venues");
        }

        const data: EventsResponse = await response.json();

        setEvents(data.events || []);
        setVenues(data.venues || []);
      } catch (error) {
        console.error("Events & Venues error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  /*
   * Filter both Events and Venues
   * using the "whats-on" taxonomy.
   */
  const filteredItems = useMemo(() => {
    const filteredEvents = taxonomy
      ? events.filter((event) => {
          const terms = event.taxonomies?.["whats-on"] || [];

          return terms.some((term) => term.slug === taxonomy);
        })
      : events;

    const filteredVenues = taxonomy
      ? venues.filter((venue) => {
          const terms = venue.taxonomies?.["whats-on"] || [];

          return terms.some((term) => term.slug === taxonomy);
        })
      : venues;

    const items: CardItem[] = [
      ...filteredEvents.map((event) => ({
        type: "event" as const,
        data: event,
      })),

      ...filteredVenues.map((venue) => ({
        type: "venue" as const,
        data: venue,
      })),
    ];

    return items;
  }, [events, venues, taxonomy]);

  if (loading) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  if (!filteredItems.length) {
    return (
      <div className="flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 h-px w-12 bg-[#ff7254]/60" />

        <h3 className="font-migra text-3xl text-[#F0E9DF] md:text-4xl">
          No results found
        </h3>

        <p className="mt-4 max-w-md text-sm leading-6 text-[#F0E9DF]/50 md:text-base">
          There are currently no events or venues available. Please check back
          again soon.
        </p>

        <div className="mt-6 h-px w-12 bg-[#ff7254]/60" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {filteredItems.map((item) => {
        const isEvent = item.type === "event";
        const data = item.data;

        const href = isEvent ? `/events/${data.slug}` : `/book-your-venue`;

        return (
          <Link
            key={`${item.type}-${data.id}`}
            href={href}
            className="group relative flex h-full flex-col overflow-hidden border border-[#F0E9DF]/10 bg-[#2b0811] transition-all duration-500 hover:-translate-y-2 hover:border-[#FF3B11]/60 hover:shadow-2xl hover:shadow-black/20"
          >
            {/* IMAGE */}
            <div className="relative aspect-[4/3] overflow-hidden">
              {data.featured_image?.url ? (
                <Image
                  src={data.featured_image.url}
                  alt={data.title.rendered}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              ) : (
                <div className="h-full w-full bg-[#220715]" />
              )}

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#220715]/80 via-transparent to-black/10" />

              {/* BADGE */}
              <span className="absolute left-4 top-4 z-10 rounded bg-[#FF3B11] px-4 py-2 font-space text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-black/20">
                {isEvent ? "Event" : "Venue"}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-6">
              <h3
                className="font-migra text-2xl leading-[1.05] text-[#F0E9DF] transition-colors duration-300 group-hover:text-[#FF3B11]"
                dangerouslySetInnerHTML={{
                  __html: data.title.rendered,
                }}
              />

              {/* BUTTON */}
              <div className="mt-auto pt-8">
                <span className="inline-flex w-full justify-between mt-5 items-center gap-3 bg-[#FF6A55] px-5 py-3 font-space text-xs font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 group-hover:gap-5 group-hover:shadow-lg group-hover:shadow-[#FF3B11]/20">
                  View More
                  <span className="text-base leading-none">→</span>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
