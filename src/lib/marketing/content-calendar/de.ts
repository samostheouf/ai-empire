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
// MONATSKALENDER
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: 'Monatskalender — AI Empire',
  period: 'März 2025',
  type: 'monthly',
  posts: [
    // WOCHE 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 3 Gründe, warum deutsche Startups jetzt KI einsetzen sollten:\n\n1. Kosten um 60% senken\n2. Wiederkehrende Aufgaben automatisieren\n3. Sich von der Konkurrenz abheben\n\n#AIEmpire #StartupGermany',
      hashtags: ['#AIEmpire', '#StartupGermany', '#KI'],
      cta: 'Mehr erfahren'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'KI ist nicht mehr nur für die Riesen des DAX vorbehalten.\n\nSo können Startups darauf zugreifen, ohne ein großes Budget:\n\n→ AI Empire Templates (ab €19)\n→ Kostenlose KI-APIs (GPT-4, Groq)\n→ Integration in 5 Minuten\n\nÜber 5.000 Entwickler haben es bereits getan.\n\nUnd Sie?\n\n#AIEmpire #KI #StartupGermany',
      hashtags: ['#AIEmpire', '#KI', '#StartupGermany']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 60-Sekunden-Tutorial:\n\nSo erstellen Sie in 5 Minuten einen KI-Blog mit AI Empire:\n\n1. Wählen Sie NeuraBlog (€19)\n2. Installieren Sie mit npx\n3. Konfigurieren Sie Ihre APIs\n4. Deployen Sie auf Vercel\n\nDas war\'s! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 Karussell: "5 Templates, um 2025 Ihr SaaS zu starten"\n\nFolie 1: NeuraBlog — Premium-Blog\nFolie 2: NeuraStore — E-Commerce\nFolie 3: NeuraPortfolio — Portfolio\nFolie 4: Komplett-Paket — 6 Templates\nFolie 5: CTA — Jetzt starten\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 Umfrage: Wie viel zahlen Sie für Ihre KI-API?\n\nA) €0-50/Monat\nB) €50-200/Monat\nC) €200+/Monat\nD) Noch keine KI-API\n\n(Wir haben eine Lösung für jede Option 😏)\n\n#AIEmpire #KI',
      hashtags: ['#AIEmpire', '#KI']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Tagesfrage:\n\nWas ist Ihre größte Herausforderung mit KI?\n\nA) Verstehen, wie man sie einsetzt\nB) Zuverlässige APIs finden\nC) Kosten senken\nD) In mein Produkt integrieren\n\nTeilen Sie es in den Kommentaren! 👇',
      hashtags: ['#AIEmpire', '#KI', '#Community']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 Thread: "5 Tipps, um Ihre SaaS-Kosten mit KI zu senken"\n\n1/ Nutzen Sie kostenlose APIs (Groq, Gemini)\n2/ Integrieren Sie AI Empire (Templates + APIs)\n3/ Automatisieren Sie den Support mit einem KI-Chatbot\n4/ Generieren Sie Inhalte mit GPT-4\n5/ Analysieren Sie Ihre Daten mit KI\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Fallstudie: Wie InnoveTech seine KI-Kosten um 70% senkte\n\nVor AI Empire:\n→ €3.000/Monat für Drittanbieter-APIs\n→ 3 Monate Entwicklung\n→ Begrenzter Support\n\nNach AI Empire:\n→ €900/Monat (-70%)\n→ 24 Stunden Entwicklung\n→ 24/7 Support\n\nErgebnis: €25.000 gespart in 1 Jahr.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: 'Ich: "Ich werde keine KI benutzen"\n\nAuch ich: *fügt 47 KI-Features in 1 Stunde mit AI Empire hinzu*\n\n😂\n\n#AIEmpire #DevLife #KI',
      hashtags: ['#AIEmpire', '#DevLife', '#KI']
    },
    // WOCHE 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 NEU: NeuraStore v2 ist LIVE!\n\n✅ Neues Design\n✅ 2x Leistung\n✅ Neue E-Commerce-Features\n\nPreis: €29 (-40% für 72h)\n\nCode: NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 Vorstellung: NeuraStore v2\n\nDas umfassendste E-Commerce-Template für Next.js 14:\n\n→ Intelligenter Warenkorb\n→ Sichere Stripe-Zahlungen\n→ Professionelles Admin-Dashboard\n→ Responsives Design + Dark Mode\n\nPreis: €29 (-40% Launch-Rabatt)\n\nÜber 5.000 Entwickler vertrauen uns.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "So startete ich ein E-Commerce in 24h mit €0 Infrastruktur-Budget"\n\n1/ AI Empire lieferte NeuraStore (€29)\n2/ Ich verband Stripe in 5 Minuten\n3/ Ich deployte auf Vercel in 3 Minuten\n4/ Ich hatte mein E-Commerce in 24h\n5/ Gesamtkosten: €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // WOCHE 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 Monatsbilanz:\n\n✅ 500+ neue Nutzer\n✅ 100+ Templates verkauft\n✅ 98% Kundenzufriedenheit\n\nDanke an die Community! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "Ich habe meinen Job gekündigt, um AI Empire aufzubauen. Hier ist warum."\n\nDer deutsche Markt braucht eine lokale Alternative zu amerikanischen KI-APIs.\n\nAI Empire ist diese Alternative:\n→ Deutsch-first\n→ Support auf Deutsch\n→ Abrechnung in EUR\n→ DSGVO-konform\n\nÜber 5.000 Entwickler vertrauen uns.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // WOCHE 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 Irgendwas Großes kommt...\n\n📅 [DATUM]\n🎁 [HINWEIS]\n\nBleiben Sie dran.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 Letzter Tag, um das Launch-Angebot zu nutzen!\n\n-30% auf alle Templates\nCode: LAUNCH30\n⏰ Endet um Mitternacht\n\nVerpassen Sie es nicht!\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #LetzteChance',
      hashtags: ['#AIEmpire', '#LetzteChance']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// WÖCHENTLICHER ZEITPLAN
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: 'Wöchentlicher Zeitplan — AI Empire',
  period: 'Typische Woche',
  type: 'weekly',
  posts: [
    // MONTAG
    {
      date: 'Montag',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 Montagsmotivation: Ein KI-Tipp zur Steigerung Ihrer Produktivität\n\n[TIPP DES TAGES]\n\n#AIEmpire #Montagsmotivation',
      hashtags: ['#AIEmpire', '#Montagsmotivation']
    },
    {
      date: 'Montag',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [THOUGHT LEADERSHIP-THEMA]\n\n[PROFESSIONELLER INHALT]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // DIENSTAG
    {
      date: 'Dienstag',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Kurzes Tutorial: [Thema]\n\n1. Schritt 1\n2. Schritt 2\n3. Schritt 3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: 'Dienstag',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 30s Reel: "Wie man [AKTION] mit AI Empire macht"\n\n[DEMONSTRATION]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // MITTWOCH
    {
      date: 'Mittwoch',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [WERTVOLLER INHALT]\n\n[TIPPS ODER RATGEBER]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: 'Mittwoch',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Fallstudie: [KUNDE]\n\nVorher: [SITUATION]\nNachher: [ERGEBNIS]\n\n[ERKENNTNISSE]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: 'Mittwoch',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 2-Min-Video: "Wie man [Thema] mit AI Empire macht"\n\n[VIDEO-TUTORIAL]\n\n#AIEmpire #Video',
      hashtags: ['#AIEmpire', '#Video']
    },
    // DONNERSTAG
    {
      date: 'Donnerstag',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread: "[Thema]"\n\n1/ [Punkt 1]\n2/ [Punkt 2]\n3/ [Punkt 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: 'Donnerstag',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [DATEN ODER STATISTIKEN]\n\n[ANALYSE]\n\n[AUSWIRKUNGEN]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // FREITAG
    {
      date: 'Freitag',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [KUNDENBEWERTUNG]\n\n"Wie AI Empire [VORTEIL]"\n\n[SOZIALER BEWEIS]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: 'Freitag',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 Wochenrückblick:\n\n✅ [ERRUNGENSCHAFT 1]\n✅ [ERRUNGENSCHAFT 2]\n✅ [ERRUNGENSCHAFT 3]\n\nNächste Woche: [VORSCHAU]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // SAMSTAG
    {
      date: 'Samstag',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 Story: "Ein Tag im Leben eines Indie-Hackers"\n\n[HINTER DEN KULISSEN]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // SONNTAG
    {
      date: 'Sonntag',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Sonntagsfrage:\n\nWas werden Sie diese Woche bauen?\n\nTeilen Sie es in den Kommentaren! 👇\n\n#AIEmpire #Community',
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
// FEIERTAGSKALENDER
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'Valentinstag',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 Der Valentinstag naht...\n\nEtwas Besonderes kommt für Entwickler...\n\n#AIEmpire #Valentinstag',
        hashtags: ['#AIEmpire', '#Valentinstag']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 AI Empire Valentinstags-Angebot:\n\n-20% auf alle Templates mit Code AMOUR20\n\nWeil das beste Geschenk ein funktionierendes SaaS ist ❤️\n\n⏰ Nur 24 Stunden\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Valentinstag',
        hashtags: ['#AIEmpire', '#Valentinstag']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "Liebe ist, jemanden zu finden, der deine Leidenschaft teilt... für den Code."\n\n— Ein einsamer Entwickler\n\nAllen Devs einen schönen Valentinstag!\n\n#AIEmpire #Valentinstag #DevLife',
        hashtags: ['#AIEmpire', '#Valentinstag', '#DevLife']
      }
    ]
  },
  {
    name: 'Tag der Arbeit',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 Der 1. Mai naht...\n\nBereit zu arbeiten... weniger? 🤔\n\n#AIEmpire #TagDerArbeit',
        hashtags: ['#AIEmpire', '#TagDerArbeit']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 Frohen Tag der Arbeit!\n\nHeute feiern wir die Entwickler, die die Zukunft bauen.\n\nDanke an alle unsere über 5.000 Nutzer! 🙏\n\n#AIEmpire #TagDerArbeit #DevLife',
        hashtags: ['#AIEmpire', '#TagDerArbeit', '#DevLife']
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
        content: '🎵 Die Fête de la Musique naht...\n\nWas wäre, wenn wir Musik machen... mit Code? 🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 Frohe Fête de la Musique!\n\nUnsere Playlist des Tages:\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — Unsere Fantasie\n3. "Der Sound des kompilierenden Codes" — Alle Entwickler\n\n🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      }
    ]
  },
  {
    name: 'Nationalfeiertag',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 Der Nationalfeiertag naht...\n\nUnd wir haben etwas Besonderes, um die französische Tech zu feiern! 🇫🇷\n\n#AIEmpire #Nationalfeiertag',
        hashtags: ['#AIEmpire', '#Nationalfeiertag']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 Frohen Nationalfeiertag!\n\nHeute feiern wir die französische Tech:\n→ Über 5.000 Entwickler\n→ 200+ SaaS gestartet\n→ 100% made in France\n\nEs lebe die französische Tech! 🇫🇷🚀\n\n#AIEmpire #Nationalfeiertag #FranceTech',
        hashtags: ['#AIEmpire', '#Nationalfeiertag', '#FranceTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 Nationalfeiertag: Zeit für französische Tech!\n\nAI Empire ist stolz darauf, französische Innovation zu vertreten:\n→ Über 5.000 Entwickler\n→ 200+ SaaS gestartet\n→ Support auf Französisch\n→ Abrechnung in EUR\n→ DSGVO-konform\n\nEs lebe die französische Tech! 🇫🇷\n\n#AIEmpire #Nationalfeiertag #FranceTech',
        hashtags: ['#AIEmpire', '#Nationalfeiertag', '#FranceTech']
      }
    ]
  },
  {
    name: 'Schuljahresbeginn',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 Der Schuljahresbeginn naht...\n\nWas wäre, wenn Sie etwas Neues lernen würden?\n\nWir bereiten etwas Besonderes für Sie vor... 👀\n\n#AIEmpire #Schuljahresbeginn',
        hashtags: ['#AIEmpire', '#Schuljahresbeginn']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 Schuljahresbeginn 2025: Lernen Sie, Ihr SaaS zu erstellen!\n\nSpezielles Back-to-School-Angebot:\n-25% auf alle Templates\nCode: RENTREE25\n\n⏰ Vom 2. bis 15. September\n\nPaket beinhaltet:\n→ 6 Next.js 14 Templates\n→ Vollständige Tutorials\n→ Bevorzugter Support\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Schuljahresbeginn',
        hashtags: ['#AIEmpire', '#Schuljahresbeginn']
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
        content: '🖤 Der Black Friday naht...\n\nMachen Sie sich bereit. Es ist das Angebot des Jahres.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ 1 Woche bis zum AI Empire Black Friday!\n\n-50% AUF ALLES.\n\nMarkieren Sie sich den Termin:\n📅 28. November\n\nMelden Sie sich an, um benachrichtigt zu werden:\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — ES GEHT LOS! 🖤\n\n-50% AUF ALLES FÜR 5 TAGE!\n\n📦 Templates von €9,50 bis €149,50\n📦 Pro-Plan -50%\n📦 Erste 50 = KOSTENLOSES Bonus-Template\n\nCode: BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'Weihnachten',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 Weihnachten naht...\n\nUnd wir haben ein Geschenk für Sie...\n\n🎁\n\n#AIEmpire #Weihnachten',
        hashtags: ['#AIEmpire', '#Weihnachten']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 5 Tage bis Weihnachten!\n\nUnser Adventskalender:\n→ 1 kostenloses Template jeden Tag\n→ Exklusive Promo-Codes\n→ Überraschungsinhalte\n\nSchließen Sie sich uns an!\n\n#AIEmpire #Weihnachten #Adventskalender',
        hashtags: ['#AIEmpire', '#Weihnachten', '#Adventskalender']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 Frohe Weihnachten! 🎄\n\nDanke an alle unsere über 5.000 Nutzer!\n\nGeschenk: -30% auf alle Templates\nCode: NOEL2025\n\nFrohe Feiertage! 🎅\n\n#AIEmpire #Weihnachten',
        hashtags: ['#AIEmpire', '#Weihnachten']
      }
    ]
  },
  {
    name: 'Neujahr',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 2025 naht...\n\nBereit, Ihr SaaS zu starten?\n\nWir bereiten etwas Besonderes für Sie vor...\n\n#AIEmpire #Neujahr',
        hashtags: ['#AIEmpire', '#Neujahr']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 Frohes Neues Jahr 2025! 🎆\n\n2025 ist IHR Jahr. Das Jahr, in dem Sie Ihr SaaS starten.\n\nNeujahrs-Angebot:\n-25% + 500 kostenlose Credits\nCode: NOUVELAN2025\n\nMachen Sie dieses Jahr zu Ihrem Jahr!\n\n#AIEmpire #Neujahr #2025',
        hashtags: ['#AIEmpire', '#Neujahr', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 Neues Jahr, neues SaaS.\n\n2025 ist das Jahr, in dem Sie durchstarten.\n\nAI Empire unterstützt Sie:\n→ Fertige Templates\n→ Kostenlose KI-APIs\n→ 24/7 Support\n\nSchließen Sie sich über 5.000 Entwicklern an, die bereits ihr SaaS gestartet haben.\n\nFrohes Neues Jahr! 🎆\n\n#AIEmpire #Neujahr #2025',
        hashtags: ['#AIEmpire', '#Neujahr', '#2025']
      }
    ]
  }
]

// ============================================================
// HILFSFUNKTIONEN
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
