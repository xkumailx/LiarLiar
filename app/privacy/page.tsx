import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#220715] text-[#f0e9df]">
      {/* Hero */}
      <Section className="border-b border-[#FF3B11]/20 py-20 md:py-28">
        <div className="">
          {/* <SectionHeading
            eyebrow="LEGAL"
            title="Privacy Policy"
            description={`Your privacy matters to ${site.name}. This policy explains how we collect, use, and protect your information.`}
          /> */}

          <div className="mt-8 flex items-center gap-3 text-sm text-[#f0e9df]/60">
            <span className="h-2 w-2 rounded-full bg-[#FF3B11]" />
            <span>Last updated: August 2026</span>
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section className="py-16 md:py-24">
        <div className="">
          <div className="space-y-14">
            {/* Introduction */}
            <section>
              <h2 className="font-migra mt-[0.5em] capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                1. Introduction
              </h2>

              <p className="leading-8 text-[#f0e9df]/80">
                Welcome to {site.name}. We respect your privacy and are
                committed to protecting your personal information. This Privacy
                Policy explains what information we may collect, how we use it,
                and the choices you have regarding your data.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                2. Information We Collect
              </h2>

              <p className="mb-5 leading-8 text-[#f0e9df]/80">
                Depending on how you interact with our platform, we may collect
                the following information:
              </p>

              <ul className="space-y-4">
                {[
                  "Information you voluntarily provide, such as your name or email address.",
                  "Content and submissions you choose to share through the platform.",
                  "Technical information such as browser type, device information, and general usage data.",
                  "Cookies and similar technologies that help us improve your experience.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-[#f0e9df]/80">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF3B11]" />
                    <span className="leading-8">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How We Use */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                3. How We Use Your Information
              </h2>

              <p className="mb-5 leading-8 text-[#f0e9df]/80">
                We may use the information we collect to:
              </p>

              <ul className="space-y-4">
                {[
                  "Provide, operate, and improve our services.",
                  "Maintain the safety and security of the platform.",
                  "Respond to your questions, feedback, or support requests.",
                  "Understand how users interact with our services.",
                  "Detect, prevent, and address misuse or technical issues.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-[#f0e9df]/80">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF3B11]" />
                    <span className="leading-8">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                4. Cookies and Similar Technologies
              </h2>

              <p className="leading-8 text-[#f0e9df]/80">
                We may use cookies and similar technologies to improve
                functionality, understand usage patterns, and provide a better
                experience. You can control or disable cookies through your
                browser settings, although some parts of the platform may not
                function properly as a result.
              </p>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                5. How We Protect Your Information
              </h2>

              <p className="leading-8 text-[#f0e9df]/80">
                We take reasonable technical and organizational measures to
                protect your information from unauthorized access, loss, misuse,
                or disclosure. However, no online platform or method of
                electronic storage can be guaranteed to be completely secure.
              </p>
            </section>

            {/* Sharing */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                6. Sharing Your Information
              </h2>

              <p className="leading-8 text-[#f0e9df]/80">
                We do not sell your personal information. We may share
                information only when necessary to operate our services, comply
                with legal obligations, protect our rights and safety, or work
                with trusted service providers who help us maintain the
                platform.
              </p>
            </section>

            {/* Third Party */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                7. Third-Party Services
              </h2>

              <p className="leading-8 text-[#f0e9df]/80">
                Our platform may include links to third-party websites or
                services. We are not responsible for the privacy practices,
                content, or policies of those third parties. We encourage you to
                review their privacy policies before providing any personal
                information.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                8. Children&apos;s Privacy
              </h2>

              <p className="leading-8 text-[#f0e9df]/80">
                Our services are not intended for children who are not legally
                permitted to use the platform. We do not knowingly collect
                personal information from children without appropriate consent.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
                9. Changes to This Privacy Policy
              </h2>

              <p className="leading-8 text-[#f0e9df]/80">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the updated revision date will
                be displayed above. We encourage you to review this policy
                periodically.
              </p>
            </section>

            {/* Contact */}
            <section className="border border-[#FF3B11]/30 bg-[#FF3B11]/5 p-6 md:p-8">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#FF3B11]">
                Contact Us
              </p>

              <h2 className="font-migra capitalize text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#f0e9df]">
                Questions about your privacy?
              </h2>

              <p className="leading-8 text-[#f0e9df]/75">
                If you have any questions about this Privacy Policy or how your
                information is handled, please contact the {site.name} team.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
