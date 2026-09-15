import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";

interface Venue {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  acf?: {
    venue_fields?: {
      seats?: string;
      venue_type?: string;
    };
  };
}

interface Media {
  source_url: string;
  alt_text?: string;
}

const WORDPRESS_URL = process.env.WORDPRESS_URL;

async function getVenue(slug: string): Promise<Venue | null> {
  const res = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/venue?slug=${slug}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    return null;
  }

  const venues = await res.json();

  return venues?.[0] || null;
}

async function getMedia(id: number): Promise<Media | null> {
  if (!id) return null;

  const res = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/media/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

function decodeHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .trim();
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const venue = await getVenue(slug);

  if (!venue) {
    notFound();
  }

  const media = await getMedia(venue.featured_media);

  const title = decodeHtml(venue.title.rendered);

  const description = venue.excerpt?.rendered
    ? decodeHtml(venue.excerpt.rendered)
    : "";

  const seats = venue.acf?.venue_fields?.seats || "";
  const venueType = venue.acf?.venue_fields?.venue_type || "";

  return (
    <main className="min-h-screen bg-[#220715] text-[#f0e9df]">
      {/* =====================================================
          HERO
      ===================================================== */}

      {/* =====================================================
          INTRO / DETAILS
      ===================================================== */}

      <Section className="mt-[7em]">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#ff3b11]" />

              <span className="font-space text-[9px] uppercase tracking-[0.25em] text-[#ff3b11]">
                The Space
              </span>
            </div>

            <h2 className="mt-6 max-w-[520px] font-migra text-[48px] leading-[0.95] md:text-[64px]">
              A space made for good times.
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-[700px]">
            {description && (
              <p className="font-space text-[15px] leading-[2] text-[#f0e9df]/75 md:text-[17px]">
                {description}
              </p>
            )}

            <div className="mt-12 grid gap-px overflow-hidden border border-[#ff3b11]/40 bg-[#ff3b11]/40 sm:grid-cols-2">
              {/* Capacity */}
              <div className="bg-[#220715] p-7">
                <span className="font-space text-[9px] uppercase tracking-[0.2em] text-[#ff3b11]">
                  Capacity
                </span>

                <p className="mt-4 font-migra text-[28px]">
                  {seats || "Flexible"}
                </p>
              </div>

              {/* Type */}
              <div className="bg-[#220715] p-7">
                <span className="font-space text-[9px] uppercase tracking-[0.2em] text-[#ff3b11]">
                  Venue Type
                </span>

                <p className="mt-4 font-migra text-[28px]">
                  {venueType || "Events Space"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* =====================================================
          FEATURE IMAGE
      ===================================================== */}

      {media?.source_url && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
          <div className="relative aspect-[16/9] overflow-hidden md:aspect-[2/1]">
            <Image
              src={media.source_url}
              alt={media.alt_text || title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 1440px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#220715]/50 to-transparent" />

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="border border-[#ff3b11] bg-[#220715]/80 px-5 py-3 backdrop-blur-sm">
                <span className="font-space text-[9px] uppercase tracking-[0.2em] text-[#ff3b11]">
                  {title}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          PERFECT FOR
      ===================================================== */}

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#ff3b11]" />

              <span className="font-space text-[9px] uppercase tracking-[0.25em] text-[#ff3b11]">
                Make It Yours
              </span>
            </div>

            <h2 className="mt-6 mb-6 font-migra text-[48px] leading-[0.95] md:text-[62px]">
              Bring your people.
              <br />
              We&apos;ll bring the vibe.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Private celebrations",
              "Group dining",
              "Corporate events",
              "Christmas functions",
              "Birthday celebrations",
              "Long lunches & drinks",
            ].map((item, index) => (
              <div
                key={item}
                className="group flex items-center gap-5 border border-[#ff3b11]/40 px-6 py-7 transition-colors duration-300 hover:border-[#ff3b11] hover:bg-[#ff3b11]"
              >
                <span className="font-space text-[9px] text-[#ff3b11] group-hover:text-[#220715]">
                  0{index + 1}
                </span>

                <span className="font-space text-[12px] uppercase tracking-wide group-hover:text-[#220715]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 pb-24 md:px-10 lg:px-16 lg:pb-32">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden border border-[#ff3b11]/50 bg-[#2b0b1c] px-8 py-14 md:px-14 md:py-16 lg:px-20 lg:py-20">
          {/* Subtle decorative circles */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#ff3b11]/15" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#ff3b11]/10" />

          {/* Small accent */}
          <div className="absolute left-0 top-0 h-full w-[3px] bg-[#ff3b11]" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-[750px]">
              <p className="font-space text-[9px] uppercase tracking-[0.25em] text-[#ff3b11]">
                Ready to make it happen?
              </p>

              <h2 className="mt-5 max-w-[700px] font-migra text-[44px] leading-[0.98] text-[#f0e9df] md:text-[62px] lg:text-[70px]">
                Let&apos;s make your event
                <br />
                one to remember.
              </h2>
            </div>

            <Link
              href="/book-your-venue"
              className="
          inline-flex
          h-[52px]
          shrink-0
          items-center
          justify-center
          border
          border-[#ff3b11]
          bg-[#ff3b11]
          px-8
          font-space
          text-[10px]
          font-medium
          uppercase
          tracking-[0.08em]
          text-[#220715]
          transition-all
          duration-300
          hover:bg-transparent
          hover:text-[#ff3b11]
        "
            >
              Enquire About This Space
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          BACK LINK
      ===================================================== */}

      <div className="mx-auto max-w-[1440px] px-6 pb-16 md:px-10 lg:px-16">
        <Link
          href="/venues"
          className="group inline-flex items-center gap-4 font-space text-[9px] uppercase tracking-[0.2em] text-[#f0e9df]/60 transition-colors hover:text-[#ff3b11]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to all venues
        </Link>
      </div>
    </main>
  );
}
