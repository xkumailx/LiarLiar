import Events from "@/components/ui/event-card";
// import EventCard from "@/components/ui/event-card";
import { Section } from "@/components/ui/section";

export default function EventsPage() {
  return (
    <main className="bg-[#220715] text-[#F0E9DF]">
      {/* Hero */}
      <Section>
        <div className="py-16 sm:py-20 lg:py-28">
          <h1 className="max-w-4xl font-migra text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl lg:text-7xl">
            Events
          </h1>

          <p className="mt-6 max-w-xl font-space text-sm leading-relaxed text-[#F0E9DF]/65 sm:text-base">
            Discover what’s happening next. From unforgettable nights to special
            events, find your next reason to get together.
          </p>
        </div>
      </Section>

      {/* Events */}
      <Section>
        <div className="pt-10 sm:pt-14">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <h2 className="font-migra text-white text-3xl sm:text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] text-center">
                Explore Events
              </h2>
            </div>

            <span className="font-space text-[10px] uppercase tracking-[0.15em] text-[#F0E9DF]/50 sm:block">
              Good times ahead
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 mt-[2em]">
            <Events />
          </div>
        </div>
      </Section>
    </main>
  );
}
