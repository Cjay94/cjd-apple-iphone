import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "chad-jephthah",
    project: "javascript-react",
    base: "/cjd-apple-iphone",
  })],

  build: {
    sourcemap: true
  }
})