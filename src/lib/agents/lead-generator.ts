import { callAI } from '@/lib/ai'

export interface LeadRequest {
  type: 'cold-outreach' | 'linkedin' | 'website-capture'
  targetIndustry?: string
  targetRole?: string
  companySize?: string
}

export interface LeadResult {
  id: string
  type: string
  leads: Lead[]
  emailSent: boolean
  executedAt: Date
  tokensUsed: number
  provider: string
}

export interface Lead {
  name: string
  email: string
  company: string
  role: string
  score: number
  personalizedMessage: string
}

const SYSTEM_PROMPT = `Tu es un expert en prospection B2B pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu génères des listes de leads qualifiés avec des messages personnalisés.
Tu scores chaque lead sur une échelle de 1 à 100 basée sur la pertinence.
Tu crées des messages d'approche personnalisés et non agressifs.
Ton style: professionnel, orienté valeur, personnalisé.`

function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export async function executeLeadGenerator(request: LeadRequest): Promise<LeadResult> {
  const id = generateId()

  let prompt = ''
  switch (request?.type) {
    case 'cold-outreach':
      prompt = `Génère 5 leads B2B qualifiés pour du cold outreach.
Industrie cible: ${request.targetIndustry || 'SaaS / Tech'}
Rôle cible: ${request.targetRole || 'CTO / VP Engineering'}
Taille entreprise: ${request.companySize || '50-200 employés'}
Format: [{name, email, company, role, score, personalizedMessage}]
Le score doit refléter la pertinence pour NeuraAPI.`
      break

    case 'linkedin':
      prompt = `Génère 5 leads qualifiés pour LinkedIn outreach.
Industrie cible: ${request.targetIndustry || 'E-commerce'}
Rôle cible: ${request.targetRole || 'Head of Marketing'}
Taille entreprise: ${request.companySize || '100-500 employés'}
Format: [{name, email, company, role, score, personalizedMessage}]
Le message doit être court et engageant pour LinkedIn.`
      break

    case 'website-capture':
      prompt = `Génère 5 leads capturés via formulaire website.
Industrie cible: ${request.targetIndustry || 'Tech'}
Rôle cible: ${request.targetRole || 'Product Manager'}
Taille entreprise: ${request.companySize || '20-100 employés'}
Format: [{name, email, company, role, score, personalizedMessage}]
Focus sur la conversion et le nurturing.`
      break
  }

  const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 2000)

  const parsed = parseAIResponse(result.content) || generateFallbackLeads(request)

  return {
    id,
    type: request?.type,
    leads: parsed.leads || [],
    emailSent: false,
    executedAt: new Date(),
    tokensUsed: result.tokensUsed,
    provider: result.provider
  }
}

function parseAIResponse(content: string): Partial<LeadResult> | null {
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
  } catch {
    // Fallback
  }
  return null
}

function generateFallbackLeads(request: LeadRequest): Partial<LeadResult> {
  const industries: Record<string, string[]> = {
    'cold-outreach': ['Stripe', 'Notion', 'Linear', 'Vercel', 'Supabase'],
    'linkedin': ['Shopify', 'HubSpot', 'Intercom', 'Zendesk', 'Freshworks'],
    'website-capture': ['Figma', 'Miro', 'Loom', 'Calendly', 'Typeform']
  }

  const roles: Record<string, string[]> = {
    'cold-outreach': ['CTO', 'VP Engineering', 'Head of Product', 'Lead Developer', 'Engineering Manager'],
    'linkedin': ['Head of Marketing', 'CMO', 'Marketing Director', 'Growth Lead', 'Content Manager'],
    'website-capture': ['Product Manager', 'Product Owner', 'Product Lead', 'VP Product', 'Head of Product']
  }

  const companies = industries[request?.type] || industries['cold-outreach']
  const roleList = roles[request?.type] || roles['cold-outreach']

  const leads: Lead[] = companies.map((company, i) => ({
    name: `Contact ${i + 1}`,
    email: `contact${i + 1}@${company.toLowerCase()}.com`,
    company,
    role: roleList[i] || roleList[0],
    score: Math.floor(Math.random() * 30) + 70,
    personalizedMessage: `Bonjour, j'ai remarqué votre travail chez ${company}. NeuraAPI pourrait vous aider à accélérer votre développement avec nos templates IA premium.`
  }))

  return { leads }
}

export const leadGeneratorAgent = {
  name: 'Générateur de Leads B2B',
  id: 'lead-generator-agent',
  description: 'Génère des leads qualifiés pour la prospection B2B avec scoring et messages personnalisés',
  execute: executeLeadGenerator
}
