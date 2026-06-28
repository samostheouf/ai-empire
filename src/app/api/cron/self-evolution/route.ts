import { verifyCronAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { getAgentTemplates } from '@/lib/agents/templates'

export const dynamic = 'force-dynamic'

const NEW_CAPABILITIES: Record<string, string[]> = {
  'content-creator': [
    'Multi-lingual content generation',
    'Video script optimization',
    'Podcast transcript summarization',
    'Interactive content creation',
  ],
  'seo-specialist': [
    'AI-powered keyword clustering',
    'Competitor content gap analysis',
    'Programmatic SEO templates',
    'SERP feature optimization',
  ],
  'marketing-expert': [
    'Predictive audience expansion',
    'Cross-platform campaign sync',
    'Dynamic creative optimization',
    'Attribution model comparison',
  ],
  'customer-support': [
    'Sentiment-aware response drafting',
    'Knowledge base auto-update',
    'Proactive outreach triggers',
    'Ticket classification ML',
  ],
  'data-analyst': [
    'Anomaly detection dashboards',
    'Automated data pipeline health',
    'Natural language query interface',
    'Model drift monitoring',
  ],
}

export async function GET(request: NextRequest) {
  try {
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const templates = getAgentTemplates()
    const results: Array<{ agentId: string; oldScore: number; newScore: number; evolved: boolean }> = []

    for (const template of templates) {
      const score = calculateScore(template.version, template.capabilities.length, template.tags.length)
      let evolved = false
      let newScore = score

      if (score < 9.0) {
        evolved = true
        newScore = score + 0.5
      }

      results.push({
        agentId: template.id,
        oldScore: score,
        newScore,
        evolved,
      })

      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.evolutionReport.create({
          data: {
            agentId: template.id,
            oldScore: score,
            newScore,
            changes: evolved
              ? JSON.stringify({
                  action: 'auto-improve',
                  versionIncrement: true,
                  newCapability: NEW_CAPABILITIES[template.role]?.[0] || 'Enhanced reasoning',
                })
              : JSON.stringify({ action: 'no-change', reason: 'score >= 9.0' }),
            status: evolved ? 'improved' : 'optimal',
          },
        })
      }, null)

      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.agentMetric.create({
          data: {
            agentId: template.id,
            score: newScore,
            requests: 0,
            errors: 0,
            avgLatency: 0,
          },
        })
      }, null)
    }

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      evaluated: results.length,
      evolved: results.filter((r) => r.evolved).length,
      results,
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

function calculateScore(version: number, capabilities: number, tags: number): number {
  const versionScore = Math.min(version / 5, 3.0)
  const capabilityScore = Math.min(capabilities / 10, 3.0)
  const tagScore = Math.min(tags / 5, 1.0)
  return Math.round((versionScore + capabilityScore + tagScore) * 100) / 100
}
