// import { defineConfig } from "vite";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//     plugins: [react()],
//     css: {
//         postcss: {
//             plugins: [tailwindcss(), autoprefixer()],
//         },
//     },
//     server: {
//       port: 3000,
//     }
// });