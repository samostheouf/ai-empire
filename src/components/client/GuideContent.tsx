'use client'

import { useState } from 'react'
import { UserPlus, Key, Zap, Code, ArrowRight, CheckCircle2, ExternalLink, Copy, Check } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function GuideContent() {
  const { t } = useI18n()
  const [activeStep, setActiveStep] = useState('register')
  const [codeTab, setCodeTab] = useState<'js' | 'python' | 'curl'>('js')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const STEPS = [
    {
      id: 'register',
      num: 1,
      title: t('guideContentStep1Title'),
      icon: <UserPlus className="w-5 h-5" />,
      description: t('guideContentStep1Desc'),
      details: [
        { text: t('guideContentStep1Detail1') },
        { text: t('guideContentStep1Detail2') },
        { text: t('guideContentStep1Detail3') },
      ],
      code: null,
      url: '/register',
      urlLabel: t('guideContentStep1Cta'),
    },
    {
      id: 'api-key',
      num: 2,
      title: t('guideContentStep2Title'),
      icon: <Key className="w-5 h-5" />,
      description: t('guideContentStep2Desc'),
      details: [
        { text: t('guideContentStep2Detail1') },
        { text: t('guideContentStep2Detail2') },
        { text: t('guideContentStep2Detail3') },
      ],
      code: `// Your API key looks like this:\n// napi_abc123def456ghi789jkl012mno345pqr678stu901vwx234`,
      url: '/dashboard',
      urlLabel: t('guideContentStep2Cta'),
    },
    {
      id: 'first-call',
      num: 3,
      title: t('guideContentStep3Title'),
      icon: <Zap className="w-5 h-5" />,
      description: t('guideContentStep3Desc'),
      details: [
        { text: t('guideContentStep3Detail1') },
        { text: t('guideContentStep3Detail2') },
        { text: t('guideContentStep3Detail3') },
      ],
      code: `// JavaScript (Node.js or browser via proxy)
const response = await fetch('https://ai-empire-steel.vercel.app/api/ai/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'napi_your_key_here'
  },
  body: JSON.stringify({
    prompt: 'Write a paragraph about the benefits of automation',
    maxTokens: 500
  })
})

const data = await response.json()
// data.content contains the generated text`,
      codePython: `import requests

response = requests.post(
    "https://ai-empire-steel.vercel.app/api/ai/generate",
    headers={
        "Content-Type": "application/json",
        "x-api-key": "napi_your_key_here"
    },
    json={
        "prompt": "Write a paragraph about the benefits of automation",
        "maxTokens": 500
    }
)

data = response.json()
print(data["content"])`,
      codeCurl: `curl -X POST https://ai-empire-steel.vercel.app/api/ai/generate \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: napi_your_key_here" \\
  -d '{"prompt": "Write a paragraph about the benefits of automation", "maxTokens": 500}'`,
      url: null,
      urlLabel: null,
    },
    {
      id: 'templates',
      num: 4,
      title: t('guideContentStep4Title'),
      icon: <Code className="w-5 h-5" />,
      description: t('guideContentStep4Desc'),
      details: [
        { text: t('guideContentStep4Detail1') },
        { text: t('guideContentStep4Detail2') },
        { text: t('guideContentStep4Detail3') },
      ],
      code: null,
      url: '/templates',
      urlLabel: t('guideContentStep4Cta'),
    },
  ]

  const API_EXAMPLES = [
    {
      name: t('guideContentGenTitle'),
      endpoint: '/api/ai/generate',
      code: `curl -X POST https://ai-empire-steel.vercel.app/api/ai/generate \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: napi_your_key_here" \\
  -d '{"prompt": "Write an catchy article title about AI"}'`,
    },
    {
      name: t('guideContentChatTitle'),
      endpoint: '/api/ai/chat',
      code: `curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: napi_your_key_here" \\
  -d '{"messages": [{"role": "user", "content": "Explain React in 3 sentences"}]}'`,
    },
    {
      name: t('guideContentSeoTitle'),
      endpoint: '/api/ai/seo',
      code: `curl -X POST https://ai-empire-steel.vercel.app/api/ai/seo \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: napi_your_key_here" \\
  -d '{"topic": "Build a SaaS with Next.js", "keywords": ["SaaS", "Next.js", "startup"]}'`,
    },
    {
      name: t('guideContentCodeTitle'),
      endpoint: '/api/ai/code',
      code: `curl -X POST https://ai-empire-steel.vercel.app/api/ai/code \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: napi_your_key_here" \\
  -d '{"description": "A React component to display a sortable data table", "language": "typescript"}'`,
    },
  ]

  const activeStepData = STEPS.find(s => s.id === activeStep)!

  return (
    <>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`rounded-xl border p-5 text-left transition-all ${
              activeStep === step.id
                ? 'border-indigo-500 bg-indigo-900/50 shadow-lg shadow-indigo-500/10'
                : 'border-indigo-800/50 bg-indigo-900/20 hover:border-indigo-600/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                activeStep === step.id ? 'bg-indigo-600 text-white' : 'bg-indigo-800/50 text-indigo-400'
              }`}>
                {step.num}
              </span>
              <span className="text-indigo-400">{step.icon}</span>
            </div>
            <h3 className="text-sm font-semibold text-white">{step.title}</h3>
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-lg font-bold text-white">
            {activeStepData.num}
          </span>
          <h2 className="text-2xl font-bold text-white">{activeStepData.title}</h2>
        </div>
        <p className="text-indigo-300 mb-6">{activeStepData.description}</p>

        <div className="space-y-3 mb-6">
          {activeStepData.details.map((detail, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-indigo-200">{detail.text}</span>
            </div>
          ))}
        </div>

        {activeStepData.code && (
          <div className="rounded-xl bg-indigo-950/80 border border-indigo-800/30 overflow-hidden">
            {activeStepData.codePython && (
              <div className="flex gap-1 px-4 pt-3">
                {(['js', 'python', 'curl'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setCodeTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      codeTab === tab
                        ? 'bg-indigo-600 text-white'
                        : 'text-indigo-400 hover:text-white'
                    }`}
                  >
                    {tab === 'js' ? 'JavaScript' : tab === 'python' ? 'Python' : 'cURL'}
                  </button>
                ))}
              </div>
            )}
            <div className="relative p-4">
              <pre className="text-sm text-indigo-200 overflow-x-auto whitespace-pre-wrap">
                {activeStepData.codePython && codeTab === 'python'
                  ? activeStepData.codePython
                  : activeStepData.codeCurl && codeTab === 'curl'
                  ? activeStepData.codeCurl
                  : activeStepData.code}
              </pre>
              <button
                onClick={() => copyCode(
                  activeStepData.id,
                  activeStepData.codePython && codeTab === 'python'
                    ? activeStepData.codePython
                    : activeStepData.codeCurl && codeTab === 'curl'
                    ? activeStepData.codeCurl
                    : activeStepData.code!
                )}
                className="absolute top-3 right-3 p-2 rounded-lg bg-indigo-800/50 text-indigo-400 hover:text-white transition-colors"
                aria-label={t('guideContentCopyCode')}
              >
                {copiedId === activeStepData.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}

        {activeStepData.url && (
          <a
            href={activeStepData.url}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-all"
          >
            {activeStepData.urlLabel}
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white mb-2">{t('guideContentEndpointRefTitle')}</h2>
        <p className="text-indigo-300 text-sm mb-6">{t('guideContentEndpointRefDesc')}</p>

        <div className="space-y-4">
          {API_EXAMPLES.map((ex, i) => (
            <div key={i} className="rounded-xl border border-indigo-800/50 bg-indigo-900/30 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-indigo-800/30">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">POST</span>
                  <span className="text-sm font-semibold text-white">{ex.name}</span>
                  <code className="text-xs text-indigo-500 font-mono">{ex.endpoint}</code>
                </div>
                <button
                  onClick={() => copyCode(`guide-${i}`, ex.code)}
                  className="p-1.5 rounded-lg text-indigo-400 hover:text-white hover:bg-indigo-800/50 transition-colors"
                  aria-label={t('guideContentCopyCode')}
                >
                  {copiedId === `guide-${i}` ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="p-4">
                <pre className="text-xs text-indigo-200 overflow-x-auto whitespace-pre-wrap">{ex.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
        <h2 className="text-xl font-semibold text-white mb-4">{t('guideContentNextStepsTitle')}</h2>
        <div className="space-y-3">
          {[
            { label: t('guideContentNextDocs'), href: '/docs', desc: t('guideContentNextDocsDesc') },
            { label: t('guideContentNextPricing'), href: '/pricing', desc: t('guideContentNextPricingDesc') },
            { label: t('guideContentNextBlog'), href: '/blog', desc: t('guideContentNextBlogDesc') },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex items-center justify-between rounded-xl border border-indigo-800/30 bg-indigo-950/50 px-5 py-4 hover:border-indigo-600/50 hover:bg-indigo-900/30 transition-all group"
            >
              <div>
                <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">{item.label}</span>
                <p className="text-xs text-indigo-400 mt-0.5">{item.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
