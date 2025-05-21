<script setup>
import PokemonCard from '@/components/pokemon/PokemonItem.vue';
import PokemonModal from '@/components/pokemon/PokemonModal.vue';
import { usePokemonStore } from '@/stores/pokemonStore';

const { isModalActive } = usePokemonStore();


</script>

<template>
    <div class="max-w-6xl mx-auto grid grid-cols-1 gap-7 pt-16">
        <PokemonCard/>
    </div>
    <PokemonModal v-if="isModalActive"/>
</template>