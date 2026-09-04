import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import ConfessionCard from "@/components/ui/confession-card";
import OrangeCard from "@/components/ui/orange-cards";
import ImageSlider from "@/components/ui/image-slider";
import ConfessionForm from "@/components/ConfessionForm";
import { getConfessions, cleanWordPressContent } from "@/lib/wordpress";
// import ImageSlider from "@/components/ui/image-slider";

export const metadata: Metadata = {
  title: "Confessions",
  description:
    "Your confessions, unleashed to the Night Gremlins. The best one becomes our Cocktail of the Month.",
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

export default async function ConfessionsPage() {
  const confessions = await getConfessions();

  return (
    <>
      <Section className="">
        <div className="w-1/2 mx-auto">
          <Image
            src="/confession.png"
            alt=""
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
          />
        </div>
      </Section>

      <Section>
        <div>
          <h1 className="font-migra font-extrabold text-center text-[#FF3B11] text-5xl md:text-7xl lg:text-7xl tracking-[0.08em]">
            Confessions <br></br> & Cocktails
          </h1>
          <p className="font-space leading-relaxed mt-[7em] px-0 sm:px-[2em] text-[#F0E9DF]">
            To confess. To declare love. In Japanese there&apos;s no difference
            between the two. Here there isn&apos;t either. We all have a few
            unspoken secrets. At Liar Liar they become part of the legend —
            unleashed to the Night Gremlins and turned into cocktails.
          </p>
        </div>
      </Section>

      <Section>
        <div className="border border-[#FF3B11] rounded-[1em] p-5 sm:p-[5em] mt-8 sm:mt-[5em]">
          <p className="font-space font-extrabold text-center text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#FF3B11]">
            Confession of the Month
          </p>

          <h1 className="font-migra text-center mt-3 sm:mt-[0.5em] capitalize text-3xl sm:text-5xl md:text-7xl lg:text-6xl text-[#FF3B11] tracking-[0.02em] sm:tracking-[0.04em]">
            I ordered the most expensive thing on the menu and then googled what
            it was.
          </h1>

          <h3 className="font-space text-sm sm:text-base text-center mt-5 sm:mt-[2em] text-[#FF3B11]">
            May 2025 / Anonymous
          </h3>

          <div className="flex mt-4 sm:mt-[1em] justify-center">
            <Image
              src="/confession-of-the-month.png"
              alt=""
              width={100}
              height={100}
              className="mt-2 sm:mt-[1em]"
            />
          </div>
        </div>
      </Section>

      <Section className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 items-stretch">
          {/* Content */}
          <div className="w-full lg:w-1/2 border border-[#FF3B11] rounded-[1em] p-5 sm:p-8 md:p-[5em] mt-0">
            <p className="font-space font-extrabold text-center text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#FF3B11]">
              Cocktail of the Month
            </p>

            <h3 className="font-migra font-extrabold text-center text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-7 text-[#FF3B11]">
              The Accidental Expert
            </h3>

            <p className="font-space leading-relaxed text-center text-sm sm:text-base mt-4 sm:mt-[1em] px-0 md:px-[2em] text-[#FF3B11]">
              Inspired by our Caviar Sando. Our mixologist embraced the same
              scenario of this months confession — a quiet moment of panic, a
              Google search, and complete confidence in something unknown.
              Sparkling sake, a saline edge, and a finish so clean it feels like
              we planned it all along. We did. Obviously.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 overflow-hidden flex">
            <Image
              src="/the-accidental.png"
              alt="The Accidental Expert"
              width={1920}
              height={1080}
              className="w-full h-[300px] sm:h-[400px] lg:h-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="w-full px-6 md:px-10 lg:px-16">
        <p className="font-space font-extrabold py-[2em] text-base uppercase tracking-[0.2em] text-[#FF3B11]">
          Confession Archives
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <ConfessionCard
            content="I told my husband I was at book club. There is no book club. There are however several women who also told their husbands they were at book club."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I waved back at someone across the room for a full thirty seconds before realising they weren't waving at me."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I told everyone at work I was going home early because I wasn't feeling well. I then ran into my entire team here two hours later. We all agreed not to talk about it on Monday."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I quit my job today with nothing lined up. I have a rising sense of either total freedom or complete catastrophe. But, I ordered the good wine either way."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I found out my best friend is moving to London on Saturday. We've been inseparable for eleven years. I told her I was happy for her. I am. I'm also absolutely devastated and I haven't figured out how to say that yet."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/confession.png" />
          <ConfessionCard
            content="I ended a relationship today that I'd been holding onto for way too long. Not because it was bad. Just because it was over and we both knew it and someone finally said it."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I told my partner I was at a work function. I was. I just didn't mention it was my own."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/confession-liarliar.png" />
          <ConfessionCard
            content="I told everyone at the bar I was a sommelier visiting from Paris. I'm an accountant from Frankston."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/the-gremling.png" />
          <ConfessionCard
            content="I ordered the most expensive thing on the menu and then googled what it was."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/pink-confession.png" />
          <ConfessionCard
            content="I ordered the most expensive thing on the menu and then googled what it was."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I ordered the most expensive thing on the menu and then googled what it was."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/confession-drink.png" />
        </div>
      </Section>

      <Section>
        <div className="">
          <OrangeCard
            href="/reservations"
            eyebrow=""
            title="Your Turn"
            description={
              <>
                <p className="w-full md:w-[70%] lg:w-[40%] mx-auto mt-0">
                  The only rule — you have to be here to confess. Find the box.
                  Write something true. Or close enough to it.
                </p>

                <p className="w-full mb-[1em] md:w-[70%] lg:w-[40%] mx-auto mt-[2em]">
                  Our favourite confession of the month earns a spot on
                  Instagram — we&apos;ll keep you anonymous — plus a little
                  something extra next time you&apos;re in.
                </p>
              </>
            }
            buttonText="Reserve a Seat"
          />
        </div>
      </Section>

      <Section className="w-full px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <ConfessionCard
            content="I told my husband I was at book club. There is no book club. There are however several women who also told their husbands they were at book club."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I waved back at someone across the room for a full thirty seconds before realising they weren't waving at me."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I told everyone at work I was going home early because I wasn't feeling well. I then ran into my entire team here two hours later. We all agreed not to talk about it on Monday."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I quit my job today with nothing lined up. I have a rising sense of either total freedom or complete catastrophe. But, I ordered the good wine either way."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I found out my best friend is moving to London on Saturday. We've been inseparable for eleven years. I told her I was happy for her. I am. I'm also absolutely devastated and I haven't figured out how to say that yet."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/confession.png" />
          <ConfessionCard
            content="I ended a relationship today that I'd been holding onto for way too long. Not because it was bad. Just because it was over and we both knew it and someone finally said it."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I told my partner I was at a work function. I was. I just didn't mention it was my own."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/confession-liarliar.png" />
          <ConfessionCard
            content="I told everyone at the bar I was a sommelier visiting from Paris. I'm an accountant from Frankston."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/the-gremling.png" />
          <ConfessionCard
            content="I ordered the most expensive thing on the menu and then googled what it was."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/pink-confession.png" />
          <ConfessionCard
            content="I ordered the most expensive thing on the menu and then googled what it was."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard
            content="I ordered the most expensive thing on the menu and then googled what it was."
            Imagelogo="/confession-logo.png"
          />
          <ConfessionCard image="/confession-drink.png" />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {confessions.map((confession) => (
            <ConfessionCard
              key={confession.id}
              content={cleanWordPressContent(confession.content.rendered)}
              Imagelogo="/confession-logo.png"
            />
          ))}
        </div>
      </Section>

      <Section>
        <ConfessionForm />
      </Section>

      <section>
        <ImageSlider images={images} />
      </section>
    </>
  );
}
