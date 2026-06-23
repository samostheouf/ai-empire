export type SupportedLanguage = 'en' | 'es' | 'de' | 'fr' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ar';

export interface AdGroup {
  id: string;
  name: string;
  keywords: string[];
  ads: Ad[];
}

export interface Ad {
  id: string;
  headline: string;
  description: string;
  cta: string;
  displayUrl?: string;
}

export interface GoogleSearchCampaign {
  id: string;
  name: string;
  objective: string;
  budget: string;
  adGroups: AdGroup[];
}

export interface FacebookCampaign {
  id: string;
  name: string;
  type: 'awareness' | 'consideration' | 'conversion' | 'retargeting';
  objective: string;
  audience: string;
  placements: string[];
  adCopy: string;
  cta: string;
  ctaUrl: string;
}

export interface LinkedInCampaign {
  id: string;
  name: string;
  type: 'sponsored_content' | 'message_ads' | 'dynamic';
  objective: string;
  audience: string;
  headline: string;
  body: string;
  cta: string;
  ctaUrl: string;
}

export interface TwitterPromotedTweet {
  id: string;
  tweet: string;
  cta: string;
  ctaUrl: string;
  targetAudience: string;
}

export interface InstagramStory {
  id: string;
  name: string;
  type: 'story' | 'reel';
  script: string;
  visualDirection: string;
  textOverlay: string;
  cta: string;
  duration: string;
}

export interface AdCampaignBundle {
  language: SupportedLanguage;
  googleSearch: GoogleSearchCampaign[];
  facebook: FacebookCampaign[];
  linkedin: LinkedInCampaign[];
  twitter: TwitterPromotedTweet[];
  instagram: InstagramStory[];
}
