import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 70 },
      jpeg: { quality: 72 },
      jpg: { quality: 72 },
      webp: { quality: 72 },
      avif: { quality: 50 },
      svg: { multipass: true },
      includePublic: true,
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
