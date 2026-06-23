'use client'

import { useState } from 'react'
import { Users, Check, Send, Loader2, Zap, Code, Globe } from 'lucide-react'

export default function BetaPage() {
  const [email, setEmail] = useState('')
  const [useCase, setUseCase] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [apiKey, setApiKey] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      setApiKey(data.apiKey || '')
      setStatus('success')
    } catch {
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-indigo-950 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="rounded-2xl border border-green-800/50 bg-green-900/20 p-8">
            <Check className="mx-auto h-12 w-12 text-green-400 mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">Bienvenue dans la beta !</h1>
            <p className="text-indigo-300 mb-6">Vous avez 100 crédits gratuits pour tester toutes les APIs.</p>
            {apiKey && (
              <div className="rounded-lg bg-indigo-950 p-4 mb-6">
                <p className="text-xs text-indigo-400 mb-1">Votre clé API :</p>
                <code className="text-sm text-white font-mono break-all">{apiKey}</code>
              </div>
            )}
            <p className="text-sm text-indigo-400 mb-4">Utilisez-la dans vos requêtes :</p>
            <div className="rounded-lg bg-indigo-950 p-4 text-left">
              <code className="text-xs text-indigo-300 font-mono block whitespace-pre">
{`curl -X POST https://ai-empire-steel.vercel.app/api/ai/generate \\
  -H "x-api-key: ${apiKey || 'napi_votre_cle'}" \\
  -H "Content-Type: application/json" \\
  -d '{"prompt": "Hello world"}'`}
              </code>
            </div>
            <a href="/docs" className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors">
              Lire la documentation
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
              <Users className="w-4 h-4" />
              Programme Beta
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Rejoignez la <span className="text-indigo-400">beta fermée</span>
            </h1>
            <p className="mt-6 text-lg text-indigo-300 max-w-2xl mx-auto">
              Testez NeuraAPI gratuitement pendant 30 jours. 100 crédits offerts, accès complet à toutes les APIs.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6 text-center">
              <Zap className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">100 crédits gratuits</h3>
              <p className="text-sm text-indigo-300">Testez toutes les APIs sans limite</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6 text-center">
              <Code className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Accès complet</h3>
              <p className="text-sm text-indigo-300">Generate, SEO, Code — tout inclus</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6 text-center">
              <Globe className="mx-auto h-8 w-8 text-indigo-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">Support direct</h3>
              <p className="text-sm text-indigo-300">Accès au Discord + email prioritaire</p>
            </div>
          </div>

          {/* Registration form */}
          <div className="mx-auto max-w-lg rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-6 text-center">Inscription beta</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="votre@email.com"
                  aria-label="Adresse email"
                  className="w-full rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-3 text-white placeholder-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-1">Comment comptez-vous utiliser NeuraAPI ?</label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  aria-label="Cas d'utilisation"
                  className="w-full rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="saas">SaaS / Application</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="blog">Blog / Contenu</option>
                  <option value="agency">Agence web</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                aria-label="Rejoindre la beta"
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Rejoindre la beta
                  </>
                )}
              </button>
            </form>
            <p className="mt-4 text-xs text-center text-indigo-400">
              Pas de carte bancaire requise. Annulation en 1 clic.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
