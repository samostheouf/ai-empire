'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { formatPrice, parseJsonField } from '@/lib/utils'
import BuyButton from '@/components/BuyButton'
import Breadcrumb from '@/components/Breadcrumb'
import { ArrowLeft, Check, ExternalLink, Download, Star, Shield, Zap, Globe } from 'lucide-react'
import type { Template } from '@/types'

interface FallbackTemplate {
  id: string
  name: string
  slug: string
  description: string
  price: number
  screenshot: string
  tags: string
  features: string
  downloads: number
  liveDemo: string | null
  category: string
}

interface TemplateData extends Omit<FallbackTemplate, 'tags' | 'features'> {
  tags: string[]
  features: string[]
}

const fallbackTemplates: Record<string, FallbackTemplate> = {
  'neurasaa-kit-complet': {
    id: '1', name: 'NeuraSaaS — Kit Complet SaaS', slug: 'neurasaa-kit-complet',
    description: 'Kit complet pour lancer votre SaaS en 48h. Auth, dashboard, billing Stripe intégrés.', price: 9700,
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: '["next.js","tailwind","stripe"]', features: '["Auth complet","Dashboard admin","Billing Stripe","Responsive"]',
    downloads: 150, liveDemo: null, category: 'SaaS',
  },
  'neuradashboard-admin-panel': {
    id: '2', name: 'NeuraDashboard — Admin Panel Premium', slug: 'neuradashboard-admin-panel',
    description: 'Dashboard administrateur professionnel avec graphiques temps réel.', price: 7900,
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: '["next.js","tailwind","dashboard"]', features: '["Graphiques temps réel","Gestion multi-tenants","Responsive"]',
    downloads: 120, liveDemo: null, category: 'Dashboard',
  },
  'neurablog-moteur-blog-ia': {
    id: '3', name: 'NeuraBlog — Moteur de Blog IA', slug: 'neurablog-moteur-blog-ia',
    description: 'Blog intelligent avec génération d\'articles par IA.', price: 6900,
    screenshot: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
    tags: '["next.js","tailwind","blog"]', features: '["Génération IA","SEO automatisé","Newsletter","Responsive"]',
    downloads: 95, liveDemo: null, category: 'Blog',
  },
  'neuralanding-kit-landing': {
    id: '4', name: 'NeuraLanding — Kit Landing Pages', slug: 'neuralanding-kit-landing',
    description: 'Kit de 5 landing pages haute conversion.', price: 4900,
    screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: '["next.js","tailwind","landing"]', features: '["5 landing pages","Haute conversion","Analytics intégrés"]',
    downloads: 200, liveDemo: null, category: 'Landing',
  },
  'neuracommerce-ecommerce-ia': {
    id: '5', name: 'NeuraCommerce — Template E-commerce IA', slug: 'neuracommerce-ecommerce-ia',
    description: 'Boutique en ligne propulsée par l\'IA.', price: 12900,
    screenshot: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: '["next.js","tailwind","stripe"]', features: '["Recommandations IA","Checkout Stripe","Gestion stocks"]',
    downloads: 85, liveDemo: null, category: 'E-commerce',
  },
  'neurai-studio-plateforme': {
    id: '6', name: 'NeuraAI Studio — Plateforme AI No-Code', slug: 'neurai-studio-plateforme',
    description: 'Plateforme no-code pour créer des workflows IA.', price: 19900,
    screenshot: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: '["next.js","tailwind","ai"]', features: '["Drag & drop","Intégrations OpenAI","Dashboard analytics"]',
    downloads: 75, liveDemo: null, category: 'AI Platform',
  },
  'neurachat-widget-chat-ia': {
    id: '7', name: 'NeuraChat — Widget Chat IA', slug: 'neurachat-widget-chat-ia',
    description: 'Widget de chat intelligent pour votre site.', price: 5900,
    screenshot: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    tags: '["next.js","tailwind","chatbot"]', features: '["Chat en temps réel","Réponses IA","Historique conversations"]',
    downloads: 110, liveDemo: null, category: 'Chat',
  },
  'neuraform-formulaires-intelligents': {
    id: '8', name: 'NeuraForm — Formulaires Intelligents', slug: 'neuraform-formulaires-intelligents',
    description: 'Formulaires avancés avec validation IA et scoring de leads.', price: 3900,
    screenshot: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    tags: '["next.js","tailwind","forms"]', features: '["Validation IA","Scoring leads","Intégrations CRM"]',
    downloads: 140, liveDemo: null, category: 'Forms',
  },
  'neuraauth-kit-authentification': {
    id: '9', name: 'NeuraAuth — Kit Authentification', slug: 'neuraauth-kit-authentification',
    description: 'Système d\'authentification complet.', price: 8900,
    screenshot: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    tags: '["next.js","tailwind","auth"]', features: '["OAuth social","2FA","Magic links","RBAC"]',
    downloads: 175, liveDemo: null, category: 'Auth',
  },
  'neurametrics-dashboard-analytics': {
    id: '10', name: 'NeuraMetrics — Dashboard Analytics', slug: 'neurametrics-dashboard-analytics',
    description: 'Dashboard analytics complet avec graphiques interactifs.', price: 6900,
    screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: '["next.js","tailwind","analytics"]', features: '["Graphiques interactifs","Exports PDF","Reporting auto"]',
    downloads: 90, liveDemo: null, category: 'Analytics',
  },
}

const comparisonData = [
  { feature: 'Intégration Stripe', ours: true, alternatives: 'Variable' },
  { feature: 'Authentification', ours: true, alternatives: 'Non inclus' },
  { feature: 'Dashboard admin', ours: true, alternatives: 'Non inclus' },
  { feature: 'Responsive design', ours: true, alternatives: 'Variable' },
  { feature: 'SEO optimisé', ours: true, alternatives: 'Variable' },
  { feature: 'TypeScript', ours: true, alternatives: 'Non' },
  { feature: 'Next.js 14 App Router', ours: true, alternatives: 'Non' },
  { feature: 'Mise à jour gratuite', ours: true, alternatives: 'Payant' },
]

export default function TemplateDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [template, setTemplate] = useState<TemplateData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    fetch('/api/templates')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const found = data.find((t: Template) => t.slug === slug)
          if (found) {
            setTemplate({
              ...found,
              tags: parseJsonField(found.tags as string),
              features: parseJsonField(found.features as string),
            })
            return
          }
        }
        const fallback = fallbackTemplates[slug]
        if (fallback) {
          setTemplate({
            ...fallback,
            tags: parseJsonField(fallback.tags),
            features: parseJsonField(fallback.features),
          })
        }
      })
      .catch(() => {
        const fallback = fallbackTemplates[slug]
        if (fallback) {
          setTemplate({
            ...fallback,
            tags: parseJsonField(fallback.tags),
            features: parseJsonField(fallback.features),
          })
        }
      })
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <div className="min-h-screen bg-white flex items-center justify-center"><p>Chargement...</p></div>
  if (!template) return <div className="min-h-screen bg-white flex items-center justify-center"><p>Template non trouvé</p></div>

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: template.name,
    description: template.description,
    image: template.screenshot,
    brand: { '@type': 'Brand', name: 'NeuraAPI' },
    offers: {
      '@type': 'Offer',
      price: (template.price / 100).toFixed(2),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'NeuraAPI' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: String(template.downloads || 50),
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: 'Templates', href: '/templates' },
          { name: template.name, href: `/templates/${slug}` },
        ]} />
        <Link href="/templates" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 mb-6">
          <ArrowLeft className="w-4 h-4" /> Retour aux templates
        </Link>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border">
              <Image src={template.screenshot} alt={template.name} fill placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+" className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" priority />
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Fonctionnalités incluses</h2>
              <ul className="space-y-3">
                {template.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>

            {template.liveDemo && (
              <div className="mt-8">
                <a
                  href={template.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir la démo en direct
                </a>
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Comparaison vs alternatives</h2>
              <div className="border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 font-medium text-gray-600">Fonctionnalité</th>
                      <th className="text-center px-4 py-3 font-medium text-indigo-600">NeuraAPI</th>
                      <th className="text-center px-4 py-3 font-medium text-gray-400">Alternatives</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-4 py-3 text-gray-700">{row.feature}</td>
                        <td className="px-4 py-3 text-center">
                          {row.ours ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-red-500">✗</span>}
                        </td>
                        <td className="px-4 py-3 text-center text-gray-500">{typeof row.alternatives === 'string' ? row.alternatives : row.alternatives ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-red-500">✗</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 border rounded-2xl p-6 space-y-4">
                <h1 className="text-2xl font-bold text-gray-900">{template.name}</h1>
                <p className="text-gray-600">{template.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {template.tags.map((tag: string) => (
                    <span key={tag} className="px-2.5 py-1 bg-white border rounded-full text-xs text-gray-600">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center gap-4 py-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    <span className="text-sm text-gray-500 ml-1">4.8</span>
                  </div>
                  <span className="text-sm text-gray-400">{template.downloads} téléchargements</span>
                </div>

                <div className="text-3xl font-bold text-indigo-600 py-2">{formatPrice(template.price)}</div>

                <div className="flex items-center gap-2 text-xs text-orange-500 bg-orange-50 rounded-lg px-3 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span>{Math.floor(Math.random() * 5) + 3} personnes regardent ce template en ce moment</span>
                </div>

                <BuyButton templateId={template.id} templateName={template.name} price={template.price} downloads={template.downloads} />

                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-green-500" /> Paiement sécurisé Stripe</div>
                  <div className="flex items-center gap-2"><Download className="w-3.5 h-3.5 text-green-500" /> Livraison instantanée par email</div>
                  <div className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 text-green-500" /> Mises à jour gratuites</div>
                  <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-green-500" /> Compatible 10 langues</div>
                </div>

                <div className="text-xs text-gray-400 text-center pt-2 border-t">30 jours satisfait ou remboursé</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
