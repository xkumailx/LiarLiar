import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
  href: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
}

export default function ExperienceCards({
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
      className="group block overflow-hidden rounded-xl border border-white transition-all duration-300 hover:border-white"
    >
      <div className="p-5 sm:p-6 lg:p-8">
        <p className="text-center font-space text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F0E9DF] sm:text-xs">
          {eyebrow}
        </p>

        <h3 className="mt-5 text-center font-migra text-3xl font-extrabold text-[#F0E9DF] sm:mt-6 sm:text-4xl lg:mt-7 lg:text-5xl">
          {title}
        </h3>

        <p className="mt-5 text-center font-space text-sm leading-relaxed text-[#F0E9DF] sm:mt-6 sm:min-h-[100px] sm:text-base lg:mt-7 lg:min-h-[120px]">
          {description}
        </p>

        <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-lg sm:mt-6 lg:mt-7">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </Link>
  );
}
