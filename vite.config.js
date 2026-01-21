import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path" // 1. Importa path
import { fileURLToPath } from 'url' // 1.b Obtener file path en ESM

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/ 
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // 2. Define que "@" apunte a la carpeta "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
})