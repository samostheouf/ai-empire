import { NextResponse } from 'next/server'
import { getRateLimitHeaders, rateLimit } from '@/lib/rate-limit'
import dns from 'dns'
import { URL } from 'url'

interface AuditCheck {
  name: string
  status: 'pass' | 'warn' | 'fail'
  message: string
  score: number
}

interface AuditResult {
  url: string
  timestamp: string
  score: number
  checks: AuditCheck[]
}

function isPrivateIP(hostname: string): boolean {
  if (/^(127\.|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|0\.|localhost|::1|fc|fd)/i.test(hostname)) return true
  if (/^\[::1\]$/.test(hostname)) return true
  return false
}

async function resolveAndValidateURL(rawUrl: string): Promise<{ valid: boolean; url?: string; error?: string }> {
  let parsed: URL
  try {
    parsed = new URL(rawUrl)
  } catch {
    return { valid: false, error: 'URL invalide' }
  }

  if (!['http:', 'https:'].includes(parsed.protocol)) {
    return { valid: false, error: 'Protocole non autorisé' }
  }

  if (isPrivateIP(parsed.hostname)) {
    return { valid: false, error: 'Les URLs privées/neutres ne sont pas autorisées' }
  }

  try {
    const addresses = await dns.promises.resolve4(parsed.hostname)
    for (const addr of addresses) {
      if (/^(127\.|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|0\.)/.test(addr)) {
        return { valid: false, error: 'L\'adresse résolue est privée' }
      }
    }
  } catch {
    return { valid: false, error: 'Impossible de résoudre le nom d\'hôte' }
  }

  return { valid: true, url: parsed.href }
}

function checkTitle(title: string | null): AuditCheck {
  if (!title) return { name: 'Title', status: 'fail', message: 'Titre manquant', score: 0 }
  const len = title.length
  if (len < 30) return { name: 'Title', status: 'warn', message: `Titre trop court (${len} caractères, min 30)`, score: 50 }
  if (len > 60) return { name: 'Title', status: 'warn', message: `Titre trop long (${len} caractères, max 60)`, score: 70 }
  return { name: 'Title', status: 'pass', message: `Titre optimal (${len} caractères)`, score: 100 }
}

function checkDescription(desc: string | null): AuditCheck {
  if (!desc) return { name: 'Description', status: 'fail', message: 'Description meta manquante', score: 0 }
  const len = desc.length
  if (len < 120) return { name: 'Description', status: 'warn', message: `Description trop courte (${len} caractères, min 120)`, score: 50 }
  if (len > 160) return { name: 'Description', status: 'warn', message: `Description trop longue (${len} caractères, max 160)`, score: 70 }
  return { name: 'Description', status: 'pass', message: `Description optimale (${len} caractères)`, score: 100 }
}

function checkOG(html: string): AuditCheck {
  const hasOGTitle = /og:title/i.test(html)
  const hasOGDesc = /og:description/i.test(html)
  const hasOGImage = /og:image/i.test(html)
  const hasOGType = /og:type/i.test(html)

  const missing: string[] = []
  if (!hasOGTitle) missing.push('og:title')
  if (!hasOGDesc) missing.push('og:description')
  if (!hasOGImage) missing.push('og:image')
  if (!hasOGType) missing.push('og:type')

  if (missing.length === 0) return { name: 'Open Graph', status: 'pass', message: 'Toutes les balises OG présentes', score: 100 }
  if (missing.length <= 2) return { name: 'Open Graph', status: 'warn', message: `Manquant: ${missing.join(', ')}`, score: 50 }
  return { name: 'Open Graph', status: 'fail', message: `Manquant: ${missing.join(', ')}`, score: 0 }
}

function checkCanonical(html: string): AuditCheck {
  const hasCanonical = /rel=["']canonical["']/i.test(html) || /rel=["']alternate["'][^>]*hreflang/i.test(html)
  if (hasCanonical) return { name: 'Canonical', status: 'pass', message: 'URL canonique définie', score: 100 }
  return { name: 'Canonical', status: 'fail', message: 'URL canonique manquante', score: 0 }
}

function checkH1(html: string): AuditCheck {
  const h1Matches = html.match(/<h1[^>]*>/gi)
  if (!h1Matches || h1Matches.length === 0) return { name: 'H1', status: 'fail', message: 'Balise H1 manquante', score: 0 }
  if (h1Matches.length === 1) return { name: 'H1', status: 'pass', message: 'Une seule balise H1 (optimal)', score: 100 }
  return { name: 'H1', status: 'warn', message: `${h1Matches.length} balises H1 détectées (1 recommandé)`, score: 60 }
}

function checkStructuredData(html: string): AuditCheck {
  const jsonLdMatches = html.match(/application\/ld\+json/g)
  if (!jsonLdMatches || jsonLdMatches.length === 0) return { name: 'Structured Data', status: 'fail', message: 'Aucun JSON-LD détecté', score: 0 }

  const schemas: string[] = []
  const schemaRegex = /"@type"\s*:\s*"([^"]+)"/g
  let match
  while ((match = schemaRegex.exec(html)) !== null) {
    schemas.push(match[1])
  }

  if (schemas.length >= 3) return { name: 'Structured Data', status: 'pass', message: `${schemas.length} schemas: ${schemas.join(', ')}`, score: 100 }
  if (schemas.length >= 1) return { name: 'Structured Data', status: 'warn', message: `${schemas.length} schema(s): ${schemas.join(', ')}. Plus recommandé.`, score: 60 }
  return { name: 'Structured Data', status: 'pass', message: 'JSON-LD présent', score: 80 }
}

function checkHreflang(html: string): AuditCheck {
  const hreflangMatches = html.match(/hreflang/gi)
  if (!hreflangMatches || hreflangMatches.length === 0) return { name: 'Hreflang', status: 'warn', message: 'Aucune balise hreflang détectée', score: 40 }
  if (hreflangMatches.length >= 5) return { name: 'Hreflang', status: 'pass', message: `${hreflangMatches.length} balises hreflang détectées`, score: 100 }
  return { name: 'Hreflang', status: 'warn', message: `${hreflangMatches.length} balises hreflang (10+ recommandé)`, score: 60 }
}

function checkKeywords(html: string): AuditCheck {
  const hasKeywords = /meta[^>]*name=["']keywords["']/i.test(html)
  if (hasKeywords) return { name: 'Keywords', status: 'pass', message: 'Balise meta keywords présente', score: 100 }
  return { name: 'Keywords', status: 'warn', message: 'Balise meta keywords absente (optionnel mais recommandé)', score: 70 }
}

function checkTwitterCard(html: string): AuditCheck {
  const hasCard = /twitter:card/i.test(html)
  const hasTitle = /twitter:title/i.test(html)
  const hasImage = /twitter:image/i.test(html)

  if (hasCard && hasTitle && hasImage) return { name: 'Twitter Card', status: 'pass', message: 'Twitter Card complète', score: 100 }
  if (hasCard) return { name: 'Twitter Card', status: 'warn', message: 'Twitter Card partielle', score: 60 }
  return { name: 'Twitter Card', status: 'fail', message: 'Twitter Card absente', score: 0 }
}

export async function GET(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  const rl = await rateLimit(`seo-audit:${ip}`, 10, 60_000)
  const rlHeaders = getRateLimitHeaders(rl, 10)

  if (!rl.allowed) {
    return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, { status: 429, headers: { ...rlHeaders, 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }

  const { searchParams } = new URL(request.url)
  const urlParam = searchParams.get('url')

  if (!urlParam) {
    return NextResponse.json({ error: 'Paramètre url requis' }, { status: 400, headers: { ...rlHeaders, 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }

  let targetUrl: string
  try {
    const parsed = new URL(urlParam)
    targetUrl = parsed.href
  } catch {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
    targetUrl = `${baseUrl}${urlParam.startsWith('/') ? '' : '/'}${urlParam}`
  }

  const validation = await resolveAndValidateURL(targetUrl)
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400, headers: { ...rlHeaders, 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
  targetUrl = validation.url!

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10_000)

    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'NeuraAPI-SEO-Audit/1.0',
      },
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!response.ok) {
      return NextResponse.json({
        url: targetUrl,
        timestamp: new Date().toISOString(),
        score: 0,
        error: `HTTP ${response.status}: ${response.statusText}`,
        checks: [],
      }, { headers: rlHeaders })
    }

    const html = await response.text()

    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    const title = titleMatch ? titleMatch[1].trim() : null

    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i)
    const description = descMatch ? descMatch[1].trim() : null

    const checks: AuditCheck[] = [
      checkTitle(title),
      checkDescription(description),
      checkOG(html),
      checkCanonical(html),
      checkH1(html),
      checkStructuredData(html),
      checkHreflang(html),
      checkKeywords(html),
      checkTwitterCard(html),
    ]

    const totalScore = Math.round(checks.reduce((sum, c) => sum + c.score, 0) / checks.length)

    const result: AuditResult = {
      url: targetUrl,
      timestamp: new Date().toISOString(),
      score: totalScore,
      checks,
    }

    return NextResponse.json(result, { headers: { ...rlHeaders, 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Erreur lors de l\'audit',
    }, { status: 500, headers: { ...rlHeaders, 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
  }
}
