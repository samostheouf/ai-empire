import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { safeQuery } from '@/lib/db'
import { decideDownload, resolveTarballFilename } from '@/lib/download-gate'
import { rateLimit } from '@/lib/rate-limit'

export async function GET(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = await rateLimit(`download:${ip}`, 10, 60_000)
    if (!rl.allowed) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Réessayez plus tard.' },
        { status: 429, headers: { 'Retry-After': String(rl.resetIn) } }
      )
    }

    const { searchParams } = new URL(request.url)
    const templateId = searchParams.get('template_id')
    const sessionId = searchParams.get('session_id')

    const order = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      if (!sessionId) return null
      const found = await prisma.order.findUnique({ where: { sessionId } })
      if (!found) return null
      return { templateId: found.templateId, status: found.status, refunded: found.refunded }
    }, null)

    const decision = decideDownload({ order, templateId, sessionId })
    if (!decision.allow) {
      return NextResponse.json({ error: decision.reason }, { status: decision.status })
    }

    const template = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.template.findUnique({ where: { id: templateId as string } })
    }, null)

    const filename = template ? resolveTarballFilename(template.fileUrl) : null
    if (!filename) {
      return NextResponse.json({ error: 'Fichier introuvable' }, { status: 404 })
    }

    let bytes: Buffer
    try {
      bytes = await readFile(path.join(process.cwd(), 'public', filename))
    } catch (err) {
      console.error('[download] file read failed', filename, err)
      return NextResponse.json({ error: 'Fichier indisponible' }, { status: 500 })
    }

    return new NextResponse(new Uint8Array(bytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/gzip',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': String(bytes.length),
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[download] error', err)
    return NextResponse.json({ error: 'Erreur lors du téléchargement' }, { status: 500 })
  }
}
