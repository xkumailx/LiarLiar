// app/events-at-liar-liar/page.tsx

import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/ui/herobanner";
import OrangeCard from "@/components/ui/orange-cards";
import { Section } from "@/components/ui/section";
import VenueCard from "@/components/ui/VenueCard";

export default function EventsAtLiarLiarPage() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <HeroBanner image="/after-dark.png" title={<>Events At Liar Liar</>} />
      </section>

      <Section>
        <div className="">
          <OrangeCard
            href="/menu"
            eyebrow=""
            title="Make it a night to remember"
            description={
              <>
                <p className="mb-0">
                  From intimate dinners to big celebrations, Liar Liar has
                  spaces for groups of all sizes, right in the heart of
                  Braeside.
                </p>
              </>
            }
            buttonText="Plan Your Event"
          />
        </div>
      </Section>

      <Section className="bg-claret/30">
        <div className="">
          <h1 className="font-migra text-white text-center text-4xl sm:text-5xl md:text-7xl lg:text-6xl leading-[1.05] tracking-[0.02em] px-5">
            Find Your Space
          </h1>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed">
            From intimate dinners to big celebrations, Liar Liar has spaces for
            groups of all sizes, right in the heart of Braeside.
          </p>
        </div>
      </Section>

      <Section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <VenueCard />
      </Section>

      <Section>
        <h1 className="font-migra capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-normal text-[#F0E9DF]">
          Whatever the Occasion
        </h1>
        <h1 className="font-migra capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-normal text-[#F0E9DF]">
          We’re Happy to Host & Find the Right Space.
        </h1>

        <h1 className="font-migra mt-[1em] capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-normal text-[#F0E9DF]">
          Birthdays / Corporate Events / Private Parties / Weddings &
          Engagements / Product Launches / Christmas Parties.
        </h1>
      </Section>

      <Section>
        <h1 className="font-migra mt-[1em] capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-normal text-[#F0E9DF]">
          Food & Drinks Packages
        </h1>
        <p className="mt-5 text-center sm:mt-8 space-y-6 font-space text-sm sm:text-base leading-relaxed text-[#F0E9DF]">
          From set menus and banquet dining to canapés and cocktails, we&apos;ve
          got food and drink packages to suit your event.
        </p>
        <div className="mt-8 text-center">
          <Button
            className="px-[1em]"
            href="/menus"
            variant="bgsquare"
            size="sm"
          >
            Menus
          </Button>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <a
            className="font-space block text-center mx-auto text-base leading-relaxed text-[#F0E9DF] hover:underline"
            href="https://maps.app.goo.gl/zhn5tdvvXBN1rfqg9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Liar Liar, First Floor, 248 Boundary Road, Braeside
          </a>
          <a
            className="font-space block text-center mx-auto text-base leading-relaxed text-[#F0E9DF] hover:underline"
            href="mailto:events@liarliarbraeside.com.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact: events@liarliarbraeside.com.au
          </a>
        </div>
      </Section>
    </>
  );
}
