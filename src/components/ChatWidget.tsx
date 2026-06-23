'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { useI18n } from '@/i18n'
import type { TranslationKeys } from '@/i18n/config'

interface Message {
  id: string
  role: 'user' | 'bot'
  content: string
  timestamp: Date
}

function getBotResponse(input: string, t: (key: keyof TranslationKeys) => string): string {
  const lower = input.toLowerCase()

  const FAQ_RESPONSES: Record<string, string> = {
    'prix': t('chatFaqPrix'),
    'tarif': t('chatFaqTarif'),
    'credit': t('chatFaqCredit'),
    'api': t('chatFaqApi'),
    'template': t('chatFaqTemplate'),
    'paiement': t('chatFaqPaiement'),
    'stripe': t('chatFaqStripe'),
    'remboursement': t('chatFaqRemboursement'),
    'support': t('chatFaqSupport'),
    'contact': t('chatFaqContact'),
    'sécurité': t('chatFaqSecurite'),
    'rgpd': t('chatFaqRgpd'),
    'gratuit': t('chatFaqGratuit'),
    'inscription': t('chatFaqInscription'),
    'connexion': t('chatFaqConnexion'),
    'dashboard': t('chatFaqDashboard'),
    'documentation': t('chatFaqDocumentation'),
    'docs': t('chatFaqDocs'),
    'templates': t('chatFaqTemplates'),
    'promo': t('chatFaqPromo'),
    'lancement': t('chatFaqLancement'),
    'enterprise': t('chatFaqEnterprise'),
    'pro': t('chatFaqPro'),
    'starter': t('chatFaqStarter'),
    'hello': t('chatFaqHello'),
    'bonjour': t('chatFaqBonjour'),
    'salut': t('chatFaqSalut'),
    'merci': t('chatFaqMerci'),
    'aide': t('chatFaqAide'),
    'default': t('chatFaqDefault'),
  }

  for (const [keyword, response] of Object.entries(FAQ_RESPONSES)) {
    if (lower.includes(keyword)) {
      return response
    }
  }

  if (lower.includes('bonjour') || lower.includes('salut') || lower.includes('hello')) {
    return FAQ_RESPONSES['bonjour']
  }

  if (lower.includes('merci')) {
    return FAQ_RESPONSES['merci']
  }

  if (lower.includes('aide') || lower.includes('help')) {
    return FAQ_RESPONSES['aide']
  }

  return FAQ_RESPONSES['default']
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: t('chatWelcome'),
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      role: 'bot',
      content: getBotResponse(input, t),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, botResponse])
    setIsTyping(false)
  }

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-96 max-w-[calc(100vw-2rem)]">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-indigo-600 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">NeuraAPI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
                aria-label={t('chatClose')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {msg.role === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-indigo-600" />}
                      {msg.role === 'user' && <User className="w-4 h-4 mt-0.5 text-white" />}
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-200 p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('chatPlaceholder')}
                  aria-label={t('chatMessageAria')}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  aria-label={t('chatSendAria')}
                  className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label={isOpen ? t('chatClose') : t('chatOpen')}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}
