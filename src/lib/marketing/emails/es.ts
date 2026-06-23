import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: 'Secuencia de Onboarding — 5 días',
  type: 'onboarding',
  duration: '5 días',
  trigger: 'Nuevo usuario registrado',
  goal: 'Activar al usuario: primera llamada API + primera plantilla comprada',
  emails: [
    {
      day: 0,
      subject: 'Bienvenido a AI Empire — Tu API de IA está lista',
      preview: 'Tienes 100 créditos gratis. Empieza ahora.',
      body: `Hola [Nombre],

¡Bienvenido a AI Empire!

Ahora tienes acceso a:
- 100 créditos de IA gratis
- APIs de GPT-4, Groq y Gemini
- Plantillas profesionales de Next.js 14
- Soporte técnico en español

Tu clave API: [API_KEY]
Panel: https://ai-empire-steel.vercel.app/dashboard

Siguiente paso: Haz tu primera llamada API en 2 minutos.

1. Ve a tu panel
2. Copia tu clave API
3. Ejecuta este curl:
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer TU_CLAVE" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hola, ¿cómo estás?"}'

¡Listo! Ya tienes acceso a la IA.

Hasta pronto,
El equipo de AI Empire`,
      cta: 'Lanzar mi primera prueba',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '3 consejos para sacar el máximo provecho de AI Empire',
      preview: 'Consejos para ir más allá.',
      body: `Hola [Nombre],

Ayer creaste tu cuenta. Hoy, aquí tienes 3 consejos para avanzar:

Consejo 1: Explora las plantillas
Nuestras plantillas están diseñadas para usarse de inmediato. Empieza con NeuraBlog (29€) o NeuraStore (45€).

Consejo 2: Usa las APIs de IA
Genera contenido, analiza texto, crea un chatbot. Las APIs son gratuitas hasta agotar tus 100 créditos.

Consejo 3: Integra en tu proyecto
Nuestros tutoriales muestran cómo integrar AI Empire en un proyecto Next.js en 5 minutos.

Tutoriales: https://ai-empire-steel.vercel.app/docs

¡Feliz exploración!
El equipo de AI Empire`,
      cta: 'Ver tutoriales',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: 'La plantilla perfecta para tu proyecto',
      preview: 'Descubre nuestras plantillas adaptadas a tu necesidad.',
      body: `Hola [Nombre],

¿Quieres crear un SaaS? Esta es la plantilla que necesitas:

E-commerce → NeuraStore (45€)
Plantilla e-commerce Next.js 14 con carrito, pagos Stripe, panel de administración.

Blog → NeuraBlog (29€)
Blog premium con SEO optimizado, sistema de comentarios, newsletter integrada.

Portafolio → NeuraPortfolio (45€)
Portafolio profesional con animaciones, formularios, modo oscuro.

Pack completo → 6 plantillas (469€)
Todas nuestras plantillas + soporte prioritario + actualizaciones gratuitas.

Usa el código WELCOME10 para un 10% de descuento en tu primera compra.

El equipo de AI Empire`,
      cta: 'Descubrir plantillas',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: 'Cómo lanzar un SaaS rápidamente con AI Empire',
      preview: 'Construye tu proyecto con nuestras plantillas listas para usar.',
      body: `Hola [Nombre],

Lanzar un SaaS ya no requiere meses de desarrollo.

Con AI Empire, esto es lo que puedes lograr:
- Un sitio e-commerce completo en 24 horas con NeuraStore (45€)
- Stripe ya integrado y listo para aceptar pagos
- Desplegar en Vercel en unos clics
- Panel de administración incluido en la plantilla

NeuraStore incluye:
- Carrito de compras funcional
- Gestión de productos e inventario
- Pagos seguros a través de Stripe
- Interfaz de administración completa
- Diseño responsive y modo oscuro

Empieza eligiendo la plantilla que se adapte a tu proyecto.

El equipo de AI Empire`,
      cta: 'Ver plantillas',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '20% de descuento en tu primera plantilla',
      preview: 'Una oferta de bienvenida para ti.',
      body: `Hola [Nombre],

¡Gracias por tu fidelidad! Aquí tienes un descuento de bienvenida:
20% de descuento en tu primera plantilla.

Código: WELCOME20

Opciones:
- NeuraBlog: 29€ → 23.20€
- NeuraStore: 45€ → 36€
- NeuraPortfolio: 45€ → 36€
- Pack completo: 469€ → 375.20€

Es el momento de actuar.

El equipo de AI Empire`,
      cta: 'Obtener 20% de descuento',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: 'Secuencia Nurture — 7 días',
  type: 'nurture',
  duration: '7 días',
  trigger: 'Usuario registrado pero aún no ha comprado',
  goal: 'Convertir al usuario gratuito en cliente de pago',
  emails: [
    {
      day: 0,
      subject: 'Esto es lo que puedes crear con AI Empire',
      preview: 'Ejemplos concretos para inspirarte.',
      body: `Hola [Nombre],

Tienes una cuenta de AI Empire pero aún no has explorado todo lo que puedes crear.

Aquí tienes 5 proyectos concretos:

1. Blog optimizado para SEO → NeuraBlog
2. E-commerce con Stripe → NeuraStore
3. Portafolio profesional → NeuraPortfolio
4. Chatbot de IA → Integra nuestras APIs
5. SaaS completo → Pack premium

Cada proyecto es viable en 24 horas.

El equipo de AI Empire`,
      cta: 'Explorar proyectos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: 'El error #1 de los indie hackers',
      preview: 'Cómo evitar perder el tiempo.',
      body: `Hola [Nombre],

El error #1 de los indie hackers: desarrollar todo desde cero.

Pasas semanas programando:
- Autenticación (AI Empire lo hace por ti)
- Pagos (Stripe ya está integrado)
- Panel (Ya está listo)
- Diseño (Las plantillas son profesionales)

Mientras tanto, tus competidores lanzan su producto.

AI Empire te ahorra 6 meses de desarrollo.

El equipo de AI Empire`,
      cta: 'Ver plantillas',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: 'Miles de desarrolladores ya usan AI Empire',
      preview: 'Únete a una comunidad en crecimiento.',
      body: `Hola [Nombre],

Miles de desarrolladores ya confían en AI Empire.

Esto es lo que han creado:
- Docenas de SaaS de e-commerce
- Blogs profesionales
- Portafolios creativos
- Chatbots de IA

¿Y tú? ¿Qué vas a crear?

El equipo de AI Empire`,
      cta: 'Unirse a la comunidad',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: 'El ROI de AI Empire en números',
      preview: 'Números que hablan por sí solos.',
      body: `Hola [Nombre],

Aquí está el ROI real de AI Empire:

- Costo promedio: 50€ (1 plantilla + créditos de IA)
- Tiempo ahorrado: 6 meses de desarrollo
- Un solo cliente a 50€/mes basta para recuperar tu inversión

¿El resto? Beneficio puro.

El equipo de AI Empire`,
      cta: 'Ver precios',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: 'Descubre NeuraStore — La plantilla e-commerce',
      preview: 'Nuestra plantilla más popular.',
      body: `Hola [Nombre],

NeuraStore es nuestra plantilla e-commerce más popular.

Lo que incluye:
- Carrito de compras
- Pagos Stripe
- Gestión de productos
- Panel de administración
- Diseño responsive
- Modo oscuro

Precio: 45€ (en lugar de 750€+ para un desarrollador)

El equipo de AI Empire`,
      cta: 'Descubrir NeuraStore',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: 'Cómo integrar AI Empire en 5 minutos',
      preview: 'Un tutorial rápido para empezar.',
      body: `Hola [Nombre],

¿Quieres integrar AI Empire en tu proyecto? Así se hace:

1. Instala la plantilla
npx create-next-app@latest mi-saas --template ai-empire

2. Configura tus APIs
Copia tu clave API en .env.local

3. Despliega en Vercel
git push y tu sitio ya está en línea

¡Listo! En 5 minutos tienes tu SaaS.

El equipo de AI Empire`,
      cta: 'Ver tutorial',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: 'Oferta para early adopters: 30% de descuento',
      preview: 'Una oferta para los primeros usuarios.',
      body: `Hola [Nombre],

Llevas [NUMBER] días con nosotros.

Para agradecerte, aquí tienes una oferta:
30% de descuento en todas las plantillas.

Código: EARLY30

Opciones:
- NeuraBlog: 29€ → 20.30€
- NeuraStore: 45€ → 31.50€
- NeuraPortfolio: 45€ → 31.50€
- Pack completo: 469€ → 328.30€

El equipo de AI Empire`,
      cta: 'Obtener 30% de descuento',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: 'Secuencia Win-Back — Reactivación',
  type: 'winback',
  duration: '21 días',
  trigger: 'Usuario inactivo por 30 días',
  goal: 'Reactivar al usuario inactivo y retenerlo',
  emails: [
    {
      day: 0,
      subject: '[Nombre], te extrañamos',
      preview: 'Tenemos novedades para ti.',
      body: `Hola [Nombre],

Hemos notado que no has usado AI Empire en un tiempo.

¿Podemos ayudarte?

- ¿Necesitas un tutorial?
- ¿Algún problema técnico?
- ¿Una función que echas en falta?

Estamos aquí para ti. Responde a este correo — leemos todo.

El equipo de AI Empire`,
      cta: 'Volver al panel',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: 'Esto es lo que te perdiste en AI Empire',
      preview: 'Novedades que te van a encantar.',
      body: `Hola [Nombre],

Desde tu última visita, hemos añadido:

- Nuevas plantillas (NeuraBlog, NeuraStore)
- APIs de IA mejoradas (GPT-4, Groq, Gemini)
- Panel rediseñado
- Diseño optimizado

No te has perdido nada — es el momento de volver.

El equipo de AI Empire`,
      cta: 'Descubrir novedades',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '50 créditos gratis para volver',
      preview: 'Un regalo para decirte que pensamos en ti.',
      body: `Hola [Nombre],

Para decirte que pensamos en ti, aquí tienes 50 créditos de IA gratis.

Tu saldo: +50 créditos
Válido por 30 días

Úsalos para:
- Generar contenido
- Analizar texto
- Crear un chatbot
- Probar nuestras APIs

El equipo de AI Empire`,
      cta: 'Reclamar mis créditos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: 'Tus créditos expiran en 16 días',
      preview: 'No olvides usarlos.',
      body: `Hola [Nombre],

Tienes 50 créditos gratis que expiran en 16 días.

Expira el [DATE]

Úsalos para:
- Crear tu primer proyecto
- Probar nuestras APIs
- Explorar AI Empire

El equipo de AI Empire`,
      cta: 'Usar mis créditos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: 'Tus créditos expiran pronto',
      preview: 'No olvides usarlos.',
      body: `Hola [Nombre],

Tus 50 créditos gratis expiran en 7 días.

Expira el [DATE]

Después de eso, perderás tus créditos.

Esta es tu última oportunidad de usarlos.

El equipo de AI Empire`,
      cta: 'Usar mis créditos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: 'Secuencia Upsell — Upgrade al Plan Pro',
  type: 'upsell',
  duration: '14 días',
  trigger: 'Usuario con más de 100 llamadas API o 30 días de actividad',
  goal: 'Convertir al usuario gratuito en cliente Pro',
  emails: [
    {
      day: 0,
      subject: '[Nombre], estás a punto de alcanzar el límite',
      preview: 'Tu uso está aumentando — así es como escalar.',
      body: `Hola [Nombre],

¡Buenas noticias: estás usando AI Empire activamente!

Aquí está tu uso actual:
- Llamadas API: [NUMBER]/100
- Créditos restantes: [NUMBER]
- Días de actividad: [NUMBER]

Estás a punto de alcanzar el límite del plan gratuito.

El plan Pro te da:
- Llamadas API ilimitadas
- Acceso prioritario
- Soporte dedicado
- Plantillas premium

El equipo de AI Empire`,
      cta: 'Actualizar a Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: 'El plan Pro: lo que te estás perdiendo',
      preview: 'Funciones exclusivas.',
      body: `Hola [Nombre],

Esto es lo que te estás perdiendo con el plan gratuito:

Plan Pro (99€/mes):
- Llamadas API ilimitadas
- Acceso prioritario a nuevas funciones
- Soporte dedicado (respuesta en 2h)
- Plantillas premium (199€ de valor)
- Panel de analíticas avanzado
- API de webhook personalizada

El equipo de AI Empire`,
      cta: 'Descubrir Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '20% de descuento en tu primer mes Pro',
      preview: 'Una oferta para ti.',
      body: `Hola [Nombre],

Para agradecerte tu fidelidad, aquí tienes una oferta:
20% de descuento en tu primer mes Pro.

En lugar de 99€/mes → 79€/mes

Código: PRO20

Upgrade a Pro:
- Llamadas API ilimitadas
- Soporte dedicado
- Plantillas premium
- Analíticas avanzadas

El equipo de AI Empire`,
      cta: 'Activar mi oferta',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: 'Cómo los usuarios Pro optimizan sus costos',
      preview: 'Un vistazo a las ventajas del plan Pro.',
      body: `Hola [Nombre],

Así es como nuestros usuarios Pro optimizan sus costos:

Con el plan Pro (99€/mes):
- Reducción de costos de IA gracias a APIs optimizadas
- Ganancias de productividad con plantillas premium
- Soporte dedicado para resolver problemas rápidamente
- Analíticas avanzadas para seguir tu rendimiento

El plan Pro está diseñado para proyectos serios que necesitan más potencia.

El equipo de AI Empire`,
      cta: 'Actualizar a Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '20% en el plan Pro — Última oportunidad',
      preview: 'No te pierdas esta oferta.',
      body: `Hola [Nombre],

Tu oferta de 20% en el plan Pro sigue disponible.

79€/mes en lugar de 99€/mes

Upgrade a Pro:
- Llamadas API ilimitadas
- Soporte dedicado
- Plantillas premium
- Analíticas avanzadas

Esta es una buena oportunidad para probar el plan Pro a un precio reducido.

El equipo de AI Empire`,
      cta: 'Obtener 20% de descuento',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: 'Gracias [Nombre] — Seguimos aquí si cambias de opinión',
      preview: 'Sin presión. Estamos para ti.',
      body: `Hola [Nombre],

Entendemos que el plan Pro puede que no sea para ti en este momento.

No hay problema. Seguimos aquí si cambias de opinión.

Mientras tanto, siempre puedes:
- Usar el plan gratuito (100 créditos/mes)
- Explorar las plantillas (desde 19€)
- Contactarnos si tienes preguntas

Estamos para ti.

El equipo de AI Empire`,
      cta: 'Contactarnos',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
