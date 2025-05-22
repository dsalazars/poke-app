import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from '@/components/layout/Header.vue'

describe('Header.vue', () => {
  it('renderiza el logo de Pokemon', () => {
    const wrapper = mount(Header)
    const img = wrapper.find('img')

    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe('Pokémon Logo')
  })

  it('tiene la clase de fondo roja y borde amarillo', () => {
    const wrapper = mount(Header)
    const header = wrapper.find('header')
    expect(header.classes()).toContain('bg-red-600')
    expect(header.classes()).toContain('border-yellow-400')
  })
})
