'use client'
import { useState } from 'react'
import { LUXURY_FLOOR } from '@/lib/luxury-intent'

/**
 * Canal d'intention — ce qui manquait sur une page a 4500 EUR.
 *
 * Mesure 04/10 : `watchers` et `offers` n'etaient ecrits par aucune page. Les
 * deux seules issues etaient « payer 4500 EUR » (Stripe) ou partir. Le
 * comparable Joli Closet (meme modele, SKU JC3279209) affiche « Make an offer
 * 3517-5023 EUR » : sur ce marche, la negociation est la norme, pas
 * l'exception.
 *
 * Ce composant ne modifie JAMAIS le prix. Il enregistre une intention et
 * affiche la decision de decideOffer() — recu / contre-offre au floor /
 * refus. Repondre « votre offre est enregistree » sans rien changer est
 * honnete ; repondre « accepte » en ecrivant 3900 dans la base ne le serait
 * pas.
 */
export default function LuxuryIntent() {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)
  const [followed, setFollowed] = useState(false)

  const post = async (payload: Record<string, unknown>) => {
    setBusy(true); setMsg('')
    try {
      const r = await fetch('/api/luxury', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sku: 'HERMES-LV-NBA-M-1A8WU8', ...payload }),
      })
      const j = await r.json()
      if (!r.ok || !j.success) { setMsg(j.error || 'Erreur. Reessayez.'); return false }
      return j
    } catch { setMsg('Erreur reseau. Reessayez.'); return false }
    finally { setBusy(false) }
  }

  const submitOffer = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setMsg('Email valide requis pour recevoir la reponse.'); return }
    const n = Number(amount)
    if (!Number.isFinite(n) || n <= 0) { setMsg('Montant invalide — indiquer un montant en euros.'); return }
    const j = await post({ action: 'offer', email, price: n })
    if (j) setMsg(j.decision?.action || 'Offre enregistree.')
  }

  const follow = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setMsg('Email valide requis.'); return }
    const j = await post({ action: 'watcher', email })
    if (j) { setFollowed(true); setMsg('Piece suivie — un seul exemplaire, aucune remise en stock FW21.') }
  }

  return (
    <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4" aria-labelledby="intent-heading">
      <h3 id="intent-heading" className="text-[12px] font-extrabold tracking-widest text-zinc-600 uppercase">
        Offre ou suivi
      </h3>
      <p className="mt-1 text-[11px] leading-relaxed text-zinc-600">
        Exemplaire unique. Toute offre est enregistree et repondue sous 24h —{' '}
        <strong className="text-zinc-900">le prix ne baisse pas automatiquement</strong>. Floor {LUXURY_FLOOR} EUR.
      </p>

      <label htmlFor="intent-email" className="sr-only">Votre email pour la reponse a votre offre</label>
      <input
        id="intent-email"
        name="intent-email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        className="mt-3 w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
      />

      <form onSubmit={submitOffer} className="mt-2 flex flex-wrap items-end gap-2" noValidate>
        <div className="min-w-[130px] flex-1">
          <label htmlFor="intent-amount" className="block text-[11px] font-medium text-zinc-600">Votre offre (EUR)</label>
          <input
            id="intent-amount"
            name="intent-amount"
            type="number"
            min={1}
            step={50}
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="4500"
            className="mt-1 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        </div>
        <button
          type="submit"
          disabled={busy}
          aria-busy={busy}
          className="rounded-xl border border-black bg-white px-4 py-2.5 text-[13px] font-bold text-black hover:bg-zinc-100 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          {busy ? 'Envoi…' : 'Envoyer mon offre'}
        </button>
        <button
          type="button"
          onClick={follow}
          disabled={busy || followed}
          className="rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-[13px] font-semibold text-zinc-800 hover:bg-zinc-100 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          {followed ? 'Piece suivie ✓' : 'Me prevenir'}
        </button>
      </form>

      <p role="status" aria-live="polite" className="mt-2 min-h-[18px] text-[12px] leading-relaxed text-zinc-700">{msg}</p>
    </div>
  )
}