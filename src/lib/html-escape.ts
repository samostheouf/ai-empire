/**
 * Shared security helpers for email templates and AI prompts.
 */

const HTML_ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

/**
 * Escape a string for safe interpolation into HTML email templates.
 * Prevents HTML/mail injection from user-controlled data.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => HTML_ESCAPE_MAP[ch])
}

/**
 * Sanitize untrusted user input before embedding it into an LLM prompt.
 * - trims whitespace
 * - truncates to maxLen characters (default 2000)
 * - strips common prompt-injection sequences (``` fences, "ignore previous instructions")
 */
export function sanitizePromptInput(input: unknown, maxLen = 2000): string {
  let s = String(input ?? '')
    .replace(/```/g, "'''")
    .replace(/ignore\s+previous\s+instructions/gi, '[filtered]')
    .trim()
  if (maxLen > 0 && s.length > maxLen) {
    s = s.slice(0, maxLen)
  }
  return s
}
