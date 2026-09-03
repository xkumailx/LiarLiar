import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "DJs",
  description:
    "Are you a DJ? Resident and guest slots at Liar Liar After Party — R&B, Afro and Funky House. Get in touch.",
};

export default function DjsPage() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Play at Liar Liar"
            title="Send us your sound."
            intro="Resident and guest slots Friday and Saturday, plus live music Sundays. Drop your mix link (SoundCloud, Mixcloud) and socials, and tell us what you bring to the booth."
          />
          <ContactForm subject="DJ enquiry" cta="Submit Your Mix" />
        </div>
      </Section>
    </>
  );
}
