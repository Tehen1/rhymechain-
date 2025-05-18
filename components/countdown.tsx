"use client"

import { useState, useEffect } from "react"

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      // Calculate days, hours, minutes, seconds
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    // Initial call and set interval
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    // Clear interval on component unmount
    return () => clearInterval(interval)
  }, [targetDate])

  // Format numbers to always have two digits
  const formatNumber = (num: number) => String(num).padStart(2, "0")

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-dark-lighter rounded-lg p-4">
        <div className="text-4xl font-bold text-primary mb-1">{formatNumber(timeLeft.days)}</div>
        <div className="text-sm text-gray-300">Days</div>
      </div>
      <div className="bg-dark-lighter rounded-lg p-4">
        <div className="text-4xl font-bold text-primary mb-1">{formatNumber(timeLeft.hours)}</div>
        <div className="text-sm text-gray-300">Hours</div>
      </div>
      <div className="bg-dark-lighter rounded-lg p-4">
        <div className="text-4xl font-bold text-primary mb-1">{formatNumber(timeLeft.minutes)}</div>
        <div className="text-sm text-gray-300">Minutes</div>
      </div>
      <div className="bg-dark-lighter rounded-lg p-4">
        <div className="text-4xl font-bold text-primary mb-1">{formatNumber(timeLeft.seconds)}</div>
        <div className="text-sm text-gray-300">Seconds</div>
      </div>
    </div>
  )
}
