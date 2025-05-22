import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Footer from '@/components/layout/Footer.vue'

describe('Footer.vue', () => {
  it('renderiza correctamente el texto de la app', () => {
    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain('PokeApp')
    expect(wrapper.text()).toContain('VueJs')
    expect(wrapper.text()).toContain('Tailwind CSS')
  })

  it('incluye enlace a pokeapi.co', () => {
    const wrapper = mount(Footer)
    const link = wrapper.find('a[href="https://pokeapi.co/"]')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('PokeAPI')
  })

  it('tiene las clases de Tailwind CSS', () => {
    const wrapper = mount(Footer)
    expect(wrapper.classes()).toContain('fixed')
    expect(wrapper.classes()).toContain('bottom-0')
    expect(wrapper.classes()).toContain('bg-gradient-to-b')
  })
})
