import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'
const SLUG = 'email-transactionnel-nextjs-resend-guide'
const DATE = '2026-08-25'

export async function generateMetadata() {
  return genMeta({
    title: 'Email transactionnel avec Next.js et Resend : le guide complet (2026)',
    description: 'Guide complet pour envoyer des emails transactionnels avec Next.js et Resend : configuration DNS, templates React Email, webhooks, bonnes pratiques délivrabilité.',
    path: `/blog/${SLUG}`,
    type: 'article',
    keywords: ['email transactionnel Next.js', 'Resend tutoriel', 'envoyer email Next.js', 'React Email', 'délivrabilité email', 'Resend API français'],
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

export default function BlogEmailTransactionnelResend() {
  const articleSchema = generateArticleSchema({
    title: 'Email transactionnel avec Next.js et Resend : le guide complet',
    description: 'Configuration DNS, React Email, webhooks et délivrabilité : tout pour des emails transactionnels fiables avec Next.js.',
    slug: SLUG,
    datePublished: DATE,
    dateModified: DATE,
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Email transactionnel Resend', path: `/blog/${SLUG}` },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Email transactionnel Resend', href: `/blog/${SLUG}` }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guide
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 25 août 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 13 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Email transactionnel avec Next.js et Resend : le guide complet
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/${SLUG}`} title="Email transactionnel avec Next.js et Resend" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Emails de confirmation, réinitialisation de mot de passe, reçus de paiement : les emails
            transactionnels sont l&apos;épine dorsale de tout SaaS. Avec Resend et son intégration
            native de React Email, vous envoyez des emails fiables et beaux en moins d&apos;une heure.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi Resend ?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">API minimaliste</strong> : un seul appel fetch suffit, SDK officiel TypeScript excellent.</li>
            <li><strong className="text-white">React Email</strong> : écrivez vos templates en JSX typé, versionnés dans votre repo.</li>
            <li><strong className="text-white">Délivrabilité soignée</strong> : IPs dédiées, SPF/DKIM guidés pas à pas.</li>
            <li><strong className="text-white">Tier gratuit généreux</strong> : 100 emails/jour, 3 000/mois — largement assez pour démarrer.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 1 : Configuration du domaine</h2>
          <p>
            Créez un compte sur resend.com, ajoutez votre domaine, puis ajoutez chez votre registrar
            les enregistrements demandés :
          </p>
          <Code>{`# Enregistrements DNS typiques
SPF   : TXT  @                 "v=spf1 include:amazonses.com ~all"
DKIM  : TXT  resend._domainkey "p=MIGfMA0GCSqGSIb3..." (clé fournie)
DMARC : TXT  _dmarc           "v=DMARC1; p=none; rua=mailto:dmarc@votredomaine.fr"`}</Code>
          <p>
            Vérifiez que le statut passe à « Verified » avant tout envoi. Sans DKIM valide, vos
            emails finiront en spam chez Gmail et Outlook.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 2 : Installation</h2>
          <Code>{`npm install resend react-email @react-email/components

# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_FROM="NeuraAPI <noreply@votredomaine.fr>"`}</Code>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 3 : Un template React Email</h2>
          <p>Les templates en JSX sont testables localement avec <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">npx email dev</code>.</p>
          <Code>{`// src/emails/WelcomeEmail.tsx
import { Html, Heading, Text, Button, Section } from '@react-email/components'

export function WelcomeEmail({ name, url }: { name: string; url: string }) {
  return (
    <Html lang="fr">
      <Section style={{ padding: 32, fontFamily: 'sans-serif' }}>
        <Heading>Bienvenue {name} 👋</Heading>
        <Text>Votre compte est prêt. Confirmez votre adresse pour commencer :</Text>
        <Button href={url} style={{ background: '#4f46e5', color: '#fff', padding: '12px 24px', borderRadius: 8 }}>
          Confirmer mon email
        </Button>
        <Text style={{ color: '#888' }}>Ce lien expire dans 24 heures.</Text>
      </Section>
    </Html>
  )
}`}</Code>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 4 : Envoyer depuis une route API</h2>
          <Code>{`// src/app/api/email/welcome/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { WelcomeEmail } from '@/emails/WelcomeEmail'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: NextRequest) {
  const { email, name, confirmUrl } = await req.json()

  const { data, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: 'Confirmez votre compte',
    react: WelcomeEmail({ name, url: confirmUrl }),
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'send_failed' }, { status: 500 })
  }

  return NextResponse.json({ id: data?.id })
}`}</Code>
          <p>
            Notez la gestion d&apos;erreur explicite : Resend ne lève pas d&apos;exception, il
            retourne un objet <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">error</code>. Loggez systématiquement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Étape 5 : Gérer les bounces avec les webhooks</h2>
          <p>
            Pour maintenir votre réputation d&apos;expéditeur, traitez les événements
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">email.bounced</code> et{' '}
            <code className="bg-white/5 px-1.5 py-0.5 rounded text-sm border border-white/10">email.complained</code> :
          </p>
          <Code>{`// src/app/api/webhooks/resend/route.ts
export async function POST(req: NextRequest) {
  const event = await req.json()

  switch (event.type) {
    case 'email.bounced':
      await db.user.update({
        where: { email: event.data.to[0] },
        data: { emailBlocked: true },
      })
      break
    case 'email.complained':
      // Désinscription immédiate obligatoire
      await db.newsletter.deleteMany({ where: { email: event.data.to[0] } })
      break
  }

  return NextResponse.json({ received: true })
}`}</Code>

          <h2 className="text-2xl font-bold text-white mt-12">Bonnes pratiques délivrabilité</h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Un sous-domaine dédié</strong> : envoyez depuis mail.votredomaine.fr pour isoler votre réputation du domaine principal.</li>
            <li><strong className="text-white">Lien de désinscription visible</strong> même en transactionnel — c&apos;est une exigence RGPD.</li>
            <li><strong className="text-white">Jamais d&apos;adresses gratuites en from</strong> : noreply@gmail.com est rejeté par beaucoup de FAI.</li>
            <li><strong className="text-white">Retry asynchrone</strong> : mettez les envois critiques dans une file (Vercel Queues, Upstash) plutôt qu&apos;en synchrone dans la requête utilisateur.</li>
            <li><strong className="text-white">Surveillez vos stats</strong> : taux de bounce &gt; 5 % = alerte rouge.</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Passez moins de temps sur la plomberie</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates SaaS incluent Resend préconfiguré : emails transactionnels, webhooks et
              templates React Email prêts à l&apos;emploi.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Découvrir les templates</Link>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Resend + React Email rendent l&apos;email transactionnel enfin agréable en Next.js :
            templates typés, API simple, webhooks propres. Configurez vos DNS correctement dès le
            premier jour, surveillez vos bounces, et vos emails arriveront à destination.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Nos templates incluent toute cette infrastructure déjà branchée.</Link>
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
              <Link href="/blog/api-ia-nextjs" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Intégrer une API IA dans Next.js en 3 étapes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
