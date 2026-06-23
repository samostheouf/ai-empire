export interface CampaignTemplate {
  id: string
  name: string
  type: 'product-launch' | 'seasonal' | 'referral' | 'black-friday' | 'new-year'
  duration: string
  channels: string[]
  budget: string
  objective: string
  content: CampaignTemplateContent
  schedule: CampaignSchedule[]
  metrics: CampaignMetrics
}

export interface CampaignTemplateContent {
  headline: string
  subheadline: string
  body: string
  cta: string
  hashtags: string[]
  emailSubject: string
  emailBody: string
  socialPost: string
}

export interface CampaignSchedule {
  day: string
  action: string
  channel: string
}

export interface CampaignMetrics {
  targetReach: string
  targetConversion: string
  targetRevenue: string
}

// ============================================================
// CAMPANHA DE LANÇAMENTO DE PRODUTO
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: 'Lançamento de Produto — AI Empire',
  type: 'product-launch',
  duration: '14 dias',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: 'Gerar 500 cadastros e €3,000 de receita no primeiro mês',
  content: {
    headline: '🚀 Novo: A revolução AI para SaaS chegou!',
    subheadline: 'Lance seu SaaS em 24h com templates Next.js 14 + APIs de IA poderosas',
    body: `Sonha em lançar seu SaaS mas o desenvolvimento leva semanas?

AI Empire muda o jogo:
✅ Templates Next.js 14 profissionais — designs modernos, responsivos, modo escuro
✅ APIs de IA integradas — GPT-4, Groq, Gemini prontas para uso
✅ Stripe + Auth inclusos — pagamentos e autenticação em 5 minutos
✅ Dashboard admin completo — gerencie usuários, analytics, faturas

🔥 Oferta de lançamento: -30% em todos os templates por 72 horas!

Junte-se aos primeiros usuários que já lançaram seu SaaS com AI Empire.
Não perca esta oportunidade — a oferta expira em [DATE].`,
    cta: '🚀 Comece agora — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🚀 É oficial: AI Empire está no ar! -30% para você',
    emailBody: `Olá [First Name],

O dia chegou. AI Empire finalmente está no ar!

O que oferecemos:
🎨 6 templates Next.js 14 profissionais (€49-199)
🤖 APIs de IA integradas (GPT-4, Groq, Gemini)
💳 Stripe + Auth configurados
📊 Dashboard admin completo

🎁 Oferta exclusiva: -30% em todos os templates por apenas 72 horas.

Use o código LAUNCH30 no checkout.

[CTA: Explorar os templates →]

Até breve,
A equipe AI Empire 🇫🇷`,
    socialPost: `🚀 AI Empire finalmente está NO AR!

A plataforma que combina:
✅ Templates Pro Next.js 14
✅ APIs de IA integradas
✅ Stripe + Auth inclusos
✅ Dashboard admin

🎁 -30% por 72h com código LAUNCH30

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'D-7', action: 'Teaser nas redes sociais', channel: 'Twitter/X, LinkedIn' },
    { day: 'D-3', action: 'Email teaser para assinantes da newsletter', channel: 'Email' },
    { day: 'D-1', action: 'Contagem regressiva no Instagram Stories', channel: 'Instagram' },
    { day: 'D0', action: 'Lançamento oficial — post + email + ads', channel: 'Todos os canais' },
    { day: 'D+1', action: 'Depoimentos de early adopters', channel: 'Twitter/X, LinkedIn' },
    { day: 'D+3', action: 'Lembrete da oferta -30%', channel: 'Email, Twitter' },
    { day: 'D+5', action: 'Tutorial "Como criar seu primeiro SaaS"', channel: 'YouTube, Blog' },
    { day: 'D+7', action: 'Fim da oferta -30%', channel: 'Email, Social' },
    { day: 'D+10', action: 'Estudo de caso de cliente', channel: 'LinkedIn, Blog' },
    { day: 'D+14', action: 'Resumo + depoimentos', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'Público-alvo (varia por campanha)',
    targetConversion: 'Taxa de conversão 1-2%',
    targetRevenue: 'Proporcional ao orçamento publicitário'
  }
}

// ============================================================
// CAMPANHA PROMOCIONAL SAZONAL
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: 'Promoção Sazonal — Primavera/Verão',
  type: 'seasonal',
  duration: '21 dias',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: 'Aumentar as vendas em 40% durante o período de verão',
  content: {
    headline: '☀️ Promoção de Verão AI Empire — Até -40%!',
    subheadline: 'O verão é para impulsionar seu SaaS, não para ficar na praia',
    body: `O verão está chegando, e é o momento perfeito para impulsionar seu projeto!

🌞 Ofertas especiais primavera/verão:
- NeuraStore (template e-commerce): €39 → €29 (-25%)
- NeuraBlog (template blog): €29 → €19 (-35%)
- Pacote completo (6 templates): €599 → €359 (-40%)

⚡ Por que o verão?
→ Menos concorrência no mercado
→ Mais tempo para construir antes do outono
→ Startups que lançam no verão chegam em setembro com um produto

⏱️ Oferta válida de [START_DATE] a [END_DATE]

Use o código ETE2024 para -40% no pacote.`,
    cta: '☀️ Aproveite as promoções — -40%',
    hashtags: [
      '#AIEmpire', '#Promo', '#Verão2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ Promoção de Verão: -40% em todos os templates AI Empire!',
    emailBody: `Olá [First Name],

O verão está chegando e temos uma oferta que não pode recusar! 🌞

☀️ Ofertas especiais:
- NeuraStore: €39 → €29
- NeuraBlog: €29 → €19
- Pacote 6 templates: €599 → €359

⏰ Oferta válida até [END_DATE]

Use o código ETE2024 no checkout.

[CTA: Ver as ofertas →]

Tenha um bom verão!
A equipe AI Empire 🇫🇷`,
    socialPost: `☀️ PROMOÇÃO DE VERÃO AI EMPIRE ☀️

-40% no pacote completo:
✅ 6 templates Next.js 14
✅ APIs de IA integradas
✅ Suporte prioritário

Código: ETE2024
⏰ Válido até [DATE]

👉 ai-empire-steel.vercel.app

#AIEmpire #Promo #Verão2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'D-3', action: 'Teaser "Algo está chegando this verão..."', channel: 'Twitter/X, Instagram' },
    { day: 'D0', action: 'Anúncio oficial da promoção', channel: 'Todos os canais' },
    { day: 'D+3', action: 'Depoimento de cliente + antes/depois', channel: 'LinkedIn, Facebook' },
    { day: 'D+7', action: 'Lembrete no meio do caminho + estoque limitado', channel: 'Email' },
    { day: 'D+10', action: 'Tutorial "Lance seu SaaS neste verão"', channel: 'YouTube, Blog' },
    { day: 'D+14', action: 'Últimos dias — urgência', channel: 'Todos os canais' },
    { day: 'D+18', action: 'Última chance', channel: 'Email, Twitter' },
    { day: 'D+21', action: 'Fim da promoção — resumo', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000 pessoas',
    targetConversion: '300 vendas (1%)',
    targetRevenue: '€10,700 (300 × €35 média)'
  }
}

// ============================================================
// PROGRAMA DE INDICAÇÃO
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'Programa de Indicação — Ganhe Créditos',
  type: 'referral',
  duration: 'Permanente',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500 (créditos de recompensa)',
  objective: 'Crescimento viral: 1 indicação = 2 novos usuários',
  content: {
    headline: '🎁 Indique um amigo, ganhe 500 créditos IA grátis!',
    subheadline: 'A indicação boca a boca é nosso melhor canal de crescimento',
    body: `Gosta do AI Empire? Compartilhe e ganhe recompensas!

🎯 Como funciona:
1. Compartilhe seu link de indicação único
2. Seu amigo se cadastra com seu link
3. VOCÊS DOIS recebem 500 créditos IA grátis!

💰 Níveis de recompensas:
- 1 indicação = 500 créditos
- 3 indicações = 1,500 créditos + badge "Embaixador"
- 5 indicações = 2,500 créditos + acesso Pro 1 mês
- 10 indicações = 5,000 créditos + acesso Pro 3 meses + menção no site

🔗 Seu link único: [REFERRAL_LINK]

Compartilhe no Twitter, LinkedIn, ou envie diretamente para seus contatos!`,
    cta: '🎁 Compartilhar meu link de indicação',
    hashtags: [
      '#AIEmpire', '#Indicação', '#Grátis', '#IA', '#SaaS',
      '#Embaixador', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 Quer 500 créditos IA grátis? Indique um amigo!',
    emailBody: `Olá [First Name],

Temos uma surpresa para você! 🎁

Indique um amigo no AI Empire e VOCÊS DOIS recebem 500 créditos IA grátis.

Seu link único: [REFERRAL_LINK]

🎯 Níveis:
- 1 indicação → 500 créditos
- 3 indicações → 1,500 créditos + badge
- 5 indicações → 2,500 créditos + Pro 1 mês
- 10 indicações → 5,000 créditos + Pro 3 meses

Compartilhe seu link agora!

[CTA: Compartilhar meu link →]

Obrigado por fazer parte da aventura! 💜
A equipe AI Empire`,
    socialPost: `🎁 INDIQUE UM AMIGO, GANHE 500 CRÉDITOS! 🎁

Gosta do AI Empire? Compartilhe!

✅ Seu amigo se cadastra → 500 créditos grátis
✅ VOCÊ ganha → 500 créditos grátis

🔗 Link de indicação: [REFERRAL_LINK]

5 indicações = acesso Pro GRATUITO por 1 mês 🚀

#AIEmpire #Indicação #IA #SaaS #Grátis`
  },
  schedule: [
    { day: 'Permanente', action: 'Email de boas-vindas com link de indicação', channel: 'Email' },
    { day: 'D+7', action: 'Lembrete do programa de indicação', channel: 'Email' },
    { day: 'D+30', action: 'Email "Você ainda não indicou ninguém..."', channel: 'Email' },
    { day: 'Permanente', action: 'Link de indicação visível no dashboard', channel: 'Dashboard' },
    { day: 'Semanal', action: 'Ranking dos melhores indicadores no Twitter', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '1,000 compartilhamentos/mês',
    targetConversion: '200 novos cadastros/mês',
    targetRevenue: '+40% crescimento orgânico'
  }
}

// ============================================================
// CAMPANHA BLACK FRIDAY / CYBER MONDAY
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'Black Friday / Cyber Monday — AI Empire',
  type: 'black-friday',
  duration: '5 dias (quarta-sábado + Cyber Monday)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: 'Maximizar alcance e conversões',
  content: {
    headline: '🖤 BLACK FRIDAY AI EMPIRE — -50% EM TUDO!',
    subheadline: 'A maior promoção do ano. Não perca.',
    body: `É hora de agir. Pela primeira vez na história:

🖤 BLACK FRIDAY — -50% EM TUDO

📦 Ofertas exclusivas:
- NeuraStore: €39 → €19.50
- NeuraBlog: €29 → €14.50
- NeuraPortfolio: €59 → €29.50
- Pacote Premium (6 templates): €599 → €299.50
- Plano Pro (1 ano): €1,188 → €594

⚡ NÃO é uma piada. É A promoção do ano.

⏱️ Tempo limitado: De [WEDNESDAY] a [MONDAY] apenas.

🔒 Estoque limitado: Os primeiros 50 compradores recebem um template bônus grátis.

Código: BLACKFRIDAY50`,
    cta: '🖤 Aproveite -50% agora',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Sale',
      '#Promo', '#SaaS', '#Templates', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY: -50% em tudo na AI Empire — Apenas 5 dias!',
    emailBody: `Olá [First Name],

É oficial. O Black Friday chegou à AI Empire. 🖤

-50% EM TUDO:
📦 NeuraStore: €39 → €19.50
📦 NeuraBlog: €29 → €14.50
📦 Pacote Premium: €599 → €299.50
📦 Plano Pro 1 ano: €1,188 → €594

⏰ Válido de [WEDNESDAY] a [MONDAY] apenas.

Código: BLACKFRIDAY50

Os primeiros 50 compradores recebem um template bônus grátis! 🎁

[CTA: Pegar meus -50% →]

Não perca isso.
A equipe AI Empire 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

-50% EM TUDO POR 5 DIAS!

📦 Templates de €14.50 a €299.50
📦 Plano Pro -50%
📦 Primeiros 50 = template bônus GRÁTIS

Código: BLACKFRIDAY50
⏰ De [WEDNESDAY] a [MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: 'Quarta D-1', action: 'Teaser "Amanhã, algo escuro chega..."', channel: 'Twitter, Instagram' },
    { day: 'Quinta D0 (BF)', action: 'Lançamento oficial Black Friday', channel: 'Todos os canais + Email blast' },
    { day: 'Quinta D0', action: 'Google Ads - campanha urgente', channel: 'Google Ads' },
    { day: 'Sexta D+1', action: 'Lembrete + depoimentos de compradores', channel: 'Email, Twitter' },
    { day: 'Sábado D+2', action: 'Prova social: "Já X vendas!"', channel: 'Instagram, LinkedIn' },
    { day: 'Domingo D+3', action: 'Último dia para BF regular', channel: 'Email blast' },
    { day: 'Segunda CM', action: 'Cyber Monday — Extensão especial', channel: 'Todos os canais' },
    { day: 'Segunda CM', action: 'Oferta flash 24h', channel: 'Email, Twitter' },
    { day: 'Terça D+5', action: 'Black Friday termina — Obrigado', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Público-alvo (varia por campanha)',
    targetConversion: 'Taxa de conversão 0.5-1%',
    targetRevenue: 'Proporcional ao orçamento publicitário'
  }
}

// ============================================================
// CAMPANHA ANO NOVO
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: 'Ano Novo — Resoluções SaaS 2025',
  type: 'new-year',
  duration: '14 dias (26 de dezembro - 9 de janeiro)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: 'Converter prospects de fim de ano e começar forte em janeiro',
  content: {
    headline: '🎆 2025: Lance seu SaaS este ano!',
    subheadline: 'Ano novo, novo SaaS. Comece forte com AI Empire.',
    body: `2025 é O SEU ano. 🎆

Você colocou sua ideia no papel no ano passado. Agora, tome ação.

🚀 Oferta de Ano Novo:
- -25% em todos os templates com código NEWYEAR2025
- 500 créditos IA grátis para começar
- Acesso prioritário às novas funcionalidades 2025

🎯 Resoluções 2025:
✅ "Vou lançar meu SaaS" → Feito em 24h com AI Empire
✅ "Vou ganhar online" → Templates e-commerce + Stripe inclusos
✅ "Vou aprender IA" → APIs de IA integradas + tutoriais
✅ "Vou me digitalizar" → Dashboard admin completo

⏱️ Oferta de 26 de dezembro a 9 de janeiro apenas.

Faça de 2025 o seu ano de sucesso.`,
    cta: '🎆 Comece 2025 com AI Empire',
    hashtags: [
      '#AIEmpire', '#AnoNovo', '#2025', '#Resoluções', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🎆 Ano novo, novo SaaS: -25% + 500 créditos grátis!',
    emailBody: `Olá [First Name],

Feliz Ano Novo! 🎆

2025 é o ano em que você lança seu SaaS. E estamos aqui para ajudar.

🎁 Oferta de Ano Novo:
- -25% em todos os templates
- 500 créditos IA grátis
- Acesso prioritário às funcionalidades 2025

Código: NEWYEAR2025

⏰ Oferta de 26 de dezembro a 9 de janeiro.

Faça deste ano o bom ano.

[CTA: Explorar as ofertas →]

Feliz Ano Novo e boa sorte!
A equipe AI Empire 🇫🇷`,
    socialPost: `🎆 2025: O ANO DO SEU SAAS! 🎆

Ano novo, novo começo.

🎁 Oferta especial:
✅ -25% nos templates
✅ 500 créditos IA grátis
✅ Acesso prioritário 2025

Código: NEWYEAR2025
⏰ De 26/12 a 09/01

👉 ai-empire-steel.vercel.app

#AIEmpire #AnoNovo #2025 #SaaS #Resoluções`
  },
  schedule: [
    { day: '26 de dezembro', action: 'Email "Feliz Ano Novo — aqui está seu presente"', channel: 'Email' },
    { day: '27 de dezembro', action: 'Post "Resoluções 2025: lance seu SaaS"', channel: 'LinkedIn, Twitter' },
    { day: '30 de dezembro', action: 'Lembrete da oferta + depoimentos', channel: 'Email, Twitter' },
    { day: '1 de janeiro', action: 'Mensagem "Feliz Ano Novo — estamos aqui por você"', channel: 'Email, Social' },
    { day: '2 de janeiro', action: 'Tutorial "5 passos para lançar seu SaaS em janeiro"', channel: 'Blog, YouTube' },
    { day: '5 de janeiro', action: 'Prova social + urgência', channel: 'Twitter, Instagram' },
    { day: '7 de janeiro', action: 'Última chance', channel: 'Email' },
    { day: '9 de janeiro', action: 'Oferta termina — resumo + prévia 2025', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000 pessoas',
    targetConversion: '400 cadastros (1%)',
    targetRevenue: '€5,000 (200 × €25 média)'
  }
}

// ============================================================
// FUNÇÕES UTILITÁRIAS
// ============================================================

export function getAllCampaignTemplates(): CampaignTemplate[] {
  return [
    productLaunchTemplate,
    seasonalPromotionTemplate,
    referralProgramTemplate,
    blackFridayTemplate,
    newYearTemplate,
  ]
}

export function getCampaignTemplateByType(type: CampaignTemplate['type']): CampaignTemplate | undefined {
  return getAllCampaignTemplates().find(t => t.type === type)
}

export function generateCampaignTemplateId(): string {
  return `campaign_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function generateEmailBlast(template: CampaignTemplate, recipientName: string): {
  subject: string
  body: string
  cta: string
} {
  return {
    subject: template.content.emailSubject.replace('[First Name]', recipientName),
    body: template.content.emailBody.replace(/\[First Name\]/g, recipientName),
    cta: template.content.cta,
  }
}

export function generateTemplateSocialPost(template: CampaignTemplate): string {
  return template.content.socialPost
}

export function formatScheduleForCalendar(schedule: CampaignSchedule[]): string {
  return schedule.map(s => `${s.day} | ${s.channel} | ${s.action}`).join('\n')
}

export function calculateTotalBudget(templates: CampaignTemplate[]): string {
  const total = templates.reduce((sum, t) => {
    const budgetNum = parseInt(t.budget.replace(/[^0-9]/g, ''), 10)
    return sum + (isNaN(budgetNum) ? 0 : budgetNum)
  }, 0)
  return `€${total.toLocaleString('pt-BR')}`
}
