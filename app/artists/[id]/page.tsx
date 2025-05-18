import { notFound } from "next/navigation"
import { db } from "@/lib/db"
import { artists, cards, cardRarities } from "@/lib/schema"
import { eq } from "drizzle-orm"
import { NftCard } from "@/components/nft-card"
import Link from "next/link"

export default async function ArtistPage({ params }: { params: { id: string } }) {
  const artistId = Number.parseInt(params.id)

  if (isNaN(artistId)) {
    notFound()
  }

  const artist = await db.select().from(artists).where(eq(artists.id, artistId)).limit(1)

  if (artist.length === 0) {
    notFound()
  }

  const artistCards = await db
    .select({
      card: cards,
      rarity: cardRarities,
    })
    .from(cards)
    .leftJoin(cardRarities, eq(cards.rarityId, cardRarities.id))
    .where(eq(cards.artistId, artistId))

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/artists" className="text-primary hover:underline flex items-center gap-2">
          <span>← Back to Artists</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mb-12">
        <div className="w-full lg:w-1/3">
          <div className="nft-card rounded-xl overflow-hidden">
            <img
              src={artist[0].imageUrl || "/placeholder.svg"}
              alt={artist[0].name}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="neon-text">{artist[0].name}</span>
          </h1>

          <div className="mb-4 inline-block bg-dark-lighter px-3 py-1 rounded-md">{artist[0].countryCode}</div>

          {artist[0].bio && <p className="text-gray-300 mb-6">{artist[0].bio}</p>}

          <div className="cyber-divider"></div>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all duration-300">
              Follow Artist
            </button>
            <button className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium transition-all duration-300">
              View on Marketplace
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-display font-bold mb-6">Artist Cards</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artistCards.map((item) => (
          <NftCard key={item.card.id} card={item.card} artist={artist[0]} rarity={item.rarity || undefined} />
        ))}
      </div>
    </div>
  )
}
