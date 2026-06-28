'use client'

import { useState, useEffect } from 'react'
import { Activity, CheckCircle, AlertTriangle, XCircle, RefreshCw, BarChart3, Calendar, ChevronDown } from 'lucide-react'
import { useI18n } from '@/i18n'

interface MetricStats {
  count: number
  good: number
  needsImprovement: number
  poor: number
  p50: number
  p95: number
}

interface VitalsData {
  period: string
  from: string
  to: string
  totalSamples: number
  metrics: Record<string, MetricStats>
  topPages: Array<{ page: string; metrics: Record<string, number> }>
  score: number
  lastUpdated: string
}

function getRatingIcon(ratio: number) {
  if (ratio >= 0.9) return <CheckCircle className="w-5 h-5 text-green-400" />
  if (ratio >= 0.7) return <AlertTriangle className="w-5 h-5 text-yellow-400" />
  return <XCircle className="w-5 h-5 text-red-400" />
}

function getScoreColor(score: number) {
  if (score >= 90) return 'text-green-400 border-green-800/50 bg-green-900/20'
  if (score >= 70) return 'text-yellow-400 border-yellow-800/50 bg-yellow-900/20'
  return 'text-red-400 border-red-800/50 bg-red-900/20'
}

function getBarColor(ratio: number) {
  if (ratio >= 0.9) return 'bg-green-500'
  if (ratio >= 0.7) return 'bg-yellow-500'
  return 'bg-red-500'
}

export default function CWVDashboard() {
  const { t, locale } = useI18n()
  const [data, setData] = useState<VitalsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [range, setRange] = useState('24h')
  const [customFrom, setCustomFrom] = useState('')
  const [customTo, setCustomTo] = useState('')
  const [showCustom, setShowCustom] = useState(false)

  const METRIC_LABELS: Record<string, { name: string; unit: string; target: string; description: string }> = {
    LCP: { name: 'Largest Contentful Paint', unit: 'ms', target: '< 2500ms', description: t('webVitalsLcp') },
    INP: { name: 'Interaction to Next Paint', unit: 'ms', target: '< 200ms', description: t('webVitalsInp') },
    CLS: { name: 'Cumulative Layout Shift', unit: '', target: '< 0.1', description: t('webVitalsCls') },
    TTFB: { name: 'Time to First Byte', unit: 'ms', target: '< 800ms', description: t('webVitalsTtfb') },
    FCP: { name: 'First Contentful Paint', unit: 'ms', target: '< 1800ms', description: t('webVitalsFcp') },
  }

  const RANGES = [
    { label: t('webVitalsRange1h'), value: '1h' },
    { label: t('webVitalsRange6h'), value: '6h' },
    { label: t('webVitalsRange24h'), value: '24h' },
    { label: t('webVitalsRange7d'), value: '7d' },
    { label: t('webVitalsRange30d'), value: '30d' },
  ]

  const fetchData = async () => {
    setLoading(true)
    try {
      let url = `/api/analytics/web-vitals?range=${range}`
      if (showCustom && customFrom && customTo) {
        const from = new Date(customFrom).getTime()
        const to = new Date(customTo).getTime()
        url = `/api/analytics/web-vitals?from=${from}&to=${to}`
      }
      const res = await fetch(url)
      if (res.ok) setData(await res.json())
    } catch (err) {
      console.error('Failed to fetch web vitals data:', err)
    }
    setLoading(false)
  }

  useEffect(() => { fetchData() }, [range, showCustom, customFrom, customTo])

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-indigo-400" />
                Core Web Vitals
              </h1>
              <p className="text-indigo-300 mt-1">
                Performance monitoring — {data?.period || '24h'}
                {data?.from && data?.to && (
                  <span className="ml-2 text-indigo-400">
                    {new Date(data.from).toLocaleString(locale)} → {new Date(data.to).toLocaleString(locale)}
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={fetchData} disabled={loading} className="flex items-center gap-2 rounded-lg border border-indigo-700 px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-900/50 transition-colors">
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                {t('webVitalsRefresh')}
              </button>
            </div>
          </div>

          {/* Date Range Filter */}
          <div className="mb-8 rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-white">{t('webVitalsPeriod')}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {RANGES.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => { setRange(r.value); setShowCustom(false) }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      range === r.value && !showCustom
                        ? 'bg-indigo-600 text-white'
                        : 'bg-indigo-950/50 text-indigo-300 hover:bg-indigo-800/50'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
                <button
                  onClick={() => setShowCustom(!showCustom)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                    showCustom
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-950/50 text-indigo-300 hover:bg-indigo-800/50'
                  }`}
                >
                  {t('webVitalsCustom')}
                  <ChevronDown className={`w-3 h-3 transition-transform ${showCustom ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {showCustom && (
                <div className="flex items-center gap-2">
                  <input
                    type="datetime-local"
                    value={customFrom}
                    onChange={(e) => setCustomFrom(e.target.value)}
                    className="rounded-lg border border-indigo-800 bg-indigo-950/50 px-3 py-1.5 text-xs text-white focus:ring-1 focus:ring-indigo-500"
                  />
                  <span className="text-indigo-400 text-xs">→</span>
                  <input
                    type="datetime-local"
                    value={customTo}
                    onChange={(e) => setCustomTo(e.target.value)}
                    className="rounded-lg border border-indigo-800 bg-indigo-950/50 px-3 py-1.5 text-xs text-white focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Overall Score */}
          <div className="mb-8">
            <div className={`inline-flex items-center gap-3 rounded-2xl border p-6 ${getScoreColor(data?.score || 0)}`}>
              <Activity className="h-8 w-8" />
              <div>
                <p className="text-3xl font-bold">{data?.score || 0}/100</p>
                <p className="text-sm opacity-80">{t('webVitalsScore')}</p>
              </div>
            </div>
            <p className="text-sm text-indigo-400 mt-2">
              {data?.totalSamples || 0} {t('webVitalsSamples')}
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {Object.entries(METRIC_LABELS).map(([key, info]) => {
              const stats = data?.metrics?.[key]
              const goodRatio = stats ? stats.good / stats.count : 0

              return (
                <div key={key} className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {stats && getRatingIcon(goodRatio)}
                      <span className="font-mono text-sm font-bold text-white">{key}</span>
                    </div>
                    <span className="text-xs text-indigo-400">{info.target}</span>
                  </div>
                  <h3 className="text-sm text-indigo-200 mb-1">{info.name}</h3>
                  <p className="text-xs text-indigo-400 mb-3">{info.description}</p>
                  {stats ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-indigo-400">{t('webVitalsGood')}</span>
                        <span className={getScoreColor(goodRatio >= 0.9 ? 90 : goodRatio >= 0.7 ? 70 : 0).split(' ')[0]}>
                          {Math.round(goodRatio * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-indigo-950 rounded-full h-2">
                        <div className={`${getBarColor(goodRatio)} h-2 rounded-full transition-all duration-500`} style={{ width: `${goodRatio * 100}%` }} />
                      </div>
                      <div className="flex justify-between text-xs text-indigo-400">
                        <span>P50: {stats.p50}{info.unit}</span>
                        <span>P95: {stats.p95}{info.unit}</span>
                      </div>
                      <p className="text-xs text-indigo-500">{stats.count} {t('webVitalsSamples')}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-indigo-500 italic">{t('webVitalsNoData')}</p>
                  )}
                </div>
              )
            })}
          </div>

          {/* Top Pages */}
          {data?.topPages && data.topPages.length > 0 && (
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">{t('webVitalsTopPages')}</h2>
              <div className="space-y-3">
                {data.topPages.map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-indigo-950/50 p-3">
                    <code className="text-sm text-indigo-200 font-mono">{item.page}</code>
                    <div className="flex gap-3 text-xs text-indigo-400">
                      {Object.entries(item.metrics).map(([name, count]) => (
                        <span key={name}>{name}: {count}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Setup Guide */}
          <div className="mt-8 rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
            <h2 className="text-lg font-semibold text-white mb-3">{t('webVitalsHowItWorks')}</h2>
            <div className="text-sm text-indigo-300 space-y-2">
              <p>1. {t('webVitalsStep1')}</p>
              <p>2. {t('webVitalsStep2')}</p>
              <p>3. {t('webVitalsStep3')}</p>
              <p>4. {t('webVitalsStep4')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
