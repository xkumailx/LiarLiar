"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Reservation {
  id: number;
  slug: string;
  status: string;

  title: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  featured_media: number;

  "reservations-condition"?: number[];

  class_list?: string[];

  acf?: {
    reservation_field?: {
      type?: string;

      reservation_link?: {
        title?: string;
        url?: string;
        target?: string;
      };
    };
  };

  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
}

interface ReservationProps {
  type?: "homepage" | "reservation";
}

export default function Reservation({
  type = "reservation",
}: ReservationProps) {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("/api/reservations");

        if (!response.ok) {
          throw new Error("Failed to fetch reservations");
        }

        const data = await response.json();

        setReservations(data);
      } catch (error) {
        console.error("Reservations API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      {reservations
        .filter((reservation) => reservation.status === "publish")
        .filter((reservation) => {
          if (type === "homepage") {
            return reservation.class_list?.includes(
              "reservations-condition-homepage",
            );
          }

          return reservation.class_list?.includes(
            "reservations-condition-reservation",
          );
        })
        .map((reservation) => {
          const featuredImage =
            reservation._embedded?.["wp:featuredmedia"]?.[0];

          const image =
            featuredImage?.source_url || "/images/reservation-placeholder.jpg";

          const imageAlt =
            featuredImage?.alt_text || reservation.title.rendered;

          const eyebrow = reservation.acf?.reservation_field?.type || "";

          const title = reservation.title.rendered;

          const description = reservation.excerpt?.rendered || "";

          const reservationLink =
            reservation.acf?.reservation_field?.reservation_link?.url;

          const href =
            reservationLink && reservationLink !== "#"
              ? reservationLink
              : `/reservation/${reservation.slug}`;

          return (
            <Link
              key={reservation.id}
              href={href}
              target={
                reservation.acf?.reservation_field?.reservation_link?.target ||
                undefined
              }
              className="group flex h-full flex-col rounded-2xl border border-white/20 bg-[#22040C] p-4 transition-all duration-300 sm:p-6"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="mt-5 flex flex-1 flex-col items-center text-center sm:mt-8">
                {/* Date / Eyebrow */}
                <span className="font-space text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#F0E9DF] sm:text-xs sm:tracking-[0.2em]">
                  {eyebrow}
                </span>

                {/* Title */}
                <h3
                  className="mt-3 font-migra text-2xl leading-none text-[#F0E9DF] sm:mt-5 sm:text-4xl lg:text-5xl"
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                />

                {/* Description */}
                <p
                  className="mt-4 max-w-sm font-space text-sm leading-7 text-[#D9D0CA] sm:mt-6 sm:text-base"
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />

                {/* Push button to bottom */}
                <div className="flex-1" />

                {/* CTA */}
                <div className="mt-7 w-full bg-[#FF6A55] py-3 font-space text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#22040C] transition-all duration-300 group-hover:text-white sm:mt-10 sm:py-4 sm:text-sm sm:tracking-[0.18em]">
                  Book Now
                </div>
              </div>
            </Link>
          );
        })}
    </>
  );
}
