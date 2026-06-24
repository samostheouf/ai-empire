import nextConfig from 'eslint-config-next'

export default [
  ...nextConfig,
  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
