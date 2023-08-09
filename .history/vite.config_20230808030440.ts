import {fileURLToPath, URL} from "node:url";
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'canvas-gamepad',
            fileName: 'canvas-gamepad',
        },
    },
    plugins: [dts()],
        resolve: {

        alias: {
            '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
            '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
            '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
            '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
        }
    },
});