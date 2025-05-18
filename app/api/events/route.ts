import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { events } from "@/lib/schema"

export async function GET() {
  try {
    const allEvents = await db.select().from(events).orderBy(events.eventDate)
    return NextResponse.json(allEvents)
  } catch (error) {
    console.error("Error fetching events:", error)
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 })
  }
}
