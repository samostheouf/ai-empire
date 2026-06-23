import { LandingContent } from './en'

export const landingContent: LandingContent = {
  hero: {
    headline: 'Entregue produtos SaaS mais rápido com Next.js 14 e IA',
    subheadline: 'Templates prontos para produção com API Groq AI, faturamento Stripe e autenticação — construídos para que você possa focar no seu produto, não em código boilerplate.',
    ctaText: 'Comece grátis'
  },
  features: [
    {
      title: 'Templates Next.js 14 App Router',
      description: 'Construídos com os padrões mais recentes do Next.js. TypeScript, Tailwind CSS e componentes de servidor prontos para uso.'
    },
    {
      title: 'Integração com Groq AI API',
      description: 'Inferência rápida com Groq. Inclui chat em streaming, completions estruturados e endpoints de análise de documentos.'
    },
    {
      title: 'Faturamento Stripe pronto',
      description: 'Gerenciamento de assinaturas, precificação baseada em uso, portal de clientes e tratamento de webhooks — tudo pré-configurado.'
    },
    {
      title: 'Autenticação e funções',
      description: 'Autenticação integrada com controle de acesso baseado em funções. Nenhuma biblioteca de autenticação de terceiros necessária para fluxos básicos.'
    },
    {
      title: 'Painel administrativo',
      description: 'Gerencie usuários, visualize análises e configure configurações através de uma interface administrativa pré-construída.'
    },
    {
      title: 'Tier gratuito disponível',
      description: 'Comece com 100 créditos API. Sem necessidade de cartão de crédito. Atualize quando precisar de mais.'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Escolha um template',
      description: 'Escolha entre 6 templates prontos para produção: SaaS starter, marketplace, dashboard, blog, portfolio ou landing page.'
    },
    {
      step: 2,
      title: 'Personalize seu produto',
      description: 'Adicione sua lógica de negócio, configure sua chave API Groq e configure o Stripe. O boilerplate já está tratado.'
    },
    {
      step: 3,
      title: 'Publique e lance',
      description: 'Envie para a Vercel ou sua plataforma preferida. Seu SaaS está pronto para usuários.'
    }
  ],
  faq: [
    {
      question: 'O que é o tier gratuito?',
      answer: 'O tier gratuito inclui 100 créditos API com Groq AI. Sem necessidade de cartão de crédito. Você pode usar todos os templates e funcionalidades básicas sem pagar.'
    },
    {
      question: 'Preciso das minhas próprias chaves API?',
      answer: 'Sim, você precisa de uma chave API Groq (tier gratuito disponível em groq.com) e uma conta Stripe para faturamento. O AI Empire cuida da integração — basta inserir suas chaves.'
    },
    {
      question: 'Posso usar estes templates para projetos comerciais?',
      answer: 'Sim. Você pode usar os templates do AI Empire para projetos pessoais e comerciais. Você é dono do código que constrói sobre eles.'
    },
    {
      question: 'Quais tecnologias são utilizadas?',
      answer: 'Next.js 14 (App Router), TypeScript, Tailwind CSS, Groq AI API para inferência, Stripe para pagamentos e um sistema de autenticação pré-construído com controle de acesso baseado em funções.'
    },
    {
      question: 'Há documentação?',
      answer: 'Sim. Cada template inclui instruções de configuração, referência de API e comentários de código. Também fornecemos guias para padrões de personalização comuns.'
    },
    {
      question: 'Em que difere de outros templates SaaS?',
      answer: 'O AI Empire foca em código funcional em vez de alegações de marketing. Cada template está pronto para produção, inclui integração com API de IA e vem com documentação honesta. Sem testemunhos falsos ou estatísticas infladas.'
    }
  ]
}
