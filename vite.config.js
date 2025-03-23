import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/easy-trade-insights/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
