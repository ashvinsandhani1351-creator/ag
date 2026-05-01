import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        wallTiles: resolve(__dirname, 'wall-tiles.html'),
        floorTiles: resolve(__dirname, 'floor-tiles.html'),
        polishedPorcelain: resolve(__dirname, 'polished-porcelain.html'),
        slabTiles: resolve(__dirname, 'slab-tiles.html'),
        parkingTiles: resolve(__dirname, 'parking-tiles.html'),
        sanitaryWares: resolve(__dirname, 'sanitary-wares.html'),
        woodStrip: resolve(__dirname, 'wood-strip.html'),
        stepRiser: resolve(__dirname, 'step-riser.html'),
      },
    },
  },
})
