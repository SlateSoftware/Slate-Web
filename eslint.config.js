import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import astro from 'eslint-plugin-astro'

export default defineConfig([
    js.configs.recommended,
    ...svelte.configs.recommended,
    ...astro.configs.recommended,
])
