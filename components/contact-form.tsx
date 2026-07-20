"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-sand/15 bg-transparent px-4 py-3 text-sand placeholder:text-sand/35 focus:border-sand/50 focus:outline-none";

export function ContactForm({
  subject = "General enquiry",
  cta = "Send Message",
}: {
  subject?: string;
  cta?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sand/10 bg-soy/40 p-8 text-center">
        <p className="font-display text-2xl text-sand">Thank you.</p>
        <p className="mt-3 text-sm text-sand/60">
          We&apos;ve got your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow mb-2 block">
            Name
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow mb-2 block">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="eyebrow mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-torii px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-sand transition-colors hover:bg-kabloom disabled:opacity-50"
      >
        {status === "loading" ? "Sending…" : cta}
      </button>
      {status === "error" ? (
        <p className="text-xs text-flame">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
