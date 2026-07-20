import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <Section className="pt-36">
      <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
      <div className="mt-10 max-w-3xl space-y-5 text-sand/70 leading-relaxed">
        <p>
          These terms govern your use of {site.name} and any bookings made with
          us. By making a reservation you agree to our booking, cancellation and
          venue policies.
        </p>
        <p>
          A {site.surcharges[0].toLowerCase()} and {site.surcharges[1].toLowerCase()}{" "}
          apply. Minimum spends apply to bottle service and group bookings;
          details are confirmed with your booking.
        </p>
        <p>
          Dress code is enforced: smart casual, no sandals, no hats, no singlets.
          Management reserves the right of admission. Valid ID is required.
        </p>
        <p className="text-sand/45">
          This is placeholder copy. Replace with your finalised terms before
          launch.
        </p>
      </div>
    </Section>
  );
}
