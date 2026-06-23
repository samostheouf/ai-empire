'use client'

import Link from 'next/link'
import { Check, X, ArrowRight, Sparkles, Zap, Clock, Shield, Download } from 'lucide-react'
import { useI18n } from '@/i18n'

export default function ComparePage() {
  const { t } = useI18n()

  const COMPARISONS = [
    {
      name: 'NeuraAPI',
      highlight: true,
      price: '49€ — 199€',
      priceNote: t('compareAchatUnique'),
      setupTime: '48h',
      features: {
        templates: t('compare10Templates'),
        ai: t('compare8Endpoints'),
        auth: t('compareIntegrated'),
        support: t('compareSupportEmail'),
        updates: t('compareFreeUpdates'),
        rgpd: true,
        maintenance: t('compareIncluded'),
      },
    },
    {
      name: 'Vercel Templates',
      highlight: false,
      price: '0€ — 100€',
      priceNote: t('compareVariable'),
      setupTime: t('compareSemaines'),
      features: {
        templates: t('compareTemplatesGeneric'),
        ai: t('compareNotIncluded'),
        auth: t('compareCodeYourself'),
        support: t('compareCommunity'),
        updates: t('compareVariable'),
        rgpd: false,
        maintenance: t('compareYourCharge'),
      },
    },
    {
      name: 'ThemeForest',
      highlight: false,
      price: '30€ — 200€',
      priceNote: t('compareAchatUnique'),
      setupTime: t('compareSetup2_4weeks'),
      features: {
        templates: t('compareTemplatesWp'),
        ai: t('compareNotIncluded'),
        auth: t('compareBasic'),
        support: t('compareLimited6m'),
        updates: t('comparePaid'),
        rgpd: false,
        maintenance: t('compareYourCharge'),
      },
    },
    {
      name: t('compareCustomDev'),
      highlight: false,
      price: '5 000€ — 20 000€',
      priceNote: t('compareProjet'),
      setupTime: t('compareMois'),
      features: {
        templates: t('compareCustom'),
        ai: t('compareToIntegrate'),
        auth: t('compareCustom'),
        support: t('compareDedicatedTeam'),
        updates: t('compareYourCharge'),
        rgpd: true,
        maintenance: t('compareContinuous'),
      },
    },
  ]

  const FEATURES_ROWS = [
    { key: 'templates', label: t('compareTemplatesIncluded') },
    { key: 'ai', label: t('compareAiIntegration') },
    { key: 'auth', label: t('compareAuthBilling') },
    { key: 'support', label: t('compareSupport') },
    { key: 'updates', label: t('compareUpdates') },
    { key: 'rgpd', label: t('compareGdpr') },
    { key: 'maintenance', label: t('compareMaintenance') },
  ]

  return (
    <div className="min-h-screen bg-[#0f0a2e]">
      <section className="relative px-4 pt-24 pb-16 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-float-delay-1" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 text-sm text-indigo-400 mb-6">
            <Zap className="w-4 h-4" />
            <span>{t('compareBadge')}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            {t('compareTitle')}{' '}
            <span className="text-gradient">{t('compareTitleHighlight')}</span>
          </h1>

          <p className="mt-6 text-lg text-indigo-200/80 max-w-2xl mx-auto">
            {t('compareSubtitle')}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:hidden">
            {COMPARISONS.map((comp) => (
              <div
                key={comp.name}
                className={`rounded-2xl border p-6 ${
                  comp.highlight
                    ? 'border-indigo-500/50 bg-indigo-500/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-bold ${comp.highlight ? 'text-gradient' : 'text-white'}`}>{comp.name}</h3>
                  {comp.highlight && (
                    <span className="rounded-full bg-indigo-500/20 border border-indigo-500/30 px-3 py-1 text-xs font-bold text-indigo-400">
                      {t('compareReco')}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-white mb-1">{comp.price}</p>
                <p className="text-xs text-indigo-300/60 mb-4">{comp.priceNote} · Setup : {comp.setupTime}</p>
                <div className="space-y-3">
                  {FEATURES_ROWS.map((row) => (
                    <div key={row.key} className="flex items-center justify-between text-sm">
                      <span className="text-indigo-300/70">{row.label}</span>
                      <span className={`font-medium ${comp.highlight ? 'text-green-400' : 'text-indigo-200'}`}>
                        {typeof comp.features[row.key as keyof typeof comp.features] === 'boolean'
                          ? comp.features[row.key as keyof typeof comp.features]
                            ? `✅ ${t('compareOui')}`
                            : `❌ ${t('compareNon')}`
                          : String(comp.features[row.key as keyof typeof comp.features])}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:block overflow-x-auto rounded-2xl glass-card">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-5 text-left text-sm font-semibold text-indigo-300">{t('compareCriterion')}</th>
                  {COMPARISONS.map((comp) => (
                    <th key={comp.name} className={`p-5 text-center text-sm font-semibold ${comp.highlight ? 'text-gradient' : 'text-indigo-300/60'}`}>
                      {comp.name}
                      {comp.highlight && (
                        <div className="mt-1 text-xs text-indigo-400">{t('compareReco')}</div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-sm text-indigo-200/80 font-medium">{t('comparePrice')}</td>
                  {COMPARISONS.map((comp) => (
                    <td key={comp.name} className={`p-4 text-center text-sm font-bold ${comp.highlight ? 'text-green-400' : 'text-indigo-200'}`}>
                      {comp.price}
                      <div className="text-xs font-normal text-indigo-400/60 mt-1">{comp.priceNote}</div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-white/5">
                  <td className="p-4 text-sm text-indigo-200/80 font-medium">{t('compareSetup')}</td>
                  {COMPARISONS.map((comp) => (
                    <td key={comp.name} className={`p-4 text-center text-sm ${comp.highlight ? 'text-green-400 font-bold' : 'text-indigo-200'}`}>
                      {comp.setupTime}
                    </td>
                  ))}
                </tr>
                {FEATURES_ROWS.map((row) => (
                  <tr key={row.key} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-4 text-sm text-indigo-200/80 font-medium">{row.label}</td>
                    {COMPARISONS.map((comp) => {
                      const val = comp.features[row.key as keyof typeof comp.features]
                      return (
                        <td key={comp.name} className="p-4 text-center">
                          {typeof val === 'boolean' ? (
                            <span className={`inline-flex items-center gap-1 text-sm ${val ? 'text-green-400' : 'text-red-400'}`}>
                              {val ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                              {val ? t('compareOui') : t('compareNon')}
                            </span>
                          ) : (
                            <span className={`text-sm ${comp.highlight ? 'text-green-400 font-medium' : 'text-indigo-300/70'}`}>
                              {String(val)}
                            </span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 rounded-2xl glass-card p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-4">{t('compareCalcSimple')}</h3>
              <div className="grid gap-4 sm:grid-cols-3 text-center">
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-2xl font-bold text-orange-400">16 000€</div>
                  <div className="text-xs text-indigo-300/60 mt-1">{t('compareSeniorDev')}</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-2xl font-bold text-indigo-400">2 000€ — 5 000€</div>
                  <div className="text-xs text-indigo-300/60 mt-1">{t('compareAgency')}</div>
                </div>
                <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">
                  <div className="text-2xl font-bold text-green-400">49€ — 199€</div>
                  <div className="text-xs text-indigo-300/60 mt-1">{t('compareNeurapi')}</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-indigo-300/70">
                {t('compareEconomyText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <Sparkles className="mx-auto h-10 w-10 text-indigo-400" />
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            {t('compareReadyStart')}
          </h2>
          <p className="mt-3 text-indigo-200/80 max-w-lg mx-auto">
            {t('compareTryFree')}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free"
              className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {t('compareStartFree')}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/templates"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-indigo-200 hover:bg-white/10 transition-all"
            >
              {t('compareViewPremium')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
