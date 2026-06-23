export interface CaseStudyResult {
  metric: string
  before: string
  after: string
  improvement: string
}

export interface CaseStudyImplementation {
  step: number
  title: string
  description: string
  duration: string
}

export interface CaseStudy {
  id: string
  company: string
  companyType: 'saas' | 'agency' | 'freelancer' | 'enterprise'
  industry: string
  teamSize: string
  challenge: string
  solution: string
  implementation: CaseStudyImplementation[]
  results: CaseStudyResult[]
  testimonial: {
    quote: string
    author: string
    role: string
  }
  templateUsed: string
  timeToValue: string
}

export type CaseStudyLanguage = 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ar'

export interface CaseStudiesByLanguage {
  saas: CaseStudy
  agency: CaseStudy
  freelancer: CaseStudy
  enterprise: CaseStudy
}

type CaseStudiesLoader = () => Promise<CaseStudiesByLanguage>

const caseStudyLoaders: Record<CaseStudyLanguage, CaseStudiesLoader> = {
  en: () => import('./en').then(m => m.caseStudies),
  fr: () => import('./fr').then(m => m.caseStudies),
  es: () => import('./es').then(m => m.caseStudies),
  de: () => import('./de').then(m => m.caseStudies),
  it: () => import('./it').then(m => m.caseStudies),
  pt: () => import('./pt').then(m => m.caseStudies),
  ja: () => import('./ja').then(m => m.caseStudies),
  ko: () => import('./ko').then(m => m.caseStudies),
  zh: () => import('./zh').then(m => m.caseStudies),
  ar: () => import('./ar').then(m => m.caseStudies),
}

export async function getCaseStudies(lang: CaseStudyLanguage): Promise<CaseStudiesByLanguage> {
  const loader = caseStudyLoaders[lang]
  if (!loader) throw new Error(`No case studies for language: ${lang}`)
  return loader()
}

export function getAllCaseStudyLanguages(): CaseStudyLanguage[] {
  return Object.keys(caseStudyLoaders) as CaseStudyLanguage[]
}

export function getCaseStudyByType(studies: CaseStudiesByLanguage, type: CaseStudy['companyType']): CaseStudy | undefined {
  return Object.values(studies).find(s => s.companyType === type)
}
