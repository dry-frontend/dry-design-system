import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    peerDepsExternal(),
    dts({
      include: ['src']
    })
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'cart',
      formats: ['es'],
      fileName: format => `cart.${format}.js`
    },
    esbuild: {
      minify: false
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
}));
