'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  formatter?: (n: number) => string
}

export default function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = '',
  formatter,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.round(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  const display = formatter
    ? formatter(current)
    : current.toLocaleString('fr-FR')

  return (
    <span ref={ref} className={className} aria-live="off">
      {prefix}{display}{suffix}
    </span>
  )
}
