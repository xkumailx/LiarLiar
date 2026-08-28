"use client";

import { Section } from "@/components/ui/section";
import { useEffect, useRef } from "react";

export default function EventForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");

    script.src =
      "https://api.tripleseat.com/ts/dynamic_leads/ts_script.js?dynamic_lead_form_id=3785&public_key=07d2773f1df981136421b57cf4485cd9ae357e20";

    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <Section className="event-form mt-[6em]">
      <div ref={containerRef} />
    </Section>
  );
}
