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

const PROVIDERS: ProviderConfig[] = [
  {
    name: 'groq',
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
    model: 'llama-3.3-70b-versatile',
  },
  {
    name: 'glm',
    apiKey: process.env.GLM_API_KEY,
    baseURL: 'https://open.bigmodel.cn/api/paas/v4',
    model: 'glm-4-flash',
  },
  {
    name: 'gemini',
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
    model: 'gemini-2.0-flash',
  },
  {
    name: 'openai',
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api.openai.com/v1',
    model: 'gpt-3.5-turbo',
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
    if (!provider.apiKey || provider.apiKey.startsWith('sk-placeholder')) continue;

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
 * Demo mode is active when no AI provider has a configured API key
 * (or all keys are placeholders).
 *
 * @returns `true` if no real AI provider is available.
 */
export function isDemoMode(): boolean {
  return PROVIDERS.every(
    (p) => !p.apiKey || p.apiKey.startsWith('sk-placeholder')
  );
}
