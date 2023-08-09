import {fileURLToPath, URL} from "node:url";
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/app'),
            name: 'canvas-gamepad',
            fileName: 'canvas-gamepad',
        },
    },
    plugins: [dts()],
    // plugins: [dts(), tsconfigPaths({root: './src'})],
    resolve: {
        alias: {
        //   '@app': path.resolve(__dirname, './src/app'),
        //   '@@widgets': path.resolve(__dirname, './src/widgets'),
        //   '@features': path.resolve(__dirname, './src/features'),
        //   '@entities': path.resolve(__dirname, './src/entities'),
        //   '@shared': path.resolve(__dirname, './src/shared'),
          '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
          '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
          '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
          '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
          '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
        },
      },
});