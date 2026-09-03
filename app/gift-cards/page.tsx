import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Media } from "@/components/ui/media";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give the gift of a night at Liar Liar — dinner, drinks and the disco. Gift vouchers available.",
};

const amounts = ["$50", "$100", "$150", "$250"];

export default function GiftCardsPage() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Media ratio="aspect-[4/3]" label="Gift Card" rounded="rounded-3xl" />
          <div>
            <SectionHeading
              eyebrow="Choose an amount"
              title="A gift that always fits."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {amounts.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-sand/20 px-6 py-3 font-display text-xl text-sand"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-sand/60">
              Digital gift cards are delivered by email and redeemable in venue.
              Custom amounts available.
            </p>
            <div className="mt-8">
              <Button
                href={process.env.NEXT_PUBLIC_GIFT_CARD_URL ?? "/contact"}
                variant="koki"
                size="lg"
                external={Boolean(process.env.NEXT_PUBLIC_GIFT_CARD_URL)}
              >
                Buy a Gift Card
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
