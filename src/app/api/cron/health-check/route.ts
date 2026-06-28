import { NextRequest, NextResponse } from 'next/server'
import { verifyCronAuth } from '@/lib/auth'
import { runAutoFix } from '@/lib/agents/auto-fix'
import { sendAlert } from '@/lib/alerts'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const result = await runAutoFix()

    const errors = result.issues.filter(i => i.status === 'error')
    if (errors.length > 0) {
      const summary = errors.map(e => `- [${e.check}] ${e.message}`).join('\n')
      await sendAlert('Health Check Failure', summary)
    }

    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error', details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
