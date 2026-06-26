'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ShoppingCart, Loader2, Gift, Users, Shield, CreditCard, RotateCcw, Check, Eye } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { trackCheckoutStart } from '@/lib/analytics'
import { useI18n } from '@/i18n'

interface BuyButtonProps {
  templateId: string
  templateName: string
  price: number
  previewUrl?: string
  downloads?: number
}

export default function BuyButton({ templateId, templateName, price, previewUrl, downloads = 0 }: BuyButtonProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [referralCode, setReferralCode] = useState('')
  const [affiliateCode, setAffiliateCode] = useState('')
  const [showReferral, setShowReferral] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { t } = useI18n()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const ref = params.get('ref')
      const aff = params.get('aff')
      if (ref) setReferralCode(ref)
      if (aff) setAffiliateCode(aff)
    }
  }, [])

  const handleCheckout = async () => {
    if (!email) return
    setLoading(true)
    setError(null)
    trackCheckoutStart(templateId)

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        templateId,
        templateTitle: templateName,
        price,
        email,
        referralCode: referralCode || undefined,
        affiliateCode: affiliateCode || undefined,
      }),
    })

    const data = await res.json()
    if (data.url) {
      setSuccess(true)
      setTimeout(() => {
        window.location.href = data.url
      }, 800)
    } else {
      setError(data.error || t('buyErrorDefault'))
      setLoading(false)
    }
  }

  return (
    <div className="space-y-3">
      <input
        type="email"
        placeholder="votre@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email for billing"
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
      />
      {error && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-3 animate-shake" role="alert">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}
      <button
        onClick={handleCheckout}
        disabled={loading || !email || success}
        aria-label={t('buyAriaLabel').replace('{name}', templateName).replace('{price}', formatPrice(price))}
        className={`relative flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-white transition-all duration-200 overflow-hidden ${
          success
            ? 'bg-green-500 shadow-lg shadow-green-500/25 cursor-default'
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {success ? (
          <>
            <Check className="h-5 w-5 animate-bounce" />
            <span>{t('buyRedirectStripe')}</span>
          </>
        ) : loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>{t('buyCreatingOrder')}</span>
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            {t('buyCtaLabel').replace('{price}', formatPrice(price))}
          </>
        )}
        {!success && !loading && (
          <span className="absolute inset-0 bg-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
        )}
      </button>

      {previewUrl && (
        <div className="relative">
          <button
            type="button"
            onMouseEnter={() => setShowPreview(true)}
            onMouseLeave={() => setShowPreview(false)}
            onClick={() => setShowPreview(!showPreview)}
            className="w-full text-xs text-gray-500 hover:text-indigo-600 transition-colors flex items-center justify-center gap-1"
          >
            <Eye className="w-3 h-3" />
            {t('buyPreview')}
          </button>
          {showPreview && (
            <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10 w-80 rounded-xl border border-gray-200 bg-white shadow-2xl p-2 animate-fade-in">
              <Image
                src={previewUrl}
                alt={t('buyPreviewAlt').replace('{name}', templateName)}
                width={320}
                height={180}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+"
                sizes="320px"
                className="w-full rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      )}

      {!referralCode && !affiliateCode && (
        <button
          type="button"
          onClick={() => setShowReferral(!showReferral)}
          className="text-xs text-gray-400 hover:text-indigo-600 transition-colors flex items-center gap-1 mx-auto"
        >
          <Gift className="w-3 h-3" />
          {showReferral ? t('buyHide') : t('buyHasCode')}
        </button>
      )}

      {showReferral && (
        <input
          type="text"
          placeholder={t('buyReferralPlaceholder')}
          value={referralCode || affiliateCode}
          aria-label={t('buyReferralPlaceholder')}
          onChange={(e) => {
            const v = e.target.value
            if (v.startsWith('aff_')) {
              setAffiliateCode(v)
              setReferralCode('')
            } else {
              setReferralCode(v)
              setAffiliateCode('')
            }
          }}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
      )}

      {referralCode && (
        <div className="flex items-center gap-1.5 text-xs text-green-600" role="status">
          <Users className="w-3 h-3" />
          {t('buyReferralActive')}
        </div>
      )}

      <div className="flex items-center justify-center gap-4 pt-2 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-green-500" />
          {t('buyStripeSecure')}
        </span>
        <span className="flex items-center gap-1">
          <CreditCard className="w-3 h-3 text-green-500" />
          {t('buyEncryptedPayment')}
        </span>
        <span className="flex items-center gap-1">
          <RotateCcw className="w-3 h-3 text-green-500" />
          {t('buySatisfaction')}
        </span>
      </div>

      {downloads > 0 && (
        <div className="flex items-center justify-center gap-2 pt-1 text-xs text-green-600">
          <Check className="w-3 h-3" />
          <span>{downloads} {downloads > 1 ? t('buyDevelopersPlural') : t('buyDevelopersSingular')}</span>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 pt-1 text-xs text-orange-500">
        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
        <span>{t('buyLaunchOffer')}</span>
      </div>
    </div>
  )
}
