type LogLevel = 'error' | 'warn' | 'info' | 'debug'

const LOG_LEVELS: Record<LogLevel, number> = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 3,
}

const currentLevel: number = LOG_LEVELS[process.env.LOG_LEVEL as LogLevel] ?? LOG_LEVELS.info

function timestamp(): string {
  return new Date().toISOString()
}

function log(level: LogLevel, category: string, message: string, meta?: Record<string, unknown>) {
  if (LOG_LEVELS[level] > currentLevel) return
  const prefix = `[${timestamp()}] [${level.toUpperCase()}] [${category}]`
  const suffix = meta ? ` ${JSON.stringify(meta)}` : ''
  const line = `${prefix} ${message}${suffix}`
  if (level === 'error') console.error(line)
  else if (level === 'warn') console.warn(line)
  else if (level === 'info') console.info(line)
  else if (level === 'debug') console.debug(line)
}

export const logger = {
  error: (category: string, message: string, meta?: Record<string, unknown>) => log('error', category, message, meta),
  warn: (category: string, message: string, meta?: Record<string, unknown>) => log('warn', category, message, meta),
  info: (category: string, message: string, meta?: Record<string, unknown>) => log('info', category, message, meta),
  debug: (category: string, message: string, meta?: Record<string, unknown>) => log('debug', category, message, meta),
}
