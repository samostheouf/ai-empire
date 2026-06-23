import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing — NeuraAPI',
  description: 'Pages marketing NeuraAPI pour SaaS, développeurs, agences et e-commerce. Solutions IA adaptées à votre activité.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ai-empire-steel.vercel.app/marketing',
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
