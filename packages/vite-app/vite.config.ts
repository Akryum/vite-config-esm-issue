import { foo } from 'esm-only'
import { defineConfig } from 'vite'

console.log('foo:', foo)

export default defineConfig({
  // Vite config here
})
