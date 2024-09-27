import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
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
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
