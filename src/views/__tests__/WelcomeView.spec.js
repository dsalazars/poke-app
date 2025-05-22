import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, expect, vi } from 'vitest'
import Hero from '@/components/layout/Hero.vue'

// Mockeamos Vue Router
const push = vi.fn()
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push
  })
}))

// Mockeamos el store de Pokémon
const pokemonStoreMock = {
  getPokemons: vi.fn()
}

vi.mock('@/stores/pokemonStore', () => ({
  usePokemonStore: () => pokemonStoreMock
}))



describe('Hero.vue', () => {
  it('se renderiza correctamente', () => {
    const wrapper = mount(Hero, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('llama a getPokemons cuando se hace clic en el botón', async () => {
    const wrapper = mount(Hero, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    await wrapper.find('button').trigger('click')
    expect(pokemonStoreMock.getPokemons).toHaveBeenCalled()
  })
})
