import Link from "next/link"
import { Twitter, MessageCircle, Instagram, Send, BookOpen, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-dark-light border-t border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-display font-bold flex items-center gap-2 mb-4">
              <span className="neon-text">RhymeChain</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md">Secured by zkEVM</span>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              The revolutionary NFT card game connecting international hip-hop with blockchain technology.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Send className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                <BookOpen className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#features" className="text-gray-300 hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/collection" className="text-gray-300 hover:text-primary transition-colors">
                    Collection
                  </Link>
                </li>
                <li>
                  <Link href="/artists" className="text-gray-300 hover:text-primary transition-colors">
                    Artists
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-300 hover:text-primary transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-gray-300 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                    Token Economics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                    Artist Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                    Media Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary transition-colors">
                    Community Discord
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="font-display font-bold text-lg mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4">Subscribe to receive updates about exclusive drops and events.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-dark border border-primary/30 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-primary text-base"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="cyber-divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">&copy; 2025 RhymeChain. All rights reserved.</div>
          <div className="flex flex-row gap-4">
            <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
