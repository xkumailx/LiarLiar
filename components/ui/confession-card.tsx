import Image from "next/image";

interface ConfessionCardProps {
  content?: string;
  image?: string;
  imageAlt?: string;
  Imagelogo?: string;
}

export default function ConfessionCard({
  content,
  image,
  imageAlt = "",
  Imagelogo,
}: ConfessionCardProps) {
  // Image-only card
  if (image && !content) {
    return (
      <div className="group relative aspect-square overflow-hidden rounded-[1em] border border-[#FF3B11]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  // Image + content card
  if (image && content) {
    return (
      <div className="group relative aspect-square overflow-hidden rounded-[1em] border border-[#FF3B11]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-[#22040C]/40 p-8">
          <p className="font-space text-center text-sm leading-6 text-[#FF3B11]">
            {content}
          </p>
        </div>
      </div>
    );
  }

  // Content-only card
  return (
    <div className="flex aspect-square flex-col items-center justify-center rounded-[1em] border border-[#FF3B11] bg-[#22040C] p-8">
      <p className="font-space text-center text-sm leading-6 text-[#FF3B11]">
        {content}
      </p>

      {Imagelogo && (
        <div className="relative mt-8 h-12 w-20">
          <Image src={Imagelogo} alt="Logo" fill className="object-contain" />
        </div>
      )}
    </div>
  );
}
