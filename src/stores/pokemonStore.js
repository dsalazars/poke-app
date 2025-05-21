import { defineStore } from "pinia";
import { ref } from "vue";
import { pokemonService } from "@/api/pokemonApi"



export const usePokemonStore = defineStore("pokemon", () => {
    const pokemonsList = ref([]);
    const pokemon = ref(null);
    const isLoading = ref(false);
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
        } catch (error) {
            error.value = error.message || "Error fetching pokemon details";
        } finally {
            isLoading.value = false;
        }
    }

    return {
        pokemonsList,
        pokemon,
        isLoading,
        error,
        getPokemons,
        getPokemonDetails
    }

});