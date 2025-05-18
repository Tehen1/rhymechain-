import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { cards, artists, cardRarities } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const artistId = searchParams.get("artistId")
    const rarityId = searchParams.get("rarityId")

    let query = db
      .select({
        card: cards,
        artist: artists,
        rarity: cardRarities,
      })
      .from(cards)
      .leftJoin(artists, eq(cards.artistId, artists.id))
      .leftJoin(cardRarities, eq(cards.rarityId, cardRarities.id))

    if (artistId) {
      query = query.where(eq(cards.artistId, Number.parseInt(artistId)))
    }

    if (rarityId) {
      query = query.where(eq(cards.rarityId, Number.parseInt(rarityId)))
    }

    const allCards = await query

    return NextResponse.json(allCards)
  } catch (error) {
    console.error("Error fetching cards:", error)
    return NextResponse.json({ error: "Failed to fetch cards" }, { status: 500 })
  }
}
