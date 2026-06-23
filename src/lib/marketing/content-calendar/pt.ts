export interface ContentCalendar {
  id: string
  name: string
  period: string
  type: 'monthly' | 'weekly' | 'holiday'
  posts: ContentPost[]
  metrics: ContentMetrics
}

export interface ContentPost {
  date: string
  time: string
  platform: string
  type: string
  content: string
  hashtags: string[]
  cta?: string
  url?: string
}

export interface ContentMetrics {
  totalPosts: number
  platforms: string[]
  avgPostsPerDay: number
}

export interface HolidayPlan {
  name: string
  date: string
  daysBefore: number
  content: ContentPost[]
}

// ============================================================
// CALENDÁRIO MENSAL
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: 'Calendário Mensal — AI Empire',
  period: 'Março 2025',
  type: 'monthly',
  posts: [
    // SEMANA 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 3 motivos pelos quais as startups brasileiras devem usar IA agora:\n\n1. Reduzir custos em 60%\n2. Automatizar tarefas repetitivas\n3. Se destacar da concorrência\n\n#AIEmpire #StartupBrasil',
      hashtags: ['#AIEmpire', '#StartupBrasil', '#IA'],
      cta: 'Saiba como'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'A IA não é mais reservada para os gigantes do Ibovespa.\n\nAssim as startups podem acessá-la sem um grande orçamento:\n\n→ Templates AI Empire (a partir de €19)\n→ APIs de IA gratuitas (GPT-4, Groq)\n→ Integração em 5 minutos\n\nMais de 5.000 desenvolvedores já fizeram isso.\n\nE você?\n\n#AIEmpire #IA #StartupBrasil',
      hashtags: ['#AIEmpire', '#IA', '#StartupBrasil']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutorial de 60 segundos:\n\nComo criar um blog com IA em 5 minutos com AI Empire:\n\n1. Escolha NeuraBlog (€19)\n2. Instale com npx\n3. Configure suas APIs\n4. Implante no Vercel\n\nPronto! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 Carrossel: "5 templates para lançar seu SaaS em 2025"\n\nSlide 1: NeuraBlog — Blog premium\nSlide 2: NeuraStore — E-commerce\nSlide 3: NeuraPortfolio — Portfólio\nSlide 4: Pacote completo — 6 templates\nSlide 5: CTA — Comece agora\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 Enquete: Quanto você paga pela sua API de IA?\n\nA) €0-50/mês\nB) €50-200/mês\nC) €200+/mês\nD) Ainda não tenho API de IA\n\n(Temos uma solução para cada opção 😏)\n\n#AIEmpire #IA',
      hashtags: ['#AIEmpire', '#IA']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Pergunta do dia:\n\nQual é seu maior desafio com IA?\n\nA) Entender como usar\nB) Encontrar APIs confiáveis\nC) Reduzir custos\nD) Integrar no meu produto\n\nCompartilhe nos comentários! 👇\n\n#AIEmpire #IA #Comunidade',
      hashtags: ['#AIEmpire', '#IA', '#Comunidade']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 Thread: "5 dicas para reduzir os custos do seu SaaS com IA"\n\n1/ Use APIs gratuitas (Groq, Gemini)\n2/ Integre AI Empire (templates + APIs)\n3/ Automatize o suporte com chatbot de IA\n4/ Gere conteúdo com GPT-4\n5/ Analise seus dados com IA\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Estudo de caso: Como a InnoveTech reduziu seus custos de IA em 70%\n\nAntes do AI Empire:\n→ €3.000/mês em APIs de terceiros\n→ 3 meses de desenvolvimento\n→ Suporte limitado\n\nDepois do AI Empire:\n→ €900/mês (-70%)\n→ 24 horas de desenvolvimento\n→ Suporte 24/7\n\nResultado: €25.000 economizados em 1 ano.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: 'Eu: "Não vou usar IA"\n\nTambém eu: *adiciona 47 funcionalidades de IA em 1h com AI Empire*\n\n😂\n\n#AIEmpire #DevLife #IA',
      hashtags: ['#AIEmpire', '#DevLife', '#IA']
    },
    // SEMANA 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 NOVIDADE: NeuraStore v2 está no AR!\n\n✅ Design renovado\n✅ Performance x2\n✅ Novas funcionalidades e-commerce\n\nPreço: €29 (-40% por 72h)\n\nCódigo: NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 Apresentação: NeuraStore v2\n\nO template e-commerce mais completo para Next.js 14:\n\n→ Carrinho inteligente\n→ Pagamentos Stripe seguros\n→ Dashboard admin profissional\n→ Design responsivo + dark mode\n\nPreço: €29 (-40% lançamento)\n\nMais de 5.000 desenvolvedores confiam em nós.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "Como lancei um e-commerce em 24h com €0 de orçamento de infraestrutura"\n\n1/ AI Empire me forneceu NeuraStore (€29)\n2/ Conectei Stripe em 5 minutos\n3/ Implantei no Vercel em 3 minutos\n4/ Tinha meu e-commerce em 24h\n5/ Custo total: €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // SEMANA 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 Resumo do mês:\n\n✅ 500+ novos usuários\n✅ 100+ templates vendidos\n✅ 98% de satisfação do cliente\n\nObrigado à comunidade! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "Deixei meu emprego para construir AI Empire. Eis o porquê."\n\nO mercado brasileiro precisa de uma alternativa local às APIs de IA americanas.\n\nAI Empire é essa alternativa:\n→ Foco brasileiro\n→ Suporte em português\n→ Cobrança em EUR\n→ LGPD nativa\n\nMais de 5.000 desenvolvedores confiam em nós.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // SEMANA 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 Algo grande está chegando...\n\n📅 [DATA]\n🎁 [DICA]\n\nFique ligado.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 Último dia para aproveitar a oferta de lançamento!\n\n-30% em todos os templates\nCódigo: LAUNCH30\n⏰ Expira à meia-noite\n\nNão perca!\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #ÚltimaChance',
      hashtags: ['#AIEmpire', '#ÚltimaChance']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// CRONOGRAMA SEMANAL
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: 'Cronograma Semanal — AI Empire',
  period: 'Semana típica',
  type: 'weekly',
  posts: [
    // SEGUNDA
    {
      date: 'Segunda',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 Motivação de segunda: Uma dica de IA para impulsionar sua produtividade\n\n[DICA DO DIA]\n\n#AIEmpire #MotivaçãoDeSegunda',
      hashtags: ['#AIEmpire', '#MotivaçãoDeSegunda']
    },
    {
      date: 'Segunda',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [TEMA DE LIDERANÇA]\n\n[CONTEÚDO PROFISSIONAL]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // TERÇA
    {
      date: 'Terça',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutorial rápido: [Assunto]\n\n1. Passo 1\n2. Passo 2\n3. Passo 3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: 'Terça',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 Reel 30s: "Como [AÇÃO] com AI Empire"\n\n[DEMONSTRAÇÃO]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // QUARTA
    {
      date: 'Quarta',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [CONTEÚDO DE VALOR]\n\n[DICA OU CONSELHO]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: 'Quarta',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Estudo de caso: [CLIENTE]\n\nAntes: [SITUAÇÃO]\nDepois: [RESULTADO]\n\n[LIÇÕES APRENDIDAS]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: 'Quarta',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 Vídeo 2min: "Como [Assunto] com AI Empire"\n\n[TUTORIAL EM VÍDEO]\n\n#AIEmpire #Vídeo',
      hashtags: ['#AIEmpire', '#Vídeo']
    },
    // QUINTA
    {
      date: 'Quinta',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "[Assunto]"\n\n1/ [Ponto 1]\n2/ [Ponto 2]\n3/ [Ponto 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: 'Quinta',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [DADOS OU ESTATÍSTICAS]\n\n[ANÁLISE]\n\n[IMPLICAÇÕES]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // SEXTA
    {
      date: 'Sexta',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [DEPOIMENTO DO CLIENTE]\n\n"Como AI Empire [BENEFÍCIO]"\n\n[PROVA SOCIAL]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: 'Sexta',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 Resumo da semana:\n\n✅ [CONQUISTA 1]\n✅ [CONQUISTA 2]\n✅ [CONQUISTA 3]\n\nPróxima semana: [VISÃO GERAL]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // SÁBADO
    {
      date: 'Sábado',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 Story: "Um dia na vida de um indie hacker"\n\n[NOS BASTIDORES]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // DOMINGO
    {
      date: 'Domingo',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Pergunta do domingo:\n\nO que você vai criar esta semana?\n\nCompartilhe nos comentários! 👇\n\n#AIEmpire #Comunidade',
      hashtags: ['#AIEmpire', '#Comunidade']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// CALENDÁRIO DE FERIADOS
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'Dia dos Namorados',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 O Dia dos Namorados está chegando...\n\nAlgo especial está vindo para os desenvolvedores...\n\n#AIEmpire #DiaDosNamorados',
        hashtags: ['#AIEmpire', '#DiaDosNamorados']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 Oferta de Dia dos Namorados da AI Empire:\n\n-20% em todos os templates com código AMOUR20\n\nPorque o melhor presente é um SaaS que funciona ❤️\n\n⏰ Apenas 24 horas\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #DiaDosNamorados',
        hashtags: ['#AIEmpire', '#DiaDosNamorados']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "Amor é encontrar alguém que compartilha sua paixão... pelo código."\n\n— Um desenvolvedor solitário\n\nFeliz Dia dos Namorados a todos os devs!\n\n#AIEmpire #DiaDosNamorados #DevLife',
        hashtags: ['#AIEmpire', '#DiaDosNamorados', '#DevLife']
      }
    ]
  },
  {
    name: 'Dia do Trabalho',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 O Dia do Trabalho está chegando...\n\nPronto para trabalhar... menos? 🤔\n\n#AIEmpire #DiaDoTrabalho',
        hashtags: ['#AIEmpire', '#DiaDoTrabalho']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 Feliz Dia do Trabalho!\n\nHoje, celebramos os desenvolvedores que constroem o futuro.\n\nObrigado a todos os nossos mais de 5.000 usuários! 🙏\n\n#AIEmpire #DiaDoTrabalho #DevLife',
        hashtags: ['#AIEmpire', '#DiaDoTrabalho', '#DevLife']
      }
    ]
  },
  {
    name: 'Festa da Música',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 A Festa da Música está chegando...\n\nE se fizéssemos música... com código? 🎶\n\n#AIEmpire #FestaDaMúsica',
        hashtags: ['#AIEmpire', '#FestaDaMúsica']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 Feliz Festa da Música!\n\nNossa playlist do dia:\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — Nossa imaginação\n3. "O som do código compilando" — Todos os devs\n\n🎶\n\n#AIEmpire #FestaDaMúsica',
        hashtags: ['#AIEmpire', '#FestaDaMúsica']
      }
    ]
  },
  {
    name: 'Feriado Nacional',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 O Feriado Nacional está chegando...\n\nE temos algo especial para celebrar a tech brasileira! 🇧🇷\n\n#AIEmpire #FeriadoNacional',
        hashtags: ['#AIEmpire', '#FeriadoNacional']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 Feliz Feriado Nacional!\n\nHoje, celebramos a tech brasileira:\n→ Mais de 5.000 desenvolvedores\n→ 200+ SaaS lançados\n→ 100% made in Brazil\n\nViva a tech brasileira! 🇧🇷🚀\n\n#AIEmpire #FeriadoNacional #BrazilTech',
        hashtags: ['#AIEmpire', '#FeriadoNacional', '#BrazilTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 Feriado Nacional: Hora da tech brasileira!\n\nAI Empire tem orgulho em representar a inovação brasileira:\n→ Mais de 5.000 desenvolvedores\n→ 200+ SaaS lançados\n→ Suporte em português\n→ Cobrança em EUR\n→ LGPD nativa\n\nViva a tech brasileira! 🇧🇷\n\n#AIEmpire #FeriadoNacional #BrazilTech',
        hashtags: ['#AIEmpire', '#FeriadoNacional', '#BrazilTech']
      }
    ]
  },
  {
    name: 'Volta às Aulas',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 A volta às aulas está chegando...\n\nE se você aprendesse algo novo?\n\nEstamos preparando algo especial para você... 👀\n\n#AIEmpire #VoltaÀsAulas',
        hashtags: ['#AIEmpire', '#VoltaÀsAulas']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 Volta às Aulas 2025: Aprenda a criar seu SaaS!\n\nOferta especial volta às aulas:\n-25% em todos os templates\nCódigo: RENTREE25\n\n⏰ De 2 a 15 de setembro\n\nPacote incluso:\n→ 6 templates Next.js 14\n→ Tutoriais completos\n→ Suporte prioritário\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #VoltaÀsAulas',
        hashtags: ['#AIEmpire', '#VoltaÀsAulas']
      }
    ]
  },
  {
    name: 'Black Friday',
    date: '28/11',
    daysBefore: 14,
    content: [
      {
        date: '14/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🖤 A Black Friday está chegando...\n\nPrepare-se. É a oferta do ano.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ 1 semana para a Black Friday da AI Empire!\n\n-50% EM TUDO.\n\nMarque a data:\n📅 28 de novembro\n\nInscreva-se para ser notificado:\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — COMEÇOU! 🖤\n\n-50% EM TUDO POR 5 DIAS!\n\n📦 Templates de €9.50 a €149.50\n📦 Plano Pro -50%\n📦 50 primeiros = template bônus GRÁTIS\n\nCódigo: BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'Natal',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 O Natal está chegando...\n\nE temos um presente para você...\n\n🎁\n\n#AIEmpire #Natal',
        hashtags: ['#AIEmpire', '#Natal']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 5 dias para o Natal!\n\nNosso calendário de Advento:\n→ 1 template grátis por dia\n→ Códigos promocionais exclusivos\n→ Conteúdo surpresa\n\nJunte-se a nós!\n\n#AIEmpire #Natal #CalendárioDeAdvento',
        hashtags: ['#AIEmpire', '#Natal', '#CalendárioDeAdvento']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 Feliz Natal! 🎄\n\nObrigado a todos os nossos mais de 5.000 usuários!\n\nPresente: -30% em todos os templates\nCódigo: NOEL2025\n\nFelizes festas! 🎅\n\n#AIEmpire #Natal',
        hashtags: ['#AIEmpire', '#Natal']
      }
    ]
  },
  {
    name: 'Ano Novo',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 2025 está chegando...\n\nPronto para lançar seu SaaS?\n\nEstamos preparando algo especial para você...\n\n#AIEmpire #AnoNovo',
        hashtags: ['#AIEmpire', '#AnoNovo']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 Feliz Ano Novo 2025! 🎆\n\n2025 é O SEU ano. O ano em que você lança seu SaaS.\n\nOferta de Ano Novo:\n-25% + 500 créditos grátis\nCódigo: NOUVELAN2025\n\nFaça deste o seu ano!\n\n#AIEmpire #AnoNovo #2025',
        hashtags: ['#AIEmpire', '#AnoNovo', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 Novo ano, novo SaaS.\n\n2025 é o ano em que você passa à ação.\n\nAI Empire está aqui para te apoiar:\n→ Templates prontos para uso\n→ APIs de IA gratuitas\n→ Suporte 24/7\n\nJunte-se a mais de 5.000 desenvolvedores que já lançaram seu SaaS.\n\nFeliz Ano Novo! 🎆\n\n#AIEmpire #AnoNovo #2025',
        hashtags: ['#AIEmpire', '#AnoNovo', '#2025']
      }
    ]
  }
]

// ============================================================
// FUNÇÕES UTILITÁRIAS
// ============================================================

export function getAllContentCalendars(): ContentCalendar[] {
  return [monthlyContentPlan, weeklyPostingSchedule]
}

export function getHolidayByName(name: string): HolidayPlan | undefined {
  return holidayContentPlan.find(h => h.name === name)
}

export function getHolidaysForMonth(month: number): HolidayPlan[] {
  return holidayContentPlan.filter(h => {
    const holidayMonth = parseInt(h.date.split('/')[1], 10)
    return holidayMonth === month
  })
}

export function generateCalendarId(): string {
  return `cal_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function getContentByPlatform(posts: ContentPost[], platform: string): ContentPost[] {
  return posts.filter(p => p.platform === platform)
}

export function getContentByDay(posts: ContentPost[], day: string): ContentPost[] {
  return posts.filter(p => p.date === day)
}

export function formatCalendarForExport(posts: ContentPost[]): string {
  return posts.map(p =>
    `${p.date} | ${p.time} | ${p.platform} | ${p.type} | ${p.content.substring(0, 50)}...`
  ).join('\n')
}
