import { useSelector } from 'react-redux'
import Card from "../Card/Card";
import style from "./CardContainer.module.css"
import usePagination from '../Pagination/Pagination';


const CardContainer = () => {

    const pokemonsRender = useSelector(state => state.pokemonsRender)
    const itemsPerPage = 12;

    const {
        currentPage,
        totalPages,
        currentData,

        nextPage,
        prevPage,
    } = usePagination(pokemonsRender, itemsPerPage);

    return (<>

        {/* ------------------------PAGINADO-------------- */}
       
        <div className={style.pagination}>
            <button onClick={() => prevPage()} disabled={currentPage === 1} className={style.paginationButton}>Prev</button>
            <span> {currentPage} / {totalPages}</span>
            <button onClick={() => nextPage()} disabled={currentPage === totalPages} className={style.paginationButton}>Next</button>
        </div>
        <div className={style.cardsContainer}>

            {/* ------------------MAPEO --------------- */}
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