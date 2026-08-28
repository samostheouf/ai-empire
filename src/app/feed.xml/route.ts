import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// RSS 2.0 feed for the NeuraAPI blog.
// Build-time static route: titles/descriptions/dates are extracted from the REAL
// blog page sources (no fabricated content). New articles are picked up automatically.
export const dynamic = 'force-static'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
const NON_LOCALE = ['en', 'es', 'de', 'it', 'pt', 'ja', 'ko', 'zh', 'ar']
const BLOG_DIR = path.join(process.cwd(), 'src', 'app', 'blog')

function getBlogSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !NON_LOCALE.includes(d.name))
      .filter((d) => fs.existsSync(path.join(BLOG_DIR, d.name, 'page.tsx')))
      .map((d) => d.name)
      .sort()
  } catch {
    return []
  }
}

function extract(meta: string, key: string): string | null {
  const re = new RegExp(`${key}:\\s*(['"\`])([\\s\\S]*?)\\1`)
  const m = meta.match(re)
  return m ? m[2].replace(/\s+/g, ' ').trim() : null
}

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const slugs = getBlogSlugs()
  const items = slugs
    .map((slug) => {
      const file = path.join(BLOG_DIR, slug, 'page.tsx')
      let src = ''
      try {
        src = fs.readFileSync(file, 'utf-8')
      } catch {
        return ''
      }
      const title = extract(src, 'title') || slug
      const desc = extract(src, 'description') || ''
      const date = extract(src, 'publishedTime') || extract(src, 'modifiedTime') || ''
      const url = `${baseUrl}/blog/${slug}`
      const lines = [
        '    <item>',
        `      <title>${esc(title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${esc(desc)}</description>`,
        date ? `      <pubDate>${new Date(date).toUTCString()}</pubDate>` : null,
        '    </item>',
      ]
      return lines.filter(Boolean).join('\n')
    })
    .filter(Boolean)
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>NeuraAPI — Blog</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Articles sur les APIs IA, les templates Next.js et la création de SaaS — NeuraAPI.</description>
    <language>fr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
