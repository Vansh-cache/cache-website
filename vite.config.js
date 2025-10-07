import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    host: true,          // Listen on 0.0.0.0 to allow LAN access
    port: 5174,          // Use a stable port for external devices
    strictPort: true,    // Fail if 5174 is taken to avoid surprises
  },
})
