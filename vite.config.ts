import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Only the root entry belongs to the React app; the archived static
  // site under /legacy must not be crawled by the dep scanner.
  optimizeDeps: {
    entries: ['index.html'],
  },
});
