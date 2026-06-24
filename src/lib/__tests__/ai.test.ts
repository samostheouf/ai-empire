import { callAI, isDemoMode } from '../ai'

describe('callAI', () => {
  const originalEnv = { ...process.env }

  beforeEach(() => {
    process.env.GROQ_API_KEY = 'sk-placeholder-test'
    process.env.GLM_API_KEY = undefined
    process.env.GEMINI_API_KEY = undefined
    process.env.OPENAI_API_KEY = undefined
  })

  afterEach(() => {
    process.env = { ...originalEnv }
  })

  it('returns demo mode result when no valid API keys', async () => {
    delete process.env.GROQ_API_KEY
    const result = await callAI('test prompt')
    expect(result.provider).toBe('demo')
    expect(result.content).toBe('')
    expect(result.tokensUsed).toBe(0)
  })

  it('accepts string prompt input', async () => {
    delete process.env.GROQ_API_KEY
    const result = await callAI('Hello')
    expect(result).toHaveProperty('provider')
    expect(result).toHaveProperty('content')
    expect(result).toHaveProperty('tokensUsed')
  })

  it('accepts message array input', async () => {
    delete process.env.GROQ_API_KEY
    const result = await callAI([
      { role: 'system', content: 'You are helpful' },
      { role: 'user', content: 'Hello' },
    ])
    expect(result).toHaveProperty('provider', 'demo')
  })
})

describe('isDemoMode', () => {
  const originalEnv = { ...process.env }

  beforeEach(() => {
    process.env.GROQ_API_KEY = undefined
    process.env.GLM_API_KEY = undefined
    process.env.GEMINI_API_KEY = undefined
    process.env.OPENAI_API_KEY = undefined
  })

  afterEach(() => {
    process.env = { ...originalEnv }
  })

  it('returns true when no API keys are set', () => {
    expect(isDemoMode()).toBe(true)
  })

  it('returns true when keys are placeholder values', () => {
    process.env.GROQ_API_KEY = 'sk-placeholder-abc'
    expect(isDemoMode()).toBe(true)
  })

  it('returns false when a valid API key is present', () => {
    process.env.GROQ_API_KEY = 'gsk_real_key_12345'
    expect(isDemoMode()).toBe(false)
  })
})
