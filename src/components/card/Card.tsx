import { DetailedPokemon} from "../../interfaces"
import { CardStyle, PokemonInfo } from "./Card.styled"

export const Card = (pokemon: DetailedPokemon) => {
  const pokemonType = pokemon.types[0].type.name;

  type keyType = {
    [key: string]: string
  }

  const typeColor: keyType = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  }
    
  return (
    <CardStyle>
      <img src={pokemon.sprites.other?.["official-artwork"].front_default} alt={pokemon.name} style={{backgroundColor: typeColor[pokemonType]}}/>
      
      <PokemonInfo>
        <p>#{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
      </PokemonInfo>
      
    </CardStyle>
  )
}