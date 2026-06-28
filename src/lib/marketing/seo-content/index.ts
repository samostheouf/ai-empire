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

export async function getLocalizedSEOContent(lang: SupportedLanguage) {
  return modules[lang]()
}

export { seoContents, getSEOByPath, getAllPageSEOContents, generatePageSEO, generateBreadcrumbSchema, generateProductSchema, generateArticleSchema, generateHowToSchema, generateLocalBusinessSchema, generateSoftwareApplicationSchema } from './fr'
export type { PageSEOContent, PageSEO } from './fr'
