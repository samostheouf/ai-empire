export interface CampaignTemplate {
  id: string
  name: string
  type: 'product-launch' | 'seasonal' | 'referral' | 'black-friday' | 'new-year'
  duration: string
  channels: string[]
  budget: string
  objective: string
  content: CampaignTemplateContent
  schedule: CampaignSchedule[]
  metrics: CampaignMetrics
}

export interface CampaignTemplateContent {
  headline: string
  subheadline: string
  body: string
  cta: string
  hashtags: string[]
  emailSubject: string
  emailBody: string
  socialPost: string
}

export interface CampaignSchedule {
  day: string
  action: string
  channel: string
}

export interface CampaignMetrics {
  targetReach: string
  targetConversion: string
  targetRevenue: string
}

// ============================================================
// CAMPAÑA DE LANZAMIENTO DE PRODUCTO
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: 'Lanzamiento de Producto — AI Empire',
  type: 'product-launch',
  duration: '14 días',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: 'Generar 500 registros y €3,000 de ingresos en el primer mes',
  content: {
    headline: '🚀 Nuevo: ¡La revolución AI para SaaS ha llegado!',
    subheadline: 'Lanza tu SaaS en 24h con plantillas Next.js 14 + APIs de IA potentes',
    body: `¿Sueñas con lanzar tu SaaS pero el desarrollo te toma semanas?

AI Empire cambia las reglas del juego:
✅ Plantillas Next.js 14 profesionales — diseños modernos, responsivos, modo oscuro
✅ APIs de IA integradas — GPT-4, Groq, Gemini listas para usar
✅ Stripe + Auth incluidos — pagos y autenticación en 5 minutos
✅ Panel de administración completo — gestiona usuarios, analytics, facturas

🔥 Oferta de lanzamiento: -30% en todas las plantillas durante 72 horas.

¡Únete a los primeros usuarios que ya han lanzado su SaaS con AI Empire!
No pierdas esta oportunidad — la oferta expira el [DATE].`,
    cta: '🚀 Empezar ahora — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🚀 Es oficial: ¡AI Empire está en vivo! -30% para ti',
    emailBody: `Hola [First Name],

El día ha llegado. ¡AI Empire finalmente está en vivo!

Esto es lo que ofrecemos:
🎨 6 plantillas Next.js 14 profesionales (€49-199)
🤖 APIs de IA integradas (GPT-4, Groq, Gemini)
💳 Stripe + Auth configurados
📊 Panel de administración completo

🎁 Oferta exclusiva: -30% en todas las plantillas solo por 72 horas.

Usa el código LAUNCH30 en el checkout.

[CTA: Explorar las plantillas →]

¡Hasta pronto,
El equipo de AI Empire 🇫🇷`,
    socialPost: `🚀 ¡AI Empire finalmente está EN VIVO!

La plataforma que combina:
✅ Plantillas Pro Next.js 14
✅ APIs de IA integradas
✅ Stripe + Auth incluidos
✅ Panel de administración

🎁 -30% durante 72h con el código LAUNCH30

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'D-7', action: 'Teaser en redes sociales', channel: 'Twitter/X, LinkedIn' },
    { day: 'D-3', action: 'Email teaser a suscriptores del newsletter', channel: 'Email' },
    { day: 'D-1', action: 'Cuenta regresiva en Instagram Stories', channel: 'Instagram' },
    { day: 'D0', action: 'Lanzamiento oficial — publicación + email + ads', channel: 'Todos los canales' },
    { day: 'D+1', action: 'Testimonios de early adopters', channel: 'Twitter/X, LinkedIn' },
    { day: 'D+3', action: 'Recordatorio de oferta -30%', channel: 'Email, Twitter' },
    { day: 'D+5', action: 'Tutorial "Cómo crear tu primer SaaS"', channel: 'YouTube, Blog' },
    { day: 'D+7', action: 'Fin de la oferta -30%', channel: 'Email, Social' },
    { day: 'D+10', action: 'Caso de estudio de cliente', channel: 'LinkedIn, Blog' },
    { day: 'D+14', action: 'Resumen + testimonios', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'Audiencia objetivo (según la campaña)',
    targetConversion: 'Tasa de conversión 1-2%',
    targetRevenue: 'Proporcional al gasto publicitario'
  }
}

// ============================================================
// CAMPAÑA PROMOCIONAL DE TEMPORADA
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: 'Promoción de Temporada — Primavera/Verano',
  type: 'seasonal',
  duration: '21 días',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: 'Aumentar las ventas un 40% durante el período de verano',
  content: {
    headline: '☀️ ¡Rebajas de verano AI Empire — Hasta -40%!',
    subheadline: 'El verano es para impulsar tu SaaS, no para tumbarte en la playa',
    body: `El verano se acerca, ¡y es el momento perfecto para impulsar tu proyecto!

🌞 Ofertas especiales de primavera/verano:
- NeuraStore (plantilla e-commerce): €39 → €29 (-25%)
- NeuraBlog (plantilla blog): €29 → €19 (-35%)
- Pack completo (6 plantillas): €599 → €359 (-40%)

⚡ ¿Por qué el verano?
→ Menos competencia en el mercado
→ Más tiempo para construir antes del otoño
→ Las startups que lanzan en verano llegan en septiembre con un producto

⏱️ Oferta válida del [START_DATE] al [END_DATE]

Usa el código ETE2024 para -40% en el pack.`,
    cta: '☀️ Aprovecha las rebajas — -40%',
    hashtags: [
      '#AIEmpire', '#Rebajas', '#Verano2024', '#SaaS', '#Plantillas',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ ¡Rebajas de verano: -40% en todas las plantillas AI Empire!',
    emailBody: `Hola [First Name],

¡El verano llega y tenemos una oferta que no puedes rechazar! 🌞

☀️ Ofertas especiales:
- NeuraStore: €39 → €29
- NeuraBlog: €29 → €19
- Pack 6 plantillas: €599 → €359

⏰ Oferta válida hasta [END_DATE]

Usa el código ETE2024 en el checkout.

[CTA: Ver las ofertas →]

¡Pasa un buen verano!
El equipo de AI Empire 🇫🇷`,
    socialPost: `☀️ ¡REBAJAS DE VERANO AI EMPIRE ☀️

-40% en el pack completo:
✅ 6 plantillas Next.js 14
✅ APIs de IA integradas
✅ Soporte prioritario

Código: ETE2024
⏰ Válido hasta [DATE]

👉 ai-empire-steel.vercel.app

#AIEmpire #Rebajas #Verano2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'D-3', action: 'Teaser "Algo viene esta summer..."', channel: 'Twitter/X, Instagram' },
    { day: 'D0', action: 'Anuncio oficial de rebajas', channel: 'Todos los canales' },
    { day: 'D+3', action: 'Testimonio de cliente + antes/después', channel: 'LinkedIn, Facebook' },
    { day: 'D+7', action: 'Recordatorio a mitad + stock limitado', channel: 'Email' },
    { day: 'D+10', action: 'Tutorial "Lanza tu SaaS este verano"', channel: 'YouTube, Blog' },
    { day: 'D+14', action: 'Últimos días — urgencia', channel: 'Todos los canales' },
    { day: 'D+18', action: 'Última oportunidad', channel: 'Email, Twitter' },
    { day: 'D+21', action: 'Fin de rebajas — resumen', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000 personas',
    targetConversion: '300 ventas (1%)',
    targetRevenue: '€10,700 (300 × €35 prom.)'
  }
}

// ============================================================
// PROGRAMA DE REFERIDOS
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'Programa de Referidos — Gana Créditos',
  type: 'referral',
  duration: 'Permanente',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500 (créditos de recompensa)',
  objective: 'Crecimiento viral: 1 referido = 2 nuevos usuarios',
  content: {
    headline: '🎁 ¡Referencia a un amigo, gana 500 créditos IA gratis!',
    subheadline: 'El boca en boca es nuestro mejor canal de crecimiento',
    body: `¿Te gusta AI Empire? ¡Compártelo y gana recompensas!

🎯 Cómo funciona:
1. Comparte tu enlace de referido único
2. Tu amigo se registra con tu enlace
3. ¡Ambos reciben 500 créditos IA gratis!

💰 Niveles de recompensas:
- 1 referido = 500 créditos
- 3 referidos = 1,500 créditos + insignia "Embajador"
- 5 referidos = 2,500 créditos + acceso Pro 1 mes
- 10 referidos = 5,000 créditos + acceso Pro 3 meses + mención en el sitio

🔗 Tu enlace único: [REFERRAL_LINK]

¡Compártelo en Twitter, LinkedIn, o envíalo directamente a tus contactos!`,
    cta: '🎁 Compartir mi enlace de referido',
    hashtags: [
      '#AIEmpire', '#Referidos', '#Gratis', '#IA', '#SaaS',
      '#Embajador', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 ¿Quieres 500 créditos IA gratis? ¡Referencia a un amigo!',
    emailBody: `Hola [First Name],

¡Tenemos una sorpresa para ti! 🎁

Referencia a un amigo en AI Empire y ambos reciben 500 créditos IA gratis.

Tu enlace único: [REFERRAL_LINK]

🎯 Niveles:
- 1 referido → 500 créditos
- 3 referidos → 1,500 créditos + insignia
- 5 referidos → 2,500 créditos + Pro 1 mes
- 10 referidos → 5,000 créditos + Pro 3 meses

¡Comparte tu enlace ahora!

[CTA: Compartir mi enlace →]

¡Gracias por ser parte de la aventura! 💜
El equipo de AI Empire`,
    socialPost: `🎁 ¡REFERENCIA A UN AMIGO, GANA 500 CRÉDITOS! 🎁

¿Te gusta AI Empire? ¡Compártelo!

✅ Tu amigo se registra → 500 créditos gratis
✅ TÚ ganas → 500 créditos gratis

🔗 Enlace de referido: [REFERRAL_LINK]

5 referidos = acceso Pro GRATIS por 1 mes 🚀

#AIEmpire #Referidos #IA #SaaS #Gratis`
  },
  schedule: [
    { day: 'Permanente', action: 'Email de bienvenida con enlace de referido', channel: 'Email' },
    { day: 'D+7', action: 'Recordatorio del programa de referidos', channel: 'Email' },
    { day: 'D+30', action: 'Email "Todavía no has referido a nadie..."', channel: 'Email' },
    { day: 'Permanente', action: 'Enlace de referido visible en el panel', channel: 'Dashboard' },
    { day: 'Semanal', action: 'Tabla de clasificación de referentes en Twitter', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '1,000 compartidos/mes',
    targetConversion: '200 nuevos registros/mes',
    targetRevenue: '+40% crecimiento orgánico'
  }
}

// ============================================================
// CAMPAÑA BLACK FRIDAY / CYBER MONDAY
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'Black Friday / Cyber Monday — AI Empire',
  type: 'black-friday',
  duration: '5 días (miércoles-sábado + Cyber Monday)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: 'Maximizar el alcance y las conversiones',
  content: {
    headline: '🖤 ¡BLACK FRIDAY AI EMPIRE — -50% EN TODO!',
    subheadline: 'La mayor promoción del año. No te la pierdas.',
    body: `Es hora de actuar. Por primera vez en la historia:

🖤 BLACK FRIDAY — -50% EN TODO

📦 Ofertas exclusivas:
- NeuraStore: €39 → €19.50
- NeuraBlog: €29 → €14.50
- NeuraPortfolio: €59 → €29.50
- Pack Premium (6 plantillas): €599 → €299.50
- Plan Pro (1 año): €1,188 → €594

⚡ NO es una broma. ES la promoción del año.

⏱️ Tiempo limitado: Del [WEDNESDAY] al [MONDAY] solamente.

🔒 Stock limitado: Los primeros 50 compradores reciben una plantilla bonus gratis.

Código: BLACKFRIDAY50`,
    cta: '🖤 Obtener -50% ahora',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Rebajas',
      '#Promo', '#SaaS', '#Plantillas', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY: -50% en todo AI Empire — ¡Solo 5 días!',
    emailBody: `Hola [First Name],

Es oficial. El Black Friday ha llegado a AI Empire. 🖤

-50% EN TODO:
📦 NeuraStore: €39 → €19.50
📦 NeuraBlog: €29 → €14.50
📦 Pack Premium: €599 → €299.50
📦 Plan Pro 1 año: €1,188 → €594

⏰ Válido del [WEDNESDAY] al [MONDAY] solamente.

Código: BLACKFRIDAY50

¡Los primeros 50 compradores reciben una plantilla bonus gratis! 🎁

[CTA: Conseguir mis -50% →]

No te lo pierdas.
El equipo de AI Empire 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

¡-50% EN TODO POR 5 DÍAS!

📦 Plantillas desde €14.50 hasta €299.50
📦 Plan Pro -50%
📦 Primeros 50 = plantilla bonus GRATIS

Código: BLACKFRIDAY50
⏰ Del [WEDNESDAY] al [MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: 'Miércoles D-1', action: 'Teaser "Mañana llega algo oscuro..."', channel: 'Twitter, Instagram' },
    { day: 'Jueves D0 (BF)', action: 'Lanzamiento oficial Black Friday', channel: 'Todos los canales + Email masivo' },
    { day: 'Jueves D0', action: 'Google Ads — campaña urgente', channel: 'Google Ads' },
    { day: 'Viernes D+1', action: 'Recordatorio + testimonios de compradores', channel: 'Email, Twitter' },
    { day: 'Sábado D+2', action: 'Prueba social: "¡Ya X ventas!"', channel: 'Instagram, LinkedIn' },
    { day: 'Domingo D+3', action: 'Último día para el BF regular', channel: 'Email masivo' },
    { day: 'Lunes CM', action: 'Cyber Monday — Extensión especial', channel: 'Todos los canales' },
    { day: 'Lunes CM', action: 'Oferta flash de 24 horas', channel: 'Email, Twitter' },
    { day: 'Martes D+5', action: 'Fin del Black Friday — Gracias', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Audiencia objetivo (según la campaña)',
    targetConversion: 'Tasa de conversión 0.5-1%',
    targetRevenue: 'Proporcional al gasto publicitario'
  }
}

// ============================================================
// CAMPAÑA DE AÑO NUEVO
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: 'Año Nuevo — Resoluciones SaaS 2025',
  type: 'new-year',
  duration: '14 días (26 de diciembre - 9 de enero)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: 'Convertir prospectos de fin de año y arrancar fuerte en enero',
  content: {
    headline: '🎆 2025: ¡Lanza tu SaaS este año!',
    subheadline: 'Año nuevo, nuevo SaaS. Empieza fuerte con AI Empire.',
    body: `2025 es TU año. 🎆

Pusiste tu idea en papel el año pasado. Ahora, toma acción.

🚀 Oferta de Año Nuevo:
- -25% en todas las plantillas con el código NEWYEAR2025
- 500 créditos IA gratis para empezar
- Acceso prioritario a las nuevas funciones 2025

🎯 Resoluciones 2025:
✅ "Voy a lanzar mi SaaS" → Hecho en 24h con AI Empire
✅ "Voy a ganar dinero online" → Plantillas e-commerce + Stripe incluidos
✅ "Voy a aprender IA" → APIs de IA integradas + tutoriales
✅ "Voy a digitalizarme" → Panel de administración completo

⏱️ Oferta del 26 de diciembre al 9 de enero solamente.

Haz de 2025 tu año de éxito.`,
    cta: '🎆 Empezar 2025 con AI Empire',
    hashtags: [
      '#AIEmpire', '#AñoNuevo', '#2025', '#Resoluciones', '#SaaS',
      '#Lanzamiento', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🎆 ¡Año nuevo, nuevo SaaS: -25% + 500 créditos gratis!',
    emailBody: `Hola [First Name],

¡Feliz Año Nuevo! 🎆

2025 es el año en que lanzas tu SaaS. Y estamos aquí para ayudarte.

🎁 Oferta de Año Nuevo:
- -25% en todas las plantillas
- 500 créditos IA gratis
- Acceso prioritario a las funciones 2025

Código: NEWYEAR2025

⏰ Oferta del 26 de diciembre al 9 de enero.

Haz de este año el año bueno.

[CTA: Explorar las ofertas →]

¡Feliz Año Nuevo y mucha suerte!
El equipo de AI Empire 🇫🇷`,
    socialPost: `🎆 2025: ¡TU AÑO DE SAAS! 🎆

Año nuevo, nuevo comienzo.

🎁 Oferta especial:
✅ -25% en plantillas
✅ 500 créditos IA gratis
✅ Acceso prioritario 2025

Código: NEWYEAR2025
⏰ Del 26/12 al 09/01

👉 ai-empire-steel.vercel.app

#AIEmpire #AñoNuevo #2025 #SaaS #Resoluciones`
  },
  schedule: [
    { day: '26 de diciembre', action: 'Email "Feliz Año Nuevo — aquí tienes tu regalo"', channel: 'Email' },
    { day: '27 de diciembre', action: 'Publicación "Resoluciones 2025: lanza tu SaaS"', channel: 'LinkedIn, Twitter' },
    { day: '30 de diciembre', action: 'Recordatorio de oferta + testimonios', channel: 'Email, Twitter' },
    { day: '1 de enero', action: 'Mensaje "Feliz Año Nuevo — estamos aquí para ti"', channel: 'Email, Social' },
    { day: '2 de enero', action: 'Tutorial "5 pasos para lanzar tu SaaS en enero"', channel: 'Blog, YouTube' },
    { day: '5 de enero', action: 'Prueba social + urgencia', channel: 'Twitter, Instagram' },
    { day: '7 de enero', action: 'Última oportunidad', channel: 'Email' },
    { day: '9 de enero', action: 'Fin de la oferta — resumen + vista previa 2025', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000 personas',
    targetConversion: '400 registros (1%)',
    targetRevenue: '€5,000 (200 × €25 prom.)'
  }
}

// ============================================================
// FUNCIONES UTILITARIAS
// ============================================================

export function getAllCampaignTemplates(): CampaignTemplate[] {
  return [
    productLaunchTemplate,
    seasonalPromotionTemplate,
    referralProgramTemplate,
    blackFridayTemplate,
    newYearTemplate,
  ]
}

export function getCampaignTemplateByType(type: CampaignTemplate['type']): CampaignTemplate | undefined {
  return getAllCampaignTemplates().find(t => t.type === type)
}

export function generateCampaignTemplateId(): string {
  return `campaign_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function generateEmailBlast(template: CampaignTemplate, recipientName: string): {
  subject: string
  body: string
  cta: string
} {
  return {
    subject: template.content.emailSubject.replace('[First Name]', recipientName),
    body: template.content.emailBody.replace(/\[First Name\]/g, recipientName),
    cta: template.content.cta,
  }
}

export function generateTemplateSocialPost(template: CampaignTemplate): string {
  return template.content.socialPost
}

export function formatScheduleForCalendar(schedule: CampaignSchedule[]): string {
  return schedule.map(s => `${s.day} | ${s.channel} | ${s.action}`).join('\n')
}

export function calculateTotalBudget(templates: CampaignTemplate[]): string {
  const total = templates.reduce((sum, t) => {
    const budgetNum = parseInt(t.budget.replace(/[^0-9]/g, ''), 10)
    return sum + (isNaN(budgetNum) ? 0 : budgetNum)
  }, 0)
  return `€${total.toLocaleString('es-ES')}`
}
