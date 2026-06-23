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
// CALENDRIER MENSUEL
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: 'Calendrier Mensuel — AI Empire',
  period: 'Mars 2025',
  type: 'monthly',
  posts: [
    // SEMAINE 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 3 raisons pour lesquelles les startups françaises devraient utiliser l\'IA dès maintenant :\n\n1. Réduire les coûts de 60%\n2. Automatiser les tâches répétitives\n3. Se démarquer de la concurrence\n\n#AIEmpire #StartupFrance',
      hashtags: ['#AIEmpire', '#StartupFrance', '#IA'],
      cta: 'Découvrir comment'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'L\'IA n\'est plus réservée aux géants du CAC40.\n\nVoici comment les startups françaises peuvent y accéder sans budget conséquent :\n\n→ Templates AI Empire (à partir de €19)\n→ APIs IA gratuites (GPT-4, Groq)\n→ Intégration en 5 minutes\n\n5 000+ développeurs l\'ont déjà fait.\n\nEt vous ?\n\n#AIEmpire #IA #StartupFrance',
      hashtags: ['#AIEmpire', '#IA', '#StartupFrance']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutoriel 60 secondes :\n\nComment créer un blog IA en 5 minutes avec AI Empire :\n\n1. Choisis NeuraBlog (€19)\n2. Installe avec npx\n3. Configure tes APIs\n4. Déploie sur Vercel\n\nC\'est tout ! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 Carousel : "5 templates pour lancer ton SaaS en 2025"\n\nSlide 1 : NeuraBlog — Blog premium\nSlide 2 : NeuraStore — E-commerce\nSlide 3 : NeuraPortfolio — Portfolio\nSlide 4 : Bundle complet — 6 templates\nSlide 5 : CTA — Commence maintenant\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 Poll : Tu paies combien pour ton API IA ?\n\nA) €0-50/mois\nB) €50-200/mois\nC) €200+/mois\nD) Pas encore d\'API IA\n\n(On a une solution pour chaque option 😏)\n\n#AIEmpire #IA',
      hashtags: ['#AIEmpire', '#IA']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Question du jour :\n\nQuel est votre plus gros défi avec l\'IA ?\n\nA) Comprendre comment l\'utiliser\nB) Trouver des APIs fiables\nC) Réduire les coûts\nD) Intégrer dans mon produit\n\nPartagez en commentaire ! 👇',
      hashtags: ['#AIEmpire', '#IA', '#Communauté']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 Thread : "5 astuces pour réduire les coûts de ton SaaS avec l\'IA"\n\n1/ Utilise les APIs gratuites (Groq, Gemini)\n2/ Intègre AI Empire (templates + APIs)\n3/ Automatise le support avec un chatbot IA\n4/ Génère du contenu avec GPT-4\n5/ Analyse tes données avec l\'IA\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Étude de cas : Comment InnoveTech a réduit ses coûts IA de 70%\n\nAvant AI Empire :\n→ €3 000/mois en APIs tierces\n→ 3 mois de développement\n→ Support limité\n\nAprès AI Empire :\n→ €900/mois (-70%)\n→ 24h de développement\n→ Support 24/7\n\nRésultat : €25 000 économisés en 1 an.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: 'Moi : "Je vais pas utiliser l\'IA"\n\nAussi moi : *ajoute 47 features AI en 1h avec AI Empire*\n\n😂\n\n#AIEmpire #DevLife #IA',
      hashtags: ['#AIEmpire', '#DevLife', '#IA']
    },
    // SEMAINE 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 NOUVEAU : NeuraStore v2 est LIVE !\n\n✅ Design refondu\n✅ Performance x2\n✅ Nouvelles features e-commerce\n\nPrix : €29 (-40% pendant 72h)\n\nCode : NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 Présentation : NeuraStore v2\n\nLe template e-commerce le plus complet pour Next.js 14 :\n\n→ Panier d\'achat intelligent\n→ Paiements Stripe sécurisés\n→ Dashboard admin professionnel\n→ Design responsive + dark mode\n\nPrix : €29 (-40% lancement)\n\n5 000+ développeurs nous font confiance.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread : "Comment j\'ai lancé un e-commerce en 24h avec €0 de budget infra"\n\n1/ AI Empire m\'a fourni NeuraStore (€29)\n2/ J\'ai connecté Stripe en 5 minutes\n3/ J\'ai déployé sur Vercel en 3 minutes\n4/ J\'avais mon e-commerce en 24h\n5/ Coût total : €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // SEMAINE 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 Bilan du mois :\n\n✅ 500+ nouveaux utilisateurs\n✅ 100+ templates vendus\n✅ 98% de satisfaction client\n\nMerci à la communauté ! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "J\'ai quitté mon emploi pour construire AI Empire. Voici pourquoi."\n\nLe marché français a besoin d\'une alternative locale aux APIs IA américaines.\n\nAI Empire est cette alternative :\n→ French-first\n→ Support en français\n→ Facturation EUR\n→ RGPD natif\n\n5 000+ développeurs nous font confiance.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // SEMAINE 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 Quelque chose de grand arrive...\n\n📅 [DATE]\n🎁 [INDICE]\n\nReste connecté.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 Dernier jour pour profiter de l\'offre de lancement !\n\n-30% sur tous les templates\nCode : LAUNCH30\n⏰ Expire à minuit\n\nNe rate pas ça !\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #DernièreChance',
      hashtags: ['#AIEmpire', '#DernièreChance']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// PLANNING HEBDOMADAIRE
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: 'Planning Hebdomadaire — AI Empire',
  period: 'Semaine type',
  type: 'weekly',
  posts: [
    // LUNDI
    {
      date: 'Lundi',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 Lundi motivation : Une astuce IA pour booster ta productivité\n\n[ASTUCE DU JOUR]\n\n#AIEmpire #LundiMotivation',
      hashtags: ['#AIEmpire', '#LundiMotivation']
    },
    {
      date: 'Lundi',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [SUJET THOUGHT LEADERSHIP]\n\n[CONTENU PROFESSIONNEL]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // MARDI
    {
      date: 'Mardi',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutoriel rapide : [Sujet]\n\n1. Étape 1\n2. Étape 2\n3. Étape 3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: 'Mardi',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 Reel 30s : "Comment [ACTION] avec AI Empire"\n\n[DEMONSTRATION]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // MERCREDI
    {
      date: 'Mercredi',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [CONTENU DE VALEUR]\n\n[ASTUCE OU CONSEIL]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: 'Mercredi',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Étude de cas : [CLIENT]\n\nAvant : [SITUATION]\nAprès : [RÉSULTAT]\n\n[LEÇONS APPRISES]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: 'Mercredi',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 Vidéo 2min : "Comment [Sujet] avec AI Empire"\n\n[TUTORIEL VIDÉO]\n\n#AIEmpire #Vidéo',
      hashtags: ['#AIEmpire', '#Vidéo']
    },
    // JEUDI
    {
      date: 'Jeudi',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Thread : "[Sujet]"\n\n1/ [Point 1]\n2/ [Point 2]\n3/ [Point 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: 'Jeudi',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [DONNÉES OU STATISTIQUES]\n\n[ANALYSE]\n\n[IMPLICATIONS]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // VENDREDI
    {
      date: 'Vendredi',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [TÉMOIGNAGE CLIENT]\n\n"Comment AI Empire a [BÉNÉFICE]"\n\n[PREUVE SOCIALE]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: 'Vendredi',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 Recap de la semaine :\n\n✅ [ACCOMPLISSEMENT 1]\n✅ [ACCOMPLISSEMENT 2]\n✅ [ACCOMPLISSEMENT 3]\n\nProchaine semaine : [PREVIEW]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // SAMEDI
    {
      date: 'Samedi',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 Story : "Un jour dans la vie d\'un indie hacker"\n\n[BEHIND THE SCENES]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // DIMANCHE
    {
      date: 'Dimanche',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Question du dimanche :\n\nQu\'est-ce que tu vas créer cette semaine ?\n\nPartage en commentaire ! 👇\n\n#AIEmpire #Communauté',
      hashtags: ['#AIEmpire', '#Communauté']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// CALENDRIER FÉRIÉ
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'Saint-Valentin',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 Saint-Valentin approche...\n\nQuelque chose de spécial arrive pour les développeurs...\n\n#AIEmpire #SaintValentin',
        hashtags: ['#AIEmpire', '#SaintValentin']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 Offre Saint-Valentin AI Empire :\n\n-20% sur tous les templates avec le code AMOUR20\n\nParce que le meilleur cadeau, c\'est un SaaS qui fonctionne ❤️\n\n⏰ 24h seulement\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #SaintValentin',
        hashtags: ['#AIEmpire', '#SaintValentin']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "L\'amour, c\'est trouver quelqu\'un qui partage ta passion... pour le code."\n\n— Un développeur solitaire\n\nBonne Saint-Valentin à tous les devs !\n\n#AIEmpire #SaintValentin #DevLife',
        hashtags: ['#AIEmpire', '#SaintValentin', '#DevLife']
      }
    ]
  },
  {
    name: 'Fête du Travail',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 1er mai approche...\n\nPrêt à travailler... moins ? 🤔\n\n#AIEmpire #FêteDuTravail',
        hashtags: ['#AIEmpire', '#FêteDuTravail']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 Bonne fête du travail !\n\nAujourd\'hui, on fête les développeurs qui construisent l\'avenir.\n\nMerci à tous nos 5 000+ utilisateurs ! 🙏\n\n#AIEmpire #FêteDuTravail #DevLife',
        hashtags: ['#AIEmpire', '#FêteDuTravail', '#DevLife']
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
        content: '🎵 La Fête de la Musique approche...\n\nEt si on faisait de la musique... avec du code ? 🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 Bonne Fête de la Musique !\n\nNotre playlist du jour :\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — Notre imagination\n3. "Le son du code qui compile" — Tous les devs\n\n🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      }
    ]
  },
  {
    name: 'Fête Nationale',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 14 juillet approche...\n\nEt on a quelque chose de spécial pour célébrer la France tech ! 🇫🇷\n\n#AIEmpire #FêteNationale',
        hashtags: ['#AIEmpire', '#FêteNationale']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 Bonne fête nationale !\n\nAujourd\'hui, on célèbre la France tech :\n→ 5 000+ développeurs\n→ 200+ SaaS lancés\n→ 100% made in France\n\nVive la France tech ! 🇫🇷🚀\n\n#AIEmpire #FêteNationale #FranceTech',
        hashtags: ['#AIEmpire', '#FêteNationale', '#FranceTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 Fête nationale : L\'heure de la France tech !\n\nAI Empire est fier de représenter l\'innovation française :\n→ 5 000+ développeurs\n→ 200+ SaaS lancés\n→ Support en français\n→ Facturation EUR\n→ RGPD natif\n\nVive la France tech ! 🇫🇷\n\n#AIEmpire #FêteNationale #FranceTech',
        hashtags: ['#AIEmpire', '#FêteNationale', '#FranceTech']
      }
    ]
  },
  {
    name: 'Rentrée Scolaire',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 La rentrée approche...\n\nEt si tu apprenais quelque chose de nouveau ?\n\nOn te prépare quelque chose de spécial... 👀\n\n#AIEmpire #Rentrée',
        hashtags: ['#AIEmpire', '#Rentrée']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 Rentrée 2025 : Apprends à créer ton SaaS !\n\nOffre spéciale rentrée :\n-25% sur tous les templates\nCode : RENTREE25\n\n⏰ Du 2 au 15 septembre\n\nPackage inclus :\n→ 6 templates Next.js 14\n→ Tutoriels complets\n→ Support prioritaire\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Rentrée',
        hashtags: ['#AIEmpire', '#Rentrée']
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
        content: '🖤 Black Friday approche...\n\nPrépare-toi. C\'est la promo de l\'année.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ 1 semaine avant le Black Friday AI Empire !\n\n-50% SUR TOUT.\n\nMarque ta date :\n📅 28 novembre\n\nInscris-toi pour être notifié :\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — C\'EST PARTI ! 🖤\n\n-50% SUR TOUT PENDANT 5 JOURS !\n\n📦 Templates de €9.50 à €149.50\n📦 Plan Pro -50%\n📦 50 premiers = template bonus GRATUIT\n\nCode : BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'Noël',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 Noël approche...\n\nEt on a un cadeau pour toi...\n\n🎁\n\n#AIEmpire #Noël',
        hashtags: ['#AIEmpire', '#Noël']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 5 jours avant Noël !\n\nNotre calendrier de l\'avent :\n→ 1 template gratuit chaque jour\n→ Codes promo exclusifs\n→ Contenu surprise\n\nRejoins-nous !\n\n#AIEmpire #Noël #CalendrierAvent',
        hashtags: ['#AIEmpire', '#Noël', '#CalendrierAvent']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 Joyeux Noël ! 🎄\n\nMerci à tous nos 5 000+ utilisateurs !\n\nEn cadeau : -30% sur tous les templates\nCode : NOEL2025\n\nBonne fête ! 🎅\n\n#AIEmpire #Noël',
        hashtags: ['#AIEmpire', '#Noël']
      }
    ]
  },
  {
    name: 'Nouvel An',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 2025 approche...\n\nPrêt à lancer ton SaaS ?\n\nOn te prépare quelque chose de spécial...\n\n#AIEmpire #NouvelAn',
        hashtags: ['#AIEmpire', '#NouvelAn']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 Bonne année 2025 ! 🎆\n\n2025, c\'est TON année. L\'année où tu lances ton SaaS.\n\nOffre Nouvel An :\n-25% + 500 crédits gratuits\nCode : NOUVELAN2025\n\nFais de cette année la bonne année !\n\n#AIEmpire #NouvelAn #2025',
        hashtags: ['#AIEmpire', '#NouvelAn', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 Nouvel an, nouveau SaaS.\n\n2025, c\'est l\'année où tu passes à l\'action.\n\nAI Empire est là pour t\'accompagner :\n→ Templates prêts à l\'emploi\n→ APIs IA gratuites\n→ Support 24/7\n\nRejoins 5 000+ développeurs qui ont déjà lancé leur SaaS.\n\nBonne année ! 🎆\n\n#AIEmpire #NouvelAn #2025',
        hashtags: ['#AIEmpire', '#NouvelAn', '#2025']
      }
    ]
  }
]

// ============================================================
// FONCTIONS UTILITAIRES
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
