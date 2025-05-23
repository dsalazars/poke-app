import { describe, it, expect, vi, beforeEach } from 'vitest'
import pokeApi from '@/api/axios'

// Mock manual de `import.meta.env`
vi.stubGlobal('import.meta', { env: { VITE_API_BASE_URL: 'https://pokeapi.co/api/v2' } })

describe('pokeApi', () => {
  it('crea una instancia de axios con configuración correcta', () => {
    expect(pokeApi.defaults.baseURL).toBe(import.meta.env.VITE_API_BASE_URL)
    expect(pokeApi.defaults.headers['Accept']).toBe('application/json')
    expect(pokeApi.defaults.headers['Content-Type']).toBe('application/json')
    expect(pokeApi.defaults.timeout).toBe(10000)
  })

  it('interceptor de respuesta maneja errores correctamente', async () => {
    const error = {
      response: {
        status: 404,
        data: { message: 'Not Found' },
        headers: {}
      }
    }

    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => { })

    try {
      await pokeApi.interceptors.response.handlers[0].rejected(error)
    } catch (e) {
      expect(consoleErrorSpy).toHaveBeenCalledWith('Error del servidor:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      })
    } finally {
      consoleErrorSpy.mockRestore()
    }
  })

  it('interceptor maneja error por configuración (otro tipo)', async () => {
    const error = {
      message: 'Config error'
    }

    const handler = pokeApi.interceptors.response.handlers[0].rejected

    await expect(handler(error)).rejects.toEqual({
      message: 'Config error',
      status: undefined,
      data: undefined
    })
  })

})

