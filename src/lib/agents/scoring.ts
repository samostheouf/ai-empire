export interface ScoringCriteria {
  name: string
  label: string
  weight: number
  description: string
}

export interface AgentScore {
  id: string
  agentId: string
  agentName: string
  criteria: Record<string, number>
  compositeScore: number
  timestamp: Date
  version: number
}

export interface ScoreHistoryEntry {
  timestamp: Date
  score: number
  version: number
}

const CRITERIA_DEFINITIONS: ScoringCriteria[] = [
  {
    name: 'accuracy',
    label: 'Précision',
    weight: 0.30,
    description: 'Exactitude des réponses et conformité aux faits'
  },
  {
    name: 'creativity',
    label: 'Créativité',
    weight: 0.15,
    description: 'Originalité et inventivité du contenu généré'
  },
  {
    name: 'efficiency',
    label: 'Efficacité',
    weight: 0.25,
    description: 'Optimisation de l\'utilisation des tokens et ressources'
  },
  {
    name: 'reliability',
    label: 'Fiabilité',
    weight: 0.15,
    description: 'Consistance des performances et taux de réussite'
  },
  {
    name: 'speed',
    label: 'Vitesse',
    weight: 0.10,
    description: 'Temps de réponse moyen en millisecondes'
  },
  {
    name: 'innovation',
    label: 'Innovation',
    weight: 0.05,
    description: 'Capacité à proposer des solutions novatrices'
  }
]

export const AGENT_ROLE_WEIGHTS: Record<string, Record<string, number>> = {
  'content-creator': {
    accuracy: 0.20,
    creativity: 0.30,
    efficiency: 0.20,
    reliability: 0.15,
    speed: 0.05,
    innovation: 0.10
  },
  'seo-specialist': {
    accuracy: 0.35,
    creativity: 0.10,
    efficiency: 0.20,
    reliability: 0.20,
    speed: 0.05,
    innovation: 0.10
  },
  'marketing-expert': {
    accuracy: 0.20,
    creativity: 0.25,
    efficiency: 0.20,
    reliability: 0.20,
    speed: 0.05,
    innovation: 0.10
  },
  'customer-support': {
    accuracy: 0.30,
    creativity: 0.15,
    efficiency: 0.25,
    reliability: 0.20,
    speed: 0.05,
    innovation: 0.05
  },
  'data-analyst': {
    accuracy: 0.35,
    creativity: 0.10,
    efficiency: 0.25,
    reliability: 0.20,
    speed: 0.05,
    innovation: 0.05
  }
}

export function getScoringCriteria(): ScoringCriteria[] {
  return CRITERIA_DEFINITIONS
}

export function calculateCompositeScore(
  criteria: Record<string, number>,
  role: string
): number {
  const weights = AGENT_ROLE_WEIGHTS[role] || AGENT_ROLE_WEIGHTS['content-creator']

  let totalScore = 0
  let totalWeight = 0

  for (const [criterion, value] of Object.entries(criteria)) {
    const weight = weights[criterion] || 0
    totalScore += value * weight
    totalWeight += weight
  }

  if (totalWeight === 0) return 0

  let baseScore = Math.round((totalScore / totalWeight) * 100) / 100

  // Excellence bonuses for perfect scores (10/10)
  const accuracy = criteria.accuracy || 0
  const efficiency = criteria.efficiency || 0
  const creativity = criteria.creativity || 0

  let bonus = 0
  if (accuracy >= 10) bonus += 0.5
  if (efficiency >= 10) bonus += 0.3
  if (creativity >= 10) bonus += 0.2

  baseScore = Math.min(9.99, baseScore + bonus)

  return Math.round(baseScore * 100) / 100
}

export function normalizeCriteriaScores(
  rawScores: Record<string, number>,
  role: string
): Record<string, number> {
  const normalized: Record<string, number> = {}

  for (const [criterion, value] of Object.entries(rawScores)) {
    normalized[criterion] = Math.max(0, Math.min(10, value))
  }

  return normalized
}

export function calculateScoreDelta(
  current: number,
  previous: number
): { delta: number; percentage: number; trend: 'up' | 'down' | 'stable' } {
  const delta = Math.round((current - previous) * 100) / 100
  const percentage = previous === 0 ? 0 : Math.round((delta / previous) * 100)
  const trend = delta > 0.01 ? 'up' : delta < -0.01 ? 'down' : 'stable'

  return { delta, percentage, trend }
}

export function getTargetScore(version: number): number {
  if (version <= 1) return 7.5
  if (version <= 3) return 8.5
  if (version <= 5) return 9.0
  if (version <= 10) return 9.5
  if (version <= 20) return 9.9
  return 9.99
}

export function isNearTarget(score: number, target: number = 9.99): boolean {
  return score >= target * 0.95
}

export function calculatePerformanceBonus(
  accuracy: number,
  speed: number,
  creativity: number,
  efficiency: number = 0
): number {
  let bonus = 0

  // Excellence bonuses for perfect scores
  if (accuracy >= 10) bonus += 0.5
  if (efficiency >= 10) bonus += 0.3
  if (creativity >= 10) bonus += 0.2

  // Additional performance bonuses
  if (accuracy >= 9.5 && accuracy < 10) bonus += 0.1
  if (speed >= 9.0) bonus += 0.05
  if (creativity >= 9.0 && creativity < 10) bonus += 0.05

  return Math.min(1.0, bonus)
}

export function getScoreBreakdown(
  score: number,
  role: string
): Record<string, string> {
  const breakdown: Record<string, string> = {}

  if (score >= 9.5) {
    breakdown['global'] = 'Excellence exceptionnelle'
  } else if (score >= 9.0) {
    breakdown['global'] = 'Performance très élevée'
  } else if (score >= 8.0) {
    breakdown['global'] = 'Bonne performance'
  } else if (score >= 7.0) {
    breakdown['global'] = 'Performance acceptable'
  } else {
    breakdown['global'] = 'Nécessite des améliorations'
  }

  return breakdown
}
