import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'it',
  productDescriptionShort:
    'AI Empire è una piattaforma per sviluppatori che combina template professionali Next.js 14 con un\'API IA unificata (Groq e Gemini), fatturazione Stripe e autenticazione — permettendo agli sviluppatori di creare e distribuire prodotti SaaS potenziati dall\'IA più velocemente.',
  productDescriptionLong:
    'AI Empire fornisce un toolkit completo per la creazione di prodotti SaaS potenziati dall\'IA. La piattaforma offre template Next.js 14 pronti per la produzione — tra cui NeuraStore (e-commerce), NeuraBlog (pubblicazione di contenuti) e NeuraPortfolio (portfolio per sviluppatori) — ognuno con design responsive moderno, modalità scura e ottimizzazione SEO integrata.\n\nTutti i template si integrano con l\'API unificata di AI Empire, che fornisce accesso ai modelli Groq e Gemini attraverso un unico endpoint. La piattaforma include inoltre l\'integrazione con Stripe billing, l\'autenticazione e una dashboard amministrativa, riducendo la tipica tempistica di sviluppo SaaS da mesi a giorni.\n\nAI Empire serve sviluppatori, indie hacker, fondatori di startup e piccole e medie imprese che desiderano lanciare prodotti potenziati dall\'IA senza costruire l\'infrastruttura da zero. La piattaforma opera con un modello freemium: l\'API IA offre un tier gratuito con 100 crediti, e i template sono disponibili per l\'acquisto singolo (€19–€29) o come pacchetto completo (€299).',
  keyFeatures: [
    'API IA unificata — Accesso ai modelli Groq e Gemini attraverso un unico endpoint',
    'Template professionali Next.js 14 — NeuraStore, NeuraBlog, NeuraPortfolio e altri',
    'Integrazione Stripe billing — Pagamenti configurati pronti all\'uso',
    'Autenticazione inclusa — Gestione utenti senza configurazione di terze parti',
    'Dashboard amministrativa — Gestione utenti, analisi e contenuti',
    'Tier gratuito — 100 crediti API alla registrazione, senza carta di credito',
    'Design responsive — Template mobile-first con modalità scura',
    'Ottimizzazione SEO — Meta tag, dati strutturati e ottimizzazione delle prestazioni',
    'Pronto per Vercel — Deploy con un click per tutti i template',
    'SDK JavaScript e Python — Integrazione agevole per sviluppatori',
  ],
  pricingTable: [
    {
      name: 'Tier Gratuito',
      price: '€0',
      description: 'Inizi con le API IA senza costi',
      features: [
        '100 crediti API IA',
        'Accesso a Groq e Gemini',
        'REST API + SDK',
        'Supporto community',
        'Nessuna carta di credito richiesta',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '€19',
      description: 'Template blog professionale per Next.js 14',
      features: [
        'Supporto MDX',
        'Modalità scura',
        'Feed RSS',
        'Ottimizzazione SEO',
        'Integrazione newsletter',
        'Acquisto una tantum',
      ],
    },
    {
      name: 'NeuraStore',
      price: '€29',
      description: 'Template e-commerce completo per Next.js 14',
      features: [
        'Pagamenti Stripe',
        'Gestione carrello',
        'Dashboard amministrativa',
        'Raccomandazioni prodotto IA',
        'Design responsive',
        'Acquisto una tantum',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '€29',
      description: 'Template portfolio per sviluppatori per Next.js 14',
      features: [
        'Animazioni Framer Motion',
        'Modalità scura',
        'Modulo di contatto',
        'Design responsive',
        'Ottimizzazione SEO',
        'Acquisto una tantum',
      ],
    },
    {
      name: 'Pacchetto Completo',
      price: '€299',
      description: 'Tutti i template con supporto prioritario',
      features: [
        'Tutti i 6 template',
        'Supporto prioritario',
        'Aggiornamenti gratuiti',
        'Accesso anticipato ai nuovi template',
        'Licenza commerciale',
        'Risparmio di €400+ rispetto all\'acquisto singolo',
      ],
    },
  ],
  founderQuote: {
    text: 'Abbiamo creato AI Empire perché crediamo che ogni sviluppatore debba poter creare prodotti potenziati dall\'IA senza trascorrere mesi sull\'infrastruttura. I nostri template e la nostra API Le permettono di concentrarsi su ciò che conta — il Suo prodotto e i Suoi utenti.',
    attribution: 'Team di AI Empire',
    title: 'Fondatori di AI Empire',
  },
  logoUsage: {
    primaryUsage: 'Utilizzi il logo AI Empire su sfondo bianco o scuro con contrasto sufficiente.',
    clearSpace: 'Mantenga uno spazio libero minimo pari all\'altezza della "A" del logo su tutti i lati.',
    minimumSize: 'Il logo non deve essere riprodotto a meno di 120px di larghezza (digitale) o 30mm (stampato).',
    donts: [
      'Non distenda, ruoti o distorca il logo',
      'Non cambi i colori del logo',
      'Non posizioni il logo su sfondi affollati senza un contenitore',
      'Non aggiunga effetti quali ombre, bagliori o gradienti al logo',
      'Non riorganizzi o modifichi gli elementi del logo',
    ],
  },
  contactInfo: {
    press: 'press@ai-empire.dev',
    partnerships: 'partners@ai-empire.dev',
    general: 'hello@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'AI Empire è una piattaforma per sviluppatori che fornisce template professionali Next.js 14 con API IA integrate (Groq e Gemini), fatturazione Stripe e autenticazione. Fondata per aiutare gli sviluppatori a creare prodotti SaaS potenziati dall\'IA più velocemente, AI Empire serve sviluppatori, indie hacker e fondatori di startup in tutto il mondo. La piattaforma offre un tier API gratuito e template a partire da €19. Per maggiori informazioni, visiti ai-empire-steel.vercel.app.',
};
