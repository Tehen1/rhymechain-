"use client"

import { useState, useEffect } from "react"
import { NftCard } from "@/components/nft-card"
import type { Card, Artist, CardRarity } from "@/lib/schema"

interface CardWithRelations {
  card: Card
  artist: Artist | null
  rarity: CardRarity | null
}

export function CardGrid() {
  const [cards, setCards] = useState<CardWithRelations[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("/api/cards")
        if (!response.ok) {
          throw new Error("Failed to fetch cards")
        }
        const data = await response.json()
        setCards(data)
      } catch (err) {
        setError("Error loading cards. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  if (loading) {
    return <div className="text-center py-12">Loading cards...</div>
  }

  if (error) {
    return <div className="text-center py-12 text-red-500">{error}</div>
  }

  if (cards.length === 0) {
    return <div className="text-center py-12">No cards found. Try adjusting your filters.</div>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((item) => (
        <NftCard
          key={item.card.id}
          card={item.card}
          artist={item.artist || undefined}
          rarity={item.rarity || undefined}
        />
      ))}
    </div>
  )
}
