import type { Pokemon, PokemonViewModel } from '@/models'
import { HttpClient } from './http'
import { pokemonClient } from './pokemonClient'
import { PokemonDataTransformer, pokemonDataTransformer } from './transformers/pokemon.transformer'

export class PokemonService {
  private readonly httpClient: HttpClient
  private readonly dataTransformer: PokemonDataTransformer

  constructor(httpClient: HttpClient, dataTransformer: PokemonDataTransformer) {
    this.httpClient = httpClient
    this.dataTransformer = dataTransformer
  }

  public async getPokemon(name: string): Promise<PokemonViewModel> {
    const rawData = await this.httpClient.get<Pokemon>(`/pokemon/${name}`)

    return this.dataTransformer.transformPokemon(rawData)
  }
}

export const pokemonService = new PokemonService(pokemonClient, pokemonDataTransformer)
