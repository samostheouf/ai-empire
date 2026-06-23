import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: 'Sequência de Onboarding — 5 dias',
  type: 'onboarding',
  duration: '5 dias',
  trigger: 'Novo usuário registrado',
  goal: 'Ativar o usuário: primeira chamada API + primeira template comprada',
  emails: [
    {
      day: 0,
      subject: 'Bem-vindo ao AI Empire — Sua API de IA está pronta',
      preview: 'Você tem 100 créditos gratuitos. Comece agora.',
      body: `Olá [Nome],

bem-vindo ao AI Empire!

Agora você tem acesso a:
- 100 créditos de IA gratuitos
- APIs GPT-4, Groq e Gemini
- Templates Next.js 14 profissionais
- Suporte técnico em português

Sua chave de API: [API_KEY]
Painel: https://ai-empire-steel.vercel.app/dashboard

Próximo passo: Faça sua primeira chamada API em 2 minutos.

1. Vá ao seu painel
2. Copie sua chave de API
3. Execute este curl:
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer SUA_CHAVE" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Olá, como vai?"}'

Pronto! Agora você tem acesso à IA.

Até breve,
A equipe do AI Empire`,
      cta: 'Iniciar meu primeiro teste',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '3 dicas para aproveitar ao máximo o AI Empire',
      preview: 'Conselhos para ir além.',
      body: `Olá [Nome],

ontem você criou sua conta. Hoje, aqui vão 3 dicas para ir além:

Dica 1: Explore as templates
Nossas templates são projetadas para uso imediato. Comece com o NeuraBlog (R$190) ou NeuraStore (R$290).

Dica 2: Use as APIs de IA
Gere conteúdos, analise textos, crie um chatbot. As APIs são gratuitas até esgotar seus 100 créditos.

Dica 3: Integre no seu projeto
Nossos tutoriais mostram como integrar o AI Empire em um projeto Next.js em 5 minutos.

Tutoriais: https://ai-empire-steel.vercel.app/docs

Boa exploração!
A equipe do AI Empire`,
      cta: 'Ver tutoriais',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: 'A template perfeita para o seu projeto',
      preview: 'Descubra nossas templates adequadas à sua necessidade.',
      body: `Olá [Nome],

quer criar um SaaS? Esta é a template que você precisa:

E-commerce → NeuraStore (R$290)
Template de e-commerce Next.js 14 com carrinho, pagamentos Stripe, painel administrativo.

Blog → NeuraBlog (R$190)
Blog premium com SEO otimizado, sistema de comentários, newsletter integrada.

Portfólio → NeuraPortfolio (R$290)
Portfólio profissional com animações, formulários, modo escuro.

Pacote completo → 6 templates (R$2.990)
Todas as nossas templates + suporte prioritário + atualizações gratuitas.

Use o código WELCOME10 para 10% de desconto na sua primeira compra.

A equipe do AI Empire`,
      cta: 'Descobrir templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: 'Como lançar um SaaS rapidamente com o AI Empire',
      preview: 'Construa seu projeto com nossas templates prontas para uso.',
      body: `Olá [Nome],

lançar um SaaS não requer mais meses de desenvolvimento.

Com o AI Empire, aqui está o que você pode alcançar:
- Um site de e-commerce completo em 24 horas com a NeuraStore (R$290)
- Stripe já integrado e pronto para aceitar pagamentos
- Implantar na Vercel em poucos cliques
- Painel administrativo incluído na template

A NeuraStore inclui:
- Carrinho de compras funcional
- Gestão de produtos e estoque
- Pagamentos seguros via Stripe
- Interface de administração completa
- Design responsivo e modo escuro

Comece escolhendo a template que se adapta ao seu projeto.

A equipe do AI Empire`,
      cta: 'Ver templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '20% de desconto na sua primeira template',
      preview: 'Uma oferta de boas-vindas para você.',
      body: `Olá [Nome],

obrigado pela sua fidelidade! Aqui está um desconto de boas-vindas:
20% de desconto na sua primeira template.

Código: WELCOME20

Opções:
- NeuraBlog: R$190 → R$152
- NeuraStore: R$290 → R$232
- NeuraPortfolio: R$290 → R$232
- Pacote completo: R$2.990 → R$2.392

Agora é a hora de agir.

A equipe do AI Empire`,
      cta: 'Obter 20% de desconto',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: 'Sequência Nurture — 7 dias',
  type: 'nurture',
  duration: '7 dias',
  trigger: 'Usuário registrado mas ainda não comprou',
  goal: 'Converter o usuário gratuito em cliente pagante',
  emails: [
    {
      day: 0,
      subject: 'Aqui está o que você pode criar com o AI Empire',
      preview: 'Exemplos concretos para inspirá-lo.',
      body: `Olá [Nome],

você tem uma conta no AI Empire mas ainda não explorou tudo o que pode criar.

Aqui estão 5 projetos concretos:

1. Blog otimizado para SEO → NeuraBlog
2. E-commerce com Stripe → NeuraStore
3. Portfólio profissional → NeuraPortfolio
4. Chatbot de IA → Integre nossas APIs
5. SaaS completo → Pacote premium

Cada projeto é viável em 24 horas.

A equipe do AI Empire`,
      cta: 'Explorar projetos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: 'O erro #1 dos indie hackers',
      preview: 'Como evitar perder tempo.',
      body: `Olá [Nome],

o erro #1 dos indie hackers: desenvolver tudo do zero.

Você passa semanas programando:
- Autenticação (O AI Empire faz por você)
- Pagamentos (O Stripe já está integrado)
- Painel (Já está pronto)
- Design (As templates são profissionais)

Enquanto isso, seus concorrentes lançam seu produto.

O AI Empire economiza 6 meses de desenvolvimento.

A equipe do AI Empire`,
      cta: 'Ver templates',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: 'Milhares de desenvolvedores já usam o AI Empire',
      preview: 'Junte-se a uma comunidade em crescimento.',
      body: `Olá [Nome],

milhares de desenvolvedores já confiam no AI Empire.

Aqui está o que eles criaram:
- Dezenas de SaaS de e-commerce
- Blogs profissionais
- Portfólios criativos
- Chatbots de IA

E você? O que você vai criar?

A equipe do AI Empire`,
      cta: 'Juntar-se à comunidade',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: 'O ROI do AI Empire em números',
      preview: 'Números que falam por si mesmos.',
      body: `Olá [Nome],

aqui está o ROI real do AI Empire:

- Custo médio: R$500 (1 template + créditos de IA)
- Tempo economizado: 6 meses de desenvolvimento
- Um único cliente a R$500/mês basta para recuperar seu investimento

O resto? Lucro puro.

A equipe do AI Empire`,
      cta: 'Ver preços',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: 'Descubra a NeuraStore — A template de e-commerce',
      preview: 'Nossa template mais popular.',
      body: `Olá [Nome],

a NeuraStore é nossa template de e-commerce mais popular.

O que ela inclui:
- Carrinho de compras
- Pagamentos Stripe
- Gestão de produtos
- Painel administrativo
- Design responsivo
- Modo escuro

Preço: R$290 (em vez de R$5.000+ para um desenvolvedor)

A equipe do AI Empire`,
      cta: 'Descobrir NeuraStore',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: 'Como integrar o AI Empire em 5 minutos',
      preview: 'Um tutorial rápido para começar.',
      body: `Olá [Nome],

quer integrar o AI Empire no seu projeto? Veja como:

1. Instale a template
npx create-next-app@latest meu-saas --template ai-empire

2. Configure suas APIs
Copie sua chave de API para .env.local

3. Implante na Vercel
git push e seu site está no ar

Pronto! Em 5 minutos você tem seu SaaS.

A equipe do AI Empire`,
      cta: 'Ver tutorial',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: 'Oferta para early adopters: 30% de desconto nas templates',
      preview: 'Uma oferta para os primeiros usuários.',
      body: `Olá [Nome],

você está conosco há [NUMBER] dias.

Para agradecer, aqui está uma oferta:
30% de desconto em todas as templates.

Código: EARLY30

Opções:
- NeuraBlog: R$190 → R$133
- NeuraStore: R$290 → R$203
- NeuraPortfolio: R$290 → R$203
- Pacote completo: R$2.990 → R$2.093

A equipe do AI Empire`,
      cta: 'Obter 30% de desconto',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: 'Sequência Win-Back — Reativação',
  type: 'winback',
  duration: '21 dias',
  trigger: 'Usuário inativo por 30 dias',
  goal: 'Reativar o usuário inativo e retê-lo',
  emails: [
    {
      day: 0,
      subject: '[Nome], sentimos sua falta',
      preview: 'Temos novidades para você.',
      body: `Olá [Nome],

percebemos que você não usa o AI Empire há algum tempo.

Podemos ajudar?

- Precisa de um tutorial?
- Problema técnico?
- Funcionalidade faltante?

Estamos aqui por você. Responda a este email — lemos tudo.

A equipe do AI Empire`,
      cta: 'Voltar ao painel',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: 'Aqui está o que você perdeu no AI Empire',
      preview: 'Novidades que você vai adorar.',
      body: `Olá [Nome],

desde sua última visita, adicionamos:

- Novas templates (NeuraBlog, NeuraStore)
- APIs de IA aprimoradas (GPT-4, Groq, Gemini)
- Painel redesenhado
- Design otimizado

Você não perdeu nada — é a hora de voltar.

A equipe do AI Empire`,
      cta: 'Descobrir novidades',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '50 créditos gratuitos para voltar',
      preview: 'Um presente para dizer que pensamos em você.',
      body: `Olá [Nome],

para dizer que pensamos em você, aqui estão 50 créditos de IA gratuitos.

Seu saldo: +50 créditos
Válido por 30 dias

Use-os para:
- Gerar conteúdo
- Analisar texto
- Criar um chatbot
- Testar nossas APIs

A equipe do AI Empire`,
      cta: 'Receber meus créditos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: 'Seus créditos expiram em 16 dias',
      preview: 'Não esqueça de usá-los.',
      body: `Olá [Nome],

você tem 50 créditos gratuitos que expiram em 16 dias.

Expira em [DATE]

Use-os para:
- Criar seu primeiro projeto
- Testar nossas APIs
- Explorar o AI Empire

A equipe do AI Empire`,
      cta: 'Usar meus créditos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: 'Seus créditos expiram em breve',
      preview: 'Não esqueça de usá-los.',
      body: `Olá [Nome],

seus 50 créditos gratuitos expiram em 7 dias.

Expira em [DATE]

Depois disso, você perderá seus crédites.

Esta é sua última chance de usá-los.

A equipe do AI Empire`,
      cta: 'Usar meus créditos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: 'Sequência Upsell — Upgrade para o Plano Pro',
  type: 'upsell',
  duration: '14 dias',
  trigger: 'Usuário com mais de 100 chamadas API ou 30 dias de atividade',
  goal: 'Converter o usuário gratuito em cliente Pro',
  emails: [
    {
      day: 0,
      subject: '[Nome], você está prestes a atingir o limite',
      preview: 'Seu uso está aumentando — aqui está como escalar.',
      body: `Olá [Nome],

boas notícias: você está usando o AI Empire ativamente!

Aqui está seu uso atual:
- Chamadas API: [NUMBER]/100
- Créditos restantes: [NUMBER]
- Dias de atividade: [NUMBER]

Você está prestes a atingir o limite do plano gratuito.

O plano Pro dá a você:
- Chamadas API ilimitadas
- Acesso prioritário
- Suporte dedicado
- Templates premium

A equipe do AI Empire`,
      cta: 'Fazer upgrade para Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: 'O plano Pro: o que você está perdendo',
      preview: 'Funcionalidades exclusivas.',
      body: `Olá [Nome],

aqui está o que você está perdendo com o plano gratuito:

Plano Pro (R$490/mês):
- Chamadas API ilimitadas
- Acesso prioritário a novas funcionalidades
- Suporte dedicado (resposta em 2h)
- Templates premium (valor de R$990)
- Painel de analytics avançado
- API de webhook personalizada

A equipe do AI Empire`,
      cta: 'Descobrir o Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '20% de desconto no seu primeiro mês Pro',
      preview: 'Uma oferta para você.',
      body: `Olá [Nome],

para agradecer sua fidelidade, aqui está uma oferta:
20% de desconto no seu primeiro mês Pro.

Em vez de R$490/mês → R$392/mês

Código: PRO20

Upgrade para Pro:
- Chamadas API ilimitadas
- Suporte dedicado
- Templates premium
- Analytics avançados

A equipe do AI Empire`,
      cta: 'Ativar minha oferta',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: 'Como os usuários Pro otimizam seus custos',
      preview: 'Uma visão das vantagens do plano Pro.',
      body: `Olá [Nome],

aqui está como nossos usuários Pro otimizam seus custos:

Com o plano Pro (R$490/mês):
- Redução dos custos de IA graças a APIs otimizadas
- Ganhos de produtividade com templates premium
- Suporte dedicado para resolver problemas rapidamente
- Analytics avançados para acompanhar seu desempenho

O plano Pro é projetado para projetos sérios que precisam de mais poder.

A equipe do AI Empire`,
      cta: 'Fazer upgrade para Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '20% no plano Pro — Última oportunidade',
      preview: 'Não perca esta oferta.',
      body: `Olá [Nome],

sua oferta de 20% no plano Pro ainda está disponível.

R$392/mês em vez de R$490/mês

Upgrade para Pro:
- Chamadas API ilimitadas
- Suporte dedicado
- Templates premium
- Analytics avançados

Esta é uma boa oportunidade para testar o plano Pro a uma tarifa reduzida.

A equipe do AI Empire`,
      cta: 'Obter 20% de desconto',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: 'Obrigado [Nome] — Estamos aqui se você mudar de ideia',
      preview: 'Sem pressão. Estamos aqui por você.',
      body: `Olá [Nome],

entendemos que o plano Pro pode não ser para você neste momento.

Sem problema. Estamos aqui se você mudar de ideia.

Enquanto isso, você pode:
- Usar o plano gratuito (100 créditos/mês)
- Explorar as templates (a partir de R$190)
- Nos contatar se tiver dúvidas

Estamos aqui por você.

A equipe do AI Empire`,
      cta: 'Fale conosco',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
