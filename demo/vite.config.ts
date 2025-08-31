import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'nebula-loading-animation': resolve(__dirname, '../src/index.ts'),
    },
  },
  server: {
    port: 3000,
  },
});