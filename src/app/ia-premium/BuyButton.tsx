'use client'
import { useState } from 'react'
import { ShoppingCart, Loader2, Check, Shield, CreditCard, RotateCcw, ChevronDown } from 'lucide-react'

interface BuyButtonProps {
  price: number
  productId?: string
  productName?: string
  variant?: 'contenu' | 'pack5' | 'coffret'
  email?: string
  onEmailChange?: (v: string) => void
  onBuy?: (email: string) => Promise<void>
  loading?: boolean
  success?: boolean
  error?: string | null
}

export default function BuyButton({
  price,
  productId = 'IA-PREMIUM',
  productName = 'IA Premium',
  variant = 'contenu',
  email = '',
  onEmailChange,
  onBuy,
  loading = false,
  success = false,
  error = null,
}: BuyButtonProps) {
  const [showPreview, setShowPreview] = useState(false)

  const handleClick = async () => {
    if (!email || loading) return
    await onBuy?.(email)
  }

  const variantLabel = {
    contenu: 'Contenu Premium',
    pack5: 'Pack 5',
    coffret: 'Coffret Exclusif',
  }[variant]

  return (
    <div className="space-y-5">
      {/* ── Badge prix ambre ── */}
      <div className="flex items-center justify-between rounded-sm border border-amber-500/20 bg-amber-500/5 px-5 py-3.5">
        <span className="text-xs uppercase tracking-[0.18em] text-amber-600/70 font-light">
          {variantLabel}
        </span>
        <span className="text-sm">
          <strong className="font-serif text-amber-500">{price}€</strong>
        </span>
      </div>

      {/* Email */}
      <input
        type="email"
        value={email}
        onChange={(e) => onEmailChange?.(e.target.value)}
        placeholder="votre@email.com"
        aria-label="Email pour la commande"
        className="input-premium w-full rounded-sm px-4 py-3 text-sm"
      />

      {error && (
        <div className="rounded-sm border border-red-500/10 bg-red-500/5 px-4 py-2.5" role="alert">
          <p className="text-xs text-red-400/80">{error}</p>
        </div>
      )}

      {/* Bouton achat */}
      <button
        onClick={handleClick}
        disabled={loading || !email || success}
        className={`relative flex w-full items-center justify-center gap-2.5 rounded-sm px-5 py-3.5 text-sm font-medium text-white transition-all duration-200 overflow-hidden ${
          success
            ? 'bg-amber-700 shadow-md cursor-default'
            : 'bg-[#1a1628] hover:bg-[#221e33] hover:shadow-xl hover:shadow-amber-900/20 active:scale-[0.98] border border-white/[0.06]'
        } disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        {success ? (
          <>
            <Check className="h-4 w-4" />
            <span>Commande confirmée — redirection...</span>
          </>
        ) : loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Préparation de votre commande...</span>
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4" />
            <span>Acheter — {price}€</span>
          </>
        )}
      </button>

      {/* Badges de confiance */}
      <div className="flex flex-wrap items-center justify-center gap-5 pt-1 text-xs text-white/30">
        <span className="flex items-center gap-1.5">
          <Shield className="h-3 w-3 text-amber-500/50" />
          Stripe sécurisé
        </span>
        <span className="flex items-center gap-1.5">
          <CreditCard className="h-3 w-3 text-amber-500/50" />
          Paiement crypté
        </span>
        <span className="flex items-center gap-1.5">
          <RotateCcw className="h-3 w-3 text-amber-500/50" />
          14j satisfait ou remboursé
        </span>
      </div>

      {/* Aperçu contenu */}
      <div className="relative">
        <button
          type="button"
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center justify-center gap-1 text-xs text-white/30 hover:text-amber-400/60 transition-colors w-full py-1"
        >
          <ChevronDown
            className="h-3 w-3 transition-transform duration-200"
            style={{ transform: showPreview ? 'rotate(180deg)' : 'rotate(0)' }}
          />
          {showPreview ? 'Masquer' : 'Découvrir le contenu'}
        </button>
        {showPreview && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-10 z-10 w-80 rounded-sm border border-white/[0.08] bg-[#0c0818]/95 shadow-2xl p-2">
            <p className="text-xs text-white/40 leading-relaxed px-1">
              {variant === 'contenu' && 'Accès au contenu premium : prompts IA avancés, framework stratégique, templates businesses.'}
              {variant === 'pack5' && '5 packs thématiques : e-commerce, SaaS, content marketing, réseaux sociaux, copywriting. +200 prompts exclusifs.'}
              {variant === 'coffret' && 'Tout-en-un : tous les packs + 2 séances mentoring 1:1 + communauté privée + mises à jour à vie. 50 places seulement.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
