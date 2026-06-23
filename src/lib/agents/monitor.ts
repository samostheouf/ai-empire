export interface PerformanceMetric {
  id: string
  agentId: string
  timestamp: Date
  responseTimeMs: number
  tokensUsed: number
  success: boolean
  errorType?: string
  requestType: string
}

export interface PerformanceStats {
  agentId: string
  totalRequests: number
  successfulRequests: number
  failedRequests: number
  successRate: number
  averageResponseTime: number
  medianResponseTime: number
  p95ResponseTime: number
  averageTokensPerRequest: number
  totalTokensUsed: number
  errorRate: number
  uptime: number
  lastActivity: Date
}

export interface RealTimeMetrics {
  activeRequests: number
  requestsPerMinute: number
  averageLatency: number
  errorPercentage: number
}

export class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric[]> = new Map()
  private activeRequests: Map<string, { start: number; type: string }> = new Map()
  private maxMetricsPerAgent: number = 10000

  startRequest(agentId: string, requestId: string, type: string): void {
    this.activeRequests.set(requestId, {
      start: performance.now(),
      type
    })
  }

  endRequest(
    agentId: string,
    requestId: string,
    tokensUsed: number,
    success: boolean,
    errorType?: string
  ): PerformanceMetric | null {
    const active = this.activeRequests.get(requestId)
    if (!active) return null

    const responseTimeMs = Math.round(performance.now() - active.start)

    const metric: PerformanceMetric = {
      id: requestId,
      agentId,
      timestamp: new Date(),
      responseTimeMs,
      tokensUsed,
      success,
      errorType,
      requestType: active.type
    }

    this.activeRequests.delete(requestId)

    const agentMetrics = this.metrics.get(agentId) || []
    agentMetrics.push(metric)

    if (agentMetrics.length > this.maxMetricsPerAgent) {
      agentMetrics.splice(0, agentMetrics.length - this.maxMetricsPerAgent)
    }

    this.metrics.set(agentId, agentMetrics)

    this.logMetric(metric)

    return metric
  }

  private logMetric(metric: PerformanceMetric): void {
  }

  getAgentStats(agentId: string): PerformanceStats {
    const agentMetrics = this.metrics.get(agentId) || []

    if (agentMetrics.length === 0) {
      return this.emptyStats(agentId)
    }

    const successful = agentMetrics.filter(m => m.success)
    const failed = agentMetrics.filter(m => !m.success)
    const responseTimes = agentMetrics.map(m => m.responseTimeMs).sort((a, b) => a - b)
    const tokens = agentMetrics.map(m => m.tokensUsed)

    const medianIndex = Math.floor(responseTimes.length / 2)
    const p95Index = Math.floor(responseTimes.length * 0.95)

    return {
      agentId,
      totalRequests: agentMetrics.length,
      successfulRequests: successful.length,
      failedRequests: failed.length,
      successRate: Math.round((successful.length / agentMetrics.length) * 100),
      averageResponseTime: Math.round(
        responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length
      ),
      medianResponseTime: responseTimes[medianIndex] || 0,
      p95ResponseTime: responseTimes[p95Index] || 0,
      averageTokensPerRequest: Math.round(
        tokens.reduce((a, b) => a + b, 0) / tokens.length
      ),
      totalTokensUsed: tokens.reduce((a, b) => a + b, 0),
      errorRate: Math.round((failed.length / agentMetrics.length) * 100),
      uptime: successful.length > 0
        ? Math.round((successful.length / agentMetrics.length) * 100)
        : 100,
      lastActivity: agentMetrics[agentMetrics.length - 1].timestamp
    }
  }

  getRealTimeMetrics(agentId: string): RealTimeMetrics {
    const agentMetrics = this.metrics.get(agentId) || []
    const now = Date.now()
    const oneMinuteAgo = now - 60000

    const recentMetrics = agentMetrics.filter(
      m => m.timestamp.getTime() > oneMinuteAgo
    )

    return {
      activeRequests: Array.from(this.activeRequests.values()).length,
      requestsPerMinute: recentMetrics.length,
      averageLatency: recentMetrics.length > 0
        ? Math.round(
            recentMetrics.reduce((a, b) => a + b.responseTimeMs, 0) /
            recentMetrics.length
          )
        : 0,
      errorPercentage: recentMetrics.length > 0
        ? Math.round(
            (recentMetrics.filter(m => !m.success).length / recentMetrics.length) * 100
          )
        : 0
    }
  }

  getRecentMetrics(agentId: string, count: number = 100): PerformanceMetric[] {
    const agentMetrics = this.metrics.get(agentId) || []
    return agentMetrics.slice(-count)
  }

  getErrorBreakdown(agentId: string): Record<string, number> {
    const agentMetrics = this.metrics.get(agentId) || []
    const errors: Record<string, number> = {}

    agentMetrics
      .filter(m => !m.success && m.errorType)
      .forEach(m => {
        errors[m.errorType!] = (errors[m.errorType!] || 0) + 1
      })

    return errors
  }

  private emptyStats(agentId: string): PerformanceStats {
    return {
      agentId,
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      successRate: 100,
      averageResponseTime: 0,
      medianResponseTime: 0,
      p95ResponseTime: 0,
      averageTokensPerRequest: 0,
      totalTokensUsed: 0,
      errorRate: 0,
      uptime: 100,
      lastActivity: new Date()
    }
  }
}

export const performanceMonitor = new PerformanceMonitor()

export function trackPerformance(
  agentId: string,
  requestId: string,
  type: string,
  fn: () => Promise<{ tokensUsed: number; success: boolean; error?: string }>
): Promise<{ tokensUsed: number; success: boolean; error?: string }> {
  performanceMonitor.startRequest(agentId, requestId, type)

  return fn()
    .then(result => {
      performanceMonitor.endRequest(
        agentId,
        requestId,
        result.tokensUsed,
        result.success,
        result.error
      )
      return result
    })
    .catch(error => {
      performanceMonitor.endRequest(agentId, requestId, 0, false, error.message)
      throw error
    })
}
