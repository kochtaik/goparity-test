import type { Pokemon, PokemonViewModel, StatItem } from '@/models'

export class PokemonDataTransformer {
  private transformStats(stats: Array<StatItem>): Record<string, number> {
    return stats.reduce((acc, current) => {
      return {
        ...acc,
        [current.stat.name]: current.base_stat
      }
    }, {})
  }

  transformPokemon(rawData: Pokemon): PokemonViewModel {
    return {
      name: rawData.name,
      types: rawData.types.map((type) => type.type.name),
      images: {
        frontDefault: rawData.sprites.front_default
      },
      stats: this.transformStats(rawData.stats)
    }
  }
}

export const pokemonDataTransformer = new PokemonDataTransformer()
