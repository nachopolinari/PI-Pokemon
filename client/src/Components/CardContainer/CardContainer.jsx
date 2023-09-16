import { useSelector } from 'react-redux'
import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import usePagination from '../Pagination/Pagination';

const CardContainer = () => {
    // Obtiene la lista de Pokémon del estado global utilizando el hook 'useSelector'.
    const pokemonsRender = useSelector(state => state.pokemonsRender)

    // Define la cantidad de elementos por página.
    const itemsPerPage = 12;

    // Utiliza la función 'usePagination' para obtener el estado y las funciones necesarias para la paginación.
    const {
        currentPage,
        totalPages,
        currentData,

        nextPage,
        prevPage,
    } = usePagination(pokemonsRender, itemsPerPage);

    return (
        <>
            {/* ------------------------PAGINADO-------------- */}
            <div className={style.pagination}>
                <button onClick={() => prevPage()} disabled={currentPage === 1} className={style.paginationButton}>Prev</button>
                <span> {currentPage} / {totalPages}</span>
                <button onClick={() => nextPage()} disabled={currentPage === totalPages} className={style.paginationButton}>Next</button>
            </div>

            {/* ------------------CONTENEDOR DE TARJETAS --------------- */}
            <div className={style.cardsContainer}>
                {/* ------------------MAPEO DE POKÉMONES A TARJETAS --------------- */}
                {currentData.map(pokemon => {
                    return <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name.toUpperCase()}
                        img={pokemon.img}
                        attack={pokemon.attack}
                        types={pokemon.types}
                    />
                })}
            </div>

            {/* -----------------PAGINADO------------ */}
            <div className={style.pagination}>
                <button onClick={() => prevPage()} disabled={currentPage === 1} className={style.paginationButton}>Prev</button>
                <span> {currentPage} / {totalPages}</span>
                <button onClick={() => nextPage()} disabled={currentPage === totalPages} className={style.paginationButton}>Next</button>
            </div>
        </>
    )
};

export default CardContainer;
