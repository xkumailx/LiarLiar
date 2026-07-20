import { NextResponse } from "next/server";

/**
 * Anonymous confession submissions.
 *
 * When CONFESSION_WEBHOOK_URL is set (e.g. a WordPress endpoint that creates a
 * draft `confession` post for moderation), the text is forwarded there.
 * Otherwise the submission is accepted so the UI works in development.
 */
export async function POST(request: Request) {
  let text = "";
  try {
    const body = await request.json();
    text = String(body?.text ?? "").trim();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (text.length < 3 || text.length > 1000) {
    return NextResponse.json({ error: "Invalid confession" }, { status: 422 });
  }

  const webhook = process.env.CONFESSION_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) {
        return NextResponse.json({ error: "Submission failed" }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ error: "Submission failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
