import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant =
  | "primary"
  | "koki"
  | "gold"
  | "outline"
  | "ghost"
  | "square"
  | "bgsquare"
  | "pinkbtn"
  | "bgpurplesquare";

type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.12em] sm:tracking-[0.18em] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-koki focus-visible:ring-offset-2 focus-visible:ring-offset-soy disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Primary CTA
  primary: "bg-[#220715] text-sand hover:bg-[#220715]",

  // Bright accent
  koki: "bg-koki text-soy hover:bg-koki/90",

  // Gold
  gold: "bg-gold-light text-soy hover:bg-wheat",

  // Outline
  outline:
    "border border-sand/35 text-sand hover:border-sand hover:bg-sand hover:text-soy",

  ghost: "text-sand/80 hover:text-sand",

  // Square variant
  square:
    "bg-[#220715] text-sand border-t-[0.5px] border-r-[2px] border-b-[2px] border-l-[0.5px] hover:bg-[#220715] px-5 sm:px-8 py-2",

  bgsquare:
    "bg-[#220715] text-[0.8em] sm:text-[0.95em] text-sand border-t-[0.5px] border-r-[2px] border-b-[2px] border-l-[0.5px] hover:bg-[#220715] px-5 sm:px-[3em] py-3 sm:py-4",

  bgpurplesquare:
    "bg-[#220715] !block text-[0.8em] sm:text-[0.95em] mt-[1em] sm:mt-[1.5em] text-sand border-t-[0.5px] text-center border-r-[2px] border-b-[2px] border-l-[0.5px] hover:bg-[#220715] px-5 sm:px-[3em] py-3 sm:py-4",

  pinkbtn:
    "bg-[#FF7254] !block text-[0.8em] sm:text-[0.95em] mt-[2em] sm:mt-[3.5em] text-[#220715] text-center border-[#220715] border-t-[0.5px] border-r-[2px] border-b-[2px] border-l-[0.5px] hover:bg-[#FF7254] px-5 sm:px-[3em] py-3 sm:py-4",
};

const sizes: Record<Size, string> = {
  sm: "text-[0.6rem] sm:text-[0.66rem] px-3 sm:px-4 py-2",

  md: "text-[0.66rem] sm:text-[0.72rem] px-4 sm:px-6 py-2.5 sm:py-3",

  lg: "text-[0.7rem] sm:text-[0.78rem] px-5 sm:px-8 py-3 sm:py-4",
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
    const { href, external, onClick } = props;

    if (external || href.startsWith("http") || href.startsWith("mailto")) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // Strip styling-only props before forwarding to the button.
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
