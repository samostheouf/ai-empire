import type { Metadata } from 'next'
import BlogContent from '@/components/client/BlogContent'
import { generateMetadata as genMeta } from '@/lib/seo'
import { getLocaleFromCookies, getTranslations } from '@/i18n/server'

export async function generateMetadata() {
  const locale = getLocaleFromCookies()
  const translations = await getTranslations(locale)
  const t = (key: string) => {
    const dict = translations as unknown as Record<string, string>
    return dict[key] || key
  }
  return genMeta({
    title: t('blogIndexTitle'),
    description: t('blogIndexDescription'),
    path: '/blog',
    keywords: [t('blogIndexKw1'), t('blogIndexKw2'), t('blogIndexKw3'), t('blogIndexKw4'), t('blogIndexKw5')],
  }) as Metadata
}

export default function BlogPage() {
  return <BlogContent />
}
