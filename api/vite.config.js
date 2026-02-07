import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      formats: ['es'],
      fileName: 'main'
    },
    rollupOptions: {
      external: ['express']
    },
    outDir: 'dist',
    ssr: true
  }
});
