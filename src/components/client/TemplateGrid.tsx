'use client'

import { useState, useMemo, useEffect } from 'react'
import { parseJsonField, formatPrice } from '@/lib/utils'
import { Search, SlidersHorizontal, Code, FileCode, Box, ExternalLink, Copy, Check, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Template {
  id: string
  name: string
  slug: string
  description: string
  price: number
  screenshot: string
  tags: unknown
  features: unknown
  downloads: number
  category: string
}

const categories = ['Tous', 'SaaS', 'Dashboard', 'Blog', 'Landing Page', 'E-commerce', 'IA', 'Outil']

const CODE_PREVIEWS: Record<string, string> = {
  'neurasaa-kit-complet': `// app/page.tsx\nimport { auth } from '@/lib/auth'\nimport { Dashboard } from '@/components/Dashboard'\n\nexport default async function Home() {\n  const session = await auth()\n  if (!session) redirect('/login')\n  return <Dashboard user={session.user} />\n}`,
  'neuradashboard-admin-panel': `// components/StatsCard.tsx\nimport { Card, CardContent } from '@/components/ui/card'\n\nexport function StatsCard({ label, value, change }) {\n  return (\n    <Card>\n      <CardContent className="p-6">\n        <p className="text-sm text-muted-foreground">{label}</p>\n        <p className="text-2xl font-bold">{value}</p>\n      </CardContent>\n    </Card>\n  )\n}`,
  'neurablog-moteur-blog-ia': `// app/api/generate/route.ts\nimport { OpenAI } from 'openai'\nimport { NextResponse } from 'next/server'\n\nconst openai = new OpenAI()\n\nexport async function POST(req: Request) {\n  const { topic } = await req.json()\n  const completion = await openai.chat.completions.create({\n    model: 'gpt-4',\n    messages: [{ role: 'user', content: \`Écris sur \${topic}\` }]\n  })\n  return NextResponse.json({ content: completion.choices[0].message.content })\n}`,
  'neuralanding-kit-landing': `// components/Hero.tsx\nexport function Hero() {\n  return (\n    <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-900">\n      <div className="mx-auto max-w-7xl px-6 py-24 text-center">\n        <h1 className="text-5xl font-bold text-white">Lancez en 48h</h1>\n      </div>\n    </section>\n  )\n}`,
  'neuracommerce-ecommerce-ia': `// lib/recommendations.ts\nimport { prisma } from './prisma'\n\nexport async function getRecommendations(productId: string) {\n  const product = await prisma.product.findUnique({\n    where: { id: productId },\n    include: { category: true }\n  })\n  return prisma.product.findMany({\n    where: { categoryId: product.categoryId, id: { not: productId } },\n    take: 4,\n    orderBy: { sales: 'desc' }\n  })\n}`,
  'neurai-studio-plateforme': `// components/WorkflowCanvas.tsx\n'use client'\nimport { useCallback } from 'react'\nimport { useNodesState, useEdgesState } from 'reactflow'\n\nexport function WorkflowCanvas() {\n  const [nodes, setNodes, onNodesChange] = useNodesState([])\n  const [edges, setEdges, onEdgesChange] = useEdgesState([])\n  return <div className="h-full" />\n}`,
  'neurachat-widget-chat-ia': `// components/ChatWidget.tsx\n'use client'\nimport { useState } from 'react'\n\nexport function ChatWidget() {\n  const [messages, setMessages] = useState([])\n  const [input, setInput] = useState('')\n\n  const sendMessage = async () => {\n    const res = await fetch('/api/chat', {\n      method: 'POST',\n      body: JSON.stringify({ message: input })\n    })\n    const data = await res.json()\n    setMessages(prev => [...prev, { role: 'user', content: input }, { role: 'assistant', content: data.reply }])\n    setInput('')\n  }\n  return <div className="chat-widget">/* ... */</div>\n}`,
  'neuraform-formulaires-intelligents': `// components/MultiStepForm.tsx\n'use client'\nimport { useState } from 'react'\nimport { useForm } from 'react-hook-form'\n\nexport function MultiStepForm() {\n  const [step, setStep] = useState(1)\n  const { register, handleSubmit } = useForm()\n  const onSubmit = (data) => {\n    if (step < 3) return setStep(step + 1)\n  }\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      {step === 1 && <Step1 register={register} />}\n    </form>\n  )\n}`,
  'neuraauth-kit-authentification': `// middleware.ts\nimport { withAuth } from 'next-auth/middleware'\n\nexport default withAuth({\n  callbacks: {\n    authorized: ({ token, req }) => {\n      if (req.nextUrl.pathname.startsWith('/admin')) {\n        return token?.role === 'admin'\n      }\n      return !!token\n    }\n  }\n})\n\nexport const config = { matcher: ['/dashboard/:path*'] }`,
  'neurametrics-dashboard-analytics': `// components/Chart.tsx\n'use client'\nimport { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'\n\nexport function AnalyticsChart({ data }) {\n  return (\n    <ResponsiveContainer width="100%" height={350}>\n      <BarChart data={data}>\n        <XAxis dataKey="name" />\n        <YAxis />\n        <Tooltip />\n        <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} />\n      </BarChart>\n    </ResponsiveContainer>\n  )\n}`,
}

const TECH_BADGES: Record<string, string[]> = {
  'neurasaa-kit-complet': ['Next.js 14', 'Tailwind', 'Stripe', 'Prisma', 'NextAuth'],
  'neuradashboard-admin-panel': ['Next.js 14', 'Tailwind', 'Recharts', 'Prisma', 'shadcn/ui'],
  'neurablog-moteur-blog-ia': ['Next.js 14', 'Tailwind', 'MDX', 'OpenAI', 'Prisma'],
  'neuralanding-kit-landing': ['Next.js 14', 'Tailwind', 'Framer Motion', 'Vercel'],
  'neuracommerce-ecommerce-ia': ['Next.js 14', 'Tailwind', 'Stripe', 'Prisma', 'OpenAI'],
  'neurai-studio-plateforme': ['Next.js 14', 'Tailwind', 'ReactFlow', 'OpenAI', 'Prisma'],
  'neurachat-widget-chat-ia': ['Next.js 14', 'Tailwind', 'WebSocket', 'OpenAI', 'Prisma'],
  'neuraform-formulaires-intelligents': ['Next.js 14', 'Tailwind', 'React Hook Form', 'Zod'],
  'neuraauth-kit-authentification': ['Next.js 14', 'Tailwind', 'NextAuth', 'Prisma', 'RBAC'],
  'neurametrics-dashboard-analytics': ['Next.js 14', 'Tailwind', 'Recharts', 'Prisma', 'PostgreSQL'],
}

const FILE_COUNTS: Record<string, { files: number; components: number; size: string }> = {
  'neurasaa-kit-complet': { files: 124, components: 32, size: '2.8 MB' },
  'neuradashboard-admin-panel': { files: 86, components: 24, size: '1.9 MB' },
  'neurablog-moteur-blog-ia': { files: 68, components: 18, size: '1.5 MB' },
  'neuralanding-kit-landing': { files: 45, components: 15, size: '1.2 MB' },
  'neuracommerce-ecommerce-ia': { files: 112, components: 28, size: '2.5 MB' },
  'neurai-studio-plateforme': { files: 98, components: 22, size: '2.1 MB' },
  'neurachat-widget-chat-ia': { files: 52, components: 12, size: '1.1 MB' },
  'neuraform-formulaires-intelligents': { files: 38, components: 10, size: '0.9 MB' },
  'neuraauth-kit-authentification': { files: 74, components: 16, size: '1.6 MB' },
  'neurametrics-dashboard-analytics': { files: 82, components: 20, size: '1.8 MB' },
}

export default function TemplateGrid() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null)
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/templates')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setTemplates(data.map((t: Record<string, unknown>) => ({
            id: String(t.id || ''),
            name: String(t.name || ''),
            slug: String(t.slug || ''),
            description: String(t.description || ''),
            price: Number(t.price || 0),
            screenshot: String(t.screenshot || ''),
            tags: parseJsonField(t.tags as string),
            features: parseJsonField(t.features as string),
            downloads: Number(t.downloads || 0),
            category: String(t.category || 'Autre'),
          })))
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filteredTemplates = useMemo(() => {
    return templates.filter(t => {
      const matchesCategory = selectedCategory === 'Tous' || t.category === selectedCategory
      const matchesSearch = search === '' ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [templates, search, selectedCategory])

  const copyCode = (slug: string) => {
    const code = CODE_PREVIEWS[slug]
    if (code) {
      navigator.clipboard.writeText(code)
      setCopiedSlug(slug)
      setTimeout(() => setCopiedSlug(null), 2000)
    }
  }

  return (
    <>
      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400/50" />
          <input
            type="text"
            placeholder="Rechercher un template..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Rechercher un template"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-indigo-400/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all backdrop-blur-sm"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <SlidersHorizontal className="w-5 h-5 text-indigo-400/50 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-white/5 text-indigo-300/60 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-indigo-300/60">Chargement des templates...</p>
        </div>
      ) : filteredTemplates.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-indigo-300/60">Aucun template ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredTemplates.map((template) => {
            const parsedTags = parseJsonField<string[]>(template.tags || '[]')
            const techBadges = TECH_BADGES[template.slug] || (Array.isArray(parsedTags) ? parsedTags : [])
            const stats = FILE_COUNTS[template.slug] || { files: 0, components: 0, size: '-' }
            const isExpanded = expandedSlug === template.slug
            const isMostPopular = template.downloads === Math.max(...filteredTemplates.map(t => t.downloads))

            return (
              <div key={template.id} className="break-inside-avoid glass-card rounded-2xl overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={template.screenshot}
                    alt={template.name}
                    width={800}
                    height={450}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+"
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {isMostPopular && (
                    <span className="absolute top-3 left-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-amber-500/30 animate-pulse">
                      Plus populaire
                    </span>
                  )}
                  <span className={`absolute top-3 ${isMostPopular ? 'left-auto right-3' : 'right-3'} rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-sm font-bold text-white border border-white/20`}>
                    {formatPrice(template.price)}
                  </span>
                  {!isMostPopular && (
                    <span className="absolute bottom-3 left-3 rounded-full bg-indigo-600/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-indigo-500/30">
                      {template.category}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">{template.name}</h3>
                  <p className="mt-2 text-sm text-indigo-300/60 line-clamp-2">{template.description}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {techBadges.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300/80"
                      >
                        <Tag className="h-2.5 w-2.5" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-xs text-indigo-400/50">
                    <span className="flex items-center gap-1"><FileCode className="w-3.5 h-3.5" />{stats.files} fichiers</span>
                    <span className="flex items-center gap-1"><Box className="w-3.5 h-3.5" />{stats.components} composants</span>
                    <span>{stats.size}</span>
                    {template.downloads > 0 && (
                      <span className="flex items-center gap-1 text-green-400/70">
                        <Check className="w-3 h-3" />{template.downloads} téléchargements
                      </span>
                    )}
                  </div>

                  {CODE_PREVIEWS[template.slug] && (
                  <button
                    onClick={() => setExpandedSlug(isExpanded ? null : template.slug)}
                    aria-label={isExpanded ? 'Masquer le code' : 'Aperçu du code'}
                    className="mt-3 flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                      <Code className="w-3.5 h-3.5" />
                      {isExpanded ? 'Masquer le code' : 'Aperçu du code'}
                    </button>
                  )}

                  {isExpanded && CODE_PREVIEWS[template.slug] && (
                    <div className="mt-3 relative rounded-lg bg-black/40 border border-white/10 overflow-hidden">
                      <div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/5">
                        <span className="text-xs text-indigo-400/60 font-mono">
                          {template.slug.replace(/-/g, '/')}.tsx
                        </span>
                         <button
                           onClick={() => copyCode(template.slug)}
                           aria-label="Copier le code"
                           className="text-indigo-400/50 hover:text-white transition-colors"
                         >
                          {copiedSlug === template.slug ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <pre className="p-3 text-xs text-indigo-300/80 overflow-x-auto max-h-48 leading-relaxed">
                        <code>{CODE_PREVIEWS[template.slug]}</code>
                      </pre>
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      href={`/templates/${template.slug}`}
                      className="flex-1 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-medium text-white hover:from-indigo-500 hover:to-purple-500 transition-all text-center shadow-lg shadow-indigo-500/10"
                    >
                      Voir détails
                    </Link>
                    <a
                      href={`https://ai-empire-steel.vercel.app/templates/${template.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir la démo live de ${template.name}`}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-indigo-300 hover:bg-white/10 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
