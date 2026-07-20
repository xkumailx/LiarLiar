import Image from "next/image";

interface HeroBannerProps {
  image: string;
  title: React.ReactNode;
  imageAlt?: string;
}

export default function HeroBanner({
  image,
  title,
  imageAlt,
}: HeroBannerProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={imageAlt || "Hero Banner"}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundColor: "rgba(0,0,0,0.28)",
          backgroundImage: "url('/Overlay.png')",
          backgroundBlendMode: "multiply",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h1 className="font-migra font-extrabold text-center text-[#F0E9DF] text-5xl md:text-7xl lg:text-7xl tracking-[0.08em]">
          {title}
        </h1>
      </div>
    </section>
  );
}
