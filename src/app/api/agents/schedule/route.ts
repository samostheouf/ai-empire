import { NextResponse } from 'next/server'
import { contentCreatorAgent } from '@/lib/agents/content-creator'
import { seoSpecialistAgent } from '@/lib/agents/seo-specialist'
import { marketingExpertAgent } from '@/lib/agents/marketing-expert'
import { salesAgent } from '@/lib/agents/sales-agent'
import { analystAgent } from '@/lib/agents/analyst'
import { authenticateApiKey } from '@/lib/auth'

export interface ScheduledTask {
  id: string
  agentId: string
  agentName: string
  input: Record<string, unknown>
  schedule: TaskSchedule
  status: 'en_attente' | 'en_cours' | 'termine' | 'erreur'
  lastExecution?: Date
  nextExecution: Date
  executionCount: number
  createdAt: Date
}

export interface TaskSchedule {
  frequency: 'quotidien' | 'hebdomadaire' | 'mensuel' | 'personnalise'
  interval?: number
  dayOfWeek?: number
  dayOfMonth?: number
  time?: string
}

const scheduledTasks: ScheduledTask[] = []

interface AgentResult {
  tokensUsed?: number
}

type AgentExecuteFn = (input: Record<string, unknown>) => Promise<AgentResult>

const AGENTS: Record<string, { name: string; description: string; execute: AgentExecuteFn }> = {
  'content-creator': contentCreatorAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'seo-specialist': seoSpecialistAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'marketing-expert': marketingExpertAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'sales-agent': salesAgent as unknown as { name: string; description: string; execute: AgentExecuteFn },
  'analyst': analystAgent as unknown as { name: string; description: string; execute: AgentExecuteFn }
}

export async function GET(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    return NextResponse.json({
      success: true,
      tasks: scheduledTasks,
      agents: Object.entries(AGENTS).map(([id, agent]) => ({
        id,
        name: agent.name,
        description: agent.description
      })),
      summary: {
        total: scheduledTasks.length,
        active: scheduledTasks.filter(t => t.status !== 'termine').length,
        completed: scheduledTasks.filter(t => t.status === 'termine').length,
        errors: scheduledTasks.filter(t => t.status === 'erreur').length
      }
    })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la récupération des tâches' },
      { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function POST(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json()
    const { action, agentId, input, schedule, taskId } = body

    switch (action) {
      case 'create': {
        if (!agentId || !AGENTS[agentId as keyof typeof AGENTS]) {
          return NextResponse.json(
            { success: false, error: 'Agent non trouvé' },
            { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
        }

        const agent = AGENTS[agentId as keyof typeof AGENTS]
        const nextExecution = calculateNextExecution(schedule)

        const task: ScheduledTask = {
          id: `task_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
          agentId,
          agentName: agent.name,
          input: input || {},
          schedule: schedule || { frequency: 'quotidien', time: '09:00' },
          status: 'en_attente',
          nextExecution,
          executionCount: 0,
          createdAt: new Date()
        }

        scheduledTasks.push(task)

        return NextResponse.json({
          success: true,
          task,
          message: `Tâche planifiée: ${agent.name} - ${schedule.frequency}`
        }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
      }

      case 'execute': {
        const task = scheduledTasks.find(t => t.id === taskId)
        if (!task) {
          return NextResponse.json(
            { success: false, error: 'Tâche non trouvée' },
            { status: 404, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
        }

        const agent = AGENTS[task.agentId as keyof typeof AGENTS]
        task.status = 'en_cours'

        try {
          const result = await agent.execute(task.input)
          task.status = 'termine'
          task.lastExecution = new Date()
          task.executionCount++
          task.nextExecution = calculateNextExecution(task.schedule)

          return NextResponse.json({
            success: true,
            task,
            result,
            message: `Tâche exécutée: ${task.agentName}`
          }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Erreur inconnue'
          task.status = 'erreur'
          return NextResponse.json({
            success: false,
            task,
            error: message
          }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
        }
      }

      case 'pause': {
        const task = scheduledTasks.find(t => t.id === taskId)
        if (!task) {
          return NextResponse.json(
            { success: false, error: 'Tâche non trouvée' },
            { status: 404, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
        }

        task.status = 'en_attente'
        return NextResponse.json({
          success: true,
          task,
          message: `Tâche en pause: ${task.agentName}`
        }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
      }

      case 'delete': {
        const index = scheduledTasks.findIndex(t => t.id === taskId)
        if (index === -1) {
          return NextResponse.json(
            { success: false, error: 'Tâche non trouvée' },
            { status: 404, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
        }

        const deleted = scheduledTasks.splice(index, 1)[0]
        return NextResponse.json({
          success: true,
          message: `Tâche supprimée: ${deleted.agentName}`
        }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
      }

      default:
        return NextResponse.json(
          { success: false, error: 'Action non reconnue' },
          { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }
  } catch {
    return NextResponse.json(
      { success: false, error: 'Erreur lors du traitement' },
      { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

function calculateNextExecution(schedule: TaskSchedule): Date {
  const now = new Date()
  const [hours, minutes] = (schedule.time || '09:00').split(':').map(Number)

  const next = new Date(now)
  next.setHours(hours, minutes, 0, 0)

  if (next <= now) {
    switch (schedule.frequency) {
      case 'quotidien':
        next.setDate(next.getDate() + 1)
        break
      case 'hebdomadaire':
        next.setDate(next.getDate() + 7)
        break
      case 'mensuel':
        next.setMonth(next.getMonth() + 1)
        break
    }
  }

  if (schedule.frequency === 'hebdomadaire' && schedule.dayOfWeek !== undefined) {
    while (next.getDay() !== schedule.dayOfWeek) {
      next.setDate(next.getDate() + 1)
    }
  }

  return next
}
