import { createRouter, createWebHistory } from 'vue-router'
import PokemonsView from '@/views/PokemonsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonsView,
    },
  ],
})

export default router
