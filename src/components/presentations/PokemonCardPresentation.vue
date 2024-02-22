<script lang="ts" setup>
import type { PokemonViewModel } from '@/models'
import AppSpinner from '../ui/AppSpinner.vue'

const props = defineProps<{
  pokemon: PokemonViewModel | null
  isLoading: boolean
}>()

const emit = defineEmits<{
  (e: 'getNew'): void
}>()

function fetchNewPokemon(): void {
  emit('getNew')
}
</script>

<template>
  <div class="card">
    <div class="card__content" v-if="pokemon && !isLoading">
      <div class="card__header">
        <img class="card__img" :src="pokemon.images.frontDefault as string" alt="pokemon" />
        <h2 class="card__title">{{ pokemon.name }}</h2>
      </div>
      <ul class="list">
        <li>Type: {{ pokemon.types.join(', ') }}</li>
        <li v-for="(value, ability) of pokemon.stats" :key="ability">{{ ability }}: {{ value }}</li>
      </ul>

      <button @click="fetchNewPokemon" class="card__button">Get another one!</button>
    </div>

    <div v-if="!pokemon && !isLoading" class="text-red-400">Something went wrong:(</div>

    <div v-if="isLoading">
      <AppSpinner />
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
  @apply p-4;
  @apply bg-gray-800;
  @apply text-white;
  @apply rounded-md;
  @apply shadow-md shadow-gray-700;
}

.card__header {
  @apply mb-4;
}

.card__title {
  @apply text-4xl font-bold capitalize;
}

.card__img {
  @apply m-auto;
  @apply min-h-24;
}

.list li {
  @apply mb-2;
  @apply flex items-center;
  @apply capitalize;
}

.card__button {
  @apply bg-blue-500 text-white px-4 py-2 rounded-md;
  @apply hover:bg-blue-600;
  @apply transition-colors;
  @apply mt-4 mx-auto;
}
</style>
