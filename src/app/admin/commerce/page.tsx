'use client'

import { useState, useEffect } from 'react'
import { formatPrice } from '@/lib/utils'
import { useI18n } from '@/i18n'
import { Eye, Users, Activity, TrendingUp, DollarSign, RefreshCw } from 'lucide-react'

interface CommerceStats {
  totalVisitors: number
  totalRegistrations: number
  totalApiCalls: number
  successfulPayments: number
  revenue: number
  conversionRate: string
}

export default function CommerceDashboard() {
  const { t } = useI18n()
  const [stats, setStats] = useState<CommerceStats>({
    totalVisitors: 0,
    totalRegistrations: 0,
    totalApiCalls: 0,
    successfulPayments: 0,
    revenue: 0,
    conversionRate: '0.00',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/commerce')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const statCards = [
    { label: t('adminCommerceVisitors'), value: stats.totalVisitors.toLocaleString(), icon: Eye, color: 'text-blue-500' },
    { label: t('adminCommerceRegistrations'), value: stats.totalRegistrations.toLocaleString(), icon: Users, color: 'text-green-500' },
    { label: t('adminCommerceApiCalls'), value: stats.totalApiCalls.toLocaleString(), icon: Activity, color: 'text-purple-500' },
    { label: t('adminCommerceConversion'), value: `${stats.conversionRate}%`, icon: TrendingUp, color: 'text-orange-500' },
    { label: t('adminCommercePayments'), value: stats.successfulPayments.toLocaleString(), icon: DollarSign, color: 'text-emerald-500' },
    { label: t('adminCommerceRevenue'), value: formatPrice(stats.revenue), icon: DollarSign, color: 'text-yellow-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">{t('adminCommerceTitle')}</h1>
        {loading && <RefreshCw className="w-5 h-5 text-gray-400 animate-spin" />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Agents Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">AI Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { emoji: '🎧', name: 'Support', price: '€49', description: '24/7 customer support agent' },
            { emoji: '🎯', name: 'Lead Gen', price: '€79', description: 'Automated lead generation' },
            { emoji: '✍️', name: 'Content', price: '€59', description: 'Content creation & copywriting' },
            { emoji: '💰', name: 'Sales', price: '€69', description: 'AI-powered sales assistant' },
            { emoji: '🗣️', name: 'Voice', price: '€89', description: 'Voice-enabled interactions' },
            { emoji: '⚡', name: 'Automation', price: '€99', description: 'Workflow automation agent' },
          ].map((agent) => (
            <div key={agent.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{agent.emoji}</span>
                <div>
                  <p className="text-lg font-semibold">{agent.name}</p>
                  <p className="text-sm font-bold text-green-600">{agent.price}/mo</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3">{agent.description}</p>
              <a href="/agents" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                View Details →
              </a>
            </div>
          ))}
        </div>

        {/* Agent Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: 'Total Agent Signups', value: '0' },
            { label: 'Active Subscriptions', value: '0' },
            { label: 'MRR from Agents', value: '€0' },
            { label: 'Conversion Rate', value: '0%' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4">
          <a href="/agents" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View /agents page
          </a>
          <button className="bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 transition-colors">
            Email sequence status
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 transition-colors">
            Social posts scheduled
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">{t('adminCommerceSummary')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">{t('adminCommerceFunnel')}</p>
            <p className="text-lg font-semibold mt-1">
              {stats.totalRegistrations} / {stats.totalVisitors}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">{t('adminCommerceAvgRevenuePerUser')}</p>
            <p className="text-lg font-semibold mt-1">
              {stats.totalRegistrations > 0
                ? formatPrice(Math.round(stats.revenue / stats.totalRegistrations))
                : '€0'}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">{t('adminCommerceAvgCallsPerUser')}</p>
            <p className="text-lg font-semibold mt-1">
              {stats.totalRegistrations > 0
                ? Math.round(stats.totalApiCalls / stats.totalRegistrations).toLocaleString()
                : '0'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
