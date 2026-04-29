// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['localhost', '127.0.0.1'],
    remotePatterns: [{ protocol: 'https' }]
  },
  markdown: {
    shikiConfig: {
      theme: 'nord'
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ['aos']
    }
  },
  site: 'https://komm-raus.org'
});
