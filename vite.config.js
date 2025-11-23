import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),   // keep react plugin normal
    tailwindcss() // tailwind as separate vite plugin
  ],
})
