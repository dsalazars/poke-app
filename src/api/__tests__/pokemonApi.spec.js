import { describe, it, expect, vi, beforeEach } from 'vitest';
import { pokemonService } from '@/api/pokemonApi';
import pokeApi from '@/api/axios';

// Mock del módulo pokeApi
vi.mock('@/api/axios', () => ({
  default: {
    get: vi.fn()
  }
}));

describe('pokemonService', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Limpia los mocks
  });

  describe('getPokemonList', () => {
    it('debe llamar a pokeApi.get con la ruta "pokemon/"', async () => {
      const mockResponse = { data: { results: ['bulbasaur', 'charmander'] } };
      pokeApi.get.mockResolvedValue(mockResponse);

      const result = await pokemonService.getPokemonList();

      expect(pokeApi.get).toHaveBeenCalledWith('pokemon/');
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getPokemonDetails', () => {
    it('debe llamar a pokeApi.get con la ruta "pokemon/{name}"', async () => {
      const pokemonName = 'pikachu';
      const mockResponse = { data: { name: 'pikachu' } };
      pokeApi.get.mockResolvedValue(mockResponse);

      const result = await pokemonService.getPokemonDetails(pokemonName);

      expect(pokeApi.get).toHaveBeenCalledWith(`pokemon/${pokemonName}`);
      expect(result).toEqual(mockResponse);
    });
  });
});

