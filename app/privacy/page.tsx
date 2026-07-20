import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <Section className="pt-36">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="mt-10 max-w-3xl space-y-5 text-sand/70 leading-relaxed">
        <p>
          {site.name} ({site.group}) respects your privacy. We collect personal
          information — such as your name, email and booking details — only to
          manage reservations, respond to enquiries, and (with consent) send you
          news about events.
        </p>
        <p>
          We do not sell your information. Mailing-list signups can be
          unsubscribed at any time via the link in our emails.
        </p>
        <p>
          For any privacy request, contact us at{" "}
          <a href={`mailto:${site.email}`} className="text-torii hover:underline">
            {site.email}
          </a>
          .
        </p>
        <p className="text-sand/45">
          This is placeholder copy. Replace with your finalised privacy policy
          before launch.
        </p>
      </div>
    </Section>
  );
}
