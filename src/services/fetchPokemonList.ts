import { PokemonList } from "../interfaces";
import { pokeapi } from "./api"
import { fetchPokemon } from "./fetchPokemon";

export const fetchPokemonList = async(offset: number, limit: number): Promise<PokemonList> => {
    try {
        const {data} = await pokeapi.get<PokemonList>(`/pokemon/?offset=${offset}&limit=${limit}`);  
        
        const promiseArr = data.results.map( ({name}) => fetchPokemon(name));
        const promiseResult = await Promise.all(promiseArr);

        return {
            ...data,
            results: promiseResult
        };
    } catch (error) {
        // console.log(error);
        throw error;
    }
}