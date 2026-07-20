"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title?: string;
  items: FAQItem[];
}

export default function Faq({ title = "FAQs", items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h2 className="font-migra text-[#F0E9DF] text-5xl md:text-7xl text-center">
        {title}
      </h2>

      <div className="mt-12">
        {items.map((item, index) => (
          <div key={index} className="border-t border-[#8A736B] last:border-b">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-7 text-left"
            >
              <span className="font-space text-[#F0E9DF] text-lg">
                {item.question}
              </span>

              <ChevronRight
                className={`w-6 h-6 text-[#F0E9DF] transition-transform duration-300 ${
                  openIndex === index ? "rotate-90" : ""
                }`}
              />
            </button>

            <div
              className={`w-full overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 pb-6" : "max-h-0"
              }`}
            >
              <p className="`w-full font-space text-[#CDBFB5] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
