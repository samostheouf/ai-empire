'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { MessageCircle, X, Send, Bot, User, Sparkles, AlertTriangle } from 'lucide-react'
import { useI18n } from '@/i18n'

interface Message {
  id: string
  role: 'user' | 'bot'
  content: string
  timestamp: Date
}

function sanitize(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '')
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/javascript\s*:/gi, '')
    .replace(/data\s*:/gi, '')
    .replace(/vbscript\s*:/gi, '')
}

function renderMarkdown(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
  const html = escaped
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="bg-indigo-950 px-1 rounded text-xs">$1</code>')
    .replace(/\n/g, '<br/>')
  return html
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
        content: t('chatWelcome'),
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
        content: data.content || t('chatErrorApi'),
        timestamp: new Date(),
      }])
    } catch {
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        role: 'bot',
        content: t('chatErrorTechnical'),
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
                  <Image src="/logo.jpg" alt="NeuraAPI" width={24} height={24} className="w-6 h-6 rounded" />
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block">NeuraAPI Assistant</span>
                  <span className="text-indigo-200 text-xs">{t('chatOnline')}</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1" aria-label={t('chatClose')}>
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4" role="log" aria-label={t('chatMessagesLogAria')} aria-live="polite">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    <div className="flex items-start gap-2">
                      {msg.role === 'bot' && <Bot className="w-4 h-4 mt-0.5 text-indigo-600 flex-shrink-0" aria-hidden="true" />}
                      {msg.role === 'user' && <User className="w-4 h-4 mt-0.5 text-white flex-shrink-0" aria-hidden="true" />}
                      <p
                        className="text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sanitize(renderMarkdown(msg.content)) }}
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
                <label htmlFor="chatbot-input" className="sr-only">
                  {t('chatYourMessage')}
                </label>
                <input
                  id="chatbot-input"
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder={t('chatAskQuestion')}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors flex-shrink-0"
                  aria-label={t('chatSendAria')}
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95"
        aria-label={isOpen ? t('chatClose') : t('chatOpen')}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  )
}
