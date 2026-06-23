import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'NeuraAPI 上线 — AI API与高级模板',
  description: '探索NeuraAPI上线。AI API、高级Next.js模板、TypeScript SDK。上线优惠：Pro计划享7折。',
  path: '/zh/launch',
  locale: 'zh_CN',
  keywords: ['上线', 'NeuraAPI', 'AI API', '高级模板', 'Next.js', '上线优惠', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
