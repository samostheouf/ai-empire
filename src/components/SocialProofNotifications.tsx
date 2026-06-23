'use client'

import { useState, useEffect } from 'react'

interface Stats {
  userCount: number
  templateCount: number
  totalDownloads: number
}

export default function SocialProofNotifications() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.userCount === 'number') {
          setStats(data)
        }
      })
      .catch(() => {})
  }, [])

  if (!stats || stats.userCount === 0) return null

  return (
    <div className="fixed bottom-20 left-4 z-40 max-w-xs rounded-xl bg-white/10 backdrop-blur-md border border-white/10 p-4 text-sm text-white shadow-lg">
      <p className="font-medium">{stats.userCount.toLocaleString('fr-FR')} développeurs utilisent NeuraAPI</p>
      <p className="text-xs text-indigo-300/70 mt-1">{stats.templateCount} templates — {stats.totalDownloads.toLocaleString('fr-FR')} téléchargements</p>
    </div>
  )
}
