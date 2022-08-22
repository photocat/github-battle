import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://photocat.github.io/github-battle/',
    plugins: [react()],
    css: {
        devSourcemap: true
    },
})
