'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User, Sparkles, AlertTriangle } from 'lucide-react'
import { useI18n } from '@/i18n'

interface Message {
  id: string
  role: 'user' | 'bot'
  content: string
  timestamp: Date
}

function renderMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="bg-indigo-950 px-1 rounded text-xs">$1</code>')
    .replace(/\n/g, '<br/>')
}

export default function Chatbot() {
  const { t, locale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => { scrollToBottom() }, [messages, scrollToBottom])

  useEffect(() => {
    const stored = localStorage.getItem('neuraapi_chat')
    if (stored) {
      try { setMessages(JSON.parse(stored)) } catch {}
    }
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('neuraapi_chat', JSON.stringify(messages.slice(-50)))
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: crypto.randomUUID(),
        role: 'bot',
        content: locale === 'fr' ? 'Bonjour ! Je suis l\'assistant NeuraAPI. 👋\n\nJe peux vous aider avec :\n• Nos APIs IA\n• Templates premium\n• Tarifs et abonnements\n• Support technique\n\nComment puis-je vous aider ?' : 'Hello! I\'m the NeuraAPI assistant. 👋\n\nI can help you with:\n• Our AI APIs\n• Premium templates\n• Pricing & plans\n• Technical support\n\nHow can I help you?',
        timestamp: new Date(),
      }])
    }
  }, [isOpen, messages.length])

  const handleSend = useCallback(async (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText || isTyping) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const history = [...messages, userMessage].map(m => ({
        role: m.role === 'bot' ? 'assistant' : m.role,
        content: m.content,
      }))

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, locale }),
      })

      if (!res.ok) throw new Error('API error')

      const data = await res.json()
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'bot',
        content: data.content || (locale === 'fr' ? 'Désolé, une erreur est survenue.' : 'Sorry, an error occurred.'),
        timestamp: new Date(),
      }])
    } catch {
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'bot',
        content: locale === 'fr' ? 'Désolé, je rencontre un problème technique. Réessayez dans quelques instants.' : 'Sorry, I\'m experiencing a technical issue. Please try again shortly.',
        timestamp: new Date(),
      }])
    } finally {
      setIsTyping(false)
    }
  }, [input, isTyping, messages])

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-96 max-w-[calc(100rem-2rem)]">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col" style={{ height: '520px' }}>
            <div className="bg-indigo-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                  <img src="/logo.jpg" alt="NeuraAPI" className="w-6 h-6 rounded" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block">NeuraAPI Assistant</span>
                  <span className="text-indigo-200 text-xs">En ligne</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1" aria-label="Fermer le chat">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    <div className="flex items-start gap-2">
                      {msg.role === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-indigo-600 flex-shrink-0" />}
                      {msg.role === 'user' && <User className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />}
                      <p
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-gray-200 p-3 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder={locale === "fr" ? "Posez votre question..." : "Ask your question..."}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors flex-shrink-0"
                  aria-label="Envoyer"
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
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95"
        aria-label={isOpen ? 'Fermer le chat' : 'Ouvrir le chat'}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}
