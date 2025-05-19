import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/app.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'es2022',
  sourcemap: true,
  splitting: false,
  clean: true
})