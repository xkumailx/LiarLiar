import Link from "next/link";
import { Container } from "./ui/container";
import { Wordmark } from "./wordmark";
import { NewsletterForm } from "./newsletter-form";
import {
  footerNav,
  legalNav,
  openingHours,
  primaryNav,
  site,
} from "@/lib/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-claret-mid text-sand">
      <Container className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + address */}
        <div className="lg:col-span-1">
          <Wordmark className="text-sand" />
          <address className="mt-6 not-italic text-sm leading-relaxed text-sand/70">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="hover:text-sand"
            >
              {site.phone}
            </a>
          </address>
          {/* <p className="mt-6 text-xs uppercase tracking-[0.2em] text-sand/45">
            {site.group}
          </p> */}
        </div>

        {/* Opening hours */}
        <div>
          <h2 className="eyebrow mb-5">Opening Hours</h2>
          <dl className="space-y-2 text-sm text-sand/75">
            {openingHours.map((row) => (
              <div key={row.day} className="flex justify-between gap-4">
                <dt>{row.day}</dt>
                <dd className="text-right text-sand/60">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Explore */}
        <div>
          <h2 className="eyebrow mb-5">Explore</h2>
          <ul className="space-y-2.5 text-sm text-sand/75">
            {[...primaryNav, ...footerNav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mailing list + social */}
        <div>
          <h2 className="eyebrow mb-5">Join the List</h2>
          {/* <p className="mb-4 text-sm text-sand/65">
            Launch night is coming. Secure your alibi early.
          </p> */}
          <NewsletterForm />
          <div className="mt-6 flex gap-5 text-sm uppercase tracking-[0.16em]">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/70 hover:text-sand"
            >
              Instagram
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/70 hover:text-sand"
            >
              Facebook
            </a>
            <a
              href={site.social.TicketCheckIcon}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand/70 hover:text-sand"
            >
              TikTok
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-sand/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-sand/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}.{" "}
            {site.surcharges.join(" · ")}.
          </p>
          <div className="flex gap-6">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-sand/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
