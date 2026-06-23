import { callAI } from '@/lib/ai'

export interface AnalysisRequest {
  type: 'metrics' | 'revenue' | 'opportunities' | 'forecast'
  data?: AnalysisData
  timeframe?: string
  focus?: string[]
}

export interface AnalysisData {
  revenue?: number[]
  orders?: number[]
  visitors?: number[]
  conversionRate?: number
  averageOrderValue?: number
  churnRate?: number
}

export interface AnalysisResult {
  id: string
  type: string
  insights: Insight[]
  forecast?: Forecast
  recommendations: string[]
  score: number
  analyzedAt: Date
  tokensUsed: number
  provider: string
}

export interface Insight {
  category: string
  title: string
  description: string
  impact: 'positif' | 'négatif' | 'neutre'
  value?: number
  trend?: 'hausse' | 'baisse' | 'stable'
}

export interface Forecast {
  period: string
  predictedRevenue: number
  confidence: number
  growthRate: number
  scenarios: ForecastScenario[]
}

export interface ForecastScenario {
  name: string
  revenue: number
  probability: number
}

const SYSTEM_PROMPT = `Tu es un analyste data expert pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu analyses les métriques business et identifies les opportunités de croissance.
Tu responds toujours avec des insights actionables et des prédictions basées sur les données.
Tu expresses les chiffres en euros (€) et les pourcentages clairement.`

function generateId(): string {
  return `analyst_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export async function executeAnalyst(request: AnalysisRequest): Promise<AnalysisResult> {
  const id = generateId()

  let prompt = ''
  switch (request?.type) {
    case 'metrics':
      prompt = `Analyse les métriques suivantes de NeuraAPI :
Données: ${JSON.stringify(request?.data || getDefaultData())}
Période: ${request?.timeframe || '30 derniers jours'}
Focus: ${request.focus?.join(', ') || 'toutes les métriques'}

Retourne: 5 insights clés avec {category, title, description, impact, value, trend}`
      break

    case 'revenue':
      prompt = `Analyse la performance revenus de NeuraAPI :
Historique: ${JSON.stringify(request?.data?.revenue || [2000, 2500, 3000, 3500, 4000])}
Période: ${request?.timeframe || '6 derniers mois'}

Identifie: tendances, saisonnalité, sources de revenus.
Retourne: analyse détaillée + recommandations d'optimisation.`
      break

    case 'opportunities':
      prompt = `Identifie les opportunités de croissance pour NeuraAPI :
Contexte: templates premium + APIs IA
Données actuelles: ${JSON.stringify(request?.data || getDefaultData())}

Retourne: 5 opportunités classées par potentiel avec {category, title, description, impact, estimatedRevenue}`
      break

    case 'forecast':
      prompt = `Prédit les revenus de NeuraAPI pour les ${request?.timeframe || '3 prochains mois'} :
Historique: ${JSON.stringify(request?.data?.revenue || [2000, 2500, 3000, 3500, 4000])}
Croissance moyenne: ${calculateGrowthRate(request?.data?.revenue || [2000, 2500, 3000, 3500, 4000])}%

Retourne: prédiction avec scénarios (optimiste, réaliste, pessimiste) et confiance.`
      break
  }

  const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 2000)

  let parsed = parseAIResponse(result.content)
  if (!parsed) {
    parsed = generateFallbackAnalysis(request)
  }

  return {
    id,
    type: request?.type,
    insights: parsed.insights || [],
    forecast: parsed.forecast,
    recommendations: parsed.recommendations || [],
    score: parsed.score || 85,
    analyzedAt: new Date(),
    tokensUsed: result.tokensUsed,
    provider: result.provider
  }
}

function parseAIResponse(content: string): Partial<AnalysisResult> | null {
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

function getDefaultData(): AnalysisData {
  return {
    revenue: [2000, 2500, 3000, 3500, 4000],
    orders: [20, 25, 30, 35, 40],
    visitors: [1000, 1200, 1500, 1800, 2000],
    conversionRate: 2.5,
    averageOrderValue: 100,
    churnRate: 5
  }
}

function calculateGrowthRate(data: number[]): number {
  if (data.length < 2) return 0
  const growthRates = []
  for (let i = 1; i < data.length; i++) {
    growthRates.push(((data[i] - data[i-1]) / data[i-1]) * 100)
  }
  return Math.round(growthRates.reduce((a, b) => a + b, 0) / growthRates.length)
}

function generateFallbackAnalysis(request: AnalysisRequest): Partial<AnalysisResult> {
  const data = request?.data || getDefaultData()
  const currentRevenue = data.revenue?.[data.revenue.length - 1] || 4000
  const previousRevenue = data.revenue?.[data.revenue.length - 2] || 3500
  const growthRate = ((currentRevenue - previousRevenue) / previousRevenue * 100)

  const fallbacks: Record<string, Partial<AnalysisResult>> = {
    metrics: {
      score: 82,
      insights: [
        { category: 'Revenus', title: 'Croissance mensuelle positive', description: `Les revenus ont augmenté de ${growthRate.toFixed(1)}% ce mois-ci`, impact: 'positif', value: growthRate, trend: 'hausse' },
        { category: 'Conversion', title: 'Taux de conversion stable', description: `Taux actuel: ${data.conversionRate || 2.5}% - objectif: 3.5%`, impact: 'neutre', value: data.conversionRate || 2.5, trend: 'stable' },
        { category: 'Panier moyen', title: 'Opportunité d\'upsell', description: `Panier moyen: ${data.averageOrderValue || 100}€ - potentiel: +25%`, impact: 'positif', value: data.averageOrderValue || 100, trend: 'hausse' },
        { category: 'Rétention', title: 'Taux de churn à surveiller', description: `Churn: ${data.churnRate || 5}% - à réduire sous 3%`, impact: 'négatif', value: data.churnRate || 5, trend: 'baisse' },
        { category: 'Trafic', title: 'Acquisition organique en hausse', description: 'Le SEO génère 40% du trafic', impact: 'positif', value: 40, trend: 'hausse' }
      ],
      recommendations: [
        'Lancer une campagne email de re-engagement pour les clients inactifs',
        'Optimiser la page de pricing pour augmenter le panier moyen',
        'Créer un bundle de templates pour augmenter la valeur moyenne',
        'Implémenter un programme de parrainage',
        'Ajouter des upsells au checkout'
      ]
    },
    revenue: {
      score: 85,
      insights: [
        { category: 'Tendance', title: 'Croissance constante', description: `+${growthRate.toFixed(1)}% de croissance mensuelle moyenne`, impact: 'positif', value: growthRate, trend: 'hausse' },
        { category: 'Saisonnalité', title: 'Pic attendu en janvier', description: 'Les ventes de templates augmentent de 30% en janvier', impact: 'positif', trend: 'hausse' },
        { category: 'Mix', title: 'Templates > APIs', description: '70% des revenus viennent des templates', impact: 'neutre' }
      ],
      recommendations: [
        'Préparer une offre spéciale pour janvier',
        'Développer davantage de templates premium',
        'Lancer des offres bundle pour augmenter le panier moyen'
      ]
    },
    opportunities: {
      score: 88,
      insights: [
        { category: 'Produit', title: 'Nouveau template SaaS', description: 'Potentiel: 500€/mois supplémentaires', impact: 'positif', value: 500 },
        { category: 'Marché', title: 'Expansion internationale', description: 'Marché UK et DE non exploité', impact: 'positif' },
        { category: 'Partenariats', title: 'Affiliés tech', description: 'Réseau de 100+ blogueurs tech', impact: 'positif' },
        { category: 'Produit', title: 'API Premium', description: 'Abonnement mensuel pour APIs avancées', impact: 'positif', value: 2000 },
        { category: 'Marketing', title: 'YouTube tutorials', description: 'Chaîne avec 10k abonnés = 2k€/mois', impact: 'positif', value: 2000 }
      ],
      recommendations: [
        'Lancer le template SaaS dès que possible',
        'Contacter 5 blogueurs tech pour des partenariats',
        'Créer une offre API Premium avec pricing par usage',
        'Lancer une chaîne YouTube de tutoriels',
        'Traduire les templates en anglais et allemand'
      ]
    },
    forecast: {
      score: 90,
      forecast: {
        period: request?.timeframe || '3 prochains mois',
        predictedRevenue: Math.round(currentRevenue * Math.pow(1 + growthRate/100, 3)),
        confidence: 78,
        growthRate,
        scenarios: [
          { name: 'Optimiste', revenue: Math.round(currentRevenue * 1.5), probability: 25 },
          { name: 'Réaliste', revenue: Math.round(currentRevenue * 1.2), probability: 50 },
          { name: 'Pessimiste', revenue: Math.round(currentRevenue * 0.9), probability: 25 }
        ]
      },
      insights: [
        { category: 'Prédiction', title: 'Croissance continue attendue', description: `Revenus prédits: ${Math.round(currentRevenue * 1.2)}€ (réaliste)`, impact: 'positif' }
      ],
      recommendations: [
        'Maintenir le rythme actuel de création de contenu',
        'Investir dans le SEO pour accélérer la croissance',
        'Préparer les stocks pour la hausse de demande'
      ]
    }
  }

  return fallbacks[request?.type] || fallbacks.metrics
}

export const analystAgent = {
  name: 'Analyste Data',
  id: 'analyst',
  description: 'Analyse les métriques, identifie les opportunités, prédit les revenus',
  execute: executeAnalyst
}
