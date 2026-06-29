'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Twitter, Github, Linkedin, Mail, ArrowRight, Shield, BadgeCheck, ShieldCheck, Check, Clock, CreditCard } from 'lucide-react'
import { useI18n } from '@/i18n'
import { useState, memo } from 'react'

const Footer = memo(function Footer() {
  const { t: rawT } = useI18n(); const t = rawT as (key: string) => string
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const [loading, setLoading] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubscribed(true)
      setEmail('')
    } catch (err) {
      console.error('Footer newsletter subscription failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer id="footer" className="relative border-t border-white/5 bg-indigo-950" aria-label="Pied de page">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Image src="/logo.jpg" alt="NeuraAPI" width={24} height={24} className="h-6 w-6 rounded object-cover" />
                <div className="absolute inset-0 blur-md bg-indigo-500/30" />
              </div>
              <span className="text-lg font-bold text-white">NeuraAPI</span>
            </Link>
            <p className="text-sm text-indigo-300/80 max-w-xs leading-relaxed">
              {t('footerDescription')}
            </p>

            <form onSubmit={handleNewsletter} className="mt-6">
              <label htmlFor="footer-newsletter-email" className="text-sm font-medium text-white mb-3 block">{t('footerNewsletter')}</label>
              {subscribed ? (
                <p className="text-sm text-green-400 flex items-center gap-2" aria-live="polite">
                  <Sparkles className="w-4 h-4" aria-hidden="true" /> {t('footerNewsletterSuccess')}
                </p>
              ) : (
                <div className="flex gap-2">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footerNewsletterPlaceholder')}
                    className="flex-1 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    aria-label={t('footerNewsletterAria')}
                    className="px-3 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    ) : (
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              )}
            </form>

            <div className="flex items-center gap-3 mt-6">
              <a href="https://twitter.com/neurapi" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2.5 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-indigo-500/20 hover:scale-110 transition-all duration-200 active:scale-95">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com/neurapi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2.5 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-indigo-500/20 hover:scale-110 transition-all duration-200 active:scale-95">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/neurapi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-indigo-500/20 hover:scale-110 transition-all duration-200 active:scale-95">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:contact@neurapi.com" aria-label="Email" className="p-2.5 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-indigo-500/20 hover:scale-110 transition-all duration-200 active:scale-95">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footerProduct')}</h3>
            <ul className="space-y-2.5">
              <li><Link href="/templates" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerTemplates')}</Link></li>
              <li><Link href="/pricing" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerPricing')}</Link></li>
              <li><Link href="/docs" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerDocumentation')}</Link></li>
              <li><Link href="/guide" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerGuide')}</Link></li>
              <li><Link href="/dashboard" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerDashboard')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footerResources')}</h3>
            <ul className="space-y-2.5">
              <li><Link href="/blog" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Blog</Link></li>
              <li><Link href="/blog/en/api-ia-nextjs" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerTutorialIA')}</Link></li>
              <li><Link href="/blog/en/creer-saas-48h" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerGuideSaaS')}</Link></li>
              <li><Link href="/status" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerStatus')}</Link></li>
              <li><Link href="/contact" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerContact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footerLegal')}</h3>
            <ul className="space-y-2.5">
              <li><Link href="/mentions-legales" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerMentionsLegales')}</Link></li>
              <li><Link href="/cgv" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerCGV')}</Link></li>
              <li><Link href="/politique-confidentialite" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerConfidentialite')}</Link></li>
              <li><Link href="/politique-cookies" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">{t('footerCookies')}</Link></li>
              <li><Link href="/dpa" className="text-sm text-indigo-300/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">DPA</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-indigo-400/75">
            &copy; {new Date().getFullYear()} NeuraAPI. {t('footerRights')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-indigo-400/75">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-green-400/80" aria-hidden="true" /> {t('footerRGPD')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" aria-hidden="true" />
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-green-400/80" aria-hidden="true" /> {t('footerPayments')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" aria-hidden="true" />
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-green-400/80" aria-hidden="true" /> {t('footerSSL')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" aria-hidden="true" />
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-400/80" aria-hidden="true" /> {t('footerUptime')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" aria-hidden="true" />
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-green-400/80" aria-hidden="true" /> {t('footerSupport247')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" aria-hidden="true" />
            <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5 text-green-400/80" aria-hidden="true" /> {t('footerNoCommitment')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
});

export default Footer;
