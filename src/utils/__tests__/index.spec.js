import { describe, it, expect } from 'vitest'
import { capitalize } from '@/utils/index'

describe('capitalize', () => {
  it('capitaliza correctamente una palabra en minúsculas', () => {
    expect(capitalize('pikachu')).toBe('Pikachu')
  })

  it('capitaliza correctamente una palabra en mayúsculas', () => {
    expect(capitalize('CHARMANDER')).toBe('Charmander')
  })

  it('capitaliza una palabra mezclada (mayúsculas y minúsculas)', () => {
    expect(capitalize('bULBAsaur')).toBe('Bulbasaur')
  })

  it('maneja correctamente una cadena vacía', () => {
    expect(capitalize('')).toBe('')
  })
})
