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
      target="_blank"
      className="group block border border-white/100 rounded-xl overflow-hidden transition-all duration-300 hover:border-white"
    >
      <div className="p-5 sm:p-8">
        <p className="font-space font-extrabold text-center text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#F0E9DF]">
          {eyebrow}
        </p>
        <h3 className="font-migra font-extrabold text-center text-3xl sm:text-5xl mt-4 sm:mt-7 text-[#F0E9DF] leading-[1.05] sm:leading-normal">
          {title}
        </h3>

        <p className="font-space text-center text-sm sm:text-base leading-relaxed mt-5 sm:mt-7 text-[#F0E9DF] min-h-0 sm:min-h-[120px]">
          {description}
        </p>

        <div className="relative aspect-[16/10] mt-5 sm:mt-7 overflow-hidden">
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
