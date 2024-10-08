import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import biomePlugin from 'vite-plugin-biome';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    biomePlugin({
      mode: 'check',
      files: '.',
      applyFixes: true,
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
