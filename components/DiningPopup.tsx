"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface DiningPopupProps {
  open: boolean;
  onClose: () => void;
  href: string;
}

export default function DiningPopup({ open, onClose, href }: DiningPopupProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
      <div className="relative w-full max-w-[430px] rounded-2xl border border-[#8A777C] bg-[#220715] px-6 py-7 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-[#F0E9DF] transition hover:rotate-90"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        {/* Heading */}
        <p className="text-center font-space text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#fff] sm:text-xs">
          Modern Japanese
        </p>

        <h3 className="mt-5 text-center font-migra text-3xl font-extrabold text-[#fff] sm:mt-6 sm:text-4xl lg:mt-7 lg:text-5xl">
          Dining
        </h3>

        {/* Description */}
        <p className="mt-5 text-center font-space text-sm leading-relaxed text-[#fff] sm:mt-6 sm:text-base">
          Small plates, robata fire, fresh nigiri, and a drinks list that
          carries the night long after the last course.
        </p>

        {/* Image */}
        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/popup-image.webp"
            alt="Dining"
            fill
            className="object-cover"
          />
        </div>

        {/* CTA */}
        <Link
          href={href}
          target="_blank"
          className="mt-8 flex w-full items-center justify-center bg-[#FF7254] px-10 py-4 font-space text-xs font-extrabold uppercase tracking-[0.2em] text-[#fff] transition-all duration-300 hover:bg-[#FF7254]"
          style={{
            borderWidth: "0.5px 3px 3px 0.5px",
            borderStyle: "solid",
            borderColor: "#220715",
          }}
        >
          Book a Table
        </Link>
      </div>
    </div>
  );
}
