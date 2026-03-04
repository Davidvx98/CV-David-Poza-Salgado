// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// ⚠️ Actualiza esta URL cuando tengas tu dominio definitivo
const SITE_URL = 'https://davidpozasalgado.dev';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});