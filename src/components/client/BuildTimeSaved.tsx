'use client'

import { useState, useEffect } from 'react'
import { Users, Package, Download } from 'lucide-react'

// Affiche UNIQUEMENT des métriques réelles depuis /api/stats. Aucun chiffre inventé.
export default function BuildTimeSaved() {
  const [stats, setStats] = useState<{ userCount: number; templateCount: number; totalDownloads: number } | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => { if (data) setStats(data) })
      .catch(() => {})
  }, [])

  if (!stats) return null

  const cards = [
    { icon: Users, value: stats.userCount, label: 'Développeurs inscrits', color: 'text-indigo-300' },
    { icon: Package, value: stats.templateCount, label: 'Templates premium disponibles', color: 'text-purple-300' },
    { icon: Download, value: stats.totalDownloads, label: 'Téléchargements de templates', color: 'text-emerald-300' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div key={i} className="glass-card rounded-2xl p-6 text-center group hover:border-white/20 transition-all">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <card.icon className={`w-6 h-6 ${card.color}`} />
          </div>
          <p className="text-4xl font-bold text-white">{card.value.toLocaleString()}</p>
          <p className="text-sm text-indigo-300/60 mt-1">{card.label}</p>
        </div>
      ))}
    </div>
  )
}
