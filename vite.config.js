import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Si usas un entorno de subdirectorio como Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

