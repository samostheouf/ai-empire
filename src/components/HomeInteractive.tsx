'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { trackCtaClick } from '@/lib/analytics'
import { useI18n } from '@/i18n'

export function LiveUserCountBadge() {
  const [viewerCount, setViewerCount] = useState(0)

  useEffect(() => {
    let visitorId = sessionStorage.getItem('neura_visitor_id')
    if (!visitorId) {
      visitorId = Math.random().toString(36).slice(2) + Date.now().toString(36)
      sessionStorage.setItem('neura_visitor_id', visitorId)
    }

    const heartbeat = () => {
      fetch('/api/live-viewers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorId }),
      }).then(r => r.json()).then(d => {
        if (typeof d.count === 'number') setViewerCount(d.count)
      }).catch(() => {})
    }

    heartbeat()
    const interval = setInterval(heartbeat, 15000)
    return () => clearInterval(interval)
  }, [])

  if (viewerCount === 0) return null

  return <>{viewerCount}</>
}

export function CtaLink({
  href, label, location, className, children, dataTrack
}: {
  href: string
  label: string
  location?: string
  className?: string
  children: React.ReactNode
  dataTrack?: string
}) {
  return (
    <Link
      href={href}
      data-track={dataTrack}
      onClick={() => trackCtaClick(label, location)}
      className={className}
    >
      {children}
    </Link>
  )
}

export function EndpointCopyButton({ code, name }: { code: string; name: string }) {
  const [copied, setCopied] = useState(false)
  const { t } = useI18n()

  const handleCopy = () => {
    navigator.clipboard.writeText(`const result = await neurapi.${code}({ prompt: "..." })`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={t('homeCopyCodeFor').replace('{name}', name)}
      className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-indigo-400/50 hover:text-indigo-300 transition-colors px-2 py-1 rounded bg-white/5 hover:bg-white/10"
    >
      {copied ? t('homeCopied') : t('homeCopy')}
    </button>
  )
}

const CAROUSEL_TEMPLATES = [
  { name: 'NeuraSaaS', category: 'SaaS', price: '97€', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', slug: 'neurasaa-kit-complet' },
  { name: 'NeuraDashboard', category: 'Dashboard', price: '79€', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80', slug: 'neuradashboard-admin-panel' },
  { name: 'NeuraBlog', category: 'Blog', price: '69€', image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=600&q=80', slug: 'neurablog-moteur-blog-ia' },
  { name: 'NeuraLanding', category: 'Landing', price: '49€', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', slug: 'neuralanding-kit-landing' },
  { name: 'NeuraCommerce', category: 'E-commerce', price: '129€', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80', slug: 'neuracommerce-ecommerce-ia' },
  { name: 'NeuraAI Studio', category: 'IA', price: '199€', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80', slug: 'neurai-studio-plateforme' },
]

export function TemplateCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const amount = direction === 'left' ? -340 : 340
      carouselRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">10 templates Next.js</h2>
            <p className="mt-3 text-indigo-300/70">{t('homeTemplatesReady')}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label={t('homeScrollLeft')}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-indigo-300 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label={t('homeScrollRight')}
              className="p-2 rounded-lg border border-white/10 bg-white/5 text-indigo-300 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {CAROUSEL_TEMPLATES.map((tpl) => (
            <Link
              key={tpl.name}
              href={`/templates/${tpl.slug}`}
              className="flex-none w-80 snap-start group"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={tpl.image}
                    alt={tpl.name}
                    width={600}
                    height={340}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjM0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+"
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white border border-white/20">
                    {tpl.price}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-indigo-400 font-medium">{tpl.category}</p>
                  <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-indigo-300 transition-colors">{tpl.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <CtaLink href="/templates" label="templates_view_all" location="templates_section" dataTrack="cta_click_templates_all" className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-white transition-colors group">
            {t('homeViewAllTemplates')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
