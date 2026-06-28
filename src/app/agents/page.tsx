import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'
import AgentsPageClient from '@/components/client/AgentsPageClient'

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('agentsMetaTitle'),
    description: t('agentsMetaDesc'),
    path: '/agents',
    keywords: ['ai agents', 'ai workforce', 'autonomous agents', 'neuraapi agents', 'customer support ai', 'lead generation ai', 'content creator ai', 'sales ai', 'voice ai', 'automation ai'],
  })
}

export default async function AgentsPage() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NeuraAPI AI Agents',
    applicationCategory: 'BusinessApplication',
    description: t('agentsMetaDesc'),
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '149',
      priceCurrency: 'EUR',
      offerCount: 3,
    },
    provider: {
      '@type': 'Organization',
      name: 'NeuraAPI',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgentsPageClient />
    </>
  )
}
