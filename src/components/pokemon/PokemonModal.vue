<script setup>
import { usePokemonStore } from '@/stores/pokemonStore'

const pokemonStore = usePokemonStore()
const { pokemon, isModalOpen, closeModal } = pokemonStore;
</script>

<template>

  <div 
    v-if="isModalOpen" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
    @click.self="closeModal()">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full relative">
      <button
        @click="closeModal()"
        class="absolute top-3 right-3 text-2xl p-2 text-gray-500 hover:text-red-500"
      >
        ✕
      </button>

      <div v-if="pokemon" class="p-5">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold capitalize">
            {{ pokemon.name }}
          </h2>
        </div>
        <div class="flex justify-center mb-4">
          <img
            :src="pokemon.sprites.other?.home?.front_default"
            :alt="pokemon.name"
            class="h-40 w-40"
          >
        </div>
        <div class="flex justify-center gap-6 text-sm mb-4">
          <div>
            <span class="font-semibold">Peso:</span> {{ pokemon.weight / 10 }} KG
          </div>
          <div>
            <span class="font-semibold">Altura:</span> {{ pokemon.height / 10 }}M
          </div>
        </div>
      </div>
    </div>
  </div>
</template>