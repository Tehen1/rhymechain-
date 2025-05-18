import { db } from "@/lib/db"
import { artists } from "@/lib/schema"
import { ArtistCard } from "@/components/artist-card"

export default async function ArtistsPage() {
  const allArtists = await db.select().from(artists)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold mb-8">
        <span className="neon-text">Featured Artists</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  )
}
