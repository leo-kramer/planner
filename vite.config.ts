import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Planner',
        icons: [
          {
            src: 'icons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'screenshots/dashboard-mobile.png',
            sizes: '540x720',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: 'screenshots/dashboard-desktop.png',
            sizes: '1280x720',
            type: 'image/png',
            form_factor: 'wide', // for desktop
          },
        ],
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
});
