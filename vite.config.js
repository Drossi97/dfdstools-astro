import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4321,
    strictPort: false,
    allowedHosts: [
      'prueba.rossicode.es',
      '.rossicode.es',
      'localhost',
      /.*/  // Permite cualquier dominio
    ]
  },
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4321
  }
});

