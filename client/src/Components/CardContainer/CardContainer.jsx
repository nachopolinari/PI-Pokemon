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

    return (
        <div>
            {/* ------------------------PAGINADO-------------- */}
            <div className={style.cardsContainer}>
                {/* <div>
                    <button onClick={() => prevPage()} disabled={currentPage === 1}>Prev</button>
                    <span> {currentPage} / {totalPages}</span>
                    <button onClick={() => nextPage()} disabled={currentPage === totalPages}>Next</button>
                </div>
                <br /> */}
                {/* ------------------MAPEO --------------- */}
                {currentData.map(pokemon => {
                    return <Card
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name.toUpperCase()}
                        img={pokemon.img}
                        types={pokemon.types}
                    />
                })}
                {/* -----------------PAGINADO------------ */}
                {/* <div>
                    <button onClick={() => prevPage()} disabled={currentPage === 1}>Prev</button>
                    <span> {currentPage} / {totalPages}</span>
                    <button onClick={() => nextPage()} disabled={currentPage === totalPages}>Next</button>
                </div> */}
            </div>
        </div>
    )
};
export default CardContainer;