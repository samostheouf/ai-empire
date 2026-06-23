import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Configurer Stripe Billing dans Next.js 14",
  description: "Guide étape par étape : intégrez Stripe Billing dans votre application Next.js 14. Checkout, webhooks, gestion d'abonnement, portail client.",
  path: '/blog/stripe-billing-nextjs',
  type: 'article',
  keywords: ['Stripe Billing', 'Next.js 14', 'abonnement SaaS', 'paiement en ligne', 'Stripe checkout', 'webhooks Stripe', 'billing SaaS'],
  publishedTime: '2026-06-20',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function StripeBillingNextjsPage() {
  const articleSchema = generateArticleSchema({
    title: 'Configurer Stripe Billing dans Next.js 14',
    description: 'Guide étape par étape : intégrez Stripe Billing dans votre application Next.js 14.',
    slug: 'stripe-billing-nextjs',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Stripe Billing Next.js', path: '/blog/stripe-billing-nextjs' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Stripe Billing Next.js', href: '/blog/stripe-billing-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guide
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 20 juin 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 14 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Configurer Stripe Billing dans Next.js 14
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/stripe-billing-nextjs`} title="Configurer Stripe Billing dans Next.js 14" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Stripe Billing est la solution standard pour monétiser un SaaS. Il gère les abonnements, les factures, les renouvellements automatiques et les changements de plan. Ce guide détaille l&apos;intégration complète dans Next.js 14, du premier checkout au portail client.
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">Prérequis</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>Un projet Next.js 14 avec App Router</li>
              <li>Un compte Stripe (mode test)</li>
              <li>Stripe CLI installé (pour les webhooks en local)</li>
              <li>Auth configurée (NextAuth ou autre)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 — Configurer Stripe dans votre projet</h2>
          <p>
            Installez le SDK Stripe et configurez les variables d&apos;environnement :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npm install stripe @stripe/stripe-js`}</code>
            </pre>
          </div>
          <p>
            Ajoutez dans votre fichier <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">.env.local</code> :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
NEXT_PUBLIC_APP_URL=http://localhost:3000`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 — Créer les produits et prix dans Stripe</h2>
          <p>
            Avant de coder, configurez vos plans dans le dashboard Stripe. Pour chaque plan, créez un Product puis un Price en mode récurrent :
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li><strong className="text-white">Starter</strong> — 19€/mois, 1 000 crédits</li>
            <li><strong className="text-white">Pro</strong> — 49€/mois, 5 000 crédits</li>
            <li><strong className="text-white">Entreprise</strong> — 99€/mois, 20 000 crédits</li>
          </ul>
          <p>
            Notez les <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">price_id</code> de chaque prix. Vous en aurez besoin pour le checkout.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 — Créer la route de checkout</h2>
          <p>
            La route de checkout redirige l&apos;utilisateur vers la page de paiement Stripe. Elle crée une session de checkout avec le bon prix et les métadonnées :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const PLANS = {
  starter: {
    name: 'Starter',
    priceId: 'price_starter_monthly',
    credits: 1000,
  },
  pro: {
    name: 'Pro',
    priceId: 'price_pro_monthly',
    credits: 5000,
  },
  enterprise: {
    name: 'Entreprise',
    priceId: 'price_enterprise_monthly',
    credits: 20000,
  },
} as const

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json(
      { error: 'Non autorisé' },
      { status: 401 }
    )
  }

  const { plan } = await req.json()
  const selectedPlan = PLANS[plan as keyof typeof PLANS]

  if (!selectedPlan) {
    return NextResponse.json(
      { error: 'Plan invalide' },
      { status: 400 }
    )
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: session.user.email!,
    line_items: [
      {
        price: selectedPlan.priceId,
        quantity: 1,
      },
    ],
    success_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true\`,
    metadata: {
      userId: session.user.id,
      plan: plan,
    },
  })

  return NextResponse.json({ url: checkoutSession.url })
}`}</code>
            </pre>
          </div>
          <p>
            Le <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">metadata</code> est crucial : il sera transmis au webhook pour associer l&apos;abonnement à l&apos;utilisateur dans votre base de données.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 — Configurer les webhooks Stripe</h2>
          <p>
            Les webhooks sont le mécanisme par lequel Stripe vous notifie des événements (paiement réussi, abonnement annulé, carte expirée...). C&apos;est la partie la plus critique de l&apos;intégration :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { prisma } from '@/lib/db'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Signature invalide' },
      { status: 400 }
    )
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId
      const plan = session.metadata?.plan

      if (userId && plan) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            plan,
            stripeCustomerId: session.customer as string,
          },
        })

        await prisma.subscription.create({
          data: {
            userId,
            stripeSubscriptionId: session.subscription as string,
            status: 'active',
            plan,
            currentPeriodEnd: new Date(
              (session.subscription as any).current_period_end * 1000
            ),
          },
        })
      }
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const status = subscription.status

      await prisma.subscription.updateMany({
        where: {
          stripeSubscriptionId: subscription.id,
        },
        data: {
          status,
          currentPeriodEnd: new Date(
            subscription.current_period_end * 1000
          ),
        },
      })
      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription

      await prisma.subscription.updateMany({
        where: {
          stripeSubscriptionId: subscription.id,
        },
        data: { status: 'canceled' },
      })

      // Downgrade l'utilisateur au plan gratuit
      const sub = await prisma.subscription.findUnique({
        where: { stripeSubscriptionId: subscription.id },
      })
      if (sub) {
        await prisma.user.update({
          where: { id: sub.userId },
          data: { plan: 'free' },
        })
      }
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      // Envoyer un email d'alerte à l'utilisateur
      console.error('Paiement échoué pour:', invoice.customer)
      break
    }
  }

  return NextResponse.json({ received: true })
}`}</code>
            </pre>
          </div>
          <p>
            Ce webhook gère les 4 événements principaux : checkout réussi, mise à jour d&apos;abonnement, annulation, et échec de paiement. Chaque événement met à jour votre base de données en conséquence.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 5 — Tester les webhooks en local</h2>
          <p>
            Stripe CLI vous permet de tester les webhooks sans les déployer en production :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Installer Stripe CLI
npm i -g stripe

# Se connecter à votre compte Stripe
stripe login

# Forwarder les webhooks vers votre serveur local
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Dans un autre terminal, déclencher des événements de test
stripe trigger checkout.session.completed
stripe trigger customer.subscription.deleted`}</code>
            </pre>
          </div>
          <p>
            Le CLI affiche un <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">webhook signing secret</code> que vous utilisez en tant que <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">STRIPE_WEBHOOK_SECRET</code> en local.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 6 — Créer le portail client Stripe</h2>
          <p>
            Le portail client Stripe permet à vos utilisateurs de gérer leur abonnement (changer de plan, mettre à jour la carte, annuler) sans que vous ayez à coder une seule page :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// app/api/stripe/portal/route.ts
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json(
      { error: 'Non autorisé' },
      { status: 401 }
    )
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: session.user.stripeCustomerId!,
    return_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/dashboard\`,
  })

  return NextResponse.json({ url: portalSession.url })
}`}</code>
            </pre>
          </div>
          <p>
            Stripe gère toute l&apos;UI du portail : formulaire de carte, historique de factures, options de downgrade/upgrade. Vous n&apos;avez rien à maintenir.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 7 — Afficher le statut d&apos;abonnement</h2>
          <p>
            Dans votre dashboard, affichez le plan actuel de l&apos;utilisateur et un bouton pour gérer l&apos;abonnement :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// components/SubscriptionStatus.tsx
'use client'

import { useState } from 'react'

interface Props {
  plan: string
  status: string
  currentPeriodEnd: string
}

export function SubscriptionStatus({ plan, status, currentPeriodEnd }: Props) {
  const [loading, setLoading] = useState(false)

  const handleManage = async () => {
    setLoading(true)
    const res = await fetch('/api/stripe/portal', { method: 'POST' })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
    setLoading(false)
  }

  return (
    <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
      <h3 className="text-lg font-semibold text-white">Abonnement</h3>
      <div className="mt-4 space-y-2">
        <p className="text-indigo-200">
          Plan : <span className="font-semibold text-white capitalize">{plan}</span>
        </p>
        <p className="text-indigo-200">
          Statut : <span className={status === 'active' ? 'text-green-400' : 'text-red-400'}>{status === 'active' ? 'Actif' : 'Inactif'}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Renouvellement le {new Date(currentPeriodEnd).toLocaleDateString('fr-FR')}
        </p>
      </div>
      <button
        onClick={handleManage}
        disabled={loading}
        className="mt-6 rounded-lg border border-indigo-500 px-4 py-2 text-sm font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all disabled:opacity-50"
      >
        {loading ? 'Chargement...' : 'Gérer l\'abonnement'}
      </button>
    </div>
  )
}`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Bonnes pratiques</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Toujours valider la signature des webhooks</h3>
              <p className="text-sm text-indigo-300">Ne faites jamais confiance au contenu brut d&apos;une requête webhook. Stripe fournit une signature que vous devez vérifier avec <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">constructEvent()</code> pour vous assurer que la requête vient bien de Stripe.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Traiter les webhooks de manière idempotente</h3>
              <p className="text-sm text-indigo-300">Stripe peut renvoyer un même webhook plusieurs fois. Votre handler doit pouvoir être exécuté plusieurs fois sans effets de bord. Utilisez <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">updateMany</code> ou vérifiez l&apos;état avant de modifier.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Utiliser le mode test avant de passer en production</h3>
              <p className="text-sm text-indigo-300">Testez chaque scénario en mode test : checkout réussi, annulation, échec de paiement, downgrade. Stripe fournit des cartes de test spécifiques pour chaque cas.</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">Envoyer des emails transactionnels</h3>
              <p className="text-sm text-indigo-300">Configurez les emails Stripe (factures, rappels de paiement) dans le dashboard. Cela réduit le support client et améliore le taux de rétention.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Récapitulatif</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', desc: 'Installer le SDK Stripe et configurer les variables' },
              { step: '2', desc: 'Créer les produits et prix dans le dashboard Stripe' },
              { step: '3', desc: 'Route API checkout pour créer les sessions de paiement' },
              { step: '4', desc: 'Route webhook pour synchroniser les statuts' },
              { step: '5', desc: 'Tester les webhooks en local avec Stripe CLI' },
              { step: '6', desc: 'Portail client pour l\'autogestion des abonnements' },
              { step: '7', desc: 'Afficher le statut dans le dashboard utilisateur' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-xs font-bold flex items-center justify-center text-white">
                  {item.step}
                </span>
                <span className="text-sm text-indigo-200">
                  <strong className="text-white">Étape {item.step}</strong> — {item.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-2">Besoin d&apos;un raccourci ?</h3>
            <p className="text-indigo-200/70 mb-4">
              Le template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> inclut toute l&apos;intégration Stripe Billing pré-configurée : checkout, webhooks, portail client, gestion des plans. Gagnez 20h de développement.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir les tarifs →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles connexes</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/nextjs-saas-starter" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Comment créer un SaaS avec Next.js en 48h
              </Link>
            </li>
            <li>
              <Link href="/blog/ai-api-integration" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans votre application en 5 minutes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
