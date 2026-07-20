import type { ReactNode } from "react";
import { Container } from "./container";

/** A standard editorial section heading: tracked eyebrow + serif title. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: TitleTag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`${alignment} max-w-3xl ${className}`}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <TitleTag className="font-display text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
        {title}
      </TitleTag>
      {intro ? (
        <p className="mt-6 text-base leading-relaxed text-sand/70 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

/** Vertical rhythm wrapper for a page section. */
export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-10 sm:py-18 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
