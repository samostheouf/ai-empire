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
// CALENDARIO MENSILE
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: 'Calendario Mensile — AI Empire',
  period: 'Marzo 2025',
  type: 'monthly',
  posts: [
    // SETTIMANA 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 3 motivi per cui le startup italiane dovrebbero usare l\'IA subito:\n\n1. Ridurre i costi del 60%\n2. Automatizzare le attività ripetitive\n3. Distinguersi dalla concorrenza\n\n#AIEmpire #StartupItaly',
      hashtags: ['#AIEmpire', '#StartupItaly', '#IA'],
      cta: 'Scopri come'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'L\'IA non è più riservata ai giganti della FTSE MIB.\n\nEcco come le startup possono accedervi senza un grande budget:\n\n→ Template AI Empire (da €19)\n→ API IA gratuite (GPT-4, Groq)\n→ Integrazione in 5 minuti\n\nOltre 5.000 sviluppatori l\'hanno già fatto.\n\nE tu?\n\n#AIEmpire #IA #StartupItaly',
      hashtags: ['#AIEmpire', '#IA', '#StartupItaly']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutorial da 60 secondi:\n\nCome creare un blog IA in 5 minuti con AI Empire:\n\n1. Scegli NeuraBlog (€19)\n2. Installa con npx\n3. Configura le tue API\n4. Distribuisci su Vercel\n\nEcco fatto! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 Carousel: "5 template per lanciare il tuo SaaS nel 2025"\n\nSlide 1: NeuraBlog — Blog premium\nSlide 2: NeuraStore — E-commerce\nSlide 3: NeuraPortfolio — Portfolio\nSlide 4: Bundle completo — 6 template\nSlide 5: CTA — Inizia ora\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 Sondaggio: Quanto paghi per la tua API IA?\n\nA) €0-50/mese\nB) €50-200/mese\nC) €200+/mese\nD) Nessuna API IA ancora\n\n(Abbiamo una soluzione per ogni opzione 😏)\n\n#AIEmpire #IA',
      hashtags: ['#AIEmpire', '#IA']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Domanda del giorno:\n\nQual è la tua sfida più grande con l\'IA?\n\nA) Capire come usarla\nB) Trovare API affidabili\nC) Ridurre i costi\nD) Integrarla nel mio prodotto\n\nCondividi nei commenti! 👇',
      hashtags: ['#AIEmpire', '#IA', '#Community']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 Thread: "5 consigli per ridurre i costi del tuo SaaS con l\'IA"\n\n1/ Usa API gratuite (Groq, Gemini)\n2/ Integra AI Empire (template + API)\n3/ Automatizza il supporto con un chatbot IA\n4/ Genera contenuti con GPT-4\n5/ Analizza i tuoi dati con l\'IA\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Caso studio: Come InnoveTech ha ridotto i costi IA del 70%\n\nPrima di AI Empire:\n→ €3.000/mese per API di terze parti\n→ 3 mesi di sviluppo\n→ Supporto limitato\n\nDopo AI Empire:\n→ €900/mese (-70%)\n→ 24 ore di sviluppo\n→ Supporto 24/7\n\nRisultato: €25.000 risparmiati in 1 anno.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: 'Io: "Non userò l\'IA"\n\nAnche io: *aggiunge 47 funzionalità IA in 1 ora con AI Empire*\n\n😂\n\n#AIEmpire #DevLife #IA',
      hashtags: ['#AIEmpire', '#DevLife', '#IA']
    },
    // SETTIMANA 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 NOVITÀ: NeuraStore v2 è ONLINE!\n\n✅ Design rinnovato\n✅ Prestazioni x2\n✅ Nuove funzionalità e-commerce\n\nPrezzo: €29 (-40% per 72h)\n\nCodice: NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 Presentazione: NeuraStore v2\n\nIl template e-commerce più completo per Next.js 14:\n\n→ Carrello intelligente\n→ Pagamenti Stripe sicuri\n→ Dashboard admin professionale\n→ Design responsive + dark mode\n\nPrezzo: €29 (-40% lancio)\n\nOltre 5.000 sviluppatori ci fidano.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "Come ho lanciato un e-commerce in 24h con €0 di budget infrastruttura"\n\n1/ AI Empire mi ha fornito NeuraStore (€29)\n2/ Ho collegato Stripe in 5 minuti\n3/ Ho distribuito su Vercel in 3 minuti\n4/ Avevo il mio e-commerce in 24h\n5/ Costo totale: €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // SETTIMANA 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 Riepilogo del mese:\n\n✅ 500+ nuovi utenti\n✅ 100+ template venduti\n✅ 98% soddisfazione clienti\n\nGrazie alla community! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "Ho lasciato il mio lavoro per creare AI Empire. Ecco perché."\n\nIl mercato italiano ha bisogno di un\'alternativa locale alle API IA americane.\n\nAI Empire è quell\'alternativa:\n→ Fatto in Italia\n→ Supporto in italiano\n→ Fatturazione EUR\n→ GDPR nativo\n\nOltre 5.000 sviluppatori ci fidano.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // SETTIMANA 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 Qualcosa di grande sta arrivando...\n\n📅 [DATA]\n🎁 [INDIZIO]\n\nResta connesso.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 Ultimo giorno per approfittare dell\'offerta di lancio!\n\n-30% su tutti i template\nCodice: LAUNCH30\n⏰ Scade a mezzanotte\n\nNon perdertela!\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #UltimaOccasione',
      hashtags: ['#AIEmpire', '#UltimaOccasione']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// ORARIO SETTIMANALE
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: 'Orario Settimanale — AI Empire',
  period: 'Settimana tipo',
  type: 'weekly',
  posts: [
    // LUNEDÌ
    {
      date: 'Lunedì',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 Motivazione del lunedì: Un consiglio IA per aumentare la tua produttività\n\n[CONSIGLIO DEL GIORNO]\n\n#AIEmpire #MotivazioneDelLunedì',
      hashtags: ['#AIEmpire', '#MotivazioneDelLunedì']
    },
    {
      date: 'Lunedì',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [ARGOMENTO THOUGHT LEADERSHIP]\n\n[CONTENUTO PROFESSIONALE]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // MARTEDÌ
    {
      date: 'Martedì',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutorial rapido: [Argomento]\n\n1. Passo 1\n2. Passo 2\n3. Passo 3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: 'Martedì',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 Reel da 30s: "Come [AZIONE] con AI Empire"\n\n[DEMO]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // MERCOLEDÌ
    {
      date: 'Mercoledì',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [CONTENUTO DI VALORE]\n\n[CONSIGLIO O SUGGERIMENTO]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: 'Mercoledì',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Caso studio: [CLIENTE]\n\nPrima: [SITUAZIONE]\nDopo: [RISULTATO]\n\n[LEZIONI APPRESE]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: 'Mercoledì',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 Video di 2min: "Come [Argomento] con AI Empire"\n\n[TUTORIAL VIDEO]\n\n#AIEmpire #Video',
      hashtags: ['#AIEmpire', '#Video']
    },
    // GIOVEDÌ
    {
      date: 'Giovedì',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "[Argomento]"\n\n1/ [Punto 1]\n2/ [Punto 2]\n3/ [Punto 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: 'Giovedì',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [DATI O STATISTICHE]\n\n[ANALISI]\n\n[IMPLICAZIONI]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // VENERDÌ
    {
      date: 'Venerdì',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [TESTIMONIANZA CLIENTE]\n\n"Come AI Empire [BENEFICIO]"\n\n[PROVA SOCIALE]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: 'Venerdì',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 Riepilogo della settimana:\n\n✅ [RISULTATO 1]\n✅ [RISULTATO 2]\n✅ [RISULTATO 3]\n\nProssima settimana: [ANTEPRIMA]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // SABATO
    {
      date: 'Sabato',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 Story: "Un giorno nella vita di un indie hacker"\n\n[DIETRO LE QUINTE]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // DOMENICA
    {
      date: 'Domenica',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Domenica domanda:\n\nCosa creerai questa settimana?\n\nCondividi nei commenti! 👇\n\n#AIEmpire #Community',
      hashtags: ['#AIEmpire', '#Community']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// CALENDARIO FESTIVITÀ
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'San Valentino',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 San Valentino si avvicina...\n\nQualcosa di speciale sta arrivando per gli sviluppatori...\n\n#AIEmpire #SanValentino',
        hashtags: ['#AIEmpire', '#SanValentino']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 Offerta San Valentino di AI Empire:\n\n-20% su tutti i template con codice AMOUR20\n\nPerché il regalo migliore è un SaaS che funziona ❤️\n\n⏰ Solo 24 ore\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #SanValentino',
        hashtags: ['#AIEmpire', '#SanValentino']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "L\'amore è trovare qualcuno che condivide la tua passione... per il codice."\n\n— Un sviluppatore solitario\n\nBuon San Valentino a tutti gli sviluppatori!\n\n#AIEmpire #SanValentino #DevLife',
        hashtags: ['#AIEmpire', '#SanValentino', '#DevLife']
      }
    ]
  },
  {
    name: 'Festa del Lavoro',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 Il 1° maggio si avvicina...\n\nPronto a lavorare... meno? 🤔\n\n#AIEmpire #FestaDelLavoro',
        hashtags: ['#AIEmpire', '#FestaDelLavoro']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 Buona Festa del Lavoro!\n\nOggi celebriamo gli sviluppatori che costruiscono il futuro.\n\nGrazie a tutti i nostri oltre 5.000 utenti! 🙏\n\n#AIEmpire #FestaDelLavoro #DevLife',
        hashtags: ['#AIEmpire', '#FestaDelLavoro', '#DevLife']
      }
    ]
  },
  {
    name: 'Fête de la Musique',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 La Fête de la Musique si avvicina...\n\nE se facessimo musica... con il codice? 🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 Buona Fête de la Musique!\n\nLa nostra playlist del giorno:\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — La nostra immaginazione\n3. "Il suono del codice che compila" — Tutti gli sviluppatori\n\n🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      }
    ]
  },
  {
    name: 'Festa Nazionale',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 La Festa Nazionale si avvicina...\n\nE abbiamo qualcosa di speciale per celebrare la tech italiana! 🇮🇹\n\n#AIEmpire #FestaNazionale',
        hashtags: ['#AIEmpire', '#FestaNazionale']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 Buona Festa Nazionale!\n\nOggi celebriamo la tech italiana:\n→ Oltre 5.000 sviluppatori\n→ 200+ SaaS lanciati\n→ 100% made in Italy\n\nViva la tech italiana! 🇮🇹🚀\n\n#AIEmpire #FestaNazionale #ItalyTech',
        hashtags: ['#AIEmpire', '#FestaNazionale', '#ItalyTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 Festa Nazionale: È ora della tech italiana!\n\nAI Empire è orgogliosa di rappresentare l\'innovazione italiana:\n→ Oltre 5.000 sviluppatori\n→ 200+ SaaS lanciati\n→ Supporto in italiano\n→ Fatturazione EUR\n→ GDPR nativo\n\nViva la tech italiana! 🇮🇹\n\n#AIEmpire #FestaNazionale #ItalyTech',
        hashtags: ['#AIEmpire', '#FestaNazionale', '#ItalyTech']
      }
    ]
  },
  {
    name: 'Inizio dell\'anno scolastico',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 L\'inizio dell\'anno scolastico si avvicina...\n\nE se imparassi qualcosa di nuovo?\n\nStiamo preparando qualcosa di speciale per te... 👀\n\n#AIEmpire #Rientro',
        hashtags: ['#AIEmpire', '#Rientro']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 Rientro 2025: Impara a creare il tuo SaaS!\n\nOfferta speciale rientro:\n-25% su tutti i template\nCodice: RENTREE25\n\n⏰ Dal 2 al 15 settembre\n\nPacchetto incluso:\n→ 6 template Next.js 14\n→ Tutorial completi\n→ Supporto prioritario\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Rientro',
        hashtags: ['#AIEmpire', '#Rientro']
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
        content: '🖤 Il Black Friday si avvicina...\n\nPreparati. È l\'offerta dell\'anno.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ 1 settimana al Black Friday di AI Empire!\n\n-50% SU TUTTO.\n\nSegna la data:\n📅 28 novembre\n\nIscriviti per ricevere notifiche:\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — È PARTITO! 🖤\n\n-50% SU TUTTO PER 5 GIORNI!\n\n📦 Template da €9,50 a €149,50\n📦 Piano Pro -50%\n📦 Primi 50 = template bonus GRATIS\n\nCodice: BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'Natale',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 Natale si avvicina...\n\nE abbiamo un regalo per te...\n\n🎁\n\n#AIEmpire #Natale',
        hashtags: ['#AIEmpire', '#Natale']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 5 giorni al Natale!\n\nIl nostro calendario dell\'avvento:\n→ 1 template gratuito al giorno\n→ Codici promozionali esclusivi\n→ Contenuti a sorpresa\n\nUnisciti a noi!\n\n#AIEmpire #Natale #CalendarioDellAvvento',
        hashtags: ['#AIEmpire', '#Natale', '#CalendarioDellAvvento']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 Buon Natale! 🎄\n\nGrazie a tutti i nostri oltre 5.000 utenti!\n\nRegalo: -30% su tutti i template\nCodice: NOEL2025\n\nBuone feste! 🎅\n\n#AIEmpire #Natale',
        hashtags: ['#AIEmpire', '#Natale']
      }
    ]
  },
  {
    name: 'Capodanno',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 Il 2025 si avvicina...\n\nPronto a lanciare il tuo SaaS?\n\nStiamo preparando qualcosa di speciale per te...\n\n#AIEmpire #Capodanno',
        hashtags: ['#AIEmpire', '#Capodanno']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 Buon Anno 2025! 🎆\n\nIl 2025 è IL TUO anno. L\'anno in cui lanci il tuo SaaS.\n\nOfferta di Capodanno:\n-25% + 500 crediti gratuiti\nCodice: NOUVELAN2025\n\nFai di questo anno il tuo anno!\n\n#AIEmpire #Capodanno #2025',
        hashtags: ['#AIEmpire', '#Capodanno', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 Nuovo anno, nuovo SaaS.\n\nIl 2025 è l\'anno in cui passi all\'azione.\n\nAI Empire è qui per supportarti:\n→ Template pronti all\'uso\n→ API IA gratuite\n→ Supporto 24/7\n\nUnisciti a oltre 5.000 sviluppatori che hanno già lanciato il loro SaaS.\n\nBuon Anno! 🎆\n\n#AIEmpire #Capodanno #2025',
        hashtags: ['#AIEmpire', '#Capodanno', '#2025']
      }
    ]
  }
]

// ============================================================
// FUNZIONI UTILITÀ
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
