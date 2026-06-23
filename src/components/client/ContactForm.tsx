'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { t } = useI18n()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-green-900/30 border border-green-800/50 p-6 text-center">
        <Send className="mx-auto h-10 w-10 text-green-400" />
        <h3 className="mt-3 text-lg font-semibold text-white">{t('contactFormSent')}</h3>
        <p className="mt-2 text-sm text-indigo-200">
          {t('contactFormThankYou')}
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
          className="mt-4 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
        >
          {t('contactFormSendAnother')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-indigo-200 mb-1">
          {t('contactFormFullName')}
        </label>
          <input
            type="text"
            id="name"
            required
            maxLength={100}
            value={formData.name}
            onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
            className="w-full rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-3 text-white placeholder-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder={t('contactFormNamePlaceholder')}
          />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-1">
          {t('contactFormEmailLabel')}
        </label>
          <input
            type="email"
            id="email"
            required
            maxLength={254}
            value={formData.email}
            onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
            className="w-full rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-3 text-white placeholder-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder={t('contactFormEmailPlaceholder')}
          />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-indigo-200 mb-1">
          {t('contactFormSubject')}
        </label>
        <select
          id="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
          className="w-full rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-3 text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">{t('contactFormSelectSubject')}</option>
          <option value="support">{t('contactFormTechSupport')}</option>
          <option value="billing">{t('contactFormBilling')}</option>
          <option value="partnership">{t('contactFormPartnership')}</option>
          <option value="other">{t('contactFormOther')}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-indigo-200 mb-1">
          {t('contactFormMessageLabel')}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          maxLength={2000}
          value={formData.message}
          onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
          className="w-full rounded-lg border border-indigo-800/50 bg-indigo-950/50 px-4 py-3 text-white placeholder-indigo-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
          placeholder={t('contactFormMessagePlaceholder')}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors flex items-center justify-center gap-2"
      >
        <Send className="h-4 w-4" />
        {t('contactFormSendMessage')}
      </button>
    </form>
  )
}
