import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '',
  plugins: [react(),],
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://backend-swft.onrender.com', // Correct backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    port: 3000,
  },
});