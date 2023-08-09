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
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@game': fileURLToPath(new URL('./src/game', import.meta.url)),
        }
    },
});