import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section, SectionHeading } from "@/components/ui/section";
import { ExperienceCard } from "@/components/experience-card";
import { MenuShowcase } from "@/components/menu-showcase";
import { ReservationCTA } from "@/components/reservation-cta";
// // import { Marquee } from "@/components/marquee";
import { foodHighlights, drinkHighlights } from "@/lib/content/menu";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Liar Liar was born from a stubborn idea — that Bayside deserved something better. Modern Japanese dining, drinks and late nights.",
};

export default function AboutPage() {
  return (
    <>
      {/* <Hero
        eyebrow="About"
        title="The night has somewhere to go."
        subtitle="A place where the food is precise, the drinks are considered, and the night has somewhere to go."
        size="md"
      /> */}

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-relaxed text-sand/85 sm:text-3xl">
            Every great night needs a place to happen. This is ours.
          </p>
          <p className="mt-8 text-base leading-relaxed text-sand/70">
            Liar Liar was born from a simple but stubborn idea — that Bayside
            deserved something better. A place where modern Japanese dining,
            considered drinks and late-night energy live under one roof. Precise
            in the kitchen, generous at the table, and unapologetic once the
            lights drop.
          </p>
        </div>
      </Section>

      {/* The three experiences */}
      <Section>
        <SectionHeading eyebrow="The Experience" title="More than one venue." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ExperienceCard
            href="/dining"
            eyebrow="Dining"
            title="Modern Japanese"
            description="Robata fire, fresh nigiri and shared plates."
          />
          <ExperienceCard
            href="/omakase"
            eyebrow="Omakase"
            title="The Counter"
            description="An intimate chef's progression. Trust the kitchen."
          />
          <ExperienceCard
            href="/after-party"
            eyebrow="After Party"
            title="The Disco"
            description="DJs, dancing and bottle service until late."
          />
        </div>
      </Section>

      <Section className="bg-claret/30">
        <MenuShowcase food={foodHighlights} drinks={drinkHighlights} />
      </Section>

      {/* Contact strip */}
      <Section className="text-center">
        <p className="eyebrow mb-4">Get in touch</p>
        <a
          href={`https://${site.domain}`}
          className="font-display text-2xl text-sand hover:text-torii sm:text-3xl"
        >
          {site.domain}
        </a>
        <p className="mt-4 text-sand/60">
          {site.address.line1}, {site.address.line2}
        </p>
      </Section>

      <ReservationCTA />
    </>
  );
}
