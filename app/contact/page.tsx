import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}, Braeside. Bookings, events and enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="mt-[5em] sm:mt-[6em] relative">
          <Image
            src="/pink-balls.png"
            alt="Reservations"
            width={400}
            height={300}
            className="absolute top-[5%] left-[-5%] sm:top-[15%] sm:left-[15%] w-[180px] sm:w-[400px] h-[140px] sm:h-[300px] object-contain z-[-1]"
          />

          <h1 className="font-migra font-extrabold text-center text-[#F0E9DF] text-4xl sm:text-5xl md:text-7xl lg:text-7xl tracking-[0.05em] sm:tracking-[0.08em]">
            Contact
          </h1>

          <p className="font-space font-extrabold mt-3 sm:mt-4 text-center text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#F0E9DF]">
            Have A Question?
          </p>

          <p className="font-space text-center mt-5 sm:mt-6 mx-auto text-sm sm:text-base leading-relaxed">
            Get in touch
          </p>

          <div className="flex flex-col sm:flex-row justify-around mt-10 sm:mt-[6em] items-center gap-5 sm:gap-8">
            <a
              href="https://liarliarbraeside.com.au"
              className="uppercase underline text-sm sm:text-base text-center"
            >
              liarliarbraeside.com.au
            </a>

            <a
              href="#"
              className="uppercase underline text-sm sm:text-base text-center"
            >
              First Floor, 248 Boundary Road
            </a>

            <a
              href="tel:+XXXXXXXXXX"
              className="uppercase underline text-sm sm:text-base text-center"
            >
              Phone Number
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className="w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.2846282148985!2d145.1077649!3d-37.9908177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66ce25b9f2349%3A0x806e5907161396bd!2s248%20Boundary%20Rd%2C%20Braeside%20VIC%203195%2C%20Australia!5e1!3m2!1sen!2s!4v1786981099782!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
            className="w-full h-[350px] sm:h-[450px]"
          ></iframe>
        </div>
      </Section>
    </>
  );
}
