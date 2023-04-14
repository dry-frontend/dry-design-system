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
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'cart',
      formats: ['es'],
      fileName: 'cart.es'
    },
    esbuild: {
      minify: true
    }
  }
}));
