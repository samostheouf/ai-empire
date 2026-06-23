'use client'

import { useState, useEffect } from 'react'
import { Users, Download, Zap, TrendingUp } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'

interface Stats {
  userCount: number
  totalDownloads: number
  orderCount: number
  totalRevenue: number
  templateCount: number
}

export default function RealTestimonials() {
  const [stats, setStats] = useState<Stats | null>(null)

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {})
  }, [])

  if (!stats) return null

  const isEmpty = stats.userCount === 0 && stats.totalDownloads === 0 && stats.orderCount === 0

  const cards = [
    {
      icon: Users,
      value: stats.userCount,
      label: 'développeurs inscrits',
      suffix: '',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Download,
      value: stats.totalDownloads,
      label: 'templates téléchargés',
      suffix: '',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      value: stats.orderCount,
      label: 'templates vendus',
      suffix: '',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      value: stats.totalRevenue,
      label: 'de revenus générés',
      prefix: '€',
      suffix: '',
      color: 'from-amber-500 to-orange-500',
    },
  ]

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
            <Users className="w-4 h-4" />
            Preuve sociale
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Une communauté qui <span className="text-gradient">croît chaque jour</span>
          </h2>
          <p className="mt-3 text-indigo-300/70 max-w-2xl mx-auto">
            {isEmpty
              ? 'Rejoignez les premiers utilisateurs et faites partie de l\'aventure.'
              : 'Des chiffres réels, en temps réel. Pas de fausses preuves sociales.'}
          </p>
        </div>

        {isEmpty ? (
          <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 px-8 py-4">
              <Users className="w-6 h-6 text-indigo-400" />
              <span className="text-lg font-semibold text-indigo-300">
                Rejoignez les premiers utilisateurs
              </span>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className="group glass-card rounded-2xl p-6 text-center relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.color} mb-4`}>
                  <card.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter
                    target={card.value}
                    prefix={card.prefix || ''}
                    suffix={card.suffix || ''}
                    duration={2000}
                  />
                </div>
                <div className="text-sm text-indigo-300/70">{card.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
