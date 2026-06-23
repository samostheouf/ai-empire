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
    subject: '🤝 Patrocinio de vídeo — AI-Empire (API de IA francesa)',
    body: `Hola {{first_name}},

Soy fans de tu contenido en YouTube. Tus tutoriales de IA me inspiraron a crear AI-Empire.

Te propongo un patrocinio para un vídeo en tu canal.

**Concepto:** "Probé una API de IA gratuita — esto es lo que construí"

**Formato:**
- 8-12 minutos de vídeo
- Demostración en vivo de AI-Empire
- Creación de un mini-proyecto en tiempo real
- Mención de tu enlace de afiliado

**Remuneración:**
- €200-500 según tu audiencia
- 20% de comisión en cada venta a través de tu enlace
- Plantillas gratuitas (valor €49)

**Público objetivo:** Desarrolladores franceses, 18-35 años, interesados en la IA

¿Te interesa? Podemos adaptar el formato a tu estilo.

Responde a este email o envíame un DM en Twitter @[handle].

Un saludo,
[Tu nombre]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Responder al email',
  },
  {
    id: 'inf-email-02',
    name: 'LinkedIn Tech Leader',
    type: 'email',
    target: 'LinkedIn (1K-10K followers)',
    subject: '💼 Asociación de contenido — AI-Empire x tu marca personal',
    body: `Hola {{first_name}},

Te propongo una asociación de contenido para potenciar tu marca personal en LinkedIn.

**Propuesta:**
1. **Artículo en LinkedIn:** "Cómo integré la IA en mi SaaS por €0"
2. **Plantilla NeuraBlog:** Gratis para tu comunidad (valor €49)
3. **Reparto de ingresos:** 25% en cada venta a través de tu enlace
4. **Visibilidad:** Te mencionamos en nuestra newsletter en crecimiento

**Por qué es interesante:**
- Escribes 1 publicación, ganas ingresos pasivos + visibilidad
- Ofreces valor a tu comunidad
- Te posicionas como experto en IA

Escribes 1 publicación, ganas ingresos pasivos + visibilidad.

¿Interesado? ¿Hacemos una llamada de 10 minutos?

Un saludo,
[Tu nombre]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Reservar una llamada de 10 min',
  },
  {
    id: 'inf-email-03',
    name: 'Twitter Tech Account',
    type: 'email',
    target: 'Twitter/X (5K-50K followers)',
    subject: '🐦 Colaboración en Twitter — AI-Empire x tu cuenta tech',
    body: `Hola {{first_name}},

Veo que compartes contenido tech de calidad en Twitter. Me gustaría que colaboráramos.

**Propuesta:**
1. **Sorteo:** 5 plantillas premium para tu comunidad
2. **Hilo co-escrito:** "El estado de la IA para devs en 2025"
3. **Comisión:** 30% en ventas a través de tu enlace
4. **Retroalimentación:** Tú influyes en nuestra hoja de ruta de producto

**Formato:** 1 hilo + 3 tweets durante 2 semanas.
**Presupuesto:** €100-300 + plantillas gratuitas.

¿Te interesa?

Un saludo,
[Tu nombre]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Responder al email',
  },
  {
    id: 'inf-email-04',
    name: 'Agencia Web',
    type: 'email',
    target: 'Agencias web (5-20 empleados)',
    subject: '🏢 Asociación de agencia — Tus clientes quieren IA, podemos proporcionársela',
    body: `Hola {{first_name}},

Veo que {{agency_name}} trabaja con clientes de e-commerce/SaaS que cada vez demandan más funcionalidades de IA.

**Problema:** Integrar la IA es costoso y requiere mucho tiempo.

**Solución:** AI-Empire te da acceso a una API de IA lista para usar.
- Integración en 5 minutos
- Tarifa por uso (sin suscripción mínima)
- Soporte técnico en español

**Para tu agencia:**
- Panel multi-cliente
- 15% de comisión en cada cliente
- Plantillas premium incluidas (valor €49-199)
- Formación gratuita para tu equipo

¿Quieres que lo hablemos? 15 minutos esta semana?

Un saludos,
[Tu nombre]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Reservar una llamada',
  },
  {
    id: 'inf-email-05',
    name: 'SaaS B2B',
    type: 'email',
    target: 'SaaS B2B (herramienta complementaria)',
    subject: '🔗 Asociación AI-Empire x {{company}} — Complementa tu oferta de IA',
    body: `Hola {{first_name}},

Soy [Tu nombre], fundador de AI-Empire, la plataforma de API de IA francesa para startups.

Me pongo en contacto porque {{company}} y AI-Empire comparten el mismo público objetivo: startups francesas que quieren integrar la IA sin un gran presupuesto.

**Propuesta de asociación:**

1. **Integración nativa:** Integra AI-Empire en tu plataforma (widget/API)
2. **Comisiones:** 20% recurrente en cada cliente referido
3. **Co-marketing:** Artículo de blog conjunto + webinar
4. **Exclusividad:** Oferta especial para tus usuarios (-25%)

**Por qué funciona:**
- Tus clientes necesitan IA, nosotros proporcionamos la API
- Obtienes una fuente de ingresos recurrente
- Nosotros ganamos distribución

¿Listo para hablar? 15 minutos esta semana?

Un saludos,
[Tu nombre]
AI-Empire — ai-empire-steel.vercel.app`,
    cta: 'Reservar una llamada',
  },
];

export const dmTemplates: InfluencerTemplate[] = [
  {
    id: 'inf-dm-01',
    name: 'Twitter DM — Hello',
    type: 'dm',
    target: 'Twitter DM',
    subject: '',
    body: `¡Hola {{first_name}}! 👋

Me encanta tu contenido sobre la IA. Construí AI-Empire, una API de IA francesa para startups.

Propuesta rápida:
- Plantillas gratuitas para tu comunidad
- 30% de comisión en ventas
- Hilo co-escrito

¿Te interesa? ¿Hablamos por DM?`,
    cta: 'Responder al DM',
  },
  {
    id: 'inf-dm-02',
    name: 'LinkedIn DM — Partnership',
    type: 'dm',
    target: 'LinkedIn DM',
    subject: '',
    body: `Hola {{first_name}},

Veo que compartes contenido tech de calidad. Me gustaría que colaboráramos.

AI-Empire es una plataforma de IA francesa para startups. Buscamos asociados para co-crear contenido.

Propuesta:
- Artículo de LinkedIn co-escrito
- Plantilla gratis para tu comunidad
- 25% de reparto de ingresos

¿10 minutos de llamada esta semana?`,
    cta: 'Reservar una llamada',
  },
  {
    id: 'inf-dm-03',
    name: 'Discord DM — Community',
    type: 'dm',
    target: 'Discord DM',
    subject: '',
    body: `¡Hola {{first_name}}! 👋

Veo que estás activo en servidores de devs franceses. Me gustaría proponerte una asociación.

AI-Empire = API de IA gratuita para startups francesas.

Oferta para ti:
- Plantillas premium gratuitas
- 30% de comisión en ventas
- Acceso beta a nuevas funcionalidades

¿Te interesa?`,
    cta: 'Responder al DM',
  },
  {
    id: 'inf-dm-04',
    name: 'Instagram DM — Tech Creator',
    type: 'dm',
    target: 'Instagram DM',
    subject: '',
    body: `¡Hola {{first_name}}! 🔥

Me encanta tu contenido tech en Instagram. Tengo una propuesta para ti.

AI-Empire es una API de IA francesa. Buscamos creadores para:
- Reels de demo (plantillas gratuitas incluidas)
- 25% de comisión en ventas
- Co-branding en las plantillas

¿Te parece bien? ¡Hablamos por DM!`,
    cta: 'Responder al DM',
  },
  {
    id: 'inf-dm-05',
    name: 'YouTube DM — Collab',
    type: 'dm',
    target: 'YouTube DM',
    subject: '',
    body: `¡Hola {{first_name}}! 👋

Me encanta tu canal de YouTube. Tus tutoriales de IA son geniales.

Propuesta de colaboración:
- Patrocinio de vídeo (€200-500)
- 20% de comisión en ventas
- Plantillas gratuitas para tu comunidad

¿Te interesa? ¿Hablamos esta semana?`,
    cta: 'Reservar una llamada',
  },
];

export const affiliateProgram: AffiliateProgram = {
  name: 'AI-Empire Affiliate Program',
  commission: 30,
  cookieDuration: 90,
  benefits: [
    '30% de comisión en cada venta recurrente',
    'Cookie de 90 días',
    'Panel de seguimiento en tiempo real',
    'Pagos mensuales a través de Stripe',
    'Plantillas premium gratuitas (valor €199)',
    'Soporte dedicado para afiliados',
    'Acceso beta a nuevas funcionalidades',
    'Material de marketing incluido',
  ],
  requirements: [
    'Tener una audiencia de 1K+ en un canal (YouTube, Twitter, LinkedIn, Instagram, Blog)',
    'Contenido tech / startup / IA',
    'Tasa de engagement > 2%',
    'Sin contenido ofensivo o político',
    'Respetar las directrices de la marca',
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
