import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'
import { verifyCronAuth } from '@/lib/auth'
import { LUXURY_SKU, LUXURY_FLOOR, decideOffer } from '@/lib/luxury-intent'

export const dynamic = 'force-dynamic'

/**
 * GET /api/luxury — LECTURE INTERNE.
 *
 * Mesure 04/10 : cette route etait dans PUBLIC_POST_ENDPOINTS et n'avait AUCUNE
 * authentification. Un `curl` nu renvoyait 200 avec la liste des ventes, leurs
 * logs, et le detail des sessions Stripe — y compris `customer_email` et les
 * `sessionId` cs_live. Des emails d'acheteurs et des identifiants de session
 * Stripe, publiquement lisibles, sur une route non protegee.
 *
 * Elle est donc desormais fermee : seule une cle cron (ou une session admin)
 * la lit. Le compteur de vues ne dependait PAS d'elle (ViewPing fait un POST),
 * donc la correction ne casse ni le ping ni le pricing.
 */
export async function GET(request: NextRequest) {
  if (!verifyCronAuth(request)) {
    return NextResponse.json({ error: 'Non autorise' }, { status: 401 })
  }
  const sales = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')
    return prisma.luxurySale.findMany({ orderBy: { createdAt: 'desc' }, take: 10 })
  }, [])
  // Les logs contiennent emails + sessionId : jamais dans une reponse publique.
  return NextResponse.json({ success: true, sales })
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}))
  const { action, sku, platform, price, title } = body

  // ---------------------------------------------------------------------
  // Mutations :Reservees a la cle cron.
  //
  // Mesure 04/10 : `create` et `sold` etaient atteignables par n'importe
  // quel POST, y compris cross-origin. Concretement, n'importe qui pouvait
  // ecrire `POST {"action":"sold","sku":"HERMES-LV-NBA-M-1A8WU8"}` et
  // declarer la veste VENDUE — ce qui declenche le crosslist auto et
  // desactive la page. Une mentions legal qui disparait sur un POST hostile.
  // Verifie : `POST {"action":"sold","sku":"<inexistant>"}` depuis une origine
  // tierce renvoie 200 et entre dans la branche.
  // ---------------------------------------------------------------------
  if (action === 'create' || action === 'sold') {
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Action reservee — authentification requise' }, { status: 401 })
    }

    if (action === 'create') {
      const created = await safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.luxurySale.upsert({
          where: { sku },
          update: { title: title || sku, price: price || LUXURY_FLOOR, status: 'active', metadata: body.metadata || {} },
          create: { sku, title: title || sku, price: price || LUXURY_FLOOR, currency: 'EUR', status: 'active', metadata: body.metadata || {} },
        })
      }, null)
      return NextResponse.json({ success: !!created, created })
    }

    const updated = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const sale = await prisma.luxurySale.findUnique({ where: { sku } })
      if (!sale) return null
      const u = await prisma.luxurySale.update({ where: { sku }, data: { status: 'sold', platform: platform || 'unknown' } })
      await prisma.luxuryLog.create({ data: { saleId: sale.id, type: 'sold', message: `SOLD marque par humain — plateforme: ${platform || 'unknown'} — NE PAS REINVENTER VENTE`, data: { platform: platform || 'unknown', sku } as any } })
      return u
    }, null)
    return NextResponse.json({ success: !!updated, updated })
  }

  // ---------------------------------------------------------------------
  // Intention publique : vue / suivi / offre.
  //
  // Mesure 04/10 : `watchers` et `offers` n'etaient ecrits par PERSONNE
  // (`grep "action: 'watcher'" src/` ne renvoyait que cette route, qui n'etait
  // appellee par aucune page). Les deux champs etaient donc structurellement
  // nuls, comme `views` avant le 03/10 : sur une page a 4500 EUR, la seule
  // action possible etait « payer 4500 » ou partir. Aucune contre-offre
  // possible — alors que le comparable Joli Closet affiche ouvertement
  // « Make an offer 3517-5023 EUR ».
  //
  // Ces trois actions sont publiques par nature (c'est le visiteur qui agisse)
  // mais ne peuvent ecrire QUE ces champs-la. Elles journalisent, et la
  // decision affichee vient de decideOffer() — qui ne touche jamais au prix.
  // ---------------------------------------------------------------------
  if (action === 'view' || action === 'watcher' || action === 'offer') {
    const email = typeof body.email === 'string' ? body.email.trim().slice(0, 120) : ''
    const amount = Number(price)

    const result = await safeQuery(async () => {
      const { prisma } = await import('@/lib/db')
      const sale = await prisma.luxurySale.findUnique({ where: { sku: sku || LUXURY_SKU } })
      if (!sale) return null

      const data: any = {}
      if (action === 'view') data.views = { increment: 1 }
      if (action === 'watcher') data.watchers = { increment: 1 }

      let decision = null
      if (action === 'offer') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return { error: 'Email valide requis pour recevoir la reponse a votre offre', status: 400 }
        }
        if (!Number.isFinite(amount) || amount <= 0) {
          return { error: 'Montant invalide — indiquer un montant en euros', status: 400 }
        }
        decision = decideOffer(amount)
        // `offers` est un Json null : Prisma `push` echoue dessus. On lit, on
        // ecrit le tableau complet.
        const prev = Array.isArray((sale as any).offers) ? ((sale as any).offers as any[]) : []
        data.offers = [...prev, { amount: Math.round(amount), verdict: decision.verdict, at: new Date().toISOString() }]
      }

      const updated = await prisma.luxurySale.update({ where: { sku: (sale as any).sku }, data })
      await prisma.luxuryLog.create({
        data: {
          saleId: sale.id,
          type: action,
          message: decision
            ? `OFFRE ${Math.round(amount)} EUR -> ${decision.verdict} (floor ${decision.floor}) — prix inchange`
            : `${action} — sku ${(sale as any).sku}`,
          // Jamais l'email en clair dans le log : il sert a repondre, il n'est
          // pas un fait de vente. Le GET est de toute facon reserve au cron.
          data: (decision ? { amount: Math.round(amount), verdict: decision.verdict } : {}) as any,
        },
      })
      return { updated, decision }
    }, null as any)

    if (result && (result as any).error) {
      return NextResponse.json({ error: (result as any).error }, { status: (result as any).status || 400 })
    }
    if (!result) return NextResponse.json({ success: false, error: 'SKU introuvable' }, { status: 404 })

    const decision = (result as any).decision
    return NextResponse.json({ success: true, ...(decision ? { decision } : {}) })
  }

  return NextResponse.json({ error: 'action inconnue: create, sold, view, watcher, offer' }, { status: 400 })
}