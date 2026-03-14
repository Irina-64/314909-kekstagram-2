import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: '/index.html',
    host: true
  },
  publicDir: false,
  build: {
    outDir: 'build'
  }
});
