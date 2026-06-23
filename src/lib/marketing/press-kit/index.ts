// ============================================
// AI-EMPIRE — Press Kit Barrel Export
// Localized press kit retrieval
// ============================================

import type { SupportedLanguage, PressKitBundle } from './types';

import { pressKitBundle as en } from './en';
import { pressKitBundle as fr } from './fr';
import { pressKitBundle as es } from './es';
import { pressKitBundle as de } from './de';
import { pressKitBundle as it } from './it';
import { pressKitBundle as pt } from './pt';
import { pressKitBundle as ja } from './ja';
import { pressKitBundle as ko } from './ko';
import { pressKitBundle as zh } from './zh';
import { pressKitBundle as ar } from './ar';

const bundlesByLanguage: Record<SupportedLanguage, PressKitBundle> = {
  en, fr, es, de, it, pt, ja, ko, zh, ar,
};

export function getLocalizedPressKit(lang: SupportedLanguage): PressKitBundle {
  return bundlesByLanguage[lang] || bundlesByLanguage.en;
}

export function getBoilerplate(lang: SupportedLanguage): string {
  return getLocalizedPressKit(lang).boilerplate;
}

export function getProductDescription(lang: SupportedLanguage, variant: 'short' | 'long' = 'short'): string {
  const kit = getLocalizedPressKit(lang);
  return variant === 'long' ? kit.productDescriptionLong : kit.productDescriptionShort;
}

export function getFounderQuote(lang: SupportedLanguage) {
  return getLocalizedPressKit(lang).founderQuote;
}

export function getPricingTable(lang: SupportedLanguage) {
  return getLocalizedPressKit(lang).pricingTable;
}

export function getSupportedLanguages(): SupportedLanguage[] {
  return Object.keys(bundlesByLanguage) as SupportedLanguage[];
}

export type { SupportedLanguage, PressKitBundle, PricingTier } from './types';
export { en, fr, es, de, it, pt, ja, ko, zh, ar };
