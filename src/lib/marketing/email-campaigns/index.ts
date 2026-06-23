// ============================================
// AI-EMPIRE — Email Campaigns Barrel Export
// Localized email campaign retrieval
// ============================================

import type { SupportedLanguage, EmailCampaignBundle } from './types';

import { emailCampaignBundle as en } from './en';
import { emailCampaignBundle as fr } from './fr';
import { emailCampaignBundle as es } from './es';
import { emailCampaignBundle as de } from './de';
import { emailCampaignBundle as it } from './it';
import { emailCampaignBundle as pt } from './pt';
import { emailCampaignBundle as ja } from './ja';
import { emailCampaignBundle as ko } from './ko';
import { emailCampaignBundle as zh } from './zh';
import { emailCampaignBundle as ar } from './ar';

const bundlesByLanguage: Record<SupportedLanguage, EmailCampaignBundle> = {
  en, fr, es, de, it, pt, ja, ko, zh, ar,
};

export function getLocalizedEmailCampaigns(lang: SupportedLanguage): EmailCampaignBundle {
  return bundlesByLanguage[lang] || bundlesByLanguage.en;
}

export function getEmailCampaignsByType(lang: SupportedLanguage, type: string) {
  return getLocalizedEmailCampaigns(lang).campaigns.filter(c => c.type === type);
}

export function getEmailCampaignById(lang: SupportedLanguage, id: string) {
  return getLocalizedEmailCampaigns(lang).campaigns.find(c => c.id === id);
}

export function getSupportedLanguages(): SupportedLanguage[] {
  return Object.keys(bundlesByLanguage) as SupportedLanguage[];
}

export type { SupportedLanguage, EmailCampaignBundle, EmailCampaign, EmailVariant } from './types';
export { en, fr, es, de, it, pt, ja, ko, zh, ar };
