import { LandingContent } from './en'

export const landingContent: LandingContent = {
  hero: {
    headline: 'Entrega productos SaaS más rápido con Next.js 14 e IA',
    subheadline: 'Plantillas listas para producción con API de Groq AI, facturación Stripe y autenticación — construidas para que puedas enfocarte en tu producto, no en código boilerplate.',
    ctaText: 'Empieza gratis'
  },
  features: [
    {
      title: 'Plantillas Next.js 14 App Router',
      description: 'Construidas con los últimos patrones de Next.js. TypeScript, Tailwind CSS y componentes de servidor listos para usar.'
    },
    {
      title: 'Integración con Groq AI API',
      description: 'Inferencia rápida impulsada por Groq. Incluye chat en streaming, completions estructurados y endpoints de análisis de documentos.'
    },
    {
      title: 'Facturación con Stripe lista',
      description: 'Gestión de suscripciones, precios basados en uso, portal de clientes y manejo de webhooks — todo preconfigurado.'
    },
    {
      title: 'Autenticación y roles',
      description: 'Autenticación integrada con control de acceso basado en roles. No necesitas bibliotecas de autenticación de terceros para flujos básicos.'
    },
    {
      title: 'Panel de administración',
      description: 'Gestiona usuarios, visualiza análisis y configura ajustes a través de una interfaz de administración preconstruida.'
    },
    {
      title: 'Nivel gratuito disponible',
      description: 'Empieza con 100 créditos API. No se requiere tarjeta de crédito. Actualiza cuando necesites más.'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Elige una plantilla',
      description: 'Elige entre 6 plantillas listas para producción: SaaS starter, marketplace, dashboard, blog, portfolio o landing page.'
    },
    {
      step: 2,
      title: 'Personaliza tu producto',
      description: 'Añade tu lógica de negocio, configura tu clave API de Groq y configura Stripe. El código boilerplate ya está manejado.'
    },
    {
      step: 3,
      title: 'Despliega y lanza',
      description: 'Sube a Vercel o tu plataforma preferida. Tu SaaS está listo para usuarios.'
    }
  ],
  faq: [
    {
      question: '¿Qué es el nivel gratuito?',
      answer: 'El nivel gratuito incluye 100 créditos API impulsados por Groq AI. No se requiere tarjeta de crédito. Puedes usar todas las plantillas y funciones básicas sin pagar.'
    },
    {
      question: '¿Necesito mis propias claves API?',
      answer: 'Sí, necesitas una clave API de Groq (nivel gratuito disponible en groq.com) y una cuenta de Stripe para la facturación. AI Empire maneja la integración — solo inserta tus claves.'
    },
    {
      question: '¿Puedo usar estas plantillas para proyectos comerciales?',
      answer: 'Sí. Puedes usar las plantillas de AI Empire para proyectos personales y comerciales. Eres dueño del código que construyes sobre ellas.'
    },
    {
      question: '¿Qué tecnologías se utilizan?',
      answer: 'Next.js 14 (App Router), TypeScript, Tailwind CSS, Groq AI API para inferencia, Stripe para pagos y un sistema de autenticación preconstruido con control de acceso basado en roles.'
    },
    {
      question: '¿Hay documentación?',
      answer: 'Sí. Cada plantilla incluye instrucciones de configuración, referencia de API y comentarios de código. También proporcionamos guías para patrones de personalización comunes.'
    },
    {
      question: '¿En qué se diferencia de otras plantillas SaaS?',
      answer: 'AI Empire se enfoca en código funcional sobre afirmaciones de marketing. Cada plantilla está lista para producción, incluye integración con API de IA y viene con documentación honesta. Sin testimonios falsos ni estadísticas infladas.'
    }
  ]
}
