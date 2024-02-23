type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type PokemonAbility = 'speed' | 'special-defense' | 'special-attack' | 'defense' | 'attack' | 'hp'

export type StatItem = {
  base_stat: number
  stat: { name: PokemonAbility }
}

export interface Pokemon {
  name: string
  types: Array<PokemonType>
  sprites: {
    front_default: string | null
  }
  stats: Array<StatItem>
}

export interface PokemonViewModel {
  name: string
  types: Array<string>
  images: {
    frontDefault: string | null
  }
  stats: Record<PokemonAbility, number>
}
