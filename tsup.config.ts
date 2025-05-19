import path from 'path'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/app.ts'],
  format: ['esm'], // o 'cjs' si usas CommonJS
  target: 'node18', // o tu versión Node
  sourcemap: true,
  outDir: 'dist',
  clean: true,
  dts: false, // true si usas .d.ts
  esbuildOptions(options) {
    options.alias = {
        '@config': path.resolve(__dirname, 'src/config'),
        '@controllers': path.resolve(__dirname, 'src/controllers'),
        '@interfaces': path.resolve(__dirname, 'src/interfaces'),
        '@middleware': path.resolve(__dirname, 'src/middleware'),
        '@models': path.resolve(__dirname, 'src/models'),
        '@routes': path.resolve(__dirname, 'src/routes'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      }
  }
})
    