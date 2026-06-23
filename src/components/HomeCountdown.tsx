'use client'

import { useState, useEffect } from 'react'
import CountdownTimer from './CountdownTimer'

export default function HomeCountdown() {
  const [deadline, setDeadline] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/countdown')
      .then(r => r.json())
      .then(d => {
        if (d.deadline) setDeadline(d.deadline)
      })
      .catch(() => {})
  }, [])

  if (!deadline) return null

  return <CountdownTimer deadline={deadline} />
}
