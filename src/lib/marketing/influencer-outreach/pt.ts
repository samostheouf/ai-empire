export interface InfluencerTemplate {
  id: string;
  name: string;
  type: 'email' | 'dm';
  target: string;
  subject: string;
  body: string;
  cta: string;
}

export interface AffiliateProgram {
  name: string;
  commission: number;
  cookieDuration: number;
  benefits: string[];
  requirements: string[];
}

export const emailTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-email-01',
    name: 'Tech YouTuber FR',
    type: 'email',
    target: 'YouTube (10K-100K subscribers)',
    subject: '🤝 Patrocínio de vídeo — AI-Empire (API de IA francesa)',
    body: `Olá {{first_name}},

Sou fã do seu conteúdo no YouTube. Seus tutoriais de IA me inspiraram a criar a AI-Empire.

Gostaria de propor um patrocínio para um vídeo no seu canal.

**Conceito:** "Testei uma API de IA gratuita — aqui está o que construí"

**Formato:**
- 8-12 minutos de vídeo
- Demonstração ao vivo da AI-Empire
- Criação de um mini-projeto em tempo real
- Menção do seu link de afiliado

**Remuneração:**
- €200-500 de acordo com seu público
- 20% de comissão em cada venda via seu link
- Templates gratuitos (valor €49)

**Público-alvo:** Desenvolvedores franceses, 18-35 anos, interessados em IA

Interessado? Podemos adaptar o formato ao seu estilo.

Responda a este e-mail ou me mande um DM no Twitter @[handle].

Atenciosamente,
[Seu nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Responder ao e-mail',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 Parceria de conteúdo — AI-Empire x sua marca pessoal',
    body: `Olá {{first_name}},

Proponho uma parceria de conteúdo para fortalecer sua marca pessoal no LinkedIn.

**Proposta:**
1. **Artigo no LinkedIn:** "Como integrei a IA no meu SaaS por €0"
2. **Template NeuraBlog:** Gratuito para sua comunidade (valor €49)
3. **Divisão de receita:** 25% em cada venda via seu link
4. **Visibilidade:** Mencionamos você em nossa newsletter em crescimento

**Por que é interessante:**
- Você escreve 1 post, ganha renda passiva + visibilidade
- Oferece valor à sua comunidade
- Se posiciona como especialista em IA

Você escreve 1 post, ganha renda passiva + visibilidade.

Interessado? Vamos fazer uma chamada de 10 minutos?

Atenciosamente,
[Seu nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Agendar chamada de 10 min',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Collab no Twitter — AI-Empire x sua conta tech',
    body: `Olá {{first_name}},

Vejo que você compartilha conteúdo tech de qualidade no Twitter. Gostaria que colaborássemos.

**Proposta:**
1. **Sorteio:** 5 templates premium para sua comunidade
2. **Thread co-escrita:** "O estado da IA para devs em 2025"
3. **Comissão:** 30% nas vendas via seu link
4. **Feedback:** Você influencia nosso roadmap de produto

**Formato:** 1 thread + 3 tweets em 2 semanas.
**Orçamento:** €100-300 + templates gratuitos.

Interessado?

Atenciosamente,
[Seu nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Responder ao e-mail',
  },
  {
    id: 'inf-email-04',
    name: 'Agência Web',
    type: 'email',
    target: 'Agências web (5-20 funcionários)',
    subject: '🏢 Parceria de agência — Seus clientes querem IA, podemos fornecer',
    body: `Olá {{first_name}},

Vejo que {{agency_name}} trabalha com clientes e-commerce/SaaS que cada vez mais pedem funcionalidades de IA.

**Problema:** Integrar IA é caro e demorado.

**Solução:** AI-Empire dá acesso a uma API de IA pronta.
- Integração em 5 minutos
- Preço por uso (sem assinatura mínima)
- Suporte técnico em português

**Para sua agência:**
- Dashboard multi-cliente
- 15% de comissão em cada cliente
- Templates premium incluídos (valor €49-199)
- Treinamento gratuito para sua equipe

Vamos conversar? 15 minutos esta semana?

Atenciosamente,
[Seu nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Agendar chamada',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (ferramenta complementar)',
    subject: '🔗 Parceria AI-Empire x {{company}} — Complemente sua oferta de IA',
    body: `Olá {{first_name}},

Sou [Seu nome], fundador da AI-Empire, a plataforma de API de IA francesa para startups.

Entro em contato porque {{company}} e AI-Empire compartilham o mesmo público-alvo: startups francesas que querem integrar IA sem um orçamento grande.

**Proposta de parceria:**

1. **Integração nativa:** Integre AI-Empire na sua plataforma (widget/API)
2. **Comissões:** 20% recorrente em cada cliente referenciado
3. **Co-marketing:** Artigo no blog conjunto + webinar
4. **Exclusividade:** Oferta especial para seus usuários (-25%)

**Por que funciona:**
- Seus clientes precisam de IA, nós fornecemos a API
- Você ganha uma fonte de receita recorrente
- Nós ganhamos distribuição

Pronto para conversar? 15 minutos esta semana?

Atenciosamente,
[Seu nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Agendar chamada',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `Olá {{first_name}}! 👋

Adoro seu conteúdo sobre IA. Criei a AI-Empire, uma API de IA francesa para startups.

Proposta rápida:
- Templates gratuitos para sua comunidade
- 30% de comissão nas vendas
- Thread co-escrita

Interessado? Vamos conversar no DM?`,
    cta: 'Responder ao DM',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `Olá {{first_name}},

Vejo que você compartilha conteúdo tech de qualidade. Gostaria que colaborássemos.

AI-Empire é uma plataforma de IA francesa para startups. Estamos procurando parceiros para co-criar conteúdo.

Proposta:
- Artigo co-escrito no LinkedIn
- Template gratuito para sua comunidade
- 25% de divisão de receita

10 minutos de chamada esta semana?`,
    cta: 'Agendar chamada',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `Ei {{first_name}}! 👋

Vejo que você está ativo nos servidores de devs franceses. Gostaria de propor uma parceria.

AI-Empire = API de IA gratuita para startups francesas.

Oferta para você:
- Templates premium gratuitos
- 30% de comissão nas vendas
- Acesso beta a novas funcionalidades

Interessado?`,
    cta: 'Responder ao DM',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `Olá {{first_name}}! 🔥

Adoro seu conteúdo tech no Instagram. Tenho uma proposta para você.

AI-Empire é uma API de IA francesa. Procuramos criadores para:
- Reels de demo (templates gratuitos incluídos)
- 25% de comissão nas vendas
- Co-branding nos templates

Gostou? Vamos conversar no DM!`,
    cta: 'Responder ao DM',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `Olá {{first_name}}! 👋

Adoro seu canal do YouTube. Seus tutoriais de IA são ótimos.

Proposta de collab:
- Patrocínio de vídeo (€200-500)
- 20% de comissão nas vendas
- Templates gratuitos para sua comunidade

Interessado? Vamos ligar esta semana?`,
    cta: 'Agendar chamada',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    '30% de comissão em cada venda recorrente',
    'Cookie de 90 dias',
    'Dashboard de acompanhamento em tempo real',
    'Pagamentos mensais via Stripe',
    'Templates premium gratuitos (valor €199)',
    'Suporte dedicado a afiliados',
    'Acesso beta a novas funcionalidades',
    'Material de marketing fornecido',
  ],
  requirements: [
    'Público de 1K+ em um canal (YouTube, Twitter, LinkedIn, Instagram, Blog)',
    'Conteúdo tech / startup / IA',
    'Taxa de engajamento > 2%',
    'Sem conteúdo ofensivo ou político',
    'Respeitar as diretrizes da marca',
  ],
};

export const getAllTemplates = (): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates];
};

export const getTemplatesByType = (type: 'email' | 'dm'): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) => t.type === type);
};

export const getTemplatesByTarget = (target: string): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) =>
    t.target.toLowerCase().includes(target.toLowerCase()),
  );
};

export const generateOutreachSequence = (influencerType: string): InfluencerTemplate[] => {
  const templates: InfluencerTemplate[] = [];

  switch (influencerType) {
    case 'youtube':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-01')!,
        dmTemplates.find((t) => t.id === 'inf-dm-05')!,
      );
      break;
    case 'linkedin':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-02')!,
        dmTemplates.find((t) => t.id === 'inf-dm-02')!,
      );
      break;
    case 'twitter':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-03')!,
        dmTemplates.find((t) => t.id === 'inf-dm-01')!,
      );
      break;
    case 'agence':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-04')!);
      break;
    case 'saas':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-05')!);
      break;
    default:
      templates.push(...emailTemplates.slice(0, 2), ...dmTemplates.slice(0, 2));
  }

  return templates.filter(Boolean);
};
