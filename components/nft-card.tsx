import { Zap } from "lucide-react"
import type { Card, Artist, CardRarity } from "@/lib/schema"
import Link from "next/link"

interface NftCardProps {
  card: Card
  artist?: Artist
  rarity?: CardRarity
  showLink?: boolean
}

export function NftCard({ card, artist, rarity, showLink = true }: NftCardProps) {
  const cardContent = (
    <div className="nft-card rounded-xl overflow-hidden animate-float">
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-purple-700 to-blue-900 relative">
          <img src={card.imageUrl || "/placeholder.svg"} alt={card.name} className="w-full h-full object-cover" />
        </div>
        {rarity && (
          <div
            className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-md"
            style={{ backgroundColor: rarity.colorHex, color: "#fff" }}
          >
            {rarity.name}
          </div>
        )}
        {card.isPremium && (
          <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-bold px-2 py-1 rounded-md">
            Premium
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-dark-lighter/80 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
          <Zap className="h-3 w-3" />
          <span>{card.power} POW</span>
        </div>
        {artist && (
          <div className="absolute bottom-3 right-3 bg-dark-lighter/80 text-white text-xs font-bold px-2 py-1 rounded-md">
            {artist.countryCode}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-bold mb-3">{card.name}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">FLOW</span>
            <span className="text-sm font-semibold">{card.flowStat}</span>
          </div>
          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${card.flowStat}%` }}></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">LYRICS</span>
            <span className="text-sm font-semibold">{card.lyricsStat}</span>
          </div>
          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${card.lyricsStat}%` }}></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">IMPACT</span>
            <span className="text-sm font-semibold">{card.impactStat}</span>
          </div>
          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${card.impactStat}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  )

  if (showLink) {
    return <Link href={`/cards/${card.id}`}>{cardContent}</Link>
  }

  return cardContent
}
