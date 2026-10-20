import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      ignored: [
        '**/.superpowers/**',
        '**/Projects/**',
        '**/Experience/**',
        '**/Certifications/**',
        '**/*.pdf',
        '**/*.docx',
        '**/*.ipynb',
        '**/*.csv'
      ]
    }
  }
})
