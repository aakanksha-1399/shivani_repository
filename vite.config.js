import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/shivani_repository/',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'], // Add this line to handle 3D model files
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei']
  }
})