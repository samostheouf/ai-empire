'use client'

import { useState, useEffect } from 'react'
import { captureRecoveryEmail, setRecoveryEmail } from '@/lib/conversion'

const STORAGE_KEY = 'neura_recovery_pending'

export default function RecoveryEmailCapture() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const check = () => {
      try {
        const pending = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
        if (pending && pending.templateId && !pending.email) {
          setOpen(true)
        }
      } catch {
        /* ignore */
      }
    }
    // Show after a short delay to avoid blocking initial render
    const t = setTimeout(check, 1500)
    return () => clearTimeout(t)
  }, [])

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    const res = await captureRecoveryEmail(email, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').templateId)
    setSubmitting(false)
    if (res.success) {
      setDone(true)
      setTimeout(() => setOpen(false), 2000)
    } else {
      setError(res.message || 'Erreur')
    }
  }

  const handleDismiss = () => {
    setOpen(false)
    try {
      const pending = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
      if (pending) {
        pending.dismissed = true
        localStorage.setItem(STORAGE_KEY, JSON.stringify(pending))
      }
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Recevez nos offres</h2>
          <button onClick={handleDismiss} className="text-slate-400 hover:text-slate-600" aria-label="Fermer">✕</button>
        </div>
        {done ? (
          <p className="text-green-600 font-medium">Merci ! Vous recevrez nos offres bientôt.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <p className="text-sm text-slate-600">
              Laissez votre email pour recevoir un rappel et nos templates premium.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
            {error && <p className="text-xs text-red-600">{error}</p>}
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50"
              >
                {submitting ? 'Envoi...' : 'Envoyer'}
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Plus tard
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}