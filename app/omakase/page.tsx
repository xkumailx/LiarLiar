import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section } from "@/components/ui/section";
// import { ReservationCTA } from "@/components/reservation-cta";
// import { Media } from "@/components/ui/media";
import { Button } from "@/components/ui/button";
// import { EventCard } from "@/components/event-card";
import { getEventsByStrand } from "@/lib/wordpress";
import HeroBanner from "@/components/ui/herobanner";
import ExperienceCards from "@/components/ui/white-cards";
import CardText from "@/components/ui/card-text";
import OrangeCard from "@/components/ui/orange-cards";
import Image from "next/image";
import EventCard from "@/components/ui/event-card";
import ImageSlider from "@/components/ui/image-slider";

export const metadata: Metadata = {
  title: "Omakase",
  description:
    "Liar Liar Omakase — an intimate 14–16 course chef's counter experience. Trust the kitchen. The night will handle itself.",
};

const images = [
  { src: "/Drink-1.jpg", alt: "Gallery 1" },
  { src: "/Drink-2.png", alt: "Gallery 2" },
  { src: "/Drink-3.png", alt: "Gallery 3" },
  { src: "/Drink-4.png", alt: "Gallery 4" },
  { src: "/Drink-5.png", alt: "Gallery 5" },
  { src: "/Drink-1.jpg", alt: "Gallery 6" },
  { src: "/Drink-2.png", alt: "Gallery 7" },
  { src: "/Drink-3.png", alt: "Gallery 8" },
  { src: "/Drink-4.png", alt: "Gallery 9" },
  { src: "/Drink-5.png", alt: "Gallery 10" },
];

export default async function OmakasePage() {
  // const events = await getEventsByStrand("omakase");

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <HeroBanner
          image="/Omakase.svg"
          title={
            <>
              Omakase /オマカセ/
              <br />
              The Liar Liar Experience
            </>
          }
        />
      </section>

      <Section className="bg-claret/30">
        <div className="">
          <h1 className="font-migra text-white text-center text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] text-center">
            Trust the kitchen. The night will handle itself.
          </h1>
          <p className="font-space font-extrabold mt-4 text-center text-sm uppercase tracking-[0.2em] text-[#F0E9DF]">
            Bookings are allocated a 2-hour seating time. Dinner bookings from
            7:30pm are invited to stay for our After Party
          </p>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed">
            Omakase / オマカセ / means &apos;I&apos;ll leave it up to you.&apos;
            It&apos;s a dining format rooted in trust. You surrender the menu,
            and in return, the chef curates every course. Each one is shaped by
            the season, the produce, and whatever our kitchen has decided is
            worth showing you that night — artfully considered and presented.
          </p>
          <div className="mt-8 text-center">
            <Button
              className="px-[1em]"
              href="/reservations"
              variant="bgsquare"
              size="sm"
            >
              Reserve your seat
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-claret/30">
        <div className="w-full lg:w-[65%] mx-auto">
          <h1 className="font-migra text-white text-5xl md:text-7xl lg:text-6xl tracking-[0.04em]">
            Leave it to us.
          </h1>
          <p className="font-space mt-6 mx-auto text-base leading-relaxed">
            Omakase at Liar Liar Braeside is an intimate dining experience. A
            curated journey through elevated Japanese fusion that starts with
            precision and ends in something electric. Seated at the chef&apos;s
            table, every dish comes to life in front of you. Freshly prepared
            sashimi, theatrical plating, and techniques drawn from the heart of
            Japanese culinary traditions. Each sitting unfolds as a deliberate
            progression of 14–16 pieces, sourced globally from refined and
            delicate through to bold and alive.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceCards
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="CHEF'S TABLE"
            title="Intimate Experience"
            description="The Counter An intimate 14-16-seat experience. Just you, the chef, and whatever they've decided is worth your time tonight."
          />

          <ExperienceCards
            href="#"
            image="/the-journey.png"
            imageAlt="Private Dining"
            eyebrow="THE FULL PROGRESSION"
            title="The Journey"
            description="14–16 courses. Sourced globally. Each one a deliberate progression from refined and delicate through to bold and electric."
          />
        </div>
      </Section>

      <Section>
        <CardText
          title="Omakase Sessions"
          images={[
            "/omakase-session.png",
            "/omakase-session.png",
            "/omakase-session.png",
          ]}
          content={
            <>
              <p>
                The Cover Story
                <br />
                /$199pp/
                <br />
                14–16 pieces · Sourced globally
                <br />+ Add a Substantial Course +$18
              </p>
              <p>
                The Clean Lie
                <br />
                / $180pp /
                <br />
                14–16 pieces · Plant-based
                <br />
                ≠Add a Substantial Course +$18
              </p>
            </>
          }
        />
      </Section>

      <Section>
        <div className="">
          <OrangeCard
            href="/menu"
            eyebrow=""
            title="Reservations"
            description={
              <>
                <p className="mb-0">Your Seat is Waiting.</p>
                <p className="mb-0">Wednesday – Saturday</p>
              </>
            }
            buttonText="Reserve a Seat"
          />
        </div>
      </Section>

      <Section>
        <div className="w-full lg:w-[40%] mx-auto">
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed uppercase">
            Hours: WEDNESDAY – SATURDAY  Seating Times are 2 hour intervals.
            Bookings from 7:30pm are invited to stay for our After Party.
          </p>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed uppercase">
            Dietary: Please share any dietary requirements at least 24 hours
            before your sitting, the kitchen wants to take care of you properly,
            and that takes planning. Anything after that, we can&apos;t make any
            promises. The experience remains non-refundable.
          </p>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed uppercase">
            Arrival policy: To make the most of your experience, we recommend
            arriving a few minutes before your sitting begins. The menu is a
            sequence, and each course builds on the last. Late arrivals may miss
            select dishes, and unfortunately, we can&apos;t go back. We
            appreciate your understanding.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            <ExperienceCards
              href="#"
              image="/the-transition.png"
              imageAlt="Our Menu"
              eyebrow="After Dark"
              title="The transition"
              description="When the omakase ends. The room doesn't. Stay for what comes next. Liar Liar After Dark Party"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-center">
          <Image
            src="/the-gremling.png"
            alt="Our Menu"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </Section>

      <Section>
        <div className="w-full lg:w-[50%]">
          <h1 className="font-migra text-white text-5xl md:text-7xl lg:text-6xl tracking-[0.04em]">
            The Space
          </h1>
          <p className="font-space mt-6 mx-auto text-base leading-relaxed">
            Perched on the first floor with floor-to-ceiling glazing open to the
            night sky. Warm, low-lit, and designed to draw you in — the counter
            is intimate by design, the room expansive beyond it. And above the
            omakase bar, the Gremlin&apos;s neon watches over proceedings. This
            is not your typical omakase setting — and that&apos;s entirely the
            point.
          </p>
        </div>
      </Section>

      {/* <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <EventCard
            href="#"
            image="/omakase-sitting.png"
            imageAlt="Producer Sitting"
            title="Event Name"
            date="Day, Date and Time"
          />

          <EventCard
            href="#"
            image="/omakase-collaboration.png"
            imageAlt="Collaboration Sitting"
            title="Event Name"
            date="Day, Date and Time"
          />
        </div>
      </Section> */}

      <Section>
        <CardText
          title="The Tradition Behind the Experience"
          images={[
            "/the-tradition.png",
            "/the-tradition.png",
            "/the-tradition.png",
          ]}
          content={
            <>
              <p>
                In Japan, omakase is considered the purest expression of
                hospitality. The chef decides everything — what you eat, in what
                order, and why. The tradition dates back to the Edo period, when
                Tokyo&apos;s finest sushi chefs would prepare whatever was
                freshest from the market that morning — a direct expression of
                skill, season, and trust. That philosophy hasn&apos;t changed.
                The best omakase experiences in the world still operate on the
                same principle: the chef leads, the guest follows, and something
                remarkable happens in between
              </p>
              <p>
                At Liar Liar, we took that tradition and charged it with
                something new. The craft is genuine, the technique is precise,
                and the ingredients are sourced globally. But the energy in the
                room is entirely our own — bold, vibrant, and built for a
                generation that wants their omakase to surprise them. This
                isn&apos;t hushed reverence. It&apos;s Japanese culinary
                tradition, reimagined for Melbourne&apos;s Bayside — and
                it&apos;s electric.
              </p>
            </>
          }
        />
      </Section>

      <section>
        <ImageSlider images={images} />
      </section>

      {/* The counter */}
      {/* <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Media ratio="aspect-[4/5]" label="The Counter" />
          <div>
            <p className="eyebrow mb-4">
              Chef&apos;s Table · Intimate Experience
            </p>
            <h2 className="font-display text-4xl text-sand sm:text-5xl">
              The Counter
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand/70">
              An intimate 14–16 seat experience. Just you, the chef, and
              whatever they&apos;ve decided is worth your time tonight. A
              curated journey through elevated Japanese fusion that starts with
              precision and ends in something electric.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sand/70">
              14–16 courses. Sourced globally. Each one a deliberate progression
              from refined and delicate through to bold and electric.
            </p>
          </div>
        </div>
      </Section> */}

      {/* Sessions */}
      {/* <Section className="bg-claret/30">
        <SectionHeading
          eyebrow="Omakase Sessions"
          title="The Journey"
          intro="Two ways through the progression. Seating times run in 2-hour intervals."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sessions.map((s) => (
            <div
              key={s.name}
              className="flex flex-col rounded-2xl border border-sand/10 bg-soy/40 p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl text-sand">{s.name}</h3>
                <span className="text-xl font-medium text-koki">{s.price}</span>
              </div>
              <p className="mt-3 text-sm text-sand/65">{s.detail}</p>
              <p className="mt-1 text-sm text-sand/45">{s.add}</p>
              <div className="mt-8">
                <Button
                  href="/reservations#omakase"
                  variant="outline"
                  size="sm"
                >
                  Book This Sitting
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section> */}

      {/* The space + tradition */}
      {/* <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">The Space</p>
            <h2 className="font-display text-3xl text-sand sm:text-4xl">
              Perched above the night.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand/70">
              First floor, floor-to-ceiling glazing open to the night sky. Warm,
              low-lit, and designed to draw you in — the counter is intimate by
              design.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">The Tradition</p>
            <h2 className="font-display text-3xl text-sand sm:text-4xl">
              The purest expression of hospitality.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand/70">
              In Japan, omakase is considered the purest expression of
              hospitality. The chef decides everything — what you eat, in what
              order, and why.
            </p>
          </div>
        </div>
      </Section> */}

      {/* Upcoming omakase events */}
      {/* {events.length > 0 ? (
        <Section className="bg-claret/30">
          <SectionHeading
            eyebrow="Upcoming · Omakase"
            title="Special Sittings"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </Section>
      ) : null} */}

      {/* <ReservationCTA
        eyebrow="Reservations"
        title="Your Seat is Waiting."
        lines={["Wednesday – Saturday", "Seatings in 2-hour intervals"]}
        ctaLabel="Reserve Omakase"
        ctaHref="/reservations#omakase"
      /> */}
    </>
  );
}
