import { NextRequest } from 'next/server'

const ALLOWED_METHODS = ['GET', 'HEAD', 'OPTIONS']

function extractOrigin(url: string): string | null {
  try {
    const parsed = new URL(url)
    return `${parsed.protocol}//${parsed.host}`
  } catch {
    return null
  }
}

export function validateCsrfOrigin(request: NextRequest): { valid: boolean; error?: string } {
  const method = request.method.toUpperCase()

  if (ALLOWED_METHODS.includes(method)) {
    return { valid: true }
  }

  const origin = request.headers.get('origin')
  const referer = request.headers.get('referer')

  const appUrl = process.env.NEXT_PUBLIC_APP_URL
  if (appUrl) {
    const normalizedApp = appUrl.replace(/\/$/, '')

    if (origin) {
      const normalizedOrigin = origin.replace(/\/$/, '')
      if (normalizedOrigin !== normalizedApp) {
        return { valid: false, error: 'Origine non autorisée' }
      }
      return { valid: true }
    }

    if (referer) {
      const refererOrigin = extractOrigin(referer)
      if (!refererOrigin || refererOrigin !== normalizedApp) {
        return { valid: false, error: 'Référent non autorisé' }
      }
      return { valid: true }
    }
  }

  if (!origin && !referer) {
    return { valid: false, error: 'Origine et référent absents' }
  }

  return { valid: false, error: 'Configuration CSRF manquante' }
}
