import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string; // Date
  title: string;
  description: string;
}

export default function EventsCardswb({
  href,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
}: ExperienceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full rounded-2xl border border-white/20 bg-[#22040C] p-6 transition-all duration-300 "
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
      <div className="flex flex-1 flex-col items-center text-center mt-8">
        {/* Date */}
        <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-[#F0E9DF]">
          {eyebrow}
        </span>

        {/* Title */}
        <h3 className="font-migra text-[#F0E9DF] text-4xl lg:text-5xl leading-none mt-5">
          {title}
        </h3>

        {/* Description */}
        <p className="font-space text-[#D9D0CA] text-base leading-7 mt-6 max-w-sm">
          {description}
        </p>

        {/* Push button to bottom */}
        <div className="flex-1" />
      </div>
    </Link>
  );
}
