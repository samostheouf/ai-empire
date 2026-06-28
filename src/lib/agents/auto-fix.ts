export interface AutoFixCheckResult {
  check: string
  status: 'ok' | 'warning' | 'error'
  message: string
}

export interface AutoFixResult {
  checked: string[]
  fixed: string[]
  issues: AutoFixCheckResult[]
}

const PAGES_TO_CHECK = [
  { path: '/', name: 'homepage' },
  { path: '/agents', name: 'agents' },
  { path: '/pricing', name: 'pricing' },
  { path: '/templates', name: 'templates' },
  { path: '/status', name: 'status' },
  { path: '/api/health', name: 'api-health' },
]

async function checkRouteHealth(baseUrl: string): Promise<AutoFixCheckResult> {
  const failures: Array<{ page: string; status: number }> = []

  for (const page of PAGES_TO_CHECK) {
    try {
      const res = await fetch(`${baseUrl}${page.path}`, {
        method: 'GET',
        cache: 'no-store',
      })
      if (res.status !== 200) {
        failures.push({ page: page.name, status: res.status })
      }
    } catch {
      failures.push({ page: page.name, status: 0 })
    }
  }

  if (failures.length === 0) {
    return { check: 'route-health', status: 'ok', message: 'All pages returning 200' }
  }

  const details = failures.map(f => `${f.page}(${f.status})`).join(', ')
  const isDown = failures.some(f => f.status === 0)
  return {
    check: 'route-health',
    status: isDown ? 'error' : 'warning',
    message: `Non-200 responses: ${details}`,
  }
}

function countAgentKeys(content: string): number {
  const matches = content.match(/^  '[^']+'/gm) || content.match(/^  \w+:/gm) || []
  return matches.length
}

async function checkTranslations(): Promise<AutoFixCheckResult> {
  try {
    const { readFileSync } = await import('fs')
    const { join } = await import('path')

    const enPath = join(process.cwd(), 'src', 'i18n', 'translations', 'en.ts')
    const frPath = join(process.cwd(), 'src', 'i18n', 'translations', 'fr.ts')

    const enContent = readFileSync(enPath, 'utf-8')
    const frContent = readFileSync(frPath, 'utf-8')

    const enKeys = countAgentKeys(enContent)
    const frKeys = countAgentKeys(frContent)

    if (enKeys === frKeys) {
      return {
        check: 'translations',
        status: 'ok',
        message: `en.ts and fr.ts both have ${enKeys} keys`,
      }
    }

    return {
      check: 'translations',
      status: 'warning',
      message: `Key count mismatch: en.ts has ${enKeys}, fr.ts has ${frKeys}`,
    }
  } catch {
    return { check: 'translations', status: 'warning', message: 'Could not read translation files' }
  }
}

function checkEnvVars(): AutoFixCheckResult {
  const missing: string[] = []

  if (!process.env.CRON_SECRET || process.env.CRON_SECRET === 'placeholder') {
    missing.push('CRON_SECRET')
  }
  if (!process.env.SESSION_SECRET || process.env.SESSION_SECRET === 'placeholder') {
    missing.push('SESSION_SECRET')
  }

  if (missing.length === 0) {
    return { check: 'env-vars', status: 'ok', message: 'CRON_SECRET and SESSION_SECRET are set' }
  }

  return {
    check: 'env-vars',
    status: 'error',
    message: `Missing or placeholder env vars: ${missing.join(', ')}`,
  }
}

export async function runAutoFix(): Promise<AutoFixResult> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

  const checked: string[] = []
  const fixed: string[] = []
  const issues: AutoFixCheckResult[] = []

  const [routeResult, translationResult, envResult] = await Promise.all([
    checkRouteHealth(baseUrl),
    checkTranslations(),
    checkEnvVars(),
  ])

  for (const result of [routeResult, translationResult, envResult]) {
    checked.push(result.check)
    if (result.status !== 'ok') {
      issues.push(result)
    }
  }

  return { checked, fixed, issues }
}
