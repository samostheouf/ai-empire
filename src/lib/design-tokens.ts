export const colors = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  purple: {
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    950: '#0f0a2e',
  },
  accent: {
    pink: '#ec4899',
    green: '#22c55e',
    orange: '#f97316',
    red: '#ef4444',
    yellow: '#eab308',
  },
  bg: {
    dark: '#0f0a2e',
    card: 'rgba(255, 255, 255, 0.05)',
    glass: 'rgba(255, 255, 255, 0.05)',
  },
  border: {
    glass: 'rgba(255, 255, 255, 0.1)',
  },
} as const

export const spacing = {
  section: {
    y: 'py-16 sm:py-24',
    x: 'px-4 sm:px-6 lg:px-8',
  },
  container: {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    full: 'max-w-7xl',
  },
  card: {
    padding: 'p-6',
    paddingLg: 'p-8',
    gap: 'gap-4',
  },
} as const

export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif',
    mono: 'monospace',
  },
  fontSize: {
    hero: 'text-5xl sm:text-6xl lg:text-8xl',
    h1: 'text-4xl sm:text-5xl lg:text-6xl',
    h2: 'text-3xl sm:text-4xl',
    h3: 'text-xl',
    body: 'text-lg',
    small: 'text-sm',
    tiny: 'text-xs',
  },
  fontWeight: {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
} as const

export const effects = {
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10',
  glassCard: 'glass-card rounded-2xl',
  gradient: 'bg-gradient-to-r from-indigo-600 to-purple-600',
  gradientText: 'text-gradient',
  shadow: {
    sm: 'shadow-lg shadow-indigo-500/20',
    md: 'shadow-xl shadow-indigo-500/25',
    lg: 'shadow-2xl shadow-indigo-500/10',
  },
} as const

export const animations = {
  float: 'animate-float',
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  glow: 'animate-glow',
  shimmer: 'animate-shimmer',
  scaleIn: 'animate-scale-in',
} as const

const designTokens = { colors, spacing, typography, effects, animations }
export default designTokens
