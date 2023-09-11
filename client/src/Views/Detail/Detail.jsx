import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Detail.module.css"

const Detail = () => {

    const { id } = useParams();
    const pokemonsRender = useSelector(state => state.pokemonsRender);
    const pokemon = pokemonsRender.find(poke => poke.id === Number(id));
    return (
        <div className={style.detailContainer}>
            <div className={style.cardDetail}>
                <Link to="/home"><button className={style.closeButton}>X</button></Link>

                {pokemon ? (
                    <>
                        <p>ID: {pokemon.id}</p>
                        <p> {pokemon.name.toUpperCase()}</p>
                        <img src={pokemon.img} alt={pokemon.name} />
                        <div className={style.statsContainer}>
                            <p>Life: {pokemon.life}</p>
                            <p>Attack: {pokemon.attack}</p>
                            <p>Defense: {pokemon.defense}</p>
                            <p>Speed: {pokemon.speed}</p>
                            <p>Height: {pokemon.height}</p>
                            <p>Weight: {pokemon.weight}</p>
                        </div>
                        <p>Types: {pokemon.types[0]} {pokemon.types[1]}</p>

                        {/* Otros detalles del Pokémon */}
                    </>
                ) : (
                    <p>Pokémon no encontrado</p>
                )}
            </div>
        </div>
    )
};
export default Detail;