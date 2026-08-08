import { Section } from "@/components/ui/section";
// import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";

export default function YakitoriNightComingSoon() {
  return (
    <Section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#220715] px-6 text-[#F0E9DF]">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8C3B1F]/10 blur-[120px]" />
      </div>

      {/* Content */}
      <section className="relative z-10 flex max-w-4xl flex-col items-center text-center mx-auto ">
        {/* Japanese Label */}
        <p className="font-space font-extrabold text-center text-base uppercase text-[#F0E9DF]">
          {" "}
          Yakitori
        </p>

        {/* Main Heading */}
        <h1 className="mt-6 font-migra text-6xl font-extrabold leading-[0.85] sm:text-8xl md:text-9xl lg:text-[10rem]">
          Yakitori
          <br />
          Night
        </h1>

        {/* Divider */}
        <div className="my-9 flex items-center gap-4">
          <span className="h-px w-10 bg-[#F0E9DF]/30" />
          <span className="text-sm text-[#F0E9DF]/50">Yakitori Night</span>
          <span className="h-px w-10 bg-[#F0E9DF]/30" />
        </div>

        {/* Description */}
        <p className="max-w-lg font-space text-sm leading-7 text-[#F0E9DF]/65 sm:text-base">
          An intimate night of fire, smoke and perfectly
          <br className="hidden sm:block" />
          grilled skewers is coming soon.
        </p>

        {/* Coming Soon */}
        <p className=" mt-4 font-space font-extrabold text-center text-base uppercase text-[#F0E9DF]">
          Coming Soon
        </p>

        {/* Button */}
        <Link
          className="mt-5 inline-flex items-center justify-center bg-[#FF7254] px-10 py-4 font-space font-extrabold text-xs uppercase tracking-[0.2em] text-[#220715] transition-all duration-300 hover:bg-[#ff876d]"
          href="/"
        >
          Return Home
        </Link>
      </section>
    </Section>
  );
}
