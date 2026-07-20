import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { site, openingHours } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}, Braeside. Bookings, events and enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      {/* <Hero
        eyebrow="Contact"
        title="Have a question?"
        subtitle="Get in touch — for bookings, events, press or anything else. We look forward to seeing you."
        size="md"
      /> */}

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          {/* Details */}
          <div>
            <p className="eyebrow mb-5">Get in touch</p>
            <div className="space-y-6 text-sand/75">
              <div>
                <h2 className="font-display text-xl text-sand">Visit</h2>
                <p className="mt-1">{site.address.line1}</p>
                <p>{site.address.line2}</p>
                <div className="mt-3">
                  <Button
                    href={site.address.maps}
                    variant="ghost"
                    size="sm"
                    external
                  >
                    Open in Maps ›
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="font-display text-xl text-sand">Call</h2>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-block hover:text-sand"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <h2 className="font-display text-xl text-sand">Email</h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block hover:text-sand"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <h2 className="font-display text-xl text-sand">Hours</h2>
                <dl className="mt-2 space-y-1 text-sm">
                  {openingHours.map((row) => (
                    <div key={row.day} className="flex justify-between gap-6">
                      <dt>{row.day}</dt>
                      <dd className="text-sand/55">{row.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="eyebrow mb-5">Send a message</p>
            <ContactForm subject="Website enquiry" />
          </div>
        </div>
      </Section>
    </>
  );
}
