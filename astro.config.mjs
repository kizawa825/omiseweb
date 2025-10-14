import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { sanityIntegration } from '@sanity/astro';
import netlify from '@astrojs/netlify';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [
    tailwind(),
    sanityIntegration({
      projectId: '4q6dxeoe',
      dataset: 'production',
      useCdn: false,
      studio: false
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
