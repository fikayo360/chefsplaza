import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  // ...other configurations
  plugins: [react()],
  optimizeDeps: {
    include: ['**/*.css'], // Ensure CSS files are included in dependency optimization
  },
});
