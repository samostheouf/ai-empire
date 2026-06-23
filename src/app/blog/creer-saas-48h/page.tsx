import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Créer un SaaS en 48h : guide étape par étape",
  description: "Guide complet pour lancer votre SaaS en 48h avec Next.js 14, Stripe, Prisma et Vercel. Setup, auth, dashboard, billing, déploiement.",
  path: '/blog/creer-saas-48h',
  type: 'article',
  keywords: ['SaaS template', 'Next.js', 'Stripe', 'développeur web', 'template next.js', 'lancer un SaaS'],
  publishedTime: '2026-02-10',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function BlogCreerSaaS() {
  const articleSchema = generateArticleSchema({
    title: 'Créer un SaaS en 48h : guide étape par étape',
    description: 'Guide complet pour lancer votre SaaS en 48h avec Next.js 14, Stripe, Prisma et Vercel.',
    slug: 'creer-saas-48h',
    datePublished: '2026-02-10',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'SaaS en 48h', path: '/blog/creer-saas-48h' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'SaaS en 48h', href: '/blog/creer-saas-48h' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guide
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 10 février 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 10 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Créer un SaaS en 48h : guide étape par étape
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/creer-saas-48h`} title="Créer un SaaS en 48h : guide étape par étape" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Lancer un SaaS ne demande plus des mois de développement. Avec les bons outils — Next.js 14, Stripe,
            Prisma, Vercel — vous pouvez avoir un produit fonctionnel en 48h. Ce guide détaille chaque étape,
            du premier commit au déploiement en production.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Jour 1 — Les fondations (heures 0-12)</h2>

          <h3 className="text-xl font-semibold text-white mt-8">Étape 1 : Initialiser le projet</h3>
          <p>
            Commencez par créer un projet Next.js 14 avec TypeScript, Tailwind CSS et App Router :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx create-next-app@14 mon-saas \\
  --typescript --tailwind --eslint --app \\
  --src-dir --import-alias "@/*"

cd mon-saas

# Installer les dépendances essentielles
npm install prisma @prisma/client next-auth
npm install stripe @stripe/stripe-js
npm install zod react-hook-form
npm install @neuraapi/sdk`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Étape 2 : Configurer la base de données</h3>
          <p>
            Prisma offre une couche ORM intuitive. Initialisez-le avec PostgreSQL :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  plan      String   @default("starter")
  apiKey    String   @unique @default(cuid())
  createdAt DateTime @default(now())
  projects  Project[]
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Étape 3 : Implémenter l&apos;authentification</h3>
          <p>
            NextAuth.js est le choix standard pour Next.js. Configurez-le avec credentials :
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/auth.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from './db'
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email as string },
        })
        if (!user) return null
        const valid = await bcrypt.compare(
          credentials?.password as string, user.password
        )
        if (!valid) return null
        return { id: user.id, email: user.email, name: user.name }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  pages: { signIn: '/login' },
})`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Jour 2 — La facturation et le déploiement</h2>

          <h3 className="text-xl font-semibold text-white mt-8">Étape 4 : Intégrer Stripe</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { plan } = await req.json()
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: session.user.email!,
    line_items: [{ price: PLANS[plan].priceId, quantity: 1 }],
    success_url: \`\${process.env.NEXT_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.NEXT_URL}/pricing?canceled=true\`,
    metadata: { userId: session.user.id, plan },
  })

  return NextResponse.json({ url: checkoutSession.url })
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-white mt-8">Étape 5 : Déployer sur Vercel</h3>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Configurer les variables d'environnement
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY

# Déployer en production
vercel --prod`}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Récapitulatif des 48 heures</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: 'Heures 0-4', desc: 'Setup projet, dépendances, base de données Prisma' },
              { step: '2', time: 'Heures 4-12', desc: 'Authentification NextAuth, register, login' },
              { step: '3', time: 'Heures 12-24', desc: 'Dashboard, layout, navigation, settings' },
              { step: '4', time: 'Heures 24-36', desc: 'Stripe checkout, webhooks, gestion d\'abonnement' },
              { step: '5', time: 'Heures 36-44', desc: 'Landing page, SEO, emails transactionnels' },
              { step: '6', time: 'Heures 44-48', desc: 'Tests, déploiement Vercel, monitoring' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-xs font-bold flex items-center justify-center text-white">
                  {item.step}
                </span>
                <span className="text-sm">
                  <strong className="text-white">{item.time}</strong> — {item.desc}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Besoin d&apos;un raccourci ?</h3>
            <p className="text-indigo-200/70 mb-4">
              Le template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> inclut
              tout ce guide pré-configuré : auth, dashboard, Stripe, landing page, admin panel. Gagnez 40h de développement.
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
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Comment intégrer une API IA dans Next.js
              </Link>
            </li>
            <li>
              <Link href="/blog/templates-nextjs-premium" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Templates Next.js premium : comment choisir le bon
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
