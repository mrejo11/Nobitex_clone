import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://nobitex-clone.netlify.app", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching market stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}