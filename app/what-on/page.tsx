import React from "react";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

const page = () => {
  return (
    <>
      <Section>
        <div className="mt-[4em] flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/sip-and-sushi.png"
              alt="Placeholder"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-migra font-extrabold text-[#F0E9DF] text-5xl md:text-6xl leading-none">
              Sip & Sushi (title)
            </h2>

            <p className="mt-8 font-space font-thin uppercase leading-relaxed text-[#F0E9DF]">
              Saturdays From 12pm - 9pm (Day, Date and Time)
            </p>

            <p className="mt-8 font-space leading-relaxed text-[#F0E9DF]">
              Sunday nights just got a whole lot better. Pull up a seat, grab a
              drink, and let the sushi do the talking. Whether you&apos;re
              rolling in solo or bringing the crew, Sip & Sushi is your new
              Sunday ritual. Walk-ins welcome, bookings recommended.
            </p>

            <p className="mt-8 font-space leading-relaxed text-[#F0E9DF]">
              / $39 PP /
            </p>

            <div className="mt-8 flex flex-col">
              <Button
                className="px-[1em]"
                href="/reservations"
                variant="pinkbtn"
                size="sm"
              >
                Book Now
              </Button>

              <Button
                className="px-[1em]"
                href="/reservations"
                variant="bgpurplesquare"
                size="sm"
              >
                Join the Waiting List
              </Button>
            </div>
            <Link
              href="/menu"
              className="mt-3 flex w-full items-center justify-between border-t border-[#F0E9DF]/50 pt-1 font-space text-xs uppercase tracking-[0.08em] text-[#F0E9DF] transition-opacity hover:opacity-80"
            >
              <span>View Menu (Sub CTA)</span>
              <span className="text-3xl leading-none">→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default page;
