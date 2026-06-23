export interface BlogPostTemplate {
  title: string
  slug: string
  excerpt: string
  content: string
  tags: string[]
  category: string
  readingTime: number
}

export function generateBlogPostTemplate(data: {
  title: string
  topic: string
  targetAudience: string
}): BlogPostTemplate {
  return {
    title: data.title,
    slug: data.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-'),
    excerpt: `Descubra como ${data.topic} pode transformar o seu negócio de desenvolvimento.`,
    content: `
# ${data.title}

## Introdução

Neste artigo, vamos explorar como ${data.topic} pode ajudá-lo a melhorar a sua produtividade e criar aplicações com melhor desempenho.

## Por que ${data.topic}?

${data.topic} tornou-se indispensável para os desenvolvedores ${data.targetAudience}. Eis as principais razões:

### 1. Desempenho

As soluções modernas oferecem desempenho excepcional graças à sua arquitetura otimizada.

### 2. Produtividade

Com as ferramentas e templates certos, você pode reduzir o seu tempo de desenvolvimento em 60%.

### 3. Escalabilidade

A sua solução pode crescer com o seu negócio sem comprometer a qualidade.

## Como começar?

### Passo 1: Escolha o template certo

Um bom template economiza tempo ao mesmo tempo que oferece uma base sólida.

### Passo 2: Personalize conforme suas necessidades

Adapte o código ao seu caso de uso específico.

### Passo 3: Implemente em produção

Com Next.js e Vercel, a implementação é muito simples.

## Conclusão

${data.topic} é um recurso importante para desenvolvedores modernos. Comece hoje a integrar estas soluções nos seus projetos.

---

*Precisa de ajuda para começar? Confira os nossos [templates premium](/templates) ou entre em contato com a nossa equipa.*
    `,
    tags: [data.topic, 'Next.js', 'Tailwind CSS', 'Desenvolvimento Web', 'SaaS'],
    category: 'Tutorial',
    readingTime: 5,
  }
}

export interface CaseStudyTemplate {
  title: string
  client: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  metrics: Array<{
    label: string
    value: string
  }>
}

export function generateCaseStudyTemplate(data: {
  clientName: string
  industry: string
  challenge: string
}): CaseStudyTemplate {
  return {
    title: `Como ${data.clientName} transformou o seu negócio com a NeuraAPI`,
    client: data.clientName,
    industry: data.industry,
    challenge: data.challenge,
    solution: `${data.clientName} integrou as APIs e templates da NeuraAPI para automatizar os seus processos e melhorar a produtividade.`,
    results: [
      'Redução de 60% no tempo de desenvolvimento',
      'Melhoria na qualidade do código',
      'Produção 3 vezes mais rápida',
      'ROI atingido em 2 meses',
    ],
    metrics: [
      { label: 'Tempo de desenvolvimento', value: '-60%' },
      { label: 'Taxa de satisfação', value: '95%' },
      { label: 'ROI', value: '300%' },
      { label: 'Tempo de implementação', value: '-75%' },
    ],
  }
}

export interface TutorialTemplate {
  title: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  prerequisites: string[]
  objectives: string[]
  steps: Array<{
    title: string
    content: string
    codeExample?: string
  }>
}

export function generateTutorialTemplate(data: {
  title: string
  topic: string
}): TutorialTemplate {
  return {
    title: data.title,
    level: 'intermediate',
    duration: '30 min',
    prerequisites: [
      'Conhecimentos básicos de Next.js',
      'Compreensão de React',
      'Node.js instalado',
    ],
    objectives: [
      `Compreender os conceitos básicos de ${data.topic}`,
      `Configurar ${data.topic} num projeto Next.js`,
      `Criar uma primeira implementação`,
    ],
    steps: [
      {
        title: 'Instalação',
        content: 'Comece por instalar as dependências necessárias.',
        codeExample: 'npm install @neuraapi/sdk',
      },
      {
        title: 'Configuração',
        content: 'Configure a sua chave API nas variáveis de ambiente.',
        codeExample: 'NEXT_PUBLIC_NEURAAPI_KEY=your_key_here',
      },
      {
        title: 'Utilização',
        content: 'Utilize o SDK no seu componente React.',
        codeExample: `import { NeuraAPI } from '@neuraapi/sdk'

const api = new NeuraAPI(process.env.NEXT_PUBLIC_NEURAAPI_KEY)

export default function MyComponent() {
  const generateContent = async () => {
    const result = await api.generate({
      prompt: 'O seu prompt aqui',
    })
    return result
  }
}`,
      },
      {
        title: 'Implementação',
        content: 'Implemente a sua aplicação na Vercel.',
        codeExample: 'vercel deploy',
      },
    ],
  }
}

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export function generateFAQContent(category: string): FAQItem[] {
  const faqs: Record<string, FAQItem[]> = {
    general: [
      {
        question: 'O que é a NeuraAPI?',
        answer: 'A NeuraAPI é uma plataforma que fornece APIs de inteligência artificial e templates premium para desenvolvedores. Ajudamos a lançar rapidamente os seus projetos SaaS.',
        category: 'general',
      },
      {
        question: 'Como obtenho uma chave API?',
        answer: 'Crie uma conta gratuita na nossa plataforma, depois aceda ao seu painel para obter a sua chave API. Recebe 100 créditos gratuitos para começar.',
        category: 'general',
      },
      {
        question: 'Quais são os preços?',
        answer: 'Oferecemos um plano gratuito com 100 créditos, um plano Starter por 29€/mês e um plano Pro por 99€/mês. Consulte a nossa página de preços para mais detalhes.',
        category: 'pricing',
      },
    ],
    technical: [
      {
        question: 'Como integro a NeuraAPI no meu projeto?',
        answer: 'Utilize o nosso SDK npm: npm install @neuraapi/sdk. Depois, importe e configure o SDK com a sua chave API.',
        category: 'technical',
      },
      {
        question: 'Quais frameworks são suportados?',
        answer: 'A NeuraAPI é compatível com Next.js, React, Vue.js, Angular e qualquer framework JavaScript/TypeScript moderno.',
        category: 'technical',
      },
      {
        question: 'Existem limites de taxa?',
        answer: 'O plano gratuito é limitado a 10 pedidos/hora. Os planos pagos oferecem limites mais altos conforme a sua necessidade.',
        category: 'technical',
      },
    ],
    billing: [
      {
        question: 'Como funciona a faturação?',
        answer: 'A faturação é mensal. Pode cancelar a qualquer momento. Os créditos não utilizados não são transferidos.',
        category: 'billing',
      },
      {
        question: 'Aceitam pagamentos com cartão de crédito?',
        answer: 'Sim, aceitamos Visa, Mastercard e American Express através do nosso parceiro Stripe.',
        category: 'billing',
      },
      {
        question: 'Como obtenho um reembolso?',
        answer: 'Contacte support@neuraapi.com dentro de 30 dias após a sua compra para qualquer pedido de reembolso.',
        category: 'billing',
      },
    ],
  }

  return faqs[category] || faqs.general
}
