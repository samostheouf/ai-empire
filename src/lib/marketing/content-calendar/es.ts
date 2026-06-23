export interface ContentCalendar {
  id: string
  name: string
  period: string
  type: 'monthly' | 'weekly' | 'holiday'
  posts: ContentPost[]
  metrics: ContentMetrics
}

export interface ContentPost {
  date: string
  time: string
  platform: string
  type: string
  content: string
  hashtags: string[]
  cta?: string
  url?: string
}

export interface ContentMetrics {
  totalPosts: number
  platforms: string[]
  avgPostsPerDay: number
}

export interface HolidayPlan {
  name: string
  date: string
  daysBefore: number
  content: ContentPost[]
}

// ============================================================
// CALENDARIO MENSUAL
// ============================================================
export const monthlyContentPlan: ContentCalendar = {
  id: 'cal_monthly',
  name: 'Calendario Mensual — AI Empire',
  period: 'Marzo 2025',
  type: 'monthly',
  posts: [
    // SEMANA 1
    {
      date: '01/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 3 razones por las que las startups españolas deberían usar IA ahora mismo:\n\n1. Reducir costes un 60%\n2. Automatizar tareas repetitivas\n3. Destacar de la competencia\n\n#AIEmpire #StartupSpain',
      hashtags: ['#AIEmpire', '#StartupSpain', '#IA'],
      cta: 'Descubre cómo'
    },
    {
      date: '01/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: 'La IA ya no está reservada para los gigantes del IBEX 35.\n\nAsí es como las startups pueden acceder a ella sin un gran presupuesto:\n\n→ Plantillas AI Empire (desde €19)\n→ APIs de IA gratuitas (GPT-4, Groq)\n→ Integración en 5 minutos\n\nMás de 5.000 desarrolladores ya lo han hecho.\n\n¿Y tú?\n\n#AIEmpire #IA #StartupSpain',
      hashtags: ['#AIEmpire', '#IA', '#StartupSpain']
    },
    {
      date: '02/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutorial de 60 segundos:\n\nCómo crear un blog con IA en 5 minutos con AI Empire:\n\n1. Elige NeuraBlog (€19)\n2. Instala con npx\n3. Configura tus APIs\n4. Despliega en Vercel\n\n¡Eso es todo! ✅\n\n#AIEmpire #NextJS #Tutorial',
      hashtags: ['#AIEmpire', '#NextJS', '#Tutorial']
    },
    {
      date: '02/03',
      time: '15:00',
      platform: 'Instagram',
      type: 'Carousel',
      content: '🎨 Carrusel: "5 plantillas para lanzar tu SaaS en 2025"\n\nDiapositiva 1: NeuraBlog — Blog premium\nDiapositiva 2: NeuraStore — E-commerce\nDiapositiva 3: NeuraPortfolio — Portfolio\nDiapositiva 4: Paquete completo — 6 plantillas\nDiapositiva 5: CTA — Empieza ahora\n\n#AIEmpire #SaaS #Templates',
      hashtags: ['#AIEmpire', '#SaaS', '#Templates']
    },
    {
      date: '03/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Poll',
      content: '📊 Encuesta: ¿Cuánto pagas por tu API de IA?\n\nA) €0-50/mes\nB) €50-200/mes\nC) €200+/mes\nD) Todavía no tengo API de IA\n\n(Tenemos una solución para cada opción 😏)\n\n#AIEmpire #IA',
      hashtags: ['#AIEmpire', '#IA']
    },
    {
      date: '03/03',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Pregunta del día:\n\n¿Cuál es tu mayor desafío con la IA?\n\nA) Entender cómo usarla\nB) Encontrar APIs fiables\nC) Reducir costes\nD) Integrarla en mi producto\n\n¡Comparte en los comentarios! 👇',
      hashtags: ['#AIEmpire', '#IA', '#Comunidad']
    },
    {
      date: '04/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 Hilo: "5 consejos para reducir los costes de tu SaaS con IA"\n\n1/ Usa APIs gratuitas (Groq, Gemini)\n2/ Integra AI Empire (plantillas + APIs)\n3/ Automatiza el soporte con un chatbot de IA\n4/ Genera contenido con GPT-4\n5/ Analiza tus datos con IA\n\n#AIEmpire #SaaS',
      hashtags: ['#AIEmpire', '#SaaS']
    },
    {
      date: '04/03',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Caso de éxito: Cómo InnoveTech redujo sus costes de IA un 70%\n\nAntes de AI Empire:\n→ €3.000/mes en APIs de terceros\n→ 3 meses de desarrollo\n→ Soporte limitado\n\nDespués de AI Empire:\n→ €900/mes (-70%)\n→ 24 horas de desarrollo\n→ Soporte 24/7\n\nResultado: €25.000 ahorrados en 1 año.\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: '05/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Meme',
      content: 'Yo: "No voy a usar IA"\n\nYo también: *añade 47 funciones de IA en 1 hora con AI Empire*\n\n😂\n\n#AIEmpire #DevLife #IA',
      hashtags: ['#AIEmpire', '#DevLife', '#IA']
    },
    // SEMANA 2
    {
      date: '08/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Launch',
      content: '🚀 NUEVO: ¡NeuraStore v2 ya está disponible!\n\n✅ Diseño renovado\n✅ Rendimiento x2\n✅ Nuevas funciones e-commerce\n\nPrecio: €29 (-40% durante 72h)\n\nCódigo: NEURASTORE40\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #Launch',
      hashtags: ['#AIEmpire', '#Launch']
    },
    {
      date: '09/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Product',
      content: '📦 Presentación: NeuraStore v2\n\nLa plantilla e-commerce más completa para Next.js 14:\n\n→ Carrito de compra inteligente\n→ Pagos Stripe seguros\n→ Dashboard de administración profesional\n→ Diseño responsive + modo oscuro\n\nPrecio: €29 (-40% de lanzamiento)\n\nMás de 5.000 desarrolladores confían en nosotros.\n\n#AIEmpire #Ecommerce',
      hashtags: ['#AIEmpire', '#Ecommerce']
    },
    {
      date: '10/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Hilo: "Cómo lancé un e-commerce en 24h con €0 de presupuesto de infraestructura"\n\n1/ AI Empire me proporcionó NeuraStore (€29)\n2/ Conecté Stripe en 5 minutos\n3/ Desplegué en Vercel en 3 minutos\n4/ Tenía mi e-commerce en 24h\n5/ Coste total: €29\n\n#AIEmpire #BuildInPublic',
      hashtags: ['#AIEmpire', '#BuildInPublic']
    },
    // SEMANA 3
    {
      date: '15/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '📊 Resumen del mes:\n\n✅ 500+ nuevos usuarios\n✅ 100+ plantillas vendidas\n✅ 98% de satisfacción del cliente\n\n¡Gracias a la comunidad! 🙏\n\n#AIEmpire #Milestone',
      hashtags: ['#AIEmpire', '#Milestone']
    },
    {
      date: '16/03',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Founder Story',
      content: '💡 "Dejé mi trabajo para crear AI Empire. Estas son las razones."\n\nEl mercado español necesita una alternativa local a las APIs de IA americanas.\n\nAI Empire es esa alternativa:\n→ Enfoque español\n→ Soporte en español\n→ Facturación en EUR\n→ RGPD nativo\n\nMás de 5.000 desarrolladores confían en nosotros.\n\n#AIEmpire #FounderStory',
      hashtags: ['#AIEmpire', '#FounderStory']
    },
    // SEMANA 4
    {
      date: '22/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Teaser',
      content: '👀 Algo grande está llegando...\n\n📅 [FECHA]\n🎁 [PISTA]\n\nMantente conectado.\n\n#AIEmpire #Teaser',
      hashtags: ['#AIEmpire', '#Teaser']
    },
    {
      date: '25/03',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'CTA',
      content: '🎯 ¡Último día para aprovechar la oferta de lanzamiento!\n\n-30% en todas las plantillas\nCódigo: LAUNCH30\n⏰ Expira a medianoche\n\n¡No te lo pierdas!\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #ÚltimaOportunidad',
      hashtags: ['#AIEmpire', '#ÚltimaOportunidad']
    }
  ],
  metrics: {
    totalPosts: 16,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 0.57
  }
}

// ============================================================
// HORARIO SEMANAL
// ============================================================
export const weeklyPostingSchedule: ContentCalendar = {
  id: 'cal_weekly',
  name: 'Horario Semanal — AI Empire',
  period: 'Semana tipo',
  type: 'weekly',
  posts: [
    // LUNES
    {
      date: 'Lunes',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Hook',
      content: '🎯 Motivación del lunes: Un consejo de IA para impulsar tu productividad\n\n[CONSEJO DEL DÍA]\n\n#AIEmpire #LunesDeMotivación',
      hashtags: ['#AIEmpire', '#LunesDeMotivación']
    },
    {
      date: 'Lunes',
      time: '12:00',
      platform: 'LinkedIn',
      type: 'Thought Leadership',
      content: '💡 [TEMA DE LIDERAZGO DE OPINIÓN]\n\n[CONTENIDO PROFESIONAL]\n\n#AIEmpire #ThoughtLeadership',
      hashtags: ['#AIEmpire', '#ThoughtLeadership']
    },
    // MARTES
    {
      date: 'Martes',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Tutorial',
      content: '📹 Tutorial rápido: [Tema]\n\n1. Paso 1\n2. Paso 2\n3. Paso 3\n\n[CTA]\n\n#AIEmpire #Tutorial',
      hashtags: ['#AIEmpire', '#Tutorial']
    },
    {
      date: 'Martes',
      time: '15:00',
      platform: 'Instagram',
      type: 'Reel',
      content: '🎬 Reel de 30s: "Cómo [ACCIÓN] con AI Empire"\n\n[DEMOSTRACIÓN]\n\n#AIEmpire #Reel',
      hashtags: ['#AIEmpire', '#Reel']
    },
    // MIÉRCOLES
    {
      date: 'Miércoles',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Value',
      content: '💡 [CONTENIDO DE VALOR]\n\n[CONSEJO O RECOMENDACIÓN]\n\n#AIEmpire #Value',
      hashtags: ['#AIEmpire', '#Value']
    },
    {
      date: 'Miércoles',
      time: '14:00',
      platform: 'LinkedIn',
      type: 'Case Study',
      content: '📊 Caso de éxito: [CLIENTE]\n\nAntes: [SITUACIÓN]\nDespués: [RESULTADO]\n\n[LECCIONES APRENDIDAS]\n\n#AIEmpire #CaseStudy',
      hashtags: ['#AIEmpire', '#CaseStudy']
    },
    {
      date: 'Miércoles',
      time: '18:00',
      platform: 'Facebook',
      type: 'Video',
      content: '📹 Vídeo de 2min: "Cómo [Tema] con AI Empire"\n\n[TUTORIAL EN VÍDEO]\n\n#AIEmpire #Vídeo',
      hashtags: ['#AIEmpire', '#Vídeo']
    },
    // JUEVES
    {
      date: 'Jueves',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Thread',
      content: '🧵 Hilo: "[Tema]"\n\n1/ [Punto 1]\n2/ [Punto 2]\n3/ [Punto 3]\n\n#AIEmpire #Thread',
      hashtags: ['#AIEmpire', '#Thread']
    },
    {
      date: 'Jueves',
      time: '15:00',
      platform: 'LinkedIn',
      type: 'Data',
      content: '📊 [DATOS O ESTADÍSTICAS]\n\n[ANÁLISIS]\n\n[IMPLICACIONES]\n\n#AIEmpire #Data',
      hashtags: ['#AIEmpire', '#Data']
    },
    // VIERNES
    {
      date: 'Viernes',
      time: '09:00',
      platform: 'Twitter/X',
      type: 'Social Proof',
      content: '🏆 [TESTIMONIO DE CLIENTE]\n\n"Cómo AI Empire [BENEFICIO]"\n\n[PRUEBA SOCIAL]\n\n#AIEmpire #SocialProof',
      hashtags: ['#AIEmpire', '#SocialProof']
    },
    {
      date: 'Viernes',
      time: '18:00',
      platform: 'Twitter/X',
      type: 'Week Recap',
      content: '🔄 Resumen de la semana:\n\n✅ [LOGRO 1]\n✅ [LOGRO 2]\n✅ [LOGRO 3]\n\nPróxima semana: [VISTA PREVIA]\n\n#AIEmpire #Recap',
      hashtags: ['#AIEmpire', '#Recap']
    },
    // SÁBADO
    {
      date: 'Sábado',
      time: '10:00',
      platform: 'Instagram',
      type: 'Story',
      content: '📸 Historia: "Un día en la vida de un indie hacker"\n\n[ENTRE CÁMARAS]\n\n#AIEmpire #IndieHacker',
      hashtags: ['#AIEmpire', '#IndieHacker']
    },
    // DOMINGO
    {
      date: 'Domingo',
      time: '18:00',
      platform: 'Facebook',
      type: 'Community',
      content: '💬 Pregunta del domingo:\n\n¿Qué vas a crear esta semana?\n\n¡Comparte en los comentarios! 👇\n\n#AIEmpire #Comunidad',
      hashtags: ['#AIEmpire', '#Comunidad']
    }
  ],
  metrics: {
    totalPosts: 13,
    platforms: ['Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
    avgPostsPerDay: 1.86
  }
}

// ============================================================
// CALENDARIO DE FIESTAS
// ============================================================
export const holidayContentPlan: HolidayPlan[] = [
  {
    name: 'Día de San Valentín',
    date: '14/02',
    daysBefore: 7,
    content: [
      {
        date: '07/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '💕 El Día de San Valentín se acerca...\n\nAlgo especial viene para los desarrolladores...\n\n#AIEmpire #SanValentín',
        hashtags: ['#AIEmpire', '#SanValentín']
      },
      {
        date: '14/02',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '💕 Oferta de San Valentín de AI Empire:\n\n-20% en todas las plantillas con el código AMOUR20\n\nPorque el mejor regalo es un SaaS que funciona ❤️\n\n⏰ Solo 24 horas\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #SanValentín',
        hashtags: ['#AIEmpire', '#SanValentín']
      },
      {
        date: '14/02',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Fun',
        content: '💕 "El amor es encontrar a alguien que comparte tu pasión... por el código."\n\n— Un desarrollador solitario\n\n¡Feliz Día de San Valentín a todos los devs!\n\n#AIEmpire #SanValentín #DevLife',
        hashtags: ['#AIEmpire', '#SanValentín', '#DevLife']
      }
    ]
  },
  {
    name: 'Día del Trabajo',
    date: '01/05',
    daysBefore: 3,
    content: [
      {
        date: '28/04',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📅 El 1 de mayo se acerca...\n\n¿Preparado para trabajar... menos? 🤔\n\n#AIEmpire #DíaDelTrabajo',
        hashtags: ['#AIEmpire', '#DíaDelTrabajo']
      },
      {
        date: '01/05',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎉 ¡Feliz Día del Trabajo!\n\nHoy celebramos a los desarrolladores que construyen el futuro.\n\n¡Gracias a nuestros más de 5.000 usuarios! 🙏\n\n#AIEmpire #DíaDelTrabajo #DevLife',
        hashtags: ['#AIEmpire', '#DíaDelTrabajo', '#DevLife']
      }
    ]
  },
  {
    name: 'Fête de la Musique',
    date: '21/06',
    daysBefore: 5,
    content: [
      {
        date: '16/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎵 La Fête de la Musique se acerca...\n\n¿Y si hiciéramos música... con código? 🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      },
      {
        date: '21/06',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Fun',
        content: '🎵 ¡Feliz Fête de la Musique!\n\nNuestra playlist del día:\n1. "Bohemian Rhapsody" — Queen\n2. "AI Empire Theme" — Nuestra imaginación\n3. "El sonido del código compilando" — Todos los devs\n\n🎶\n\n#AIEmpire #FêteDeLaMusique',
        hashtags: ['#AIEmpire', '#FêteDeLaMusique']
      }
    ]
  },
  {
    name: 'Fiesta Nacional',
    date: '14/07',
    daysBefore: 7,
    content: [
      {
        date: '07/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🇫🇷 La Fiesta Nacional se acerca...\n\n¡Y tenemos algo especial para celebrar la tech española! 🇪🇸\n\n#AIEmpire #FiestaNacional',
        hashtags: ['#AIEmpire', '#FiestaNacional']
      },
      {
        date: '14/07',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🇫🇷 ¡Feliz Fiesta Nacional!\n\nHoy celebramos la tech española:\n→ Más de 5.000 desarrolladores\n→ 200+ SaaS lanzados\n→ 100% made in Spain\n\n¡Viva la tech española! 🇪🇸🚀\n\n#AIEmpire #FiestaNacional #SpainTech',
        hashtags: ['#AIEmpire', '#FiestaNacional', '#SpainTech']
      },
      {
        date: '14/07',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Patriotic',
        content: '🇫🇷 Fiesta Nacional: ¡Es hora de la tech española!\n\nAI Empire está orgulloso de representar la innovación española:\n→ Más de 5.000 desarrolladores\n→ 200+ SaaS lanzados\n→ Soporte en español\n→ Facturación en EUR\n→ RGPD nativo\n\n¡Viva la tech española! 🇪🇸\n\n#AIEmpire #FiestaNacional #SpainTech',
        hashtags: ['#AIEmpire', '#FiestaNacional', '#SpainTech']
      }
    ]
  },
  {
    name: 'Vuelta al Cole',
    date: '02/09',
    daysBefore: 14,
    content: [
      {
        date: '19/08',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '📚 La vuelta al cole se acerca...\n\n¿Y si aprendieras algo nuevo?\n\nEstamos preparando algo especial para ti... 👀\n\n#AIEmpire #VueltaAlCole',
        hashtags: ['#AIEmpire', '#VueltaAlCole']
      },
      {
        date: '02/09',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Promo',
        content: '📚 Vuelta al Cole 2025: ¡Aprende a crear tu SaaS!\n\nOferta especial de vuelta al cole:\n-25% en todas las plantillas\nCódigo: RENTREE25\n\n⏰ Del 2 al 15 de septiembre\n\nPaquete incluido:\n→ 6 plantillas Next.js 14\n→ Tutoriales completos\n→ Soporte prioritario\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #VueltaAlCole',
        hashtags: ['#AIEmpire', '#VueltaAlCole']
      }
    ]
  },
  {
    name: 'Black Friday',
    date: '28/11',
    daysBefore: 14,
    content: [
      {
        date: '14/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🖤 El Black Friday se acerca...\n\nPrepárate. Es la oferta del año.\n\n👀\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '21/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '⏰ ¡1 semana para el Black Friday de AI Empire!\n\n-50% EN TODO.\n\nMarca tu fecha:\n📅 28 de noviembre\n\nSuscríbete para recibir notificaciones:\n👉 ai-empire-steel.vercel.app/black-friday\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      },
      {
        date: '28/11',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Launch',
        content: '🖤 BLACK FRIDAY AI EMPIRE — ¡EMPEZÓ! 🖤\n\n-50% EN TODO DURANTE 5 DÍAS!\n\n📦 Plantillas desde €9.50 hasta €149.50\n📦 Plan Pro -50%\n📦 Los 50 primeros = plantilla bonus GRATIS\n\nCódigo: BLACKFRIDAY50\n\n👉 ai-empire-steel.vercel.app\n\n#AIEmpire #BlackFriday',
        hashtags: ['#AIEmpire', '#BlackFriday']
      }
    ]
  },
  {
    name: 'Navidad',
    date: '25/12',
    daysBefore: 10,
    content: [
      {
        date: '15/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎄 La Navidad se acerca...\n\nY tenemos un regalo para ti...\n\n🎁\n\n#AIEmpire #Navidad',
        hashtags: ['#AIEmpire', '#Navidad']
      },
      {
        date: '20/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Countdown',
        content: '🎄 ¡5 días para la Navidad!\n\nNuestro calendario de adviento:\n→ 1 plantilla gratis cada día\n→ Códigos promocionales exclusivos\n→ Contenido sorpresa\n\n¡Únete!\n\n#AIEmpire #Navidad #CalendarioAdviento',
        hashtags: ['#AIEmpire', '#Navidad', '#CalendarioAdviento']
      },
      {
        date: '25/12',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎄 ¡Feliz Navidad! 🎄\n\n¡Gracias a nuestros más de 5.000 usuarios!\n\nRegalo: -30% en todas las plantillas\nCódigo: NOEL2025\n\n¡Felices fiestas! 🎅\n\n#AIEmpire #Navidad',
        hashtags: ['#AIEmpire', '#Navidad']
      }
    ]
  },
  {
    name: 'Año Nuevo',
    date: '01/01',
    daysBefore: 7,
    content: [
      {
        date: '25/12',
        time: '18:00',
        platform: 'Twitter/X',
        type: 'Teaser',
        content: '🎆 El 2025 se acerca...\n\n¿Listo para lanzar tu SaaS?\n\nEstamos preparando algo especial para ti...\n\n#AIEmpire #AñoNuevo',
        hashtags: ['#AIEmpire', '#AñoNuevo']
      },
      {
        date: '01/01',
        time: '09:00',
        platform: 'Twitter/X',
        type: 'Message',
        content: '🎆 ¡Feliz Año Nuevo 2025! 🎆\n\n2025 es TU año. El año en que lanzas tu SaaS.\n\nOferta de Año Nuevo:\n-25% + 500 créditos gratis\nCódigo: NOUVELAN2025\n\n¡Haz de este año el bueno!\n\n#AIEmpire #AñoNuevo #2025',
        hashtags: ['#AIEmpire', '#AñoNuevo', '#2025']
      },
      {
        date: '01/01',
        time: '12:00',
        platform: 'LinkedIn',
        type: 'Motivational',
        content: '🎆 Nuevo año, nuevo SaaS.\n\n2025 es el año en que pasas a la acción.\n\nAI Empire está aquí para acompañarte:\n→ Plantillas listas para usar\n→ APIs de IA gratuitas\n→ Soporte 24/7\n\nÚnete a más de 5.000 desarrolladores que ya han lanzado su SaaS.\n\n¡Feliz Año Nuevo! 🎆\n\n#AIEmpire #AñoNuevo #2025',
        hashtags: ['#AIEmpire', '#AñoNuevo', '#2025']
      }
    ]
  }
]

// ============================================================
// FUNCIONES UTILITARIAS
// ============================================================

export function getAllContentCalendars(): ContentCalendar[] {
  return [monthlyContentPlan, weeklyPostingSchedule]
}

export function getHolidayByName(name: string): HolidayPlan | undefined {
  return holidayContentPlan.find(h => h.name === name)
}

export function getHolidaysForMonth(month: number): HolidayPlan[] {
  return holidayContentPlan.filter(h => {
    const holidayMonth = parseInt(h.date.split('/')[1], 10)
    return holidayMonth === month
  })
}

export function generateCalendarId(): string {
  return `cal_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function getContentByPlatform(posts: ContentPost[], platform: string): ContentPost[] {
  return posts.filter(p => p.platform === platform)
}

export function getContentByDay(posts: ContentPost[], day: string): ContentPost[] {
  return posts.filter(p => p.date === day)
}

export function formatCalendarForExport(posts: ContentPost[]): string {
  return posts.map(p =>
    `${p.date} | ${p.time} | ${p.platform} | ${p.type} | ${p.content.substring(0, 50)}...`
  ).join('\n')
}
