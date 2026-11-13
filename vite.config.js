import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Two pages: the landing page and the thank-you page (its own URL for conversion tracking)
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        thankYou: resolve(import.meta.dirname, 'thank-you.html'),
      },
    },
  },
})
