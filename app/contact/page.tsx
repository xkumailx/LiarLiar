import type { Metadata } from "next";
// import { Hero } from "@/components/hero";;
import { Section } from "@/components/ui/section";
import Image from "next/image";
// import { ContactForm } from "@/components/contact-form";
// import { Button } from "@/components/ui/button";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}, Braeside. Bookings, events and enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="mt-[6em]">
          <Image
            src="/pink-balls.png"
            alt="Reservations"
            width={400}
            height={300}
            className="absolute top-[15%] left-[15%] w-[400px] h-[300px] object-contain z-[-1]
          "
          />
          <h1 className="font-migra font-extrabold text-center text-[#F0E9DF] text-5xl md:text-7xl lg:text-7xl tracking-[0.08em]">
            Contact
          </h1>
          <p className="font-space font-extrabold mt-4 text-center text-sm uppercase tracking-[0.2em] text-[#F0E9DF]">
            Have A Question?
          </p>
          <p className="font-space text-center mt-6 mx-auto text-base leading-relaxed">
            Get in touch
          </p>
          <div className="flex justify-around mt-[6em] items-center gap-8">
            <a
              href="https://liarliarbraeside.com.au"
              className="uppercase underline"
            >
              liarliarbraeside.com.au
            </a>

            <a href="#" className="uppercase underline">
              First Floor, 248 Boundary Road
            </a>

            <a href="tel:+XXXXXXXXXX" className="uppercase underline">
              Phone Number
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.2846282148985!2d145.1077649!3d-37.9908177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66ce25b9f2349%3A0x806e5907161396bd!2s248%20Boundary%20Rd%2C%20Braeside%20VIC%203195%2C%20Australia!5e1!3m2!1sen!2s!4v1786981099782!5m2!1sen!2s"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </Section>
    </>
  );
}
