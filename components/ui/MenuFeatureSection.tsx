import Image from "next/image";
import Link from "next/link";

interface MenuFeatureSectionProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export default function MenuFeatureSection({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  href,
  buttonText,
}: MenuFeatureSectionProps) {
  return (
    <section className="w-full bg-[#F0E9DF] text-[#220715]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
        {/* Left: Image */}
        <div className="relative min-h-[260px] sm:min-h-[380px] md:min-h-[440px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-20">
          <p className="font-space text-[10px] sm:text-xs uppercase tracking-[0.2em] leading-relaxed">
            {eyebrow}
          </p>

          <h2 className="mt-4 max-w-xl font-migra text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            {title}
          </h2>

          <p className="mt-5 max-w-md font-space text-sm leading-7 text-[#220715]/75">
            {description}
          </p>

          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-10 items-center justify-center border border-[#FF3B11] px-6 py-3 font-space text-[10px] uppercase tracking-[0.16em] text-[#220715] transition-colors duration-300 hover:bg-[#FF3B11] hover:text-[#F0E9DF]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
