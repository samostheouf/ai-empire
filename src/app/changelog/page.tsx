import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: 'Changelog — Mises à jour NeuraAPI',
    description: 'Suivez les mises à jour, nouvelles fonctionnalités et améliorations de NeuraAPI.',
    path: '/changelog',
    keywords: ['changelog neuraapi', 'mises à jour neuraapi', 'nouvelles fonctionnalités'],
  })
}

export default async function ChangelogPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const releases = [
    {
      version: '2.0.0',
      date: '27 Juin 2026',
      title: 'AI Agents — Your Autonomous Workforce',
      changes: [
        'Launch of AI Agent Factory — deploy autonomous agents in minutes',
        'No-code agent setup: describe workflows in plain English',
        'Autonomous decision-making with configurable escalation rules',
        'Tool integrations: Slack, email, CRM, spreadsheets, and more',
        'Customer Support Agent template with 87% faster response times',
        'Data Entry Agent with 64% fewer errors',
        'Sales & Lead Generation Agent for pipeline automation',
        'Real-time analytics dashboard for agent performance',
        'Multi-agent workflows for complex business processes',
        '30-day free trial with free setup call included',
      ],
    },
    {
      version: '1.0.0',
      date: t('changelogEntry1Date'),
      title: t('changelogEntry1Title'),
      changes: [
        t('changelogEntry1Change1'),
        t('changelogEntry1Change2'),
        t('changelogEntry1Change3'),
        t('changelogEntry1Change4'),
        t('changelogEntry1Change5'),
        t('changelogEntry1Change6'),
        t('changelogEntry1Change7'),
        t('changelogEntry1Change8'),
        t('changelogEntry1Change9'),
        t('changelogEntry1Change10'),
      ],
    },
    {
      version: '0.9.0',
      date: t('changelogEntry2Date'),
      title: t('changelogEntry2Title'),
      changes: [
        t('changelogEntry2Change1'),
        t('changelogEntry2Change2'),
        t('changelogEntry2Change3'),
        t('changelogEntry2Change4'),
        t('changelogEntry2Change5'),
        t('changelogEntry2Change6'),
      ],
    },
    {
      version: '0.8.0',
      date: t('changelogEntry3Date'),
      title: t('changelogEntry3Title'),
      changes: [
        t('changelogEntry3Change1'),
        t('changelogEntry3Change2'),
        t('changelogEntry3Change3'),
        t('changelogEntry3Change4'),
      ],
    },
    {
      version: '0.7.0',
      date: t('changelogEntry4Date'),
      title: t('changelogEntry4Title'),
      changes: [
        t('changelogEntry4Change1'),
        t('changelogEntry4Change2'),
        t('changelogEntry4Change3'),
        t('changelogEntry4Change4'),
        t('changelogEntry4Change5'),
      ],
    },
    {
      version: '0.6.0',
      date: t('changelogEntry5Date'),
      title: t('changelogEntry5Title'),
      changes: [
        t('changelogEntry5Change1'),
        t('changelogEntry5Change2'),
        t('changelogEntry5Change3'),
        t('changelogEntry5Change4'),
        t('changelogEntry5Change5'),
        t('changelogEntry5Change6'),
      ],
    },
  ]

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb items={[{ name: 'Changelog', href: '/changelog' }]} />
          <h1 className="text-4xl font-bold text-white mb-4 mt-8">{t('changelogTitle')}</h1>
          <p className="text-indigo-300 mb-12">
            {t('changelogSubtitle')}
          </p>

          <div className="space-y-12">
            {releases.map((release, i) => (
              <div key={release.version} className="relative">
                {i < releases.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-indigo-800/50" />
                )}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm z-10">
                    v{release.version.split('.')[0]}
                  </div>
                  <div className="flex-1 rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
                        <Tag className="w-3 h-3" />
                        v{release.version}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-indigo-400">
                        <Calendar className="w-3 h-3" />
                        {release.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{release.title}</h3>
                    <ul className="space-y-2">
                      {release.changes.map((change, j) => (
                        <li key={j} className="text-sm text-indigo-300 flex items-start gap-2">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors"
            >
              {t('changelogViewDocs')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
