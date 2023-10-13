/* eslint-disable */
const { defineConfig } = require("vite")
const react = require("@vitejs/plugin-react")
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
