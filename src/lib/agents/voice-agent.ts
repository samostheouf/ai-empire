import { callAI } from '@/lib/ai'

export interface VoiceRequest {
  type: 'transcribe' | 'respond' | 'translate'
  input: string
  language?: string
  context?: string
}

export interface VoiceResult {
  id: string
  type: string
  output: string
  confidence: number
  sentiment: string
  language: string
  executedAt: Date
  tokensUsed: number
  provider: string
}

const SYSTEM_PROMPT = `Tu es un agent conversationnel avancé pour NeuraAPI, une plateforme de templates et APIs IA premium.
Tu analyses le sentiment et détectes les intentions des utilisateurs.
Tu fournis des réponses contextuelles et pertinentes en français.
Tu gères la transcription, la traduction et la génération de réponses.
Ton style: conversationnel, utile, empathique.`

function generateId(): string {
  return `voice_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export async function executeVoiceAgent(request: VoiceRequest): Promise<VoiceResult> {
  const id = generateId()

  let prompt = ''
  switch (request?.type) {
    case 'transcribe':
      prompt = `Transcris et analyse le message suivant:
"${request.input}"
Langue détectée: ${request.language || 'français'}
Fournis: transcription propre, détection de langue, analyse de sentiment.
Format JSON: {output, confidence, sentiment, language}`
      break

    case 'respond':
      prompt = `Génère une réponse au message suivant:
"${request.input}"
Contexte: ${request.context || 'Conversation avec un prospect potentiel'}
Fournis: réponse contextuelle et pertinente, analyse de sentiment.
Format JSON: {output, confidence, sentiment, language}`
      break

    case 'translate':
      prompt = `Traduis le message suivant en ${request.language || 'français'}:
"${request.input}"
Fournis: traduction naturelle, analyse de sentiment.
Format JSON: {output, confidence, sentiment, language}`
      break
  }

  const result = await callAI(`${SYSTEM_PROMPT}\n\n${prompt}`, 1500)

  const parsed = parseAIResponse(result.content) || generateFallbackVoice(request)

  return {
    id,
    type: request?.type,
    output: parsed.output || '',
    confidence: parsed.confidence || 0.85,
    sentiment: parsed.sentiment || 'neutral',
    language: parsed.language || request.language || 'fr',
    executedAt: new Date(),
    tokensUsed: result.tokensUsed,
    provider: result.provider
  }
}

function parseAIResponse(content: string): Partial<VoiceResult> | null {
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
  } catch {
    // Fallback
  }
  return null
}

function generateFallbackVoice(request: VoiceRequest): Partial<VoiceResult> {
  const sentimentMap: Record<string, string> = {
    'merci': 'positive',
    'aide': 'neutral',
    'problème': 'negative',
    'question': 'neutral',
    'bonjour': 'positive'
  }

  const inputLower = (request.input || '').toLowerCase()
  let sentiment = 'neutral'
  for (const [key, value] of Object.entries(sentimentMap)) {
    if (inputLower.includes(key)) {
      sentiment = value
      break
    }
  }

  const responses: Record<string, string> = {
    transcribe: `[Transcription] ${request.input}`,
    respond: `Merci pour votre message. Je suis l'assistant NeuraAPI. Comment puis-je vous aider avec nos templates et APIs IA ?`,
    translate: `[Traduction] ${request.input}`
  }

  return {
    output: responses[request?.type] || responses.respond,
    confidence: 0.85,
    sentiment,
    language: request.language || 'fr'
  }
}

export const voiceAgent = {
  name: 'Agent Vocal',
  id: 'voice-agent',
  description: 'Agent conversationnel avancé avec analyse de sentiment et détection d\'intention',
  execute: executeVoiceAgent
}
