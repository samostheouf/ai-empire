import type { Metadata } from 'next'
import { generateMetadata as generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'إطلاق NeuraAPI — واجهات برمجة الذكاء الاصطناعي والقوالب المميزة',
  description: 'اكتشف NeuraAPI في إطلاقه. واجهات برمجة الذكاء الاصطناعي وقوالب Next.js المميزة وSDK TypeScript. عرض الإطلاق: خصم 30% على خطة Pro.',
  path: '/ar/launch',
  locale: 'ar_SA',
  keywords: ['إطلاق', 'NeuraAPI', 'واجهة برمجة الذكاء الاصطناعي', 'قوالب مميزة', 'Next.js', 'عرض الإطلاق', 'Product Hunt'],
})

export default function LaunchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
