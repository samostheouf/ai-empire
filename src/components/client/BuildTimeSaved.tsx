'use client'

import { useState, useRef, useCallback } from 'react'
import { Clock, TrendingUp, Users } from 'lucide-react'

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  green: { border: 'hover:border-green-500/30', bg: 'bg-green-500/10', text: 'text-green-400' },
  blue: { border: 'hover:border-blue-500/30', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  purple: { border: 'hover:border-purple-500/30', bg: 'bg-purple-500/10', text: 'text-purple-400' },
}

function AnimatedCounter({
  end,
  duration = 2000,
  icon: Icon,
  label,
  color,
}: {
  end: number
  duration?: number
  icon: React.ComponentType<{ className?: string }>
  label: string
  color: string
}) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)
  const colors = colorMap[color] || colorMap.blue

  const nodeRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const startTime = Date.now()
            const tick = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(eased * end))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        },
        { threshold: 0.5 }
      )
      observer.observe(node)
      return () => observer.disconnect()
    },
    [end, duration]
  )

  return (
    <div ref={nodeRef} className={`glass-card rounded-2xl p-6 text-center group ${colors.border} transition-all`}>
      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${colors.text}`} />
      </div>
      <p className="text-4xl font-bold text-white">{count.toLocaleString()}+</p>
      <p className="text-sm text-indigo-300/60 mt-1">{label}</p>
    </div>
  )
}

export default function BuildTimeSaved() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <AnimatedCounter end={2847} duration={2500} icon={Clock} label="Hours of development saved" color="green" />
      <AnimatedCounter end={1247} duration={2000} icon={TrendingUp} label="Projects shipped" color="blue" />
      <AnimatedCounter end={5000} duration={2200} icon={Users} label="Developers using AI Empire" color="purple" />
    </div>
  )
}
