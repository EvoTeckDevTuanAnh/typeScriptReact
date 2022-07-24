import React from 'react';
import PokemonCard from './PokemonCard';
interface PokemonDetail {
    name: string,
    url: string,
    sprites : {
        front_default : string ,
    },
    id:number
  }
interface Props {
    pokemons : PokemonDetail[]
}
const PokemonColection:React.FC<Props> = (props) => {
    const {pokemons} = props
    return (
        <div className="container-fluid row px-0 mt-4">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))}
        </div>
    )
}

export default PokemonColection;