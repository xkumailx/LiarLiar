import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant =
  | "primary"
  | "koki"
  | "gold"
  | "outline"
  | "ghost"
  | "square"
  | "bgsquare";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.18em] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-koki focus-visible:ring-offset-2 focus-visible:ring-offset-soy disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Primary CTA — Torii Red, warms to Kabloom on hover.
  primary: "bg-[#220715]  text-sand hover:bg-[#220715]",
  // Bright accent — Kōki Yellow on dark. Use sparingly.
  koki: "bg-koki text-soy hover:bg-koki/90",
  // Gold for secondary emphasis.
  gold: "bg-gold-light text-soy hover:bg-wheat",
  // Outline on dark surfaces.
  outline:
    "border border-sand/35 text-sand hover:border-sand hover:bg-sand hover:text-soy",
  ghost: "text-sand/80 hover:text-sand",
  // Square variant for social icons, etc.
  square:
    "bg-[#220715] text-sand border-t-[0.5px] border-r-[2px] border-b-[2px] border-l-[0.5px] hover:bg-[#220715] px-8 py-2",

  bgsquare:
    " text-[0.95em] text-sand border-t-[0.5px] border-r-[2px] border-b-[2px] border-l-[0.5px] hover:bg-[#220715] px-[3em] py-4",
};

const sizes: Record<Size, string> = {
  sm: "text-[0.66rem] px-4 py-2",
  md: "text-[0.72rem] px-6 py-3",
  lg: "text-[0.78rem] px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps>;

function isLink(props: ButtonAsLink | ButtonAsButton): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (isLink(props)) {
    const { href, external, target, rel, onClick } = props;

    const isExternal =
      external || href.startsWith("http") || href.startsWith("mailto");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? (external ? "_blank" : undefined)}
          rel={
            rel ??
            (target === "_blank" || external
              ? "noopener noreferrer"
              : undefined)
          }
          className={classes}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  // Strip the styling-only props so they aren't forwarded to the DOM element.
  const {
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    ...rest
  } = props;
  void _variant;
  void _size;
  void _className;
  void _children;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
