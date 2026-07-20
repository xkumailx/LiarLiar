import { Container } from "./ui/container";
import { Button } from "./ui/button";

/** "Your Table is Waiting" reservation band, reused across pages. */
export function ReservationCTA({
  eyebrow = "Reservations",
  title = "Your Table is Waiting.",
  lines = [
    "Wednesday to Friday from 5pm",
    "Saturday from 5pm until late",
    "Sunday from 12pm",
  ],
  ctaLabel = "Reserve a Table",
  ctaHref = "/reservations",
}: {
  eyebrow?: string;
  title?: string;
  lines?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 glow opacity-90" />
      <Container className="flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display text-4xl leading-tight text-sand sm:text-6xl">
          {title}
        </h2>
        <div className="space-y-1 text-sand/80">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <Button href={ctaHref} variant="koki" size="lg">
          {ctaLabel}
        </Button>
      </Container>
    </section>
  );
}
