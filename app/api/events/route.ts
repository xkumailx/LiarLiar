import { NextResponse } from "next/server";

export async function GET() {
  try {
    const wordpressUrl = process.env.WORDPRESS_URL;

    if (!wordpressUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "WORDPRESS_URL is not configured",
        },
        { status: 500 },
      );
    }

    const baseUrl = wordpressUrl.replace(/\/$/, "");

    const apiUrl = `${baseUrl}/wp-json/wp/v2/event?_embed=wp:featuredmedia,wp:term`;

    console.log("Events API:", apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("WordPress Events Error:", data);

      return NextResponse.json(
        {
          success: false,
          error: data.message || "Failed to fetch events",
          wordpressError: data,
        },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Events API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while fetching events",
      },
      { status: 500 },
    );
  }
}
