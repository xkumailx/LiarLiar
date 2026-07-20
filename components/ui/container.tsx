import type { ElementType, ReactNode } from "react";

/** Page gutter wrapper. Mirrors the Figma 1440 frame with 64px side padding,
 *  scaling down on smaller viewports. */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
