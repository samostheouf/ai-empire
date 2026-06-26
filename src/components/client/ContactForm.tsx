'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { t: rawT } = useI18n(); const t = rawT as (key: string) => string

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 800))
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-8 text-center animate-scale-in">
        <div className="relative mx-auto w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
          <div className="relative w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-400" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-white">{t('contactFormSent')}</h3>
        <p className="mt-2 text-sm text-indigo-200/80">
          {t('contactFormThankYou')}
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
          className="mt-5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
        >
          {t('contactFormSendAnother')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-indigo-200 mb-1.5">
          {t('contactFormFullName')}
        </label>
        <input
          type="text"
          id="name"
          required
          maxLength={100}
          value={formData.name}
          onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
          placeholder={t('contactFormNamePlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-1.5">
          {t('contactFormEmailLabel')}
        </label>
        <input
          type="email"
          id="email"
          required
          maxLength={254}
          value={formData.email}
          onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
          placeholder={t('contactFormEmailPlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-indigo-200 mb-1.5">
          {t('contactFormSubject')}
        </label>
        <select
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 appearance-none"
        >
          <option value="" className="bg-indigo-950">{t('contactFormSelectSubject')}</option>
          <option value="support" className="bg-indigo-950">{t('contactFormTechSupport')}</option>
          <option value="billing" className="bg-indigo-950">{t('contactFormBilling')}</option>
          <option value="partnership" className="bg-indigo-950">{t('contactFormPartnership')}</option>
          <option value="other" className="bg-indigo-950">{t('contactFormOther')}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-indigo-200 mb-1.5">
          {t('contactFormMessageLabel')}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          maxLength={2000}
          value={formData.message}
          onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 resize-none"
          placeholder={t('contactFormMessagePlaceholder')}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3.5 text-sm font-semibold text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t('contactFormSendMessage')}...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {t('contactFormSendMessage')}
          </>
        )}
      </button>
    </form>
  )
}
