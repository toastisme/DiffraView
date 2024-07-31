import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  server:{
    open:true
  },
  plugins: [react()],
  build: {
    outDir: '../../dials_electron_app/public', // Adjust this path if your Electron app is elsewhere
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
