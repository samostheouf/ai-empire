import { LandingContent } from './en'

export const landingContent: LandingContent = {
  hero: {
    headline: 'Crea prodotti SaaS più velocemente con Next.js 14 e AI',
    subheadline: 'Template pronti per la produzione con API Groq AI, fatturazione Stripe e autenticazione — costruiti per permetterti di concentrarti sul tuo prodotto, non sul codice boilerplate.',
    ctaText: 'Inizia gratis'
  },
  features: [
    {
      title: 'Template Next.js 14 App Router',
      description: 'Costruiti con gli ultimi pattern di Next.js. TypeScript, Tailwind CSS e componenti server pronti all\'uso.'
    },
    {
      title: 'Integrazione Groq AI API',
      description: 'Inferenza veloce powered by Groq. Include chat in streaming, completions strutturati e endpoint per l\'analisi di documenti.'
    },
    {
      title: 'Fatturazione Stripe pronta',
      description: 'Gestione abbonamenti, prezzi basati sull\'utilizzo, portale clienti e gestione webhook — tutto preconfigurato.'
    },
    {
      title: 'Autenticazione e ruoli',
      description: 'Autenticazione integrata con controllo degli accessi basato sui ruoli. Nessuna libreria di autenticazione di terze parti necessaria per i flussi base.'
    },
    {
      title: 'Dashboard amministrativa',
      description: 'Gestisci utenti, visualizza analytics e configura impostazioni attraverso un\'interfaccia amministrativa preconfigurata.'
    },
    {
      title: 'Tier gratuito disponibile',
      description: 'Inizia con 100 crediti API. Nessuna carta di credito richiesta. Aggiorna quando hai bisogno di più.'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Scegli un template',
      description: 'Scegli tra 6 template pronti per la produzione: SaaS starter, marketplace, dashboard, blog, portfolio o landing page.'
    },
    {
      step: 2,
      title: 'Personalizza il tuo prodotto',
      description: 'Aggiungi la tua logica di business, configura la tua chiave API Groq e imposta Stripe. Il boilerplate è già gestito.'
    },
    {
      step: 3,
      title: 'Distribuisci e lancia',
      description: 'Push su Vercel o la tua piattaforma preferita. Il tuo SaaS è pronto per gli utenti.'
    }
  ],
  faq: [
    {
      question: 'Cos\'è il tier gratuito?',
      answer: 'Il tier gratuito include 100 crediti API powered by Groq AI. Nessuna carta di credito richiesta. Puoi usare tutti i template e le funzionalità base senza pagare.'
    },
    {
      question: 'Ho bisogno delle mie chiavi API?',
      answer: 'Sì, serve una chiave API Groq (tier gratuito disponibile su groq.com) e un account Stripe per la fatturazione. AI Empire gestisce l\'integrazione — basta inserire le chiavi.'
    },
    {
      question: 'Posso usare questi template per progetti commerciali?',
      answer: 'Sì. Puoi usare i template AI Empire per progetti personali e commerciali. Sei proprietario del codice che costruisci su di essi.'
    },
    {
      question: 'Quali tecnologie vengono utilizzate?',
      answer: 'Next.js 14 (App Router), TypeScript, Tailwind CSS, Groq AI API per l\'inferenza, Stripe per i pagamenti e un sistema di autenticazione preconfigurato con controllo degli accessi basato sui ruoli.'
    },
    {
      question: 'C\'è una documentazione?',
      answer: 'Sì. Ogni template include istruzioni di configurazione, riferimenti API e commenti al codice. Forniamo anche guide per pattern di personalizzazione comuni.'
    },
    {
      question: 'In cosa si differenzia dagli altri template SaaS?',
      answer: 'AI Empire si concentra su codice funzionante piuttosto che su affermazioni di marketing. Ogni template è pronto per la produzione, include integrazione API AI e viene con documentazione onesta. Nessuna testimonianza falsa o statistiche gonfiate.'
    }
  ]
}
