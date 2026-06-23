import { callAI } from '@/lib/ai'

const SYSTEM_PROMPT = `Tu es un growth hacker expert pour NeuraAPI, une plateforme de templates Next.js et APIs IA.
Tu identifies les opportunités de croissance rapide et à faible coût.
Tu proposes des stratégies concrètes, mesurables et actionnables.
Tu responds toujours en français.`

function generateId(): string {
  return `growth_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

interface GrowthRequest {
  type?: 'strategy' | 'channel' | 'funnel' | 'full-audit'
  currentMetrics?: Record<string, number>
}

interface GrowthResult {
  id: string
  strategies: Array<{
    channel: string
    tactic: string
    expectedImpact: string
    effort: 'faible' | 'moyen' | 'élevé'
    timeline: string
  }>
  quickWins: string[]
  longTermPlan: string[]
  metrics: Record<string, string>
  score: number
}

export async function executeGrowthAudit(request?: GrowthRequest): Promise<GrowthResult> {
  const id = generateId()
  const scope = request?.type || 'full-audit'

  let prompt = ''
  switch (scope) {
    case 'strategy':
      prompt = `Analyse la stratégie de croissance de NeuraAPI.
Propose 5 stratégies concrètes avec canal, tactique, impact attendu, effort et timeline.
Retourne un JSON avec strategies[], quickWins[], longTermPlan[].`
      break
    case 'channel':
      prompt = `Analyse les meilleurs canaux d'acquisition pour NeuraAPI.
Priorise par ROI: Reddit, Twitter, LinkedIn, Product Hunt, Dev.to, Hacker News.
Retourne un JSON avec strategies[].`
      break
    case 'funnel':
      prompt = `Analyse le funnel de conversion: visite → inscription → essai → achat.
Identifie les points de friction et propose des améliorations.
Retourne un JSON avec quickWins[].`
      break
    default:
      prompt = `Audit de croissance complet de NeuraAPI.
Analyse tous les canaux, le funnel, les quick wins, et le plan long terme.
Retourne un JSON: { strategies: [{channel, tactic, expectedImpact, effort, timeline}], quickWins: string[], longTermPlan: string[], score: number 0-10 }.`
  }

  try {
    const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 3000)
    let parsed: Partial<GrowthResult> | null = null
    try {
      const jsonMatch = result.content.match(/\{[\s\S]*\}/)
      if (jsonMatch) parsed = JSON.parse(jsonMatch[0])
    } catch {
      console.warn('Failed to parse AI growth hacker response as JSON');
    }

    return {
      id,
      strategies: parsed?.strategies || [
        { channel: 'Reddit', tactic: 'Posts dans r/webdev et r/nextjs', expectedImpact: '500-2000 visiteurs/mois', effort: 'faible', timeline: '1 semaine' },
        { channel: 'Twitter', tactic: 'Thread Build in Public', expectedImpact: '200-500 followers/mois', effort: 'faible', timeline: 'continu' },
        { channel: 'Product Hunt', tactic: 'Lancement officiel', expectedImpact: '1000-5000 visiteurs en 24h', effort: 'moyen', timeline: '1 lancement' },
        { channel: 'Dev.to', tactic: 'Articles techniques SEO', expectedImpact: '100-500 vues/article', effort: 'moyen', timeline: '2 articles/mois' },
        { channel: 'Hacker News', tactic: 'Show HN / Ask HN', expectedImpact: '500-10000 visiteurs si viral', effort: 'faible', timeline: '1 post' },
      ],
      quickWins: parsed?.quickWins || [
        'Poster sur r/webdev avec le template Reddit créé',
        'Créer un thread Twitter Build in Public',
        'Soumettre sur Product Hunt un lundi matin',
        'Publier 3 articles Dev.to sur le SEO technique',
      ],
      longTermPlan: parsed?.longTermPlan || [
        'Mois 1: Community building Reddit + Twitter',
        'Mois 2: Product Hunt launch + Dev.to articles',
        'Mois 3: Partnership avec influenceurs tech',
        'Mois 4: Programme d\'affiliation à grande échelle',
        'Mois 5: Publicité ciblée (Google Ads)',
        'Mois 6: Expansion internationale',
      ],
      metrics: parsed?.metrics || {
        'Objectif visiteurs': '10K/mois en 3 mois',
        'Objectif inscriptions': '500/mois en 3 mois',
        'Objectif conversions': '2-5% taux de conversion',
        'Objectif revenue': '€1000/mois en 6 mois',
      },
      score: parsed?.score || 7.5,
    }
  } catch {
    return {
      id,
      strategies: [],
      quickWins: [],
      longTermPlan: [],
      metrics: {},
      score: 0,
    }
  }
}

export const growthHackerAgent = {
  name: 'Growth Hacker',
  id: 'growth-hacker',
  description: 'Identifie les opportunités de croissance rapide et propose des stratégies concrètes',
  execute: executeGrowthAudit,
}
