import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths'
import pkg from './package.json' assert { type: 'json' }

export default defineConfig({
    build: {
      lib: {
        entry: resolve(__dirname, 'src/app'),
        formats: ['es'], // pure ESM package
      },
      rollupOptions: {
        external: [
          ...Object.keys(pkg.dependencies), // don't bundle dependencies
          /^node:.*/, // don't bundle built-in Node.js modules (use protocol imports!)
        ],
      },
      target: 'esnext', // transpile as little as possible
    },
    plugins: [dts({insertTypesEntry: true,}), tsconfigPaths()], // emit TS declaration files
  })