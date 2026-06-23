import { runAutoEmail } from './auto-email'
import { runAutoContent } from './auto-content'
import { runAutoSales } from './auto-sales'
import { runAutoAnalytics } from './auto-analytics'

interface OrchestratorLog {
  id: string
  system: string
  action: string
  status: 'success' | 'error' | 'skipped'
  details: string
  duration: number
  timestamp: Date
}

interface SystemStatus {
  name: string
  lastRun: Date | null
  totalRuns: number
  lastResult: 'success' | 'error' | null
  enabled: boolean
}

interface OrchestratorReport {
  runId: string
  startTime: Date
  endTime: Date
  duration: number
  systems: {
    email: { status: string; actions: number; success: number; failed: number }
    content: { status: string; actions: number; success: number; failed: number }
    sales: { status: string; actions: number; success: number; failed: number }
    analytics: { status: string; actions: number; success: number; failed: number }
  }
  totalActions: number
  totalSuccess: number
  totalFailed: number
  logs: OrchestratorLog[]
}

const systemStatus: Record<string, SystemStatus> = {
  email: { name: 'Système Email', lastRun: null, totalRuns: 0, lastResult: null, enabled: true },
  content: { name: 'Système Contenu', lastRun: null, totalRuns: 0, lastResult: null, enabled: true },
  sales: { name: 'Système Ventes', lastRun: null, totalRuns: 0, lastResult: null, enabled: true },
  analytics: { name: 'Système Analytics', lastRun: null, totalRuns: 0, lastResult: null, enabled: true },
}

const orchestratorLogs: OrchestratorLog[] = []

function log(system: string, action: string, status: OrchestratorLog['status'], details: string, duration: number) {
  const entry: OrchestratorLog = {
    id: `orch_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    system,
    action,
    status,
    details,
    duration,
    timestamp: new Date(),
  }
  orchestratorLogs.push(entry)
}

async function runSystem(
  name: string,
  fn: () => Promise<{ totalActions: number; successful: number; failed: number }>
): Promise<{ status: string; actions: number; success: number; failed: number }> {
  const startTime = Date.now()

  if (!systemStatus[name]?.enabled) {
    log(name, 'skip', 'skipped', 'Système désactivé', 0)
    return { status: 'skipped', actions: 0, success: 0, failed: 0 }
  }

  try {
    const result = await fn()
    const duration = Date.now() - startTime

    systemStatus[name].lastRun = new Date()
    systemStatus[name].totalRuns++
    systemStatus[name].lastResult = 'success'

    log(name, 'run', 'success', `${result.totalActions} actions exécutées`, duration)

    return {
      status: 'success',
      actions: result.totalActions || 0,
      success: result.successful || 0,
      failed: result.failed || 0,
    }
  } catch (error) {
    const duration = Date.now() - startTime
    const errorMsg = error instanceof Error ? error.message : 'Erreur inconnue'

    systemStatus[name].lastRun = new Date()
    systemStatus[name].totalRuns++
    systemStatus[name].lastResult = 'error'

    log(name, 'run', 'error', errorMsg, duration)

    return { status: 'error', actions: 0, success: 0, failed: 1 }
  }
}

export async function runOrchestrator(): Promise<OrchestratorReport> {
  const runId = `run_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
  const startTime = new Date()

  const emailResult = await runSystem('email', runAutoEmail)
  const contentResult = await runSystem('content', runAutoContent)
  const salesResult = await runSystem('sales', runAutoSales)
  const analyticsResult = await runSystem('analytics', runAutoAnalytics)

  const endTime = new Date()
  const duration = endTime.getTime() - startTime.getTime()

  const totalActions = emailResult.actions + contentResult.actions + salesResult.actions + analyticsResult.actions
  const totalSuccess = emailResult.success + contentResult.success + salesResult.success + analyticsResult.success
  const totalFailed = emailResult.failed + contentResult.failed + salesResult.failed + analyticsResult.failed

  const report: OrchestratorReport = {
    runId,
    startTime,
    endTime,
    duration,
    systems: {
      email: emailResult,
      content: contentResult,
      sales: salesResult,
      analytics: analyticsResult,
    },
    totalActions,
    totalSuccess,
    totalFailed,
    logs: [...orchestratorLogs],
  }

  return report
}

export function getSystemStatus(): Record<string, SystemStatus> {
  return { ...systemStatus }
}

export function toggleSystem(name: string, enabled: boolean): boolean {
  if (systemStatus[name]) {
    systemStatus[name].enabled = enabled
    log(name, enabled ? 'enable' : 'disable', 'success', `Système ${enabled ? 'activé' : 'désactivé'}`, 0)
    return true
  }
  return false
}

export function getOrchestratorLogs(): OrchestratorLog[] {
  return [...orchestratorLogs]
}

export function getFullStatus(): {
  systems: Record<string, SystemStatus>
  recentLogs: OrchestratorLog[]
  totalRuns: number
  lastRun: Date | null
} {
  const totalRuns = Object.values(systemStatus).reduce((sum, s) => sum + s.totalRuns, 0)
  const lastRuns = Object.values(systemStatus)
    .map((s) => s.lastRun)
    .filter((d): d is Date => d !== null)
  const lastRun = lastRuns.length > 0 ? new Date(Math.max(...lastRuns.map((d) => d.getTime()))) : null

  return {
    systems: { ...systemStatus },
    recentLogs: orchestratorLogs.slice(-50),
    totalRuns,
    lastRun,
  }
}
