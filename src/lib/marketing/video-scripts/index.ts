export interface VideoScene {
  duration: string
  shot: string
  onScreenText: string
  narration: string
  transition?: string
}

export interface VideoScript {
  id: string
  title: string
  type: 'product-demo' | 'social-ad' | 'tutorial' | 'founder-story'
  duration: string
  platform: string
  scenes: VideoScene[]
  cta: string
  music?: string
  targetAudience: string
}

export type VideoLanguage = 'en' | 'fr' | 'es' | 'de' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ar'

export interface VideoScriptsByLanguage {
  productDemo: VideoScript
  socialAd: VideoScript
  tutorial: VideoScript
  founderStory: VideoScript
}

type VideoScriptsLoader = () => Promise<VideoScriptsByLanguage>

const videoScriptLoaders: Record<VideoLanguage, VideoScriptsLoader> = {
  en: () => import('./en').then(m => m.videoScripts),
  fr: () => import('./fr').then(m => m.videoScripts),
  es: () => import('./es').then(m => m.videoScripts),
  de: () => import('./de').then(m => m.videoScripts),
  it: () => import('./it').then(m => m.videoScripts),
  pt: () => import('./pt').then(m => m.videoScripts),
  ja: () => import('./ja').then(m => m.videoScripts),
  ko: () => import('./ko').then(m => m.videoScripts),
  zh: () => import('./zh').then(m => m.videoScripts),
  ar: () => import('./ar').then(m => m.videoScripts),
}

export async function getVideoScripts(lang: VideoLanguage): Promise<VideoScriptsByLanguage> {
  const loader = videoScriptLoaders[lang]
  if (!loader) throw new Error(`No video scripts for language: ${lang}`)
  return loader()
}

export function getAllVideoScriptLanguages(): VideoLanguage[] {
  return Object.keys(videoScriptLoaders) as VideoLanguage[]
}

export function getScriptById(scripts: VideoScriptsByLanguage, id: string): VideoScript | undefined {
  return Object.values(scripts).find(s => s.id === id)
}

export function getScriptsByType(scripts: VideoScriptsByLanguage, type: VideoScript['type']): VideoScript[] {
  return Object.values(scripts).filter(s => s.type === type)
}

export function formatSceneForProduction(scene: VideoScene): string {
  return `[${scene.duration}] ${scene.shot}\nOn Screen: ${scene.onScreenText}\nNarration: ${scene.narration}`
}
