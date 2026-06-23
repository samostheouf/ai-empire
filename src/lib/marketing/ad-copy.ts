export interface AdCopy {
  id: string
  platform: 'google' | 'facebook' | 'linkedin' | 'twitter'
  variant: 'A' | 'B' | 'C'
  headline: string
  primaryText: string
  description: string
  cta: string
  url: string
  displayUrl?: string
  keywords?: string[]
  audience?: string
  hashtags?: string[]
}

// ============================================================
// GOOGLE ADS — 3 VARIANTES
// ============================================================

export const googleAdsVariants: AdCopy[] = [
  {
    id: 'google_ad_a',
    platform: 'google',
    variant: 'A',
    headline: 'AI Empire — Templates SaaS + IA Intégrée',
    primaryText: 'Créez votre SaaS en 24h. Templates Next.js 14, APIs IA, Stripe inclus. -30% au lancement. Essai gratuit.',
    description: 'Templates professionnels prêts à l\'emploi. APIs GPT-4/Groq/Gemini. Authentification + paiements configurés. Support en français.',
    cta: 'Essayer gratuitement',
    url: 'https://ai-empire-steel.vercel.app',
    displayUrl: 'ai-empire-steel.vercel.app',
    keywords: [
      'template saas nextjs',
      'créer saas rapidement',
      'template ia france',
      'saas template français',
      'nextjs 14 template',
      'ai api integration',
      'template ecommerce saas',
      'saas boilerplate'
    ],
    audience: 'Développeurs, CTOs, fondateurs de startups en France'
  },
  {
    id: 'google_ad_b',
    platform: 'google',
    variant: 'B',
    headline: 'Templates Next.js 14 + IA — Lancez Votre SaaS',
    primaryText: 'Vous rêvez de votre propre SaaS ? AI Empire vous donne tout : templates pro, APIs IA, Stripe, Auth. Déployez en 24h.',
    description: '6 templates premium (€49-199). APIs GPT-4 gratuites. Dashboard admin. Support 24/7. Sans engagement.',
    cta: 'Voir les templates',
    url: 'https://ai-empire-steel.vercel.app/templates',
    displayUrl: 'ai-empire-steel.vercel.app/templates',
    keywords: [
      'nextjs template ecommerce',
      'template blog saas',
      'saas starter kit',
      'template react saas',
      'ai saas template',
      'template landing page',
      'saas boilerplate france',
      'template admin dashboard'
    ],
    audience: 'Indie hackers, freelances, développeurs full-stack'
  },
  {
    id: 'google_ad_c',
    platform: 'google',
    variant: 'C',
    headline: 'Créez Un SaaS En 24 Heures — AI Empire',
    primaryText: 'Templates Next.js 14 + APIs IA puissantes. Stripe, Auth, Dashboard inclus. -30% lancement. Commencez maintenant.',
    description: 'Rejoignez les premiers utilisateurs. Templates de €19 à €199. APIs GPT-4 gratuites. Support en français. Essai gratuit.',
    cta: 'Commencer maintenant',
    url: 'https://ai-empire-steel.vercel.app',
    displayUrl: 'ai-empire-steel.vercel.app',
    keywords: [
      'créer application saas',
      'template saas france',
      'lancer saas rapidement',
      'saas ai template',
      'nextjs saas boilerplate',
      'template premium nextjs',
      'ai api template',
      'saas français'
    ],
    audience: 'Entrepreneurs, Product Managers, CTOs'
  }
]

// ============================================================
// FACEBOOK ADS — 3 VARIANTES
// ============================================================

export const facebookAdsVariants: AdCopy[] = [
  {
    id: 'fb_ad_a',
    platform: 'facebook',
    variant: 'A',
    headline: '🚀 Créez votre SaaS en 24h avec l\'IA',
    primaryText: `Tu rêves de lancer ton propre SaaS mais le développement te prend des semaines ?

AI Empire change la donne :
✅ Templates Next.js 14 professionnels
✅ APIs IA intégrées (GPT-4, Groq)
✅ Stripe + Authentification configurés
✅ Dashboard admin complet

🎁 Offre de lancement : -30% sur tous les templates !

Rejoignez les premiers utilisateurs. Rejoins-les !`,
    description: 'Templates SaaS premium + APIs IA. Lancez votre projet en 24h.',
    cta: 'Commencer gratuitement',
    url: 'https://ai-empire-steel.vercel.app',
    audience: 'France, 25-45 ans, Intérêts : JavaScript, React, AI, Startups, SaaS, Freelance',
    hashtags: ['#AIEmpire', '#SaaS', '#NextJS', '#AI', '#StartupFrance']
  },
  {
    id: 'fb_ad_b',
    platform: 'facebook',
    variant: 'B',
    headline: '⚡ SaaS lancés avec AI Empire',
    primaryText: `"AI Empire m'a permis de lancer mon SaaS en 24h au lieu des 3 mois prévus." — Marie D.

Voici ce que tu obtiens :
🎨 Templates Next.js 14 responsive et modernes
🤖 APIs IA intégrées (GPT-4, Gemini, Groq)
💳 Paiements Stripe + authentification sécurisée
📊 Dashboard admin professionnel

🔥 Offre lancement : -30% avec le code LAUNCH30

Plus d'excuses. Lance ton SaaS aujourd'hui.`,
    description: 'La plateforme n°1 pour créer des SaaS avec l\'IA. Templates + APIs inclus.',
    cta: 'Voir les templates',
    url: 'https://ai-empire-steel.vercel.app/templates',
    audience: 'France, 25-45 ans, Intérêts : Indépendant, Freelance, Web Development, AI',
    hashtags: ['#AIEmpire', '#Freelance', '#IndieHacker', '#Templates', '#IA']
  },
  {
    id: 'fb_ad_c',
    platform: 'facebook',
    variant: 'C',
    headline: '💰 Prix : à partir de €19 — Templates SaaS IA',
    primaryText: `Les templates SaaS les plus abordables du marché :

📦 NeuraBlog — €19 (blog premium)
📦 NeuraStore — €29 (e-commerce)
📦 NeuraPortfolio — €29 (portfolio)
📦 Bundle 6 templates — €299 (-40%)

✅ APIs IA gratuites incluses
✅ Stripe + Auth configurés
✅ Support en français
✅ Code 100% propriétaire

⏰ Offre -30% lancement : code LAUNCH30

Investis dans ton avenir. Pas dans des mois de dev.`,
    description: 'Templates SaaS à partir de €19. APIs IA gratuites. Support FR.',
    cta: 'Découvrir les prix',
    url: 'https://ai-empire-steel.vercel.app/pricing',
    audience: 'France, 25-50 ans, Intérêts : Budget, Économies, Startups, Tech',
    hashtags: ['#AIEmpire', '#Promo', '#SaaS', '#Templates', '#TechFR']
  }
]

// ============================================================
// LINKEDIN ADS — 3 VARIANTES
// ============================================================

export const linkedinAdsVariants: AdCopy[] = [
  {
    id: 'linkedin_ad_a',
    platform: 'linkedin',
    variant: 'A',
    headline: 'Intégrez l\'IA dans votre produit — Sans équipe ML',
    primaryText: `73% des PME françaises adoptent l'IA en 2025 (Gartner FR).

Le problème : intégrer l'IA coûte cher et prend du temps.

AI Empire résout ça :
→ Templates Next.js 14 professionnels
→ APIs IA intégrées (GPT-4, Groq, Gemini)
→ Intégration en 5 minutes
→ Pas besoin d'expert ML

Resultat : Vous lancez votre feature IA en 24h, pas en 6 mois.

Découvrez comment les premiers utilisateurs ont déjà intégré l'IA dans leurs produits.`,
    description: 'La plateforme AI pour les CTOs et Product Managers qui veulent intégrer l\'IA rapidement.',
    cta: 'En savoir plus',
    url: 'https://ai-empire-steel.vercel.app',
    audience: 'France, CTO, Lead Developer, Founder, Product Manager, Entreprises 10-200 employés, Tech/SaaS/E-commerce'
  },
  {
    id: 'linkedin_ad_b',
    platform: 'linkedin',
    variant: 'B',
    headline: 'Votre prochain SaaS pourrait être prêt en 24 heures',
    primaryText: `"Le marché français a besoin d'une alternative locale aux APIs IA américaines."

AI Empire est cette alternative :
🇫🇷 French-first, support en français
💳 Facturation EUR, RGPD natif
🚀 Templates Next.js 14 + APIs IA
💰 Pricing adapté aux startups françaises

Ce que nos clients disent :
"AI Empire a réduit notre temps de développement de 60%." — Thomas M., CTO

Offre de lancement : -30% sur les templates.
Rejoignez la révolution AI française.`,
    description: 'Templates SaaS + APIs IA pour les startups et PME françaises.',
    cta: 'Rejoindre AI Empire',
    url: 'https://ai-empire-steel.vercel.app',
    audience: 'France, Startup Founders, CTOs, PMs, Scale-ups, Tech Companies'
  },
  {
    id: 'linkedin_ad_c',
    platform: 'linkedin',
    variant: 'C',
    headline: 'Comment réduire le coût de développement de 60%',
    primaryText: `Le développement d'un SaaS sur mesure peut coûter plusieurs dizaines de milliers d'euros et prendre des mois.

Avec AI Empire :
→ €19-69 pour un template complet
→ Quelques heures de développement au lieu de mois
→ APIs IA gratuites incluses
→ Stripe + Auth déjà configurés

Économie réelle : €49,000 et 5 mois et demi.

Les premiers utilisateurs l'ont déjà fait. Et vous ?

Découvrez comment AI Empire transforme la création de SaaS.`,
    description: 'Templates SaaS + APIs IA. Économisez 95% sur le développement.',
    cta: 'Calculer mon économie',
    url: 'https://ai-empire-steel.vercel.app/pricing',
    audience: 'France, CTOs, VP Engineering, Finance Managers, Tech Decision Makers'
  }
]

// ============================================================
// TWITTER ADS — 3 VARIANTES
// ============================================================

export const twitterAdsVariants: AdCopy[] = [
  {
    id: 'twitter_ad_a',
    platform: 'twitter',
    variant: 'A',
    headline: 'Templates SaaS + IA — Lance en 24h',
    primaryText: `🚀 AI Empire : Templates Next.js 14 + APIs IA

✅ GPT-4, Groq, Gemini intégrés
✅ Stripe + Auth configurés
✅ Dashboard admin inclus
✅ À partir de €19

🎁 -30% lancement : code LAUNCH30

Les premiers utilisateurs nous font confiance.

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI`,
    description: 'Templates SaaS premium + APIs IA. Lancez votre projet en 24h.',
    cta: 'Essayer gratuitement',
    url: 'https://ai-empire-steel.vercel.app',
    hashtags: ['#AIEmpire', '#SaaS', '#NextJS', '#AI', '#IndieHacker']
  },
  {
    id: 'twitter_ad_b',
    platform: 'twitter',
    variant: 'B',
    headline: 'J\'ai lancé mon SaaS en 24h avec €0 de budget infra',
    primaryText: `Thread 🧵 Comment j'ai lancé un SaaS en 24h :

1/ AI Empire fournit des templates Next.js 14 + APIs IA
2/ J'ai choisi NeuraStore (template e-commerce) → €29
3/ J'ai connecté Stripe en 5 minutes
4/ J'ai déployé sur Vercel en 3 minutes
5/ Résultat : SaaS fonctionnel en 24h

Coût total : €29 + €0 de budget infra

-30% lancement : code LAUNCH30

👉 ai-empire-steel.vercel.app`,
    description: 'Templates SaaS + APIs IA. Témoignage d\'un indie hacker.',
    cta: 'Voir le template',
    url: 'https://ai-empire-steel.vercel.app/templates',
    hashtags: ['#AIEmpire', '#IndieHacker', '#BuildInPublic', '#SaaS', '#Launch']
  },
  {
    id: 'twitter_ad_c',
    platform: 'twitter',
    variant: 'C',
    headline: '€19 et tu as ton SaaS. Sans blague.',
    primaryText: `Le template le moins cher du marché :

NeuraBlog — €19
✅ Blog premium Next.js 14
✅ APIs IA intégrées
✅ Design responsive
✅ SEO optimisé
✅ Support inclus

Et si tu veux tout :
Bundle 6 templates — €299 (-40%)

-30% lancement : code LAUNCH30

Plus d'excuses. Lance ton SaaS.

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #Budget`,
    description: 'Templates SaaS à partir de €19. Le plus abordable du marché.',
    cta: 'Voir les prix',
    url: 'https://ai-empire-steel.vercel.app/pricing',
    hashtags: ['#AIEmpire', '#Budget', '#SaaS', '#Templates', '#TechFR']
  }
]

// ============================================================
// FONCTIONS UTILITAIRES
// ============================================================

export function getAllAdCopies(): AdCopy[] {
  return [
    ...googleAdsVariants,
    ...facebookAdsVariants,
    ...linkedinAdsVariants,
    ...twitterAdsVariants,
  ]
}

export function getAdCopiesByPlatform(platform: AdCopy['platform']): AdCopy[] {
  return getAllAdCopies().filter(ad => ad.platform === platform)
}

export function getAdCopyByVariant(platform: AdCopy['platform'], variant: AdCopy['variant']): AdCopy | undefined {
  return getAllAdCopies().find(ad => ad.platform === platform && ad.variant === variant)
}

export function generateAdId(): string {
  return `ad_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function formatGoogleAdHeadline(headline: string): string {
  return headline.length <= 30 ? headline : headline.substring(0, 27) + '...'
}

export function formatTwitterAdText(text: string): string {
  return text.length <= 280 ? text : text.substring(0, 277) + '...'
}
