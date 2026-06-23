'use client'

import { useState } from 'react'
import { Check, X, History, Twitter, ExternalLink, Copy, CheckCircle } from 'lucide-react'

interface PlatformStatus {
  name: string
  configured: boolean
  lastPost?: string
  status: 'ready' | 'error' | 'pending'
}

export default function SocialDashboard() {
  const [platforms, setPlatforms] = useState<PlatformStatus[]>([
    { name: 'Twitter/X', configured: false, status: 'pending' },
    { name: 'Reddit', configured: false, status: 'pending' },
    { name: 'LinkedIn', configured: false, status: 'pending' },
    { name: 'Product Hunt', configured: false, status: 'pending' },
  ])
  const [activeTab, setActiveTab] = useState<'status' | 'content' | 'schedule' | 'history'>('status')
  const [posting, setPosting] = useState<string | null>(null)
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  const contentFiles = [
    { name: 'Product Hunt Description', file: 'product-hunt-desc.txt', platform: 'Product Hunt' },
    { name: 'Maker Comment', file: 'maker-comment.txt', platform: 'Product Hunt' },
    { name: 'Twitter Thread (5 tweets)', file: 'twitter-thread.txt', platform: 'Twitter' },
    { name: 'LinkedIn Post', file: 'linkedin-post.txt', platform: 'LinkedIn' },
    { name: 'Reddit r/SaaS', file: 'reddit-post.txt', platform: 'Reddit' },
    { name: 'Reddit r/webdev', file: 'reddit-webdev.txt', platform: 'Reddit' },
  ]

  const schedule = [
    { time: '09:00', action: 'Créer le produit Product Hunt', platform: 'PH', status: 'pending' },
    { time: '09:05', action: 'Poster le maker comment', platform: 'PH', status: 'pending' },
    { time: '09:10', action: 'Premier tweet', platform: 'Twitter', status: 'pending' },
    { time: '09:15', action: 'Tweets 2-5 (thread)', platform: 'Twitter', status: 'pending' },
    { time: '10:00', action: 'LinkedIn post', platform: 'LinkedIn', status: 'pending' },
    { time: '11:00', action: 'Reddit r/SaaS', platform: 'Reddit', status: 'pending' },
    { time: '11:05', action: 'Reddit r/webdev', platform: 'Reddit', status: 'pending' },
  ]

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Social Media Dashboard</h1>
            <p className="text-indigo-300 mt-1">Gérez votre lancement Product Hunt</p>
          </div>
          <a
            href="https://www.producthunt.com/posts/new"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-400 transition-colors flex items-center gap-2"
          >
            🚀 Lancer sur Product Hunt
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-indigo-800/50 pb-4">
          {(['status', 'content', 'schedule', 'history'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:bg-indigo-900/50'
              }`}
            >
              {tab === 'status' && '🔑 Statut'}
              {tab === 'content' && '📝 Contenu'}
              {tab === 'schedule' && '📅 Planning'}
              {tab === 'history' && '📊 Historique'}
            </button>
          ))}
        </div>

        {/* Status Tab */}
        {activeTab === 'status' && (
          <div className="grid gap-6 sm:grid-cols-2">
            {platforms.map(p => (
              <div key={p.name} className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    p.configured ? 'bg-green-900/30 text-green-300 border border-green-800/50' : 'bg-red-900/30 text-red-300 border border-red-800/50'
                  }`}>
                    {p.configured ? 'Configuré' : 'Non configuré'}
                  </span>
                </div>
                <p className="text-sm text-indigo-300">
                  {p.configured ? 'Prêt à poster' : 'Ajoutez vos clés API dans config.json'}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Content Tab */}
        {activeTab === 'content' && (
          <div className="space-y-4">
            {contentFiles.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-xs text-indigo-400">{item.platform}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(item.name, idx)}
                    className="flex items-center gap-1 rounded-lg bg-indigo-800/50 px-3 py-1.5 text-xs text-indigo-200 hover:bg-indigo-700/50 transition-colors"
                  >
                    {copiedIdx === idx ? <><CheckCircle className="w-3 h-3" /> Copié!</> : <><Copy className="w-3 h-3" /> Copier le contenu</>}
                  </button>
                </div>
                <div className="rounded-lg bg-indigo-950 p-4 text-sm text-indigo-200 max-h-40 overflow-y-auto font-mono whitespace-pre-wrap">
                  Contenu dans docs/product-hunt/content/{item.file}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-3">
            {schedule.map((s, idx) => (
              <div key={idx} className="flex items-center gap-4 rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-4">
                <span className="text-lg font-mono font-bold text-green-400 w-14">{s.time}</span>
                <div className="flex-1">
                  <p className="text-white font-medium">{s.action}</p>
                  <p className="text-xs text-indigo-400">{s.platform}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-800/50 text-xs text-indigo-300">En attente</span>
              </div>
            ))}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-8 text-center">
            <History className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
            <p className="text-indigo-300">Aucun post effectué pour l&apos;instant</p>
            <p className="text-sm text-indigo-400 mt-2">L&apos;historique apparaîtra ici après le premier lancement</p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 rounded-2xl border border-orange-500/30 bg-orange-500/5 p-8">
          <h2 className="text-xl font-bold text-white mb-4">🚀 Actions rapides</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href="https://www.producthunt.com/posts/new" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-orange-500/30 bg-orange-500/10 p-4 hover:bg-orange-500/20 transition-colors">
              <span className="text-2xl">🟠</span>
              <div>
                <p className="font-semibold text-white text-sm">Créer sur Product Hunt</p>
                <p className="text-xs text-indigo-300">Ouvre la page de création</p>
              </div>
            </a>
            <a href="https://twitter.com/intent/tweet?text=%F0%9F%9A%80%20I%20just%20launched%20NeuraAPI%20on%20%40ProductHunt!%0A%0AAI%20APIs%20%2B%20Next.js%20Templates%20in%2010%20languages.%0A%0ASupport%20us%3A%20https%3A%2F%2Fwww.producthunt.com%2Fposts%2Fneuraapi%0A%0A%23ProductHunt%20%23AI%20%23NextJS" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 hover:bg-blue-500/20 transition-colors">
              <span className="text-2xl">🐦</span>
              <div>
                <p className="font-semibold text-white text-sm">Poster sur Twitter</p>
                <p className="text-xs text-indigo-300">Tweet pré-rempli</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.producthunt.com%2Fposts%2Fneuraapi" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-blue-700/30 bg-blue-700/10 p-4 hover:bg-blue-700/20 transition-colors">
              <span className="text-2xl">💼</span>
              <div>
                <p className="font-semibold text-white text-sm">Poster sur LinkedIn</p>
                <p className="text-xs text-indigo-300">Partage le lien PH</p>
              </div>
            </a>
            <a href="https://www.reddit.com/r/SaaS/submit" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-orange-700/30 bg-orange-700/10 p-4 hover:bg-orange-700/20 transition-colors">
              <span className="text-2xl">🤖</span>
              <div>
                <p className="font-semibold text-white text-sm">Poster sur Reddit</p>
                <p className="text-xs text-indigo-300">r/SaaS + r/webdev</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
