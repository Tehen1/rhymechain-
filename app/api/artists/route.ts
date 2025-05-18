import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { artists } from "@/lib/schema"

export async function GET() {
  try {
    const allArtists = await db.select().from(artists)
    return NextResponse.json(allArtists)
  } catch (error) {
    console.error("Error fetching artists:", error)
    return NextResponse.json({ error: "Failed to fetch artists" }, { status: 500 })
  }
}
