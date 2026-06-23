'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useMemo } from 'react'

export interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  }), [items])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Fil d'Ariane" className="py-4">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <ChevronRight className="w-4 h-4 text-indigo-600" />
              {index === items.length - 1 ? (
                <span className="text-indigo-200">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
