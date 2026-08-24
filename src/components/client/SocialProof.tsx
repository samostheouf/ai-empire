'use client'

import { useEffect, useState } from 'react'
import { Users, Package, Download, Star } from 'lucide-react'

export default function SocialProof() {
  const [stats, setStats] = useState<{ userCount: number; templateCount: number; totalDownloads: number } | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => (r.ok ? r.json() : null))
      .then(setStats)
      .catch(() => {})
  }, [])

  if (!stats) return null

  const items = [
    { icon: Users, value: `${stats.userCount}`, label: 'développeurs inscrits' },
    { icon: Package, value: `${stats.templateCount}`, label: 'templates premium' },
    { icon: Download, value: `${stats.totalDownloads}`, label: 'téléchargements' },
    { icon: Star, value: '30j', label: 'garantie remboursé' },
  ]

  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {items.map((item, i) => (
        <div key={i} className="glass-card rounded-xl p-4 text-center">
          <item.icon className="mx-auto h-5 w-5 text-indigo-400" />
          <div className="mt-2 text-2xl font-bold text-white">{item.value}</div>
          <div className="text-xs text-indigo-300/60">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
