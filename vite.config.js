import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Enable rollup chunk splitting for better caching
    rollupOptions: {
      output: {
        // Separate vendor chunks for better caching
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
        // Configure chunk file names for better caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Use esbuild for minification (faster than terser)
    minify: 'esbuild',
    esbuildOptions: {
      // Drop console.log and debugger in production
      drop: ['console', 'debugger']
    }
  },
  // Enable optimizeDeps for faster dev server startup
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
