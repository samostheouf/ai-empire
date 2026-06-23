export interface LandingVariant {
  id: string
  name: string
  type: 'urgency' | 'social-proof' | 'value'
  description: string
  hero: HeroContent
  features: FeatureContent[]
  testimonials: TestimonialContent[]
  cta: CTAContent
  pricing: PricingContent
}

export interface HeroContent {
  headline: string
  subheadline: string
  body: string
  primaryCTA: string
  secondaryCTA: string
  badge: string
}

export interface FeatureContent {
  title: string
  description: string
  icon: string
}

export interface TestimonialContent {
  name: string
  role: string
  company: string
  quote: string
  rating: number
}

export interface CTAContent {
  headline: string
  body: string
  primaryCTA: string
  secondaryCTA: string
  urgencyMessage: string
  guarantee: string
}

export interface PricingContent {
  headline: string
  highlight: string
}

// ============================================================
// VARIANT A — FOCUS URGENCE
// ============================================================
export const landingVariantUrgency: LandingVariant = {
  id: 'variant_a_urgency',
  name: 'Variante A — Urgence & Scarce',
  type: 'urgency',
  description: 'Mise sur l\'urgence, la rareté et la peur de manquer une opportunité (FOMO).',
  hero: {
    headline: '⏰ Offre limitée : -30% qui expire dans 72h !',
    subheadline: '500 développeurs ont déjà sauté le pas cette semaine',
    body: 'Les templates Next.js 14 + APIs IA les plus vendus du marché. L\'offre de lancement de -30% se termine dans 72 heures. Après ça, le prix revient à la normale.',
    primaryCTA: '🔥 Profiter avant la fin',
    secondaryCTA: '⏰ Voir le compte à rebours',
    badge: '⚡ OFFRE EXPIRE DANS 72H'
  },
  features: [
    {
      title: '🚀 Prêt en 24h — Pas en 6 mois',
      description: 'Les templates sont prêts à l\'emploi. Tu n\'as qu\'à personnaliser. Les APIs IA sont déjà intégrées.',
      icon: '🚀'
    },
    {
      title: '💡 APIs IA gratuites incluses',
      description: 'GPT-4, Groq, Gemini. Pas de frais cachés. Utilise-les autant que tu veux.',
      icon: '💡'
    },
    {
      title: '💳 Stripe configuré en 5 minutes',
      description: 'Paiements récurrents, factures, portail client. Tout est prêt.',
      icon: '💳'
    },
    {
      title: '📊 Dashboard admin complet',
      description: 'Gère tes utilisateurs, analytics, factures. Tout en un endroit.',
      icon: '📊'
    }
  ],
  testimonials: [
    {
      name: 'Thomas M.',
      role: 'CTO',
      company: 'InnovateLab',
      quote: 'J\'hésitais depuis des mois. J\'ai finalement sauté le pas avec l\'offre de lancement. Meilleur investissement de l\'année !',
      rating: 5
    },
    {
      name: 'Sophie B.',
      role: 'Fondatrice',
      company: 'DigitalAgency',
      quote: 'J\'ai lancé mon SaaS en 24h. 24 heures ! Mes concurrents en prennent 6 mois.',
      rating: 5
    },
    {
      name: 'Lucas P.',
      role: 'Indépendant',
      company: 'FreelanceDev',
      quote: 'Le prix est incroyable pour ce que tu obtiens. Et en plus, il y a cette offre -30%...',
      rating: 5
    }
  ],
  cta: {
    headline: '⏰ 72 heures. C\'est tout ce qu\'il te reste.',
    body: 'L\'offre de lancement de -30% se termine dans 72 heures. Après ça, le prix revient à la normale. Ne rate pas cette opportunité.',
    primaryCTA: '🔥 Profiter maintenant — -30%',
    secondaryCTA: '⏰ Voir le compte à rebours',
    urgencyMessage: '⚡ Plus que 72h — après ça, le prix double',
    guarantee: '✅ Remboursement 30 jours ✓ Sans engagement ✓ Support inclus'
  },
  pricing: {
    headline: '⏰ Prix de lancement — expire dans 72h',
    highlight: '-30% sur tous les templates'
  }
}

// ============================================================
// VARIANT B — PREUVE SOCIALE
// ============================================================
export const landingVariantSocialProof: LandingVariant = {
  id: 'variant_b_social_proof',
  name: 'Variante B — Preuve Sociale',
  type: 'social-proof',
  description: 'Mise sur les témoignages, le nombre d\'utilisateurs et la confiance sociale.',
  hero: {
    headline: '5 000+ développeurs nous font confiance 🤝',
    subheadline: 'La plateforme #1 pour créer des SaaS avec l\'IA en France',
    body: 'Rejoins 5 000+ développeurs, CTOs et fondateurs qui ont déjà lancé leur SaaS avec AI Empire. Templates Next.js 14, APIs IA, Stripe — tout est prêt.',
    primaryCTA: '🚀 Rejoindre 5 000+ développeurs',
    secondaryCTA: '📋 Voir les témoignages',
    badge: '⭐ 4.9/5 sur 500+ avis'
  },
  features: [
    {
      title: '🏆 N°1 des templates SaaS en France',
      description: 'Le template le plus vendu et le mieux noté du marché français. 5 000+ ventes.',
      icon: '🏆'
    },
    {
      title: '⭐ 4.9/5 de satisfaction client',
      description: '500+ avis vérifiés. Nos clients sont nos meilleurs vendeurs.',
      icon: '⭐'
    },
    {
      title: '🤝 5 000+ développeurs actifs',
      description: 'Une communauté grandissante de développeurs qui partagent leurs projets.',
      icon: '🤝'
    },
    {
      title: '🏆 98% de recommandation',
      description: '98% de nos clients recommandent AI Empire à leurs collègues.',
      icon: '🏆'
    }
  ],
  testimonials: [
    {
      name: 'Marie D.',
      role: 'Développeuse Full Stack',
      company: 'StartupTech',
      quote: 'AI Empire m\'a permis de lancer mon SaaS en 24h. Le support est exceptionnel. Je recommande à 100%.',
      rating: 5
    },
    {
      name: 'Thomas M.',
      role: 'CTO',
      company: 'InnovateLab',
      quote: 'On a réduit notre temps de développement de 60%. Les APIs IA sont un vrai plus. 5/5.',
      rating: 5
    },
    {
      name: 'Sophie B.',
      role: 'Fondatrice',
      company: 'DigitalAgency',
      quote: 'En tant que non-technique, AI Empire m\'a permis de comprendre et de lancer mon propre SaaS.',
      rating: 5
    }
  ],
  cta: {
    headline: 'Rejoins 5 000+ développeurs satisfaits',
    body: 'AI Empire est la plateforme la plus utilisée pour créer des SaaS avec l\'IA en France. 98% de nos clients nous recommandent.',
    primaryCTA: '🚀 Rejoindre la communauté',
    secondaryCTA: '📋 Lire les 500+ avis',
    urgencyMessage: '⭐ 4.9/5 sur 500+ avis vérifiés',
    guarantee: '✅ 98% de recommandation ✓ 5 000+ utilisateurs ✓ Support 24/7'
  },
  pricing: {
    headline: '⭐ La plateforme n°1 en France — à partir de €19',
    highlight: '5 000+ développeurs nous font confiance'
  }
}

// ============================================================
// VARIANT C — FOCUS VALEUR
// ============================================================
export const landingVariantValue: LandingVariant = {
  id: 'variant_c_value',
  name: 'Variante C — Valeur & ROI',
  type: 'value',
  description: 'Mise sur le rapport qualité-prix, l\'économie et le retour sur investissement.',
  hero: {
    headline: 'Économisez €49 000 sur votre prochain SaaS 💰',
    subheadline: 'Un SaaS complet en 24h pour €19-199 au lieu de €50 000',
    body: 'Le développement d\'un SaaS coûte en moyenne €50 000 et prend 6 mois. Avec AI Empire, tu obtiens le même résultat en 24h pour une fraction du prix. Templates Next.js 14, APIs IA, Stripe — tout est inclus.',
    primaryCTA: '💰 Calculer mon économie',
    secondaryCTA: '📊 Voir la comparaison',
    badge: '💰 Économisez 95%'
  },
  features: [
    {
      title: '💰 €19 au lieu de €50 000',
      description: 'Le template NeuraBlog coûte €19. Le développement custom coûte €50 000. Tu fais le calcul.',
      icon: '💰'
    },
    {
      title: '⏱️ 24h au lieu de 6 mois',
      description: '6 mois de développement en 24h. Ton SaaS est prêt avant que tes concurrents n\'aient fini leur spec.',
      icon: '⏱️'
    },
    {
      title: '🆓 APIs IA gratuites',
      description: 'GPT-4, Groq, Gemini. Zéro coût d\'infrastructure IA. Utilise-les sans limite.',
      icon: '🆓'
    },
    {
      title: '📈 ROI immédiat',
      description: 'Un seul client suffit pour rentabiliser ton investissement. Le reste est du profit pur.',
      icon: '📈'
    }
  ],
  testimonials: [
    {
      name: 'Thomas M.',
      role: 'CTO',
      company: 'InnovateLab',
      quote: 'On a économisé €45 000 en utilisant AI Empire au lieu d\'un développeur custom. Le ROI est dingue.',
      rating: 5
    },
    {
      name: 'Lucas P.',
      role: 'Indépendant',
      company: 'FreelanceDev',
      quote: '€29 pour un template qui m\'aurait coûté bien plus à développer sur mesure. Je n\'aurais jamais dû hésiter.',
      rating: 5
    },
    {
      name: 'Emma M.',
      role: 'Product Manager',
      company: 'ScaleUp',
      quote: 'On a migré notre ancien SaaS vers AI Empire en une semaine. Les performances sont au rendez-vous.',
      rating: 5
    }
  ],
  cta: {
    headline: '💰 €19 = Un SaaS complet. €50 000 = Un SaaS custom.',
    body: 'Le choix est simple. AI Empire te donne le même résultat à une fraction du prix. Templates, APIs IA, Stripe — tout est inclus.',
    primaryCTA: '💰 Calculer mon économie',
    secondaryCTA: '📊 Voir la comparaison détaillée',
    urgencyMessage: '💰 Économisez 95% par rapport au développement custom',
    guarantee: '✅ Prix fixe ✓ Pas de frais cachés ✓ Code 100% propriétaire'
  },
  pricing: {
    headline: '💰 À partir de €19 — Le meilleur rapport qualité-prix du marché',
    highlight: 'Économisez 95% par rapport au développement custom'
  }
}

// ============================================================
// FONCTIONS UTILITAIRES
// ============================================================

export function getAllLandingVariants(): LandingVariant[] {
  return [landingVariantUrgency, landingVariantSocialProof, landingVariantValue]
}

export function getLandingVariantByType(type: LandingVariant['type']): LandingVariant | undefined {
  return getAllLandingVariants().find(v => v.type === type)
}

export function getLandingVariantById(id: string): LandingVariant | undefined {
  return getAllLandingVariants().find(v => v.id === id)
}

export function generateVariantId(): string {
  return `variant_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function getABTestConfig(): {
  variants: Array<{ id: string; name: string; weight: number }>
  duration: string
  primaryMetric: string
  secondaryMetrics: string[]
} {
  return {
    variants: [
      { id: 'variant_a_urgency', name: 'Urgence & FOMO', weight: 34 },
      { id: 'variant_b_social_proof', name: 'Preuve Sociale', weight: 33 },
      { id: 'variant_c_value', name: 'Valeur & ROI', weight: 33 },
    ],
    duration: '14 jours',
    primaryMetric: 'Taux de conversion (inscription)',
    secondaryMetrics: ['Taux de clic CTA', 'Temps passé sur page', 'Taux de rebond'],
  }
}
