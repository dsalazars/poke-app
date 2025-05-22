import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { usePokemonStore } from '@/stores/pokemonStore'
import { pokemonService } from '@/api/pokemonApi'

// Mock del servicio de Pokémon
vi.mock('@/api/pokemonApi', () => ({
  pokemonService: {
    getPokemonList: vi.fn(() => Promise.resolve({ results: [{ name: 'pikachu' }, { name: 'charmander' }] })),
    getPokemonDetails: vi.fn((name) => Promise.resolve({ name, weight: 60, height: 40 }))
  }
}))

describe('usePokemonStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // Activa Pinia antes de cada test
  })

  it('inicializa el estado correctamente', () => {
    const store = usePokemonStore()

    expect(store.pokemonsList).toEqual([])
    expect(store.pokemon).toBeNull()
    expect(store.isLoading).toBe(false)
    expect(store.error).toBe('')
    expect(store.isModalOpen).toBe(false)
  })

  it('getPokemons actualiza pokemonsList correctamente', async () => {
    const store = usePokemonStore()
    await store.getPokemons()

    expect(store.pokemonsList).toEqual([{ name: 'pikachu' }, { name: 'charmander' }])
    expect(store.isLoading).toBe(false)
    expect(store.error).toBe('')
  })

  it('getPokemonDetails actualiza pokemon y abre el modal', async () => {
    const store = usePokemonStore()
    await store.getPokemonDetails('pikachu')

    expect(store.pokemon).toEqual({ name: 'pikachu', weight: 60, height: 40 })
    expect(store.isModalOpen).toBe(true)
    expect(store.isLoading).toBe(false)
  })

  it('maneja errores en getPokemonDetails', async () => {
    const store = usePokemonStore()

    vi.mocked(pokemonService.getPokemonDetails).mockRejectedValueOnce(new Error('Error al obtener el pokemon'))

    await store.getPokemonDetails('pikachu')

    expect(store.error).toBe('Error al obtener el pokemon')
    expect(store.isLoading).toBe(false)
  })

  it('closeModal resetea el estado', () => {
    const store = usePokemonStore()

    store.isModalOpen = true
    store.pokemon = { name: 'pikachu' }

    store.closeModal()

    expect(store.isModalOpen).toBe(false)
    expect(store.pokemon).toBeNull()
  })
})
