'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Sparkles, Play, Code, Search, MessageSquare, Loader2, Clock, AlertCircle } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function QuickDemo() {
  const { t: rawT } = useI18n(); const t = rawT as (key: string) => string
  const [endpoint, setEndpoint] = useState('generate')

  const EXAMPLE_PROMPTS: Record<string, string> = useMemo(() => ({
    generate: t('demoExampleGenerate'),
    chat: t('demoExampleChat'),
    seo: t('demoExampleSeo'),
    code: t('demoExampleCode'),
  }), [t])

  const [prompt, setPrompt] = useState(EXAMPLE_PROMPTS.generate)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [responseTime, setResponseTime] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const ENDPOINTS = useMemo(() => [
    { value: 'generate', label: t('demoEndpointGenerate'), icon: Sparkles },
    { value: 'chat', label: t('demoEndpointChat'), icon: MessageSquare },
    { value: 'seo', label: t('demoEndpointSeo'), icon: Search },
    { value: 'code', label: t('demoEndpointCode'), icon: Code },
  ], [t])

  const handleEndpointChange = (value: string) => {
    setEndpoint(value)
    setPrompt(EXAMPLE_PROMPTS[value] || '')
    setResult(null)
    setError(null)
    setResponseTime(null)
  }

  const handleTest = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResult(null)
    setError(null)
    setResponseTime(null)

    const start = performance.now()

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, endpoint }),
      })

      const elapsed = Math.round(performance.now() - start)
      setResponseTime(elapsed)

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || t('demoErrorDefault'))
        return
      }

      const data = await res.json()
      setResult(data.text || data.content || data.result || JSON.stringify(data, null, 2))
    } catch (err) {
      console.error('Demo API call failed:', err)
      setResponseTime(Math.round(performance.now() - start))
      setError(t('demoErrorNetwork'))
    } finally {
      setLoading(false)
    }
  }

  const selectedEp = ENDPOINTS.find(e => e.value === endpoint)

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-indigo-300 mb-4 backdrop-blur-sm">
            <Play className="w-4 h-4" />
            {t('demoInteractive')}
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t('demoTryApiLive')} <span className="text-gradient">API</span>
          </h2>
          <p className="mt-3 text-indigo-300/70">
            {t('demoTryApiSubtitle')}
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <div>
              <label htmlFor="demo-endpoint-select" className="block text-sm font-medium text-indigo-300/80 mb-2">
                {t('demoEndpointLabel')}
              </label>
              <div className="relative">
                <select
                  id="demo-endpoint-select"
                  value={endpoint}
                  onChange={e => handleEndpointChange(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-10 text-sm text-white backdrop-blur-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                >
                  {ENDPOINTS.map(ep => (
                    <option key={ep.value} value={ep.value} className="bg-[#0f0a2e] text-white">
                      {ep.label}
                    </option>
                  ))}
                </select>
                {selectedEp && (
                  <selectedEp.icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400 pointer-events-none" aria-hidden="true" />
                )}
              </div>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleTest}
                disabled={loading || !prompt.trim()}
                aria-label="Tester l'API"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-105"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                {t('demoTestApi')}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="demo-prompt-textarea" className="block text-sm font-medium text-indigo-300/80 mb-2">
              {t('demoPromptLabel')}
            </label>
            <textarea
              id="demo-prompt-textarea"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-indigo-400/50 backdrop-blur-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
              placeholder={t('demoPromptPlaceholder')}
            />
          </div>

          {(result || error || loading) && (
            <div className="mt-4 rounded-xl border border-white/10 bg-black/30 overflow-hidden">
              {responseTime !== null && (
                <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                  <div className="flex items-center gap-2 text-xs text-indigo-400/70">
                    <Clock className="w-3 h-3" />
                    {t('demoResponseIn').replace('{ms}', String(responseTime))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400/80">Live</span>
                  </div>
                </div>
              )}

              {loading && !result && !error && (
                <div className="p-6 flex items-center justify-center gap-3">
                  <Loader2 className="w-5 h-5 text-indigo-400 animate-spin" />
                  <span className="text-sm text-indigo-300/70">{t('demoCallingApi')}</span>
                </div>
              )}

              {error && (
                <div className="p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-amber-300">{error}</p>
                    <Link href="/register" className="text-xs text-indigo-400 hover:text-indigo-300 mt-1 inline-block underline">
                      {t('demoCreateAccount')}
                    </Link>
                  </div>
                </div>
              )}

              {result && (
                <div className="p-4">
                  <pre className="text-sm text-indigo-200 whitespace-pre-wrap font-mono overflow-x-auto">
                    {result}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
