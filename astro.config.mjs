// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
  vite: {
    preview: {
      host: '0.0.0.0',
      allowedHosts: true  // Permite cualquier host
    }
  }
});