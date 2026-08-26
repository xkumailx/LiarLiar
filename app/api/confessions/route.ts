import { NextRequest, NextResponse } from "next/server";

interface ConfessionRequest {
  name: string;
  email: string;
  confession: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, confession }: ConfessionRequest = await request.json();

    if (!name || !email || !confession) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      );
    }

    const wordpressUrl = process.env.WORDPRESS_URL;
    const username = process.env.WORDPRESS_USERNAME;
    const appPassword = process.env.WORDPRESS_APP_PASSWORD;

    if (!wordpressUrl || !username || !appPassword) {
      console.error("Missing WordPress environment variables");

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        { status: 500 },
      );
    }

    const credentials = Buffer.from(
      `${username}:${appPassword.replace(/\s/g, "")}`,
    ).toString("base64");

    const postTitle = `${name.trim()} - ${email.trim()}`;

    const response = await fetch(`${wordpressUrl}/wp-json/wp/v2/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({
        title: postTitle,
        content: confession.trim(),
        status: "draft",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("WordPress Error:", data);

      return NextResponse.json(
        {
          success: false,
          message: data.message || "Failed to submit confession.",
          wordpressError: data,
        },
        { status: response.status },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your confession has been submitted and is awaiting approval.",
        postId: data.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Confession submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
