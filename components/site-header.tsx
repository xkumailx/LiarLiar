"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, site } from "@/lib/content/site";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import { Wordmark } from "./wordmark";

const RESERVATION_URL =
  "https://www.opentable.com.au/restaurant/profile/279680?shareReferrer=ios-share";

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

  // Lock background scrolling while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the menu when navigating to another route.
  // useEffect(() => {
  //   setOpen(false);
  // }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        open
          ? "h-dvh border-b border-sand/10"
          : scrolled
            ? "border-b border-sand/10 bg-soy/90 backdrop-blur-md"
            : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      {/* Header bar */}
      <div className="relative z-20">
        <Container className="relative flex h-20 items-center justify-between">
          {/* Left spacer balances the right-side controls */}
          <div className="hidden w-[150px] lg:block" aria-hidden="true" />

          {/* Centered logo */}
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            onClick={() => setOpen(false)}
          >
            <Wordmark className="h-7 w-auto text-sand sm:h-8" />
          </Link>

          {/* Right-side controls */}
          <div className="ml-auto flex items-center gap-4 sm:gap-6">
            {/* Desktop and tablet reservations */}
            <div className="hidden sm:block">
              <a
                href={RESERVATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-sand/80 px-5 text-[0.7rem] font-space uppercase tracking-[0.18em] text-sand transition-colors duration-300 hover:bg-sand hover:text-soy sm:px-7"
              >
                Reservations
              </a>
            </div>

            {/* Animated hamburger */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-navigation-menu"
              onClick={() => setOpen((value) => !value)}
              className="group relative z-30 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] text-sand outline-none focus-visible:ring-1 focus-visible:ring-sand"
            >
              <span
                className={`block h-px w-7 origin-center bg-current transition-[transform,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-[3.5px] rotate-45" : "group-hover:w-5"
                }`}
              />
              <span
                className={`block h-px origin-center bg-current transition-[transform,opacity,width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open
                    ? "w-7 -translate-y-[3.5px] -rotate-45"
                    : "w-5 self-end group-hover:w-7"
                }`}
              />
            </button>
          </div>
        </Container>
      </div>
      {/* Full-screen navigation overlay */}
      <div
        id="site-navigation-menu"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-10 flex h-dvh w-full flex-col overflow-y-auto bg-soy px-6 pb-10 pt-28 text-sand shadow-2xl transition-[opacity,visibility,transform] duration-500 ease-in-out sm:px-10 sm:pt-32 lg:w-[35%] ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center"
          aria-label="Main navigation"
        >
          {primaryNav.map((item, index) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={`border-b border-sand/10 py-3.5 font-space text-sm font-normal uppercase tracking-[0.14em] transition-[opacity,transform,color] duration-500 ease-out sm:py-4 sm:text-base ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                } ${active ? "text-sand" : "text-sand/60 hover:text-sand"}`}
                style={{
                  transitionDelay: open ? `${index * 55}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Reservations appears inside the menu on phones */}
          <div
            className={`mt-8 transition-[opacity,transform] duration-500 ease-out sm:hidden ${
              open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
            style={{
              transitionDelay: open ? `${primaryNav.length * 55}ms` : "0ms",
            }}
          >
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex min-h-14 w-full items-center justify-center border border-sand/80 px-6 font-space text-xs uppercase tracking-[0.18em] text-sand transition-colors duration-300 hover:bg-sand hover:text-soy"
            >
              Reservations
            </a>
          </div>
        </nav>
        <p className="mx-auto mt-8 w-full max-w-3xl font-space text-[0.65rem] uppercase tracking-[0.2em] text-sand/40">
          {site.name}
        </p>
      </div>
    </header>
  );
}
