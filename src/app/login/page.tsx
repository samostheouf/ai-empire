'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight, LogIn, Shield, Zap, Code } from 'lucide-react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (data.apiKey) {
        localStorage.setItem('neura_api_key', data.apiKey)
        window.location.href = `/dashboard?email=${encodeURIComponent(email)}`
      } else {
        setError(data.error || 'Erreur lors de la connexion')
      }
    } catch {
      setError('Erreur lors de la connexion')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#0f0a2e] flex">
      {/* Left side — Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-delay-1" />

        <div className="relative z-10 max-w-md px-8">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-indigo-400" />
              <div className="absolute inset-0 blur-md bg-indigo-500/30" />
            </div>
            <span className="text-2xl font-bold text-white">NeuraAPI</span>
          </Link>

          <h2 className="text-3xl font-bold text-white mb-8">
            Bienvenue sur<br />
            <span className="text-gradient">NeuraAPI</span>
          </h2>

          <div className="space-y-6">
            {[
              { icon: Zap, text: '8+ endpoints IA instantanés' },
              { icon: Code, text: 'SDK TypeScript en 3 lignes' },
              { icon: Shield, text: '100 crédits/mois gratuits' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 glass-card rounded-xl p-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/20 border border-white/5 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-sm text-indigo-200/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side — Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">NeuraAPI</span>
            </Link>
          </div>
          <div className="mb-4 hidden lg:block">
            <Breadcrumb items={[{ name: 'Connexion', href: '/login' }]} />
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/20">
                <LogIn className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Se connecter</h1>
              <p className="text-indigo-300/60 mt-2">Accédez à votre espace NeuraAPI</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-300 rounded-xl px-4 py-3 text-sm backdrop-blur-sm">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-xl text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent outline-none placeholder-indigo-400/40 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-1.5">Mot de passe</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-white/10 bg-white/5 rounded-xl text-white focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent outline-none placeholder-indigo-400/40 transition-all"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-3 font-semibold hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 transition-all shadow-lg shadow-indigo-500/20"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Se connecter
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-indigo-300/50 mt-6">
              Pas encore de compte ?{' '}
              <Link href="/register" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">Créer un compte</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
