export type SupportedLanguage = 'fr' | 'en' | 'es' | 'de' | 'it' | 'ja' | 'ko' | 'pt' | 'zh' | 'ar'

const modules: Record<SupportedLanguage, () => Promise<any>> = {
  fr: () => import('./fr'),
  en: () => import('./en'),
  es: () => import('./es'),
  de: () => import('./de'),
  it: () => import('./it'),
  ja: () => import('./ja'),
  ko: () => import('./ko'),
  pt: () => import('./pt'),
  zh: () => import('./zh'),
  ar: () => import('./ar'),
}

export async function getLocalizedSEO(lang: SupportedLanguage) {
  return modules[lang]()
}

export { generateSEOTitle, generateMetaDescription, generateSlug, analyzeKeywords, calculateSEOScore, generateBlogOutline, generateFullSEOContent } from './fr'
export type { SEOContent, KeywordAnalysis, BlogOutline } from './fr'
