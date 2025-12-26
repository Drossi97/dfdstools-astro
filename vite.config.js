import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    host: true,
    port: Number(process.env.PORT) || 4321
  }
});

