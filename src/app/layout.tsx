import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nProvider } from '@/i18n'
import { isRTL, type Locale } from '@/i18n/config'
import { getLocaleFromCookies } from '@/i18n/server'
import {
  generateSoftwareApplicationSchema,
  generateOrganizationSchema,
  generateFAQSchema,
  generateWebSiteSchema,
  type FAQItem,
} from '@/lib/seo'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false })
const CookieConsent = dynamic(() => import('@/components/CookieConsent'), { ssr: false })
const AnalyticsTracker = dynamic(() => import('@/components/AnalyticsTracker').then(mod => ({ default: mod.AnalyticsTracker })), { ssr: false })
const ExitIntentPopup = dynamic(() => import('@/components/ExitIntentPopup'), { ssr: false })
const StickyCTA = dynamic(() => import('@/components/StickyCTA'), { ssr: false })
const NewsletterPopup = dynamic(() => import('@/components/NewsletterPopup'), { ssr: false })
const RealSocialProof = dynamic(() => import('@/components/RealSocialProof'), { ssr: false })
const CoreWebVitals = dynamic(() => import('@/components/CoreWebVitals'), { ssr: false })
const ServiceWorkerRegistration = dynamic(() => import('@/components/ServiceWorker'), { ssr: false })
import SkipLinks from '@/components/SkipLinks'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const baseUrl = 'https://ai-empire-steel.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'NeuraAPI — APIs IA & Templates Premium Next.js',
    template: '%s | NeuraAPI',
  },
  description: "Intégrez l'intelligence artificielle dans vos applications en quelques minutes. Génération de texte, code, SEO via Groq/OpenAI. Templates premium Next.js. Gratuit pour commencer.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  keywords: ['template next.js', 'API ia', 'SaaS template', 'IA gratuite', 'développeur web', 'intelligence artificielle', 'templates premium', 'Next.js', 'TypeScript', 'SaaS', 'OpenAI', 'Groq', 'SDK TypeScript'],
  authors: [{ name: 'NeuraAPI' }],
  openGraph: {
    title: 'NeuraAPI — APIs IA & Templates Premium Next.js',
    description: "Intégrez l'IA dans vos apps en minutes. Texte, code, SEO. Templates premium. Gratuit pour commencer.",
    url: baseUrl,
    siteName: 'NeuraAPI',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/api/og?title=NeuraAPI&subtitle=APIs+IA+%26+Templates+Premium+Next.js`,
        width: 1200,
        height: 630,
        alt: 'NeuraAPI — APIs IA & Templates Premium Next.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuraAPI — APIs IA & Templates Premium Next.js',
    description: "Intégrez l'IA dans vos apps en minutes. Gratuit pour commencer.",
    images: [`${baseUrl}/api/og?title=NeuraAPI&subtitle=APIs+IA+%26+Templates+Premium+Next.js`],
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'fr-FR': '/',
      'en-US': '/en',
      'es-ES': '/es',
      'de-DE': '/de',
      'it-IT': '/it',
      'pt-BR': '/pt',
      'ja-JP': '/ja',
      'ko-KR': '/ko',
      'zh-CN': '/zh',
      'ar-SA': '/ar',
      'x-default': '/',
    },
  },
}

const faqItems: FAQItem[] = [
  { question: 'Comment obtenir une clé API gratuite ?', answer: "Inscrivez-vous gratuitement sur /register. Votre clé API est générée instantanément. 100 crédits/mois offerts, sans carte bancaire." },
  { question: 'Puis-je annuler mon abonnement à tout moment ?', answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre dashboard. Aucun engagement, aucune pénalité." },
  { question: 'La garantie satisfait ou remboursé fonctionne comment ?', answer: "Si vous n'êtes pas satisfait dans les 30 premiers jours, contactez-nous et nous vous remboursons intégralement." },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = getLocaleFromCookies()
  const rtl = isRTL(locale)

  return (
    <html lang={locale} dir={rtl ? 'rtl' : 'ltr'}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://js.stripe.com" />
        <link rel="preconnect" href="https://api.stripe.com" />
        <link rel="preconnect" href="https://checkout.stripe.com" />
        <link rel="dns-prefetch" href="https://api.groq.com" />
        <link rel="dns-prefetch" href="https://generativelanguage.googleapis.com" />
        <link rel="dns-prefetch" href="https://api.openai.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#4F46E5" />
        <link rel="prefetch" href="/templates" />
        <link rel="prefetch" href="/pricing" />
        <link rel="prefetch" href="/register" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSoftwareApplicationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqItems)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <I18nProvider initialLocale={locale}>
          <SkipLinks />
          <Header />
          <main id="main-content" className="min-h-screen">{children}</main>
          <Footer />
          <Chatbot />
          <CookieConsent />
          <AnalyticsTracker />
          <ExitIntentPopup />
          <StickyCTA />
          <NewsletterPopup />
          <RealSocialProof />
          <CoreWebVitals />
          <ServiceWorkerRegistration />
        </I18nProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
