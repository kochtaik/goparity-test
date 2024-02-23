import { HttpClient } from './http'

export class PokemonClient extends HttpClient {
  constructor() {
    super({
      baseURL: import.meta.env.VITE_POKEMON_API_URI
    })
  }
}

export const pokemonClient = new PokemonClient()
