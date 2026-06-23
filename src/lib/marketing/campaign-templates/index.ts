export type SupportedLanguage = 'en' | 'es' | 'de' | 'it' | 'ja' | 'ko' | 'pt' | 'zh' | 'ar'

const modules: Record<SupportedLanguage, () => Promise<any>> = {
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

export async function getLocalizedCampaignTemplates(lang: SupportedLanguage) {
  return modules[lang]()
}

export { productLaunchTemplate, seasonalPromotionTemplate, referralProgramTemplate, blackFridayTemplate, newYearTemplate, getAllCampaignTemplates, getCampaignTemplateByType, generateCampaignTemplateId, generateEmailBlast, generateTemplateSocialPost, formatScheduleForCalendar, calculateTotalBudget } from './en'
