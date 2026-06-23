import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'NeuraAPI ローンチ — AI API＆プレミアムテンプレート',
  description: 'NeuraAPIのローンチをお届けします。AI API、Next.jsプレミアムテンプレート、TypeScript SDK。ローンチオファー：Proプラン30%割引。',
  path: '/ja/launch',
  locale: 'ja_JP',
  keywords: ['ローンチ', 'NeuraAPI', 'AI API', 'プレミアムテンプレート', 'Next.js', 'ローンチオファー', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
