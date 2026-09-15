import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Relative asset paths so the built index.html also works loaded via
  // file:// from a packaged Electron app, not just from a dev server.
  base: './',
  server: {
    open: false,
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**']
    },
  },
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
