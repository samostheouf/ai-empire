import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'pt',
  productDescriptionShort:
    'AI Empire é uma plataforma para desenvolvedores que combina templates profissionais Next.js 14 com uma API de IA unificada (Groq e Gemini), faturamento Stripe e autenticação — permitindo que desenvolvedores criem e implantem produtos SaaS com inteligência artificial mais rapidamente.',
  productDescriptionLong:
    'A AI Empire fornece um kit completo para a criação de produtos SaaS com inteligência artificial. A plataforma oferece templates Next.js 14 prontos para produção — incluindo NeuraStore (e-commerce), NeuraBlog (publicação de conteúdo) e NeuraPortfolio (portfólio para desenvolvedores) — cada um com design responsivo moderno, modo escuro e otimização SEO integrados.\n\nTodos os templates se integram com a API unificada da AI Empire, que fornece acesso aos modelos Groq e Gemini através de um único endpoint. A plataforma também inclui integração com Stripe billing, autenticação e um dashboard administrativo, reduzindo o típico cronograma de desenvolvimento SaaS de meses para dias.\n\nA AI Empire atende desenvolvedores, indie hackers, fundadores de startups e pequenas e médias empresas que desejam lançar produtos com inteligência artificial sem construir a infraestrutura do zero. A plataforma opera com um modelo freemium: a API de IA oferece um tier gratuito com 100 créditos, e os templates estão disponíveis para compra individual (€19–€29) ou como pacote completo (€299).',
  keyFeatures: [
    'API de IA unificada — Acesso aos modelos Groq e Gemini através de um único endpoint',
    'Templates profissionais Next.js 14 — NeuraStore, NeuraBlog, NeuraPortfolio e mais',
    'Integração Stripe billing — Pagamentos configurados prontos para uso',
    'Autenticação incluída — Gerenciamento de usuários sem configuração de terceiros',
    'Dashboard administrativo — Gerencie usuários, analytics e conteúdo',
    'Tier gratuito — 100 créditos de API no cadastro, sem necessidade de cartão de crédito',
    'Design responsivo — Templates mobile-first com modo escuro',
    'Otimização SEO — Meta tags, dados estruturados e otimização de desempenho',
    'Pronto para Vercel — Deploy com um clique para todos os templates',
    'SDKs JavaScript e Python — Integração amigável para desenvolvedores',
  ],
  pricingTable: [
    {
      name: 'Tier Gratuito',
      price: '€0',
      description: 'Comece com as APIs de IA sem custos',
      features: [
        '100 créditos de API de IA',
        'Acesso a Groq e Gemini',
        'REST API + SDKs',
        'Suporte da comunidade',
        'Sem necessidade de cartão de crédito',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '€19',
      description: 'Template de blog profissional para Next.js 14',
      features: [
        'Suporte a MDX',
        'Modo escuro',
        'Feed RSS',
        'Otimização SEO',
        'Integração com newsletter',
        'Compra única',
      ],
    },
    {
      name: 'NeuraStore',
      price: '€29',
      description: 'Template de e-commerce completo para Next.js 14',
      features: [
        'Pagamentos Stripe',
        'Gerenciamento de carrinho',
        'Dashboard administrativo',
        'Recomendações de produtos com IA',
        'Design responsivo',
        'Compra única',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '€29',
      description: 'Template de portfólio para desenvolvedores Next.js 14',
      features: [
        'Animações Framer Motion',
        'Modo escuro',
        'Formulário de contato',
        'Design responsivo',
        'Otimização SEO',
        'Compra única',
      ],
    },
    {
      name: 'Pacote Completo',
      price: '€299',
      description: 'Todos os templates com suporte prioritário',
      features: [
        'Todos os 6 templates',
        'Suporte prioritário',
        'Atualizações gratuitas',
        'Acesso antecipado a novos templates',
        'Licença comercial',
        'Economize mais de €400 em relação às compras individuais',
      ],
    },
  ],
  founderQuote: {
    text: 'Criamos a AI Empire porque acreditamos que todo desenvolvedor deve ser capaz de criar produtos com inteligência artificial sem gastar meses na infraestrutura. Nossos templates e API permitem que você se concentre no que importa — seu produto e seus usuários.',
    attribution: 'Equipe da AI Empire',
    title: 'Fundadores da AI Empire',
  },
  logoUsage: {
    primaryUsage: 'Use a logomarca da AI Empire em fundo branco ou escuro com contraste suficiente.',
    clearSpace: 'Mantenha um espaço livre mínimo igual à altura da letra "A" da logomarca em todos os lados.',
    minimumSize: 'A logomarca não deve ser reproduzida com menos de 120px de largura (digital) ou 30mm (impressão).',
    donts: [
      'Não estique, rotacione ou distorça a logomarca',
      'Não altere as cores da logomarca',
      'Não coloque a logomarca em fundos movimentados sem um contêiner',
      'Não adicione efeitos como sombras, brilhos ou gradientes à logomarca',
      'Não reorganize ou modifique os elementos da logomarca',
    ],
  },
  contactInfo: {
    press: 'press@ai-empire.dev',
    partnerships: 'partners@ai-empire.dev',
    general: 'hello@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'A AI Empire é uma plataforma para desenvolvedores que fornece templates profissionais Next.js 14 com APIs de IA integradas (Groq e Gemini), faturamento Stripe e autenticação. Fundada para ajudar desenvolvedores a criar produtos SaaS com inteligência artificial mais rapidamente, a AI Empire atende desenvolvedores, indie hackers e fundadores de startups em todo o mundo. A plataforma oferece um tier gratuito de API e templates a partir de €19. Para mais informações, visite ai-empire-steel.vercel.app.',
};
