"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ConfessionForm() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/confess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setText("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sand/10 bg-soy/40 p-8 text-center">
        <p className="font-display text-2xl text-sand">Your secret is safe.</p>
        <p className="mt-3 text-sm text-sand/60">
          The Night Gremlins have it now. Thank you.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-sand/10 bg-soy/40 p-8"
    >
      <label htmlFor="confession" className="eyebrow mb-3 block">
        Your confession
      </label>
      <textarea
        id="confession"
        required
        rows={5}
        maxLength={500}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="I ordered the most expensive thing on the menu and then googled what it was…"
        className="w-full resize-none rounded-xl border border-sand/15 bg-transparent p-4 text-sand placeholder:text-sand/35 focus:border-sand/50 focus:outline-none"
      />
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-sand/40">{text.length}/500 · Anonymous</span>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-torii px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-sand transition-colors hover:bg-kabloom disabled:opacity-50"
        >
          {status === "loading" ? "Sending…" : "Confess"}
        </button>
      </div>
      {status === "error" ? (
        <p className="mt-3 text-xs text-flame">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
