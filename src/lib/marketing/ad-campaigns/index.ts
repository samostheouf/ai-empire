// ============================================
// AI-EMPIRE — Ad Campaigns Barrel Export
// Localized ad campaign retrieval
// ============================================

import type { SupportedLanguage, AdCampaignBundle } from './types';

import { adCampaignBundle as en } from './en';
import { adCampaignBundle as fr } from './fr';
import { adCampaignBundle as es } from './es';
import { adCampaignBundle as de } from './de';
import { adCampaignBundle as it } from './it';
import { adCampaignBundle as pt } from './pt';
import { adCampaignBundle as ja } from './ja';
import { adCampaignBundle as ko } from './ko';
import { adCampaignBundle as zh } from './zh';
import { adCampaignBundle as ar } from './ar';

const bundlesByLanguage: Record<SupportedLanguage, AdCampaignBundle> = {
  en, fr, es, de, it, pt, ja, ko, zh, ar,
};

export function getLocalizedAdCampaigns(lang: SupportedLanguage): AdCampaignBundle {
  return bundlesByLanguage[lang] || bundlesByLanguage.en;
}

export function getGoogleSearchCampaigns(lang: SupportedLanguage) {
  return getLocalizedAdCampaigns(lang).googleSearch;
}

export function getFacebookCampaigns(lang: SupportedLanguage) {
  return getLocalizedAdCampaigns(lang).facebook;
}

export function getLinkedInCampaigns(lang: SupportedLanguage) {
  return getLocalizedAdCampaigns(lang).linkedin;
}

export function getTwitterTweets(lang: SupportedLanguage) {
  return getLocalizedAdCampaigns(lang).twitter;
}

export function getInstagramStories(lang: SupportedLanguage) {
  return getLocalizedAdCampaigns(lang).instagram;
}

export function getSupportedLanguages(): SupportedLanguage[] {
  return Object.keys(bundlesByLanguage) as SupportedLanguage[];
}

export type { SupportedLanguage, AdCampaignBundle, GoogleSearchCampaign, FacebookCampaign, LinkedInCampaign, TwitterPromotedTweet, InstagramStory, AdGroup, Ad } from './types';
export { en, fr, es, de, it, pt, ja, ko, zh, ar };
