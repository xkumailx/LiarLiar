import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { getPositions } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at Liar Liar. We're a high-energy place looking for people who bring it. Braeside, VIC.",
};

export default async function CareersPage() {
  const positions = await getPositions();

  return (
    <>
      {/* <Hero
        eyebrow="Careers"
        title="Interested in working at Liar Liar?"
        subtitle="Liar Liar is a high-energy place. We're after people who read a room, move with intent, and want to be part of the best night in Bayside."
        size="md"
      /> */}

      <Section>
        <SectionHeading eyebrow="Working with us" title="Available positions" />
        <div className="mt-12 space-y-4">
          {positions.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-sand/10 bg-claret/40 p-7 sm:flex sm:items-center sm:justify-between sm:gap-8"
            >
              <div>
                <h3 className="font-display text-2xl text-sand">{p.title}</h3>
                <p className="mt-2 text-sm text-sand/65">{p.description}</p>
              </div>
              <div className="mt-4 shrink-0 text-sm text-sand/50 sm:mt-0 sm:text-right">
                <p>{p.type}</p>
                <p>{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-claret/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="How to apply"
            title="Tell us why you'd fit."
            intro="Send through your details and a few words about you. Attach a CV link if you have one — we read everything."
          />
          <ContactForm subject="Careers application" cta="Apply Now" />
        </div>
      </Section>
    </>
  );
}
