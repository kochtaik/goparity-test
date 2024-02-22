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
  @apply bg-gray-600;
}
</style>
