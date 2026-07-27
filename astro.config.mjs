import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  site: 'https://barbermen.com.br',
  integrations: [react()],
  experimental: {
    preserveScriptOrder: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
    alias: {
      '@': path.resolve('./src'),
      '~': path.resolve('.'),
    },
    },
  },
});