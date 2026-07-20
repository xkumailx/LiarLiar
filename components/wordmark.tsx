import Image from "next/image";
// import file from "/public/file.svg";

/** Liar Liar wordmark. A typographic lockup in the display serif —
 *  swap for an SVG logo asset when brand files are provided. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display leading-none tracking-[0.02em] ${className}`}
      style={{ fontSize: "1.6rem" }}
    >
      <Image
        src="/LOGO.webp"
        height={100}
        width={100}
        alt="Liar Liar Wordmark"
      />
    </span>
  );
}
