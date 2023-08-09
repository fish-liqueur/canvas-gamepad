import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';
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
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
});