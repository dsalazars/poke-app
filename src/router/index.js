import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import PokemonListView from '@/views/PokemonListView.vue'
import { usePokemonStore } from '@/stores/pokemonStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonListView,
    },
  ],
})

// Redirige a la vista de bienvenida si no hay pokemones en la lista
router.beforeEach((to, from, next) => {
  const pokemonStore = usePokemonStore();
  if (to.path !== '/' && pokemonStore.pokemonsList.length === 0) {
    next('/');
  } else {
    next();
  }
})

export default router
