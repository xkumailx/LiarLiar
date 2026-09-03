/**
 * Site-wide constants for Liar Liar.
 * Content sourced from the Figma "LL UI Style Guides" (footer, nav, opening hours).
 * These are static brand facts; dynamic content (events, confessions, cocktails)
 * lives in the WordPress data layer (see lib/wordpress.ts).
 */

export const site = {
  name: "Liar Liar",
  tagline: "Modern Japanese Dinner & Disco",
  description:
    "An unapologetic Japanese rooftop experience in Bayside. Dinner, cocktails, live music and late nights — Liar Liar, Braeside.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://liarliarbraeside.com.au",
  domain: "liarliarbraeside.com.au",
  // group: "The Chielli Hospitality Group",
  address: {
    line1: "Level 1, 248 Boundary Road",
    line2: "Braeside, VIC 3195",
    maps: "https://maps.google.com/?q=248+Boundary+Road+Braeside+VIC+3195",
  },
  phone: " 03 9020 0888",
  email: "hello@liarliarbraeside.com.au",
  social: {
    instagram:
      "https://www.instagram.com/liarliar.braeside?igsi=MTJ5bjhrZmJtaWVubw==",
    facebook: "https://www.facebook.com/share/1PtF5fH6nD/",
  },
  surcharges: ["10% surcharge on Sundays", "15% surcharge on public holidays"],
} as const;

export type NavItem = {
  label: string;
  href: string;
};

/** Primary navigation — order from the style guide nav block. */
export const primaryNav: NavItem[] = [
  { label: "Dining", href: "/dining" },
  { label: "Omakase", href: "/omakase" },
  { label: "After Party", href: "/after-party" },
  { label: "What's On", href: "/whats-on" },
  { label: "Confessions", href: "/confessions" },
  // { label: "Gift Vouchers", href: "/gift-vouchers" },
  // { label: "Loyalty", href: "/loyalty" },
  { label: "Contact", href: "/contact" },
];

/** Secondary links surfaced in the footer. */
export const footerNav: NavItem[] = [
  { label: "Confessions", href: "/confessions" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Careers", href: "/careers" },
  { label: "DJs", href: "/djs" },
  { label: "Sponsors", href: "/sponsors" },
  // { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export type OpeningHour = { day: string; hours: string };

export const openingHours: OpeningHour[] = [
  { day: "Wed & Thu", hours: "5:30pm – 11pm" },
  { day: "Friday", hours: "5:30pm – late" },
  { day: "Saturday", hours: "12pm – Late" },
  { day: "Sunday", hours: "12pm – Late" },
];
