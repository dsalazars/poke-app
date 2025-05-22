import pokeApi from '@/api/index';

export const pokemonService = {
  getPokemonList() {
    return pokeApi.get('pokemon/');
  },

  getPokemonDetails(name) {
    return pokeApi.get(`pokemon/${name}`);
  },
};

