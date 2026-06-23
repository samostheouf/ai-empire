'use client'

import Link from 'next/link'
import { Sparkles, Code, Briefcase, ShoppingCart, Rocket, User, ArrowRight } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function MarketingIndexPage() {
  const { t } = useI18n()

  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-400 mb-6" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            {t('marketingTitle')}
          </h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
            {t('marketingSubtitle')}
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-2">
          <Link
            href="/marketing/saas"
            className="group rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">{t('marketingSaas')}</h2>
            <p className="text-indigo-300">{t('marketingSaasDesc')}</p>
          </Link>

          <Link
            href="/marketing/developers"
            className="group rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">{t('marketingDevs')}</h2>
            <p className="text-indigo-300">{t('marketingDevsDesc')}</p>
          </Link>

          <Link
            href="/marketing/agencies"
            className="group rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">{t('marketingAgencies')}</h2>
            <p className="text-indigo-300">{t('marketingAgenciesDesc')}</p>
          </Link>

          <Link
            href="/marketing/ecommerce"
            className="group rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">{t('marketingEcommerce')}</h2>
            <p className="text-indigo-300">{t('marketingEcommerceDesc')}</p>
          </Link>

          <Link
            href="/marketing/freelancers"
            className="group rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Freelances</h2>
            <p className="text-indigo-300">Livrez des projets 3x plus vite grâce à l&apos;IA</p>
          </Link>

          <Link
            href="/marketing/startups"
            className="group rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8 hover:border-indigo-600/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-5 w-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Startups</h2>
            <p className="text-indigo-300">Lancez votre SaaS en 48h avec nos templates</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
