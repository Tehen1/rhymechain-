import type { Artist } from "@/lib/schema"
import Link from "next/link"

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`} className="block">
      <div className="nft-card rounded-xl overflow-hidden group">
        <div className="aspect-square bg-gradient-to-br from-purple-900 to-blue-800 relative">
          <img src={artist.imageUrl || "/placeholder.svg"} alt={artist.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end justify-center p-4">
            <span className="text-sm font-medium font-display text-white">{artist.name}</span>
          </div>
          <div className="absolute top-3 right-3 bg-dark-lighter/80 text-white text-xs font-bold px-2 py-1 rounded-md">
            {artist.countryCode}
          </div>
        </div>
      </div>
    </Link>
  )
}
