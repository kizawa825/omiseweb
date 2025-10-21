import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { sanityIntegration } from '@sanity/astro';
// import netlify from '@astrojs/netlify'; // 削除またはコメントアウト
import cloudflare from '@astrojs/cloudflare'; // 追加
import { fileURLToPath } from 'node:url';

export default defineConfig({
  output: 'server', // または 'hybrid'
  // adapter: netlify(), // 削除またはコメントアウト
  adapter: cloudflare(), // 変更
  integrations: [
    tailwind(),
    sanityIntegration({ // sanityIntegration の設定はそのまま
      projectId: '4q6dxeoe',
      dataset: 'production',
      useCdn: false,
      studio: false
    }),
  ],
  vite: { // vite の設定もそのまま
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