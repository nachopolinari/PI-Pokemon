import { useEffect, useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderByName, orderByAttack } from '../../Redux/actions'
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import Loading from "../../Components/Loading/Loading";
import Pagination from "../../Components/Pagination/Pagination";




const Home = () => {

    const dispatch = useDispatch();
    const currentPage = useSelector(state => state.currentPage);
    const totalPages = useSelector(state => state.totalPages);
    // const [order,setorder] = useState ("");

    useEffect(() => {
        dispatch(getPokemons(currentPage));
    }, [dispatch, currentPage]);
    //----------ORDEN POR NOMBRE------------
    function orderforName(event) {
        let value = event.target.value
        if (value === 'default') {
            dispatch(getPokemons())
        }
        else {

            dispatch(orderByName(value))
            // setCurrentPage(p => p = 1)    //ATENTO A ESTO PARA PAGINATION
            // setOrder(`ordenado ${event.target.value}`) //mensaje que indica cómo se ha ordenado la lista de pokemons
        }
    }
    //---------ORDEN POR ATAQUE----------------
    function orderByAttack(event) {
        let value = event.target.value
        if (value === 'default') {
            dispatch(getPokemons())
        }
        else {

            dispatch(orderByAttack(value))
            // setCurrentPage(p=>p=1)
            // setorderattack(`ordenadopscore ${e.target.value}`)
        }
    }


    return (
        <div className={style.homeContainer}>
            <div className="home-title">
                {/* Contenido de la sección de título (si lo hay) */}
            </div>
            <div className={style.sortsContainer}>
                {/* Contenido de la barra superior (botones, selectores, etc.) */}
              
              {/* -------------------------ORDEN POR NOMBRE------------- */}
                <div>
                    <h5 className={style.sortByName}>Sort by Name</h5>
                    <select className="selectshome" onChange={event => orderforName(event)}>
                        <option key='default1' value='default'>Default</option>
                        <option key='az' value='az'>A-Z</option>
                        <option key='za' value='za'>Z-A</option>
                    </select>
                </div>
                {/* -------------------ORDEN POR ATAQUE------------- */}
                <div>
                        <h5 className={style.sortByAttack}>Sort by Attack</h5>
                        <select className="selectshome" onChange={event=> orderByAttack(event)}>
                            <option key='default2' value='default'>Default</option>
                            <option key='best' value='best'>Best Attack</option>
                            <option key='worst' value='worst'>Worst Attack</option>
                        </select>
                    </div>
            </div>
            {/* --------------------PAGINADO----------------- */}
            <div>
                <div className="divpag">
                    {/* <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                    /> */}
                </div>
                {/* ---------TERNARIO : LOADING VS CardContainer----------- */}
                <div className='pokemons-home'>

                    <Loading />
                    <CardContainer />

                </div>
            </div>
        </div>
    )
};
export default Home;

