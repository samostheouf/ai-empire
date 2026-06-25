import { verifyCronAuth } from '@/lib/auth'
import { NextRequest, NextResponse } from 'next/server'
import { safeQuery } from '@/lib/db'

export const dynamic = 'force-dynamic'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

const PLATFORMS: Array<'twitter' | 'linkedin' | 'facebook'> = ['twitter', 'linkedin', 'facebook']

const BLOG_TOPICS = [
  { title: 'Comment intégrer l\'IA dans un SaaS Next.js en 2025', keywords: 'API IA, Next.js, SaaS, intégration' },
  { title: 'Guide complet : créer un blog avec Next.js et Stripe', keywords: 'blog, Next.js, Stripe, monétisation' },
  { title: 'Comparatif des meilleures APIs IA gratuites pour développeurs', keywords: 'API IA gratuite, OpenAI, Groq, comparatif' },
  { title: 'Comment automatiser le marketing de votre SaaS avec l\'IA', keywords: 'marketing automation, IA, SaaS, email' },
  { title: '5 templates Next.js 14 pour lancer votre SaaS rapidement', keywords: 'templates, Next.js 14, SaaS, lancement' },
  { title: 'Optimiser le SEO de votre SaaS avec des outils IA', keywords: 'SEO, IA, SaaS, référencement naturel' },
  { title: 'Comment créer un dashboard admin avec Next.js 14', keywords: 'dashboard admin, Next.js, administration, UI' },
  { title: 'Intégrer Stripe dans votre SaaS en 30 minutes', keywords: 'Stripe, paiements, SaaS, intégration' },
]

const SOCIAL_POSTS: Record<string, Array<{ content: string; hashtags: string[] }>> = {
  twitter: [
    {
      content: '🚀 Vous rêvez de lancer votre SaaS en 24h ?\n\nAI Empire rend ça possible :\n✅ Templates Next.js 14 professionnels\n✅ APIs IA intégrées\n✅ Paiements Stripe configurés\n\nTestez gratuitement → ai-empire-steel.vercel.app',
      hashtags: ['#SaaS', '#NextJS', '#AI', '#WebDev'],
    },
    {
      content: '💡 Les développeurs qui utilisent AI Empire développent 3x plus vite.\n\nPourquoi ?\n• Authentification prête\n• Paiements Stripe\n• Dashboard admin\n• Templates responsive\n\nÉconomisez 200+ heures → ai-empire-steel.vercel.app',
      hashtags: ['#Productivity', '#DevTools', '#AI', '#Templates'],
    },
    {
      content: '📊 AI Empire en chiffres :\n\n• 5000+ développeurs actifs\n• 98% satisfaction client\n• 24h pour lancer un SaaS\n• 60% de temps gagné\n\nRejoignez la communauté → ai-empire-steel.vercel.app',
      hashtags: ['#Stats', '#Community', '#AI', '#SaaS'],
    },
    {
      content: '🔥 NOUVEAU : Consultez nos templates e-commerce Next.js 14\n\n✅ Panier d\'achat\n✅ Paiements Stripe\n✅ Dashboard admin\n✅ Mode sombre\n\nÀ partir de €29 → ai-empire-steel.vercel.app/templates',
      hashtags: ['#Ecommerce', '#NextJS', '#Templates', '#WebDev'],
    },
    {
      content: '🧠 Astuce du jour : comment intégrer GPT-4 dans votre SaaS en 5 minutes\n\n1. Installez le SDK AI Empire\n2. Configurez votre clé API\n3. Utilisez nos templates\n4. Déployez sur Vercel\n\nTutorial complet → ai-empire-steel.vercel.app/docs',
      hashtags: ['#Tutorial', '#GPT4', '#AI', '#DevTips'],
    },
  ],
  linkedin: [
    {
      content: '🚀 AI Empire : La plateforme qui révolutionne le développement SaaS\n\nEn tant que développeur, je sais à quel point le temps peut être un défi. AI Empire combine des templates Next.js 14 professionnels avec des APIs IA puissantes.\n\nRésultat :\n• 60% de réduction du temps de développement\n• 95% de satisfaction utilisateur\n• Déploiement en 24h\n\nDécouvrez AI Empire → ai-empire-steel.vercel.app',
      hashtags: ['#AI', '#WebDevelopment', '#SaaS', '#Innovation'],
    },
    {
      content: '💡 Comment AI Empire aide les entreprises à innover plus rapidement\n\nDans un monde où la vitesse de mise sur le marché est cruciale, AI Empire offre un avantage concurrentiel significatif.\n\nNos clients constatent :\n📊 -60% sur le temps de développement\n🎯 95% de satisfaction utilisateur\n⚡ Déploiement en 24h\n\nPrêt à accélérer → ai-empire-steel.vercel.app',
      hashtags: ['#Innovation', '#Business', '#AI', '#Productivity'],
    },
    {
      content: '🧠 L\'avenir du développement web est intelligent\n\nAI Empire combine l\'IA avec des outils modernes :\n✨ Génération de code assistée par IA\n✨ Templates adaptatifs\n✨ Optimisation automatique des performances\n✨ Suggestions en temps réel\n\nRejoignez 5000+ développeurs → ai-empire-steel.vercel.app',
      hashtags: ['#FutureOfWork', '#AI', '#Innovation', '#WebDev'],
    },
  ],
  facebook: [
    {
      content: '🎉 Vous rêvez de lancer votre SaaS en 24 heures ?\n\nAI Empire rend cela possible ! 🚀\n\nNotre plateforme vous offre :\n✅ Templates Next.js 14 professionnels\n✅ APIs IA intégrées\n✅ Paiements Stripe configurés\n✅ Dashboard admin complet\n✅ Support technique 24/7\n\nDécouvrez comment sur ai-empire-steel.vercel.app',
      hashtags: ['#SaaS', '#Launch', '#AI', '#WebDev'],
    },
    {
      content: '💡 Question du jour :\n\nQuel est votre plus gros défi avec l\'IA ?\n\nA) Comprendre comment l\'utiliser\nB) Trouver des APIs fiables\nC) Réduire les coûts\nD) Intégrer dans mon produit\n\nPartagez en commentaire ! 👇',
      hashtags: ['#IA', '#Communauté', '#Developpeurs', '#Tech'],
    },
    {
      content: '🔥 Offre spéciale développeurs !\n\nProfitez de -30% sur tous les templates avec le code LAUNCH30\n\nTemplates disponibles :\n📦 NeuraBlog — Blog premium (€19)\n📦 NeuraStore — E-commerce (€29)\n📦 NeuraPortfolio — Portfolio (€29)\n📦 Bundle complet — 6 templates (€299)\n\n⏰ Offre limitée → ai-empire-steel.vercel.app',
      hashtags: ['#SpecialOffer', '#AI', '#DevTools', '#Promo'],
    },
  ],
}

export async function GET(request: NextRequest) {
  try {
    
    if (!verifyCronAuth(request)) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
    }

    const results = await Promise.allSettled([
      generateDailyPosts(),
      scheduleReengagementEmails(),
      generateBlogIdeas(),
    ])

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      posts: results[0].status === 'fulfilled' ? results[0].value : { error: 'Échec' },
      emails: results[1].status === 'fulfilled' ? results[1].value : { error: 'Échec' },
      blogIdeas: results[2].status === 'fulfilled' ? results[2].value : { error: 'Échec' },
    })
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

async function generateDailyPosts() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)

  const generatedPosts = await Promise.all(
    PLATFORMS.map(async (platform, index) => {
      const posts = SOCIAL_POSTS[platform]
      const postIndex = (dayOfYear + index) % posts.length
      const post = posts[postIndex]

      const scheduledHour = 9 + index * 3
      const scheduledAt = new Date()
      scheduledAt.setHours(scheduledHour, 0, 0, 0)

      return safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.marketingPost.create({
          data: {
            platform,
            content: post.content,
            hashtags: JSON.stringify(post.hashtags),
            scheduledAt,
            status: 'scheduled',
          },
        })
      }, null)
    })
  )

  const scheduled = generatedPosts.filter(Boolean)
  return {
    postsGenerated: scheduled.length,
    platforms: PLATFORMS,
    scheduledAt: new Date().toISOString(),
  }
}

async function scheduleReengagementEmails() {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)

  const users = await safeQuery(async () => {
    const { prisma } = await import('@/lib/db')

    const orders = await prisma.order.findMany({
      where: {
        status: 'completed',
        createdAt: { lt: sevenDaysAgo },
      },
      distinct: ['email'],
      select: { email: true, createdAt: true },
    })

    const existingRecovery = await prisma.recoveryEmail.findMany({
      where: { sent: true },
      select: { email: true },
    })
    const alreadySent = new Set(existingRecovery.map((e: { email: string }) => e.email))

    const candidates = orders.filter((o: { email: string }) => !alreadySent.has(o.email))

    let queued = 0
    for (const user of candidates) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>',
          to: user.email,
          subject: '🎯 Nouveaux templates disponibles — Découvrez-les !',
          html: `
            <!DOCTYPE html>
            <html>
            <head><meta charset="utf-8"></head>
            <body style="font-family: -apple-system, sans-serif; background: #f8fafc; padding: 40px 20px;">
              <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
                  <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">Nouveaux templates disponibles</p>
                </div>
                <div style="padding: 32px;">
                  <h2 style="color: #1e293b;">Vous avez raté du nouveau !</h2>
                  <p style="color: #64748b;">Depuis votre dernier achat, nous avons ajouté de nouveaux templates et fonctionnalités. Découvrez ce qui est disponible.</p>
                  <a href="${appUrl}/templates" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin: 24px 0;">
                    Découvrir les templates
                  </a>
                </div>
              </div>
            </body>
            </html>
          `,
        })

        await prisma.recoveryEmail.create({
          data: { email: user.email, sent: true },
        })

        queued++
      } catch {
        // Ignore email errors
      }
    }

    return { candidatesFound: candidates.length, emailsQueued: queued }
  }, { candidatesFound: 0, emailsQueued: 0 })

  return users
}

async function generateBlogIdeas() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  const startIndex = dayOfYear % BLOG_TOPICS.length
  const todayTopics = [
    BLOG_TOPICS[startIndex],
    BLOG_TOPICS[(startIndex + 1) % BLOG_TOPICS.length],
    BLOG_TOPICS[(startIndex + 2) % BLOG_TOPICS.length],
  ]

  const created = await Promise.all(
    todayTopics.map(async (topic) => {
      return safeQuery(async () => {
        const { prisma } = await import('@/lib/db')
        return prisma.blogIdea.create({
          data: {
            title: topic.title,
            keywords: topic.keywords,
            source: 'cron-daily-marketing',
            status: 'pending',
          },
        })
      }, null)
    })
  )

  return {
    ideasGenerated: created.filter(Boolean).length,
    topics: todayTopics.map((t) => t.title),
  }
}
