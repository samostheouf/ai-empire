export interface InfluencerTemplate {
  id: string;
  name: string;
  type: 'email' | 'dm';
  target: string;
  subject: string;
  body: string;
  cta: string;
}

export interface AffiliateProgram {
  name: string;
  commission: number;
  cookieDuration: number;
  benefits: string[];
  requirements: string[];
}

export const emailTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-email-01',
    name: 'Tech YouTuber FR',
    type: 'email',
    target: 'YouTube (10K-100K subscribers)',
    subject: '🤝 Sponsorship video — AI-Empire (API AI francese)',
    body: `Ciao {{first_name}},

Sono un fan del tuo contenuto su YouTube. I tuoi tutorial sull'AI mi hanno ispirato a creare AI-Empire.

Ti propongo uno sponsorship per un video sul tuo canale.

**Concept:** "Ho testato un'API AI gratuita — ecco cosa ho costruito"

**Formato:**
- 8-12 minuti di video
- Demo live di AI-Empire
- Costruzione di un mini-progetto in tempo reale
- Menzione del tuo link di affiliazione

**Compenso:**
- €200-500 in base al tuo pubblico
- 20% di commissione su ogni vendita tramite il tuo link
- Template gratuiti (valore €49)

**Pubblico target:** Sviluppatori francesi, 18-35 anni, interessati all'AI

Ti interessa? Possiamo adattare il formato al tuo stilo.

Rispondi a questa email o scrivimi un DM su Twitter @[handle].

Cordiali saluti,
[Il tuo nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Rispondi alla email',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 Partnership contenuti — AI-Empire x il tuo personal brand',
    body: `Ciao {{first_name}},

Ti propongo una partnership per rafforzare il tuo personal brand su LinkedIn.

**Proposta:**
1. **Articolo LinkedIn:** "Come ho integrato l'AI nel mio SaaS per €0"
2. **Template NeuraBlog:** Gratuito per la tua community (valore €49)
3. **Revenue share:** 25% su ogni vendita tramite il tuo link
4. **Visibilità:** Ti menzioniamo nella nostra newsletter in crescita

**Perché è interessante:**
- Scrivi 1 post, guadagni reddito passivo + visibilità
- Offri valore alla tua community
- Ti posizioni come esperto di AI

Scrivi 1 post, guadagni reddito passivo + visibilità.

Interessato? Facciamo una chiamata di 10 minuti?

Cordiali saluti,
[Il tuo nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Prenota una chiamata di 10 min',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Collab Twitter — AI-Empire x il tuo account tech',
    body: `Ciao {{first_name}},

Vedo che condividi contenuti tech di qualità su Twitter. Mi piacerebbe collaborare.

**Proposta:**
1. **Giveaway:** 5 template premium per la tua community
2. **Thread co-scritto:** "Lo stato dell'AI per gli sviluppatori nel 2025"
3. **Commissione:** 30% sulle vendite tramite il tuo link
4. **Feedback:** Tu influenzi la nostra roadmap prodotto

**Formato:** 1 thread + 3 tweet in 2 settimane.
**Budget:** €100-300 + template gratuiti.

Ti interessa?

Cordiali saluti,
[Il tuo nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Rispondi alla email',
  },
  {
    id: 'inf-email-04',
    name: 'Agenzia Web',
    type: 'email',
    target: 'Agenzie web (5-20 dipendenti)',
    subject: '🏢 Partnership agenzia — I tuoi clienti vogliono AI, noi possiamo fornirla',
    body: `Gentile {{first_name}},

Vedo che {{agency_name}} lavora con clienti e-commerce/SaaS che richiedono sempre più funzionalità AI.

**Problema:** Integrare l'AI è costoso e richiede tempo.

**Soluzione:** AI-Empire ti dà accesso a un'API AI pronta all'uso.
- Integrazione in 5 minuti
- Tariffazione a uso (nessun abbonamento minimo)
- Supporto tecnico in italiano

**Per la tua agenzia:**
- Dashboard multi-cliente
- 15% di commissione su ogni cliente
- Template premium inclusi (valore €49-199)
- Formazione gratuita per il tuo team

Vuoi parlarne? 15 minuti questa settimana?

Cordiali saluti,
[Il tuo nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Prenota una chiamata',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (strumento complementare)',
    subject: '🔗 Partnership AI-Empire x {{company}} — Completa la tua offerta AI',
    body: `Gentile {{first_name}},

Sono [Il tuo nome], fondatore di AI-Empire, la piattaforma AI API francese per startup.

Ti contatto perché {{company}} e AI-Empire condividono lo stesso pubblico target: startup francesi che vogliono integrare l'AI senza un budget significativo.

**Proposta di partnership:**

1. **Integrazione nativa:** Integra AI-Empire nella tua piattaforma (widget/API)
2. **Commissioni:** 20% ricorrente su ogni cliente referenziato
3. **Co-marketing:** Articolo congiunto sul blog + webinar
4. **Esclusività:** Offerta speciale per i tuoi utenti (-25%)

**Perché funziona:**
- I tuoi clienti hanno bisogno di AI, noi forniamo l'API
- Tu ottieni una fonte di reddito ricorrente
- Noi otteniamo distribuzione

Pronto a parlarne? 15 minuti questa settimana?

Cordiali saluti,
[Il tuo nome]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Prenota una chiamata',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `Ciao {{first_name}}! 👋

Adoro il tuo contenuto sull'AI. Ho creato AI-Empire, un'API AI francese per startup.

Proposta rapida:
- Template gratuiti per la tua community
- 30% di commissione sulle vendite
- Thread co-scritto

Ti interessa? Parliamo in DM?`,
    cta: 'Rispondi al DM',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `Ciao {{first_name}},

Vedo che condividi contenuti tech di qualità. Mi piacerebbe collaborare.

AI-Empire è una piattaforma AI francese per startup. Cerchiamo partner per co-creare contenuti.

Proposta:
- Articolo LinkedIn co-scritto
- Template gratuito per la tua community
- 25% di revenue share

10 minuti di chiamata questa settimana?`,
    cta: 'Prenota una chiamata',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `Hey {{first_name}}! 👋

Vedo che sei attivo nei server dev francesi. Mi piacerebbe proporti una partnership.

AI-Empire = API AI gratuita per startup francesi.

Offerta per te:
- Template premium gratuiti
- 30% di commissione sulle vendite
- Accesso beta alle nuove funzionalità

Ti interessa?`,
    cta: 'Rispondi al DM',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `Ciao {{first_name}}! 🔥

Adoro il tuo contenuto tech su Instagram. Ho una proposta per te.

AI-Empire è un'API AI francese. Cerchiamo creator per:
- Reel demo (template gratuiti inclusi)
- 25% di commissione sulle vendite
- Co-branding sui template

Ti va? Parliamo in DM!`,
    cta: 'Rispondi al DM',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `Ciao {{first_name}}! 👋

Adoro il tuo canale YouTube. I tuoi tutorial sull'AI sono fantastici.

Proposta di collab:
- Sponsorship video (€200-500)
- 20% di commissione sulle vendite
- Template gratuiti per la tua community

Ti interessa? Chiamiamoci questa settimana?`,
    cta: 'Prenota una chiamata',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    '30% di commissione su ogni vendita ricorrente',
    'Cookie di 90 giorni',
    'Dashboard di tracciamento in tempo reale',
    'Pagamenti mensili tramite Stripe',
    'Template premium gratuiti (valore €199)',
    'Supporto dedicato agli affiliati',
    'Accesso beta alle nuove funzionalità',
    'Materiale marketing fornito',
  ],
  requirements: [
    'Avere un pubblico di 1K+ su un canale (YouTube, Twitter, LinkedIn, Instagram, Blog)',
    'Contenuti tech / startup / AI',
    'Tasso di engagement > 2%',
    'Nessun contenuto offensivo o politico',
    'Rispettare le linee guida del brand',
  ],
};

export const getAllTemplates = (): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates];
};

export const getTemplatesByType = (type: 'email' | 'dm'): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) => t.type === type);
};

export const getTemplatesByTarget = (target: string): InfluencerTemplate[] => {
  return [...emailTemplates, ...dmTemplates].filter((t) =>
    t.target.toLowerCase().includes(target.toLowerCase()),
  );
};

export const generateOutreachSequence = (influencerType: string): InfluencerTemplate[] => {
  const templates: InfluencerTemplate[] = [];

  switch (influencerType) {
    case 'youtube':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-01')!,
        dmTemplates.find((t) => t.id === 'inf-dm-05')!,
      );
      break;
    case 'linkedin':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-02')!,
        dmTemplates.find((t) => t.id === 'inf-dm-02')!,
      );
      break;
    case 'twitter':
      templates.push(
        emailTemplates.find((t) => t.id === 'inf-email-03')!,
        dmTemplates.find((t) => t.id === 'inf-dm-01')!,
      );
      break;
    case 'agence':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-04')!);
      break;
    case 'saas':
      templates.push(emailTemplates.find((t) => t.id === 'inf-email-05')!);
      break;
    default:
      templates.push(...emailTemplates.slice(0, 2), ...dmTemplates.slice(0, 2));
  }

  return templates.filter(Boolean);
};
