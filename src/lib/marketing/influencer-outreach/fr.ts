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
    subject: '🤝 Sponsoring vidéo — AI-Empire (API AI française)',
    body: `Salut {{first_name}},

Je suis fan de ton contenu sur YouTube. Tes tutos sur l'AI m'ont inspiré à construire AI-Empire.

Je te propose un sponsoring pour une vidéo sur ton channel.

**Concept:** "J'ai testé une API AI gratuite — voici ce que j'ai construit"

**Format:**
- 8-12 min de vidéo
- Démonstration live d'AI-Empire
- Build d'un mini-projet en temps réel
- Mention de ton lien d'affiliation

**Rémunération:**
- €200-500 selon ton audience
- Commission 20% sur chaque vente via ton lien
- Templates gratuits (€49 de valeur)

**Audience cible:** Développeurs français, 18-35 ans, intéressés par l'IA

Tu es intéressé? On peut adapter le format à ton style.

Réponds à cet email ou DM moi sur Twitter @[handle].

Cordialement,
[Votre nom]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Répondre à l\'email',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 Partenariat content — AI-Empire x ton personal brand',
    body: `Salut {{first_name}},

Je propose un partenariat content pour renforcer ton personal brand sur LinkedIn.

**Proposition:**
1. **Article LinkedIn:** "Comment j'ai intégré l'IA dans mon SaaS pour €0"
2. **Template NeuraBlog:** Gratuit pour ta communauté (€49 de valeur)
3. **Revenue share:** 25% sur chaque vente via ton lien
4. **Visibilité:** On te mentionne dans notre newsletter à audience grandissante

**Pourquoi c'est intéressant:**
- Tu écris 1 post, tu gagnes du revenu passif + visibilité
- Tu offres de la valeur à ta communauté
- Tu te positionnes comme expert IA

Tu écris 1 post, tu gagnes du revenu passif + visibilité.

Intéressé? On fait un call de 10 min?

Cordialement,
[Votre nom]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Réserver un call de 10 min',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Collab Twitter — AI-Empire x ton compte tech',
    body: `Salut {{first_name}},

Je vois que tu partages du contenu tech de qualité sur Twitter. J'aimerais qu'on collabore.

**Proposition:**
1. **Giveaway:** 5 templates premium pour ta communauté
2. **Thread co-écrit:** "L'état de l'IA pour les devs en 2025"
3. **Commission:** 30% sur ventes via ton lien
4. **Rétroaction:** Tu influences notre roadmap produit

**Format:** 1 thread + 3 tweets sur 2 semaines.
**Budget:** €100-300 + templates gratuits.

Tu es intéressé?

Cordialement,
[Votre nom]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Répondre à l\'email',
  },
  {
    id: 'inf-email-04',
    name: 'Agence Web',
    type: 'email',
    target: 'Agences web (5-20 employés)',
    subject: '🏢 Partenariat agence — Vos clients veulent de l\'IA, on peut vous la fournir',
    body: `Bonjour {{first_name}},

Je vois que {{agency_name}} travaille avec des clients e-commerce/SaaS qui demandent de plus en plus de features AI.

**Problème:** Intégrer l'IA coûte cher et prend du temps.

**Solution:** AI-Empire vous donne accès à une API AI clé en main.
- Intégration en 5 minutes
- Pricing à l'usage (pas d'abonnement minimum)
- Support technique en français

**Pour votre agence:**
- Dashboard multi-clients
- Commission de 15% sur chaque client
- Templates premium inclus (€49-199 de valeur)
- Formation gratuite pour votre équipe

Voulez-vous qu'on en discute? 15 min cette semaine?

Cordialement,
[Votre nom]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Réserver un call',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (outil complémentaire)',
    subject: '🔗 Partenariat AI-Empire x {{company}} — Compléter votre offre AI',
    body: `Bonjour {{first_name}},

Je suis [Votre nom], fondateur d'AI-Empire, la plateforme AI API française pour startups.

Je vous contacte car {{company}} et AI-Empire partagent le même public cible: les startups françaises qui veulent intégrer l'IA sans budget conséquent.

**Proposition de partenariat:**

1. **Intégration native:** Intégrez AI-Empire dans votre plateforme (widget/API)
2. **Commissions:** 20% de récurrent sur chaque client référé
3. **Co-marketing:** Article blog conjoint + webinar
4. **Exclusivité:** Offre spéciale pour vos utilisateurs (-25%)

**Pourquoi ça marche:**
- Vos clients ont besoin d'AI, nous fournissons l'API
- Vous gagnez une source de revenus récurrente
- On gagne en distribution

Prêt à en discuter? 15 min cette semaine?

Cordialement,
[Votre nom]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Réserver un call',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `Salut {{first_name}}! 👋

J'adore ton contenu sur l'IA. J'ai construit AI-Empire, une API AI française pour startups.

 proposition rapide:
- Templates gratuits pour ta communauté
- Commission 30% sur ventes
- Thread co-écrit

Intéressé? On en discute en DM?`,
    cta: 'Répondre au DM',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `Salut {{first_name}},

Je vois que tu partages du contenu tech de qualité. J'aimerais qu'on collabore.

AI-Empire est une plateforme AI française pour startups. On cherche des partenaires pour co-créer du contenu.

Proposition:
- Article LinkedIn co-écrit
- Template gratuit pour ta communauté
- Revenue share 25%

10 min de call cette semaine?`,
    cta: 'Réserver un call',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `Hey {{first_name}}! 👋

Je vois que tu es actif dans les serveurs dev français. J'aimerais te proposer un partenariat.

AI-Empire = API AI gratuite pour startups françaises.

Offre pour toi:
- Templates premium gratuits
- Commission 30% sur ventes
- Accès bêta aux nouvelles features

Ça t'intéresse?`,
    cta: 'Répondre au DM',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `Salut {{first_name}}! 🔥

J'adore ton contenu tech sur Instagram. J'ai une proposition pour toi.

AI-Empire est une API AI française. On cherche des créateurs pour:
- Reels de démo (templates gratuits inclus)
- Commission 25% sur ventes
- Co-branding sur les templates

Ça te parle? On en discute en DM!`,
    cta: 'Répondre au DM',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `Salut {{first_name}}! 👋

J'adore ta chaîne YouTube. Tes tutos sur l'IA sont top.

Proposition de collab:
- Sponsoring vidéo (€200-500)
- Commission 20% sur ventes
- Templates gratuits pour ta communauté

Ça t'intéresse? On s'appelle cette semaine?`,
    cta: 'Réserver un appel',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    'Commission de 30% sur chaque vente récurrente',
    'Cookie de 90 jours',
    'Dashboard de suivi en temps réel',
    'Paiements mensuels via Stripe',
    'Templates premium gratuits (valeur €199)',
    'Support dédié aux affiliés',
    'Accès bêta aux nouvelles features',
    'Matériel marketing fourni',
  ],
  requirements: [
    'Avoir une audience de 1K+ sur un canal (YouTube, Twitter, LinkedIn, Instagram, Blog)',
    'Contenu tech / startup / IA',
    'Engagement rate > 2%',
    'Pas de contenu offensant ou politique',
    'Respecter les guidelines de la marque',
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
