import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // React plugin options
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    }),
    // Add image optimization plugin
    {
      name: 'image-optimizer',
      enforce: 'pre',
      transformIndexHtml(html) {
        return html.replace(/(<img[^>]+)(loading=["']?lazy["']?)/g, '$1loading="lazy" decoding="async"');
      }
    }
  ],
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    hmr: {
      timeout: 5000
    },
    watch: {
      usePolling: true
    },
    fs: {
      strict: false,
      allow: ['../']
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@public': '/public'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: []
  },
  build: {
    target: 'es2020',
    minify: 'terser',
    cssMinify: true,
    reportCompressedSize: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2
      },
      mangle: {
        safari10: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
          'forms': ['react-hook-form', '@hookform/resolvers', 'yup'],
          'utils': ['react-intersection-observer', 'react-helmet-async', 'react-error-boundary']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            // Optimize image assets
            return `assets/images/[name]-[hash][extname]`;
            // Enable image compression in build process
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false,

    chunkSizeWarningLimit: 1000
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      css: {
        charset: false
      }
    }
  },
  publicDir: 'public'
});