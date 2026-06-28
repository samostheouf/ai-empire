'use client'

import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'
import { useI18n } from '@/i18n'

const DEFAULT_DEADLINE = '2026-07-01T00:00:00Z'

function getTimeLeft(deadline: string) {
  const now = Date.now()
  const end = new Date(deadline).getTime()
  const diff = end - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function HomeCountdown() {
  const [deadline, setDeadline] = useState<string | null>(null)
  const [time, setTime] = useState(() => getTimeLeft(DEFAULT_DEADLINE))
  const { t: rawT } = useI18n()
  const t = rawT as (key: string) => string

  useEffect(() => {
    fetch('/api/countdown')
      .then(r => r.json())
      .then(d => {
        if (d.deadline) setDeadline(d.deadline)
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const effectiveDeadline = deadline || DEFAULT_DEADLINE
    const interval = setInterval(() => {
      setTime(getTimeLeft(effectiveDeadline))
    }, 1000)
    return () => clearInterval(interval)
  }, [deadline])

  if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
    return null
  }

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/20 px-4 py-2 text-sm text-orange-300 backdrop-blur-sm" role="timer" aria-label={t('countdownAriaLabel')}>
      <Clock className="w-4 h-4 text-orange-400 animate-pulse" aria-hidden="true" />
      <span className="font-medium">{t('countdownLabel')}</span>
      <span className="font-mono font-bold text-orange-200">
        {pad(time.days)}j {pad(time.hours)}h {pad(time.minutes)}m {pad(time.seconds)}s
      </span>
    </div>
  )
}
