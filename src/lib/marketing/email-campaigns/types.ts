export type SupportedLanguage = 'en' | 'es' | 'de' | 'fr' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ar';

export interface EmailVariant {
  id: string;
  subject: string;
  previewText: string;
}

export interface EmailCampaign {
  id: string;
  name: string;
  type: 'launch_announcement' | 'product_update' | 'newsletter' | 'reengagement' | 'upgrade_offer';
  variants: EmailVariant[];
  previewText: string;
  htmlBody: string;
  cta: string;
  ctaUrl: string;
}

export interface EmailCampaignBundle {
  language: SupportedLanguage;
  campaigns: EmailCampaign[];
}
