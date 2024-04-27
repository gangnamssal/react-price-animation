import * as path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import libCss from 'vite-plugin-libcss';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/libs/index.tsx'),
      name: 'react-price-animation',
      fileName: 'index',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: ({ hash }) => `prefix_${hash}` }),
    dts({ insertTypesEntry: true }),
    libCss(),
  ],

  resolve: {
    alias: [
      { find: '@libs', replacement: '/src/libs' },
      { find: '@', replacement: '/src' },
    ],
  },
});
