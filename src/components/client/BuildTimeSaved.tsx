'use client'

import { useState, useRef, useCallback } from 'react'
import { Clock, TrendingUp, Users } from 'lucide-react'

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
    <div ref={nodeRef} className={`glass-card rounded-2xl p-6 text-center group hover:border-${color}-500/30 transition-all`}>
      <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 text-${color}-400`} />
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
