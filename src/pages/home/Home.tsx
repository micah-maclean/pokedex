import { Card, Grid } from "../../components";
import { PokemonList } from "../../interfaces";
import { fetchPokemonList } from "../../services";
import { useEffect, useState } from "react";;

export const Home = () => {
  const [ pokemonList, setPokemonList] = useState<PokemonList | undefined>(undefined);
  

  const setup = async() => {
    try {
      const response = await fetchPokemonList(0, 20);
      setPokemonList(response);
    } catch (error) {
      console.log(error);
    }  
  }

  useEffect(()=>{
    setup()
  },[])
  return (
    <Grid>
      {
        pokemonList?.results.map( pokemon => <Card key={pokemon.id} {...pokemon}/>)
      }
    </Grid>
  )
}