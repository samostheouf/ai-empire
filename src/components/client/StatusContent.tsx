'use client'

import { useState, useEffect, useCallback } from 'react'
import { Activity, CheckCircle, AlertTriangle, XCircle, RefreshCw } from 'lucide-react'

interface MonitoringData {
  status: string
  timestamp: string
  version: string
  environment: string
  services: Record<string, { status: string; provider?: string }>
}

const STATUS_ICONS = {
  ok: <CheckCircle className="w-5 h-5 text-green-400" />,
  error: <XCircle className="w-5 h-5 text-red-400" />,
  demo: <AlertTriangle className="w-5 h-5 text-yellow-400" />,
  unknown: <Activity className="w-5 h-5 text-gray-400" />,
}

function makeFallbackData(): MonitoringData {
  return {
    status: 'unhealthy',
    timestamp: new Date().toISOString(),
    version: 'unknown',
    environment: 'unknown',
    services: {
      frontend: { status: 'error' },
      database: { status: 'unknown' },
      ai: { status: 'unknown' },
    },
  }
}

export default function StatusContent() {
  const [data, setData] = useState<MonitoringData | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  const fetchStatus = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/monitoring')
      const json = await res.json()
      setData(json)
      setLastChecked(new Date())
    } catch {
      setData(makeFallbackData())
      setLastChecked(new Date())
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchStatus()
    const interval = setInterval(() => {
      void fetchStatus()
    }, 60000)
    return () => clearInterval(interval)
  }, [fetchStatus])

  const overallStatus = data?.status || 'unknown'

  return (
    <>
      <div className="text-center">
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm border mb-8 ${
          overallStatus === 'healthy'
            ? 'bg-green-900/30 text-green-300 border-green-800/50'
            : overallStatus === 'degraded'
            ? 'bg-yellow-900/30 text-yellow-300 border-yellow-800/50'
            : 'bg-red-900/30 text-red-300 border-red-800/50'
        }`}>
          {STATUS_ICONS[overallStatus === 'healthy' ? 'ok' : overallStatus === 'degraded' ? 'demo' : 'error']}
          Système {overallStatus === 'healthy' ? 'opérationnel' : overallStatus === 'degraded' ? 'dégradé' : 'en panne'}
        </div>
        <h1 className="text-4xl font-bold text-white">NeuraAPI Status</h1>
        <p className="mt-4 text-indigo-300">
          Dernière vérification : {lastChecked ? lastChecked.toLocaleTimeString('fr-FR') : 'Chargement...'}
        </p>
        <button
          onClick={fetchStatus}
          disabled={loading}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-indigo-700 px-4 py-2 text-sm text-indigo-200 hover:bg-indigo-900/50 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Actualiser
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {data && Object.entries(data.services).map(([key, service]) => (
          <div key={key} className="flex items-center justify-between rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-5">
            <div className="flex items-center gap-3">
              {STATUS_ICONS[service.status as keyof typeof STATUS_ICONS] || STATUS_ICONS.unknown}
              <div>
                <p className="font-semibold text-white capitalize">
                  {key === 'ai' ? 'AI API' : key}
                </p>
                {service.provider && (
                  <p className="text-xs text-indigo-400">Provider: {service.provider}</p>
                )}
              </div>
            </div>
            <span className={`text-sm font-medium ${
              service.status === 'ok' ? 'text-green-400' : service.status === 'demo' ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {service.status === 'ok' ? 'Opérationnel' : service.status === 'demo' ? 'Mode démo' : 'Erreur'}
            </span>
          </div>
        ))}

        <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-5 mt-6">
          <h2 className="font-semibold text-white mb-3">Informations</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-indigo-400">Version</p>
              <p className="text-white">{data?.version || '—'}</p>
            </div>
            <div>
              <p className="text-indigo-400">Environnement</p>
              <p className="text-white">{data?.environment || '—'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
