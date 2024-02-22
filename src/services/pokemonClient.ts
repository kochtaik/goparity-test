import { HttpClient } from './http'

export class PokemonClient extends HttpClient {
  constructor() {
    super({
      baseURL: 'https://pokeapi.co/api/v2'
    })
  }
}

export const pokemonClient = new PokemonClient()
