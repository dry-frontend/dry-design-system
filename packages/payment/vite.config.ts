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
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'payment',
      formats: ['es'],
      fileName: format => `payment.${format}.js`
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
