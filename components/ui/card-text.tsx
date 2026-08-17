import Image from "next/image";

interface CardTextProps {
  title: string;
  content: React.ReactNode;
  images: string[];
  imageAlt?: string;
}

export default function CardText({
  title,
  content,
  images,
  imageAlt,
}: CardTextProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* Image / Slider */}
      <div className="relative min-h-[380px] lg:min-h-[650px]">
        <Image
          src={images[0]}
          alt={imageAlt ?? title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex items-start">
        <div className="w-full px-0 sm:px-8 md:px-12 lg:px-16 mt-4 sm:mt-0">
          <h2 className="font-migra font-extrabold text-[#F0E9DF] text-4xl sm:text-5xl md:text-6xl leading-[1.05] sm:leading-none">
            {title}
          </h2>

          <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-6 font-space text-sm sm:text-base leading-relaxed text-[#F0E9DF]">
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
