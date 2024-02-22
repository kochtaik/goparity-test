<script lang="ts" setup>
import { usePokemon } from '@/composables/usePokemon'
import PokemonCardPresentationVue from '../components/presentations/PokemonCardPresentation.vue'
import { onMounted, ref } from 'vue'

const pokemons = usePokemon()
const isLoading = ref(false)

async function loadRandomPokemon(): Promise<void> {
  isLoading.value = true

  try {
    await pokemons.getRandomPokemon()
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(loadRandomPokemon)
</script>

<template>
  <PokemonCardPresentationVue
    @getNew="loadRandomPokemon"
    :pokemon="pokemons.state.currentPokemon"
    :is-loading="isLoading"
  />
</template>
