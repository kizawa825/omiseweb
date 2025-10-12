import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      },
    },
  },
});
