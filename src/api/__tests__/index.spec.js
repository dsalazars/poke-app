import { describe, it, expect, vi, beforeEach } from 'vitest'
import pokeApi from '@/api/index'

// Mock manual de `import.meta.env`
vi.stubGlobal('import.meta', { env: { VITE_API_BASE_URL: 'https://pokeapi.co/api/v2' } })

describe('pokeApi', () => {
  it('crea una instancia de axios con configuración correcta', () => {
    expect(pokeApi.defaults.baseURL).toBe(import.meta.env.VITE_API_BASE_URL)
    expect(pokeApi.defaults.headers['Accept']).toBe('application/json')
    expect(pokeApi.defaults.headers['Content-Type']).toBe('application/json')
    expect(pokeApi.defaults.timeout).toBe(10000)
  })
})

