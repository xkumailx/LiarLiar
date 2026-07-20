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
      className="group block border border-white/100 rounded-xl overflow-hidden transition-all duration-300 hover:border-white"
    >
      <div className="p-8">
        <p className="font-space font-extrabold text-center text-xs uppercase tracking-[0.2em] text-[#F0E9DF]">
          {eyebrow}
        </p>

        <h3 className="font-migra font-extrabold text-center text-5xl mt-7 text-[#F0E9DF]">
          {title}
        </h3>

        <p className="font-space text-center leading-relaxed mt-7 text-[#F0E9DF] min-h-[120px]">
          {description}
        </p>
        <div className="relative aspect-[16/10] mt-7 overflow-hidden">
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
