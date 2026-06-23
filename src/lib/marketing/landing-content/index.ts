import { landingContent as landingEn } from './en'
import { landingContent as landingFr } from './fr'
import { landingContent as landingEs } from './es'
import { landingContent as landingDe } from './de'
import { landingContent as landingIt } from './it'
import { landingContent as landingJa } from './ja'
import { landingContent as landingKo } from './ko'
import { landingContent as landingPt } from './pt'
import { landingContent as landingZh } from './zh'
import { landingContent as landingAr } from './ar'

export type LandingContent = {
  hero: {
    headline: string
    subheadline: string
    ctaText: string
  }
  features: Array<{
    title: string
    description: string
  }>
  howItWorks: Array<{
    step: number
    title: string
    description: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
}

export type SupportedLanguage = 'en' | 'fr' | 'es' | 'de' | 'it' | 'ja' | 'ko' | 'pt' | 'zh' | 'ar'

const contentByLang: Record<SupportedLanguage, LandingContent> = {
  en: landingEn,
  fr: landingFr,
  es: landingEs,
  de: landingDe,
  it: landingIt,
  ja: landingJa,
  ko: landingKo,
  pt: landingPt,
  zh: landingZh,
  ar: landingAr,
}

export function getLocalizedLanding(lang: string): LandingContent {
  const locale = (lang || 'en').toLowerCase().split('-')[0] as SupportedLanguage
  return contentByLang[locale] || contentByLang.en
}
