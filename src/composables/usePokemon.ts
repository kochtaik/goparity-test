import { pokemonService } from '@/services/PokemonService'
import { getRandomInt } from '@/utils'
import { reactive } from 'vue'
import type { PokemonViewModel } from '@/models'

interface PokemonState {
  currentPokemon: PokemonViewModel | null
}

const state = reactive<PokemonState>({
  currentPokemon: null
})

export function usePokemon() {
  function setPokemon(pokemon: PokemonViewModel) {
    state.currentPokemon = pokemon
  }

  async function getRandomPokemon(): Promise<void> {
    const minBoundary = 1
    const maxBoundary = 1000
    const id = getRandomInt(minBoundary, maxBoundary)

    const pokemon = await pokemonService.getPokemon(id.toString())
    setPokemon(pokemon)
  }

  return {
    state,
    getRandomPokemon
  }
}
