import { NextResponse } from "next/server";

const WORDPRESS_API_URL = process.env.WORDPRESS_URL;

export async function GET() {
  try {
    if (!WORDPRESS_API_URL) {
      return NextResponse.json(
        {
          error: "WORDPRESS_URL is not configured",
        },
        {
          status: 500,
        },
      );
    }

    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/reservation?_embed`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 60,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("WordPress Reservations API Error:", data);

      return NextResponse.json(
        {
          error: "Failed to fetch reservations",
          details: data,
        },
        {
          status: response.status,
        },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Reservations API Error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while fetching reservations",
      },
      {
        status: 500,
      },
    );
  }
}
