<script setup lang="ts">
import PokemonCardContainer from '@/containers/PokemonCardContainer.vue'
</script>

<template>
  <main>
    <PokemonCardContainer />
  </main>
</template>

<style scoped>
main {
  @apply h-screen;
  @apply flex items-center justify-center;
  @apply bg-gradient-to-r from-blue-800 to-black;
}
</style>
