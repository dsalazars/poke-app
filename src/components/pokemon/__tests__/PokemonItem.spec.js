import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'
import PokemonItem from '@/components/pokemon/PokemonItem.vue'
import { capitalize, getTypeColor } from '@/utils/index'

vi.mock('@/utils/index', () => ({
  capitalize: vi.fn((name) => name.toUpperCase()), // Mock para la función capitalize
  getTypeColor: vi.fn(() => 'bg-blue-500') // Mock para los colores
}))

// Mockeamos el store de Pokémon
const pokemonStoreMock = {
  pokemonsList: [
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' },
    { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/charmander' }
  ],
  getPokemonDetails: vi.fn()
}

vi.mock('@/stores/pokemonStore', () => ({
  usePokemonStore: () => pokemonStoreMock
}))

describe('PokemonListView.vue', () => {
  it('renderiza correctamente la lista de pokemons', () => {
    const wrapper = mount(PokemonItem, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    const pokemonItems = wrapper.findAll('h2')
    expect(pokemonItems).toHaveLength(2)
    expect(pokemonItems[0].text()).toBe('PIKACHU')
    expect(pokemonItems[1].text()).toBe('CHARMANDER')
  })

  it('llama a getPokemonDetails al hacer clic en un Pokémon', async () => {
    const wrapper = mount(PokemonItem, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    const pokemonItems = wrapper.findAll('.relative');
    await pokemonItems[0].trigger('click');
    expect(pokemonStoreMock.getPokemonDetails).toHaveBeenCalledWith('pikachu')
  })
})
