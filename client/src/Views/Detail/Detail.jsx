import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Detail = () => {

    const { id } = useParams();
    const pokemonsRender = useSelector(state => state.pokemonsRender);
    const pokemon = pokemonsRender.find(poke => poke.id === Number(id));
    return (
        <div>
            <Link to="/home"><button>Back</button></Link>
            {pokemon ? (
                <>
                    <h2>Detalles del Pokémon</h2>
                    <p>ID: {pokemon.id}</p>
                    <img src={pokemon.img} alt={pokemon.name} />
                    <p>Name: {pokemon.name.toUpperCase()}</p>
                    <p>Life: {pokemon.life}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <p>Defense: {pokemon.defense}</p>
                    <p>Speed: {pokemon.speed}</p>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Types: {pokemon.types[0]} {pokemon.types[1]}</p>

                    {/* Otros detalles del Pokémon */}
                </>
            ) : (
                <p>Pokémon no encontrado</p>
            )}
        </div>
    )
};
export default Detail;