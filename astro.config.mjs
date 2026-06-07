import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://parcel.bh',
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    css: { devSourcemap: true },
    resolve: { alias: { '@': '/src' } },
  },
})
