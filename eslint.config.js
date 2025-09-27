import { defineConfig } from 'eslint-define-config'
import svelte from 'eslint-plugin-svelte'
import astro from 'eslint-plugin-astro'

export default defineConfig([
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: ['eslint:recommended', 'prettier'],
  },
  {
    files: ['**/*.svelte'],
    plugins: { svelte },
    extends: ['plugin:svelte/recommended', 'prettier'],
  },
  {
    files: ['**/*.astro'],
    plugins: { astro },
    extends: ['plugin:astro/recommended', 'prettier'],
  },
])
