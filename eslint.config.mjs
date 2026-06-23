import nextConfig from 'eslint-config-next'

export default [
  ...nextConfig,
  {
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
