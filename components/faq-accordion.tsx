"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: "What is RhymeChain?",
    answer:
      "RhymeChain is a revolutionary NFT card game that combines the worlds of international hip-hop and blockchain technology. Players collect digital cards representing real hip-hop artists, with stats that evolve based on real-world performance data, and use them to compete in strategic gameplay.",
  },
  {
    question: "How do I get started with RhymeChain?",
    answer:
      "Getting started is easy! First, connect your crypto wallet. Then you can purchase card packs, participate in drops, or buy individual cards from other players on the marketplace. Once you have your cards, you can build your deck and start competing in tournaments.",
  },
  {
    question: "What makes RhymeChain cards valuable?",
    answer:
      "RhymeChain cards derive value from multiple sources: limited supply with different rarity tiers, real-world performance data that affects stats, utility within the game's ecosystem, and direct connection to real artists. As cards are used in tournaments and the artists' popularity grows, the cards may become more valuable.",
  },
  {
    question: "Do artists benefit from RhymeChain?",
    answer:
      "Artists receive 5% of all transactions involving their cards, including initial sales and secondary market trades. They also benefit from increased exposure to new audiences, exclusive performance opportunities at RhymeChain events, and additional revenue streams through in-game perks like exclusive tracks.",
  },
  {
    question: "What blockchain does RhymeChain use?",
    answer:
      "RhymeChain is built on zkEVM, a Layer 2 scaling solution for Ethereum that offers faster transactions and lower fees while maintaining compatibility with Ethereum smart contracts. This allows for a seamless experience with the security and decentralization benefits of Ethereum.",
  },
  {
    question: "Can I trade my RhymeChain cards?",
    answer:
      "Yes, all RhymeChain cards are fully tradable NFTs that you own. You can buy, sell, or trade them on our native marketplace or any compatible NFT marketplace that supports zkEVM assets. Each card's ownership, transaction history, and stats are verifiable on the blockchain.",
  },
]

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="neon-card rounded-xl overflow-hidden">
          <button
            className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-display font-bold text-lg">{item.question}</span>
            <ChevronDown
              className={`text-primary transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          <div className={`px-6 pb-6 ${openIndex === index ? "block" : "hidden"}`}>
            <p className="text-gray-300">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
