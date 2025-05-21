import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { pokemonService } from "@/api/pokemonApi"



export const usePokemonStore = defineStore("pokemon", () => {
    const pokemonsList = ref([]);
    const pokemon = ref(null);
    const isLoading = ref(false);
    const isModalOpen = ref(false);
    const error = ref("");

    const getPokemons = async () => {
        isLoading.value = true;
        try {
            const data = await pokemonService.getPokemonList();
            pokemonsList.value = data.results;
            console.log(pokemonsList.value);
        } catch (error) {
            error.value = error.message || "Error fetching pokemons";
        } finally {
            isLoading.value = false;
        }
    }

    const getPokemonDetails = async (name) => {
        isLoading.value = true;
        try {
            const data = await pokemonService.getPokemonDetails(name);
            pokemon.value = data;
            console.log(pokemon.value);
            isModalOpen.value = true;
            isLoading.value = false;
        } catch (error) {
            error.value = error.message || "Error fetching pokemon details";
        } finally {
            isLoading.value = false;
        }
    }

    const isModalActive = computed(() => isModalOpen);

    const closeModal = () => {
        isModalOpen.value = false;
        pokemon.value = null;
    }

    return {
        pokemonsList,
        pokemon,
        isLoading,
        error,
        isModalOpen,
        isModalActive,
        getPokemons,
        getPokemonDetails,
        closeModal
    }

});