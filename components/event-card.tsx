import Link from "next/link";
import type { LLEvent } from "@/lib/types";
import { Media } from "./ui/media";

export function EventCard({ event }: { event: LLEvent }) {
  return (
    <Link
      href={`/whats-on/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand/10 bg-claret/40 transition-all duration-200 hover:-translate-y-1 hover:border-sand/25"
    >
      <Media
        src={event.image}
        alt={event.title}
        ratio="aspect-[3/2]"
        rounded="rounded-none"
        label={event.cadence ?? "Liar Liar"}
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow mb-3">{event.cadence ?? event.dateLabel}</p>
        <h3 className="font-display text-2xl leading-tight text-sand">
          {event.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-sand/65">
          {event.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between pt-4">
          {event.price ? (
            <span className="text-sm font-medium text-koki">{event.price}</span>
          ) : (
            <span className="text-xs uppercase tracking-[0.16em] text-sand/45">
              {event.dateLabel}
            </span>
          )}
          <span className="text-sm text-torii transition-transform group-hover:translate-x-1">
            ›
          </span>
        </div>
      </div>
    </Link>
  );
}
