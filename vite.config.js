import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
      // And now it makes server to believe that vite app is also running on same server and request for api calls coming from 3000 (Just like home entry). Means we don't have to handle cors error for the same localhost port number.
    }
  },
  plugins: [react()],
})
