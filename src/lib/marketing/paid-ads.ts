// ============================================
// AI-EMPIRE — Paid Ads Copy
// Copy publicitaire optimisé pour conversion
// ============================================

export interface AdCopy {
  id: string;
  platform: 'google' | 'facebook' | 'linkedin';
  type: string;
  headline: string;
  description: string;
  cta: string;
  landingPage: string;
  targetAudience: string;
  trackingParams: string;
}

export interface BudgetRecommendation {
  platform: string;
  monthlyBudget: number;
  objective: string;
  expectedCPC: number;
  expectedCTR: number;
  expectedConversion: number;
  roas: number;
}

// === GOOGLE ADS COPY (10 variants) ===
export const googleAds: AdCopy[] = [
  {
    id: 'g-ad-01',
    platform: 'google',
    type: 'search',
    headline: 'AI-Empire | API AI Française — 70% Moins Chère',
    description: '✅ Groq + Gemini intégrés • Intégration 5 min • Support FR. Essai gratuit. Pas de CB requise.',
    cta: 'Essai Gratuit',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=google&utm_medium=search&utm_campaign=launch',
    targetAudience: 'Développeurs, CTOs, startups françaises',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=launch',
  },
  {
    id: 'g-ad-02',
    platform: 'google',
    type: 'search',
    headline: 'Alternative OpenAI France — AI-Empire',
    description: 'API AI française pour startups. Groq + Gemini. Gratuit pour commencer. Support en français.',
    cta: 'Découvrir',
    landingPage: 'https://ai-empire-steel.vercel.app/pricing?utm_source=google&utm_medium=search&utm_campaign=alternative',
    targetAudience: 'Entreprises cherchant alternative OpenAI',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=alternative',
  },
  {
    id: 'g-ad-03',
    platform: 'google',
    type: 'search',
    headline: 'Intégrer IA dans Application — En 5 Minutes',
    description: 'API AI clé en main. Groq + Gemini. Intégration en 5 min. Essai gratuit. Support FR.',
    cta: 'Tester Maintenant',
    landingPage: 'https://ai-empire-steel.vercel.app/docs?utm_source=google&utm_medium=search&utm_campaign=integration',
    targetAudience: 'Développeurs, tech leads',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=integration',
  },
  {
    id: 'g-ad-04',
    platform: 'google',
    type: 'search',
    headline: 'API IA pour Startup — Gratuit pour Commencer',
    description: 'AI-Empire: API AI française. Groq + Gemini. Pas de CB requise. Support en français. Essai gratuit.',
    cta: 'Commencer Gratuitement',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=google&utm_medium=search&utm_campaign=startup',
    targetAudience: 'Startups, indie hackers',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=startup',
  },
  {
    id: 'g-ad-05',
    platform: 'google',
    type: 'search',
    headline: 'AI API Pas Cher — Jusqu\'à 70% Moins Chère',
    description: 'Comparatif: OpenAI vs AI-Empire. Mêmes résultats, 70% moins cher. Essai gratuit.',
    cta: 'Comparer',
    landingPage: 'https://ai-empire-steel.vercel.app/pricing?utm_source=google&utm_medium=search&utm_campaign=cheap',
    targetAudience: 'PME, entreprises sensibles au coût',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=cheap',
  },
  {
    id: 'g-ad-06',
    platform: 'google',
    type: 'search',
    headline: 'Générer du Texte avec IA — API Française',
    description: 'API de génération de texte IA. Groq + Gemini. Gratuit pour commencer. Support FR.',
    cta: 'Essayer',
    landingPage: 'https://ai-empire-steel.vercel.app/docs/generate?utm_source=google&utm_medium=search&utm_campaign=generate',
    targetAudience: 'Développeurs, rédacteurs',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=generate',
  },
  {
    id: 'g-ad-07',
    platform: 'google',
    type: 'search',
    headline: 'Template Next.js Premium — AI-Empire',
    description: 'Templates Next.js premium pour portfolio, blog, SaaS. -50% cette semaine. Support FR.',
    cta: 'Voir les Templates',
    landingPage: 'https://ai-empire-steel.vercel.app/templates?utm_source=google&utm_medium=search&utm_campaign=templates',
    targetAudience: 'Développeurs Next.js',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=templates',
  },
  {
    id: 'g-ad-08',
    platform: 'google',
    type: 'search',
    headline: 'Plateforme AI Française — GDPR Natif',
    description: 'AI-Empire: plateforme AI française. GDPR natif. Support en français. Facturation EUR.',
    cta: 'En Savoir Plus',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=google&utm_medium=search&utm_campaign=french',
    targetAudience: 'Entreprises soucieuses du RGPD',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=french',
  },
  {
    id: 'g-ad-09',
    platform: 'google',
    type: 'search',
    headline: 'API Groq Gemini — Unifiée en 1 API',
    description: 'Accédez à Groq et Gemini via une API unifiée. Gratuit pour commencer. Support FR.',
    cta: 'Découvrir',
    landingPage: 'https://ai-empire-steel.vercel.app/docs?utm_source=google&utm_medium=search&utm_campaign=groq-gemini',
    targetAudience: 'Développeurs IA',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=groq-gemini',
  },
  {
    id: 'g-ad-10',
    platform: 'google',
    type: 'search',
    headline: 'AI-Empire — L\'IA pour les PME Françaises',
    description: 'API AI conçue pour les PME françaises. Gratuit, simple, support en français. Essai sans CB.',
    cta: 'Commencer',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=google&utm_medium=search&utm_campaign=pme',
    targetAudience: 'PME françaises',
    trackingParams: '?utm_source=google&utm_medium=search&utm_campaign=pme',
  },
];

// === FACEBOOK ADS COPY (10 variants) ===
export const facebookAds: AdCopy[] = [
  {
    id: 'fb-ad-01',
    platform: 'facebook',
    type: 'awareness',
    headline: '🚀 L\'IA n\'est plus réservée aux géants',
    description: 'AI-Empire: API AI française pour startups. Groq + Gemini. Gratuit pour commencer. En 5 minutes.',
    cta: 'En Savoir Plus',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=facebook&utm_medium=awareness&utm_campaign=launch',
    targetAudience: 'Développeurs, 25-45 ans, France, intérêts: IA, React, Next.js',
    trackingParams: '?utm_source=facebook&utm_medium=awareness&utm_campaign=launch',
  },
  {
    id: 'fb-ad-02',
    platform: 'facebook',
    type: 'awareness',
    headline: '💡 Tu veux intégrer l\'IA dans ton app?',
    description: 'AI-Empire te permet d\'intégrer l\'IA en 5 minutes. Pas de CB requise. Support en français.',
    cta: 'Tester Gratuitement',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=facebook&utm_medium=awareness&utm_campaign=integration',
    targetAudience: 'Développeurs, 25-40 ans, France, tech early adopters',
    trackingParams: '?utm_source=facebook&utm_medium=awareness&utm_campaign=integration',
  },
  {
    id: 'fb-ad-03',
    platform: 'facebook',
    type: 'conversion',
    headline: '⚡ -50% sur NeuraPortfolio',
    description: 'Template Next.js premium. 50+ composants, dark mode, responsive. €49 → €24.99.',
    cta: 'Profiter de l\'Offre',
    landingPage: 'https://ai-empire-steel.vercel.app/templates?utm_source=facebook&utm_medium=conversion&utm_campaign=offer',
    targetAudience: 'Visiteurs site web (7 derniers jours)',
    trackingParams: '?utm_source=facebook&utm_medium=conversion&utm_campaign=offer',
  },
  {
    id: 'fb-ad-04',
    platform: 'facebook',
    type: 'conversion',
    headline: '📊 Comparatif: OpenAI vs AI-Empire',
    description: 'Mêmes résultats, 70% moins cher. API française avec support en français. Essai gratuit.',
    cta: 'Comparer',
    landingPage: 'https://ai-empire-steel.vercel.app/pricing?utm_source=facebook&utm_medium=conversion&utm_campaign=compare',
    targetAudience: 'Utilisateurs OpenAI, France',
    trackingParams: '?utm_source=facebook&utm_medium=conversion&utm_campaign=compare',
  },
  {
    id: 'fb-ad-05',
    platform: 'facebook',
    type: 'awareness',
    headline: '🇫🇷 La première API AI française',
    description: 'AI-Empire: GDPR natif, support en français, facturation EUR. Conçue pour les startups françaises.',
    cta: 'Découvrir',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=facebook&utm_medium=awareness&utm_campaign=french',
    targetAudience: 'Entrepreneurs, founders, France',
    trackingParams: '?utm_source=facebook&utm_medium=awareness&utm_campaign=french',
  },
  {
    id: 'fb-ad-06',
    platform: 'facebook',
    type: 'conversion',
    headline: '💰 Gagne €50 par ami référé',
    description: 'Programme de parrainage AI-Empire. Partage ton lien, gagne de l\'argent. Pas de limite.',
    cta: 'Rejoindre',
    landingPage: 'https://ai-empire-steel.vercel.app/referrals?utm_source=facebook&utm_medium=conversion&utm_campaign=referral',
    targetAudience: 'Utilisateurs actifs, France',
    trackingParams: '?utm_source=facebook&utm_medium=conversion&utm_campaign=referral',
  },
  {
    id: 'fb-ad-07',
    platform: 'facebook',
    type: 'awareness',
    headline: '🎓 Tutoriel: Crée ton assistant AI en 2 min',
    description: 'Étape par étape: comment créer un assistant AI gratuit avec AI-Empire. Vidéo de 2 minutes.',
    cta: 'Regarder',
    landingPage: 'https://ai-empire-steel.vercel.app/docs/tutorial?utm_source=facebook&utm_medium=awareness&utm_campaign=tutorial',
    targetAudience: 'Débutants en IA, 18-35 ans, France',
    trackingParams: '?utm_source=facebook&utm_medium=awareness&utm_campaign=tutorial',
  },
  {
    id: 'fb-ad-08',
    platform: 'facebook',
    type: 'conversion',
    headline: '📈 +35% d\'utilisateurs ce mois-ci!',
    description: 'AI-Empire grandit. Rejoins la communauté de startups françaises qui utilisent l\'IA.',
    cta: 'Rejoindre',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=facebook&utm_medium=conversion&utm_campaign=growth',
    targetAudience: 'Visiteurs site web, non-inscrits',
    trackingParams: '?utm_source=facebook&utm_medium=conversion&utm_campaign=growth',
  },
  {
    id: 'fb-ad-09',
    platform: 'facebook',
    type: 'awareness',
    headline: '🤖 L\'IA pour les PME françaises',
    description: '73% des PME veulent adopter l\'IA. AI-Empire rend ça possible en 5 minutes.',
    cta: 'En Savoir Plus',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=facebook&utm_medium=awareness&utm_campaign=pme',
    targetAudience: 'Dirigeants PME, 35-55 ans, France',
    trackingParams: '?utm_source=facebook&utm_medium=awareness&utm_campaign=pme',
  },
  {
    id: 'fb-ad-10',
    platform: 'facebook',
    type: 'conversion',
    headline: '🎁 Offre lancement: -30% sur NeuraBlog',
    description: 'Template blog premium pour Next.js. Optimisé SEO. €99 → €69. Offre limitée.',
    cta: 'Profiter',
    landingPage: 'https://ai-empire-steel.vercel.app/templates/neurablog?utm_source=facebook&utm_medium=conversion&utm_campaign=launch_offer',
    targetAudience: 'Visiteurs templates, France',
    trackingParams: '?utm_source=facebook&utm_medium=conversion&utm_campaign=launch_offer',
  },
];

// === LINKEDIN ADS COPY (10 variants) ===
export const linkedinAds: AdCopy[] = [
  {
    id: 'li-ad-01',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '🚀 L\'IA pour les startups françaises',
    description: 'AI-Empire: API AI française avec Groq + Gemini. Intégration en 5 minutes. GDPR natif. Support en français.',
    cta: 'Découvrir',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=linkedin&utm_medium=sponsored&utm_campaign=launch',
    targetAudience: 'CTO, Lead Dev, Founder, France, 10-200 employés',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=launch',
  },
  {
    id: 'li-ad-02',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '💡 Comment intégrer l\'IA dans votre SaaS',
    description: 'Guide étape par étape. API AI gratuite. Support en français. 5 minutes d\'intégration.',
    cta: 'Lire le Guide',
    landingPage: 'https://ai-empire-steel.vercel.app/docs?utm_source=linkedin&utm_medium=sponsored&utm_campaign=guide',
    targetAudience: 'Product Managers, CTOs, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=guide',
  },
  {
    id: 'li-ad-03',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '📊 -60% sur les coûts IA',
    description: 'Comment nos clients ont réduit leurs coûts IA de 60%. API française, GDPR natif, support FR.',
    cta: 'Voir le Cas Client',
    landingPage: 'https://ai-empire-steel.vercel.app/case-studies?utm_source=linkedin&utm_medium=sponsored&utm_campaign=case',
    targetAudience: 'CTOs, VP Engineering, France, 50-500 employés',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=case',
  },
  {
    id: 'li-ad-04',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '🇫🇷 Alternative française à OpenAI',
    description: 'AI-Empire: API AI française. Groq + Gemini. Gratuit pour commencer. Facturation EUR.',
    cta: 'Comparer',
    landingPage: 'https://ai-empire-steel.vercel.app/pricing?utm_source=linkedin&utm_medium=sponsored&utm_campaign=alternative',
    targetAudience: 'Entreprises utilisant OpenAI, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=alternative',
  },
  {
    id: 'li-ad-05',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '🤖 L\'IA accessible à toutes les PME',
    description: '73% des PME veulent adopter l\'IA. AI-Empire rend ça possible en 5 minutes, sans budget conséquent.',
    cta: 'En Savoir Plus',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=linkedin&utm_medium=sponsored&utm_campaign=pme',
    targetAudience: 'Dirigeants PME, 35-55 ans, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=pme',
  },
  {
    id: 'li-ad-06',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '💰 Programme d\'affiliation: 30% de commission',
    description: 'Rejoignez notre programme d\'affiliation. 30% de commission récurrente. Dashboard de suivi.',
    cta: 'Rejoindre',
    landingPage: 'https://ai-empire-steel.vercel.app/affiliates?utm_source=linkedin&utm_medium=sponsored&utm_campaign=affiliate',
    targetAudience: 'Influenceurs tech, devrel, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=affiliate',
  },
  {
    id: 'li-ad-07',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '📈 +35% d\'utilisateurs en 1 mois',
    description: 'AI-Empire grandit. Rejoignez la communauté de startups françaises qui utilisent l\'IA.',
    cta: 'Rejoindre',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=linkedin&utm_medium=sponsored&utm_campaign=growth',
    targetAudience: 'Startups, scale-ups, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=growth',
  },
  {
    id: 'li-ad-08',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '🎓 Webinar: Intégrer l\'IA dans votre produit',
    description: 'Rejoignez notre webinar gratuit. Découvrez comment intégrer l\'IA en 5 minutes.',
    cta: 'S\'inscrire',
    landingPage: 'https://ai-empire-steel.vercel.app/webinar?utm_source=linkedin&utm_medium=sponsored&utm_campaign=webinar',
    targetAudience: 'Développeurs, CTOs, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=webinar',
  },
  {
    id: 'li-ad-09',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '🔑 API AI: Gratuit, Simple, Efficace',
    description: 'AI-Empire: API AI française. Groq + Gemini. Intégration en 5 min. Pas de CB requise.',
    cta: 'Tester',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=linkedin&utm_medium=sponsored&utm_campaign=simple',
    targetAudience: 'Développeurs, 25-40 ans, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=simple',
  },
  {
    id: 'li-ad-10',
    platform: 'linkedin',
    type: 'sponsored',
    headline: '🏆 €3,000 MRR en 3 mois',
    description: 'AI-Empire a atteint €3,000 de MRR en 3 mois. Rejoignez l\'aventure.',
    cta: 'Rejoindre',
    landingPage: 'https://ai-empire-steel.vercel.app?utm_source=linkedin&utm_medium=sponsored&utm_campaign=milestone',
    targetAudience: 'Entrepreneurs, founders, France',
    trackingParams: '?utm_source=linkedin&utm_medium=sponsored&utm_campaign=milestone',
  },
];

// === BUDGET RECOMMENDATIONS ===
export const budgetRecommendations: BudgetRecommendation[] = [
  {
    platform: 'Google Ads',
    monthlyBudget: 800,
    objective: 'Intent search — conversions directes',
    expectedCPC: 1.0,
    expectedCTR: 4.0,
    expectedConversion: 6.0,
    roas: 4.0,
  },
  {
    platform: 'Facebook/Instagram Ads',
    monthlyBudget: 500,
    objective: 'Awareness + retargeting',
    expectedCPC: 0.8,
    expectedCTR: 1.5,
    expectedConversion: 3.0,
    roas: 3.5,
  },
  {
    platform: 'LinkedIn Ads',
    monthlyBudget: 200,
    objective: 'B2B targeting — leads qualifiés',
    expectedCPC: 2.5,
    expectedCTR: 0.8,
    expectedConversion: 2.0,
    roas: 2.5,
  },
];

export const getAdsByPlatform = (platform: AdCopy['platform']): AdCopy[] => {
  const allAds = [...googleAds, ...facebookAds, ...linkedinAds];
  return allAds.filter((a) => a.platform === platform);
};

export const getAdsByType = (type: string): AdCopy[] => {
  const allAds = [...googleAds, ...facebookAds, ...linkedinAds];
  return allAds.filter((a) => a.type === type);
};

export const calculateBudget = (
  platform: string,
  monthlyBudget: number,
): {
  estimatedClicks: number;
  estimatedConversions: number;
  estimatedRevenue: number;
  roi: number;
} => {
  const rec = budgetRecommendations.find((b) => b.platform === platform);
  if (!rec) {
    return { estimatedClicks: 0, estimatedConversions: 0, estimatedRevenue: 0, roi: 0 };
  }

  const estimatedClicks = Math.round(monthlyBudget / rec.expectedCPC);
  const estimatedConversions = Math.round(estimatedClicks * (rec.expectedConversion / 100));
  const estimatedRevenue = estimatedConversions * 49; // ARPU €49
  const roi = Math.round(((estimatedRevenue - monthlyBudget) / monthlyBudget) * 100);

  return { estimatedClicks, estimatedConversions, estimatedRevenue, roi };
};
