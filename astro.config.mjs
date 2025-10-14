import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// 'sanity' ではなく 'sanityIntegration' を{}で囲ってインポートします
import { sanityIntegration } from '@sanity/astro';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  integrations: [
    tailwind(),
    // こちらも 'sanity' から 'sanityIntegration' に変更します
    sanityIntegration({
      projectId: '4q6dxeoe',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
  ],
  // ... (viteの設定などは変更なし)
});
