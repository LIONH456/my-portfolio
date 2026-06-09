import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'passthrough',
    mode: 'advanced',
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'vi'],
    routing: {
      prefixDefaultLocale: false,
      strategy: 'pathname'
    }
  }
});