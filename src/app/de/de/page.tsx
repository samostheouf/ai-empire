import { Sparkles, Zap, Shield, Globe, Star, Users, TrendingUp, ArrowRight, Check } from 'lucide-react'
import { generateMetadata, generateOrganizationSchema } from '@/lib/seo'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata({ locale: 'de_DE',
  title: 'NeuraAPI - KI-APIs & Templates für Entwickler',
  description: 'Premium KI-APIs und Next.js Templates für die deutsche Entwicklergemeinschaft. DSGVO-konform, schnell und zuverlässig.',
  path: '/de/de',
  keywords: ['KI API Deutschland', 'Next.js Templates', 'SaaS Templates', 'Künstliche Intelligenz API', 'Entwickler Tools', 'DSGVO konform'],
})

const organizationSchema = generateOrganizationSchema()

const deFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welche Zahlungsmethoden akzeptiert NeuraAPI in Deutschland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir akzeptieren alle gängigen Kreditkarten (Visa, Mastercard, Amex), PayPal, Apple Pay und Lastschrift. Alle Zahlungen werden sicher in EUR über Stripe abgewickelt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist NeuraAPI DSGVO-konform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, NeuraAPI ist vollständig DSGVO-konform. Wir verarbeiten Daten in EU-Rechenzentren und stellen einen Auftragsverarbeitungsvertrag (AVV) bereit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich in EUR bezahlen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, alle Preise werden in Euro (EUR) angezeigt. Wir unterstützen alle gängigen Zahlungsmethoden in Deutschland.',
      },
    },
  ],
}

export default function GermanyPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deFaqSchema) }}
      />

      <link rel="alternate" hrefLang="en-us" href="https://ai-empire-steel.vercel.app/en/usa" />
      <link rel="alternate" hrefLang="en-gb" href="https://ai-empire-steel.vercel.app/en/uk" />
      <link rel="alternate" hrefLang="de" href="https://ai-empire-steel.vercel.app/de/de" />
      <link rel="alternate" hrefLang="ja" href="https://ai-empire-steel.vercel.app/ja/jp" />
      <link rel="alternate" hrefLang="pt-br" href="https://ai-empire-steel.vercel.app/pt/br" />
      <link rel="alternate" hrefLang="x-default" href="https://ai-empire-steel.vercel.app" />

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-1.5 text-sm text-indigo-300 border border-indigo-800/50 mb-8">
            <TrendingUp className="w-4 h-4" />
            Pre-Launch — Seien Sie unter den ersten Nutzern
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            KI-APIs &amp; Templates<br />
            <span className="text-indigo-400">Für Deutsche Entwickler</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-indigo-200 max-w-2xl mx-auto">
            Entwickeln Sie schneller mit produktionsfertigen KI-APIs und Premium Next.js Templates. DSGVO-konform, in EU-Rechenzentren gehostet.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all flex items-center gap-2"
            >
              Templates ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Dokumentation
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-indigo-400">
            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> API in Produktion</span>
            <span className="flex items-center gap-1"><Star className="w-4 h-4" /> Kostenlos starten</span>
            <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> 99,9% Verfügbarkeit</span>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Warum Deutsche Entwickler NeuraAPI Wählen
          </h2>
          <p className="text-center text-indigo-300 mt-2">Enterprise-Qualität trifft auf Entwicklerfreundlichkeit</p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Zap className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">EU-Rechenzentren</h3>
              <p className="mt-2 text-indigo-300">
                Daten bleiben in der EU. Niedrige Latenz für deutsche Benutzer optimiert.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Shield className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">DSGVO-konform</h3>
              <p className="mt-2 text-indigo-300">
                Volle Einhaltung der DSGVO. Auftragsverarbeitungsvertrag (AVV) auf Anfrage verfügbar.
              </p>
            </div>
            <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all">
              <Globe className="h-10 w-10 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">Schneller Launch</h3>
              <p className="mt-2 text-indigo-300">
                Fertige Templates für SaaS, E-Commerce und Landing Pages. Starten Sie noch diese Woche.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Preise in EUR
          </h2>
          <p className="text-center text-indigo-300 mt-2">Keine versteckten Gebühren. Jederzeit kündbar.</p>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '€0',
                credits: '100 Credits',
                description: 'Perfekt für Nebenprojekte und Experimente',
                features: ['100 API-Credits/Monat', 'Alle KI-Modelle', 'Community-Support', 'Standard-Ratenlimits'],
                cta: 'Kostenlos starten',
                popular: false,
              },
              {
                name: 'Pro',
                price: '€29',
                credits: '10.000 Credits',
                description: 'Für wachsende Startups und Indie-Entwickler',
                features: ['10.000 API-Credits/Monat', 'Priority-Support', 'Erweiterte Analytik', 'Benutzerdefinierte Ratenlimits', 'Webhook-Integrationen'],
                cta: 'Pro erhalten',
                popular: true,
              },
              {
                name: 'Enterprise',
                price: '€99',
                credits: 'Unbegrenzt',
                description: 'Für Teams, die Skalierbarkeit und Zuverlässigkeit benötigen',
                features: ['Unbegrenzte API-Credits', 'Dedizierter Support', 'Benutzerdefiniertes SLA', 'Team-Management', 'SSO & SAML', 'On-Premise-Option'],
                cta: 'Vertrieb kontaktieren',
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? 'border-indigo-500 bg-indigo-900/50'
                    : 'border-indigo-800/50 bg-indigo-900/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                    Beliebteste Wahl
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-indigo-300">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== '€0' && (
                    <span className="text-indigo-300">/Monat</span>
                  )}
                </div>
                <p className="mt-1 text-sm text-indigo-400">{plan.credits}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-400" />
                      <span className="text-sm text-indigo-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.price === '€0' ? '/register' : '/pricing'}
                  className={`mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'border border-indigo-600 text-indigo-200 hover:bg-indigo-900/50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-indigo-400 mt-6">
            Zahlungsmethoden: Visa, Mastercard, Amex, PayPal, Apple Pay, Lastschrift — Verarbeitung in EUR über Stripe
          </p>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white">
            Vertraut von Deutschen Entwicklungsteams
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { name: 'NeuraAPI Team', role: 'Pre-Launch', content: 'NeuraAPI befindet sich in der Pre-Launch-Phase. Schließen Sie sich uns an und seien Sie unter den ersten Nutzern.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-indigo-200 italic">&quot;{item.content}&quot;</p>
                <div className="mt-4 pt-4 border-t border-indigo-800/50">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-indigo-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Bereit, Schneller zu Entwickeln?
          </h2>
          <p className="mt-4 text-indigo-200">
            Schließen Sie sich uns an — NeuraAPI befindet sich im Pre-Launch. Kostenlos starten — keine Kreditkarte erforderlich.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/templates"
              className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all"
            >
              Kostenlos starten
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
            >
              Dokumentation ansehen
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-indigo-900/20 bg-indigo-950">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-400" />
              <span className="text-lg font-bold text-white">NeuraAPI</span>
            </div>
            <p className="text-sm text-indigo-300">
              &copy; {new Date().getFullYear()} NeuraAPI. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mentions-legales" className="text-sm text-indigo-400 hover:text-white transition-colors">Impressum</Link>
              <Link href="/cgv" className="text-sm text-indigo-400 hover:text-white transition-colors">AGB</Link>
              <Link href="/politique-confidentialite" className="text-sm text-indigo-400 hover:text-white transition-colors">Datenschutz</Link>
              <Link href="/politique-cookies" className="text-sm text-indigo-400 hover:text-white transition-colors">Cookies</Link>
              <Link href="/contact" className="text-sm text-indigo-400 hover:text-white transition-colors">Kontakt</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
