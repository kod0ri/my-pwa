import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/my-pwa/', // <- зміни на назву твого репозиторію
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        install: '/install.html'
      }
    }
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'My PWA',
        short_name: 'My_PWA',
        description: 'This is my first Progressive Web App',
        theme_color: '#000000',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/my-pwa/', // <- зміни під GitHub Pages
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,ico,svg}'],
      }
    })
  ]
});
