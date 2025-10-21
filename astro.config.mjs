import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import { sanityIntegration } from '@sanity/astro'; // ← 古いimportを削除またはコメントアウト
import sanity from '@sanity/astro'; // ← 新しい名前でimport
import cloudflare from '@astrojs/cloudflare';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    // sanityIntegration({...}) // ← 古い記述を削除またはコメントアウト
    sanity({ // ← 新しい名前でインテグレーションを使用
      projectId: '4q6dxeoe',
      dataset: 'production',
      useCdn: false,
      // studioBasePath: '/studio' // 必要であればStudioのパスなども指定
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      },
    },
  },
});