import type React from "react"
import Link from "next/link"
import { db } from "@/lib/db"
import { cards, artists, cardRarities } from "@/lib/schema"
import { eq } from "drizzle-orm"
import { NftCard } from "@/components/nft-card"
import { Countdown } from "@/components/countdown"
import { FaqAccordion } from "@/components/faq-accordion"
import { TokenomicsChart } from "@/components/tokenomics-chart"
import { RoadmapTimeline } from "@/components/roadmap-timeline"
import { Footer } from "@/components/footer"
import { CuboidIcon as Cube, Globe, Headphones, Trophy, BanknoteIcon, Users } from "lucide-react"

export default async function Home() {
  // Fetch featured cards
  const featuredCards = await db
    .select({
      card: cards,
      artist: artists,
      rarity: cardRarities,
    })
    .from(cards)
    .leftJoin(artists, eq(cards.artistId, artists.id))
    .leftJoin(cardRarities, eq(cards.rarityId, cardRarities.id))
    .where(eq(cards.isPremium, true))
    .limit(3)

  return (
    <div className="bg-dark text-gray-100 font-sans overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24 cyber-bg relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  <span className="neon-text">The Global Rap League of the Future</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                  Where international hip-hop meets blockchain technology in a revolutionary NFT card game powered by
                  real-world artist performance data.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/collection"
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium text-lg transition-all duration-300 text-center"
                >
                  Start Playing
                </Link>
                <Link
                  href="/collection"
                  className="bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium text-lg transition-all duration-300 text-center"
                >
                  Explore NFTs
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="w-full md:w-1/2 max-w-md">
                  {featuredCards.length > 0 && (
                    <NftCard
                      card={featuredCards[0].card}
                      artist={featuredCards[0].artist || undefined}
                      rarity={featuredCards[0].rarity || undefined}
                    />
                  )}
                </div>

                <div className="w-full md:w-1/2 max-w-md grid grid-cols-2 gap-6">
                  <div className="glossy rounded-lg p-5 text-center neon-card">
                    <div className="text-3xl font-bold text-primary mb-2">120+</div>
                    <div className="text-sm text-gray-300">Artists Worldwide</div>
                  </div>

                  <div className="glossy rounded-lg p-5 text-center neon-card">
                    <div className="text-3xl font-bold text-primary mb-2">1,111</div>
                    <div className="text-sm text-gray-300">Cards Per Artist</div>
                  </div>

                  <div className="glossy rounded-lg p-5 text-center neon-card">
                    <div className="text-3xl font-bold text-primary mb-2">zkEVM</div>
                    <div className="text-sm text-gray-300">Powered by</div>
                  </div>

                  <div className="glossy rounded-lg p-5 text-center neon-card">
                    <div className="text-3xl font-bold text-primary mb-2">5%</div>
                    <div className="text-sm text-gray-300">Artist Royalties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative cyber elements */}
          <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-30 pointer-events-none"></div>
        </section>

        {/* Featured Cards Section */}
        <section className="py-20 bg-dark-light relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="neon-text">Featured NFT Cards</span>
              </h2>
              <p className="text-xl text-gray-300">
                Explore our exclusive collection of artist cards, each with unique stats and abilities that evolve with
                real-world performances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {featuredCards.map((item) => (
                <NftCard
                  key={item.card.id}
                  card={item.card}
                  artist={item.artist || undefined}
                  rarity={item.rarity || undefined}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/collection"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block"
              >
                View All Cards
              </Link>
            </div>
          </div>

          {/* Decorative cyber elements */}
          <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20 pointer-events-none"></div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-dark relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="neon-text">Game-Changing Features</span>
              </h2>
              <p className="text-xl text-gray-300">
                RhymeChain brings together the worlds of hip-hop and blockchain technology to create an immersive
                experience unlike any other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="neon-card rounded-xl p-6 bg-dark-lighter">
                <div className="text-primary text-3xl mb-4">
                  <Cube className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Dynamic NFT Cards</h3>
                <p className="text-gray-300">
                  Cards that evolve based on real-world artist metrics and performances, creating a living connection
                  between the digital and physical world.
                </p>
              </div>

              <div className="neon-card rounded-xl p-6 bg-dark-lighter">
                <div className="text-primary text-3xl mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Global Hip-Hop Network</h3>
                <p className="text-gray-300">
                  Connect with artists and fans from over 30 countries with different styles, flows, and cultural
                  influences.
                </p>
              </div>

              <div className="neon-card rounded-xl p-6 bg-dark-lighter">
                <div className="text-primary text-3xl mb-4">
                  <Headphones className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Music Integration</h3>
                <p className="text-gray-300">
                  Listen to exclusive tracks directly from your NFT cards, with streaming insights affecting card
                  values.
                </p>
              </div>

              <div className="neon-card rounded-xl p-6 bg-dark-lighter">
                <div className="text-primary text-3xl mb-4">
                  <Trophy className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Competitive Gameplay</h3>
                <p className="text-gray-300">
                  Build your dream team of MCs and battle in global tournaments with strategic deck building mechanics.
                </p>
              </div>

              <div className="neon-card rounded-xl p-6 bg-dark-lighter">
                <div className="text-primary text-3xl mb-4">
                  <BanknoteIcon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Real Artist Royalties</h3>
                <p className="text-gray-300">
                  Support your favorite artists directly, with 5% of all transactions going to the featured musicians.
                </p>
              </div>

              <div className="neon-card rounded-xl p-6 bg-dark-lighter">
                <div className="text-primary text-3xl mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">Community Governance</h3>
                <p className="text-gray-300">
                  Holders can vote on new features, artist additions, and tournament structures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-20 bg-dark-light relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto neon-card rounded-xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-6">Next Drop Countdown</h3>
              <Countdown targetDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} />
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-md font-medium transition-all duration-300 mt-6">
                Join Waitlist
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-dark relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="neon-text">Frequently Asked Questions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to know about RhymeChain. Can't find the answer you're looking for? Contact our
                support team.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="py-20 bg-dark-light relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="neon-text">$RHYME Tokenomics</span>
              </h2>
              <p className="text-xl text-gray-300">
                The $RHYME token powers the RhymeChain ecosystem, enabling gameplay, governance, and rewards.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
              <div className="w-full lg:w-1/2 flex justify-center">
                <TokenomicsChart />
              </div>

              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-dark-lighter rounded-lg p-4 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <div>
                    <div className="font-display font-bold">Play-to-Earn Rewards</div>
                    <div className="text-xl font-bold text-primary">30%</div>
                  </div>
                </div>

                <div className="bg-dark-lighter rounded-lg p-4 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-accent-blue"></div>
                  <div>
                    <div className="font-display font-bold">Community Treasury</div>
                    <div className="text-xl font-bold text-accent-blue">25%</div>
                  </div>
                </div>

                <div className="bg-dark-lighter rounded-lg p-4 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-accent-yellow"></div>
                  <div>
                    <div className="font-display font-bold">Team & Development</div>
                    <div className="text-xl font-bold text-accent-yellow">20%</div>
                  </div>
                </div>

                <div className="bg-dark-lighter rounded-lg p-4 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-accent-green"></div>
                  <div>
                    <div className="font-display font-bold">Liquidity Pool</div>
                    <div className="text-xl font-bold text-accent-green">15%</div>
                  </div>
                </div>

                <div className="bg-dark-lighter rounded-lg p-4 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  <div>
                    <div className="font-display font-bold">Marketing & Partnerships</div>
                    <div className="text-xl font-bold text-red-500">10%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative cyber elements */}
          <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20 pointer-events-none"></div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-20 bg-dark relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="neon-text">Project Roadmap</span>
              </h2>
              <p className="text-xl text-gray-300">
                Our development plan for bringing RhymeChain to life and growing the ecosystem.
              </p>
            </div>

            <RoadmapTimeline />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function Wallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  )
}

function Mic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function Crown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  )
}

function LineChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
}

function Gem(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}

function Hourglass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </svg>
  )
}

function FileText(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  )
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function MessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Send(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function BookOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function CyberpunkCard({
  name,
  icon,
  gradient,
  className,
}: {
  name: string
  icon: React.ReactNode
  gradient: string
  className?: string
}) {
  return (
    <div className={`nft-card rounded-lg overflow-hidden group ${className || ""}`}>
      <div className={`aspect-square bg-gradient-to-br ${gradient} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-5xl text-white/20">{icon}</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity flex items-end justify-center p-4">
          <span className="text-sm font-medium font-display text-white">RhymeChain: {name}</span>
        </div>
      </div>
    </div>
  )
}
