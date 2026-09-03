import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section } from "@/components/ui/section";
import Image from "next/image";
// import { Container } from "@/components/ui/container";
// import { Button } from "@/components/ui/button";
// import { ReservationOptions } from "@/components/reservation-options";
// import { site, openingHours } from "@/lib/content/site";
import ReservationCards from "@/components/ui/reservation-cards";
// import ExperienceCards from "@/components/ui/white-cards";
import EventsCards from "@/components/ui/events-cards";
import Reservation from "@/components/ui/reservation";
// import EventsCards from "@/components/ui/events-cards";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book your table at Liar Liar — dinner, omakase, after party and bottle service. Braeside, Bayside.",
};

export default function ReservationsPage() {
  return (
    <>
      <Section>
        <div className="mt-[4em] flex flex-col items-center gap-10">
          <Image
            src="/pink-balls.png"
            alt="Reservations"
            width={400}
            height={300}
            className="absolute top-[15%] left-0 w-[400px] h-[300px] object-contain z-[-1]
"
          />
          <h1 className="font-migra font-extrabold text-center text-[#F0E9DF] text-5xl md:text-7xl lg:text-7xl tracking-[0.08em]">
            Reservations
          </h1>
          <Image
            src="/grey-image.png"
            alt="Reservations"
            width={500}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </Section>

      <Section>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ReservationCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Dinner"
            // eyebrow="Dinner"
            title="Reserve Dinner"
            // description="Book your table for dinner at Liar Liar. Enjoy our exquisite menu and vibrant atmosphere."
          />

          <ReservationCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Omakase"
            // eyebrow="Omakase"
            title="Reserve Dinner & After Party"
            // description="Experience the art of Omakase dining with our chef's curated selection of dishes."
          />

          <ReservationCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Lunch"
            // eyebrow="Lunch"
            title="Reserve Bottle Service"
            // description="Join us for a relaxed lunch featuring fresh sushi and seasonal dishes."
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-12">
          {/* Left Spacer */}
          <div className="hidden lg:block col-span-2" />

          {/* Cards */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
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
              image="/Ultimate-experience.png"
              imageAlt="Our Menu"
              eyebrow="23 AUGUST 2026"
              title="Intimate Experience"
              description="The Counter. An intimate 14–16 seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
            />
          </div>

          {/* Right Spacer */}
          <div className="hidden lg:block col-span-2" />
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reservation type="reservation" />
        </div>
      </Section>

      <Section>
        <div className="font-space font-extrabold mb-[2.5em] text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4168267320283!2d145.1075971!3d-37.9907369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66ce25bde5ab7%3A0x66ca73ecee310b91!2sLevel%201%2F248-250%20Boundary%20Rd%2C%20Braeside%20VIC%203195%2C%20Australia!5e0!3m2!1sen!2s!4v1786049859526!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </Section>
    </>
  );
}
