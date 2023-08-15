import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { unlinkSync } from "fs";
// import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/typescript-quiz/",
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            },
        },
    },
    plugins: [
        react(),
        // {
        //     name: "remove-index-html",
        //     writeBundle() {
        //         try {
        //             unlinkSync(resolve("dist/index.html"));
        //         } catch (err) {
        //             // Ignored
        //         }
        //     },
        // },
    ],
});
