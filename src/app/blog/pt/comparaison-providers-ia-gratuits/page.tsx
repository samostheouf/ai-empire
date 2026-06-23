import Link from 'next/link'
import { generateMetadata } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateMetadata({
  title: "Comparação de provedores de IA gratuitos: Groq vs Gemini vs OpenAI",
  description: "Comparação honesta e detalhada de provedores de IA gratuitos para desenvolvedores. Desempenho, preços, limites e casos de uso.",
  path: '/blog/pt/comparaison-providers-ia-gratuits',
  type: 'article',
  keywords: ['Groq', 'Gemini', 'OpenAI', 'IA gratuita', 'comparação', 'provedores de IA', 'desenvolvedor web', 'API de IA'],
  publishedTime: '2024-06-20',
  modifiedTime: '2024-12-01',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Comparação de provedores de IA gratuitos: Groq vs Gemini vs OpenAI',
  description: 'Comparação honesta de provedores de IA gratuitos para desenvolvedores.',
  author: { '@type': 'Organization', name: 'NeuraAPI' },
  publisher: { '@type': 'Organization', name: 'NeuraAPI' },
  datePublished: '2024-06-20',
  dateModified: '2024-12-01',
  mainEntityOfPage: 'https://ai-empire-steel.vercel.app/blog/pt/comparaison-providers-ia-gratuits',
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export default function ComparaisonProvidersIaPage() {
  const articleSchema = generateArticleSchema({
    title: 'Comparação de provedores de IA gratuitos: Groq vs Gemini vs OpenAI',
    description: 'Comparação honesta de provedores de IA gratuitos para desenvolvedores.',
    slug: 'comparaison-providers-ia-gratuits',
    datePublished: '2024-06-20',
    dateModified: '2024-12-01',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog/pt' },
      { name: 'Comparação provedores IA', path: '/blog/pt/comparaison-providers-ia-gratuits' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog/pt' }, { name: 'Comparação provedores IA', href: '/blog/pt/comparaison-providers-ia-gratuits' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              Comparação
            </span>
            <span className="text-sm text-indigo-400">20 de junho de 2024</span>
            <span className="text-sm text-indigo-400">15 min de leitura</span>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Comparação de provedores de IA gratuitos: Groq vs Gemini vs OpenAI
          </h1>

          <div className="mt-8">
            <ShareButtons url={`${baseUrl}/blog/pt/comparaison-providers-ia-gratuits`} title="Comparação de provedores de IA gratuitos" />
          </div>
        </div>

        <div className="prose prose-invert prose-lg mt-12 max-w-none">
          <div className="space-y-8 text-indigo-200 leading-relaxed">
            <p>
              Escolher o provedor de IA certo é uma decisão crítica para desenvolvedores. As ofertas gratuitas permitem testar sem risco financeiro, mas cada provedor tem seus pontos fortes e fracos. Aqui está uma comparação honesta baseada em testes reais.
            </p>

            <div className="rounded-xl bg-indigo-900/30 border border-indigo-800/50 p-6 my-8">
              <h3 className="text-white font-semibold mb-2">Metodologia</h3>
              <p className="text-sm text-indigo-300">
                Esta comparação é baseada em testes realizados em dezembro de 2024. Os preços e limites do tier gratuito podem mudar. Testamos cada provedor com os mesmos prompts para comparar os resultados.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Visão geral</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-indigo-800/50">
                    <th className="py-3 text-left text-indigo-400 font-semibold">Critério</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Groq</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">Gemini</th>
                    <th className="py-3 text-center text-indigo-400 font-semibold">OpenAI</th>
                  </tr>
                </thead>
                <tbody className="text-indigo-200">
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Tier gratuito</td>
                    <td className="py-3 text-center">Sim</td>
                    <td className="py-3 text-center">Sim</td>
                    <td className="py-3 text-center">Limitado</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Modelos disponíveis</td>
                    <td className="py-3 text-center">Llama 3.3, Mixtral</td>
                    <td className="py-3 text-center">Gemini 1.5 Flash, Pro</td>
                    <td className="py-3 text-center">GPT-4o mini, GPT-4o</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Velocidade</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Muito rápida</td>
                    <td className="py-3 text-center">Rápida</td>
                    <td className="py-3 text-center">Média</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Qualidade (prompt médio)</td>
                    <td className="py-3 text-center">Boa</td>
                    <td className="py-3 text-center text-green-400 font-semibold">Muito boa</td>
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
                    <td className="py-3 text-center">Sim</td>
                    <td className="py-3 text-center">Sim</td>
                    <td className="py-3 text-center">Sim</td>
                  </tr>
                  <tr className="border-b border-indigo-800/30">
                    <td className="py-3 font-medium text-white">Visão</td>
                    <td className="py-3 text-center text-red-400">Não</td>
                    <td className="py-3 text-center text-green-400">Sim</td>
                    <td className="py-3 text-center text-green-400">Sim</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Idiomas suportados</td>
                    <td className="py-3 text-center">Python, JS</td>
                    <td className="py-3 text-center">Python, JS, Go</td>
                    <td className="py-3 text-center">Python, JS, +</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Groq — Velocidade como vantagem</h2>
            <p>
              Groq se destaca pela sua velocidade excepcional. As respostas são quase instantâneas, tornando-o o provedor ideal para aplicações que requerem feedback rápido: chatbots, autocomplete, sugestões em tempo real.
            </p>
            <p>
              <strong className="text-white">Pontos fortes:</strong> Velocidade impressionante (até 500 tokens/segundo), API compatível com OpenAI, modelo Llama 3.3 70B de alto desempenho, tier gratuito generoso.
            </p>
            <p>
              <strong className="text-white">Pontos fracos:</strong> Sem visão, modelos limitados aos da Meta/Mistral, menos desempenho que o GPT-4 em tarefas complexas.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemplo com Groq (API compatível com OpenAI)
import OpenAI from 'openai'

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
})

const response = await groq.chat.completions.create({
  model: 'llama-3.3-70b-versatile',
  messages: [{ role: 'user', content: 'Olá' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Gemini — O gigante do Google</h2>
            <p>
              Google Gemini oferece um tier gratuito com um contexto de 1 milhão de tokens, o que é inigualável. A capacidade de processar documentos muito longos torna-o uma escolha interessante para análise de dados e pesquisa documental.
            </p>
            <p>
              <strong className="text-white">Pontos fortes:</strong> Contexto de milhão de tokens, visão integrada, desempenho sólido, SDKs oficiais para vários idiomas, integração nativa com o ecossistema Google.
            </p>
            <p>
              <strong className="text-white">Pontos fracos:</strong> API por vezes instável, documentação por vezes incompleta, latência mais alta que o Groq, function calling menos confiável.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemplo com Google Gemini
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

const result = await model.generateContent('Explique machine learning')
console.log(result.response.text())`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">OpenAI — A referência</h2>
            <p>
              OpenAI continua sendo a referência em qualidade de resposta. GPT-4o é o modelo mais capaz disponível, mas o tier gratuito é muito limitado. O GPT-4o mini oferece um bom equilíbrio qualidade/preço.
            </p>
            <p>
              <strong className="text-white">Pontos fortes:</strong> Melhor qualidade de resposta, ecossistema maduro, documentação excelente, grande comunidade, function calling confiável, visão e áudio.
            </p>
            <p>
              <strong className="text-white">Pontos fracos:</strong> Tier gratuito quase inexistente, GPT-4o caro, latência variável, dependência de um único provedor.
            </p>
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30 my-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto">{`// Exemplo com OpenAI
import OpenAI from 'openai'

const openai = new OpenAI()

const response = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [{ role: 'user', content: 'Olá' }],
})
console.log(response.choices[0].message.content)`}</pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Nossa recomendação</h2>
            <p>
              Não há um provedor universalmente melhor. A escolha depende do seu caso de uso:
            </p>
            <div className="space-y-3 my-6">
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para velocidade e custo</h3>
                <p className="text-sm text-indigo-300">Groq é imbatível. A velocidade de resposta e o tier gratuito tornam-no a escolha ideal para protótipos e aplicações em tempo real.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para documentos longos</h3>
                <p className="text-sm text-indigo-300">Gemini com seu contexto de 1M tokens é a única escolha viável para analisar documentos muito longos ou pilhas de dados.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para máxima qualidade</h3>
                <p className="text-sm text-indigo-300">GPT-4o continua sendo o melhor modelo. Se a qualidade é primordial e o orçamento permite, é a escolha segura.</p>
              </div>
              <div className="rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
                <h3 className="text-white font-semibold mb-1">Para simplificar tudo</h3>
                <p className="text-sm text-indigo-300">NeuraAPI unifica Groq e OpenAI atrás de uma única API. Mude de provedor sem modificar seu código.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12">Conclusão</h2>
            <p>
              Cada provedor tem seu lugar. Groq domina a velocidade, Gemini se destaca em documentos longos, OpenAI lidera na qualidade. A abordagem mais pragmática é começar com o provedor mais adequado ao seu caso de uso, depois avaliar se uma mudança é necessária conforme você cresce.
            </p>
            <p>
              Com NeuraAPI, você não precisa escolher. Uma única chave de API, acesso a vários provedores, faturamento unificado. Teste diferentes provedores e encontre o que atende às suas necessidades.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              Experimente NeuraAPI
            </h3>
            <p className="mt-3 text-indigo-200">
              Acesse Groq e OpenAI via uma única API. 100 créditos gratuitos.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 transition-all"
              >
                Comece grátis
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-indigo-500 px-6 py-3 text-base font-semibold text-indigo-200 hover:bg-indigo-900/50 transition-all"
              >
                Leia a documentação
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}