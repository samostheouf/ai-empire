import type { EmailSequence } from '../email-sequences'
import * as fr from './fr'
import * as en from './en'
import * as es from './es'
import * as de from './de'
import * as it from './it'
import * as pt from './pt'
import * as ja from './ja'
import * as ko from './ko'
import * as zh from './zh'
import * as ar from './ar'

const localeSequences: Record<string, EmailSequence[]> = {
  fr: [fr.onboardingSequence, fr.nurtureSequence, fr.winbackSequence, fr.upsellSequence],
  en: [en.onboardingSequence, en.nurtureSequence, en.winbackSequence, en.upsellSequence],
  es: [es.onboardingSequence, es.nurtureSequence, es.winbackSequence, es.upsellSequence],
  de: [de.onboardingSequence, de.nurtureSequence, de.winbackSequence, de.upsellSequence],
  it: [it.onboardingSequence, it.nurtureSequence, it.winbackSequence, it.upsellSequence],
  pt: [pt.onboardingSequence, pt.nurtureSequence, pt.winbackSequence, pt.upsellSequence],
  ja: [ja.onboardingSequence, ja.nurtureSequence, ja.winbackSequence, ja.upsellSequence],
  ko: [ko.onboardingSequence, ko.nurtureSequence, ko.winbackSequence, ko.upsellSequence],
  zh: [zh.onboardingSequence, zh.nurtureSequence, zh.winbackSequence, zh.upsellSequence],
  ar: [ar.onboardingSequence, ar.nurtureSequence, ar.winbackSequence, ar.upsellSequence],
}

export function getLocalizedSequences(lang: string = 'fr'): EmailSequence[] {
  const normalized = lang.toLowerCase().split('-')[0]
  return localeSequences[normalized] ?? localeSequences.fr
}

export { fr, en, es, de, it, pt, ja, ko, zh, ar }
