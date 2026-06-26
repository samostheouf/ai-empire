import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  try {
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 10000) {
      return new NextResponse(null, { status: 413 })
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return new NextResponse(null, { status: 204 })
    }

    if (!body || typeof body !== 'object') {
      return new NextResponse(null, { status: 204 })
    }

    const violation = {
      'document-uri': String(body['document-uri'] || '').substring(0, 2048),
      'referrer': String(body['referrer'] || '').substring(0, 2048),
      'violated-directive': String(body['violated-directive'] || '').substring(0, 256),
      'effective-directive': String(body['effective-directive'] || '').substring(0, 256),
      'original-policy': String(body['original-policy'] || '').substring(0, 1024),
      'blocked-uri': String(body['blocked-uri'] || '').substring(0, 2048),
      'status-code': Number(body['status-code']) || 0,
      'source-file': String(body['source-file'] || '').substring(0, 1024),
      'line-number': Number(body['line-number']) || 0,
    }

    if (violation['blocked-uri'] || violation['violated-directive']) {
      logger.warn('csp-report', 'CSP Violation', violation)
    }

    return new NextResponse(null, { status: 204 })
  } catch {
    return new NextResponse(null, { status: 204 })
  }
}
