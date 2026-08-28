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
    // 100% éthique : aucun faux témoignage — tableau vide jusqu'à preuves vérifiées
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
  description: 'Mise sur les témoignages vérifiés et la confiance (affichage conditionnel si témoignages disponibles).',
  hero: {
    headline: 'Des templates pensés pour ton prochain SaaS 🤝',
    subheadline: 'Templates Next.js + APIs IA + Stripe, prêts en 24h',
    body: 'Templates Next.js 14, APIs IA, Stripe — tout est prêt pour lancer ton SaaS rapidement. Témoignages vérifiés affichés dès les premiers retours clients.',
    primaryCTA: '🚀 Découvrir les templates',
    secondaryCTA: '📋 Voir les templates',
    badge: '⭐ Templates vérifiés par la communauté'
  },
  features: [
    {
      title: '🏆 Templates SaaS complets',
      description: 'Auth, Stripe, dashboard admin, emails — tout est déjà câblé.',
      icon: '🏆'
    },
    {
      title: '⭐ Satisfaction prioritaire',
      description: 'Garantie 14 jours satisfait ou remboursé. Ton avis compte.',
      icon: '⭐'
    },
    {
      title: '🤝 Communauté grandissante',
      description: 'Rejoins les premiers développeurs qui construisent avec AI Empire.',
      icon: '🤝'
    },
    {
      title: '🏆 Garantie 14 jours',
      description: 'Pas satisfait ? Remboursement intégral sous 14 jours.',
      icon: '🏆'
    }
  ],
  testimonials: [
    // 100% éthique : aucun faux témoignage — tableau vide jusqu'à preuves vérifiées
  ],
  cta: {
    headline: 'Des templates prêts quand tu l’es',
    body: 'Templates Next.js complets, APIs IA et Stripe déjà configurés. Garantie 14 jours.',
    primaryCTA: '🚀 Découvrir les templates',
    secondaryCTA: '📋 Voir la doc',
    urgencyMessage: '⭐ Avis vérifiés dès les premiers clients',
    guarantee: '✅ Garantie 14 jours ✓ Support inclus ✓ Mises à jour à vie'
  },
  pricing: {
    headline: '⭐ Templates Next.js complets — à partir de €19',
    highlight: 'Garantie 14 jours satisfait ou remboursé'
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
    // 100% éthique : aucun faux témoignage — tableau vide jusqu'à preuves vérifiées
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
