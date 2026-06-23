import { NextResponse } from 'next/server'
import { contentCreatorAgent } from '@/lib/agents/content-creator'
import { seoSpecialistAgent } from '@/lib/agents/seo-specialist'
import { marketingExpertAgent } from '@/lib/agents/marketing-expert'
import { salesAgent } from '@/lib/agents/sales-agent'
import { analystAgent } from '@/lib/agents/analyst'
import { architectSecurityAgent } from '@/lib/agents/architect-security'
import { architectQualityAgent } from '@/lib/agents/architect-quality'
import { teamGenerator } from '@/lib/agents/team-generator'
import { growthHackerAgent } from '@/lib/agents/growth-hacker'
import { authenticateApiKey } from '@/lib/auth'

export interface AgentExecution {
  id: string
  agentId: string
  agentName: string
  input: Record<string, unknown>
  output: Record<string, unknown> | null
  status: 'success' | 'error' | 'pending'
  tokensUsed: number
  executedAt: Date
  duration: number
  error?: string
}

const executionHistory: AgentExecution[] = []

interface AgentResult {
  tokensUsed?: number
}

type AgentExecuteFn = (input: Record<string, unknown>) => Promise<AgentResult>

const AGENTS: Record<string, { name: string; description: string; execute: AgentExecuteFn }> = {
  'content-creator': contentCreatorAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'seo-specialist': seoSpecialistAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'marketing-expert': marketingExpertAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'sales-agent': salesAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'analyst': analystAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'architect-security': architectSecurityAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'architect-quality': architectQualityAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'team-generator': teamGenerator as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'growth-hacker': growthHackerAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
}

export async function GET(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const agents = Object.entries(AGENTS).map(([id, agent]) => ({
      id,
      name: agent.name,
      description: agent.description,
      status: 'actif',
      executions: executionHistory.filter(e => e.agentId === id).length,
      lastExecution: executionHistory.filter(e => e.agentId === id).slice(-1)[0]?.executedAt || null,
      successRate: calculateSuccessRate(id)
    }))

    return NextResponse.json({
      success: true,
      agents,
      totalExecutions: executionHistory.length,
      history: executionHistory.slice(-20)
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des agents' },
      { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function POST(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const { agentId, input } = body

    if (!agentId || !AGENTS[agentId as keyof typeof AGENTS]) {
      return NextResponse.json(
        { success: false, error: 'Agent non trouvé. Agents disponibles: ' + Object.keys(AGENTS).join(', ') },
        { status: 400 }
      )
    }

    const agent = AGENTS[agentId as keyof typeof AGENTS]
    const startTime = Date.now()

    const execution: AgentExecution = {
      id: `exec_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      agentId,
      agentName: agent.name,
      input,
      output: null,
      status: 'pending',
      tokensUsed: 0,
      executedAt: new Date(),
      duration: 0
    }

    executionHistory.push(execution)

    try {
      const result = await agent.execute(input)
      const duration = Date.now() - startTime

      execution.output = result as unknown as Record<string, unknown>
      execution.status = 'success'
      execution.tokensUsed = result.tokensUsed ?? 0
      execution.duration = duration

      return NextResponse.json({
        success: true,
        execution,
        message: `${agent.name} exécuté avec succès`
      }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    } catch (error) {
      const duration = Date.now() - startTime
      const message = error instanceof Error ? error.message : 'Erreur inconnue'

      execution.status = 'error'
      execution.error = message
      execution.duration = duration

      return NextResponse.json({
        success: false,
        execution,
        error: `Erreur lors de l'exécution de ${agent.name}: ${message}`
      }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }
  } catch {
    return NextResponse.json(
      { success: false, error: 'Erreur lors du traitement de la requête' },
      { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

function calculateSuccessRate(agentId: string): number {
  const agentExecutions = executionHistory.filter(e => e.agentId === agentId)
  if (agentExecutions.length === 0) return 100
  const successCount = agentExecutions.filter(e => e.status === 'success').length
  return Math.round((successCount / agentExecutions.length) * 100)
}
