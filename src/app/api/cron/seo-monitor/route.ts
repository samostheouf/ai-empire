import { verifyCronAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const PAGES_TO_CHECK = [
  '/',
  '/templates',
  '/pricing',
  '/docs',
  '/guide',
  '/blog',
  '/contact',
  '/status',
  '/mentions-legales',
  '/cgv',
  '/politique-confidentialite',
  '/politique-cookies',
  '/dashboard',
  '/checkout',
]

export async function GET(request: NextRequest) {
  try {
    
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const results = await Promise.allSettled([
      checkPages(),
      checkBrokenLinks(),
      checkGoogleIndexing(),
    ])

    const pagesResult = results[0].status === 'fulfilled' ? results[0].value : { pages: [] as Array<{ page: string; status: number; loadTime: number; ok: boolean }>, avgLoadTime: 0 }
    const brokenLinksResult = results[1].status === 'fulfilled' ? results[1].value : { links: [] as Array<{ source: string; target: string; status: number }> }
    const indexing = results[2].status === 'fulfilled' ? results[2].value : { status: 'unknown', error: true }

    const totalPages = pagesResult.pages.length
    const pagesOk = pagesResult.pages.filter((p) => p.status === 200).length
    const pagesError = totalPages - pagesOk
    const avgLoadTime = pagesResult.avgLoadTime

    const report = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.seoReport.create({
        data: {
          totalPages,
          pagesOk,
          pagesError,
          brokenLinks: JSON.stringify(brokenLinksResult.links),
          avgLoadTime,
          details: JSON.stringify({
            pages: pagesResult.pages,
            indexing,
            timestamp: new Date().toISOString(),
          }),
        },
      })
    }, null)

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      summary: {
        totalPages,
        pagesOk,
        pagesError,
        avgLoadTime: avgLoadTime > 0 ? `${avgLoadTime.toFixed(0)}ms` : 'N/A',
        brokenLinksCount: brokenLinksResult.links.length,
        indexingStatus: indexing.status,
      },
      reportId: report?.id || null,
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function checkPages() {
  const results: Array<{ page: string; status: number; loadTime: number; ok: boolean }> = []

  for (const page of PAGES_TO_CHECK) {
    const url = `${appUrl}${page}`
    const start = Date.now()
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
      })
      const loadTime = Date.now() - start
      results.push({
        page,
        status: response.status,
        loadTime,
        ok: response.ok,
      })
    } catch {
      const loadTime = Date.now() - start
      results.push({
        page,
        status: 0,
        loadTime,
        ok: false,
      })
    }
  }

  const avgLoadTime = results.reduce((sum, r) => sum + r.loadTime, 0) / results.length

  return { pages: results, avgLoadTime }
}

async function checkBrokenLinks() {
  const brokenLinks: Array<{ source: string; target: string; status: number }> = []
  const internalLinks = [
    '/templates',
    '/pricing',
    '/docs',
    '/guide',
    '/blog',
    '/contact',
    '/status',
  ]

  for (const link of internalLinks) {
    try {
      const response = await fetch(`${appUrl}${link}`, {
        method: 'HEAD',
        redirect: 'follow',
        signal: AbortSignal.timeout(10000),
      })
      if (!response.ok) {
        brokenLinks.push({
          source: '/',
          target: link,
          status: response.status,
        })
      }
    } catch {
      brokenLinks.push({
        source: '/',
        target: link,
        status: 0,
      })
    }
  }

  const templates = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const tpls = await prisma.template.findMany({ select: { slug: true } })
    return tpls.map((t: { slug: string }) => `/templates/${t.slug}`)
  }, [])

  for (const templatePath of templates.slice(0, 10)) {
    try {
      const response = await fetch(`${appUrl}${templatePath}`, {
        method: 'HEAD',
        redirect: 'follow',
        signal: AbortSignal.timeout(10000),
      })
      if (!response.ok) {
        brokenLinks.push({
          source: '/templates',
          target: templatePath,
          status: response.status,
        })
      }
    } catch {
      brokenLinks.push({
        source: '/templates',
        target: templatePath,
        status: 0,
      })
    }
  }

  return { links: brokenLinks }
}

async function checkGoogleIndexing() {
  try {
    const response = await fetch(`${appUrl}/sitemap.xml`, {
      signal: AbortSignal.timeout(10000),
    })
    const sitemapContent = await response.text()
    const urlCount = (sitemapContent.match(/<url>/g) || []).length

    return {
      status: 'ok',
      sitemapUrls: urlCount,
      sitemapAccessible: true,
    }
  } catch {
    return {
      status: 'error',
      sitemapUrls: 0,
      sitemapAccessible: false,
    }
  }
}
