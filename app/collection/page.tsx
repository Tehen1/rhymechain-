import { Suspense } from "react"
import { CardGrid } from "@/components/card-grid"
import { CollectionFilters } from "@/components/collection-filters"

export default function CollectionPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold mb-8">
        <span className="neon-text">NFT Collection</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <CollectionFilters />
        </div>

        <div className="w-full lg:w-3/4">
          <Suspense fallback={<div>Loading cards...</div>}>
            <CardGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
