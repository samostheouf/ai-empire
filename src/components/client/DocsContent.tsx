'use client'

import { useState } from 'react'
import { Zap, Shield, AlertTriangle, Clock, ChevronDown, Copy, Check, Terminal, Send } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function DocsContent() {
  const { t: rawT } = useI18n(); const t = rawT as (key: string) => string
  const [activeTab, setActiveTab] = useState('curl')
  const [selectedEndpoint, setSelectedEndpoint] = useState('generate')
  const [tryItPrompt, setTryItPrompt] = useState('')
  const [tryItResult, setTryItResult] = useState('')
  const [tryItLoading, setTryItLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [expandedAuth, setExpandedAuth] = useState(false)

  const appUrl = 'https://ai-empire-steel.vercel.app'

  const ENDPOINTS = [
    {
      name: 'generate',
      title: t('docsContentGenTitle'),
      method: 'POST',
      path: '/api/ai/generate',
      description: t('docsContentGenDesc'),
      params: [
        { name: 'prompt', type: 'string', required: true, desc: t('docsContentGenParamPrompt') },
        { name: 'maxTokens', type: 'number', required: false, desc: t('docsContentGenParamMaxTokens') },
        { name: 'model', type: 'string', required: false, desc: t('docsContentGenParamModel') },
      ],
      exampleReq: `{\n  "prompt": "Write a paragraph about the benefits of automation",\n  "maxTokens": 500\n}`,
      exampleRes: `{\n  "content": "Automation allows businesses to improve productivity...",\n  "tokensUsed": 120,\n  "model": "groq-llama-3.3-70b"\n}`,
    },
    {
      name: 'chat',
      title: t('docsContentChatTitle'),
      method: 'POST',
      path: '/api/ai/chat',
      description: t('docsContentChatDesc'),
      params: [
        { name: 'messages', type: 'Message[]', required: true, desc: t('docsContentChatParamMessages') },
        { name: 'system', type: 'string', required: false, desc: t('docsContentChatParamSystem') },
        { name: 'maxTokens', type: 'number', required: false, desc: t('docsContentChatParamMaxTokens') },
      ],
      exampleReq: `{\n  "messages": [\n    { "role": "user", "content": "How to build an API with Next.js?" }\n  ],\n  "system": "You are a web development expert. Answer clearly and concisely.",\n  "maxTokens": 800\n}`,
      exampleRes: `{\n  "content": "To build an API with Next.js, use Route Handlers in the app/api/ directory...",\n  "tokensUsed": 250,\n  "model": "groq-llama-3.3-70b"\n}`,
    },
    {
      name: 'seo',
      title: t('docsContentSeoTitle'),
      method: 'POST',
      path: '/api/ai/seo',
      description: t('docsContentSeoDesc'),
      params: [
        { name: 'topic', type: 'string', required: true, desc: t('docsContentSeoParamTopic') },
        { name: 'keywords', type: 'string[]', required: false, desc: t('docsContentSeoParamKeywords') },
        { name: 'maxTokens', type: 'number', required: false, desc: t('docsContentSeoParamMaxTokens') },
      ],
      exampleReq: `{\n  "topic": "Automate your workflow with AI",\n  "keywords": ["automation", "AI", "workflow", "productivity"],\n  "maxTokens": 1500\n}`,
      exampleRes: `{\n  "title": "Automate your workflow with AI: practical guide 2024",\n  "metaDescription": "Discover how to automate repetitive tasks with AI...",\n  "content": "## Introduction\\n\\nWorkflow automation...",\n  "tokensUsed": 600\n}`,
    },
    {
      name: 'code',
      title: t('docsContentCodeTitle'),
      method: 'POST',
      path: '/api/ai/code',
      description: t('docsContentCodeDesc'),
      params: [
        { name: 'description', type: 'string', required: true, desc: t('docsContentCodeParamDesc') },
        { name: 'language', type: 'string', required: false, desc: t('docsContentCodeParamLang') },
        { name: 'framework', type: 'string', required: false, desc: t('docsContentCodeParamFramework') },
      ],
      exampleReq: `{\n  "description": "A React component that displays a task list with delete functionality",\n  "language": "typescript",\n  "framework": "react"\n}`,
      exampleRes: `{\n  "code": "import React, { useState } from 'react'\\n\\ninterface Task {\\n  id: number\\n  title: string\\n}\\n\\nexport function TaskList() {\\n  const [tasks, setTasks] = useState<Task[]>([])\\n  // ...",\n  "tokensUsed": 350,\n  "language": "typescript"\n}`,
    },
  ]

  const ep = ENDPOINTS.find(e => e.name === selectedEndpoint)!

  const ERROR_CODES = [
    { code: 400, name: t('docsContentError400Name'), desc: t('docsContentError400Desc') },
    { code: 401, name: t('docsContentError401Name'), desc: t('docsContentError401Desc') },
    { code: 402, name: t('docsContentError402Name'), desc: t('docsContentError402Desc') },
    { code: 429, name: t('docsContentError429Name'), desc: t('docsContentError429Desc') },
    { code: 500, name: t('docsContentError500Name'), desc: t('docsContentError500Desc') },
  ]

  const RATE_LIMITS = [
    { plan: 'Starter', credits: '100/mois', rpm: '10', description: t('docsContentRateStarterDesc') },
    { plan: 'Pro', credits: '10 000/mois', rpm: '60', description: t('docsContentRateProDesc') },
    { plan: 'Enterprise', credits: 'Illimité', rpm: 'Illimité', description: t('docsContentRateEnterpriseDesc') },
  ]

  const copyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleTryIt = async () => {
    if (!tryItPrompt.trim()) return
    setTryItLoading(true)
    setTryItResult('')
    try {
      const res = await fetch(`${appUrl}/api/ai/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'napi_demo_playground',
        },
        body: JSON.stringify({ prompt: tryItPrompt, maxTokens: 500 }),
      })
      const data = await res.json()
      if (data.content) {
        setTryItResult(data.content)
      } else if (data.error) {
        setTryItResult(`Error: ${data.error}`)
      } else {
        setTryItResult(JSON.stringify(data, null, 2))
      }
    } catch {
      setTryItResult(t('docsContentImpossibleApi'))
    } finally {
      setTryItLoading(false)
    }
  }

  const sdkExamples: Record<string, string> = {
    curl: `curl -X POST ${appUrl}/api/ai/generate \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: napi_your_key_here" \\
  -d '${ep.exampleReq}'`,
    javascript: `const response = await fetch('${appUrl}${ep.path}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'napi_your_key_here'
  },
  body: JSON.stringify(${ep.exampleReq})
})

const data = await response.json()`,
    python: `import requests

response = requests.post(
    "${appUrl}${ep.path}",
    headers={
        "Content-Type": "application/json",
        "x-api-key": "napi_your_key_here"
    },
    json=${ep.exampleReq}
)

data = response.json()`,
  }

  return (
    <>
      <div className="mt-12 flex flex-wrap gap-2">
        {['auth', 'endpoints', 'playground', 'errors', 'rate-limits'].map(section => (
          <a
            key={section}
            href={`#${section}`}
            className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-800/50 hover:bg-indigo-800/50 hover:text-white transition-colors"
          >
            {section === 'auth' ? t('docsContentNavAuth') : section === 'endpoints' ? t('docsContentNavEndpoints') : section === 'playground' ? t('docsContentNavPlayground') : section === 'errors' ? t('docsContentNavErrors') : t('docsContentNavLimits')}
          </a>
        ))}
      </div>

      <section id="auth" className="mt-16">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Shield className="w-6 h-6 text-indigo-400" />
          {t('docsContentAuthTitle')}
        </h2>
        <p className="mt-3 text-indigo-300 leading-relaxed">
          {t('docsContentAuthDesc')}
        </p>

        <button
          onClick={() => setExpandedAuth(!expandedAuth)}
          aria-label={expandedAuth ? t('docsContentAuthHide') : t('docsContentAuthShow')}
          className="mt-4 flex items-center gap-2 text-sm text-indigo-400 hover:text-white transition-colors"
        >
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedAuth ? 'rotate-180' : ''}`} />
          {expandedAuth ? t('docsContentAuthHide') : t('docsContentAuthShow')}
        </button>

        {expandedAuth && (
          <div className="mt-4 rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-6 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">{t('docsContentAuthKeyFormat')}</h3>
              <p className="text-sm text-indigo-300">{t('docsContentAuthKeyFormatDesc')}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">{t('docsContentAuthHeader')}</h3>
              <div className="rounded-lg bg-indigo-950/80 p-3 border border-indigo-800/30">
                <code className="text-sm text-indigo-200 font-mono">x-api-key: napi_your_key_here</code>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">{t('docsContentAuthSecurity')}</h3>
              <ul className="text-sm text-indigo-300 space-y-1">
                <li>• {t('docsContentAuthSecurityTip1')}</li>
                <li>• {t('docsContentAuthSecurityTip2')}</li>
                <li>• {t('docsContentAuthSecurityTip3')}</li>
              </ul>
            </div>
          </div>
        )}

        <div className="mt-4 rounded-xl bg-indigo-900/50 p-4 border border-indigo-800/50">
          <pre className="text-sm text-indigo-200 overflow-x-auto">{`curl -X POST ${appUrl}/api/ai/generate \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: napi_your_key_here" \\
  -d '{"prompt": "Hello world"}'`}</pre>
        </div>
      </section>

      <section id="endpoints" className="mt-16">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Terminal className="w-6 h-6 text-indigo-400" />
          Endpoints
        </h2>
        <p className="mt-3 text-indigo-300">
          {t('docsContentEndpointsDesc')}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ENDPOINTS.map(e => (
            <button
              key={e.name}
              onClick={() => setSelectedEndpoint(e.name)}
              className={`rounded-xl border p-4 text-left transition-all ${
                selectedEndpoint === e.name
                  ? 'border-indigo-500 bg-indigo-900/50 shadow-lg shadow-indigo-500/10'
                  : 'border-indigo-800/50 bg-indigo-900/20 hover:border-indigo-600/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">POST</span>
                <span className="text-sm font-semibold text-white">/{e.name}</span>
              </div>
              <p className="mt-1 text-xs text-indigo-400">{e.title}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">POST</span>
            <code className="text-lg font-mono text-white">{ep.path}</code>
          </div>
          <p className="text-indigo-300">{ep.description}</p>

          <h3 className="mt-6 text-sm font-semibold text-white uppercase tracking-wider">{t('docsContentParams')}</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-indigo-800/50">
                  <th className="py-2 text-left text-indigo-400 font-medium">{t('docsContentParamName')}</th>
                  <th className="py-2 text-left text-indigo-400 font-medium">{t('docsContentParamType')}</th>
                  <th className="py-2 text-left text-indigo-400 font-medium">{t('docsContentParamRequired')}</th>
                  <th className="py-2 text-left text-indigo-400 font-medium">{t('docsContentParamDesc')}</th>
                </tr>
              </thead>
              <tbody className="text-indigo-200">
                {ep.params.map(p => (
                  <tr key={p.name} className="border-b border-indigo-800/30">
                    <td className="py-2.5 font-mono text-indigo-300">{p.name}</td>
                    <td className="py-2.5 font-mono text-indigo-400 text-xs">{p.type}</td>
                    <td className="py-2.5">
                      {p.required ? (
                        <span className="text-xs bg-indigo-600/30 text-indigo-300 px-2 py-0.5 rounded">{t('docsContentParamRequiredVal')}</span>
                      ) : (
                        <span className="text-xs text-indigo-500">{t('docsContentParamOptional')}</span>
                      )}
                    </td>
                    <td className="py-2.5 text-indigo-300">{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-8 text-sm font-semibold text-white uppercase tracking-wider">{t('docsContentCodeExamples')}</h3>
          <div className="mt-3 flex gap-2">
            {(['curl', 'javascript', 'python'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-900/50 text-indigo-400 hover:text-white'
                }`}
              >
                {tab === 'curl' ? 'cURL' : tab === 'javascript' ? 'JavaScript' : 'Python'}
              </button>
            ))}
          </div>
          <div className="mt-3 relative">
            <div className="rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{sdkExamples[activeTab]}</pre>
            </div>
            <button
              onClick={() => copyCode(`${selectedEndpoint}-${activeTab}`, sdkExamples[activeTab])}
              aria-label={t('docsContentCopyCode')}
              className="absolute top-3 right-3 p-2 rounded-lg bg-indigo-800/50 text-indigo-400 hover:text-white transition-colors"
            >
              {copiedId === `${selectedEndpoint}-${activeTab}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <h3 className="mt-6 text-sm font-semibold text-white uppercase tracking-wider">{t('docsContentResponse')}</h3>
          <div className="mt-3 rounded-xl bg-indigo-950/80 p-4 border border-indigo-800/30">
            <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">{ep.exampleRes}</pre>
          </div>
        </div>
      </section>

      <section id="playground" className="mt-16">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Send className="w-6 h-6 text-indigo-400" />
          {t('docsContentPlaygroundTitle')}
        </h2>
        <p className="mt-3 text-indigo-300">
          {t('docsContentPlaygroundDesc')}
        </p>

        <div className="mt-6 rounded-2xl border border-indigo-700/50 bg-gradient-to-br from-indigo-900/40 to-indigo-950 p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">POST</span>
            <code className="text-sm font-mono text-indigo-300">/api/ai/generate</code>
            <span className="text-xs text-indigo-500 ml-auto">{t('docsContentPlaygroundDemo')}</span>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-indigo-300 mb-2">{t('docsContentYourPrompt')}</label>
              <textarea
                value={tryItPrompt}
                onChange={(e) => setTryItPrompt(e.target.value)}
                placeholder={t('docsContentPromptPlaceholder')}
                aria-label={t('docsContentYourPrompt')}
                className="w-full rounded-xl border border-indigo-700/50 bg-indigo-950/80 px-4 py-3 text-indigo-100 placeholder-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none font-mono text-sm"
                rows={3}
              />
            </div>

            <button
              onClick={handleTryIt}
              disabled={tryItLoading || !tryItPrompt.trim()}
              aria-label={t('docsContentSend')}
              className="self-start rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
            >
              {tryItLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {t('docsContentSending')}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {t('docsContentSend')}
                </>
              )}
            </button>

            {tryItResult && (
              <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 p-4">
                <div className="text-xs text-indigo-500 mb-2 font-mono">{t('docsContentResultLabel')}</div>
                <p className="text-sm text-indigo-200 leading-relaxed whitespace-pre-wrap">{tryItResult}</p>
              </div>
            )}
          </div>

          <p className="mt-4 text-xs text-indigo-500">
            {t('docsContentPlaygroundNote')}
          </p>
        </div>
      </section>

      <section id="errors" className="mt-16">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 text-indigo-400" />
          {t('docsContentErrorsTitle')}
        </h2>
        <p className="mt-3 text-indigo-300">
          {t('docsContentErrorsDesc')}
        </p>

        <div className="mt-6 space-y-3">
          {ERROR_CODES.map(err => (
            <div key={err.code} className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 p-5">
              <div className="flex items-center gap-3">
                <span className={`text-sm font-mono font-bold px-2.5 py-1 rounded ${
                  err.code === 400 ? 'bg-yellow-500/20 text-yellow-400' :
                  err.code === 401 ? 'bg-red-500/20 text-red-400' :
                  err.code === 402 ? 'bg-orange-500/20 text-orange-400' :
                  err.code === 429 ? 'bg-purple-500/20 text-purple-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {err.code}
                </span>
                <span className="text-sm font-semibold text-white">{err.name}</span>
              </div>
              <p className="mt-2 text-sm text-indigo-300">{err.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rate-limits" className="mt-16">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Clock className="w-6 h-6 text-indigo-400" />
          {t('docsContentLimitsTitle')}
        </h2>
        <p className="mt-3 text-indigo-300">
          {t('docsContentLimitsDesc')}
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-indigo-800/50 bg-indigo-900/30">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-indigo-800/50">
                <th className="py-4 px-6 text-left text-sm font-semibold text-indigo-400">{t('docsContentLimitsPlan')}</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-indigo-400">{t('docsContentLimitsCredits')}</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-indigo-400">{t('docsContentLimitsRpm')}</th>
                <th className="py-4 px-6 text-left text-sm font-semibold text-indigo-400">{t('docsContentLimitsIdeal')}</th>
              </tr>
            </thead>
            <tbody className="text-indigo-200">
              {RATE_LIMITS.map((rl, i) => (
                <tr key={i} className="border-b border-indigo-800/30 last:border-0">
                  <td className="py-4 px-6 font-semibold text-white">{rl.plan}</td>
                  <td className="py-4 px-6 font-mono">{rl.credits}</td>
                  <td className="py-4 px-6 font-mono">{rl.rpm}</td>
                  <td className="py-4 px-6 text-indigo-300">{rl.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-indigo-800/50 bg-indigo-900/20 p-5">
          <h3 className="text-sm font-semibold text-white mb-2">{t('docsContentCreditsEndpoint')}</h3>
          <div className="grid gap-2 sm:grid-cols-2 text-sm text-indigo-300">
            <div className="flex justify-between"><span>generate (text)</span><span className="font-mono text-indigo-400">{t('docsContentCredit1')}</span></div>
            <div className="flex justify-between"><span>chat (conversation)</span><span className="font-mono text-indigo-400">{t('docsContentCredit1')}</span></div>
            <div className="flex justify-between"><span>seo (SEO content)</span><span className="font-mono text-indigo-400">{t('docsContentCredit2')}</span></div>
            <div className="flex justify-between"><span>code (generation)</span><span className="font-mono text-indigo-400">{t('docsContentCredit3')}</span></div>
          </div>
        </div>
      </section>

      <div className="mt-16 rounded-2xl bg-indigo-900/50 border border-indigo-700/50 p-8 text-center">
        <h3 className="text-xl font-bold text-white">{t('docsContentFooterTitle')}</h3>
        <p className="mt-2 text-indigo-300 text-sm">
          {t('docsContentFooterDesc')}
        </p>
        <a
          href="/register"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all"
        >
          {t('docsContentFooterCta')}
          <Zap className="w-4 h-4" />
        </a>
      </div>
    </>
  )
}
