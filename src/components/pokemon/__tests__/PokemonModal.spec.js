import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import PokemonModal from '@/components/pokemon/PokemonModal.vue'

// Mock del store de Pokémon
const pokemonStoreMock = {
  pokemon: {
    name: 'pikachu',
    sprites: {
      other: {
        home: {
          front_default: 'https://example.com/pikachu.png'
        }
      }
    },
    weight: 60,
    height: 40
  },
  isModalOpen: false,
  closeModal: vi.fn()
}

vi.mock('@/stores/pokemonStore', () => ({
  usePokemonStore: () => pokemonStoreMock
}))

describe('PokemonModal.vue', () => {
  it('no se muestra el modal cuando isModalOpen es false', () => {
    const wrapper = mount(PokemonModal, {
      global: {
        mocks: {
          usePokemonStore: () => pokemonStoreMock
        }
      }
    })

    expect(wrapper.find('.fixed').exists()).toBe(false)
  })

  it('se muestra el modal cuando isModalOpen es true', () => {
    pokemonStoreMock.isModalOpen = true

    const wrapper = mount(PokemonModal, {
      global: {
        mocks: {
          usePokemonStore: () => pokemonStoreMock
        }
      }
    })

    expect(wrapper.find('.fixed').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('pikachu')
    expect(wrapper.find('img').attributes('src')).toBe(pokemonStoreMock.pokemon.sprites.other.home.front_default)
  })

  it('cierra el modal al hacer clic en el fondo', async () => {
    pokemonStoreMock.isModalOpen = true

    const wrapper = mount(PokemonModal, {
      global: {
        mocks: {
          usePokemonStore: () => pokemonStoreMock
        }
      }
    })

    await wrapper.find('.fixed').trigger('click.self')
    expect(pokemonStoreMock.closeModal).toHaveBeenCalled()
  })

  it('cierra el modal al hacer clic en el botón de cierre', async () => {
    pokemonStoreMock.isModalOpen = true

    const wrapper = mount(PokemonModal, {
      global: {
        mocks: {
          usePokemonStore: () => pokemonStoreMock
        }
      }
    })

    await wrapper.find('button').trigger('click')
    expect(pokemonStoreMock.closeModal).toHaveBeenCalled()
  })
})
