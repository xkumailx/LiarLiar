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

    const baseUrl = wordpressUrl.replace(/\/+$/, "");

    const apiUrl = `${baseUrl}/wp-json/wp/v2/venue?_embed=wp:featuredmedia`;

    console.log("Venues API:", apiUrl);

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
      console.error("WordPress Venues Error:", data);

      return NextResponse.json(
        {
          success: false,
          error: data.message || "Failed to fetch venues",
          wordpressError: data,
        },
        { status: response.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Venues API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while fetching venues",
      },
      { status: 500 },
    );
  }
}
