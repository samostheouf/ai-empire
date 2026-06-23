import { NextRequest, NextResponse } from 'next/server'
import { assignVariant, recordConversion, getTestResults } from '@/lib/ab-testing'

export const dynamic = 'force-dynamic'

const TEST_CONFIGS: Record<string, { variants: string[]; weights?: number[] }> = {
  'hero-cta-color': { variants: ['blue', 'green', 'orange'] },
  'pricing-layout': { variants: ['horizontal', 'vertical'] },
  'register-flow': { variants: ['email-first', 'oauth-first'] },
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const testId = searchParams.get('testId')
    const visitorId = searchParams.get('visitorId')
    const action = searchParams.get('action')

    if (!testId) {
      return NextResponse.json({ error: 'testId requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    if (action === 'results') {
      const results = await getTestResults(testId)
      return NextResponse.json({ testId, results }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    if (!visitorId) {
      return NextResponse.json({ error: 'visitorId requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const config = TEST_CONFIGS[testId]
    if (!config) {
      return NextResponse.json({ error: 'Test non trouvé' }, { status: 404, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const variant = await assignVariant({ testId, ...config }, visitorId)
    return NextResponse.json({ testId, variant }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { testId, visitorId } = body

    if (!testId || !visitorId) {
      return NextResponse.json({ error: 'testId et visitorId requis' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
    }

    const success = await recordConversion(testId, visitorId)
    return NextResponse.json({ ok: true, recorded: success }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch {
    return NextResponse.json({ error: 'Requête invalide' }, { status: 400, headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
