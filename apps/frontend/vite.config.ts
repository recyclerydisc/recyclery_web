import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
// https://vite.dev/config/


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // a
  return {
    plugins: [react(), tailwindcss()],
    base: '/',
    server: {
      proxy: {
        '/images': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
        },
        '/hours': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
        },
        '/people': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
        },
      },
    },
  }
})