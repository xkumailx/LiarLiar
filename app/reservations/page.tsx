import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section, SectionHeading } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ReservationOptions } from "@/components/reservation-options";
import { site, openingHours } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book your table at Liar Liar — dinner, omakase, after dark and bottle service. Braeside, Bayside.",
};

const OPENTABLE_RID = process.env.NEXT_PUBLIC_OPENTABLE_RID;

export default function ReservationsPage() {
  return (
    <>
      {/* <Hero
        eyebrow="Reservations"
        title="Reserve the night."
        subtitle="Dinner, omakase, after dark or bottle service — choose your experience and we'll take care of the rest."
        size="md"
      /> */}

      <Section>
        <SectionHeading
          eyebrow="Choose your experience"
          title="What are you in the mood for?"
        />
        <div className="mt-12">
          <ReservationOptions />
        </div>
      </Section>

      {/* Booking widget */}
      <Section id="book" className="bg-claret/30">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Book a Table"
            title="Find a time."
            className="mx-auto"
          />
          <div className="mt-10">
            {OPENTABLE_RID ? (
              <iframe
                title="OpenTable reservation widget"
                className="mx-auto w-full max-w-md rounded-2xl bg-soy"
                height="300"
                src={`https://www.opentable.com.au/widget/reservation/canvas?rid=${OPENTABLE_RID}&type=standard&theme=dark&overlay=false&domain=com.au&lang=en-AU`}
              />
            ) : (
              <div className="rounded-2xl border border-dashed border-sand/20 bg-soy/50 p-10">
                <p className="text-sm text-sand/70">
                  Online booking is powered by OpenTable. Set{" "}
                  <code className="rounded bg-sand/10 px-1.5 py-0.5 text-koki">
                    NEXT_PUBLIC_OPENTABLE_RID
                  </code>{" "}
                  to embed the live widget here.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Button
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    variant="primary"
                  >
                    Call to Book
                  </Button>
                  <Button href={`mailto:${site.email}`} variant="outline">
                    Email Us
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Events / groups */}
      <Section id="events">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Events & Functions"
              title="Planning a big celebration?"
              intro="Groups, functions and private dining — tell us what you're planning. We'll handle the rest."
            />
            <div className="mt-8">
              <Button href="/contact" variant="gold">
                Enquire About Events
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-sand/10 bg-claret/40 p-8">
            <h3 className="eyebrow mb-5">Opening Hours</h3>
            <dl className="space-y-3">
              {openingHours.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between border-b border-sand/10 pb-3 text-sm"
                >
                  <dt className="text-sand">{row.day}</dt>
                  <dd className="text-sand/60">{row.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* Map / location */}
      <section className="border-t border-sand/10">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Find Us</p>
            <h2 className="font-display text-3xl text-sand sm:text-4xl">
              {site.address.line1}
            </h2>
            <p className="mt-2 text-sand/60">{site.address.line2}</p>
            <div className="mt-6">
              <Button
                href={site.address.maps}
                variant="outline"
                size="sm"
                external
              >
                Open in Maps
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-sand/10">
            <iframe
              title="Liar Liar location map"
              width="100%"
              height="320"
              loading="lazy"
              className="grayscale-[0.2]"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=248+Boundary+Road+Braeside+VIC+3195&output=embed"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
