'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/i18n'
import { Users, ShoppingCart, TrendingUp, Eye, MousePointer, BarChart3 } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

interface StatsData {
  totalPageViews: number
  uniqueVisitors: number
  funnel: {
    visitors: number
    registerStarts: number
    registerCompletes: number
    checkoutStarts: number
    checkoutCompletes: number
    conversionRate: string
  }
  topPages: Array<{ page: string; views: number; uniqueVisitors: number }>
  avgTimeOnPage: number
  timeDistribution: Record<string, number>
  scrollDepths: Record<number, number>
  ctaClickRates: Record<string, number>
  deviceBreakdown: { devices: Record<string, number>; browsers: Record<string, number> }
  utmTraffic: { source: Record<string, number>; medium: Record<string, number>; campaign: Record<string, number> }
  last7Days: Array<{ date: string; visitors: number; conversions: number }>
  totalEvents: number
}

export default function AnalyticsPage() {
  const { t, locale } = useI18n()
  const [data, setData] = useState<StatsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [period, setPeriod] = useState('7d')
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 15000)
    return () => clearInterval(interval)
  }, [period])

  const fetchStats = async () => {
    if (!data) setLoading(true)
    const days = period === '30d' ? 30 : period === '90d' ? 90 : 7
    const from = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    const to = new Date().toISOString().split('T')[0]

    try {
      const sessionRes = await fetch('/api/auth/session')
      const session = await sessionRes.json()
      const apiKey = session?.apiKey

      const res = await fetch(`/api/analytics/stats?from=${from}&to=${to}`, {
        headers: apiKey ? { 'X-Api-Key': apiKey } : {},
      })
      const result = await res.json()
      setData(result)
      setLastUpdated(new Date())
    } catch {
      // Analytics stats fetch failed
    }    setLoading(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">{t('adminAnalyticsLoading')}</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-gray-400">{t('adminAnalyticsError')}</p>
      </div>
    )
  }

  const todayVisitors = data.last7Days[data.last7Days.length - 1]?.visitors || 0
  const todayConversions = data.last7Days[data.last7Days.length - 1]?.conversions || 0
  const yesterdayVisitors = data.last7Days[data.last7Days.length - 2]?.visitors || 1

  const funnelSteps = [
    { label: t('adminAnalyticsFunnelVisitors'), value: data.funnel.visitors, color: 'bg-indigo-500' },
    { label: t('adminAnalyticsFunnelRegister'), value: data.funnel.registerStarts, color: 'bg-purple-500' },
    { label: t('adminAnalyticsFunnelCheckout'), value: data.funnel.checkoutStarts, color: 'bg-pink-500' },
    { label: t('adminAnalyticsFunnelPurchase'), value: data.funnel.checkoutCompletes, color: 'bg-green-500' },
  ]
  const maxFunnel = Math.max(...funnelSteps.map(s => s.value), 1)

  const statCards = [
    {
      label: t('adminAnalyticsVisitorsToday'),
      value: todayVisitors,
      icon: Users,
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      change: `${Math.round(((todayVisitors - yesterdayVisitors) / Math.max(yesterdayVisitors, 1)) * 100)}% ${t('adminAnalyticsVsYesterday')}`,
    },
    {
      label: t('adminAnalyticsConversionsToday'),
      value: todayConversions,
      icon: ShoppingCart,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      change: `${data.funnel.conversionRate} ${t('adminAnalyticsTotalRate')}`,
    },
    {
      label: t('adminAnalyticsTotalPageViews'),
      value: data.totalPageViews.toLocaleString(),
      icon: Eye,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      change: `${data.totalEvents} ${t('adminAnalyticsEvents')}`,
    },
    {
      label: t('adminAnalyticsConversionRate'),
      value: data.funnel.conversionRate,
      icon: TrendingUp,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      change: `${data.funnel.checkoutCompletes} ${t('adminAnalyticsPurchases')}`,
    },
  ]

  const maxScroll = Math.max(...Object.values(data.scrollDepths), 1)
  const maxTime = Math.max(...Object.values(data.timeDistribution), 1)

  return (
    <div className="min-h-screen bg-gray-950 p-4 sm:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">{t('adminAnalyticsTitle')}</h1>
          <p className="text-gray-400 mt-1">{t('adminAnalyticsSubtitle')}</p>
          {lastUpdated && (
            <p className="text-xs text-gray-600 mt-1">
              {t('adminAnalyticsLastUpdate')} : {lastUpdated.toLocaleTimeString(locale)} · {t('adminAnalyticsAutoRefresh')}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          {['7d', '30d', '90d'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                period === p
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {p === '7d' ? t('adminAnalytics7days') : p === '30d' ? t('adminAnalytics30days') : t('adminAnalytics90days')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => (
          <div key={card.label} className={`bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border ${card.border}`}>
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <span className="text-xs text-gray-500">{card.change}</span>
            </div>
            <p className="text-2xl font-bold text-white">{card.value}</p>
            <p className="text-sm text-gray-400 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
            {t('adminAnalyticsConversionFunnel')}
          </h2>
          <div className="space-y-3">
            {funnelSteps.map((step, i) => (
              <div key={step.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-300">{step.label}</span>
                  <span className="text-sm font-medium text-white">{step.value}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-5 overflow-hidden">
                  <div
                    className={`${step.color} h-full rounded-full transition-all duration-700 flex items-center justify-end pr-2`}
                    style={{ width: `${Math.max((step.value / maxFunnel) * 100, 4)}%` }}
                  >
                    {i > 0 && funnelSteps[i - 1].value > 0 && (
                      <span className="text-[10px] text-white/80 font-medium">
                        {Math.round((step.value / funnelSteps[i - 1].value) * 100)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <MousePointer className="w-5 h-5 text-green-400" />
            {t('adminAnalyticsScrollDepth')}
          </h2>
          <div className="space-y-3">
            {[25, 50, 75, 100].map((depth) => (
              <div key={depth}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-300">{depth}%</span>
                  <span className="text-sm font-medium text-white">{data.scrollDepths[depth] || 0}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-700"
                    style={{ width: `${Math.max(((data.scrollDepths[depth] || 0) / maxScroll) * 100, 2)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4">{t('adminAnalyticsTopPages')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500 uppercase border-b border-gray-800">
                  <th className="pb-3 pr-4">{t('adminAnalyticsPage')}</th>
                  <th className="pb-3 pr-4 text-right">{t('adminAnalyticsViews')}</th>
                  <th className="pb-3 text-right">{t('adminAnalyticsUniqueVisitors')}</th>
                </tr>
              </thead>
              <tbody>
                {data.topPages.slice(0, 8).map((page) => (
                  <tr key={page.page} className="border-b border-gray-800/50">
                    <td className="py-3 pr-4">
                      <span className="text-sm text-indigo-400 font-mono">{page.page}</span>
                    </td>
                    <td className="py-3 pr-4 text-right">
                      <span className="text-sm text-white">{page.views}</span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="text-sm text-gray-400">{page.uniqueVisitors}</span>
                    </td>
                  </tr>
                ))}
                {data.topPages.length === 0 && (
                  <tr><td colSpan={3} className="py-8 text-center text-gray-500">{t('adminAnalyticsNoData')}</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4">{t('adminAnalyticsTimeOnPage')}</h2>
          <div className="space-y-3">
            {Object.entries(data.timeDistribution).map(([range, count]) => (
              <div key={range}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-300">{range}</span>
                  <span className="text-sm font-medium text-white">{count}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-amber-500 h-full rounded-full transition-all duration-700"
                    style={{ width: `${Math.max((count / maxTime) * 100, 2)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4">{t('adminAnalyticsCTAClicks')}</h2>
          <div className="space-y-2">
            {Object.entries(data.ctaClickRates)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 6)
              .map(([label, count]) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-gray-800/50">
                  <span className="text-sm text-gray-300 truncate max-w-[150px]">{label}</span>
                  <span className="text-sm font-medium text-white">{count}</span>
                </div>
              ))}
            {Object.keys(data.ctaClickRates).length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">{t('adminAnalyticsNoCTAClicks')}</p>
            )}
          </div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4">{t('adminAnalyticsDevices')}</h2>
          <div className="space-y-3">
            {Object.entries(data.deviceBreakdown.devices)
              .sort(([, a], [, b]) => b - a)
              .map(([device, count]) => {
                const total = Object.values(data.deviceBreakdown.devices).reduce((a, b) => a + b, 0) || 1
                return (
                  <div key={device}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-300">{device}</span>
                      <span className="text-sm text-white">{Math.round((count / total) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${(count / total) * 100}%` }} />
                    </div>
                  </div>
                )
              })}
          </div>
          <h3 className="text-sm font-semibold text-gray-400 mt-5 mb-3">{t('adminAnalyticsBrowsers')}</h3>
          <div className="space-y-2">
            {Object.entries(data.deviceBreakdown.browsers)
              .sort(([, a], [, b]) => b - a)
              .map(([browser, count]) => (
                <div key={browser} className="flex items-center justify-between py-1.5">
                  <span className="text-sm text-gray-300">{browser}</span>
                  <span className="text-sm text-white">{count}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-lg font-semibold text-white mb-4">{t('adminAnalyticsUTMTraffic')}</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">{t('adminAnalyticsSource')}</h3>
              {Object.entries(data.utmTraffic.source)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 4)
                .map(([source, count]) => (
                  <div key={source} className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-gray-300">{source}</span>
                    <span className="text-sm text-white">{count}</span>
                  </div>
                ))}
              {Object.keys(data.utmTraffic.source).length === 0 && (
                <p className="text-xs text-gray-600">{t('adminAnalyticsNoSource')}</p>
              )}
            </div>
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">{t('adminAnalyticsMedium')}</h3>
              {Object.entries(data.utmTraffic.medium)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 4)
                .map(([medium, count]) => (
                  <div key={medium} className="flex items-center justify-between py-1.5">
                    <span className="text-sm text-gray-300">{medium}</span>
                    <span className="text-sm text-white">{count}</span>
                  </div>
                ))}
              {Object.keys(data.utmTraffic.medium).length === 0 && (
                <p className="text-xs text-gray-600">{t('adminAnalyticsNoMedium')}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
        <h2 className="text-lg font-semibold text-white mb-4">{t('adminAnalyticsTrend')}</h2>
        <div className="flex items-end gap-2 h-32">
          {data.last7Days.map((day) => {
            const maxV = Math.max(...data.last7Days.map(d => d.visitors), 1)
            const height = (day.visitors / maxV) * 100
            return (
              <div key={day.date} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-gray-500">{day.conversions}</span>
                <div className="w-full relative" style={{ height: `${Math.max(height, 4)}%` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-md opacity-80" />
                  {day.conversions > 0 && (
                    <div className="absolute bottom-0 inset-x-0 bg-green-500 rounded-t-sm" style={{ height: `${Math.min((day.conversions / Math.max(day.visitors, 1)) * 100, 100)}%` }} />
                  )}
                </div>
                <span className="text-[10px] text-gray-500">
                  {new Date(day.date).toLocaleDateString(locale, { weekday: 'short' })}
                </span>
              </div>
            )
          })}
        </div>
        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-indigo-500 rounded-sm" />
            <span>{t('adminAnalyticsVisitorsLegend')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 bg-green-500 rounded-sm" />
            <span>{t('adminAnalyticsConversionsLegend')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
