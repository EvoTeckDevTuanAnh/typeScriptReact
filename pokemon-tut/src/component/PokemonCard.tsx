import React from "react";

interface PokemonDetail {
    name: string,
    url: string,
    sprites: {
        front_default: string,
    },
    id:number
}

interface Props {
    pokemon: PokemonDetail
}

const PokemonCard: React.FC<Props> = (props) => {
    const { pokemon } = props;
    return (
        <div className="col-3">
            <div className="card w-100" >
                <img src={pokemon.sprites.front_default} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <a href="#" className="btn btn-primary">Xem chi tiết</a>
                    </div>
            </div>
        </div>
    )

}

export default PokemonCard;