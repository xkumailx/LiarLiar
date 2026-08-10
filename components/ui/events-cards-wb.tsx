import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
}

export default function EventsCardswb({
  href,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  badge,
}: ExperienceCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#22040C] p-4 transition-all duration-300 sm:p-5 lg:p-6"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full border border-[#ff7254] bg-[#ff7254] px-4 py-2 font-space text-[9px] font-bold uppercase tracking-[0.18em] text-[#22040C] shadow-[0_4px_20px_rgba(255,114,84,0.35)] sm:text-[10px]">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col items-center text-center sm:mt-6 lg:mt-8">
        {/* Date */}
        <span className="font-space text-[10px] font-bold uppercase tracking-[0.2em] text-[#F0E9DF] sm:text-xs">
          {eyebrow}
        </span>

        {/* Title */}
        <h3 className="mt-4 font-migra text-4xl leading-none text-[#F0E9DF] sm:text-3xl lg:mt-5 lg:text-5xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-sm font-space text-sm leading-6 text-[#D9D0CA] sm:text-base sm:leading-7 lg:mt-6">
          {description}
        </p>

        {/* Keeps all cards equal height */}
        <div className="flex-1" />
      </div>
    </Link>
  );
}
