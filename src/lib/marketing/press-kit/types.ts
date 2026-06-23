export type SupportedLanguage = 'en' | 'es' | 'de' | 'fr' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ar';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface PressKitBundle {
  language: SupportedLanguage;
  productDescriptionShort: string;
  productDescriptionLong: string;
  keyFeatures: string[];
  pricingTable: PricingTier[];
  founderQuote: {
    text: string;
    attribution: string;
    title: string;
  };
  logoUsage: {
    primaryUsage: string;
    clearSpace: string;
    minimumSize: string;
    donts: string[];
  };
  contactInfo: {
    press: string;
    partnerships: string;
    general: string;
    website: string;
  };
  boilerplate: string;
}
