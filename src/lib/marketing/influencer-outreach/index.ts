import { emailTemplates as emailEn, dmTemplates as dmEn, affiliateProgram as affEn, getAllTemplates as getAllEn, getTemplatesByType as getByTypeEn, getTemplatesByTarget as getByTargetEn, generateOutreachSequence as genSeqEn } from './en'
import { emailTemplates as emailFr, dmTemplates as dmFr, affiliateProgram as affFr, getAllTemplates as getAllFr, getTemplatesByType as getByTypeFr, getTemplatesByTarget as getByTargetFr, generateOutreachSequence as genSeqFr } from './fr'
import { emailTemplates as emailEs, dmTemplates as dmEs, affiliateProgram as affEs, getAllTemplates as getAllEs, getTemplatesByType as getByTypeEs, getTemplatesByTarget as getByTargetEs, generateOutreachSequence as genSeqEs } from './es'
import { emailTemplates as emailDe, dmTemplates as dmDe, affiliateProgram as affDe, getAllTemplates as getAllDe, getTemplatesByType as getByTypeDe, getTemplatesByTarget as getByTargetDe, generateOutreachSequence as genSeqDe } from './de'
import { emailTemplates as emailIt, dmTemplates as dmIt, affiliateProgram as affIt, getAllTemplates as getAllIt, getTemplatesByType as getByTypeIt, getTemplatesByTarget as getByTargetIt, generateOutreachSequence as genSeqIt } from './it'
import { emailTemplates as emailJa, dmTemplates as dmJa, affiliateProgram as affJa, getAllTemplates as getAllJa, getTemplatesByType as getByTypeJa, getTemplatesByTarget as getByTargetJa, generateOutreachSequence as genSeqJa } from './ja'
import { emailTemplates as emailKo, dmTemplates as dmKo, affiliateProgram as affKo, getAllTemplates as getAllKo, getTemplatesByType as getByTypeKo, getTemplatesByTarget as getByTargetKo, generateOutreachSequence as genSeqKo } from './ko'
import { emailTemplates as emailPt, dmTemplates as dmPt, affiliateProgram as affPt, getAllTemplates as getAllPt, getTemplatesByType as getByTypePt, getTemplatesByTarget as getByTargetPt, generateOutreachSequence as genSeqPt } from './pt'
import { emailTemplates as emailZh, dmTemplates as dmZh, affiliateProgram as affZh, getAllTemplates as getAllZh, getTemplatesByType as getByTypeZh, getTemplatesByTarget as getByTargetZh, generateOutreachSequence as genSeqZh } from './zh'
import { emailTemplates as emailAr, dmTemplates as dmAr, affiliateProgram as affAr, getAllTemplates as getAllAr, getTemplatesByType as getByTypeAr, getTemplatesByTarget as getByTargetAr, generateOutreachSequence as genSeqAr } from './ar'

export type SupportedLanguage = 'en' | 'fr' | 'es' | 'de' | 'it' | 'ja' | 'ko' | 'pt' | 'zh' | 'ar'

export interface InfluencerTemplate {
  id: string;
  name: string;
  type: 'email' | 'dm';
  target: string;
  subject: string;
  body: string;
  cta: string;
}

export interface AffiliateProgram {
  name: string;
  commission: number;
  cookieDuration: number;
  benefits: string[];
  requirements: string[];
}

const emailByLang: Record<SupportedLanguage, InfluencerTemplate[]> = {
  en: emailEn,
  fr: emailFr,
  es: emailEs,
  de: emailDe,
  it: emailIt,
  ja: emailJa,
  ko: emailKo,
  pt: emailPt,
  zh: emailZh,
  ar: emailAr,
}

const dmByLang: Record<SupportedLanguage, InfluencerTemplate[]> = {
  en: dmEn,
  fr: dmFr,
  es: dmEs,
  de: dmDe,
  it: dmIt,
  ja: dmJa,
  ko: dmKo,
  pt: dmPt,
  zh: dmZh,
  ar: dmAr,
}

const affByLang: Record<SupportedLanguage, AffiliateProgram> = {
  en: affEn,
  fr: affFr,
  es: affEs,
  de: affDe,
  it: affIt,
  ja: affJa,
  ko: affKo,
  pt: affPt,
  zh: affZh,
  ar: affAr,
}

const getAllByLang: Record<SupportedLanguage, () => InfluencerTemplate[]> = {
  en: getAllEn,
  fr: getAllFr,
  es: getAllEs,
  de: getAllDe,
  it: getAllIt,
  ja: getAllJa,
  ko: getAllKo,
  pt: getAllPt,
  zh: getAllZh,
  ar: getAllAr,
}

const getByTypeByLang: Record<SupportedLanguage, (type: 'email' | 'dm') => InfluencerTemplate[]> = {
  en: getByTypeEn,
  fr: getByTypeFr,
  es: getByTypeEs,
  de: getByTypeDe,
  it: getByTypeIt,
  ja: getByTypeJa,
  ko: getByTypeKo,
  pt: getByTypePt,
  zh: getByTypeZh,
  ar: getByTypeAr,
}

const getByTargetByLang: Record<SupportedLanguage, (target: string) => InfluencerTemplate[]> = {
  en: getByTargetEn,
  fr: getByTargetFr,
  es: getByTargetEs,
  de: getByTargetDe,
  it: getByTargetIt,
  ja: getByTargetJa,
  ko: getByTargetKo,
  pt: getByTargetPt,
  zh: getByTargetZh,
  ar: getByTargetAr,
}

const genSeqByLang: Record<SupportedLanguage, (influencerType: string) => InfluencerTemplate[]> = {
  en: genSeqEn,
  fr: genSeqFr,
  es: genSeqEs,
  de: genSeqDe,
  it: genSeqIt,
  ja: genSeqJa,
  ko: genSeqKo,
  pt: genSeqPt,
  zh: genSeqZh,
  ar: genSeqAr,
}

function resolveLang(lang: string): SupportedLanguage {
  const locale = (lang || 'en').toLowerCase().split('-')[0] as SupportedLanguage
  return locale in emailByLang ? locale : 'en'
}

export function getLocalizedOutreach(lang: string) {
  const locale = resolveLang(lang)
  return {
    emailTemplates: emailByLang[locale],
    dmTemplates: dmByLang[locale],
    affiliateProgram: affByLang[locale],
    getAllTemplates: getAllByLang[locale],
    getTemplatesByType: getByTypeByLang[locale],
    getTemplatesByTarget: getByTargetByLang[locale],
    generateOutreachSequence: genSeqByLang[locale],
  }
}
