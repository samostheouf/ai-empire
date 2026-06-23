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
    subject: '🤝 Videosponsoring — AI-Empire (Französische KI-API)',
    body: `Hallo {{first_name}},

Ich bin ein Fan deines Contents auf YouTube. Deine KI-Tutorials haben mich inspiriert, AI-Empire zu bauen.

Ich möchte dir ein Sponsoring für ein Video auf deinem Kanal vorschlagen.

**Konzept:** "Ich habe eine kostenlose KI-API getestet — das ist, was ich gebaut habe"

**Format:**
- 8-12 Minuten Video
- Live-Demo von AI-Empire
- Erstellung eines Mini-Projekts in Echtzeit
- Erwähnung deines Affiliate-Links

**Vergütung:**
- €200-500 je nach deiner Zielgruppe
- 20% Provision auf jeden Verkauf über deinen Link
- Kostenlose Templates (€49 Wert)

**Zielgruppe:** Französische Entwickler, 18-35 Jahre, interessiert an KI

Interessiert? Wir können das Format an deinen Stil anpassen.

Antworte auf diese E-Mail oder schreib mir eine DM auf Twitter @[handle].

Mit freundlichen Grüßen,
[Dein Name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Auf E-Mail antworten',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 Content-Partnerschaft — AI-Empire x dein persönliche Marke',
    body: `Hallo {{first_name}},

Ich schlage eine Content-Partnerschaft vor, um deine persönliche Marke auf LinkedIn zu stärken.

**Vorschlag:**
1. **LinkedIn-Artikel:** "Wie ich KI in mein SaaS für €0 integriert habe"
2. **NeuraBlog-Template:** Kostenlos für deine Community (€49 Wert)
3. **Umsatzbeteiligung:** 25% auf jeden Verkauf über deinen Link
4. **Sichtbarkeit:** Wir erwähnen dich in unserem wachsenden Newsletter

**Warum es interessant ist:**
- Du schreibst 1 Beitrag, verdienst passives Einkommen + Sichtbarkeit
- Du bietest deiner Community Mehrwert
- Du positionierst dich als KI-Experte

Du schreibst 1 Beitrag, verdienst passives Einkommen + Sichtbarkeit.

Interessiert? Sollen wir einen 10-minütigen Call machen?

Mit freundlichen Grüßen,
[Dein Name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: '10-Min-Call buchen',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Twitter-Kollaboration — AI-Empire x dein Tech-Account',
    body: `Hallo {{first_name}},

Ich sehe, dass du hochwertigen Tech-Content auf Twitter teilst. Ich würde gerne mit dir zusammenarbeiten.

**Vorschlag:**
1. **Giveaway:** 5 Premium-Templates für deine Community
2. **Co-geschriebener Thread:** "Der Stand der KI für Entwickler 2025"
3. **Provision:** 30% auf Verkäufe über deinen Link
4. **Feedback:** Du beeinflusst unsere Produkt-Roadmap

**Format:** 1 Thread + 3 Tweets über 2 Wochen.
**Budget:** €100-300 + kostenlose Templates.

Interessiert?

Mit freundlichen Grüßen,
[Dein Name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Auf E-Mail antworten',
  },
  {
    id: 'inf-email-04',
    name: 'Webagentur',
    type: 'email',
    target: 'Webagenturen (5-20 Mitarbeiter)',
    subject: '🏢 Agentur-Partnerschaft — Ihre Kunden wollen KI, wir können sie liefern',
    body: `Guten Tag {{first_name}},

Ich sehe, dass {{agency_name}} mit E-Commerce/SaaS-Kunden arbeitet, die zunehmend KI-Features benötigen.

**Problem:** KI zu integrieren ist teuer und zeitaufwendig.

**Lösung:** AI-Empire gibt Ihnen Zugang zu einer fertigen KI-API.
- Integration in 5 Minuten
- Nutzungsbezogene Preisgestaltung (kein Mindestabonnement)
- Technischer Support auf Deutsch

**Für Ihre Agentur:**
- Multi-Client-Dashboard
- 15% Provision auf jeden Kunden
- Premium-Templates inklusive (€49-199 Wert)
- Kostenloses Training für Ihr Team

Möchten wir darüber sprechen? 15 Minuten diese Woche?

Mit freundlichen Grüßen,
[Dein Name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Call buchen',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (ergänzendes Tool)',
    subject: '🔗 AI-Empire x {{company}} Partnerschaft — Ergänzen Sie Ihr KI-Angebot',
    body: `Guten Tag {{first_name}},

Ich bin [Dein Name], Gründer von AI-Empire, der französischen KI-API-Plattform für Startups.

Ich kontaktiere Sie, weil {{company}} und AI-Empire die gleiche Zielgruppe teilen: Französische Startups, die KI ohne großes Budget integrieren möchten.

**Partnerschaftsvorschlag:**

1. **Native Integration:** Integrieren Sie AI-Empire in Ihre Plattform (Widget/API)
2. **Provisionen:** 20% wiederkehrend auf jeden empfohlenen Kunden
3. **Co-Marketing:** Gemeinsamer Blog-Beitrag + Webinar
4. **Exklusivität:** Spezielles Angebot für Ihre Nutzer (-25%)

**Warum es funktioniert:**
- Ihre Kunden brauchen KI, wir stellen die API bereit
- Sie erhalten eine wiederkehrende Einnahmequelle
- Wir gewinnen Vertrieb

Bereit zu besprechen? 15 Minuten diese Woche?

Mit freundlichen Grüßen,
[Dein Name]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Call buchen',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `Hallo {{first_name}}! 👋

Ich liebe deinen Content über KI. Ich habe AI-Empire gebaut, eine französische KI-API für Startups.

Schnelles Angebot:
- Kostenlose Templates für deine Community
- 30% Provision auf Verkäufe
- Co-geschriebener Thread

Interessiert? Sollen wir in DMs chatten?`,
    cta: 'Auf DM antworten',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `Hallo {{first_name}},

Ich sehe, dass du hochwertigen Tech-Content teilst. Ich würde gerne mit dir zusammenarbeiten.

AI-Empire ist eine französische KI-Plattform für Startups. Wir suchen Partner für Co-Creation von Content.

Vorschlag:
- Co-geschriebener LinkedIn-Artikel
- Kostenloses Template für deine Community
- 25% Umsatzbeteiligung

10 Minuten Call diese Woche?`,
    cta: 'Call buchen',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `Hey {{first_name}}! 👋

Ich sehe, dass du in französischen Dev-Servern aktiv bist. Ich möchte dir eine Partnerschaft vorschlagen.

AI-Empire = Kostenlose KI-API für französische Startups.

Angebot für dich:
- Kostenlose Premium-Templates
- 30% Provision auf Verkäufe
- Beta-Zugang zu neuen Features

Interessiert?`,
    cta: 'Auf DM antworten',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `Hallo {{first_name}}! 🔥

Ich liebe deinen Tech-Content auf Instagram. Ich habe einen Vorschlag für dich.

AI-Empire ist eine französische KI-API. Wir suchen Kreative für:
- Demo-Reels (kostenlose Templates inklusive)
- 25% Provision auf Verkäufe
- Co-Branding bei den Templates

Klingt gut? Sollen wir in DMs chatten!`,
    cta: 'Auf DM antworten',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `Hallo {{first_name}}! 👋

Ich liebe deinen YouTube-Kanal. Deine KI-Tutorials sind großartig.

Kollaborations-Vorschlag:
- Videosponsoring (€200-500)
- 20% Provision auf Verkäufe
- Kostenlose Templates für deine Community

Interessiert? Sollen wir diese Woche telefonieren?`,
    cta: 'Call buchen',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    '30% Provision auf jeden wiederkehrenden Verkauf',
    '90-Tage-Cookie',
    'Echtzeit-Tracking-Dashboard',
    'Monatliche Zahlungen über Stripe',
    'Kostenlose Premium-Templates (€199 Wert)',
    'Dedizierter Affiliate-Support',
    'Beta-Zugang zu neuen Features',
    'Marketing-Materialien bereitgestellt',
  ],
  requirements: [
    'Zielgruppe von 1K+ auf einem Kanal (YouTube, Twitter, LinkedIn, Instagram, Blog)',
    'Tech / Startup / KI-Inhalte',
    'Engagement-Rate > 2%',
    'Keine anstößigen oder politischen Inhalte',
    'Einhaltung der Markenrichtlinien',
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
