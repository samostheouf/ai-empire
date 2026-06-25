'use client'

import { useState, useEffect } from 'react'
import { formatPrice } from '@/lib/utils'
import { useI18n } from '@/i18n'
import { Users, ShoppingCart, FileCode, TrendingUp, ExternalLink, RefreshCw } from 'lucide-react'

export default function AdminDashboard() {
  const { t } = useI18n()
  const [stats, setStats] = useState({ users: 0, orders: 0, templates: 0, revenue: 0 })
  const [syncing, setSyncing] = useState(false)
  const [syncMessage, setSyncMessage] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {})
  }, [])

  const statCards = [
    { label: t('adminStatUsers'), value: stats.users, icon: Users, color: 'text-blue-500' },
    { label: t('adminStatOrders'), value: stats.orders, icon: ShoppingCart, color: 'text-green-500' },
    { label: t('adminStatTemplates'), value: stats.templates, icon: FileCode, color: 'text-purple-500' },
    { label: t('adminStatRevenue'), value: formatPrice(stats.revenue), icon: TrendingUp, color: 'text-yellow-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">{t('adminDashboardTitle')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <div><p className="text-sm text-gray-500">{stat.label}</p><p className="text-2xl font-bold">{stat.value}</p></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Stripe</h2>
        <div className="flex items-center gap-4">
          <a
            href="https://dashboard.stripe.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('adminStripeDashboardLabel')}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-500 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Stripe Dashboard
          </a>
          <button
            onClick={async () => {
              setSyncing(true)
              setSyncMessage(null)
              try {
                const res = await fetch('/api/admin/stripe-products', { method: 'POST' })
                const data = await res.json()
                setSyncMessage(res.ok ? t('adminStripeSyncSuccess') : data.error ?? t('adminStripeSyncError'))
              } catch {
                setSyncMessage(t('adminStripeSyncError'))
              } finally {
                setSyncing(false)
              }
            }}
            disabled={syncing}
            aria-label={t('adminStripeSyncLabel')}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-all"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
            {syncing ? t('adminStripeSyncing') : t('adminStripeSync')}
          </button>
        </div>
        {syncMessage && (
          <p className="mt-3 text-sm text-gray-600" role="status">{syncMessage}</p>
        )}
      </div>
    </div>
  )
}
