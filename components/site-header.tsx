"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/content/site";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 pt-[0.5rem] pb-[0.5rem] ${
        scrolled || open
          ? "bg-soy/90 backdrop-blur-md border-b border-sand/10"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="relative z-10"
        >
          <Wordmark className="h-7 w-auto text-sand" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.78rem] font-space uppercase tracking-[0.16em] transition-colors hover:text-sand ${
                  active ? "text-sand" : "text-sand/65"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/reservations" variant="square" size="sm">
            Reservations
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-px w-6 bg-sand transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-sand transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-sand transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-0 flex flex-col bg-soy px-5 pt-24 pb-10 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-sand/10 py-4 font-display text-3xl text-sand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <Button
            href="/reservations"
            variant="primary"
            size="lg"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Book a Table
          </Button>
        </div>
      </div>
    </header>
  );
}
