import { Section } from "@/components/ui/section";
import ExperienceCards from "@/components/ui/white-cards";
import OrangeCard from "@/components/ui/orange-cards";
import HeroBanner from "@/components/ui/herobanner";
import ImageSlider from "@/components/ui/image-slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  // const weekly = events.filter((e) => e.category === "weekly").slice(0, 3);
  // const featured = events.filter((e) => e.category === "featured").slice(0, 3);
  // const whatsOn = [...featured, ...weekly].slice(0, 3);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <HeroBanner image="/Dining-Experience.webp" title="Dining Experience" />
      </section>

      <Section className="bg-claret/30">
        <div className="">
          <h1 className="font-migra text-white text-center text-4xl sm:text-5xl md:text-7xl lg:text-6xl leading-[1.05] tracking-[0.02em] px-5">
            Modern Japanese dining. Bayside&apos;s best kept secret.
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
              Reservations
            </Button>
          </div>
        </div>
      </Section>

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
        <div className="flex justify-center">
          <div className="relative w-full max-w-[540px] h-[350px] sm:h-[540px] overflow-hidden">
            <Image
              src="/Pink_Neon.png"
              alt="Dining Experience"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ExperienceCards
            href="#"
            image="/View-food-menu.png"
            imageAlt="Our Menu"
            eyebrow="Modern Japanese"
            title="View Food Menu"
            description="A considered menu that travels from the delicate to the bold — fresh oysters and single bites giving way to shared plates, robata fire, and substantial cuts for when the evening calls for it. You won't regret it."
          />

          <ExperienceCards
            href="#"
            image="/View-drink-list.png"
            imageAlt="Private Dining"
            eyebrow="Signature Drinks"
            title="View Drinks List"
            description="An extensive sake list, Japanese whisky featuring Yamazaki, Hibiki and Nikka, wine, and a cocktail program that changes with the confessions. Our signature drinks list is crafted to complement the dining experience and carry the night long after."
          />
        </div>
      </Section>

      <section>
        <ImageSlider images={images} />
      </section>
      {/* Orange card    */}
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
    </>
  );
}
