import { Button } from "./ui/button";

export type ReservationType = {
  id: string;
  title: string;
  description: string;
  cta: string;
};

export const reservationTypes: ReservationType[] = [
  {
    id: "dinner",
    title: "Reserve Dinner",
    description:
      "Modern Japanese dining. Small plates, robata and the full menu.",
    cta: "Book Dinner",
  },
  {
    id: "dinner-after-dark",
    title: "Reserve Dinner & After Party",
    description: "Start with dinner, stay for the DJ. The full Liar Liar night.",
    cta: "Book the Night",
  },
  {
    id: "omakase",
    title: "Reserve Omakase",
    description: "The chef's counter. 14–16 courses in 2-hour seatings.",
    cta: "Book Omakase",
  },
  {
    id: "bottle-service",
    title: "Reserve Bottle Service",
    description:
      "Your own table, premium pours, and a night built around your group.",
    cta: "Book Bottle Service",
  },
];

/**
 * Reservation type cards. Each anchors to its own booking block. Wire the
 * `cta` to your OpenTable experience IDs or booking URLs via env / WordPress.
 */
export function ReservationOptions() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {reservationTypes.map((type) => (
        <div
          key={type.id}
          id={type.id}
          className="scroll-mt-28 flex flex-col rounded-2xl border border-sand/10 bg-claret/40 p-8"
        >
          <h3 className="font-display text-2xl text-sand sm:text-3xl">
            {type.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-sand/65">
            {type.description}
          </p>
          <div className="mt-6">
            <Button href="#book" variant="primary" size="sm">
              {type.cta}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
