import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'NeuraAPI 런칭 — AI API 및 프리미엄 템플릿',
  description: 'NeuraAPI 런칭을 소개합니다. AI API, 프리미엄 Next.js 템플릿, TypeScript SDK. 런칭 오퍼: Pro 플랜 30% 할인.',
  path: '/ko/launch',
  locale: 'ko_KR',
  keywords: ['런칭', 'NeuraAPI', 'AI API', '프리미엄 템플릿', 'Next.js', '런칭 오퍼', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
