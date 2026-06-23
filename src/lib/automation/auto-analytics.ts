import { prisma, safeQuery } from '@/lib/db'
import { callAI } from '@/lib/ai'

interface AnalyticsLog {
  id: string
  type: string
  action: string
  status: 'success' | 'error' | 'skipped'
  details: string
  timestamp: Date
}

const logs: AnalyticsLog[] = []

function log(type: string, action: string, status: AnalyticsLog['status'], details: string) {
  const entry: AnalyticsLog = {
    id: `analytics_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    type,
    action,
    status,
    details,
    timestamp: new Date(),
  }
  logs.push(entry)
}

export interface UserBehavior {
  userId: string
  email: string
  pageViews: number
  apiCalls: number
  lastActivity: Date
  engagementScore: number
  segment: 'high' | 'medium' | 'low' | 'inactive'
}

export async function trackUserBehavior(): Promise<UserBehavior[]> {
  const behaviors: UserBehavior[] = []

  const users = await safeQuery(() => prisma.apiUser.findMany({ include: { usageLogs: true } }), [])

  for (const user of users) {
    const recentLogs = user.usageLogs.filter(
      (log) => new Date(log.createdAt).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
    )

    const apiCalls = recentLogs.reduce((sum, log) => sum + log.tokens, 0)
    const lastActivity =
      recentLogs.length > 0
        ? new Date(Math.max(...recentLogs.map((l) => new Date(l.createdAt).getTime())))
        : new Date(user.createdAt)

    const daysSinceActivity = Math.floor(
      (Date.now() - lastActivity.getTime()) / (24 * 60 * 60 * 1000)
    )

    let segment: UserBehavior['segment'] = 'inactive'
    if (daysSinceActivity <= 7 && apiCalls > 500) segment = 'high'
    else if (daysSinceActivity <= 14 && apiCalls > 100) segment = 'medium'
    else if (daysSinceActivity <= 30) segment = 'low'

    const engagementScore = Math.min(
      100,
      Math.max(
        0,
        100 - daysSinceActivity * 2 + Math.min(apiCalls / 10, 50)
      )
    )

    behaviors.push({
      userId: user.id,
      email: user.email,
      pageViews: recentLogs.length,
      apiCalls,
      lastActivity,
      engagementScore,
      segment,
    })
  }

  log('behavior', 'track_all', 'success', `${behaviors.length} utilisateurs analysés`)
  return behaviors
}

export interface RevenueReport {
  period: string
  totalRevenue: number
  totalOrders: number
  averageOrderValue: number
  conversionRate: number
  topTemplates: Array<{ name: string; revenue: number; orders: number }>
  growth: number
  insights: string[]
}

export async function generateRevenueReport(): Promise<RevenueReport> {
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)

  const currentOrders = await safeQuery(
    () =>
      prisma.order.findMany({
        where: { createdAt: { gte: thirtyDaysAgo }, status: 'completed' },
        include: { template: true },
      }),
    []
  )

  const previousOrders = await safeQuery(
    () =>
      prisma.order.findMany({
        where: { createdAt: { gte: sixtyDaysAgo, lte: thirtyDaysAgo }, status: 'completed' },
        include: { template: true },
      }),
    []
  )

  const currentRevenue = currentOrders.reduce((sum, o) => sum + o.amount, 0)
  const previousRevenue = previousOrders.reduce((sum, o) => sum + o.amount, 0)
  const growth = previousRevenue > 0 ? ((currentRevenue - previousRevenue) / previousRevenue) * 100 : 0

  const templateRevenue: Record<string, { name: string; revenue: number; orders: number }> = {}
  for (const order of currentOrders) {
    const name = order.template?.name || 'Inconnu'
    if (!templateRevenue[name]) {
      templateRevenue[name] = { name, revenue: 0, orders: 0 }
    }
    templateRevenue[name].revenue += order.amount
    templateRevenue[name].orders++
  }

  const topTemplates = Object.values(templateRevenue)
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5)

  const totalVisitors = await safeQuery(() => prisma.apiUser.count(), 0)
  const conversionRate = totalVisitors > 0 ? (currentOrders.length / totalVisitors) * 100 : 0

  const aiResult = await callAI(
    `Analyse ces données de revenus NeuraAPI et donne 3 insights actionables:
    Revenus actuels: ${currentRevenue}€
    Revenus précédents: ${previousRevenue}€
    Croissance: ${growth.toFixed(1)}%
    Commandes: ${currentOrders.length}
    Panier moyen: ${currentOrders.length > 0 ? (currentRevenue / currentOrders.length).toFixed(0) : 0}€
    
    Format: liste de 3 insights courts et clairs.`,
    500
  )

  const insights = aiResult.content
    ? aiResult.content.split('\n').filter((l: string) => l.trim().length > 0).slice(0, 3)
    : [
        `Croissance de ${growth.toFixed(1)}% sur les 30 derniers jours`,
        `Panier moyen: ${(currentRevenue / Math.max(currentOrders.length, 1)).toFixed(0)}€`,
        `${currentOrders.length} commandes ce mois-ci`,
      ]

  const report: RevenueReport = {
    period: '30 derniers jours',
    totalRevenue: currentRevenue,
    totalOrders: currentOrders.length,
    averageOrderValue: currentOrders.length > 0 ? currentRevenue / currentOrders.length : 0,
    conversionRate,
    topTemplates,
    growth,
    insights,
  }

  log('report', 'revenue', 'success', `Rapport généré: ${currentRevenue}€ de revenus`)
  return report
}

export interface PricingOptimization {
  currentPricing: Array<{ template: string; price: number; sales: number; suggestedPrice: number; reason: string }>
  overallStrategy: string
  estimatedImpact: number
}

export async function optimizePricing(): Promise<PricingOptimization> {
  const templates = await safeQuery(
    () =>
      prisma.template.findMany({
        include: { orders: { where: { status: 'completed' } } },
      }),
    []
  )

  const pricing = templates.map((t) => ({
    template: t.name,
    price: t.price,
    sales: t.orders.length,
    suggestedPrice: t.price,
    reason: '',
  }))

  const aiResult = await callAI(
    `Analyse ces prix de templates et suggère des optimisations:
    ${JSON.stringify(pricing.map((p) => ({ name: p.template, price: p.price / 100, sales: p.sales })))}
    
    Critères: maximiser les revenus tout en restant compétitif.
    Format JSON: [{ "template": "...", "suggestedPrice": ..., "reason": "..." }]`,
    1000
  )

  let suggestions: Array<{ template: string; suggestedPrice: number; reason: string }>
  try {
    const jsonMatch = aiResult.content.match(/\[[\s\S]*\]/)
    suggestions = jsonMatch ? JSON.parse(jsonMatch[0]) : []
  } catch {
    suggestions = []
  }

  for (const suggestion of suggestions) {
    const existing = pricing.find((p) => p.template === suggestion.template)
    if (existing) {
      existing.suggestedPrice = Math.round(suggestion.suggestedPrice * 100)
      existing.reason = suggestion.reason
    }
  }

  const strategy = suggestions.length > 0
    ? `${suggestions.length} templates optimisés. Recommandation: ajuster les prix des templates à forte demande.`
    : 'Pricing actuel optimal. Continuer à surveiller les tendances.'

  log('pricing', 'optimize', 'success', `Analyse de ${pricing.length} templates effectuée`)

  return {
    currentPricing: pricing,
    overallStrategy: strategy,
    estimatedImpact: pricing.reduce((sum, p) => {
      const diff = p.suggestedPrice - p.price
      return sum + (diff > 0 ? diff * p.sales : 0)
    }, 0),
  }
}

export interface RevenueForecast {
  nextMonth: { predicted: number; confidence: number; scenarios: Array<{ name: string; value: number; probability: number }> }
  nextQuarter: { predicted: number; confidence: number }
  growthRate: number
  recommendations: string[]
}

export async function predictRevenue(): Promise<RevenueForecast> {
  const sixMonthsAgo = new Date(Date.now() - 180 * 24 * 60 * 60 * 1000)

  const monthlyRevenues = await safeQuery(async () => {
    const orders = await prisma.order.findMany({
      where: { createdAt: { gte: sixMonthsAgo }, status: 'completed' },
    })

    const byMonth: Record<string, number> = {}
    for (const order of orders) {
      const month = new Date(order.createdAt).toISOString().slice(0, 7)
      byMonth[month] = (byMonth[month] || 0) + order.amount
    }

    return Object.entries(byMonth)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, revenue]) => revenue)
  }, [])

  const aiResult = await callAI(
    `Prédit les revenus de NeuraAPI pour le mois prochain et le trimestre.
    Historique mensuel: ${JSON.stringify(monthlyRevenues)}
    
    Format JSON:
    {
      "nextMonth": { "predicted": ..., "confidence": ... },
      "nextQuarter": { "predicted": ..., "confidence": ... },
      "growthRate": ...,
      "recommendations": ["...", "...", "..."]
    }`,
    1000
  )

  let forecast: RevenueForecast | null
  try {
    const jsonMatch = aiResult.content.match(/\{[\s\S]*\}/)
    forecast = jsonMatch ? JSON.parse(jsonMatch[0]) : null
  } catch {
    forecast = null
  }

  if (!forecast) {
    const lastRevenue = monthlyRevenues[monthlyRevenues.length - 1] || 0
    const avgGrowth = monthlyRevenues.length > 1
      ? (monthlyRevenues[monthlyRevenues.length - 1] - monthlyRevenues[0]) / monthlyRevenues.length
      : 0

    forecast = {
      nextMonth: {
        predicted: Math.round(lastRevenue + avgGrowth),
        confidence: 75,
        scenarios: [
          { name: 'Optimiste', value: Math.round(lastRevenue * 1.3), probability: 25 },
          { name: 'Réaliste', value: Math.round(lastRevenue + avgGrowth), probability: 50 },
          { name: 'Pessimiste', value: Math.round(lastRevenue * 0.85), probability: 25 },
        ],
      },
      nextQuarter: {
        predicted: Math.round((lastRevenue + avgGrowth) * 3),
        confidence: 65,
      },
      growthRate: lastRevenue > 0 ? (avgGrowth / lastRevenue) * 100 : 0,
      recommendations: [
        'Investir dans le SEO pour augmenter le trafic organique',
        'Lancer une campagne de parrainage pour accroître l\'acquisition',
        'Optimiser les emails de relance pour améliorer la conversion',
      ],
    }
  }

  log('forecast', 'predict', 'success', `Prédiction: ${forecast.nextMonth.predicted}€ le mois prochain`)

  return forecast
}

export async function runAutoAnalytics(): Promise<{
  totalActions: number
  successful: number
  failed: number
  logs: AnalyticsLog[]
  userBehaviors: UserBehavior[]
  revenueReport: RevenueReport
  pricingOptimization: PricingOptimization
  revenueForecast: RevenueForecast
}> {
  const beforeCount = logs.length

  const userBehaviors = await trackUserBehavior()
  const revenueReport = await generateRevenueReport()
  const pricingOptimization = await optimizePricing()
  const revenueForecast = await predictRevenue()

  const runLogs = logs.slice(beforeCount)
  const successful = runLogs.filter((l) => l.status === 'success').length
  const failed = runLogs.filter((l) => l.status === 'error').length

  return {
    totalActions: runLogs.length,
    successful,
    failed,
    logs: runLogs,
    userBehaviors,
    revenueReport,
    pricingOptimization,
    revenueForecast,
  }
}

export function getAutoAnalyticsLogs(): AnalyticsLog[] {
  return [...logs]
}
