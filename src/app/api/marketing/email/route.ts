import { NextResponse } from 'next/server'
import { authenticateApiKey } from '@/lib/auth'
import {
  sendWelcomeEmail1,
  sendWelcomeEmail2,
  sendWelcomeEmail3,
  sendAbandonedCartEmail,
  sendNewsletter,
  sendProductLaunchEmail,
  sendReengagementEmail,
} from '@/lib/marketing/email'

export async function POST(request: Request) {
  const auth = await authenticateApiKey(request);
  if (auth.error) return auth.error;

  let body: { type?: string; data?: Record<string, unknown> }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Données invalides' }, { status: 400 })
  }

  const { type, data } = body

  if (!type || typeof type !== 'string') {
    return NextResponse.json({ error: 'Le champ type est requis' }, { status: 400 })
  }

  if (!data || typeof data !== 'object') {
    return NextResponse.json({ error: 'Le champ data est requis' }, { status: 400 })
  }

  try {
    switch (type) {
      case 'welcome-1':
        await sendWelcomeEmail1(data as unknown as Parameters<typeof sendWelcomeEmail1>[0])
        break
      case 'welcome-2':
        await sendWelcomeEmail2(data as unknown as Parameters<typeof sendWelcomeEmail2>[0])
        break
      case 'welcome-3':
        await sendWelcomeEmail3(data as unknown as Parameters<typeof sendWelcomeEmail3>[0])
        break
      case 'abandoned-cart':
        await sendAbandonedCartEmail(data as unknown as Parameters<typeof sendAbandonedCartEmail>[0])
        break
      case 'newsletter':
        await sendNewsletter(data as unknown as Parameters<typeof sendNewsletter>[0])
        break
      case 'product-launch':
        await sendProductLaunchEmail(data as unknown as Parameters<typeof sendProductLaunchEmail>[0])
        break
      case 'reengagement':
        await sendReengagementEmail(data as unknown as Parameters<typeof sendReengagementEmail>[0])
        break
      default:
        return NextResponse.json({ error: 'Type d\'email invalide' }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
