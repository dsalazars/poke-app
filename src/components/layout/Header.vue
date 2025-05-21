<script setup>
import LogoPokemon from '@/assets/images/logo.webp';
</script>

<template>
  <header class="bg-red-600 py-4 border-b-4 border-yellow-400">
      <!-- Logo -->
    <div class="container mx-auto px-4 flex items-center justify-center">
      <img :src="LogoPokemon" alt="Pokémon Logo" class="w-48 max-h-full"/>
    </div>
  </header>
</template>
