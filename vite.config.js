import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Copia dist/index.html a dist/404.html para soportar recargas en /eventos y /galeria
const spa404Plugin = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const indexPath = path.resolve(__dirname, 'dist/index.html')
    const notFoundPath = path.resolve(__dirname, 'dist/404.html')
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath)
    }
  },
})

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), spa404Plugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
})