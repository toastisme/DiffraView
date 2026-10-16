import fs from "fs"
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

// Prebuilt viewers, docs and images that components reference by plain
// relative URL (e.g. <iframe src="src/assets/ExperimentViewer/...">), so Vite
// never sees them as imports 
const RUNTIME_ASSETS = [
  "src/assets/ExperimentViewer",
  "src/assets/ReciprocalLatticeViewer",
  "src/assets/ExperimentPlanner",
  "src/assets/ShoeboxViewer",
  "src/assets/documentation/_build/html",
  "src/assets/logo_transparent.png",
  "src/assets/logo_light.png",
  "src/assets/logo_large.png",
]

function copyRuntimeAssets(): Plugin {
  return {
    name: "copy-runtime-assets",
    apply: "build",
    closeBundle() {
      for (const asset of RUNTIME_ASSETS) {
        const src = path.resolve(import.meta.dirname, asset)
        if (!fs.existsSync(src)) {
          this.warn(`runtime asset not found, skipping: ${asset}`)
          continue
        }
        fs.cpSync(src, path.resolve(import.meta.dirname, "build", asset), { recursive: true })
      }
    },
  }
}

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
  plugins: [react(), copyRuntimeAssets()],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
