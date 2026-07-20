import Link from "next/link";
import { Media } from "./ui/media";

/** Large editorial link card used to route between the core experiences
 *  (Dining, Omakase, After Dark) from the landing and about pages. */
export function ExperienceCard({
  href,
  eyebrow,
  title,
  description,
  image,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl p-8"
    >
      <Media
        src={image}
        alt={title}
        rounded="rounded-none"
        ratio=""
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-soy via-soy/40 to-transparent" />
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h3 className="font-display text-3xl leading-none text-sand sm:text-4xl">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-sand/70">
        {description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-torii">
        Explore
        <span className="transition-transform group-hover:translate-x-1">›</span>
      </span>
    </Link>
  );
}
