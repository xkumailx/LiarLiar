// // import { Hero } from "@/components/hero";;
// // import { Marquee } from "@/components/marquee";
import { Section } from "@/components/ui/section";
import Reservation from "@/components/ui/reservation";
import ExperienceCards from "@/components/ui/white-cards";
import OrangeCard from "@/components/ui/orange-cards";
// import HeroBanner from "@/components/ui/herobanner";
import ImageSlider from "@/components/ui/image-slider";
import { Button } from "@/components/ui/button";
// import { Container } from "@/components/ui/container";
// import { ExperienceCard } from "@/components/experience-card";
// import { EventCard } from "@/components/event-card";
// import { MenuShowcase } from "@/components/menu-showcase";
// import { ReservationCTA } from "@/components/reservation-cta";
// import { Media } from "@/components/ui/media";
// import { foodHighlights, drinkHighlights } from "@/lib/content/menu";
// import { site } from "@/lib/content/site";
import Image from "next/image";
import Link from "next/dist/client/link";
import { Eventshome } from "@/components/ui/event-card";
// import EventsCardswb from "@/components/ui/events-cards-wb";

const images = [
  { src: "/dance.webp", alt: "Dance" },
  // { src: "/Drink.webp", alt: "Gallery 2" },
  { src: "/food.webp", alt: "Modern Food" },
  { src: "/dance1.webp", alt: "Fire Dance" },
  // { src: "/Drink1.webp", alt: "Gallery 5" },
  { src: "/food1.webp", alt: "Japanese Food" },
  { src: "/food2.webp", alt: "Liar Liar Food" },
  { src: "/food3.webp", alt: "Food" },
  { src: "/dine.webp", alt: "Dine" },
  { src: "/guest-1.webp", alt: "Guest" },
  { src: "/sushi.webp", alt: "Sushi" },
  // { src: "/Drink-4.png", alt: "Gallery 9" },
  // { src: "/Drink-5.png", alt: "Gallery 10" },
];

export default async function HomePage() {
  return (
    <>
      <section className="bg-black">
        <div>
          <Image
            src="/Venue.webp"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-screen object-cover"
          />
        </div>
      </section>

      <Section className="bg-claret/30">
        <div className="">
          <h1 className="font-migra text-white text-center text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] text-center">
            Modern Japanese Dinner & Disco.
          </h1>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed">
            Japanese technique. Global ingredients. This is the full experience.
            Small plates built for sharing, robata grilling over hot charcoal,
            fresh nigiri, and tableside moments you won&apos;t want to miss.
          </p>
          <div className="mt-8 text-center">
            <Button
              className="px-[1em]"
              href="https://www.opentable.com.au/restaurant/profile/279680?shareReferrer=ios-share"
              external
              variant="bgsquare"
              size="sm"
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </Section>

      <section>
        <div>
          <p className=" font-space font-extrabold text-center text-base uppercase text-[#F0E9DF]">
            Opening Hours
          </p>
          <div className="mt-7 space-y-5 font-space text-center leading-relaxed text-[#F0E9DF]">
            <p className="mb-0">Wednesday &amp; Thursday 5:30pm—11pm</p>
            <p className="mb-0">Friday 5:30pm—Late</p>
            <p className="mb-0">Saturday 12pm—Late</p>
            <p className="mb-0">Sunday 12pm—Late</p>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/food4.webp", "/food5.webp", "/food6.webp"].map((src, index) => (
            <div key={index} className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={src}
                alt={`Dining Experience ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-[#220715] px-6 py-20 md:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#ff6a55]">
            Explore Our Menus
          </p>

          <h2 className="font-migra mb-4 text-4xl font-bold text-[#f0e9df] md:text-5xl lg:text-6xl">
            Something For Every Taste
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-base leading-7 text-[#f0e9df]/75 md:text-lg">
            From delicious food to sushi and refreshing drinks, explore
            everything Liar Liar has to offer.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <a
              href="/food-menu"
              className="font-migra group flex min-h-[120px] items-center justify-center rounded-none bg-[#ff6a55] px-8 py-7 text-xl font-bold uppercase tracking-wide text-[#f0e9df] transition-all duration-300 hover:-translate-y-2 hover:bg-[#f0e9df] hover:text-[#220715]"
            >
              <span>Food Menu</span>
            </a>

            <a
              href="/sip-n-sushi-menu"
              className="font-migra group flex min-h-[120px] items-center justify-center rounded-none bg-[#ff6a55] px-8 py-7 text-xl font-bold uppercase tracking-wide text-[#f0e9df] transition-all duration-300 hover:-translate-y-2 hover:bg-[#f0e9df] hover:text-[#220715]"
            >
              <span>Sip n Sushi Menu</span>
            </a>

            <a
              href="/drinks-menu"
              className="font-migra group flex min-h-[120px] items-center justify-center rounded-none bg-[#ff6a55] px-8 py-7 text-xl font-bold uppercase tracking-wide text-[#f0e9df] transition-all duration-300 hover:-translate-y-2 hover:bg-[#f0e9df] hover:text-[#220715]"
            >
              <span>Drinks Menu</span>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceCards
            href="/dining"
            image="/modern-japanese-dining.webp"
            imageAlt="Our Menu"
            eyebrow="Modern Japanese"
            title="Dining"
            description="Small plates, robata fire, fresh nigiri, and a drinks list that carries the night long after the last course."
          />

          <ExperienceCards
            href="/omakase"
            image="/the-liar-liar-omakase.webp"
            imageAlt="Private Dining"
            eyebrow="The Liar Liar Experience"
            title="Omakase"
            description="Trust the kitchen. 14-16 courses, sourced globally, plated in front of you. The chef leads the way — something remarkable happens in between."
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceCards
            href="/after-party"
            image="/liar-liar-after-party.webp"
            imageAlt="Our Menu"
            eyebrow="Late Night Energy"
            title="After Party"
            description="Live DJs, live music and when the lights drop, Liar Liar doesn't slow down — it ignites. DJs, late nights, and the kind of energy worth staying for."
          />

          <ExperienceCards
            href="/events"
            image="/liar-liar-after-party1.webp"
            imageAlt="Private Dining"
            eyebrow="Own The Night"
            title="Rooftop VIP Bottle Service"
            description="Your own table. Premium pours. A night built entirely around your group. With a sake list and cocktail menu like ours, the only way to do it properly is bottle service."
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <Link
            href="/events"
            className="group block border border-white/100 rounded-xl overflow-hidden transition-all duration-300 hover:border-white"
          >
            <div className="p-8">
              <p className="font-space font-extrabold text-center text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#F0E9DF]">
                Do you Have a Function or Event?
              </p>

              <h3 className="font-migra font-extrabold text-center text-5xl mt-7 text-[#F0E9DF]">
                Private Dining
              </h3>

              <p className="font-space text-center leading-relaxed mt-7 text-[#F0E9DF] min-h-[120px]">
                Tell us what you&apos;re planning. We&apos;ll handle everything
                else.
              </p>
              <div className="relative flex items-center justify-center text-center mt-7 overflow-hidden">
                <Image
                  src="/private-dining-and-event.webp"
                  alt=""
                  width={540}
                  height={338}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Eventshome />
        </div>
        <div className="mt-[4em] text-center">
          <Button
            className="px-[2em]"
            href="/reservations"
            variant="bgsquare"
            size="sm"
          >
            See All
          </Button>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reservation type="homepage" />
        </div>
      </Section>

      {/* <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <EventsCardswb
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="Every Month"
            title="Confessions & Cocktails"
            description="Your confessions unleashed to the Night Gremlins and maybe we’ll turn it into cocktail."
          />

          <EventsCardswb
              href="#"
              image="/the-journey.png"
              imageAlt="Private Dining"
              eyebrow="Every Wednesday"
              title="Yakitori Night"
              description="$12 selected skewers & $20 selected cocktails."
            />

          <EventsCardswb
            href="#"
            image="/Ultimate-experience.png"
            imageAlt="Our Menu"
            eyebrow="Every Saturday"
            title="Sip & Sushi"
            description="2 hours of bottomless sushi, sips and live music. / $99pp /"
          />
        </div>
      </Section> */}

      <Section>
        <div className="">
          <OrangeCard
            href="/menu"
            eyebrow="Opening Hours"
            title="Reservations"
            description={
              <>
                <p className="mb-0">Wednesday & Thursday 5:30pm—11pm</p>
                <p className="mb-0">Friday 5:30pm—Late</p>
                <p className="mb-0">Saturday 12pm—Late</p>
                <p className="mb-0">Sunday 12pm—Late</p>
              </>
            }
            buttonText="Reserve a Table"
          />
        </div>
      </Section>

      <section>
        <ImageSlider images={images} />
      </section>
    </>
  );
}
