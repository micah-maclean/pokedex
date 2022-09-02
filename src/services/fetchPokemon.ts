import { DetailedPokemon } from "../interfaces";
import { pokeapi } from "./api"

export const fetchPokemon = async (pokemon: string | number): Promise<DetailedPokemon> => {
    try {
        const {data} = await pokeapi.get<DetailedPokemon>(`/pokemon/${pokemon}`);
        return data;
    } catch (error) {
        // console.log(error)
        throw error;
    }
}

