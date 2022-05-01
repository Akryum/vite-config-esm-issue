import { foo } from 'esm-only'
import { foo as foo2 } from 'esm-only2'
import { defineConfig } from 'vite'

console.log('foo:', foo)
console.log('foo2:', foo2)

export default defineConfig({
  // Vite config here
})
