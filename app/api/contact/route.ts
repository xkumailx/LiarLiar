import { NextResponse } from "next/server";

/**
 * General contact / enquiry endpoint (used by Contact, Careers, DJs, Sponsors).
 *
 * Forwards the payload to CONTACT_WEBHOOK_URL when set (e.g. a WordPress form
 * handler, an email service, or a webhook). Without it, accepts the message so
 * the UI works in development.
 */
export async function POST(request: Request) {
  let payload: Record<string, unknown> = {};
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const email = String(payload.email ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail || message.length < 2) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return NextResponse.json({ error: "Send failed" }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ error: "Send failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
