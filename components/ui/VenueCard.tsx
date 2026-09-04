"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Venue {
  id: number;
  slug: string;
  status: string;

  title: {
    rendered: string;
  };

  acf?: {
    venue_fields?: {
      seats?: string;
      venue_type?: string;
    };
  };

  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

export default function VenueCard() {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch("/api/venue");

        if (!response.ok) {
          throw new Error("Failed to fetch venues");
        }

        const data = await response.json();

        setVenues(data);
      } catch (error) {
        console.error("Venues API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
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
      {venues
        .filter((venue) => venue.status === "publish")
        .map((venue) => {
          const featuredImage = venue._embedded?.["wp:featuredmedia"]?.[0];

          const image =
            featuredImage?.source_url || "/images/venue-placeholder.jpg";

          const imageAlt = featuredImage?.alt_text || venue.title.rendered;

          const title = venue.title.rendered;

          const seats = venue.acf?.venue_fields?.seats || "";

          const venueType = venue.acf?.venue_fields?.venue_type || "";

          return (
            <section key={venue.id} className="group">
              {/* Card */}
              <div
                className="
                  w-full
                  rounded-[12px]
                  border
                  border-[#F0E9DF]/40
                  bg-[#220715]
                  px-[26px]
                  py-[26px]
                  sm:px-[30px]
                  sm:py-[30px]
                "
              >
                {/* Image */}
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={600}
                    height={500}
                    className="
                      aspect-[1.25/1]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  {/* Venue Name */}
                  <h3
                    className="
                      mx-auto
                      mt-[20px]
                      max-w-[250px]
                      font-migra
                      text-[34px]
                      font-medium
                      leading-[0.9]
                      tracking-[-0.02em]
                      text-[#F0E9DF]
                      sm:text-[38px]
                    "
                  >
                    {decodeHtml(title)}
                  </h3>

                  {/* Seats */}
                  <p
                    className="
                      mt-[28px]
                      font-space
                      text-[13px]
                      leading-[1.3]
                      text-[#F0E9DF]
                    "
                  >
                    {decodeHtml(seats)}
                  </p>

                  {/* Venue Type */}
                  <p
                    className="
                      mx-auto
                      mt-[5px]
                      max-w-[250px]
                      font-space
                      text-[12px]
                      leading-[1.4]
                      text-[#F0E9DF]
                    "
                  >
                    {decodeHtml(venueType)}
                  </p>

                  {/* Enquire Button */}
                  <Link
                    href="/book-your-venue"
                    className="
                      mt-[25px]
                      flex
                      h-[38px]
                      w-full
                      items-center
                      justify-center
                      bg-[#ff7254]
                      px-4
                      font-space
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.02em]
                      text-black
                      transition-opacity
                      duration-300
                      hover:opacity-80
                    "
                  >
                    Enquire About This Space
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
}
