'use client'

import { ABTest } from '@/components/ABTest'
import { CtaLink } from '@/components/HomeInteractive'
import { Sparkles, ArrowRight } from 'lucide-react'

interface HeroABTestProps {
  createAccountLabel: string
}

export function HeroABTest({ createAccountLabel }: HeroABTestProps) {
  return (
    <ABTest testName="hero_cta_register" variants={['variant_a', 'variant_b']}>
      {(variant) => (
        <CtaLink href="/register" label="register" location="hero" dataTrack="cta_click_register_hero" className="group relative rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center gap-2 w-full sm:w-auto justify-center animate-glow hover:scale-105">
          <Sparkles className="w-5 h-5" aria-hidden="true" />
          {variant === 'variant_b' ? 'Obtenir 100 crédits gratuits' : createAccountLabel}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </CtaLink>
      )}
    </ABTest>
  )
}
