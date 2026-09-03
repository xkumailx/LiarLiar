import { NextResponse } from "next/server";

const WORDPRESS_API =
  "https://backend.liarliarbraeside.com.au/wp-json/liarliar/v1/events";

export async function GET() {
  try {
    const response = await fetch(WORDPRESS_API, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Failed to fetch events",
        },
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Events API Error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while fetching events",
      },
      {
        status: 500,
      }
    );
  }
}