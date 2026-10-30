import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = await rateLimit(`contact:${ip}`, 5, 60_000)
    if (!rl.allowed) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Réessayez dans quelques instants.' },
        { status: 429, headers: { 'Retry-After': String(rl.resetIn) } }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body ?? {}

    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json({ error: 'Nom invalide' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 2000) {
      return NextResponse.json({ error: 'Message invalide' }, { status: 400 })
    }

    const safeName = escapeHtml(name.trim())
    const safeEmail = escapeHtml(email.trim())
    const safeSubject = escapeHtml((subject || 'other').trim())
    const safeMessage = escapeHtml(message.trim())

    const to = process.env.OWNER_EMAILS || process.env.EMAIL_FROM || 'contact@neurapi.com'

    if (resend) {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'noreply@neurapi.com',
        to: to.split(',').map((s) => s.trim()).filter(Boolean),
        replyTo: email.trim(),
        subject: `[Contact] ${safeSubject} — ${safeName}`,
        html: `<p><strong>Nom:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Sujet:</strong> ${safeSubject}</p><p><strong>Message:</strong></p><p>${safeMessage.replace(/\n/g, '<br/>')}</p>`,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] error', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}