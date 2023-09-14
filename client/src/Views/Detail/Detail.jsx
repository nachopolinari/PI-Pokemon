import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const pokemonsRender = useSelector((state) => state.pokemonsRender);
  let pokemon;

  if (!isNaN(id) && id !== null) {
    pokemon = pokemonsRender.find((poke) => poke.id === Number(id));
  } else {
    pokemon = pokemonsRender.find((poke) => poke.id === id);
  }

  return (
    <div className={style.detailContainer}>
      <div className={style.cardDetail}>
        <Link to="/home">
          <button className={style.closeButton}>X</button>
        </Link>

        {pokemon ? (
          <>
            <p>ID: {pokemon.id}</p>
            <p>{pokemon.name.toUpperCase()}</p>
            <img src={pokemon.img} alt={pokemon.name} />
            <div className={style.statsContainer}>
              <p>Life: {pokemon.life}</p>
              <p>Attack: {pokemon.attack}</p>
              <p>Defense: {pokemon.defense}</p>
              <p>Speed: {pokemon.speed}</p>
              <p>Height: {pokemon.height} mts.</p>
              <p>Weight: {pokemon.weight} kgs</p>
              {/* Verifica si existen tipos y los muestra */}
              {pokemon.types && (
                <p>
                  Types:{" "}
                  {Array.isArray(pokemon.types)
                    ? pokemon.types
                        .map((type) =>
                          typeof type === "string" ? type : type.name
                        )
                        .join(" ")
                    : "No types available"}
                </p>
              )}
            </div>
            {/* Otros detalles del Pokémon */}
          </>
        ) : (
          <p>Pokémon no encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
