import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      coverage: {
        provider: 'v8', // o 'c8' si usas c8
        reporter: ['text', 'json', 'html'], // puedes agregar 'lcov' si usas herramientas como SonarQube
        reportsDirectory: './coverage',
        include: ['src/**/*.{js,vue}'],
        exclude: ['node_modules', 'tests', '**/__tests__/**'],
      },
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
