import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EventCardProps {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  date: string;
}

export default function EventCard({
  href,
  image,
  imageAlt,
  title,
  date,
}: EventCardProps) {
  return (
    <article className="group">
      {/* Image */}
      <Link href={href} className="block overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="relative overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              width={400}
              height={520}
              className="object-contain w-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="mt-5">
        {/* Event Name */}
        <h3 className="font-space text-base text-[#F0E9DF]">{title}</h3>

        {/* Date */}
        <p className="mt-3 border-b border-[#F0E9DF]/30 pb-4 font-space text-base uppercase text-[#F0E9DF]">
          {date}
        </p>

        {/* Learn More */}
        <Link
          href={href}
          className="mt-4 flex items-center justify-between font-space text-sm font-extrabold uppercase tracking-[0.15em] text-[#F0E9DF] transition-opacity hover:opacity-70"
        >
          <span>Learn More</span>

          <ArrowRight
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
