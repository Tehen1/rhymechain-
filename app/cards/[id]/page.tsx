import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { cards, artists, cardRarities } from "@/lib/schema"
import { eq } from "drizzle-orm"
import { NftCard } from "@/components/nft-card"
import Link from "next/link"

export default async function CardPage({ params }: { params: { id: string } }) {
  const cardId = Number.parseInt(params.id)

  if (isNaN(cardId)) {
    notFound()
  }

  const result = await db
    .select({
      card: cards,
      artist: artists,
      rarity: cardRarities,
    })
    .from(cards)
    .leftJoin(artists, eq(cards.artistId, artists.id))
    .leftJoin(cardRarities, eq(cards.rarityId, cardRarities.id))
    .where(eq(cards.id, cardId))
    .limit(1)

  if (result.length === 0) {
    notFound()
  }

  const { card, artist, rarity } = result[0]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/collection" className="text-primary hover:underline flex items-center gap-2">
          <span>← Back to Collection</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 max-w-md mx-auto">
          <NftCard card={card} artist={artist || undefined} rarity={rarity || undefined} showLink={false} />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="neon-text">{card.name}</span>
          </h1>

          {artist && (
            <div className="mb-6">
              <h2 className="text-xl font-display font-bold mb-2">Artist</h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={artist.imageUrl || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">{artist.name}</div>
                  <div className="text-sm text-gray-300">{artist.countryCode}</div>
                </div>
              </div>
              {artist.bio && <p className="mt-3 text-gray-300">{artist.bio}</p>}
            </div>
          )}

          {rarity && (
            <div className="mb-6">
              <h2 className="text-xl font-display font-bold mb-2">Rarity</h2>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: rarity.colorHex }}></div>
                <div className="font-bold">{rarity.name}</div>
              </div>
              {rarity.description && <p className="mt-2 text-gray-300">{rarity.description}</p>}
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-xl font-display font-bold mb-2">Stats</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>Flow</span>
                  <span className="font-bold">{card.flowStat}/100</span>
                </div>
                <div className="stat-bar h-3">
                  <div className="stat-fill" style={{ width: `${card.flowStat}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>Lyrics</span>
                  <span className="font-bold">{card.lyricsStat}/100</span>
                </div>
                <div className="stat-bar h-3">
                  <div className="stat-fill" style={{ width: `${card.lyricsStat}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>Impact</span>
                  <span className="font-bold">{card.impactStat}/100</span>
                </div>
                <div className="stat-bar h-3">
                  <div className="stat-fill" style={{ width: `${card.impactStat}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span>Overall Power</span>
                  <span className="font-bold">{card.power}/100</span>
                </div>
                <div className="stat-bar h-3">
                  <div className="stat-fill" style={{ width: `${card.power}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
              Buy Now
            </button>
            <button className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all duration-300">
              Add to Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
