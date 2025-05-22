import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'
import PokemonListView from '@/views/PokemonListView.vue'
import PokemonCard from '@/components/pokemon/PokemonItem.vue'
import PokemonModal from '@/components/pokemon/PokemonModal.vue'

// Mock del store de Pokémon
const pokemonStoreMock = {
  isModalActive: false
}

vi.mock('@/stores/pokemonStore', () => ({
  usePokemonStore: () => pokemonStoreMock
}))

describe('PokemonListView.vue', () => {
  it('renderiza correctamente PokemonCard', () => {
    const wrapper = mount(PokemonListView, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    expect(wrapper.findComponent(PokemonCard).exists()).toBe(true)
  })

  it('no muestra el modal cuando isModalActive es false', () => {
    const wrapper = mount(PokemonListView, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    expect(wrapper.findComponent(PokemonModal).exists()).toBe(false)
  })

  it('muestra el modal cuando isModalActive es true', async () => {
    pokemonStoreMock.isModalActive = true

    const wrapper = mount(PokemonListView, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    expect(wrapper.findComponent(PokemonModal).exists()).toBe(true)
  })
})
