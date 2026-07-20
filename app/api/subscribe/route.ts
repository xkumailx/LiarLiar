import { NextResponse } from "next/server";

/**
 * Newsletter signup endpoint.
 *
 * Validates the email and forwards it to WordPress (or a mailing provider)
 * when configured via env. Without configuration it accepts the signup so the
 * UI works in development.
 *
 * To wire a real list, set NEWSLETTER_WEBHOOK_URL (e.g. a WordPress endpoint,
 * Mailchimp, or a webhook) — the email is POSTed there as { email }.
 */
export async function POST(request: Request) {
  let email = "";
  try {
    const body = await request.json();
    email = String(body?.email ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    return NextResponse.json({ error: "Invalid email" }, { status: 422 });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        return NextResponse.json(
          { error: "Subscription failed" },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Subscription failed" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
