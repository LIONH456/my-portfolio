import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare'; // 1. 手动导入 Cloudflare 适配器

export default defineConfig({
  integrations: [tailwind()],
  output: 'static', // 2. 关键：设置为 hybrid（混合渲染）模式。这样全站默认是快如闪电的静态，唯独你的发信 API 跑在边缘服务器上。
  adapter: cloudflare({
    imageService: 'passthrough'， // 3. 避免 Cloudflare 编译图片时报错，使用透传模式
    mode: 'directory' 
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'vi'],
    routing: {
      prefixDefaultLocale: false,
      strategy: 'pathname',
    },
  },
});