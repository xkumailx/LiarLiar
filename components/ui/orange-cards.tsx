import Link from "next/link";

interface OrangeCardProps {
  href: string;
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  buttonText: string;
}

export default function OrangeCard({
  href,
  eyebrow,
  title,
  description,
  buttonText,
}: OrangeCardProps) {
  return (
    <div className="border border-[#FF3B11] p-5 sm:p-10 lg:p-10 text-center flex flex-col items-center bg-transparent">
      {/* Heading */}
      <h2 className="mt-3 sm:mt-5 font-migra font-extrabold text-[#F0E9DF] text-4xl sm:text-5xl md:text-6xl leading-[1.05] sm:leading-none">
        {title}
      </h2>

      {/* Eyebrow */}
      <p className="mt-4 sm:mt-5 font-space font-extrabold text-center text-sm sm:text-base uppercase text-[#F0E9DF]">
        {eyebrow}
      </p>

      {/* Description */}
      <div className="mt-5 sm:mt-7 space-y-4 sm:space-y-5 font-space text-sm sm:text-base text-center leading-relaxed text-[#F0E9DF]">
        {description}
      </div>

      {/* Button */}
      <Link
        href={href}
        className="mt-5 inline-flex items-center justify-center w-full sm:w-auto bg-[#FF7254] px-6 sm:px-10 py-3 sm:py-4 font-space font-extrabold text-[0.65rem] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#220715] transition-all duration-300 hover:bg-[#ff876d]"
        style={{
          borderWidth: "0.5px 2px 2px 0.5px",
          borderStyle: "solid",
          borderColor: "#220715",
        }}
      >
        {buttonText}
      </Link>
    </div>
  );
}
