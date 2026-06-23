export interface Post {
  id: number
  content: string
  hashtags: string[]
  cta: string
  emojis: string[]
}

export const twitterPosts: Post[] = [
  {
    id: 1,
    content: `Construido con Next.js 14 + API Groq AI\n\nAI Empire te ofrece:\n• Templates SaaS listos para producción\n• Inferencia rápida con Groq\n• Facturación Stripe integrada\n• Tier gratuito: 100 créditos API\n\nEmpieza a desarrollar hoy.`,
    hashtags: ['#NextJS14', '#AI', '#SaaS', '#GroqAI', '#WebDev'],
    cta: 'Probar gratis',
    emojis: ['⚡', '🚀', '💡']
  },
  {
    id: 2,
    content: `Tu stack SaaS, listo:\n\n✅ Next.js 14 App Router\n✅ Integración API Groq AI\n✅ Suscripciones Stripe\n✅ Auth + dashboard admin\n\nElige un template, personaliza, despliega.`,
    hashtags: ['#NextJS', '#SaaS', '#Stripe', '#FullStack', '#DevTools'],
    cta: 'Ver templates',
    emojis: ['✅', '🔧', '🎯']
  },
  {
    id: 3,
    content: `Integrar IA en tu app no debería tomar semanas.\n\nCon la API Groq de AI Empire:\n• /api/chat — respuestas en streaming\n• /api/completions — salida estructurada\n• /api/analyze — procesamiento de documentos\n\nTodo incluido en los templates Next.js 14.`,
    hashtags: ['#AI', '#NextJS', '#GroqAPI', '#API', '#WebDev'],
    cta: 'Ver documentación',
    emojis: ['🤖', '⚡', '📋']
  },
  {
    id: 4,
    content: `Integración Stripe incluida en cada template de AI Empire.\n\n• Facturación por suscripción\n• Gestión de webhooks\n• Portal de clientes\n• Soporte de precios por uso\n\nNo necesitas librerías de terceros para pagos.`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#Billing'],
    cta: 'Empezar gratis',
    emojis: ['💳', '💰', '🔒']
  },
  {
    id: 5,
    content: `Lancé un marketplace de templates SaaS Next.js 14.\n\nQué incluye:\n• 6 templates de producción\n• API Groq AI (tier gratuito: 100 créditos)\n• Facturación Stripe\n• Auth + acceso por roles\n• Dashboard admin\n\nAbierto a feedback.`,
    hashtags: ['#BuildInPublic', '#NextJS14', '#SaaS', '#Marketplace', '#DevTools'],
    cta: 'Descubrir',
    emojis: ['🔨', '🛠️', '🚀']
  },
  {
    id: 6,
    content: `FAQ: "¿Cómo funciona el tier gratuito?"\n\n• 100 créditos API para empezar\n• Inferencia con Groq AI\n• No se requiere tarjeta de crédito\n• Actualiza cuando estés listo\n\nDiseñado para indie hackers y equipos pequeños.`,
    hashtags: ['#FreeTier', '#IndieHacker', '#SaaS', '#AI', '#GroqAI'],
    cta: 'Empezar gratis',
    emojis: ['❓', '🆓', '💡']
  },
  {
    id: 7,
    content: `Templates Next.js 14 + Groq AI + Stripe = SaaS en producción en días.\n\nAI Empire maneja el boilerplate para que te enfoques en tu producto.\n\nTemplates: saas-starter, marketplace, dashboard, blog, portfolio, landing.`,
    hashtags: ['#NextJS14', '#Templates', '#AI', '#SaaS', '#GroqAI'],
    cta: 'Explorar templates',
    emojis: ['📦', '⚡', '🎯']
  },
  {
    id: 8,
    content: `Fundadores de SaaS B2B: lo más difícil es pasar de 0 a 1.\n\nAI Empire te ofrece:\n• Auth + facturación pre-construidos\n• APIs Groq AI listas para usar\n• Dashboard admin\n• Integración Stripe\n\nEnfócate en tus usuarios, no en el boilerplate.`,
    hashtags: ['#B2B', '#SaaS', '#Founders', '#NextJS', '#AI'],
    cta: 'Más información',
    emojis: ['🏗️', '🔑', '🚀']
  },
  {
    id: 9,
    content: `Benchmarks de API Groq AI:\n\n• Llama 3.1 8B: ~500 tokens/sec\n• Mixtral 8x7B: ~300 tokens/sec\n• Gemma 7B: ~600 tokens/sec\n\nDisponible a través de los templates AI Empire.\n\nInferencia rápida, sin GPU.`,
    hashtags: ['#GroqAI', '#AI', '#LLM', '#Performance', '#NextJS'],
    cta: 'Probarlo',
    emojis: ['⚡', '📊', '🚀']
  },
  {
    id: 10,
    content: `AI Empire v1.0 ya está en línea.\n\nLo que construimos:\n• 6 templates SaaS Next.js 14\n• Integración API Groq AI\n• Facturación Stripe (suscripciones + uso)\n• Auth + RBAC\n• Dashboard admin\n\nTier gratuito disponible. Feedback bienvenido.`,
    hashtags: ['#Launch', '#NextJS14', '#SaaS', '#AI', '#Stripe'],
    cta: 'Empezar',
    emojis: ['🎉', '🚀', '💻']
  }
]

export const linkedinPosts: Post[] = [
  {
    id: 1,
    content: `Estoy construyendo AI Empire — un marketplace de templates SaaS Next.js 14 con APIs de IA integradas.\n\nLa idea: la mayoría de proyectos SaaS pasan semanas en auth, facturación y boilerplate antes de escribir una línea de código de producto.\n\nAI Empire incluye:\n• Templates Next.js 14 App Router\n• Integración API Groq AI\n• Facturación Stripe (suscripciones + uso)\n• Auth + acceso por roles\n• Dashboard admin\n\nEl tier gratuito incluye 100 créditos API — no se requiere tarjeta de crédito.\n\nAgradecería feedback honesto de otros desarrolladores.`,
    hashtags: ['#SaaS', '#NextJS', '#AI', '#BuildInPublic', '#IndieHacker'],
    cta: 'Descubrir',
    emojis: ['💡', '🛠️', '🚀']
  },
  {
    id: 2,
    content: `Honestamente, construir un SaaS en 2024:\n\nEl stack técnico es lo suficientemente maduro como para que la dificultad no sea el código — son las decisiones de producto.\n\nPor eso construí AI Empire: una colección de templates Next.js 14 que manejan la base técnica (auth, facturación, APIs de IA, dashboards) para que te enfoques en lo que importa.\n\nCaracterísticas:\n✅ Inferencia IA con Groq\n✅ Suscripciones Stripe\n✅ Templates listos para producción\n✅ Tier gratuito con 100 créditos\n\nSin marketing agresivo. Solo una herramienta útil para desarrolladores.`,
    hashtags: ['#SaaS', '#WebDevelopment', '#AI', '#NextJS', '#Product'],
    cta: 'Más información',
    emojis: ['🎯', '📊', '💡']
  },
  {
    id: 3,
    content: `Comparación rápida para desarrolladores evaluando opciones de API de IA:\n\n• OpenAI: $0.002/1K tokens (gpt-3.5-turbo)\n• Anthropic: $0.003/1K tokens (Claude 3 Haiku)\n• Groq: tier gratuito disponible, inferencia rápida\n\nLos templates AI Empire funcionan con Groq por defecto.\n\n100 créditos gratuitos para probar. Sin lock-in.\n\n¿Cuál es tu configuración actual de API de IA?`,
    hashtags: ['#AI', '#LLM', '#GroqAI', '#OpenAI', '#DevTools'],
    cta: 'Probar tier gratuito',
    emojis: ['📊', '🔍', '⚡']
  },
  {
    id: 4,
    content: `Una cosa que aprendí construyendo AI Empire:\n\nLos desarrolladores no quieren otro framework — quieren código funcional que puedan leer, modificar y desplegar.\n\nCada template de AI Empire:\n• Usa patrones estándar de Next.js 14\n• Tiene una estructura de archivos clara\n• Incluye Stripe + auth + APIs de IA\n• Viene con dashboard admin\n\nEl mejor código es el que se entiende.\n\nBuscando feedback de la comunidad.`,
    hashtags: ['#WebDev', '#NextJS', '#CodeQuality', '#SaaS', '#AI'],
    cta: 'Ver templates',
    emojis: ['📖', '💡', '🔍']
  },
  {
    id: 5,
    content: `Para indie hackers y fundadores solitarios:\n\nEl cuello de botella no es la habilidad de código — es el tiempo.\n\nAI Empire provee:\n• Templates SaaS Next.js 14 pre-construidos\n• Integración API Groq AI (tier gratuito)\n• Configuración de facturación Stripe\n• Auth + dashboard admin\n\nElige un template, personaliza la capa de producto, despliega.\n\nEnfócate en tus usuarios, no en la infraestructura.`,
    hashtags: ['#IndieHacker', '#SoloFounder', '#SaaS', '#NextJS', '#AI'],
    cta: 'Empezar a construir',
    emojis: ['⏱️', '🎯', '🚀']
  }
]

export const facebookPosts: Post[] = [
  {
    id: 1,
    content: `AI Empire ya está en línea — un marketplace de templates SaaS Next.js 14 con APIs de IA integradas.\n\nQué incluye:\n• 6 templates listos para producción\n• Integración API Groq AI\n• Facturación Stripe (suscripciones + uso)\n• Auth + dashboard admin\n• Tier gratuito: 100 créditos API\n\nYa sea que construyas una herramienta de IA, marketplace o dashboard — hay un template para ti.`,
    hashtags: ['#NextJS', '#AI', '#SaaS', '#WebDev', '#Stripe'],
    cta: 'Explorar templates',
    emojis: ['🚀', '💡', '✅']
  },
  {
    id: 2,
    content: `Cómo agregar IA a tu app Next.js en 5 minutos:\n\n1. Clona un template de AI Empire\n2. Agrega tu clave API de Groq\n3. Usa el endpoint /api/chat integrado\n4. Personaliza la interfaz\n5. Despliega en Vercel\n\nEl tier gratuito te da 100 créditos para probar todo.`,
    hashtags: ['#NextJS', '#Tutorial', '#AI', '#GroqAI', '#WebDev'],
    cta: 'Seguir la guía',
    emojis: ['📝', '⚡', '🎯']
  },
  {
    id: 3,
    content: `Construí algo útil: AI Empire.\n\nEs una colección de templates SaaS Next.js 14 con:\n• API Groq AI (inferencia rápida)\n• Suscripciones Stripe\n• Auth + roles\n• Dashboard admin\n\nPúblico objetivo: indie hackers, equipos pequeños, cualquiera que construya productos SaaS.\n\nFeedback bienveno — ¿qué haría esto más útil para ti?`,
    hashtags: ['#BuildInPublic', '#SaaS', '#NextJS', '#AI', '#IndieHacker'],
    cta: 'Dar feedback',
    emojis: ['🔨', '💬', '🛠️']
  },
  {
    id: 4,
    content: `Integración Stripe, bien hecha.\n\nCada template de AI Empire incluye:\n✅ Facturación por suscripción (mensual/anual)\n✅ Precios por uso\n✅ Portal de clientes\n✅ Gestión de webhooks\n✅ Modo test activado por defecto\n\nNo necesitas configurar pagos desde cero.`,
    hashtags: ['#Stripe', '#SaaS', '#NextJS', '#Payments', '#WebDev'],
    cta: 'Ver en acción',
    emojis: ['💳', '✅', '🔒']
  },
  {
    id: 5,
    content: `Tier gratuito de AI Empire:\n• 100 créditos API\n• Inferencia con Groq AI\n• No se requiere tarjeta de crédito\n• Todos los templates incluidos\n• Soporte comunitario\n\nActualiza a Pro para más créditos y soporte prioritario.\n\nPruébalo en ai-empire-steel.vercel.app`,
    hashtags: ['#FreeTier', '#AI', '#SaaS', '#NextJS', '#GroqAI'],
    cta: 'Empezar gratis',
    emojis: ['🆓', '🚀', '💡']
  }
]

export const redditPosts: Post[] = [
  {
    id: 1,
    content: `Construí un marketplace de templates SaaS Next.js 14 con integración API Groq AI\n\nHola r/webdev — He estado trabajando en AI Empire, una colección de templates Next.js 14 listos para producción para construir productos SaaS.\n\nQué incluye:\n• 6 templates (saas-starter, marketplace, dashboard, blog, portfolio, landing)\n• Integración API Groq AI (tier gratuito: 100 créditos)\n• Facturación Stripe (suscripciones + uso)\n• Auth + acceso por roles\n• Dashboard admin\n\nTodos los templates usan App Router, TypeScript y Tailwind CSS.\n\nBusco feedback honesto — ¿qué haría esto más útil?`,
    hashtags: ['#webdev', '#nextjs', '#saas'],
    cta: 'Descubrir',
    emojis: ['🚀', '💡']
  },
  {
    id: 2,
    content: `La API Groq AI es sorprendentemente rápida — la agregué a mis templates SaaS Next.js 14\n\nHe estado probando Groq para inferencia y es genuinamente impresionante:\n• Llama 3.1 8B a ~500 tokens/sec\n• Mixtral 8x7B a ~300 tokens/sec\n\nConstruí AI Empire para facilitar agregar Groq a apps Next.js. Los templates incluyen:\n• /api/chat (streaming)\n• /api/completions (salida estructurada)\n• /api/analyze (procesamiento de documentos)\n\nTier gratuito: 100 créditos. No se requiere tarjeta de crédito.\n\n¿Otros usan Groq? ¿Cuál es su experiencia?`,
    hashtags: ['#nextjs', '#ai', '#groqai'],
    cta: 'Probarlo',
    emojis: ['⚡', '🤖']
  },
  {
    id: 3,
    content: `r/nextjs — Template SaaS Next.js 14 con facturation Stripe pre-configurada\n\nVeo posts frecuentemente sobre dificultades con integración Stripe en Next.js. Construí AI Empire para resolver esto.\n\nCada template incluye:\n• Facturación por suscripción (mensual/anual)\n• Soporte de precios por uso\n• Portal de clientes\n• Gestión de webhooks\n• Modo test activado\n\nMás integración API Groq AI y auth.\n\nTodo en TypeScript, App Router, Tailwind. Agradecería feedback.`,
    hashtags: ['#nextjs', '#stripe', '#saas'],
    cta: 'Echar un vistazo',
    emojis: ['💳', '🔧']
  },
  {
    id: 4,
    content: `r/SaaS — Feedback honesto buscado sobre mi marketplace de templates\n\nConstruí AI Empire: una colección de templates SaaS Next.js 14 con APIs de IA.\n\nQué funciona:\n• 6 templates con calidad de código consistente\n• Integración Groq AI (tier gratuito)\n• Facturación Stripe incluida\n• Auth + dashboard admin\n\nDe lo que no estoy seguro:\n• Modelo de precios (actualmente tier gratuito + Pro)\n• Selección de templates (6 actualmente)\n• Completitud de documentación\n\nFeedback honesto apreciado. ¿Qué pagarías en un marketplace de templates SaaS?`,
    hashtags: ['#saas', '#feedback', '#nextjs'],
    cta: 'Compartir tu opinión',
    emojis: ['💬', '🔍']
  },
  {
    id: 5,
    content: `Construí un template SaaS Next.js 14 con Groq AI + Stripe — lo comparto para feedback\n\nAI Empire es un marketplace de templates para productos SaaS. Cada template incluye:\n\n• Next.js 14 App Router\n• TypeScript + Tailwind\n• API Groq AI (tier gratuito: 100 créditos)\n• Facturación Stripe\n• Auth + roles\n• Dashboard admin\n\nMi objetivo: indie hackers y equipos pequeños que quieren lanzar rápido sin reinventar la rueda.\n\n¿Qué funciones te gustaría en un template SaaS?`,
    hashtags: ['#nextjs', '#saas', '#indiehackers'],
    cta: 'Descubrir',
    emojis: ['📦', '🚀']
  }
]
