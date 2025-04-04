import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Ajusta esto si tu proyecto está en una subcarpeta
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
