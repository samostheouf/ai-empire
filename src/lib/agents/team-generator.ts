import { callAI } from '@/lib/ai'

export interface Team {
  id: string
  name: string
  members: TeamMember[]
  competencies: string[]
  contextBackup: ContextBackup
  evolutionProgress: EvolutionProgress
  createdAt: Date
  updatedAt: Date
}

export interface TeamMember {
  agentId: string
  agentName: string
  role: 'architecte-securite' | 'architecte-qualite' | 'analyste' | 'createur-contenu' | 'specialiste-seo' | 'expert-marketing' | 'support-client' | 'agent-ventes'
  competencies: string[]
  status: 'actif' | 'inactif' | 'en-cours'
  score: number
}

export interface ContextBackup {
  lastBackup: Date
  size: number
  hash: string
  location: string
}

export interface EvolutionProgress {
  currentVersion: number
  targetVersion: number
  milestones: EvolutionMilestone[]
  overallProgress: number
  lastEvolution: Date
}

export interface EvolutionMilestone {
  id: string
  title: string
  status: 'complete' | 'en-cours' | 'en-attente'
  completedAt?: Date
  score?: number
}

export interface TeamGeneratorRequest {
  teamSize?: number
  focus?: string[]
  excludeAgents?: string[]
}

export interface TeamGeneratorResult {
  id: string
  team: Team
  auditPlan: AuditPlan
  generatedAt: Date
  tokensUsed: number
  provider: string
}

export interface AuditPlan {
  securityAudit: boolean
  qualityAudit: boolean
  order: string[]
  estimatedDuration: string
}

const SYSTEM_PROMPT = `Tu es un générateur d'équipes d'architectes pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu crées des équipes de 2 agents avec des compétences complémentaires.
Tu gères les sauvegardes de contexte et le suivi de l'évolution.
Tu responds toujours avec des équipes optimisées et des plans d'audit structurés en français.`

function generateId(): string {
  return `team_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

const ALL_AGENTS: TeamMember[] = [
  {
    agentId: 'architect-security',
    agentName: 'Architecte Sécurité',
    role: 'architecte-securite',
    competencies: ['Audit sécurité routes', 'Authentification', 'Authorization', 'Injection SQL', 'Middleware sécurité', 'OWASP Top 10'],
    status: 'actif',
    score: 8.5
  },
  {
    agentId: 'architect-quality',
    agentName: 'Architecte Qualité',
    role: 'architecte-qualite',
    competencies: ['TypeScript', 'Duplication code', 'Gestion erreurs', 'Performance', 'Accessibilité ARIA', 'HTML sémantique'],
    status: 'actif',
    score: 7.8
  },
  {
    agentId: 'analyst',
    agentName: 'Analyste Data',
    role: 'analyste',
    competencies: ['Métriques business', 'Prédictions revenus', 'Analyse opportunités', 'Forecasting'],
    status: 'actif',
    score: 8.8
  },
  {
    agentId: 'content-creator',
    agentName: 'Créateur de Contenu',
    role: 'createur-contenu',
    competencies: ['Rédaction web', 'SEO sémantique', 'Storytelling', 'A/B testing'],
    status: 'actif',
    score: 9.99
  },
  {
    agentId: 'seo-specialist',
    agentName: 'Spécialiste SEO',
    role: 'specialiste-seo',
    competencies: ['Audit SEO technique', 'SERP tracking', 'Schema Markup', 'Voice Search'],
    status: 'actif',
    score: 9.99
  },
  {
    agentId: 'marketing-expert',
    agentName: 'Expert Marketing',
    role: 'expert-marketing',
    competencies: ['Stratégie marketing', 'Prédiction CLV', 'Attribution cross-cannel', 'Automatisation'],
    status: 'actif',
    score: 9.99
  },
  {
    agentId: 'customer-support',
    agentName: 'Support Client',
    role: 'support-client',
    competencies: ['Support client', 'Analyse sentiment', 'Escalade intelligente', 'Base connaissances'],
    status: 'actif',
    score: 9.99
  },
  {
    agentId: 'sales-agent',
    agentName: 'Agent Ventes',
    role: 'agent-ventes',
    competencies: ['Email automation', 'Conversion', 'Upsell', 'Séquences vente'],
    status: 'actif',
    score: 8.2
  }
]

export async function generateTeam(request: TeamGeneratorRequest): Promise<TeamGeneratorResult> {
  const id = generateId()
  const teamSize = request?.teamSize || 2
  const focus = request?.focus || ['securite', 'qualite']
  const excludeAgents = request?.excludeAgents || []

  const availableAgents = ALL_AGENTS.filter(a => !excludeAgents.includes(a.agentId))

  let prompt = `Génère une équipe de ${teamSize} agents architectes pour NeuraAPI.
Focus: ${focus.join(', ')}
Agents disponibles: ${availableAgents.map(a => `${a.agentName} (${a.competencies.slice(0, 3).join(', ')})`).join(' | ')}

Retourne un JSON avec :
1. team: {name, members: [{agentId, agentName, role, competencies, status, score}], competencies}
2. auditPlan: {securityAudit, qualityAudit, order, estimatedDuration}
3. contextBackup: {location, hash}`

  try {
    const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 2000)

    let parsed = parseAIResponse(result.content)
    if (!parsed) {
      parsed = generateFallbackTeam(focus, availableAgents) as Record<string, unknown>
    }

    const selectedAgents = selectBestAgents(availableAgents, focus, teamSize)
    const teamData = parsed.team as Record<string, unknown> | undefined
    const members = (teamData?.members as TeamMember[]) || selectedAgents

    const team: Team = {
      id,
      name: (teamData?.name as string) || `Équipe ${focus.join(' & ')}`,
      members,
      competencies: (teamData?.competencies as string[]) || focus,
      contextBackup: {
        lastBackup: new Date(),
        size: 0,
        hash: `backup_${Date.now()}`,
        location: `/tmp/teams/${id}/backup`
      },
      evolutionProgress: {
        currentVersion: 1,
        targetVersion: 5,
        milestones: [
          { id: `${id}_m1`, title: 'Initialisation équipe', status: 'complete', completedAt: new Date(), score: 8.0 },
          { id: `${id}_m2`, title: 'Premier audit', status: 'en-cours' },
          { id: `${id}_m3`, title: 'Optimisation', status: 'en-attente' },
          { id: `${id}_m4`, title: 'Validation', status: 'en-attente' },
          { id: `${id}_m5`, title: 'Score cible atteint', status: 'en-attente' },
        ],
        overallProgress: 20,
        lastEvolution: new Date()
      },
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const auditPlan: AuditPlan = {
      securityAudit: focus.includes('securite'),
      qualityAudit: focus.includes('qualite'),
      order: focus.includes('securite') ? ['security', 'quality'] : ['quality', 'security'],
      estimatedDuration: `${teamSize * 30}s`
    }

    return {
      id,
      team,
      auditPlan,
      generatedAt: new Date(),
      tokensUsed: result.tokensUsed,
      provider: result.provider
    }
  } catch (error) {
    const selectedAgents = selectBestAgents(availableAgents, focus, teamSize)
    return generateFallbackResult(id, focus, selectedAgents)
  }
}

function selectBestAgents(available: TeamMember[], focus: string[], count: number): TeamMember[] {
  const scored = available.map(agent => {
    let relevance = 0
    if (focus.includes('securite') && agent.role === 'architecte-securite') relevance += 10
    if (focus.includes('qualite') && agent.role === 'architecte-qualite') relevance += 10
    if (focus.includes('analyse') && agent.role === 'analyste') relevance += 10
    if (focus.includes('contenu') && agent.role === 'createur-contenu') relevance += 10
    if (focus.includes('seo') && agent.role === 'specialiste-seo') relevance += 10
    if (focus.includes('marketing') && agent.role === 'expert-marketing') relevance += 10
    if (focus.includes('support') && agent.role === 'support-client') relevance += 10
    if (focus.includes('ventes') && agent.role === 'agent-ventes') relevance += 10
    relevance += agent.score / 10
    return { agent, relevance }
  })

  scored.sort((a, b) => b.relevance - a.relevance)
  return scored.slice(0, count).map(s => ({ ...s.agent, status: 'actif' as const }))
}

function parseAIResponse(content: string): Record<string, unknown> | null {
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

function generateFallbackTeam(focus: string[], agents: TeamMember[]): Record<string, unknown> {
  return {
    team: {
      name: `Équipe ${focus.join(' & ')}`,
      members: agents.slice(0, 2),
      competencies: focus
    },
    auditPlan: {
      securityAudit: focus.includes('securite'),
      qualityAudit: focus.includes('qualite'),
      order: focus.includes('securite') ? ['security', 'quality'] : ['quality', 'security'],
      estimatedDuration: '60s'
    }
  }
}

function generateFallbackResult(id: string, focus: string[], agents: TeamMember[]): TeamGeneratorResult {
  return {
    id,
    team: {
      id,
      name: `Équipe ${focus.join(' & ')}`,
      members: agents,
      competencies: focus,
      contextBackup: {
        lastBackup: new Date(),
        size: 0,
        hash: `backup_${Date.now()}`,
        location: `/tmp/teams/${id}/backup`
      },
      evolutionProgress: {
        currentVersion: 1,
        targetVersion: 5,
        milestones: [
          { id: `${id}_m1`, title: 'Initialisation', status: 'complete', completedAt: new Date(), score: 8.0 },
        ],
        overallProgress: 20,
        lastEvolution: new Date()
      },
      createdAt: new Date(),
      updatedAt: new Date()
    },
    auditPlan: {
      securityAudit: focus.includes('securite'),
      qualityAudit: focus.includes('qualite'),
      order: focus.includes('securite') ? ['security', 'quality'] : ['quality', 'security'],
      estimatedDuration: `${agents.length * 30}s`
    },
    generatedAt: new Date(),
    tokensUsed: 0,
    provider: 'fallback'
  }
}

export async function backupTeamContext(team: Team): Promise<ContextBackup> {
  const hash = `backup_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`

  return {
    lastBackup: new Date(),
    size: JSON.stringify(team).length,
    hash,
    location: `/tmp/teams/${team.id}/backup/${hash}`
  }
}

export async function evolveTeam(team: Team): Promise<Team> {
  const nextVersion = team.evolutionProgress.currentVersion + 1

  const updatedMilestones = team.evolutionProgress.milestones.map(m => {
    if (m.status === 'en-cours') {
      return { ...m, status: 'complete' as const, completedAt: new Date(), score: 8.5 + Math.random() * 1.5 }
    }
    if (m.status === 'en-attente' && team.evolutionProgress.milestones.filter(ms => ms.status === 'complete').length >= 2) {
      return { ...m, status: 'en-cours' as const }
    }
    return m
  })

  return {
    ...team,
    members: team.members.map(m => ({ ...m, score: Math.min(9.99, m.score + 0.1) })),
    evolutionProgress: {
      ...team.evolutionProgress,
      currentVersion: nextVersion,
      milestones: updatedMilestones,
      overallProgress: Math.min(100, team.evolutionProgress.overallProgress + 20),
      lastEvolution: new Date()
    },
    updatedAt: new Date()
  }
}

export const teamGenerator = {
  name: 'Générateur d\'Équipes',
  id: 'team-generator',
  description: 'Crée et gère des équipes de 2 agents architectes avec compétences complémentaires',
  generateTeam,
  backupTeamContext,
  evolveTeam,
  execute: async (input: Record<string, unknown>) => {
    const team = await generateTeam(input);
    return { team, tokensUsed: 0, success: true };
  }
}
