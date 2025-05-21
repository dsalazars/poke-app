<script setup>
import PikachuImage from "../../assets/images/pikachu.webp";
import { usePokemonStore } from "@/stores/pokemonStore";
import { useRouter } from "vue-router";

const pokemonStore = usePokemonStore();
const router = useRouter();

const handleGetPokemons = async () => {
  await pokemonStore.getPokemons();
  router.push({ name: "pokemons" });
};

</script>

<template>
  <section class="overflow-hidden py-12 md:py-20">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-col-reverse sm:flex-col lg:flex-row items-center gap-4">
      <div class="text-center lg:text-left md:items-center order-2 md:order-1 max-w-2xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          <span class=" font-medium">¡Bienvenido</span> <span class="font-medium">Entrenador!</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-8">
          Descubre toda la información sobre tus Pokémon favoritos. Desde sus habilidades hasta sus evoluciones, ¡aquí lo encontrarás todo!
        </p>
        <button 
          @click="handleGetPokemons"
          class="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-full text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group lg:center lg:mx-auto"
        >
          <span class="relative z-10 flex items-center justify-center">
            <span class="mr-2">¡Comencemos!</span>
          </span>
          <span class="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
        </button>
      </div>

      <div class="order-1 md:order-2">
        <img 
          :src="PikachuImage" 
          alt="imagen de Pikachu" 
          class="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        />
      </div>
    </div>
  </section>
</template>