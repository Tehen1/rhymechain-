"use client"

import { useState, useEffect } from "react"
import type { Artist, CardRarity } from "@/lib/schema"
import { useRouter, useSearchParams } from "next/navigation"

export function CollectionFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [artists, setArtists] = useState<Artist[]>([])
  const [rarities, setRarities] = useState<CardRarity[]>([])
  const [selectedArtist, setSelectedArtist] = useState<string>(searchParams.get("artistId") || "")
  const [selectedRarity, setSelectedRarity] = useState<string>(searchParams.get("rarityId") || "")

  useEffect(() => {
    async function fetchFilters() {
      try {
        const [artistsRes, raritiesRes] = await Promise.all([fetch("/api/artists"), fetch("/api/rarities")])

        if (artistsRes.ok && raritiesRes.ok) {
          const artistsData = await artistsRes.json()
          const raritiesData = await raritiesRes.json()

          setArtists(artistsData)
          setRarities(raritiesData)
        }
      } catch (err) {
        console.error("Error fetching filters:", err)
      }
    }

    fetchFilters()
  }, [])

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (selectedArtist) {
      params.set("artistId", selectedArtist)
    }

    if (selectedRarity) {
      params.set("rarityId", selectedRarity)
    }

    router.push(`/collection?${params.toString()}`)
  }

  const clearFilters = () => {
    setSelectedArtist("")
    setSelectedRarity("")
    router.push("/collection")
  }

  return (
    <div className="neon-card rounded-xl p-6 bg-dark-lighter sticky top-4">
      <h2 className="font-display text-xl font-bold mb-6">Filters</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Artist</label>
          <select
            value={selectedArtist}
            onChange={(e) => setSelectedArtist(e.target.value)}
            className="w-full bg-dark border border-primary/30 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
          >
            <option value="">All Artists</option>
            {artists.map((artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Rarity</label>
          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="w-full bg-dark border border-primary/30 rounded-md px-3 py-2 focus:outline-none focus:border-primary"
          >
            <option value="">All Rarities</option>
            {rarities.map((rarity) => (
              <option key={rarity.id} value={rarity.id}>
                {rarity.name}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4 space-y-3">
          <button
            onClick={applyFilters}
            className="w-full bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-all duration-300"
          >
            Apply Filters
          </button>

          <button
            onClick={clearFilters}
            className="w-full bg-transparent border border-primary text-primary hover:bg-primary/10 px-4 py-2 rounded-md font-medium transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}
