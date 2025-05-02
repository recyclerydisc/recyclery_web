import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vite.dev/config/


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/images': {
        target: `http://localhost:3000`, // temporary will have to modify later
        changeOrigin: true,
      },
      }
  }
});
