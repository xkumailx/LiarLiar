"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) return;

    // Keep overlay hidden initially
    gsap.set(overlay, {
      scaleY: 0,
      transformOrigin: "bottom",
    });

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Find nearest link
      const link = target.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      // Ignore invalid links
      if (!href) return;

      // Ignore external links
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Ignore anchors
      if (href.startsWith("#")) return;

      // Ignore new tab / modified clicks
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank"
      ) {
        return;
      }

      // Ignore same page
      if (href === window.location.pathname) {
        return;
      }

      event.preventDefault();

      if (isAnimating.current) return;

      isAnimating.current = true;

      const tl = gsap.timeline();

      // Cover current page
      tl.to(overlay, {
        scaleY: 1,
        duration: 0.45,
        ease: "power4.inOut",
        transformOrigin: "bottom",
      });

      // Navigate AFTER page is completely covered
      tl.call(() => {
        router.push(href);
      });

      // Reveal new page
      tl.to(overlay, {
        scaleY: 0,
        duration: 1,
        ease: "power4.inOut",
        transformOrigin: "top",
      });

      tl.call(() => {
        isAnimating.current = false;
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [router]);

  return (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[99999] bg-[#220715]"
    />
  );
}
