// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ghgph-55623.firebaseapp.com',
  outDir: 'dist',
  vite: {
    server: {
      hmr: true, 
      watch: {
        usePolling: true, 
        interval: 100,    
      },
      host: '0.0.0.0', 
      port: 4321      
    }
  }
});
