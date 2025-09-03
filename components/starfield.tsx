"use client"

import { useMemo } from "react"

// Generates a deterministic set of "stars" to avoid reflow.
// Uses only neutral/white for accessibility and to fit within the color palette.
export default function Starfield({
  count = 80,
  className = "",
}: {
  count?: number
  className?: string
}) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() > 0.85 ? 2 : 1,
        delay: Math.random() * 3,
        duration: 1.5 + Math.random() * 2.5,
      })),
    [count],
  )

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <style>
        {`
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
        `}
      </style>
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute bg-white rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            opacity: 0.6,
            animation: `starTwinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.45))",
          }}
        />
      ))}
    </div>
  )
}
