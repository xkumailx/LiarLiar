import type { Cocktail } from "@/lib/types";
import { Container } from "./ui/container";
import { Media } from "./ui/media";

/** "Cocktail of the Month" feature band. */
export function CocktailFeature({ cocktail }: { cocktail: Cocktail }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-mulberry/40 to-soy" />
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Media src={cocktail.image} ratio="aspect-[4/5]" label="Cocktail of the Month" />
        <div>
          <p className="eyebrow mb-4">Cocktail of the Month · {cocktail.month}</p>
          <h2 className="font-display text-4xl text-sand sm:text-6xl">
            {cocktail.name}
          </h2>
          {cocktail.inspiredBy ? (
            <p className="mt-3 text-sm italic text-torii">{cocktail.inspiredBy}</p>
          ) : null}
          <p className="mt-6 text-base leading-relaxed text-sand/75">
            {cocktail.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
