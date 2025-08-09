import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec);

// Custom plugin to generate news data before dev/build
const generateNewsPlugin = () => {
  return {
    name: 'generate-news',
    async buildStart() {
      try {
        await execAsync('node scripts/generate-news.js');
        console.log('News data generated successfully');
      } catch (error) {
        console.error('Failed to generate news data:', error);
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), generateNewsPlugin()],
  server: {
    port: 5174,
  },
})