//📍 View principal de mi APP
//1-trae types del estado global
//2- crea el estado local loading
//3- al montarse el componente despacha las actions que cargaran al estado global los pokemons y los types desde la BD y API
//4- crea las funciones que ordenan/filtran y despachan al reducer
import { useEffect, useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, orderByName, getPokemonCreated, getPokemonNoCreated, orderAttack, getPokemonForType } from '../../Redux/actions'
import style from './Home.module.css'
import Loading from "../../Components/Loading/Loading";

const Home = () => {
    const types = useSelector((state) => state.types);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(getPokemons(), getTypes())

            .then(() => setLoading(false))
            .catch(error => {//SACAR ESTE CONSOLE.LOG Y MANEJAR ERROR
                console.error(error);
                setLoading(false);
            });
    }, [dispatch]);
    console.log("types en HOME:", types);

    //----------ORDEN POR NOMBRE------------
    function orderforName(event) {
        let value = event.target.value
        if (value === 'default') {
            dispatch(getPokemons())
        }
        else {

            dispatch(orderByName(value))
           
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
                    <h5 className={style.sortfilter}>Sort by Name</h5>
                    <select className={style.select} onChange={event => orderforName(event)}>
                        <option className={style.option} key='default1' value='default'>Default</option>
                        <option className={style.option} key='az' value='az'>A-Z</option>
                        <option className={style.option} key='za' value='za'>Z-A</option>
                    </select>
                </div>
                {/* -------------------ORDEN POR ATAQUE------------- */}
                <div>
                    <h5 className={style.sortfilter}>Sort by Attack</h5>--
                    <select className={style.select} onChange={event => orderByAttack(event)}>
                        <option className={style.option} key='default2' value='default2'>Default</option>
                        <option className={style.option} key='best' value='best'>Best Attack</option>
                        <option className={style.option} key='worst' value='worst'>Worst Attack</option>
                    </select>

                </div>

                {/* ---------------------FILTRO POR CREADO------------ */}

                <div>
                    <h5 className={style.sortfilter}>Filter Created</h5>
                    <select className={style.select} onChange={event => filterByCreated(event)}>
                        <option className={style.option} key='all' value='all'>All</option>
                        <option className={style.option} key='db' value='db'>Created</option>
                        <option className={style.option} key='api' value='api'>Api Pokemons</option>
                    </select>
                </div>
                {/* -----------FILTRO POR TIPO-------------- */}
                <div>
                    <h5 className={style.sortfilter}>Filter by Type</h5>
                    <select className={style.select} onChange={e => filterforType(e)}>
                        <option className={style.option} key='All' value='All'>All</option>
                        <option className={style.option} key='normal' value='normal'>Normal</option>
                        <option className={style.option} key='fighting' value='fighting'>Fighting</option>
                        <option className={style.option} key='flying' value='flying'>Flying</option>
                        <option className={style.option} key='poison' value='poison'>Poison</option>
                        <option className={style.option} key='ground' value='ground'>Ground</option>
                        <option className={style.option} key='rock' value='rock'>Rock</option>
                        <option className={style.option} key='bug' value='bug'>Bug</option>
                        <option className={style.option} key='ghost' value='ghost'>Ghost</option>
                        <option className={style.option} key='steel' value='steel'>Steel</option>
                        <option className={style.option} key='fire' value='fire'>Fire</option>
                        <option className={style.option} key='water' value='water'>Water</option>
                        <option className={style.option} key='grass' value='grass'>Grass</option>
                        <option className={style.option} key='electric' value='electric'>Electric</option>
                        <option className={style.option} key='psychic' value='psychic'>Psychic</option>
                        <option className={style.option} key='ice' value='ice'>Ice</option>
                        <option className={style.option} key='dragon' value='dragon'>Dragon</option>
                        <option className={style.option} key='dark' value='dark'>Dark</option>
                        <option className={style.option} key='fairy' value='fairy'>Fairy</option>
                        <option className={style.option} key='unknown' value='unknown'>Unknown</option>
                        <option className={style.option} key='shadow' value='shadow'>Shadow</option>
                    </select>
                </div>
            </div>
           
            <div>
                {/* ---------TERNARIO : LOADING VS CardContainer----------- */}
                <div className='pokemons-home'>
                    {loading ? <Loading /> : <CardContainer />}
                </div>
            </div>

        </div >
    );

};
export default Home;