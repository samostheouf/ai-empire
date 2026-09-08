'use client'
import { useState } from 'react'

export default function LuxuryCheckout() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setMsg('Email invalide.'); return }
    setLoading(true); setMsg('Création de la session sécurisée…')
    try {
      const r = await fetch('/api/luxury/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      const j = await r.json()
      if (j.url) { setMsg('Redirection Stripe…'); location.href = j.url }
      else setMsg(j.error || 'Erreur. Réessayez.')
    } catch { setMsg('Erreur réseau.') }
    finally { setLoading(false) }
  }

  return (
    <form onSubmit={submit} aria-labelledby="checkout-heading" noValidate className="space-y-3">
      <label htmlFor="lux-email" className="sr-only">Adresse email pour la facture et le tracking DHL</label>
      <input
        id="lux-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        aria-required="true"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
      />
      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="w-full rounded-xl bg-black px-6 py-4 text-[15px] font-bold tracking-wide text-white hover:bg-zinc-900 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        {loading ? 'Création…' : 'Payer 4 500 € — DHL Express assuré →'}
      </button>
      <p id="lux-msg" role="status" aria-live="polite" className="min-h-[18px] text-[13px] text-zinc-600">{msg}</p>
      <p className="flex flex-wrap gap-2 text-[11px] leading-relaxed text-zinc-500">
        <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1">🔒 Stripe Live chiffré</span>
        <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1">📦 DHL + signature</span>
        <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1">↩ Webhook → sold auto 5min</span>
      </p>
    </form>
  )
}
