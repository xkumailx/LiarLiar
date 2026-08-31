import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section } from "@/components/ui/section";
// import { ReservationCTA } from "@/components/reservation-cta";
// import { Media } from "@/components/ui/media";
import { Button } from "@/components/ui/button";
// import { EventCard } from "@/components/event-card";
// import { CocktailFeature } from "@/components/cocktail-feature";
import { getEventsByStrand, getCocktailOfTheMonth } from "@/lib/wordpress";
import HeroBanner from "@/components/ui/herobanner";
import Image from "next/image";
import OrangeCard from "@/components/ui/orange-cards";
import EventCard from "@/components/ui/event-card";
import Faq from "@/components/ui/FaqSection";

export const metadata: Metadata = {
  title: "After Dark",
  description:
    "Liar Liar After Dark — VIP bottle service, resident DJs and late-night dancing in Bayside. When the lights drop, the room ignites.",
};

export default async function AfterDarkPage() {
  const [events, cocktail] = await Promise.all([
    getEventsByStrand("after-dark"),
    getCocktailOfTheMonth(),
  ]);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <HeroBanner image="/afterparty.webp" title={<>After Party</>} />
      </section>

      <Section className="bg-claret/30">
        <div className="">
          <h1 className="font-migra text-white text-center text-4xl sm:text-5xl md:text-7xl lg:text-6xl leading-[1.05] tracking-[0.02em] px-5">
            Own the Night / VIP Bottle Services
          </h1>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed">
            Consider this your invitation with premium seating. When the lights
            drop, Liar Liar doesn&apos;t slow down — it ignites. The Gremlin and
            DJ take over, the energy shifts, and the room becomes the last place
            you&apos;ll want to leave tonight.
          </p>
          <p className="font-space text-center mx-auto text-base leading-relaxed">
            Designed for: Big birthdays. Group celebrations. Intimate evenings.
            Or anyone who wants the full VIP After Party experience.
          </p>
          <div className="mt-8 text-center">
            <Button
              className="px-[1em]"
              href="/reservations"
              variant="bgsquare"
              size="sm"
            >
              Reserve a bottle
            </Button>
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="flex flex-col md:flex-row gap-[2.5em] md:gap-[1em]">
          <div className="w-full mt-0 md:mt-[5em] md:w-1/3">
            <h1 className="font-migra text-white text-4xl sm:text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] leading-[1.05]">
              Signature Cocktails
            </h1>

            <p className="font-space mt-4 sm:mt-6 mx-auto text-sm sm:text-base leading-relaxed">
              Award-winning mixologists. An exceptional sake list. Cocktails
              with something to say.
            </p>

            <Image
              src="/signature-cocktails.png"
              alt="Our Menu"
              width={400}
              height={400}
              className="max-w-full mt-7 sm:mt-10 h-auto"
            />
          </div>

          <div className="w-full md:w-1/3">
            <h1 className="font-migra text-white text-4xl sm:text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] leading-[1.05]">
              Reserve The Night / VIP Bottle Service
            </h1>

            <p className="font-space mt-4 sm:mt-6 mx-auto text-sm sm:text-base leading-relaxed">
              The definite way to experience After Dark. Be the life of the
              party with a dedicated table, a curated bottle selection, and a
              night designed entirely around your group and celebration.
            </p>

            <Image
              src="/reserve-a-night.png"
              alt="Our Menu"
              width={400}
              height={400}
              className="max-w-full mt-7 sm:mt-10 h-auto"
            />
          </div>

          <div className="w-full mt-0 md:mt-[5em] md:w-1/3">
            <h1 className="font-migra text-white text-4xl sm:text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] leading-[1.05]">
              Live DJ / Music
            </h1>

            <p className="font-space mt-4 sm:mt-6 mx-auto text-sm sm:text-base leading-relaxed">
              The dancefloor is yours. R&amp;B, Afro, and Funky House on
              rotation with resident DJs Friday and Saturday — and live music
              every Sunday.
            </p>

            <Image
              src="/live-dj.png"
              alt="Our Menu"
              width={400}
              height={400}
              className="max-w-full mt-7 sm:mt-10 h-auto"
            />
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="flex flex-col md:flex-row gap-[1em]">
          <div className="w-full md:w-1/3">{/* Column 1 */}</div>

          <div className="w-full text-center md:w-1/3">
            <Image
              src="/pink-bubble.svg"
              alt="Our Menu"
              width={400}
              height={400}
              className="max-w-full mt-10 h-auto"
            />
          </div>

          <div className="w-full md:w-1/3">{/* Column 3 */}</div>
        </div>
      </Section>

      <Section className="">
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="flex items-start">
            <div className="w-full md:pr-12 lg:pr-16">
              <h2 className="font-migra font-extrabold text-[#F0E9DF] text-4xl sm:text-5xl md:text-6xl leading-[1.05] sm:leading-none">
                Rooftop VIP Bottle Service
              </h2>

              <h1 className="font-migra mt-5 sm:mt-8 text-white text-3xl sm:text-5xl md:text-7xl lg:text-6xl tracking-[0.04em] leading-[1.1]">
                With a sake list and cocktail menu like ours, the only way to do
                it properly is bottle service.
              </h1>

              <p className="mt-5 sm:mt-8 space-y-6 font-space text-sm sm:text-base leading-relaxed text-[#F0E9DF]">
                From the moment you arrive, every detail is taken care of. A
                dedicated table, premium pours, and a personalised experience
                from start to finish.
              </p>

              <p className="mt-5 sm:mt-8 space-y-6 font-space text-sm sm:text-base leading-relaxed text-[#F0E9DF]">
                Minimum spends apply. Tables are limited. Details and packages
                confirmed with your booking.
              </p>
            </div>
          </div>

          <div className="relative min-h-[380px] lg:min-h-[650px] mt-10 sm:mt-12 lg:mt-0">
            <Image src="/rooftop.svg" alt="" fill className="object-cover" />
          </div>
        </div>
      </Section>

      <Section>
        <div className="">
          <OrangeCard
            href="/menu"
            eyebrow=""
            title="Reservations"
            description={
              <>
                <p className="mb-0">
                  View our full bottle service packages and secure your table.
                </p>
              </>
            }
            buttonText="Reserve a Table"
          />
        </div>
      </Section>

      <Section>
        <div>
          <p className="font-space font-extrabold text-center text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#FF3B11]">
            THe Experience
          </p>

          <h1 className="font-migra mt-[1em] sm:mt-[1.5em] capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
            / Your own table, Reserved for the night /
          </h1>

          <h1 className="font-migra capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
            / Premium bottle Packages, curated to your group /
          </h1>

          <h1 className="font-migra capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
            / Personalised table service /
          </h1>

          <h1 className="font-migra capitalize text-center text-3xl sm:text-5xl md:text-7xl lg:text-5xl tracking-[0.02em] sm:tracking-[0.04em] leading-[1.15] sm:leading-normal text-[#FF3B11]">
            / A night built entirely around your Celebration /
          </h1>
        </div>
      </Section>

      <Section className="py-10 sm:py-16">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8">
          {/* Content */}
          <div className="w-full lg:w-1/2 flex">
            <div className="border rounded-xl border-[#FF3B11] p-5 sm:p-10 lg:p-14 w-full flex flex-col justify-center">
              <p className="font-space font-extrabold text-center text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#FF3B11]">
                Cocktail of the Month
              </p>

              <h3 className="font-migra font-extrabold text-center text-3xl sm:text-5xl mt-5 sm:mt-7 leading-[1.05] sm:leading-normal text-[#FF3B11]">
                The Accidental Expert
              </h3>

              <p className="font-space text-center text-sm sm:text-base leading-relaxed mt-5 sm:mt-7 text-[#FF3B11]">
                Inspired by our Caviar Sando. Our mixologist embraced the same
                scenario of this months confession — a quiet moment of panic, a
                Google search, and complete confidence in something unknown.
                Sparkling sake, a saline edge, and a finish so clean it feels
                like we planned it all along. We did. Obviously.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex">
            <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:h-auto">
              <Image
                src="/expert.png"
                alt="The Accidental Expert"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <div className="border border-[#FF3B11] p-5 sm:p-10 lg:p-10 text-center flex flex-col items-center bg-transparent">
            <div className="w-full lg:w-[65%] mx-auto text-center">
              <h2 className="mt-4 sm:mt-5 font-migra font-extrabold text-[#F0E9DF] capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
                Planning a big celebration?
              </h2>

              <div className="mt-5 sm:mt-7 font-space leading-relaxed text-[#F0E9DF]">
                <h1 className="font-migra text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.04em]">
                  Groups of 20 or more — tell us what you&apos;re planning.
                  We’ll handle the rest.
                </h1>
              </div>
            </div>

            <a
              className="mt-5 inline-flex w-full sm:w-auto items-center justify-center bg-[#FF7254] px-6 sm:px-10 py-3 sm:py-4 font-space font-extrabold text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-[#220715] transition-all duration-300 hover:bg-[#ff876d]"
              style={{
                borderWidth: "0.5px 2px 2px 0.5px",
                borderStyle: "solid",
                borderColor: "#220715",
              }}
              href="/menu"
            >
              Reserve a Seat
            </a>
          </div>
        </div>
      </Section>

      <Section className="bg-claret/30">
        <div className="w-full lg:w-[55%] mx-auto">
          <h2 className="mt-5 font-migra font-extrabold text-[#F0E9DF] capitalize text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none">
            Live dj/Music
          </h2>

          <h1 className="font-migra mt-5 sm:mt-8 text-3xl sm:text-5xl md:text-7xl lg:text-6xl tracking-[0.04em]">
            The line-up changes.
          </h1>

          <h1 className="font-migra text-3xl sm:text-5xl md:text-7xl lg:text-6xl tracking-[0.04em]">
            The standard doesn&apos;t.
          </h1>

          <p className="font-space mt-5 sm:mt-8 mx-auto text-sm sm:text-base leading-relaxed">
            Wednesday to Friday — late night dining and DJs from 5pm. Expect
            RNB, AFRO, and Funky House.
          </p>

          <p className="font-space mx-auto text-sm sm:text-base leading-relaxed">
            Saturday — late night dining, DJs and dancing until 1am.
          </p>

          <p className="font-space mx-auto text-sm sm:text-base leading-relaxed">
            Sunday — live music sessions. Sax, strings, and something that makes
            the afternoon last longer than it should.
          </p>
        </div>
      </Section>

      <Section>
        <div className="w-full lg:w-[50%] mx-auto">
          <p className="font-space font-extrabold text-xs uppercase tracking-[0.2em] text-[#F0E9DF]">
            Dress Code
          </p>
          <p className="font-space mt-8 font-extrabold text-xs uppercase tracking-[0.2em] text-[#F0E9DF]">
            This is an experience worth dressing for.
          </p>
          <p className="font-space font-extrabold text-xs uppercase tracking-[0.2em] text-[#F0E9DF]">
            Smart casual required. No Sandals. No Hats. No Singlets. No ID, no
            alibi, no entry. Management has the final say — and the night has
            standards. (Full list in our T&C standalone link?)
          </p>
        </div>
      </Section>

      <Section>
        <p className="font-space font-extrabold mb-8 text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          Upcoming Events / After Dark
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <EventCard
          />
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-center">
          <Image
            src="/stars.png"
            alt="Our Menu"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </Section>

      <Section>
        <p className="font-space font-extrabold mb-8 text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          CelebratE your Alter Ego A.K.A The Gremlin
        </p>
      </Section>

      <Section>
        <div className="">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <Faq
              title="FAQs"
              items={[
                {
                  question: "Do I need a reservation?",
                  answer:
                    "Reservations are recommended, especially on weekends, but walk-ins are always welcome subject to availability.",
                },
                {
                  question: "Can I book for private events?",
                  answer:
                    "Yes. We offer private dining experiences and exclusive event bookings for groups.",
                },
                {
                  question: "Do you cater for dietary requirements?",
                  answer:
                    "Absolutely. Please let our team know about any allergies or dietary preferences when booking.",
                },
                {
                  question: "Is parking available nearby?",
                  answer:
                    "Yes, several public parking facilities are located within walking distance.",
                },
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
