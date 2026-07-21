// // import { Hero } from "@/components/hero";;
// // import { Marquee } from "@/components/marquee";
import { Section } from "@/components/ui/section";
import ExperienceCards from "@/components/ui/white-cards";
import OrangeCard from "@/components/ui/orange-cards";
import HeroBanner from "@/components/ui/herobanner";
import ImageSlider from "@/components/ui/image-slider";
import { Button } from "@/components/ui/button";
// import { Container } from "@/components/ui/container";
// import { ExperienceCard } from "@/components/experience-card";
// import { EventCard } from "@/components/event-card";
// import { MenuShowcase } from "@/components/menu-showcase";
// import { ReservationCTA } from "@/components/reservation-cta";
// import { Media } from "@/components/ui/media";
import { getEvents } from "@/lib/wordpress";
// import { foodHighlights, drinkHighlights } from "@/lib/content/menu";
// import { site } from "@/lib/content/site";
import Image from "next/image";
import Link from "next/dist/client/link";
import EventCard from "@/components/ui/event-card";
import EventsCardswb from "@/components/ui/events-cards-wb";

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

export default async function HomePage() {
  const events = await getEvents();
  const weekly = events.filter((e) => e.category === "weekly").slice(0, 3);
  const featured = events.filter((e) => e.category === "featured").slice(0, 3);
  const whatsOn = [...featured, ...weekly].slice(0, 3);

  return (
    <>
      <section className="bg-black">
        <div>
          <Image
            src="/landing-page-banner.png"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* <section className="relative w-full h-screen overflow-hidden">
        <HeroBanner image="/Dining-Experience.webp" title="Dining Experience" />
      </section> */}

      <Section className="bg-claret/30">
        <div className="">
          <h1 className="font-migra text-white text-center text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] text-center">
            Modern Japanese dinner & Disco.
          </h1>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed">
            Japanese technique. Global ingredients. This is the full experience.
            Small plates built for sharing, robata grilling over hot charcoal,
            fresh nigiri, and tableside moments you won&apos;t want to miss.
          </p>
          <div className="mt-8 text-center">
            <Button
              className="px-[1em]"
              href="/reservations"
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
            <p className="mb-0">Friday 5:30pm—1am</p>
            <p className="mb-0">Saturday 12pm—1am</p>
            <p className="mb-0">Sunday 12pm—10pm</p>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["/Liar-Liar.png", "/Liar-Liar-1.png", "/Liar-Liar-2.png"].map(
            (src, index) => (
              <div
                key={index}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Dining Experience ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ),
          )}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceCards
            href="#"
            image="/View-food-menu.png"
            imageAlt="Our Menu"
            eyebrow="Modern Japanese"
            title="Dining"
            description="Small plates, robata fire, fresh nigiri, and a drinks list that carries the night long after the last course."
          />

          <ExperienceCards
            href="#"
            image="/View-drink-list.png"
            imageAlt="Private Dining"
            eyebrow="The Liar Liar Experience"
            title="Omakase"
            description="Trust the kitchen. 14-16 courses, sourced globally, plated in front of you. The chef leads — something remarkable happens in between."
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceCards
            href="#"
            image="/View-food-menu.png"
            imageAlt="Our Menu"
            eyebrow="Late Night Energy"
            title="After Dark"
            description="When the lights drop, Liar Liar doesn't slow down — it ignites. DJs, late nights, and the kind of energy worth staying for."
          />

          <ExperienceCards
            href="#"
            image="/View-drink-list.png"
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
            href="#"
            className="group block border border-white/100 rounded-xl overflow-hidden transition-all duration-300 hover:border-white"
          >
            <div className="p-8">
              <p className="font-space font-extrabold text-center text-xs uppercase tracking-[0.2em] text-[#F0E9DF]">
                Do you Have a Function or Event?
              </p>

              <h3 className="font-migra font-extrabold text-center text-5xl mt-7 text-[#F0E9DF]">
                Private Dining
              </h3>

              <p className="font-space text-center leading-relaxed mt-7 text-[#F0E9DF] min-h-[120px]">
                Tell us what you&apos;re planning. We&apos;ll handle everything
                else.
              </p>
              <div className="relative text-center mt-7 overflow-hidden">
                <Image
                  src="/View-food-menu.png"
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
          <EventCard
            href="#"
            image="/koshamika-osen.png"
            imageAlt="Producer Sitting"
            title="Event Name"
            date="Day, Date and Time"
          />

          <EventCard
            href="#"
            image="/koshamika-osen.png"
            imageAlt="Collaboration Sitting"
            title="Event Name"
            date="Day, Date and Time"
          />
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
      </Section>

      <Section>
        <div className="">
          <OrangeCard
            href="/menu"
            eyebrow="Opening Hours"
            title="Reservations"
            description={
              <>
                <p className="mb-0">Wednesday & Thursday 5:30pm—11pm</p>
                <p className="mb-0">Friday 5:30pm—1am</p>
                <p className="mb-0">Saturday 12pm—1am</p>
                <p className="mb-0">Sunday 12pm—10pm</p>
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
