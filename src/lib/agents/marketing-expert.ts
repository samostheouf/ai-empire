import { callAI } from '@/lib/ai'

export interface MarketingRequest {
  type: 'social-media' | 'email-campaign' | 'conversion' | 'strategy'
  goal?: string
  audience?: string
  budget?: number
  channels?: string[]
  timeframe?: string
}

export interface MarketingPlan {
  id: string
  type: string
  strategy: string
  actions: MarketingAction[]
  metrics: MarketingMetrics
  estimatedROI: number
  generatedAt: Date
  tokensUsed: number
  provider: string
}

export interface MarketingAction {
  channel: string
  action: string
  frequency: string
  content: string
  cta: string
  deadline: string
}

export interface MarketingMetrics {
  targetAudience: string
  estimatedReach: number
  estimatedConversions: number
  budgetAllocation: Record<string, number>
  kpis: string[]
}

const SYSTEM_PROMPT = `Tu es un expert marketing digital pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu crées des stratégies marketing efficaces en français. Tu te concentres sur:
- L'acquisition organique et payante
- L'optimisation du taux de conversion
- L'engagement sur les réseaux sociaux
- Les campagnes email efficaces
Tu responds toujours avec des actions concrètes et mesurables.`

function generateId(): string {
  return `marketing_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export async function executeMarketingPlan(request: MarketingRequest): Promise<MarketingPlan> {
  const id = generateId()

  let prompt = ''
  switch (request?.type) {
    case 'social-media':
      prompt = `Crée un calendrier de contenu réseaux sociaux pour NeuraAPI.
Objectif: ${request.goal || 'Augmenter la notoriété et les ventes'}
Audience: ${request?.audience || 'Développeurs et entrepreneurs'}
Canaux: ${request?.channels?.join(', ') || 'Twitter, LinkedIn, Instagram'}
Période: ${request.timeframe || '2 semaines'}

Format: 10 posts avec {channel, content, hashtags, cta, scheduledDate}`
      break

    case 'email-campaign':
      prompt = `Planifie une campagne email pour NeuraAPI.
Objectif: ${request.goal || 'Convertir les leads en clients'}
Budget: ${request?.budget || 500}€
Période: ${request.timeframe || '1 mois'}

Format: Séquence de 5 emails avec {subject, preview, body, cta, delay}
Inclus: welcome, nurture, conversion, re-engagement, upsell`
      break

    case 'conversion':
      prompt = `Analyse et optimise le taux de conversion de NeuraAPI.
Objectif: ${request.goal || 'Augmenter les conversions de 20%'}
Contexte: Landing page templates + checkout

Retourne: 5 actions concrètes avec {element, problem, solution, expectedImpact, priority}`
      break

    case 'strategy':
      prompt = `Élabore une stratégie marketing globale pour NeuraAPI.
Objectif: ${request.goal || 'Atteindre 10k€/mois de CA'}
Budget: ${request?.budget || 2000}€/mois
Période: ${request.timeframe || '3 mois'}

Retourne: Stratégie par canal avec objectifs, KPIs, et plan d'action mensuel`
      break
  }

  const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 2000)

  let parsed = parseAIResponse(result.content)
  if (!parsed) {
    parsed = generateFallbackPlan(request)
  }

  return {
    id,
    type: request?.type,
    strategy: parsed.strategy || 'Stratégie optimisée pour la croissance',
    actions: parsed.actions || [],
    metrics: parsed.metrics || getDefaultMetrics(request),
    estimatedROI: parsed.estimatedROI || 250,
    generatedAt: new Date(),
    tokensUsed: result.tokensUsed,
    provider: result.provider
  }
}

function parseAIResponse(content: string): Partial<MarketingPlan> | null {
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
  } catch {
    // Fallback
  }
  return null
}

function getDefaultMetrics(request: MarketingRequest): MarketingMetrics {
  return {
    targetAudience: request?.audience || 'Développeurs tech, entrepreneurs SaaS',
    estimatedReach: 50000,
    estimatedConversions: 500,
    budgetAllocation: {
      'Contenu organique': 40,
      'Publicité payante': 30,
      'Email marketing': 20,
      'Partenariats': 10
    },
    kpis: [
      'Taux de conversion landing page',
      'Coût d\'acquisition client (CAC)',
      'Valeur vie client (LTV)',
      'Taux d\'ouverture email',
      'Engagement réseaux sociaux'
    ]
  }
}

function generateFallbackPlan(request: MarketingRequest): Partial<MarketingPlan> {
  const plans: Record<string, Partial<MarketingPlan>> = {
    'social-media': {
      strategy: 'Contenu éducatif + témoignages clients + démos produits',
      actions: [
        { channel: 'Twitter', action: 'Thread éducatif', frequency: '3x/semaine', content: 'Conseils IA et développement', cta: 'Découvrir NeuraAPI', deadline: 'Immédiat' },
        { channel: 'LinkedIn', action: 'Post cas client', frequency: '2x/semaine', content: 'Études de cas et résultats', cta: 'Voir les templates', deadline: 'Immédiat' },
        { channel: 'Instagram', action: 'Carrousel bénéfices', frequency: '3x/semaine', content: 'Visuels produits et features', cta: 'Lien en bio', deadline: 'Immédiat' }
      ],
      metrics: getDefaultMetrics(request),
      estimatedROI: 300
    },
    'email-campaign': {
      strategy: 'Séquence de nurturing en 5 étapes',
      actions: [
        { channel: 'Email', action: 'Welcome', frequency: 'Jour 0', content: 'Bienvenue + offre -10%', cta: 'Découvrir', deadline: 'Automatique' },
        { channel: 'Email', action: 'Nurture', frequency: 'Jour 3', content: 'Guide gratuit IA', cta: 'Télécharger', deadline: 'Automatique' },
        { channel: 'Email', action: 'Conversion', frequency: 'Jour 7', content: 'Témoignages + urgence', cta: 'Acheter maintenant', deadline: 'Automatique' },
        { channel: 'Email', action: 'Relance', frequency: 'Jour 14', content: 'Offre limitée', cta: 'Profiter', deadline: 'Automatique' },
        { channel: 'Email', action: 'Upsell', frequency: 'Jour 30', content: 'Nouveaux templates', cta: 'Voir la collection', deadline: 'Automatique' }
      ],
      metrics: getDefaultMetrics(request),
      estimatedROI: 400
    },
    'conversion': {
      strategy: 'Optimisation par testing et personnalisation',
      actions: [
        { channel: 'Landing', action: 'A/B test CTA', frequency: 'Continue', content: 'Tester "Commencer" vs "Découvrir"', cta: 'Mesurer', deadline: '2 semaines' },
        { channel: 'Pricing', action: 'Ancrage prix', frequency: 'Continue', content: 'Afficher le prix barré', cta: 'Sauvegarder', deadline: '1 semaine' },
        { channel: 'Social Proof', action: 'Témoignages', frequency: 'Continue', content: 'Ajouter 3 témoignages clients', cta: 'Installer', deadline: '1 semaine' },
        { channel: 'Urgency', action: 'Timer promotion', frequency: 'Continue', content: 'Compteur à rebours', cta: 'Acheter', deadline: 'Automatique' },
        { channel: 'Checkout', action: 'Simplifier formulaire', frequency: 'Continue', content: 'Réduire les champs à 3', cta: 'Payer', deadline: '2 semaines' }
      ],
      metrics: getDefaultMetrics(request),
      estimatedROI: 200
    },
    'strategy': {
      strategy: 'Croissance organique + partenariats stratégiques',
      actions: [
        { channel: 'SEO', action: 'Contenu blog', frequency: '2 articles/semaine', content: 'Guides IA et templates', cta: 'Lire', deadline: 'Continue' },
        { channel: 'Partenariats', action: 'Guest posting', frequency: '2 posts/mois', content: 'Articles sur blogs tech', cta: 'En savoir plus', deadline: 'Mensuel' },
        { channel: 'Communauté', action: 'Discord/Slack', frequency: 'Quotidien', content: 'Support et conseils', cta: 'Rejoindre', deadline: 'Continue' },
        { channel: 'Paid', action: 'Google Ads', frequency: 'Continue', content: 'Campagnes shopping', cta: 'Acheter', deadline: 'Continue' },
        { channel: 'Referral', action: 'Programme parrainage', frequency: 'Continue', content: '-20% pour les deux', cta: 'Parrainer', deadline: 'Automatique' }
      ],
      metrics: getDefaultMetrics(request),
      estimatedROI: 350
    }
  }

  return plans[request?.type] || plans.strategy
}

export const marketingExpertAgent = {
  name: 'Expert Marketing',
  id: 'marketing-expert',
  description: 'Planifie les posts, gère les campagnes email, optimise les conversions',
  execute: executeMarketingPlan
}
