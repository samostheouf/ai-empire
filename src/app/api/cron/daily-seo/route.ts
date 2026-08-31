import { verifyCronAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const results = await Promise.allSettled([
      submitSitemapToGoogle(),
      submitSitemapToBing(),
    ])

    const response: Record<string, unknown> = {
      success: true,
      timestamp: new Date().toISOString(),
      google: results[0].status === 'fulfilled' ? results[0].value : { error: 'Failed' },
      bing: results[1].status === 'fulfilled' ? results[1].value : { error: 'Failed' },
    }

    await logSeoSubmission(response)

    return NextResponse.json(response)
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function submitSitemapToGoogle() {
  const sitemapUrl = `${appUrl}/sitemap.xml`
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`

  try {
    const response = await fetch(pingUrl, {
      method: 'GET',
      headers: { 'User-Agent': 'AI-Empire-SEO-Bot/1.0' },
    })

    return {
      provider: 'google',
      status: response.ok ? 'submitted' : 'failed',
      statusCode: response.status,
      sitemapUrl,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      provider: 'google',
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      sitemapUrl,
      timestamp: new Date().toISOString(),
    }
  }
}

async function getBlogUrls(): Promise<string[]> {
  try {
    const blogDir = path.join(process.cwd(), 'src', 'app', 'blog')
    const entries = await fs.readdir(blogDir, { withFileTypes: true })
    const urls: string[] = []
    for (const e of entries) {
      if (!e.isDirectory()) continue
      if (await fs.access(path.join(blogDir, e.name, 'page.tsx')).then(()=>true).catch(()=>false)) {
        urls.push(`${appUrl}/blog/${e.name}`)
      }
    }
    return urls.slice(0, 80)
  } catch { return [] }
}

async function submitSitemapToBing() {
  const sitemapUrl = `${appUrl}/sitemap.xml`
  const indexNowKey = process.env.INDEXNOW_KEY || 'aiempire-indexnow-9f3c2a7e8b1d4f60a5c2e9b7d3f1a8c4'
  const blogUrls = await getBlogUrls()
  const payload = {
    host: new URL(appUrl).hostname,
    urlList: [
      `${appUrl}/`,
      `${appUrl}/templates`,
      `${appUrl}/pricing`,
      `${appUrl}/api-docs`,
      `${appUrl}/blog`,
      ...blogUrls,
    ],
    key: indexNowKey,
    keyLocation: `${appUrl}/${indexNowKey}.txt`,
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    })

    return {
      provider: 'bing',
      status: response.ok ? 'submitted' : 'failed',
      statusCode: response.status,
      sitemapUrl,
      urlsSubmitted: payload.urlList.length,
      timestamp: new Date().toISOString(),
    }
  } catch (error) {
    return {
      provider: 'bing',
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      sitemapUrl,
      timestamp: new Date().toISOString(),
    }
  }
}

async function logSeoSubmission(data: Record<string, unknown>) {
  await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    const details = JSON.stringify(data)
    await prisma.seoReport.create({
      data: {
        totalPages: 5,
        pagesOk: data.google && (data.google as Record<string, string>).status === 'submitted' ? 1 : 0,
        pagesError: data.google && (data.google as Record<string, string>).status !== 'submitted' ? 1 : 0,
        brokenLinks: '[]',
        avgLoadTime: 0,
        details,
      },
    })
  }, null)
}
