<script setup>
import { usePokemonStore } from "@/stores/pokemonStore";
import { capitalize, getTypeColor } from "@/utils/index"

const { pokemonsList, getPokemonDetails } = usePokemonStore();

const searchPokemon = async (pokemonName) => {
  await getPokemonDetails(pokemonName);
};

</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mb-40 hover:cursor-pointer">
    <div 
      v-for="pokemon in pokemonsList" 
      :key="pokemon.name"
      class="transition-all duration-200 hover:scale-[1.02]"
    >
      <div 
        class="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        :class="getTypeColor(pokemon.name)"
        @click="searchPokemon(pokemon.name)"
      >
        
        <div class="p-6 text-center">
          <h2 class="text-2xl font-bold text-white drop-shadow-md">
            {{ capitalize(pokemon.name) }}
          </h2>
          
        </div>
      </div>
    </div>
  </div>
</template>