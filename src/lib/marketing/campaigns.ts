export interface Campaign {
  id: string
  name: string
  type: 'welcome' | 'abandoned-cart' | 'newsletter' | 'reengagement' | 'product-launch'
  status: 'active' | 'paused' | 'completed'
  emailsSent: number
  openRate: number
  clickRate: number
  createdAt: string
  scheduledAt?: string
  content: CampaignContent
}

export interface CampaignContent {
  subject: string
  preview: string
  body: string
  ctaText: string
  ctaUrl: string
}

export interface CampaignStats {
  totalCampaigns: number
  activeCampaigns: number
  totalEmailsSent: number
  averageOpenRate: number
  averageClickRate: number
  revenue: number
}

export function generateCampaignId(): string {
  return `camp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function generateWelcomeSequence(): Campaign[] {
  const now = new Date()

  return [
    {
      id: generateCampaignId(),
      name: 'Séquence de bienvenue - Jour 1',
      type: 'welcome',
      status: 'active',
      emailsSent: 0,
      openRate: 0,
      clickRate: 0,
      createdAt: now.toISOString(),
      content: {
        subject: 'Bienvenue sur NeuraAPI ! 🎉',
        preview: 'Votre compte est actif. Commencez à utiliser les APIs IA.',
        body: 'Bienvenue sur NeuraAPI ! Vous avez 100 crédits gratuits pour démarrer.',
        ctaText: 'Accéder au Dashboard',
        ctaUrl: '/dashboard',
      },
    },
    {
      id: generateCampaignId(),
      name: 'Séquence de bienvenue - Jour 3',
      type: 'welcome',
      status: 'active',
      emailsSent: 0,
      openRate: 0,
      clickRate: 0,
      createdAt: now.toISOString(),
      scheduledAt: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      content: {
        subject: 'Découvrez nos APIs IA 🚀',
        preview: 'Voici ce que vous pouvez créer avec NeuraAPI.',
        body: 'Explorez nos APIs de génération de contenu, analyse de texte et assistant conversationnel.',
        ctaText: 'Voir la Documentation',
        ctaUrl: '/docs',
      },
    },
    {
      id: generateCampaignId(),
      name: 'Séquence de bienvenue - Jour 7',
      type: 'welcome',
      status: 'active',
      emailsSent: 0,
      openRate: 0,
      clickRate: 0,
      createdAt: now.toISOString(),
      scheduledAt: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      content: {
        subject: 'Boostez votre productivité 💡',
        preview: '3 astuces pour maîtriser NeuraAPI.',
        body: 'Utilisez les webhooks, intégrez nos templates et invitez vos collègues.',
        ctaText: 'Découvrir les Templates',
        ctaUrl: '/templates',
      },
    },
  ]
}

export function generateAbandonedCartEmail(templateName: string, templatePrice: number): Campaign {
  return {
    id: generateCampaignId(),
    name: `Panier abandonné - ${templateName}`,
    type: 'abandoned-cart',
    status: 'active',
    emailsSent: 0,
    openRate: 0,
    clickRate: 0,
    createdAt: new Date().toISOString(),
    content: {
      subject: `${templateName} vous attend toujours !`,
      preview: 'Finalisez votre achat avec -20% de réduction.',
      body: `Vous avez laissé ${templateName} dans votre panier. Profitez de -20% avec le code RETOUR20.`,
      ctaText: 'Finaliser mon achat',
      ctaUrl: '/templates',
    },
  }
}

export function generateNewsletterCampaign(
  title: string,
  articles: Array<{ title: string; description: string; url: string }>
): Campaign {
  return {
    id: generateCampaignId(),
    name: title,
    type: 'newsletter',
    status: 'active',
    emailsSent: 0,
    openRate: 0,
    clickRate: 0,
    createdAt: new Date().toISOString(),
    content: {
      subject: title,
      preview: articles[0]?.description || '',
      body: articles.map(a => `${a.title}: ${a.description}`).join('\n\n'),
      ctaText: 'Lire plus',
      ctaUrl: articles[0]?.url || '/blog',
    },
  }
}

export function generateReengagementCampaign(userName: string): Campaign {
  return {
    id: generateCampaignId(),
    name: `Réengagement - ${userName}`,
    type: 'reengagement',
    status: 'active',
    emailsSent: 0,
    openRate: 0,
    clickRate: 0,
    createdAt: new Date().toISOString(),
    content: {
      subject: `${userName}, nous vous avons manqué ! 💜`,
      preview: '+100 crédits gratuits pour votre retour.',
      body: `Salut ${userName} ! Il y a du nouveau sur NeuraAPI. Rejoignez-nous avec +100 crédits offerts.`,
      ctaText: 'Reprendre',
      ctaUrl: '/dashboard',
    },
  }
}

export function calculateCampaignStats(campaigns: Campaign[]): CampaignStats {
  const activeCampaigns = campaigns.filter(c => c.status === 'active')
  const totalEmailsSent = campaigns.reduce((sum, c) => sum + c.emailsSent, 0)
  const avgOpen = campaigns.length > 0
    ? campaigns.reduce((sum, c) => sum + c.openRate, 0) / campaigns.length
    : 0
  const avgClick = campaigns.length > 0
    ? campaigns.reduce((sum, c) => sum + c.clickRate, 0) / campaigns.length
    : 0

  return {
    totalCampaigns: campaigns.length,
    activeCampaigns: activeCampaigns.length,
    totalEmailsSent,
    averageOpenRate: Math.round(avgOpen * 100) / 100,
    averageClickRate: Math.round(avgClick * 100) / 100,
    revenue: 0,
  }
}
