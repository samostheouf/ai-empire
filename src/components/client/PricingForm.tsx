'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { useI18n } from '@/i18n'

interface Plan {
  name: string
  price: string
  credits: string
  popular: boolean
  cta: string
}

export default function PricingForm({ plan }: { plan: Plan }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false)
  const { t } = useI18n()

  if (showForm) {
    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, plan: plan.name }),
          })
          const data = await res.json()
          if (data.apiKey) {
            window.location.href = `/dashboard?email=${encodeURIComponent(email)}`
          }
        }}
        className="mt-8 space-y-3"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('pricingFormEmailPlaceholder')}
          aria-label={t('pricingFormEmailAria')}
          className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/50 outline-none placeholder-indigo-400/40 transition-all"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('pricingFormPasswordPlaceholder')}
          aria-label={t('pricingFormPasswordAria')}
          className="w-full px-4 py-3 border border-white/10 bg-white/5 text-white rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/50 outline-none placeholder-indigo-400/40 transition-all"
        />
        <button
          type="submit"
          aria-label={plan.cta}
          className="w-full rounded-xl py-3 text-center text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-105"
        >
          <Sparkles className="w-4 h-4" />
          {plan.cta}
        </button>
        <button
          type="button"
          onClick={() => setShowForm(false)}
          className="w-full rounded-xl py-2 text-center text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {t('pricingFormCancel')}
        </button>
      </form>
    )
  }

  return (
    <button
      onClick={() => setShowForm(true)}
      aria-label={plan.cta}
      className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
        plan.popular
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20 hover:scale-105'
          : 'border border-white/10 bg-white/5 text-indigo-200 hover:bg-white/10 hover:scale-105'
      }`}
    >
      {plan.cta}
    </button>
  )
}
