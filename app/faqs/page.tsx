import React from "react";
import HeroBanner from "@/components/ui/herobanner";
import { Section } from "@/components/ui/section";
import Faq from "@/components/ui/FaqSection";

const page = () => {
  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        <HeroBanner image="/afterparty.webp" title={<>FAQ&apos;S</>} />
      </section>

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
    </div>
  );
};

export default page;
