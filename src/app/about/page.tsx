import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Code, Globe, Shield, Users, Zap } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'
import Breadcrumb from '@/components/Breadcrumb'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('aboutTitle'),
    description: t('aboutSubtitle'),
    path: '/about',
    keywords: ['neuraapi', 'about neuraapi', 'equipe neuraapi', 'mission neuraapi', 'intelligence artificielle'],
  })
}

export default async function AboutPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  return (
    <div className="bg-indigo-950 min-h-screen">
      {/* Hero */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Breadcrumb items={[{ name: t('aboutTitle'), href: '/about' }]} />
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400 mb-6" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {t('aboutTitle')} <span className="text-indigo-400">NeuraAPI</span>
          </h1>
          <p className="mt-6 text-lg text-indigo-200 max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-6">{t('aboutMission')}</h2>
            <div className="space-y-4 text-indigo-200 leading-relaxed">
              <p>
                {t('aboutMissionText1')}
              </p>
              <p>
                {t('aboutMissionText2')}
              </p>
              <p>
                {t('aboutMissionText3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-white text-center mb-12">{t('aboutValues')}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Zap className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t('aboutValueSpeed')}</h3>
              <p className="text-sm text-indigo-300">
                {t('aboutValueSpeedDesc')}
              </p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Globe className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t('aboutValueAccessibility')}</h3>
              <p className="text-sm text-indigo-300">
                {t('aboutValueAccessibilityDesc')}
              </p>
            </div>
            <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6">
              <Shield className="h-8 w-8 text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{t('aboutValueTrust')}</h3>
              <p className="text-sm text-indigo-300">
                {t('aboutValueTrustDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white text-center mb-8">{t('aboutTechStack')}</h2>
          <div className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm text-indigo-300">
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Next.js 14 + TypeScript</li>
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Tailwind CSS</li>
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Prisma ORM</li>
                  <li className="flex items-center gap-2"><Code className="w-4 h-4 text-indigo-400" /> Stripe Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Backend & AI</h3>
                <ul className="space-y-2 text-sm text-indigo-300">
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> Groq (Llama 3.3)</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> Google Gemini</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> OpenAI</li>
                  <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-indigo-400" /> Python FastAPI</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-indigo-900/50 p-12 text-center border border-indigo-700/50">
          <Users className="mx-auto h-12 w-12 text-indigo-400 mb-4" />
          <h2 className="text-3xl font-bold text-white">{t('aboutCtaTitle')}</h2>
          <p className="mt-4 text-indigo-200">
            {t('aboutCtaText')}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link href="/register" className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-semibold text-white hover:bg-indigo-500 transition-all">
              {t('aboutCtaPrimary')}
            </Link>
            <Link href="/contact" className="rounded-lg border border-indigo-500 px-8 py-4 text-lg font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all">
              {t('aboutCtaSecondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
