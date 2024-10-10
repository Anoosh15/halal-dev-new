import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.jsx'), // Reliable path handling
    },
    outDir: 'dist', // Default directory, so this is optional
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Better path handling for aliases
    },
  },
});
