import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              message: 'Please import from `@/i18n` instead.',
            },
            {
              name: 'next/navigation',
              importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
              message: 'Please import from `@/i18n` instead.',
            },
          ],
        },
      ],
    },
  },
]

export default eslintConfig
