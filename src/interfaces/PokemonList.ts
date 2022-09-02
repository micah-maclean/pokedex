import { DetailedPokemon } from "./DetailedPokemon";

export interface PokemonList {
    count: number;
    next: string;
    previous: null;
    results:  DetailedPokemon[];
}
