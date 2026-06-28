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

export async function getLocalizedScheduler(lang: SupportedLanguage) {
  return modules[lang]()
}

export { getOptimalTime, generatePostId, calculateEngagementRate, getBestPostingDays, formatScheduledPosts, generateAutoPostFromTemplate } from './fr'
export type { ScheduledPost, PostMetrics, ScheduleRequest } from './fr'
