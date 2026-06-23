import type { Metadata } from 'next'
import { safeQuery } from '@/lib/db'
import { prisma } from '@/lib/db'
import { generateMetadata as generateSEO, generateProductSchema, TARGET_KEYWORDS } from '@/lib/seo'

interface TemplateDetailLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

const fallbackTemplates: Record<string, { name: string; description: string; price: number; screenshot: string }> = {
  'neurasaa-kit-complet': { name: 'NeuraSaaS — Kit Complet SaaS', description: 'Kit complet pour lancer votre SaaS en 48h. Auth, dashboard, billing Stripe.', price: 9700, screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  'neuradashboard-admin-panel': { name: 'NeuraDashboard — Admin Panel Premium', description: 'Dashboard administrateur professionnel avec graphiques temps réel.', price: 7900, screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
  'neurablog-moteur-blog-ia': { name: 'NeuraBlog — Moteur de Blog IA', description: "Blog intelligent avec génération d'articles par IA.", price: 6900, screenshot: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80' },
  'neuralanding-kit-landing': { name: 'NeuraLanding — Kit Landing Pages', description: 'Kit de 5 landing pages haute conversion.', price: 4900, screenshot: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' },
  'neuracommerce-ecommerce-ia': { name: 'NeuraCommerce — Template E-commerce IA', description: "Boutique en ligne propulsée par l'IA.", price: 12900, screenshot: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
  'neurai-studio-plateforme': { name: 'NeuraAI Studio — Plateforme AI No-Code', description: "Plateforme no-code pour créer des workflows IA.", price: 19900, screenshot: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' },
  'neurachat-widget-chat-ia': { name: 'NeuraChat — Widget Chat IA', description: 'Widget de chat intelligent pour votre site.', price: 5900, screenshot: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80' },
  'neuraform-formulaires-intelligents': { name: 'NeuraForm — Formulaires Intelligents', description: 'Formulaires avancés avec validation IA et scoring de leads.', price: 3900, screenshot: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80' },
  'neuraauth-kit-authentification': { name: 'NeuraAuth — Kit Authentification', description: "Système d'authentification complet.", price: 8900, screenshot: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80' },
  'neurametrics-dashboard-analytics': { name: 'NeuraMetrics — Dashboard Analytics', description: 'Dashboard analytics complet avec graphiques interactifs.', price: 6900, screenshot: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
}

export async function generateMetadata({ params }: TemplateDetailLayoutProps): Promise<Metadata> {
  const slug = params.slug

  const dbTemplate = await safeQuery(
    () => prisma.template.findUnique({ where: { slug }, select: { name: true, description: true, screenshot: true } }),
    null
  )

  const template = dbTemplate || fallbackTemplates[slug]
  if (!template) {
    return generateSEO({
      title: 'Template — NeuraAPI',
      description: "Découvrez ce template premium Next.js + Tailwind. Fonctionnalités, captures d'écran et aperçu en direct.",
      path: `/templates/${slug}`,
      keywords: [...TARGET_KEYWORDS, slug],
    })
  }

  return generateSEO({
    title: template.name,
    description: template.description,
    path: `/templates/${slug}`,
    image: template.screenshot,
    keywords: [...TARGET_KEYWORDS, template.name, slug],
  })
}

async function getTemplateData(slug: string) {
  const dbTemplate = await safeQuery(
    () => prisma.template.findUnique({ where: { slug }, select: { name: true, description: true, price: true, screenshot: true } }),
    null
  )
  return dbTemplate || fallbackTemplates[slug] || null
}

export default async function TemplateDetailLayout({ children, params }: TemplateDetailLayoutProps) {
  const template = await getTemplateData(params.slug)

  const productSchema = template
    ? generateProductSchema({
        name: template.name,
        description: template.description,
        image: template.screenshot,
        price: 'price' in template ? (template as { price: number }).price / 100 : 0,
        category: 'Digital Product',
        rating: 4.8,
        reviewCount: 100,
      })
    : null

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {children}
    </>
  )
}
