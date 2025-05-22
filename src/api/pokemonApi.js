import pokeApi from '@/api/axios';

export const pokemonService = {
  getPokemonList() {
    return pokeApi.get('pokemon/');
  },

  getPokemonDetails(name) {
    return pokeApi.get(`pokemon/${name}`);
  },
};

