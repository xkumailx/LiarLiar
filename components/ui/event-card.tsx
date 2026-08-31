"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  slug: string;
  status: string;

  title: {
    rendered: string;
  };

  acf?: {
    event_date?: string;
    event_status?: string;
    inclusions?: string;
  };

  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;

    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
}

export default function EventCard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();

        setEvents(data);
      } catch (error) {
        console.error("Events API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return null;
  }

  const decodeHtml = (html: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = html;
    return textarea.value;
  };

  return (
    <>
      {events
        .filter((event) => event.status === "publish")
        .map((event) => {
          const categories = event._embedded?.["wp:term"]?.[0] || [];

          const category = categories.find(
            (item) => item.taxonomy === "category",
          );
          const featuredImage = event._embedded?.["wp:featuredmedia"]?.[0];

          const image =
            featuredImage?.source_url || "/images/event-placeholder.jpg";

          const imageAlt = featuredImage?.alt_text || event.title.rendered;

          const title = event.title.rendered;

          const date = event.acf?.event_date || "";
          const inclusions = event.acf?.inclusions || "";

          const eventStatus = event.acf?.event_status || "";

          return (
            <section key={event.id} className="group">
              {/* Image */}
              <Link
                href={`/events/${event.slug}`}
                className="block overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  {/* Event Status Badge */}
                  {eventStatus && (
                    <span className="absolute left-4 top-4 z-10 bg-[#F0E9DF] px-3 py-1.5 font-space text-[11px] font-extrabold uppercase tracking-[0.15em] text-black">
                      {eventStatus}
                    </span>
                  )}

                  <Image
                    src={image}
                    alt={imageAlt}
                    width={400}
                    height={520}
                    className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="mt-5">
                {/* Event Name */}
                <div className="flex items-center justify-between gap-4 mb-[1em]">
                  <h3 className="font-space text-2xl text-[#F0E9DF] ">
                    {decodeHtml(title)}
                  </h3>

                  {category && (
                    <span className="shrink-0 rounded-full bg-[#ff3b11] px-3 py-1.5 font-space text-[10px] font-bold uppercase tracking-[0.12em] text-[#220715]">
                      {category.name}
                    </span>
                  )}
                </div>
                <h3 className="font-space text-xs text-[#F0E9DF]">
                  {decodeHtml(inclusions)}
                </h3>

                {/* Date */}
                <p className="mt-3 border-b border-[#F0E9DF]/30 pb-4 font-space text-base uppercase text-[#F0E9DF]">
                  {date}
                </p>

                {/* Learn More */}
                <Link
                  href={`/events/${event.slug}`}
                  className="mt-4 flex items-center justify-between font-space text-sm font-extrabold uppercase tracking-[0.15em] text-[#F0E9DF] transition-opacity hover:opacity-70"
                >
                  <span>Learn More</span>

                  <ArrowRight
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </section>
          );
        })}
    </>
  );
}
