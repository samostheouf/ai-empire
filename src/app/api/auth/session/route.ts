import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { verifyPassword } from '@/lib/auth'
import { setSessionCookie, destroySessionCookie } from '@/lib/session'
import { validateEmail } from '@/lib/input-validation'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    const validEmail = validateEmail(email)
    if (!validEmail || !password || typeof password !== 'string' || password.length < 1 || password.length > 128) {
      return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 })
    }

    const user = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      return prisma.apiUser.findUnique({ where: { email: validEmail } })
    }, null)

    if (!user || !user.password) {
      return NextResponse.json({ error: 'Identifiants incorrects' }, { status: 401 })
    }

    const valid = await verifyPassword(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: 'Identifiants incorrects' }, { status: 401 })
    }

    const response = NextResponse.json({ success: true })
    return setSessionCookie(response)
  } catch {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  return destroySessionCookie(response)
}
