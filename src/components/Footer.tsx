'use client'

import Link from 'next/link'
import { Sparkles, Twitter, Github, Linkedin, Mail, ArrowRight, Shield, BadgeCheck, ShieldCheck, Check, Clock, CreditCard } from 'lucide-react'
import { useI18n } from '@/i18n'
import { useState, memo } from 'react'

const Footer = memo(function Footer() {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setSubscribed(true)
      setEmail('')
    } catch {
      // Newsletter subscription failed silently
    }  }

  return (
    <footer id="footer" className="relative border-t border-white/5 bg-indigo-950" role="contentinfo" aria-label="Pied de page">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Sparkles className="h-5 w-5 text-indigo-400" />
                <div className="absolute inset-0 blur-md bg-indigo-500/30" />
              </div>
              <span className="text-lg font-bold text-white">NeuraAPI</span>
            </Link>
            <p className="text-sm text-indigo-300/80 max-w-xs leading-relaxed">
              {t('footerDescription')}
            </p>

            <form onSubmit={handleNewsletter} className="mt-6">
              <p className="text-sm font-medium text-white mb-3">{t('footerNewsletter')}</p>
              {subscribed ? (
                <p className="text-sm text-green-400 flex items-center gap-2" aria-live="polite">
                  <Sparkles className="w-4 h-4" /> {t('footerNewsletterSuccess')}
                </p>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footerNewsletterPlaceholder')}
                    className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-indigo-400/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                  />
                  <button
                    type="submit"
                    aria-label={t('footerNewsletterAria')}
                    className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </form>

            <div className="flex items-center gap-3 mt-6">
              <a href="https://twitter.com/neurapi" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-white/10 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com/neurapi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/neurapi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:contact@neurapi.com" aria-label="Email" className="p-2 rounded-lg bg-white/5 text-indigo-300 hover:text-white hover:bg-white/10 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footerProduct')}</h3>
            <ul className="space-y-3">
              <li><Link href="/templates" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerTemplates')}</Link></li>
              <li><Link href="/pricing" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerPricing')}</Link></li>
              <li><Link href="/docs" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerDocumentation')}</Link></li>
              <li><Link href="/guide" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerGuide')}</Link></li>
              <li><Link href="/dashboard" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerDashboard')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footerResources')}</h3>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-sm text-indigo-300/80 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/blog/en/api-ia-nextjs" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerTutorialIA')}</Link></li>
              <li><Link href="/blog/en/creer-saas-48h" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerGuideSaaS')}</Link></li>
              <li><Link href="/status" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerStatus')}</Link></li>
              <li><Link href="/contact" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerContact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">{t('footerLegal')}</h3>
            <ul className="space-y-3">
              <li><Link href="/mentions-legales" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerMentionsLegales')}</Link></li>
              <li><Link href="/cgv" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerCGV')}</Link></li>
              <li><Link href="/politique-confidentialite" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerConfidentialite')}</Link></li>
              <li><Link href="/politique-cookies" className="text-sm text-indigo-300/80 hover:text-white transition-colors">{t('footerCookies')}</Link></li>
              <li><Link href="/dpa" className="text-sm text-indigo-300/80 hover:text-white transition-colors">DPA</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-indigo-400/60">
            &copy; {new Date().getFullYear()} NeuraAPI. {t('footerRights')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-indigo-400/60">
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-green-400/80" /> {t('footerRGPD')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-green-400/80" /> {t('footerPayments')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-green-400/80" /> {t('footerSSL')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
            <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-green-400/80" /> {t('footerUptime')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-green-400/80" /> {t('footerSupport247')}</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500/40" />
            <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5 text-green-400/80" /> {t('footerNoCommitment')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
});

export default Footer;
