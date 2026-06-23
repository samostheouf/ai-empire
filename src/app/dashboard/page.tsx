'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { formatPrice } from '@/lib/utils'
import { Package, Key, CreditCard } from 'lucide-react'
import type { Order, ApiUser } from '@/types'
import { useI18n } from '@/i18n'

export default function DashboardPage() {
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [orders, setOrders] = useState<Order[]>([])
  const [apiKey, setApiKey] = useState<ApiUser | null>(null)
  const [loading, setLoading] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const urlEmail = searchParams.get('email')
    if (urlEmail) setEmail(urlEmail)
  }, [searchParams])

  const fetchData = async () => {
    if (!email) return
    setLoading(true)
    try {
      const storedKey = typeof window !== 'undefined' ? localStorage.getItem('neura_api_key') : null
      const headers: Record<string, string> = {}
      if (storedKey) headers['x-api-key'] = storedKey
      const res = await fetch(`/api/user?email=${encodeURIComponent(email)}`, { headers })
      const data = await res.json()
      setOrders(data.orders || [])
      setApiKey(data.user)
    } catch {
      // Dashboard data fetch failed
    }
    setLoading(false)
  }

  useEffect(() => {
    if (email) fetchData()
  }, [email])

  if (!email) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <Package className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">{t('dashboardTitle')}</h1>
          <p className="text-gray-600 mb-6">{t('dashboardDesc')}</p>
          <form onSubmit={(e) => { e.preventDefault(); setEmail((e.target as HTMLFormElement).email.value) }}>
            <input type="email" name="email" placeholder={t('pricingFormEmailPlaceholder')} required aria-label={t('pricingFormEmailAria')}
              className="w-full px-4 py-3 border rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <button type="submit" aria-label={t('dashboardAccessAria')} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-500 transition-colors">
              {t('dashboardAccess')}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">{t('dashboardTitle')}</h1>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4"><Key className="w-6 h-6 text-indigo-600" /><h2 className="text-xl font-semibold">{t('dashboardApiKey')}</h2></div>
            {apiKey ? (
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">{apiKey.apiKey}</div>
            ) : <p className="text-gray-500">{t('dashboardNoApiKey')}</p>}
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4"><CreditCard className="w-6 h-6 text-indigo-600" /><h2 className="text-xl font-semibold">{t('dashboardCredits')}</h2></div>
            <p className="text-3xl font-bold text-indigo-600">{apiKey?.credits || 0}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4"><Package className="w-6 h-6 text-indigo-600" /><h2 className="text-xl font-semibold">{t('dashboardOrders')}</h2></div>
          {orders.length === 0 ? <p className="text-gray-500">{t('dashboardNoOrders')}</p> : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div><p className="font-medium">{order.template?.name || 'Template'}</p></div>
                  <div className="text-right"><p className="font-bold text-indigo-600">{formatPrice(order.amount)}</p></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
