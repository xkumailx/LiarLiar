import Image from "next/image";
import Link from "next/link";

interface ReservationCardsProps {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
}

export default function ReservationCards({
  href,
  image,
  imageAlt,
  title,
}: ReservationCardsProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full rounded-2xl border border-white/20 bg-[#22040C] p-4 sm:p-6 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col items-center text-center mt-5 sm:mt-8">
        {/* Title */}
        <h3 className="font-migra text-[#F0E9DF] text-2xl sm:text-4xl lg:text-5xl leading-none mt-3 sm:mt-5">
          {title}
        </h3>

        {/* Push button to bottom */}
        <div className="flex-1" />

        {/* CTA */}
        <button className="mt-7 sm:mt-10 w-full bg-[#FF6A55] py-3 sm:py-4 font-space text-[0.65rem] sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#22040C] transition-all duration-300 hover:text-white cursor-pointer">
          Book Now
        </button>
      </div>
    </Link>
  );
}
