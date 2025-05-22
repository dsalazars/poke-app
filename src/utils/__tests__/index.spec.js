import { describe, it, expect } from 'vitest'
import { capitalize, getTypeColor } from '@/utils/index'

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

  it('debe retornar un color incluso si el nombre está vacío', () => {
    const result = getTypeColor('');
    expect(result).toBe('bg-red-500');
  });

  it('debe retornar un color incluso si esta con nombre', () => {
    const result = getTypeColor('venusaur');
    expect(result).toBe('bg-orange-400');
  });

})
