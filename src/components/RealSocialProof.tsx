'use client'

import { useState, useEffect } from 'react'
import { Users, Download, FileCode, TrendingUp, X } from 'lucide-react'

interface Stats {
  userCount: number
  templateCount: number
  totalDownloads: number
  orderCount: number
}

interface Toast {
  id: number
  message: string
}

const TOAST_MESSAGES = [
  'Nouveau membre a rejoint NeuraAPI',
  'Template acheté par un développeur',
  'Nouvelle inscription cette semaine',
  'Un utilisateur a télécharger un template',
  'Nouvel abonné newsletter',
]

export default function RealSocialProof() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.userCount === 'number' && data.userCount > 0) {
          setStats(data)
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (!stats || stats.userCount === 0) return

    let mounted = true
    const interval = setInterval(() => {
      if (!mounted) return
      const message = TOAST_MESSAGES[Math.floor(Math.random() * TOAST_MESSAGES.length)]
      const id = Date.now()
      setToasts(prev => [...prev.slice(-2), { id, message }])
      setTimeout(() => {
        if (mounted) setToasts(prev => prev.filter(t => t.id !== id))
      }, 5000)
    }, 45000)

    const initialTimeout = setTimeout(() => {
      if (!mounted) return
      const message = TOAST_MESSAGES[Math.floor(Math.random() * TOAST_MESSAGES.length)]
      const id = Date.now()
      setToasts([{ id, message }])
      setTimeout(() => {
        if (mounted) setToasts(prev => prev.filter(t => t.id !== id))
      }, 5000)
    }, 10000)

    return () => {
      mounted = false
      clearInterval(interval)
      clearTimeout(initialTimeout)
    }
  }, [stats?.userCount])

  if (!stats) return null

  const items = [
    {
      icon: Users,
      value: stats.userCount.toLocaleString('fr-FR'),
      label: 'Utilisateurs inscrits',
    },
    {
      icon: FileCode,
      value: stats.templateCount.toLocaleString('fr-FR'),
      label: 'Templates disponibles',
    },
    {
      icon: Download,
      value: stats.totalDownloads.toLocaleString('fr-FR'),
      label: 'Téléchargements',
    },
    {
      icon: TrendingUp,
      value: stats.orderCount.toLocaleString('fr-FR'),
      label: 'Commandes passées',
    },
  ]

  return (
    <>
      <div className="bg-indigo-900/20 border-y border-indigo-800/50 px-4 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-400/10">
                  <item.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{item.value}</div>
                  <div className="text-xs text-indigo-400">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 z-50 space-y-2 max-w-xs" aria-live="polite" aria-atomic="false">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="flex items-center gap-3 rounded-xl border border-indigo-800 bg-indigo-950/95 backdrop-blur-xl px-4 py-3 shadow-xl shadow-indigo-500/10 animate-slide-in-left"
            role="status"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Users className="w-4 h-4 text-green-400" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-white font-medium truncate">{toast.message}</p>
              <p className="text-xs text-indigo-400">à l&apos;instant</p>
            </div>
            <button
              onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
              className="flex-shrink-0 p-1 text-indigo-500 hover:text-white transition-colors"
              aria-label="Fermer la notification"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
