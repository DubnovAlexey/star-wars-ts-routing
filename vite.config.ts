import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative paths: the build works on GitHub Pages (/star-wars-ts-routing/) and inside an iframe in UNIVERSE
  base: './',
})
