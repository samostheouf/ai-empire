import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('blogStripeBillingTitle'),
    description: t('blogStripeBillingDescription'),
    path: '/blog/stripe-billing-nextjs',
    type: 'article',
    keywords: [t('blogStripeBillingKw1'), t('blogStripeBillingKw2'), t('blogStripeBillingKw3'), t('blogStripeBillingKw4'), t('blogStripeBillingKw5'), t('blogStripeBillingKw6'), t('blogStripeBillingKw7')],
    publishedTime: '2026-06-20',
    modifiedTime: '2026-06-20',
  })
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default async function StripeBillingNextjsPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const articleSchema = generateArticleSchema({
    title: t('blogStripeBillingTitle'),
    description: t('blogStripeBillingSchemaDesc'),
    slug: 'stripe-billing-nextjs',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: t('blogBreadcrumbBlog'), path: '/blog' },
      { name: t('blogStripeBillingBreadcrumb'), path: '/blog/stripe-billing-nextjs' },
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
        <Breadcrumb items={[{ name: t('blogBreadcrumbBlog'), href: '/blog' }, { name: t('blogStripeBillingBreadcrumb'), href: '/blog/stripe-billing-nextjs' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> {t('blogStripeBillingTag')}
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> {t('blogStripeBillingDate')}</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> {t('blogStripeBillingReadTime')}</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            {t('blogStripeBillingH1')}
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/stripe-billing-nextjs`} title={t('blogStripeBillingShareTitle')} />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            {t('blogStripeBillingIntro')}
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">{t('blogStripeBillingPrereqTitle')}</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>{t('blogStripeBillingPrereq1')}</li>
              <li>{t('blogStripeBillingPrereq2')}</li>
              <li>{t('blogStripeBillingPrereq3')}</li>
              <li>{t('blogStripeBillingPrereq4')}</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Step1')}</h2>
          <p>
            {t('blogStripeBillingPStep1')}
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npm install stripe @stripe/stripe-js`}</code>
            </pre>
          </div>
          <p>
            {t('blogStripeBillingPStep1b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">.env.local</code>:
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
NEXT_PUBLIC_APP_URL=http://localhost:3000`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Step2')}</h2>
          <p>
            {t('blogStripeBillingPStep2')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li><strong className="text-white">Starter</strong> — 19€{t('blogStripeBillingPerMonth')}, 1 000 {t('blogStripeBillingCredits')}</li>
            <li><strong className="text-white">Pro</strong> — 49€{t('blogStripeBillingPerMonth')}, 5 000 {t('blogStripeBillingCredits')}</li>
            <li><strong className="text-white">Entreprise</strong> — 99€{t('blogStripeBillingPerMonth')}, 20 000 {t('blogStripeBillingCredits')}</li>
          </ul>
          <p>
            {t('blogStripeBillingPStep2b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">price_id</code> {t('blogStripeBillingPStep2c')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Step3')}</h2>
          <p>
            {t('blogStripeBillingPStep3')}
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
            {t('blogStripeBillingPStep3b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">metadata</code> {t('blogStripeBillingPStep3c')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Step4')}</h2>
          <p>
            {t('blogStripeBillingPStep4')}
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
              (session.subscription as { current_period_end: number }).current_period_end * 1000
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
            {t('blogStripeBillingPStep4b')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Step5')}</h2>
          <p>
            {t('blogStripeBillingPStep5')}
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
            {t('blogStripeBillingPStep5b')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">webhook signing secret</code> {t('blogStripeBillingPStep5c')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">STRIPE_WEBHOOK_SECRET</code> {t('blogStripeBillingPStep5d')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Step6')}</h2>
          <p>
            {t('blogStripeBillingPStep6')}
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
            {t('blogStripeBillingPStep6b')}
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Step7')}</h2>
          <p>
            {t('blogStripeBillingPStep7')}
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

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2BestPractices')}</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogStripeBillingBp1Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogStripeBillingBp1Desc')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">constructEvent()</code> {t('blogStripeBillingBp1Desc2')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogStripeBillingBp2Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogStripeBillingBp2Desc')} <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">updateMany</code> {t('blogStripeBillingBp2Desc2')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogStripeBillingBp3Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogStripeBillingBp3Desc')}</p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
              <h3 className="text-white font-semibold mb-2">{t('blogStripeBillingBp4Title')}</h3>
              <p className="text-sm text-indigo-300">{t('blogStripeBillingBp4Desc')}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">{t('blogStripeBillingH2Recap')}</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', desc: t('blogStripeBillingRecap1') },
              { step: '2', desc: t('blogStripeBillingRecap2') },
              { step: '3', desc: t('blogStripeBillingRecap3') },
              { step: '4', desc: t('blogStripeBillingRecap4') },
              { step: '5', desc: t('blogStripeBillingRecap5') },
              { step: '6', desc: t('blogStripeBillingRecap6') },
              { step: '7', desc: t('blogStripeBillingRecap7') },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-xs font-bold flex items-center justify-center text-white">
                  {item.step}
                </span>
                <span className="text-sm text-indigo-200">
                  <strong className="text-white">{t('blogStripeBillingRecapStep')} {item.step}</strong> — {item.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-2">{t('blogStripeBillingCtaTitle')}</h3>
            <p className="text-indigo-200/70 mb-4">
              {t('blogStripeBillingCtaDesc')} <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> {t('blogStripeBillingCtaDesc2')}
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              {t('blogViewPricing')}
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">{t('blogRelatedArticles')}</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/nextjs-saas-starter" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedNextjsSaasStarter')}
              </Link>
            </li>
            <li>
              <Link href="/blog/ai-api-integration" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                {t('blogRelatedAiApiIntegration')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
