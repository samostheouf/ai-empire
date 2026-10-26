import OpenAI from 'openai';
import { logger } from '@/lib/logger';

interface AIResult {
  content: string;
  tokensUsed: number;
  provider: string;
}

interface ProviderConfig {
  name: string;
  apiKey: string | undefined;
  baseURL: string;
  model: string;
}

/**
 * Providers IA, dans l'ordre de preference.
 *
 * Les modeles ont ete VERIFIES contre l'API le 29/09 (route /api/diag-ai) :
 *   - groq   : OK avec qwen/qwen3.8-27b et openai/gpt-oss-120b.
 *              `llama-3.3-70b-versatile` a ete RETIRE de Groq (404).
 *   - glm    : cle expiree (401 « token expire ») — inactif jusqu'a renouvellement.
 *   - openai : cle invalide (401) — inactif.
 *   - xai    : 403 — inactif.
 *
 * Un provider dont la cle est invalide fait perdre 3 tentatives x 15s de timeout
 * AVANT d'atteindre le suivant : c'est ce qui faisait tomber le chatbot en mode
 * demo alors que Groq repondait. Les providers sans cle exploitable sont donc
 * laisses sans cle (isDemoMode les ignore) plutot que d'etre essaies pour rien.
 *
 * A RENOUVELER : revalider chaque modele avec /api/diag-ai avant de le
 * remettre dans la liste. Un modele retire cote provider fait echouer le
 * provider SILENCIEUSEMENT.
 */
const PROVIDERS: ProviderConfig[] = [
  {
    name: 'groq',
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
    // Backup : si le principal est retire un jour, le suivant prend le relais.
    model: 'qwen/qwen3.8-27b',
  },
];

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const MAX_RETRIES = 3;
const BASE_DELAY_MS = 1000;
const MAX_DELAY_MS = 10000;
const REQUEST_TIMEOUT_MS = 15000;

function isRetryableError(error: unknown): boolean {
  if (!(error instanceof Error)) return false;
  const msg = error.message.toLowerCase();
  if (msg.includes('rate_limit') || msg.includes('429')) return true;
  if (msg.includes('econnreset') || msg.includes('econnrefused') || msg.includes('etimedout')) return true;
  if (msg.includes('502') || msg.includes('503') || msg.includes('504')) return true;
  if (msg.includes('timeout') || msg.includes('aborted')) return true;
  if (error.name === 'AbortError') return true;
  return false;
}

function getRetryDelay(attempt: number): number {
  const delay = Math.min(BASE_DELAY_MS * Math.pow(2, attempt), MAX_DELAY_MS);
  const jitter = delay * (0.5 + Math.random() * 0.5);
  return Math.floor(jitter);
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Sends a prompt or conversation to the first available AI provider
 * and returns the generated content.
 *
 * Providers are tried in order (Groq → GLM → Gemini → OpenAI). Each
 * provider is attempted up to 3 times with exponential backoff + jitter.
 * A 15-second timeout is applied per request.
 *
 * When no provider has a valid API key, a demo/empty result is returned.
 *
 * @param promptOrMessages - A plain text prompt or an array of chat messages.
 * @param maxTokens - Maximum tokens in the response (default: 1000).
 * @param modelOverride - Override the model name (only applies to the OpenAI provider).
 * @returns An `AIResult` with the generated content, token count, and provider name.
 *
 * @example
 * ```ts
 * const result = await callAI('Explain quantum computing', 500);
 * console.log(result.content);
 * ```
 */
export async function callAI(
  prompt: string,
  maxTokens?: number,
  modelOverride?: string
): Promise<AIResult>;
export async function callAI(
  messages: ChatMessage[],
  maxTokens?: number,
  modelOverride?: string
): Promise<AIResult>;
export async function callAI(
  promptOrMessages: string | ChatMessage[],
  maxTokens: number = 1000,
  modelOverride?: string
): Promise<AIResult> {
  const messages: ChatMessage[] = Array.isArray(promptOrMessages)
    ? promptOrMessages
    : [{ role: 'user', content: promptOrMessages }];

  for (const provider of PROVIDERS) {
    if (!provider.apiKey) continue;

    let lastError: unknown = null;

    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        const client = new OpenAI({
          apiKey: provider.apiKey,
          baseURL: provider.baseURL,
        });

        const model = modelOverride && provider.name === 'openai'
          ? modelOverride
          : provider.model;

        const completion = await client.chat.completions.create({
          model,
          messages,
          max_tokens: maxTokens,
        }, { signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });

        return {
          content: completion.choices[0]?.message?.content || '',
          tokensUsed: completion.usage?.total_tokens || 0,
          provider: provider.name,
        };
      } catch (error) {
        lastError = error;

        if (attempt < MAX_RETRIES - 1 && isRetryableError(error)) {
          const delay = getRetryDelay(attempt);
          logger.warn('ai', `${provider.name} attempt ${attempt + 1} failed, retrying in ${delay}ms`, {
            error: error instanceof Error ? error.message : String(error),
          });
          await sleep(delay);
          continue;
        }

        logger.error('ai', `${provider.name} failed after ${attempt + 1} attempts`, {
          error: error instanceof Error ? error.message : String(error),
        });
        break;
      }
    }
  }

  logger.warn('ai', 'All providers exhausted, returning demo result');
  return { content: '', tokensUsed: 0, provider: 'demo' };
}

/**
 * Checks whether the application is running in demo mode.
 *
 * Demo mode is active when NO AI provider has a configured API key.
 *
 * NOTE (29/09) : ce fichier contenait un garde `apiKey.startsWith(marqueur)`
 * ou le marqueur de masquage s'etait retrouve ECRIT dans le source. Toute cle
 * reelle echouait donc le test et etait sautee : les 4 cles Vercel
 * (GROQ/OPENAI/GLM/XAI) etaient configurees et le LLM ne repondait quand meme
 * pas — l'app annoncait une IA reelle et servait du texte statique.
 *
 * @returns `true` if no real AI provider is available.
 */
export function isDemoMode(): boolean {
  const placeholderPatterns = [
    '...', 'pla', 'test', 'xxx', 'example', 'your', 'changeme', 'dummy', 'fake',
  ]
  const isPlaceholder = (key: string | undefined): boolean => {
    if (!key) return true
    const lower = key.toLowerCase()
    if (key.length < 12) return true
    return placeholderPatterns.some((p) => lower.includes(p))
  }
  const envKeys = [
    process.env.GROQ_API_KEY,
    process.env.GLM_API_KEY,
    process.env.GEMINI_API_KEY,
    process.env.OPENAI_API_KEY,
  ]
  return envKeys.every(isPlaceholder)
}
