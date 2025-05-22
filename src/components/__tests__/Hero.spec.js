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

// Mockeamos el store antes de ejecutar los tests
const pokemonStoreMock = {
  getPokemons: vi.fn()
}

vi.mock('@/stores/pokemonStore', () => ({
  usePokemonStore: () => pokemonStoreMock
}))

describe('Hero.vue', () => {
  it('llama al store y redirecciona al hacer clic en el botón', async () => {
    const wrapper = mount(Hero, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })]
      }
    })

    await wrapper.find('button').trigger('click')
    expect(pokemonStoreMock.getPokemons).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith({ name: 'pokemons' })
  })

  it('muestra correctamente la imagen de Pikachu', () => {
    const wrapper = mount(Hero)
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toContain('pikachu.webp')
  })
})
