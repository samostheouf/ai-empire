import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
const SLUG = 'webhook-stripe-nextjs-tutorial'
const DATE = '2026-08-25'

export async function generateMetadata() {
  return genMeta({
    title: 'Webhook Stripe avec Next.js : tutoriel idempotent avec retry (2026)',
    description: 'Tutoriel complet webhook Stripe + Next.js : vérification de signature, idempotence, retry automatique, gestion des événements en production.',
    path: `/blog/${SLUG}`,
    type: 'article',
    keywords: ['webhook Stripe Next.js', 'tutoriel webhook stripe', 'stripe signature verification', 'webhook idempotent', 'stripe events Next.js'],
    publishedTime: DATE,
    modifiedTime: DATE,
  })
}

function Code({ children }: { children: string }) {
  return (
    <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
      <pre className="text-sm text-indigo-300/80">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default function BlogWebhookStripe() {
  const articleSchema = generateArticleSchema({
    title: 'Webhook Stripe avec Next.js : tutoriel idempotent avec retry',
    description: 'Vérification de signature, idempotence et retry : le guide production des webhooks Stripe en Next.js.',
    slug: SLUG,
    datePublished: DATE,
    dateModified: DATE,
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Webhook Stripe Next.js', path: `/blog/${SLUG}` },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Webhook Stripe Next.js', href: `/blog/${SLUG}` }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Tutoriel
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 25 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 12 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Webhook Stripe avec Next.js : tutoriel idempotent avec retry
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/${SLUG}`} title="Webhook Stripe avec Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Le webhook est la colonne vertébrale de tout système de paiement : sans lui, aucun
            moyen fiable de savoir qu&apos;un paiement a réussi. Mal écrit, il provoque des
            doublons de facturation et des états incohérents. Voici comment faire correctement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Le problème : au moins une fois, jamais exactement une fois</h2>
          <p>
            Stripe garantit l&apos;at-least-once delivery : si votre endpoint répond lentement ou en
            erreur, le même événement peut arriver plusieurs fois. Votre handler doit donc être{' '}
            <strong className="text-white">idempotent</strong> — traiter deux fois le même événement
            produit le même résultat que le traiter une fois.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : La route et la vérification de signature</h2>
          <p>
            Point crucial : il faut lire le corps <strong className="text-white">brut</strong> de la
            requête. Ne faites jamais <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">await req.json()</code> avant la vérification.
          </p>
          <Code>{`// src/app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from 'next/server'
import stripeLib from 'stripe'

const stripe = new stripeLib(process.env.STRIPE_SECRET_KEY!)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const body = await req.text() // Corps BRUT
  const signature = req.headers.get('stripe-signature')!

  let event
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Signature invalide:', err)
    return NextResponse.json({ error: 'invalid_signature' }, { status: 400 })
  }

  // ... traitement
  return NextResponse.json({ received: true })
}`}</Code>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : L&apos;idempotence par upsert</h2>
          <p>
            Stockez chaque ID d&apos;événement traité dans votre base. Si l&apos;insertion échoue
            (déjà présent), vous avez déjà traité cet événement : sortez tôt.
          </p>
          <Code>{`// Prisma : modèle dédié
model WebhookEvent {
  id         String   @id // c'est event.id de Stripe
  type       String
  receivedAt DateTime @default(now())
}`}</Code>
          <Code>{`async function processEvent(event: stripe.Event) {
  // Idempotence : upsert atomique
  try {
    await db.webhookEvent.create({
      data: { id: event.id, type: event.type },
    })
  } catch {
    // Événement déjà traité → no-op silencieux
    return { duplicate: true }
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as stripe.Checkout.Session
      await fulfillOrder(session)
      break
    }
    case 'customer.subscription.deleted':
      await revokeAccess(event.data.object as stripe.Subscription)
      break
  }

  return { duplicate: false }
}`}</Code>
          <p>
            En SQL pur, un <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">INSERT ... ON CONFLICT DO NOTHING RETURNING</code> donne
            le même effet atomique en une seule requête.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : Répondre vite, traiter lentement</h2>
          <p>
            Stripe attend une réponse en moins de 20 secondes. Si votre handler fait des appels
            lents (IA, emails, exports), répondez immédiatement et déportez le travail :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">File d&apos;attente</strong> : Vercel Queues, Upstash QStash ou Inngest.</li>
            <li><strong className="text-white">Ou traitement fire-and-forget</strong> avec <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">waitUntil()</code> sur Vercel.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 : Comprendre les retries de Stripe</h2>
          <p>
            En cas d&apos;échec, Stripe retente selon un backoff exponentiel pendant 72 heures :
            environ 1 min, 5 min, 30 min, puis toutes les heures jusqu&apos;à épuisement. Deux
            conséquences :
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Votre idempotence doit tenir sur plusieurs heures (d&apos;où le stockage en base, pas en mémoire).</li>
            <li>Répondez <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">200</code> dès que l&apos;événement est persisté, même si son traitement métier est encore en file.</li>
          </ol>
          <p>
            Pour vos propres appels vers des services externes depuis un handler, implémentez aussi
            un retry local :
          </p>
          <Code>{`async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn()
    } catch (err) {
      if (i === attempts - 1) throw err
      await new Promise(r => setTimeout(r, 2 ** i * 500))
    }
  }
  throw new Error('unreachable')
}`}</Code>

          <h2 className="text-2xl font-bold text-white mt-12">Test en local avec la CLI</h2>
          <Code>{`stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
# Copiez le whsec_... affiché dans STRIPE_WEBHOOK_SECRET

stripe trigger checkout.session.completed`}</Code>

          <h2 className="text-2xl font-bold text-white mt-12">Checklist production</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Signature vérifiée sur chaque requête</strong>, avec tolérance de temps par défaut (5 min).</li>
            <li><strong className="text-white">Table d&apos;événements</strong> pour l&apos;idempotence durable.</li>
            <li><strong className="text-white">Réponse &lt; 20 s</strong>, traitement lourd en file.</li>
            <li><strong className="text-white">Monitoring du dashboard Stripe</strong> → Developers → Webhooks : taux d&apos;échec &gt; 1 % = investiguez.</li>
            <li><strong className="text-white">Endpoint séparés par usage</strong> si vous avez des volumes très différents (paiements vs facturation).</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Ne codez pas ça à la main</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates SaaS incluent les webhooks Stripe complets : signature, idempotence,
              gestion des abonnements.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Voir les templates</Link>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Un webhook Stripe robuste tient en trois principes : corps brut + signature, table
            d&apos;idempotence, réponse rapide. Avec ces fondations, vos paiements resteront
            cohérents même quand Stripe retente dix fois le même événement.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Pour aller plus vite, cette architecture est déjà prête dans nos templates.</Link>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/stripe-billing-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Stripe Billing avec Next.js : le guide
              </Link>
            </li>
            <li>
              <Link href="/blog/email-transactionnel-nextjs-resend-guide" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Email transactionnel avec Resend : le guide complet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
