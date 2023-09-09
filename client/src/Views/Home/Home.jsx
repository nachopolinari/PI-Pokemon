import { useEffect, useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, orderByName, getPokemonCreated, getPokemonNoCreated, orderAttack } from '../../Redux/actions'
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import Loading from "../../Components/Loading/Loading";
import Pagination from "../../Components/Pagination/Pagination";

const Home = () => {

    const dispatch = useDispatch();
    // const currentPage = useSelector(state => state.currentPage);
    // const totalPages = useSelector(state => state.totalPages);
    // const [order,setorder] = useState ("");

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

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
    const orderByAttack = (event) => {
        let value = event.target.value

        if (value === 'default2') {
            dispatch(getPokemons())
        }
        else {
            dispatch(orderAttack(value))
            // setCurrentPage(p=>p=1)
            // setorderattack(`ordenadopscore ${e.target.value}`)
        }
    }
    //------------------FILTRO POR CREADO-------------------
    function filterByCreated(event) {
        let value = event.target.value
        if (value === 'all') {
            dispatch(getPokemons())
        }
        else if (value === 'db') {
            dispatch(getPokemonCreated())
        }
        else {
            dispatch(getPokemonNoCreated())
        }
    }
    // --------------FILTRO POR TIPO--------------

    function filterforType(event) {
        let value = event.target.value
        if (value === 'All') {
            dispatch(getPokemons())
        }
        else {
            dispatch(getPokemonForType(value))
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
                    <select className="selectshome2" onChange={event => orderByAttack(event)}>
                        <option key='default2' value='default2'>Default</option>
                        <option key='best' value='best'>Best Attack</option>
                        <option key='worst' value='worst'>Worst Attack</option>
                    </select>

                </div>

                {/* ---------------------FILTRO POR CREADO------------ */}

                <div>
                    <h5 className={style.FilterCreated}>Filter by Created</h5>
                    <select className="selectshome" onChange={event => filterByCreated(event)}>
                        <option key='all' value='all'>All</option>
                        <option key='db' value='db'>Created</option>
                        <option key='api' value='api'>Api Pokemons</option>
                    </select>
                </div>
                {/* -----------FILTRO POR TIPO-------------- */}
                <div>
                    <h5 className="reference">Filter by Type</h5>
                    <select className="selectshome" onChange={e => filterforType(e)}>
                        <option key='All' value='All'>All</option>
                        <option key='normal' value='normal'>Normal</option>
                        <option key='fighting' value='fighting'>Fighting</option>
                        <option key='flying' value='flying'>Flying</option>
                        <option key='poison' value='poison'>Poison</option>
                        <option key='ground' value='ground'>Ground</option>
                        <option key='rock' value='rock'>Rock</option>
                        <option key='bug' value='bug'>Bug</option>
                        <option key='ghost' value='ghost'>Ghost</option>
                        <option key='steel' value='steel'>Steel</option>
                        <option key='fire' value='fire'>Fire</option>
                        <option key='water' value='water'>Water</option>
                        <option key='grass' value='grass'>Grass</option>
                        <option key='electric' value='electric'>Electric</option>
                        <option key='psychic' value='psychic'>Psychic</option>
                        <option key='ice' value='ice'>Ice</option>
                        <option key='dragon' value='dragon'>Dragon</option>
                        <option key='dark' value='dark'>Dark</option>
                        <option key='fairy' value='fairy'>Fairy</option>
                        <option key='unknown' value='unknown'>Unknown</option>
                        <option key='shadow' value='shadow'>Shadow</option>
                    </select>
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

        </div>
    );

};
export default Home;
