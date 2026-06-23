// ============================================
// AI-EMPIRE — Multilingual Ads Index
// Barrel export + localized ad retrieval
// ============================================

import type { AdCopy } from '../paid-ads';
import { googleAds as enGoogle, facebookAds as enFacebook, linkedinAds as enLinkedin } from './en';
import { googleAds as esGoogle, facebookAds as esFacebook, linkedinAds as esLinkedin } from './es';
import { googleAds as deGoogle, facebookAds as deFacebook, linkedinAds as deLinkedin } from './de';
import { googleAds as frGoogle, facebookAds as frFacebook, linkedinAds as frLinkedin } from './fr';
import { googleAds as itGoogle, facebookAds as itFacebook, linkedinAds as itLinkedin } from './it';
import { googleAds as ptGoogle, facebookAds as ptFacebook, linkedinAds as ptLinkedin } from './pt';
import { googleAds as jaGoogle, facebookAds as jaFacebook, linkedinAds as jaLinkedin } from './ja';
import { googleAds as koGoogle, facebookAds as koFacebook, linkedinAds as koLinkedin } from './ko';
import { googleAds as zhGoogle, facebookAds as zhFacebook, linkedinAds as zhLinkedin } from './zh';
import { googleAds as arGoogle, facebookAds as arFacebook, linkedinAds as arLinkedin } from './ar';

export type SupportedLanguage = 'en' | 'es' | 'de' | 'fr' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ar';

export interface LanguageAds {
  google: AdCopy[];
  facebook: AdCopy[];
  linkedin: AdCopy[];
}

const adsByLanguage: Record<SupportedLanguage, LanguageAds> = {
  en: { google: enGoogle, facebook: enFacebook, linkedin: enLinkedin },
  es: { google: esGoogle, facebook: esFacebook, linkedin: esLinkedin },
  de: { google: deGoogle, facebook: deFacebook, linkedin: deLinkedin },
  fr: { google: frGoogle, facebook: frFacebook, linkedin: frLinkedin },
  it: { google: itGoogle, facebook: itFacebook, linkedin: itLinkedin },
  pt: { google: ptGoogle, facebook: ptFacebook, linkedin: ptLinkedin },
  ja: { google: jaGoogle, facebook: jaFacebook, linkedin: jaLinkedin },
  ko: { google: koGoogle, facebook: koFacebook, linkedin: koLinkedin },
  zh: { google: zhGoogle, facebook: zhFacebook, linkedin: zhLinkedin },
  ar: { google: arGoogle, facebook: arFacebook, linkedin: arLinkedin },
};

export const getLocalizedAds = (lang: SupportedLanguage): AdCopy[] => {
  const languageAds = adsByLanguage[lang];
  if (!languageAds) return [...adsByLanguage.en.google, ...adsByLanguage.en.facebook, ...adsByLanguage.en.linkedin];
  return [...languageAds.google, ...languageAds.facebook, ...languageAds.linkedin];
};

export const getAdsByPlatform = (
  lang: SupportedLanguage,
  platform: AdCopy['platform'],
): AdCopy[] => {
  const languageAds = adsByLanguage[lang] ?? adsByLanguage.en;
  return languageAds[platform];
};

export const getAdsByType = (lang: SupportedLanguage, type: string): AdCopy[] => {
  const allAds = getLocalizedAds(lang);
  return allAds.filter((a) => a.type === type);
};

export const getLanguageAds = (lang: SupportedLanguage): LanguageAds => {
  return adsByLanguage[lang] || adsByLanguage.en;
};

export const getSupportedLanguages = (): SupportedLanguage[] => {
  return Object.keys(adsByLanguage) as SupportedLanguage[];
};
