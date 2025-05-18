export function TokenomicsChart() {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 relative">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="10" />

        {/* Play-to-Earn Rewards (30%) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#ff3cf0"
          strokeWidth="10"
          strokeDasharray="282.6 471"
          strokeDashoffset="0"
        />

        {/* Community Treasury (25%) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#3cffe2"
          strokeWidth="10"
          strokeDasharray="157 471"
          strokeDashoffset="-282.6"
        />

        {/* Team & Development (20%) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#f0ff3c"
          strokeWidth="10"
          strokeDasharray="125.6 471"
          strokeDashoffset="-439.6"
        />

        {/* Liquidity Pool (15%) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#3cff62"
          strokeWidth="10"
          strokeDasharray="94.2 471"
          strokeDashoffset="-565.2"
        />

        {/* Marketing & Partnerships (10%) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#ff5e5e"
          strokeWidth="10"
          strokeDasharray="62.8 471"
          strokeDashoffset="-659.4"
        />

        {/* Center circle */}
        <circle cx="50" cy="50" r="25" fill="#120b1a" />

        {/* $RHYME text in center */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#ff3cf0"
          fontFamily="Orbitron"
          fontSize="8"
          fontWeight="bold"
        >
          $RHYME
        </text>
      </svg>
    </div>
  )
}
