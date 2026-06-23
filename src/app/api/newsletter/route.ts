import { NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { validateEmail } from '@/lib/input-validation'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const validEmail = validateEmail(email)
    if (!validEmail) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const existing = await prisma.waitlist.findUnique({ where: { email: validEmail } })
      if (existing) {
        return { success: true, message: 'Déjà inscrit' }
      }
      await prisma.waitlist.create({
        data: { email: validEmail, source: 'newsletter' },
      })
      return { success: true, message: 'Inscription réussie' }
    }, null)

    if (!result) {
      return NextResponse.json({ success: true, message: 'Inscription réussie' })
    }

    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
