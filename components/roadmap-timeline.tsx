export function RoadmapTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>

      <div className="space-y-12 relative">
        {/* Q4 2024 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
            <div className="font-display text-xl font-bold text-primary mb-2">Q4 2024</div>
            <h3 className="font-display text-2xl font-bold mb-3">Private Alpha</h3>
            <p className="text-gray-300">
              Initial testing with a small group of players and artists to refine gameplay mechanics and card dynamics.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center z-10 w-8 h-8 bg-primary rounded-full">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="md:w-1/2 md:pl-12"></div>
        </div>

        {/* Q1 2025 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12"></div>
          <div className="hidden md:flex items-center justify-center z-10 w-8 h-8 bg-primary rounded-full">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 mb-4 md:mb-0">
            <div className="font-display text-xl font-bold text-primary mb-2">Q1 2025</div>
            <h3 className="font-display text-2xl font-bold mb-3">Seed Round & Initial Token Launch</h3>
            <p className="text-gray-300">
              Secure seed funding and initial RHYME token distribution through strategic partnerships.
            </p>
          </div>
        </div>

        {/* Q2 2025 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
            <div className="font-display text-xl font-bold text-primary mb-2">Q2 2025</div>
            <h3 className="font-display text-2xl font-bold mb-3">Public Beta & Card Pre-Sale</h3>
            <p className="text-gray-300">
              Launch public beta and first exclusive card pre-sale featuring top international hip-hop artists.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center z-10 w-8 h-8 bg-primary rounded-full">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="md:w-1/2 md:pl-12"></div>
        </div>

        {/* Q3 2025 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12"></div>
          <div className="hidden md:flex items-center justify-center z-10 w-8 h-8 bg-primary rounded-full">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 mb-4 md:mb-0">
            <div className="font-display text-xl font-bold text-primary mb-2">Q3 2025</div>
            <h3 className="font-display text-2xl font-bold mb-3">Official Game Launch</h3>
            <p className="text-gray-300">
              Full platform launch with complete gameplay features, marketplace, and first global tournament.
            </p>
          </div>
        </div>

        {/* Q4 2025 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
            <div className="font-display text-xl font-bold text-primary mb-2">Q4 2025</div>
            <h3 className="font-display text-2xl font-bold mb-3">Mobile App & DAO Governance</h3>
            <p className="text-gray-300">
              Launch mobile companion app and transition to full DAO governance for community-driven decision making.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center z-10 w-8 h-8 bg-primary rounded-full">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="md:w-1/2 md:pl-12"></div>
        </div>

        {/* Q1 2026 */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12"></div>
          <div className="hidden md:flex items-center justify-center z-10 w-8 h-8 bg-primary rounded-full">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <div className="font-display text-xl font-bold text-primary mb-2">Q1 2026</div>
            <h3 className="font-display text-2xl font-bold mb-3">Global Expansion & Live Events</h3>
            <p className="text-gray-300">
              Partner with major music festivals and expand artist roster to include 30+ countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
