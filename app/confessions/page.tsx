import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section, SectionHeading } from "@/components/ui/section";
import { CocktailFeature } from "@/components/cocktail-feature";
import { ReservationCTA } from "@/components/reservation-cta";
import { ConfessionForm } from "@/components/confession-form";
import { getConfessions, getCocktailOfTheMonth } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Confessions",
  description:
    "Your confessions, unleashed to the Night Gremlins. The best one becomes our Cocktail of the Month.",
};

export default async function ConfessionsPage() {
  const [confessions, cocktail] = await Promise.all([
    getConfessions(),
    getCocktailOfTheMonth(),
  ]);
  const featured = confessions.find((c) => c.featured) ?? confessions[0];
  const archive = confessions.filter((c) => c.id !== featured?.id);

  return (
    <>
      {/* <Hero
        eyebrow="Confessions & Cocktails"
        title="We all have a few unspoken secrets."
        subtitle="To confess. To declare love. In Japanese there's no difference between the two — and here there isn't either. At Liar Liar they become the menu."
        size="md"
      /> */}

      {/* Confession of the month */}
      {featured ? (
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-6">Confession of the Month</p>
            <blockquote className="font-display text-3xl italic leading-snug text-sand sm:text-5xl">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-sand/45">
              {featured.month} / {featured.author}
            </p>
          </div>
        </Section>
      ) : null}

      {/* Cocktail of the month */}
      {cocktail ? <CocktailFeature cocktail={cocktail} /> : null}

      {/* Submit a confession */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Unburden yourself"
              title="Got something to confess?"
              intro="Your confessions are unleashed to the Night Gremlins — and maybe we'll turn yours into next month's cocktail. Anonymous, always."
            />
          </div>
          <ConfessionForm />
        </div>
      </Section>

      {/* Archive */}
      {archive.length > 0 ? (
        <Section className="bg-claret/30">
          <SectionHeading eyebrow="Confession Archives" title="The vault." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((c) => (
              <figure
                key={c.id}
                className="flex flex-col justify-between rounded-2xl border border-sand/10 bg-soy/40 p-8"
              >
                <blockquote className="font-display text-xl italic leading-snug text-sand/90">
                  &ldquo;{c.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.16em] text-sand/45">
                  {c.month} / {c.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : null}

      <ReservationCTA />
    </>
  );
}
