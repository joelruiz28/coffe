export default defineConfig({
  root: './',
  base: '/',  // Esto asegura que los archivos estáticos se sirvan correctamente
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  plugins: [react()],
});

