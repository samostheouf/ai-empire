import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'es',
  productDescriptionShort:
    'AI Empire es una plataforma de desarrollo que combina plantillas profesionales de Next.js 14 con una API de IA unificada (Groq y Gemini), facturación con Stripe y autenticación — permitiendo a los desarrolladores crear y desplegar productos SaaS con IA más rápido.',
  productDescriptionLong:
    "AI Empire proporciona un kit de herramientas completo para la creación de productos SaaS con IA. La plataforma ofrece plantillas Next.js 14 listas para producción — incluyendo NeuraStore (comercio electrónico), NeuraBlog (publicación de contenido) y NeuraPortfolio (portfolio de desarrollador) — cada una con diseño responsive moderno, modo oscuro y optimización SEO integrada.\n\nTodas las plantillas se integran con la API unificada de AI Empire, que proporciona acceso a los modelos de Groq y Gemini a través de un solo endpoint. La plataforma también incluye integración de facturación con Stripe, autenticación y un panel de administración, reduciendo el tiempo de desarrollo típico de un SaaS de varios meses a unos pocos días.\n\nAI Empire está dirigido a desarrolladores, hackers independientes, fundadores de startups y pymes que quieren lanzar productos con IA sin construir la infraestructura desde cero. La plataforma opera bajo un modelo freemium: la API de IA ofrece un nivel gratuito con 100 créditos, y las plantillas están disponibles para compra individual (19 € a 29 €) o como paquete completo (299 €).",
  keyFeatures: [
    'API de IA unificada — Acceso a los modelos de Groq y Gemini a través de un solo endpoint',
    'Plantillas profesionales de Next.js 14 — NeuraStore, NeuraBlog, NeuraPortfolio y más',
    'Integración de facturación con Stripe — Pagos configurados de fábrica',
    'Autenticación incluida — Gestión de usuarios sin configuración de terceros',
    'Panel de administración — Gestión de usuarios, analíticas y contenido',
    'Nivel gratuito — 100 créditos de API al registrarse, sin tarjeta de crédito',
    'Diseño responsive — Plantillas mobile-first con modo oscuro',
    'Optimización SEO — Etiquetas meta, datos estructurados y optimización de rendimiento',
    'Listo para Vercel — Despliegue en un clic para todas las plantillas',
    'SDK de JavaScript y Python — Integración amigable para desarrolladores',
  ],
  pricingTable: [
    {
      name: 'Nivel gratuito',
      price: '0 €',
      description: 'Empieza con las APIs de IA sin costo',
      features: [
        '100 créditos de API de IA',
        'Acceso a Groq y Gemini',
        'API REST + SDK',
        'Soporte comunitario',
        'Sin tarjeta de crédito',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '19 €',
      description: 'Plantilla de blog profesional para Next.js 14',
      features: [
        'Soporte MDX',
        'Modo oscuro',
        'Feed RSS',
        'Optimización SEO',
        'Integración de newsletter',
        'Compra única',
      ],
    },
    {
      name: 'NeuraStore',
      price: '29 €',
      description: 'Plantilla de comercio electrónico completa para Next.js 14',
      features: [
        'Pagos con Stripe',
        'Gestión del carrito',
        'Panel de administración',
        'Recomendaciones de productos con IA',
        'Diseño responsive',
        'Compra única',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '29 €',
      description: 'Plantilla de portfolio de desarrollador para Next.js 14',
      features: [
        'Animaciones de Framer Motion',
        'Modo oscuro',
        'Formulario de contacto',
        'Diseño responsive',
        'Optimización SEO',
        'Compra única',
      ],
    },
    {
      name: 'Paquete completo',
      price: '299 €',
      description: 'Todas las plantillas más soporte prioritario',
      features: [
        'Las 6 plantillas',
        'Soporte prioritario',
        'Actualizaciones gratuitas',
        'Acceso anticipado a nuevas plantillas',
        'Licencia comercial',
        'Ahorra más de 400 € vs compra individual',
      ],
    },
  ],
  founderQuote: {
    text: 'Creamos AI Empire porque creemos que cada desarrollador debería poder crear productos con IA sin pasar meses en la infraestructura. Nuestras plantillas y nuestra API te permiten concentrarte en lo que importa — tu producto y tus usuarios.',
    attribution: 'Equipo de AI Empire',
    title: 'Fundadores de AI Empire',
  },
  logoUsage: {
    primaryUsage: 'Utiliza el logo de AI Empire sobre un fondo blanco o oscuro con contraste suficiente.',
    clearSpace: 'Mantén un espacio libre mínimo igual a la altura de la "A" del logo en todos los lados.',
    minimumSize: 'El logo no debe reproducirse a un tamaño menor a 120 px de ancho (digital) o 30 mm (impresión).',
    donts: [
      'No estirar, rotar ni distorsionar el logo',
      'No cambiar los colores del logo',
      'No colocar el logo sobre fondos recargados sin un contenedor',
      'No añadir efectos como sombras, resplandores o degradados al logo',
      'No reorganizar ni modificar los elementos del logo',
    ],
  },
  contactInfo: {
    press: 'prensa@ai-empire.dev',
    partnerships: 'asociaciones@ai-empire.dev',
    general: 'hola@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'AI Empire es una plataforma de desarrollo que ofrece plantillas profesionales de Next.js 14 con APIs de IA integradas (Groq y Gemini), facturación con Stripe y autenticación. Fundada para ayudar a los desarrolladores a crear productos SaaS con IA más rápido, AI Empire atiende a desarrolladores, hackers independientes y fundadores de startups en todo el mundo. La plataforma ofrece un nivel gratuito de API y plantillas desde 19 €. Para más información, visita ai-empire-steel.vercel.app.',
};
