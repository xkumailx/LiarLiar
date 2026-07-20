import type { MenuHighlight } from "@/lib/types";
import { Button } from "./ui/button";
import { Media } from "./ui/media";

/** Two-up food / drinks teaser used on Landing, Dining and About. */
export function MenuShowcase({
  food,
  drinks,
}: {
  food: MenuHighlight[];
  drinks: MenuHighlight[];
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <MenuColumn
        eyebrow="Modern Japanese"
        title="The Food"
        intro="A considered menu that travels from the delicate to the bold — fresh oysters and single bites giving way to shared plates, robata fire, and substantial cuts for when the evening calls for it. You won't regret it."
        items={food}
        cta={{ label: "View Food Menu", href: "/dining#menu" }}
        mediaLabel="Robata"
      />
      <MenuColumn
        eyebrow="Signature Drinks"
        title="The Drinks"
        intro="An extensive sake list, Japanese whisky featuring Yamazaki, Hibiki and Nikka, wine, and a cocktail program that changes with the confessions."
        items={drinks}
        cta={{ label: "View Drinks List", href: "/dining#drinks" }}
        mediaLabel="Cocktails"
      />
    </div>
  );
}

function MenuColumn({
  eyebrow,
  title,
  intro,
  items,
  cta,
  mediaLabel,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: MenuHighlight[];
  cta: { label: string; href: string };
  mediaLabel: string;
}) {
  return (
    <div className="flex flex-col">
      <Media ratio="aspect-[16/10]" label={mediaLabel} />
      <p className="eyebrow mt-8 mb-3">{eyebrow}</p>
      <h3 className="font-display text-3xl text-sand sm:text-4xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-sand/70">{intro}</p>
      <ul className="mt-7 space-y-5">
        {items.map((item) => (
          <li key={item.id} className="border-t border-sand/10 pt-5">
            <h4 className="font-display text-xl text-sand">{item.name}</h4>
            <p className="mt-1 text-sm leading-relaxed text-sand/60">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href={cta.href} variant="outline" size="sm">
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
