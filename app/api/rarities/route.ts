import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { cardRarities } from "@/lib/schema"

export async function GET() {
  try {
    const allRarities = await db.select().from(cardRarities)
    return NextResponse.json(allRarities)
  } catch (error) {
    console.error("Error fetching rarities:", error)
    return NextResponse.json({ error: "Failed to fetch rarities" }, { status: 500 })
  }
}
