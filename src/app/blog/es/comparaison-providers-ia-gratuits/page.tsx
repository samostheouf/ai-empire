import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Comparación de proveedores de IA gratuitos: Groq vs Gemini vs OpenAI",
  description: "Comparación honesta y detallada de proveedores de IA gratuitos para desarrolladores. Rendimiento, precios, límites y casos de uso.",
  path: '/blog/es/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', 'IA gratuita', 'comparación', 'proveedores de IA', 'desarrollador web', 'API de IA'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Comparación de proveedores de IA gratuitos: Groq vs Gemini vs OpenAI',
  description: 'Comparación honesta de proveedores de IA gratuitos para desarrolladores.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/es/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: 'Comparación de proveedores de IA gratuitos: Groq vs Gemini vs OpenAI',
    description: 'Comparación honesta de proveedores de IA gratuitos para desarrolladores.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/es' },
      { name: 'Comparación proveedores IA', path: '/blog/es/comparaison-providers-ia-gratuits' },
    ],
  })

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/es' }, { name: 'Comparación proveedores IA', href: '/blog/es/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Comparación
            </span>
            <span className="text-sm text-indigo-400">20 de junio de 2024</span>
            <span className="text-sm text-indigo-400">15 min de lectura</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Comparación de proveedores de IA gratuitos: Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/es/comparaison-providers-ia-gratuits`} title="Comparación de proveedores de IA gratuitos" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Elegir el proveedor de IA adecuado es una decisión crítica para los desarrolladores. Las ofertas gratuitas permiten probar sin riesgo financiero, pero cada proveedor tiene sus fortalezas y debilidades. Aquí hay una comparación honesta basada en pruebas reales.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Metodología</h3>
              <p className="text-sm text-indigo-300">
                Esta comparación se basa en pruebas realizadas en diciembre de 2024. Los precios y los límites del nivel gratuito pueden cambiar. Probamos cada proveedor con las mismas consultas para comparar los resultados.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Resumen</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">Criterio</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Nivel gratuito</td>
                    <td className="py-3 text-center">Sí</td>
                    <td className="py-3 text-center">Sí</td>
                    <td className="py-3 text-center">Limitado</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Modelos disponibles</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Velocidad</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Muy rápida</td>
                    <td className="py-3 text-center">Rápida</td>
                    <td className="py-3 text-center">Media</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Calidad (prompt promedio)</td>
                    <td className="py-3 text-center">Buena</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Muy buena</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Excelente</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Contexto (tokens)</td>
                    <td className="py-3 text-center">128K</td>
                    <td className="py-3 text-center text-green-400 font-semibold">1M</td>
                    <td className="py-3 text-center">128K</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Function calling</td>
                    <td className="py-3 text-center">Sí</td>
                    <td className="py-3 text-center">Sí</td>
                    <td className="py-3 text-center">Sí</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Visión</td>
                    <td className="py-3 text-center text-red-400">No</td>
                    <td className="py-3 text-center text-green-400">Sí</td>
                    <td className="py-3 text-center text-green-400">Sí</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Idiomas soportados</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — La velocidad como ventaja</h2>
            <p>
              Groq se destaca por su velocidad excepcional. Las respuestas son casi instantáneas, lo que lo convierte en el proveedor ideal para aplicaciones que requieren retroalimentación rápida: chatbots, autocompletado, sugerencias en tiempo real.
            </p>
            <p>
              <strong className="text-white">Puntos fuertes:</strong> Velocidad impresionante (hasta 500 tokens/segundo), API compatible con OpenAI, modelo Llama 3.3 70B de alto rendimiento, nivel gratuito generoso.
            </p>
            <p>
              <strong className="text-white">Puntos débiles:</strong> Sin visión, modelos limitados a los de Meta/Mistral, menos rendimiento que GPT-4 en tareas complejas.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Ejemplo con Groq (API compatible con OpenAI)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Hola' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — El gigante de Google</h2>
            <p>
              Google Gemini ofrece un nivel gratuito con un contexto de 1 millón de tokens, lo cual es inigualable. La capacidad de procesar documentos muy largos lo convierte en una opción interesante para el análisis de datos y la investigación documental.
            </p>
            <p>
              <strong className="text-white">Puntos fuertes:</strong> Contexto de un millón de tokens, visión integrada, rendimiento sólido, SDK oficiales para varios idiomas, integración nativa con el ecosistema de Google.
            </p>
            <p>
              <strong className="text-white">Puntos débiles:</strong> API a veces inestable, documentación a veces incompleta, latencia más alta que Groq, function calling menos confiable.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Ejemplo con Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('Explica el aprendizaje automático')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — La referencia</h2>
            <p>
              OpenAI sigue siendo la referencia en cuanto a calidad de respuesta. GPT-4o es el modelo más capaz disponible, pero el nivel gratuito es muy limitado. GPT-4o mini ofrece un buen equilibrio calidad/precio.
            </p>
            <p>
              <strong className="text-white">Puntos fuertes:</strong> Mejor calidad de respuesta, ecosistema maduro, documentación excelente, gran comunidad, function calling confiable, visión y audio.
            </p>
            <p>
              <strong className="text-white">Puntos débiles:</strong> Nivel gratuito casi inexistente, GPT-4o costoso, latencia variable, dependencia de un solo proveedor.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Ejemplo con OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Hola' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Nuestra recomendación</h2>
            <p>
              No hay un proveedor universalmente mejor. La elección depende de su caso de uso:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para la velocidad y el costo</h3>
                <p className="text-sm text-indigo-300">Groq es imbatible. La velocidad de respuesta y el nivel gratuito lo convierten en la opción ideal para prototipos y aplicaciones en tiempo real.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para documentos largos</h3>
                <p className="text-sm text-indigo-300">Gemini con su contexto de 1M tokens es la única opción viable para analizar documentos muy largos o montones de datos.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para la máxima calidad</h3>
                <p className="text-sm text-indigo-300">GPT-4o sigue siendo el mejor modelo. Si la calidad es primordial y el presupuesto lo permite, es la opción segura.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para simplificar todo</h3>
                <p className="text-sm text-indigo-300">NeuraAPI unifica Groq y OpenAI detrás de una sola API. Cambia de proveedor sin modificar tu código.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusión</h2>
            <p>
              Cada proveedor tiene su lugar. Groq domina la velocidad, Gemini sobresale con documentos largos, OpenAI lidera en calidad. El enfoque más pragmático es comenzar con el proveedor mejor adaptado a su caso de uso, luego evaluar si es necesario un cambio a medida que crece.
            </p>
            <p>
              Con NeuraAPI, no tienes que elegir. Una sola clave de API, acceso a múltiples proveedores, facturación unificada. Prueba diferentes proveedores y encuentra el que se adapte a tus necesidades.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Prueba NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              Accede a Groq y OpenAI a través de una sola API. 100 créditos gratuitos.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Empieza gratis
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Leer la documentación
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}