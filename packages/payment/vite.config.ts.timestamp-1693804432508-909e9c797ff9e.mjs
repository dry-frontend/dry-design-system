// vite.config.ts
import react from "file:///Users/yoon/Desktop/dry-test-main/node_modules/.pnpm/@vitejs+plugin-react-swc@3.3.2_vite@4.4.9/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "node:path";
import { defineConfig } from "file:///Users/yoon/Desktop/dry-test-main/node_modules/.pnpm/vite@4.4.9_@types+node@18.17.14/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/yoon/Desktop/dry-test-main/node_modules/.pnpm/vite-plugin-dts@2.3.0_@types+node@18.17.14_rollup@3.28.1_vite@4.4.9/node_modules/vite-plugin-dts/dist/index.mjs";
import tsConfigPaths from "file:///Users/yoon/Desktop/dry-test-main/node_modules/.pnpm/vite-tsconfig-paths@4.2.0_typescript@4.9.4_vite@4.4.9/node_modules/vite-tsconfig-paths/dist/index.mjs";
import peerDepsExternal from "file:///Users/yoon/Desktop/dry-test-main/node_modules/.pnpm/rollup-plugin-peer-deps-external@2.2.4_rollup@3.28.1/node_modules/rollup-plugin-peer-deps-external/dist/rollup-plugin-peer-deps-external.js";
var __vite_injected_original_dirname = "/Users/yoon/Desktop/dry-test-main/packages/payment";
var vite_config_default = defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    peerDepsExternal(),
    dts({
      include: ["src"]
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.tsx"),
      name: "payment",
      formats: ["es", "umd"],
      fileName: (format) => `payment.${format}.js`
    },
    esbuild: {
      minify: true
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveW9vbi9EZXNrdG9wL2RyeS10ZXN0LW1haW4vcGFja2FnZXMvcGF5bWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3lvb24vRGVza3RvcC9kcnktdGVzdC1tYWluL3BhY2thZ2VzL3BheW1lbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3lvb24vRGVza3RvcC9kcnktdGVzdC1tYWluL3BhY2thZ2VzL3BheW1lbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuaW1wb3J0IHBlZXJEZXBzRXh0ZXJuYWwgZnJvbSAncm9sbHVwLXBsdWdpbi1wZWVyLWRlcHMtZXh0ZXJuYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4gKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdHNDb25maWdQYXRocygpLFxuICAgIHBlZXJEZXBzRXh0ZXJuYWwoKSxcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWydzcmMnXVxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50c3gnKSxcbiAgICAgIG5hbWU6ICdwYXltZW50JyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYHBheW1lbnQuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIG1pbmlmeTogdHJ1ZVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxPQUFPLFdBQVc7QUFDMVYsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLHNCQUFzQjtBQUw3QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsT0FBTztBQUFBLEVBQ2pDLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDakIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUM5QyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsV0FBVyxNQUFNO0FBQUEsSUFDekM7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
