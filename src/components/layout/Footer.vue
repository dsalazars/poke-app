<script>
//import PokeballImg from '@/assets/images/pokebola.webp';
</script>

<template>
  <footer class="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-800 to-blue-800 text-white py-6">
    <div class="container mx-auto px-4">
      <!-- Contenido principal -->
      <div class="flex flex-col items-center">
        <!-- Pokéball decorativa -->
        <!-- <div class="mb-4">
          <img :src="PokeballImg" class=""/>
        </div> -->

        <!-- Texto principal -->
        <div class="text-center">
          <p class="text-sm md:text-base">
            <span class="text-yellow-300 font-bold">PokeApp</span> - Hecho con 
            <span class="text-green-400 font-bold">Vue 3</span> y 
            <span class="text-cyan-400 font-bold">Tailwind CSS</span>
          </p>
          <p class="text-xs md:text-sm mt-1">
            © {{ new Date().getFullYear() }} - Todos los derechos reservados
          </p>
        </div>


        <!-- API -->
        <div class="text-xs text-blue-200 mt-2">
          <p>Datos de Pokémon obtenidos de <a href="https://pokeapi.co/" class="underline hover:text-yellow-300">PokeAPI</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

