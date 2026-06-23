import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Comment créer un SaaS avec Next.js en 48h",
  description: "Guide complet : créez un SaaS fonctionnel avec Next.js 14 en 48 heures. Auth, dashboard, Stripe, IA intégrée. Code copiable à chaque étape.",
  path: '/blog/nextjs-saas-starter',
  type: 'article',
  keywords: ['SaaS Next.js', 'Next.js 14', 'template SaaS', 'créer un SaaS', 'lancer un SaaS', 'template next.js', 'Stripe', 'développeur web'],
  publishedTime: '2026-06-20',
  modifiedTime: '2026-06-20',
})

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function NextjsSaasStarterPage() {
  const articleSchema = generateArticleSchema({
    title: 'Comment créer un SaaS avec Next.js en 48h',
    description: 'Guide complet : créez un SaaS fonctionnel avec Next.js 14 en 48 heures.',
    slug: 'nextjs-saas-starter',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'SaaS avec Next.js en 48h', path: '/blog/nextjs-saas-starter' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'SaaS Next.js 48h', href: '/blog/nextjs-saas-starter' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guide
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 20 juin 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 15 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Comment créer un SaaS avec Next.js en 48h
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/nextjs-saas-starter`} title="Comment créer un SaaS avec Next.js en 48h" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Le SaaS (Software as a Service) est le modèle économique dominant pour les produits numériques. Mais créer un SaaS from scratch peut sembler intimidant. La bonne nouvelle ? Avec Next.js 14, Stripe, Prisma et Vercel, vous pouvez avoir un produit fonctionnel en 48 heures. Ce guide détaille chaque étape, du premier commit au déploiement.
          </p>

          <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
            <h3 className="text-white font-semibold mb-2">Prérequis</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-300 text-sm">
              <li>Connaissances de base en React et TypeScript</li>
              <li>Node.js 18+ installé</li>
              <li>Un compte Vercel (gratuit)</li>
              <li>Un compte Stripe (gratuit en mode test)</li>
              <li>Un compte NeuraAPI pour l&apos;intégration IA</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi Next.js pour un SaaS ?</h2>
          <p>
            Next.js 14 combine le rendu serveur (SSR), le rendu statique (SSG) et les API routes dans un seul framework. Pour un SaaS, c&apos;est idéal : votre landing page est ultra-rapide (SSG), votre dashboard est dynamique (SSR), et vos endpoints d&apos;authentification vivent dans le même projet (API routes). Pas besoin de monter un backend séparé.
          </p>
          <p>
            Le App Router de Next.js 14 offre en plus le streaming server-side, les layouts imbriqués et les Server Components. Résultat : moins de JavaScript côté client, des performances meilleures, et une architecture plus propre.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 — Initialiser le projet (Heure 0-1)</h2>
          <p>
            Créez votre projet avec la CLI officielle. Nous utilisons TypeScript, Tailwind CSS, ESLint et le App Router :
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
          <p>
            <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">zod</code> servira à valider les formulaires, <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">react-hook-form</code> pour gérer l&apos;état des formulaires, et <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">@neuraapi/sdk</code> pour intégrer l&apos;IA.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 — Configurer la base de données (Heure 1-3)</h2>
          <p>
            Prisma est l&apos;ORM standard pour les projets Next.js. Initialisez-le avec PostgreSQL :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`npx prisma init --datasource-provider postgresql`}</code>
            </pre>
          </div>
          <p>
            Définissez votre schéma de base de données. Pour un SaaS minimal, vous avez besoin d&apos;un modèle User et d&apos;un modèle Subscription :
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
  id             String         @id @default(cuid())
  email          String         @unique
  name           String?
  password       String
  plan           String         @default("free")
  stripeCustomerId String?      @unique
  apiKey         String         @unique @default(cuid())
  createdAt      DateTime       @default(now())
  updatedAt      DateTime       @updatedAt
  projects       Project[]
  subscription   Subscription?
}

model Project {
  id        String   @id @default(cuid())
  name      String
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
}

model Subscription {
  id                 String   @id @default(cuid())
  userId             String   @unique
  user               User     @relation(fields: [userId], references: [id])
  stripeSubscriptionId String @unique
  status             String
  plan               String
  currentPeriodEnd   DateTime
}`}</code>
            </pre>
          </div>
          <p>
            Ce schéma couvre l&apos;essentiel : un utilisateur, ses projets, et son abonnement Stripe. Vous l&apos;étendrez naturellement au fur et à mesure que votre SaaS grandira.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 — Implémenter l&apos;authentification (Heure 3-8)</h2>
          <p>
            NextAuth.js est la solution standard pour l&apos;auth dans Next.js. Configurez-le avec credentials (email + mot de passe) :
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
          <p>
            Créez ensuite les pages <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">/login</code> et <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">/register</code> avec des formulaires utilisant <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">react-hook-form</code> et <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">zod</code> pour la validation côté serveur.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 — Construire le dashboard (Heure 8-16)</h2>
          <p>
            Le dashboard est le cœur de votre SaaS. Utilisez les layouts imbriqués de Next.js 14 pour une navigation fluide :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/dashboard/layout.tsx
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Sidebar from '@/components/dashboard/Sidebar'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) redirect('/login')

  return (
    <div className="flex min-h-screen">
      <Sidebar user={session.user} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}`}</code>
            </pre>
          </div>
          <p>
            Le layout protège automatiquement toutes les routes enfants. Si l&apos;utilisateur n&apos;est pas connecté, il est redirigé vers <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">/login</code>. La sidebar affiche la navigation et les informations de l&apos;utilisateur.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 5 — Intégrer la facturation Stripe (Heure 16-28)</h2>
          <p>
            Stripe est l&apos;épine dorsale de votre monétisation. Créez d&apos;abord les plans dans votre dashboard Stripe, puis intégrez le checkout :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const PLANS = {
  starter: { priceId: 'price_xxx', name: 'Starter' },
  pro: { priceId: 'price_yyy', name: 'Pro' },
  enterprise: { priceId: 'price_zzz', name: 'Entreprise' },
}

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { plan } = await req.json()
  const selectedPlan = PLANS[plan as keyof typeof PLANS]
  if (!selectedPlan) {
    return NextResponse.json({ error: 'Plan invalide' }, { status: 400 })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer_email: session.user.email!,
    line_items: [{ price: selectedPlan.priceId, quantity: 1 }],
    success_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=true\`,
    metadata: { userId: session.user.id, plan },
  })

  return NextResponse.json({ url: checkoutSession.url })
}`}</code>
            </pre>
          </div>
          <p>
            N&apos;oubliez pas de configurer les webhooks Stripe pour synchroniser les changements d&apos;abonnement avec votre base de données. Le webhook <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">checkout.session.completed</code> active l&apos;abonnement, et <code className="rounded bg-indigo-800/50 px-2 py-0.5 text-indigo-200 font-mono text-sm">customer.subscription.deleted</code> le désactive.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 6 — Ajouter l&apos;IA avec NeuraAPI (Heure 28-36)</h2>
          <p>
            C&apos;est ici que votre SaaS se différencie. NeuraAPI vous donne accès à des modèles IA (GPT-4, Claude, etc.) via une API unique. Intégrez-la dans votre produit :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/lib/ai.ts
import { NeuraAPI } from '@neuraapi/sdk'

const ai = new NeuraAPI(process.env.NEURA_API_KEY!)

export async function generateContent(prompt: string, userId: string) {
  // Vérifier le quota utilisateur
  const credits = await checkCredits(userId)
  if (credits <= 0) {
    throw new Error('Crédits épuisés. Passez au plan supérieur.')
  }

  const result = await ai.generate({
    prompt,
    maxTokens: 1000,
  })

  // Déduire un crédit
  await consumeCredit(userId)

  return result.content
}`}</code>
            </pre>
          </div>
          <p>
            Ajoutez une route API Next.js pour exposer cette fonctionnalité à votre frontend. Vos utilisateurs pourront générer du contenu, des emails, des descriptions de produits — tout en restant dans votre application.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 7 — Déployer sur Vercel (Heure 36-44)</h2>
          <p>
            Vercel est le déploiment natif pour Next.js. Un seul fichier de config et vous êtes en production :
          </p>
          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`# Installer Vercel CLI
npm i -g vercel

# Déployer en staging
vercel

# Configurer les variables d'environnement
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
vercel env add NEURA_API_KEY

# Déployer en production
vercel --prod`}</code>
            </pre>
          </div>
          <p>
            Configurez aussi votre nom de domaine personnalisé dans les paramètres du projet Vercel. Le SSL est géré automatiquement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 8 — Finaliser et lancer (Heure 44-48)</h2>
          <p>
            Les dernières heures sont dédiées aux finitions :
          </p>
          <ul className="list-disc list-inside space-y-2 text-indigo-300">
            <li>Ajoutez une landing page avec les avantages de votre SaaS</li>
            <li>Configurez les emails transactionnels (welcome, reset password, invoice)</li>
            <li>Ajoutez Google Analytics et les meta tags SEO</li>
            <li>Testez le flux complet : inscription → login → paiement → utilisation</li>
            <li>Vérifiez les performances avec Lighthouse (ciblez 90+ partout)</li>
            <li>Configurez les alertes d&apos;erreur (Sentry ou Vercel Analytics)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Récapitulatif des 48 heures</h2>
          <div className="rounded-2xl glass-card p-6 space-y-3">
            {[
              { step: '1', time: 'Heures 0-1', desc: 'Setup projet, dépendances, configuration' },
              { step: '2', time: 'Heures 1-3', desc: 'Base de données Prisma, schéma, migrations' },
              { step: '3', time: 'Heures 3-8', desc: 'Authentification NextAuth, register, login' },
              { step: '4', time: 'Heures 8-16', desc: 'Dashboard, layout, navigation, settings' },
              { step: '5', time: 'Heures 16-28', desc: 'Stripe checkout, webhooks, gestion d\'abonnement' },
              { step: '6', time: 'Heures 28-36', desc: 'Intégration IA NeuraAPI, routes, frontend' },
              { step: '7', time: 'Heures 36-44', desc: 'Déploiement Vercel, variables, domaine' },
              { step: '8', time: 'Heures 44-48', desc: 'Landing, emails, SEO, tests, monitoring' },
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

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6 mt-8">
            <h3 className="text-lg font-semibold text-white mb-2">Raccourci : le template NeuraSaaS</h3>
            <p className="text-indigo-200/70 mb-4">
              Tout ce guide est pré-configuré dans le template <Link href="/templates/neurasaa-kit-complet" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">NeuraSaaS</Link> : auth, dashboard, Stripe, landing page, intégration IA. Gagnez 40h de développement.
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
              <Link href="/blog/ai-api-integration" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans votre application en 5 minutes
              </Link>
            </li>
            <li>
              <Link href="/blog/stripe-billing-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Configurer Stripe Billing dans Next.js 14
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
