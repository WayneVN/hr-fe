import { resolve } from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      customElement: true
    }),
    vueJsx({
      transformOn: true
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
})
