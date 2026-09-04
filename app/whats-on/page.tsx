import type { Metadata } from "next";
import Link from "next/link";
// import { Hero } from "@/components/hero";;
import { Section } from "@/components/ui/section";
// import { EventCard } from "@/components/event-card";
// import { ReservationCTA } from "@/components/reservation-cta";
// import { Media } from "@/components/ui/media";
// import { Button } from "@/components/ui/button";
// import HeroBanner from "@/components/ui/herobanner";
// import EventsCards from "@/components/ui/events-cards";
import EventsVenues from "@/components/ui/EventsVenues";

export const metadata: Metadata = {
  title: "What's On",
  description:
    "Upcoming events, weekly rotations and special nights at Liar Liar, Braeside.",
};

export default async function WhatsOnPage() {
  return (
    <>
      <Section>
        <div className="h-screen flex flex-col items-center justify-center gap-6">
          <h1 className="font-migra font-extrabold text-center text-[#F0E9DF] text-5xl md:text-7xl lg:text-7xl tracking-[0.08em]">
            What&apos;s On
          </h1>
          <h1 className="font-migra text-white text-center mt-[1.5em] text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] text-center">
            Upcoming Events at Liar Liar
          </h1>
        </div>
      </Section>

      <Section>
        <p className="font-space font-extrabold mb-[2.5em] text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          Featured
        </p>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <EventsCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="23 AUGUST 2026"
            title="Intimate Experience"
            description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />

          <EventsCards
            href="#"
            image="/the-journey.png"
            imageAlt="Private Dining"
            eyebrow="28 AUGUST 2026"
            title="The Journey"
            description="14–16 courses sourced globally. Each one a deliberate progression from refined and delicate through to bold and electric."
          />
        </div> */}
        <EventsVenues taxonomy="featured" />
      </Section>

      <Section>
        <p className="font-space font-extrabold mb-[2.5em] text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          Weekly Rotation
        </p>
        <EventsVenues taxonomy="weekly-rotation" />
      </Section>

      {/* <Section>
        <p className="font-space font-extrabold mb-[2.5em] text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          Weekly Rotation
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EventsCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="23 AUGUST 2026"
            title="Intimate Experience"
            description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />

          <EventsCards
            href="#"
            image="/the-journey.png"
            imageAlt="Private Dining"
            eyebrow="28 AUGUST 2026"
            title="The Journey"
            description="14–16 courses sourced globally. Each one a deliberate progression from refined and delicate through to bold and electric."
          />

          <EventsCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="23 AUGUST 2026"
            title="Intimate Experience"
            description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />
        </div>
      </Section> */}

      <Section>
        <p className="font-space font-extrabold mb-[2.5em] text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          Upcoming
        </p>
        <EventsVenues taxonomy="upcoming" />
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EventsCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="23 AUGUST 2026"
            title="Intimate Experience"
            description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />

          <EventsCards
            href="#"
            image="/the-journey.png"
            imageAlt="Private Dining"
            eyebrow="28 AUGUST 2026"
            title="The Journey"
            description="14–16 courses sourced globally. Each one a deliberate progression from refined and delicate through to bold and electric."
          />

          <EventsCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="23 AUGUST 2026"
            title="Intimate Experience"
            description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />
        </div> */}
      </Section>

      <Section>
        <p className="font-space font-extrabold mb-[2.5em] text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          Past Events
        </p>
        <EventsVenues taxonomy="past-events" />
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EventsCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="23 AUGUST 2026"
            title="Intimate Experience"
            description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />

          <EventsCards
            href="#"
            image="/the-journey.png"
            imageAlt="Private Dining"
            eyebrow="28 AUGUST 2026"
            title="The Journey"
            description="14–16 courses sourced globally. Each one a deliberate progression from refined and delicate through to bold and electric."
          />

          <EventsCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="23 AUGUST 2026"
            title="Intimate Experience"
            description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />
        </div> */}
      </Section>
    </>
  );
}
