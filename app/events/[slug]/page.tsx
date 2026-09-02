import Image from "next/image";
// import Link from "next/link";
import { notFound } from "next/navigation";
// import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import Link from "next/dist/client/link";

interface Event {
  id: number;
  slug: string;
  status: string;

  title: {
    rendered: string;
  };

  excerpt: {
    rendered: string;
  };

  content: {
    rendered: string;
  };

  acf?: {
    event_date?: string;
    event_status?: string;
    inclusions?: string;
    price?: string;
    event_banner?: string;
  };

  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;

    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
        taxonomy: string;
      }>
    >;
  };
}

/* =========================================================
   GET EVENT
========================================================= */

async function getEvent(slug: string): Promise<Event | null> {
  const wordpressUrl = process.env.WORDPRESS_URL;

  if (!wordpressUrl) {
    throw new Error("WORDPRESS_URL is not configured");
  }

  const baseUrl = wordpressUrl.replace(/\/+$/, "");

  const response = await fetch(
    `${baseUrl}/wp-json/wp/v2/event?slug=${encodeURIComponent(
      slug,
    )}&_embed=wp:featuredmedia,wp:term`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    return null;
  }

  const data: Event[] = await response.json();

  return data[0] || null;
}

/* =========================================================
   DECODE HTML ENTITIES
========================================================= */

const decodeHtml = (html: string) => {
  return html
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ");
};

/* =========================================================
   CLEAN WORDPRESS CONTENT
========================================================= */

const cleanWordPressContent = (content: string) => {
  return (
    content
      // Remove WPBakery shortcodes
      .replace(/\[[^\]]+\]/g, "")

      // Remove WPBakery wrapper
      .replace(
        /<div[^>]*class=["'][^"']*wpb-content-wrapper[^"']*["'][^>]*>/gi,
        "",
      )
      .replace(/<\/div>/gi, "")

      // Remove empty paragraphs
      .replace(/<p>\s*<\/p>/gi, "")

      // Remove excessive whitespace
      .replace(/\n\s*\n/g, "\n")

      .trim()
  );
};

/* =========================================================
   EVENT PAGE
========================================================= */

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  /* -------------------------------------------------------
     EVENT DATA
  ------------------------------------------------------- */

  const featuredImage = event._embedded?.["wp:featuredmedia"]?.[0];

  const featuredImageUrl =
    featuredImage?.source_url || "/images/event-placeholder.jpg";

  const imageAlt = featuredImage?.alt_text || decodeHtml(event.title.rendered);

  const title = decodeHtml(event.title.rendered);

  const excerpt = cleanWordPressContent(event.excerpt?.rendered || "");

  const content = cleanWordPressContent(event.content?.rendered || "");

  const date = event.acf?.event_date || "";

  const banner = event.acf?.event_banner || "/images/event-placeholder.jpg";

  const inclusions = event.acf?.inclusions || "";

  const price = event.acf?.price || "";

  const eventStatus = event.acf?.event_status || "";

  /* -------------------------------------------------------
     CATEGORY
  ------------------------------------------------------- */

  const categories = event._embedded?.["wp:term"]?.[0] || [];

  const category = categories.find((item) => item.taxonomy === "category");

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#220715] text-[#F0E9DF]">
      {/* =====================================================
          HERO / EVENT BANNER
      ===================================================== */}
      <section className="relative h-[420px] w-full overflow-hidden sm:h-[500px] lg:h-[620px]">
        <Image
          src={banner}
          alt={imageAlt}
          width={1920}
          height={620}
          sizes="100vw"
          priority
          className="h-full w-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#220715]/25" />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#220715] to-transparent" />
      </section>

      <Section className="mx-auto max-w-[1600px]">
        <article className="mx-auto w-full">
          {/* CATEGORY + STATUS */}

          {(category || eventStatus) && (
            <div className="mb-6 my-4 flex flex-wrap items-center gap-3 sm:my-[1em] sm:p-[1em]">
              {category && (
                <span className="rounded-full bg-[#ff3b11] px-4 py-2 font-space text-[10px] font-bold uppercase tracking-[0.15em] text-[#220715]">
                  {category.name}
                </span>
              )}

              {eventStatus && (
                <span className="rounded-full border border-[#F0E9DF]/30 px-4 py-2 font-space text-[10px] font-bold uppercase tracking-[0.15em] text-[#F0E9DF]">
                  {eventStatus}
                </span>
              )}
            </div>
          )}

          {/* TITLE */}

          <h1
            className="
          font-space
          text-4xl
          font-medium
          leading-[1.05]
          text-[#F0E9DF]
          sm:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
          >
            {title}
          </h1>

          {/* DATE */}

          {date && (
            <p className="mt-6 font-space text-xs font-medium uppercase tracking-[0.15em] text-[#F0E9DF]/60 sm:text-sm">
              {date}
            </p>
          )}

          {/* EVENT DETAILS */}

          {(inclusions || price) && (
            <div
              className="
            mt-10
            grid
            gap-8
            border-y
            border-[#F0E9DF]/15
            py-8
            sm:grid-cols-2
            lg:mt-12
          "
            >
              {inclusions && (
                <div>
                  <p className="mb-3 font-space text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff3b11]">
                    Inclusions
                  </p>

                  <p className="font-space text-sm leading-relaxed text-[#F0E9DF]/80 sm:text-base">
                    {inclusions}
                  </p>
                </div>
              )}

              {price && (
                <div>
                  <p className="mb-3 font-space text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff3b11]">
                    Price
                  </p>

                  <p className="font-space text-sm leading-relaxed text-[#F0E9DF]/80 sm:text-base">
                    {price}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* WORDPRESS EXCERPT */}

          {excerpt && (
            <div
              className="
            mt-10
            font-space
            text-xl
            leading-[1.5]
            text-[#F0E9DF]
            sm:mt-12
            sm:text-2xl
            lg:text-[28px]
            lg:leading-[1.45]
          "
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            />
          )}

          {/* WORDPRESS EVENT CONTENT */}

          {content && (
            <div
              className="
            event-content
            mt-10
            font-space
            text-base
            leading-[1.8]
            text-[#F0E9DF]/85
            sm:mt-14

            [&_p]:mb-6

            [&_h1]:mb-6
            [&_h1]:mt-12
            [&_h1]:text-4xl

            [&_h2]:mb-6
            [&_h2]:mt-14
            [&_h2]:text-3xl
            [&_h2]:leading-tight

            [&_h3]:mb-4
            [&_h3]:mt-10
            [&_h3]:text-2xl
            [&_h3]:leading-tight

            [&_h4]:mb-3
            [&_h4]:mt-8
            [&_h4]:text-xl

            [&_a]:text-[#ff3b11]
            [&_a]:underline
            [&_a]:underline-offset-4

            [&_strong]:font-bold
            [&_strong]:text-[#F0E9DF]

            [&_ul]:mb-6
            [&_ul]:list-disc
            [&_ul]:pl-6

            [&_ol]:mb-6
            [&_ol]:list-decimal
            [&_ol]:pl-6

            [&_li]:mb-2

            [&_blockquote]:my-8
            [&_blockquote]:border-l-2
            [&_blockquote]:border-[#ff3b11]
            [&_blockquote]:pl-6
            [&_blockquote]:italic

            [&_img]:my-8
            [&_img]:h-auto
            [&_img]:max-w-full

            [&_figure]:my-8
            [&_figure]:max-w-full

            [&_figcaption]:mt-2
            [&_figcaption]:text-xs
            [&_figcaption]:text-[#F0E9DF]/50
          "
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          )}
        </article>
      </Section>

      <Section>
        <div className="flex w-full justify-center">
          <div className="mt-10 h-[400px] w-[400px] max-w-full overflow-hidden bg-[#F0E9DF] text-[#220715]">
            <div className="p-5">
              <h3 className="font-space text-lg font-bold leading-tight">
                Good Food. Good Times.
              </h3>

              <p className="mt-2 font-space text-xs leading-relaxed text-[#220715]/65">
                Gather your favourite people for a night to remember.
              </p>
            </div>

            <div className="p-5 h-[calc(400px-132px)] w-full overflow-hidden">
              <Image
                src="/Pink_Neon.png"
                alt="Liar Liar"
                width={400}
                height={268}
                sizes="400px"
                className="h-full w-full object-cover"
              />
            </div>
            <Link
              href=""
              className="block items-center justify-center text-center w-full sm:w-auto bg-[#FF7254] px-6 sm:px-10 py-3 sm:py-4 font-space font-extrabold text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#220715] transition-all duration-300 hover:bg-[#ff876d]"
              style={{
                borderWidth: "0.5px 2px 2px 0.5px",
                borderStyle: "solid",
                borderColor: "#220715",
              }}
            >
              Eplore More Events
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
