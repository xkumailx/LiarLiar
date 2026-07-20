import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
// import { Hero } from "@/components/hero";;
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ReservationCTA } from "@/components/reservation-cta";
import { getEvent, getEvents } from "@/lib/wordpress";
import { site } from "@/lib/content/site";

type Params = { slug: string };

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) return { title: "Event not found" };
  return {
    title: event.title,
    description: event.excerpt,
    openGraph: {
      title: event.title,
      description: event.excerpt,
      type: "article",
      images: event.image ? [event.image] : undefined,
    },
  };
}

function soundcloudEmbed(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    url,
  )}&color=%23e9522b&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false`;
}

export default async function EventPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const event = await getEvent(slug);
  if (!event) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.excerpt,
    startDate: event.date,
    image: event.image,
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: site.name,
      address: `${site.address.line1}, ${site.address.line2}`,
    },
    organizer: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section>
        <Container className="max-w-3xl px-0">
          <Link
            href="/whats-on"
            className="text-xs uppercase tracking-[0.18em] text-sand/50 hover:text-sand"
          >
            ‹ All events
          </Link>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-sand/80">
            {(event.body ?? event.excerpt)
              .split("\n")
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </div>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-sand/10 bg-sand/10 sm:grid-cols-3">
            <div className="bg-soy p-6">
              <dt className="eyebrow mb-2">When</dt>
              <dd className="text-sand">{event.dateLabel}</dd>
            </div>
            <div className="bg-soy p-6">
              <dt className="eyebrow mb-2">Where</dt>
              <dd className="text-sand">{site.address.line1}</dd>
            </div>
            <div className="bg-soy p-6">
              <dt className="eyebrow mb-2">Price</dt>
              <dd className="text-sand">{event.price ?? "Free entry"}</dd>
            </div>
          </dl>

          {event.soundcloudUrl ? (
            <div className="mt-12">
              <p className="eyebrow mb-4">Listen</p>
              <iframe
                title={`${event.title} on SoundCloud`}
                width="100%"
                height="166"
                allow="autoplay"
                className="rounded-xl"
                src={soundcloudEmbed(event.soundcloudUrl)}
              />
            </div>
          ) : null}
        </Container>
      </Section>

      <ReservationCTA />
    </>
  );
}
