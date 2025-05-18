import Link from "next/link"
import { Wallet } from "lucide-react"

export function Navbar() {
  return (
    <header className="cyber-bg border-b border-primary/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-display font-bold flex items-center gap-2">
          <span className="neon-text">RhymeChain</span>
          <span className="text-xs md:text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded-md">Secured by zkEVM</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6">
            <Link href="/#features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/collection" className="hover:text-primary transition-colors">
              Collection
            </Link>
            <Link href="/artists" className="hover:text-primary transition-colors">
              Artists
            </Link>
            <Link href="/events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="/#faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
          <button
            id="connectWalletBtn"
            className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2"
          >
            <Wallet className="h-4 w-4" />
            <span>Connect Wallet</span>
          </button>
        </div>
      </div>
    </header>
  )
}
