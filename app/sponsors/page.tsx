import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Sponsors",
  description:
    "Partner with Liar Liar. Brand collaborations, activations and sponsorships in Bayside's modern Japanese dinner & disco.",
};

export default function SponsorsPage() {
  return (
    <>
      {/* <Hero
        eyebrow="Partnerships"
        title="Sponsors"
        subtitle="Brand collaborations, activations and partnerships with one of Bayside's most talked-about venues."
        size="md"
      /> */}

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Work with us"
            title="Let's build something."
            intro="From spirit partnerships to event activations, we work with brands that share our standard. Tell us what you have in mind."
          />
          <ContactForm
            subject="Sponsorship enquiry"
            cta="Start the Conversation"
          />
        </div>
      </Section>
    </>
  );
}
