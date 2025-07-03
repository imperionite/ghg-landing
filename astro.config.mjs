// astro.config.mjs
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    site: 'https://ghgph.vercel.app',
    outDir: 'dist',
    vite: {
      plugins: [
        ...(isProd
          ? [
              VitePWA({
                registerType: 'autoUpdate',
                includeAssets: [
                  'favicon.ico',
                  'robots.txt',
                  'apple-touch-icon.png',
                  'pwa-192x192.png',
                  'pwa-512x512.png'
                ],
                manifest: {
                  name: 'GHG Data Explorer PH',
                  short_name: 'GHGPH',
                  start_url: '/',
                  display: 'standalone',
                  background_color: '#ffffff',
                  theme_color: '#0f172a',
                  icons: [
                    {
                      src: '/pwa-192x192.png',
                      sizes: '192x192',
                      type: 'image/png',
                    },
                    {
                      src: '/pwa-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                    },
                    {
                      src: '/pwa-512x512.png',
                      sizes: '512x512',
                      type: 'image/png',
                      purpose: 'any maskable',
                    },
                  ],
                },
                workbox: {
                  // Cache only static assets and HTML
                  runtimeCaching: [
                    {
                      urlPattern: /^https:\/\/ghgph\.vercel\.app\/.*\.(js|css|png|jpg|svg|ico|html)$/,
                      handler: 'CacheFirst',
                      options: {
                        cacheName: 'static-cache',
                        expiration: {
                          maxEntries: 40,
                          maxAgeSeconds: 24 * 60 * 60, // 1 day
                        },
                        cacheableResponse: {
                          statuses: [0, 200],
                        },
                      },
                    },
                  ],
                },
              }),
            ]
          : []),
      ],
      server: {
        hmr: true,
        watch: {
          usePolling: true,
          interval: 100,
        },
        host: '0.0.0.0',
        port: 4321,
      },
    },
  };
});
