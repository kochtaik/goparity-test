<script lang="ts" setup>
import type { PokemonViewModel } from '@/models'
import AppSpinner from '../ui/AppSpinner.vue'
import AppImage from '../ui/AppImage.vue'
import ProgressBar from '../ui/ProgressBar.vue'

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
<!-- <li>Type: {{ pokemon.types.join(', ') }}</li> -->
<template>
  <div class="card">
    <div class="card__content" v-if="pokemon && !isLoading">
      <div>
        <div class="card__img">
          <AppImage :src="pokemon.images.frontDefault as string" alt="pokemon" />
        </div>
      </div>
      <div>
        <div class="card__header">
          <h2 class="card__title">{{ pokemon.name }}</h2>
          <span class="card__subtitle">{{ pokemon.types.join(', ') }}</span>
        </div>
        <ul class="list">
          <li v-for="(value, ability) of pokemon.stats" :key="ability">
            <span class="text-nowrap mr-2">{{ ability }}: </span>
            <ProgressBar :progress="value" />
          </li>
        </ul>

        <button @click="fetchNewPokemon" class="card__button">Get another one!</button>
      </div>
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

.card__content {
  @apply flex gap-4;
}

.card__header {
  @apply mb-4 py-6 border-b-2 border-gray-600;
}

.card__title {
  @apply text-4xl font-bold capitalize;
}

.card__subtitle {
  @apply text-sm text-gray-400 italic capitalize;
}

.card__img {
  @apply m-auto;
  @apply min-w-36 h-36;
  @apply overflow-hidden;
  @apply rounded-full border border-gray-600;
}

.list li {
  @apply mb-2;
  @apply flex justify-between items-center;
  @apply capitalize;
}

.card__button {
  @apply block;
  @apply bg-blue-800 text-white px-4 py-2 rounded-md;
  @apply hover:bg-blue-700;
  @apply transition-colors;
  @apply mt-4 mx-auto;
}
</style>
