import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const violation = {
      'document-uri': body['document-uri'] || '',
      'referrer': body['referrer'] || '',
      'violated-directive': body['violated-directive'] || '',
      'effective-directive': body['effective-directive'] || '',
      'original-policy': body['original-policy'] || '',
      'blocked-uri': body['blocked-uri'] || '',
      'status-code': body['status-code'] || 0,
      'source-file': body['source-file'] || '',
      'line-number': body['line-number'] || 0,
    }

    if (violation['blocked-uri'] || violation['violated-directive']) {
      logger.warn('csp-report', 'CSP Violation', violation)
    }

    return new NextResponse(null, { status: 204 })
  } catch {
    return new NextResponse(null, { status: 204 })
  }
}
