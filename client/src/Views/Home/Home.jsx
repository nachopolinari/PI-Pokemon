//📍 View principal de mi APP
//1-trae types del estado global
//2- crea el estado local loading
//3- al montarse el componente despacha las actions que cargaran al estado global los pokemons y los types desde la BD y API
//4- crea las funciones que ordenan/filtran y despachan al reducer
import { useEffect, useState } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getPokemons, getAllTypes, orderByName, getPokemonCreated, getPokemonNoCreated, orderAttack, getPokemonForType } from '../../Redux/actions'
import style from './Home.module.css'
import Loading from "../../Components/Loading/Loading";

const Home = () => {
    const types = useSelector((state) => state.types);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        // Despacha la acción getPokemons() y espera a que se complete
        dispatch(getAllPokemons())
            .then(() => {
                // Despacha la acción getTypes() y espera a que se complete
                return dispatch(getAllTypes());
            })
            .then(() => {
                // Cuando ambas acciones se completen, establece setLoading(false)
                setLoading(false);
            })
            .catch(error => {
                // Maneja cualquier error que pueda ocurrir
                console.error(error);
                setLoading(false);
            });
    }, [dispatch]);


    //----------ORDEN POR NOMBRE------------
    function orderforName(event) {
        let value = event.target.value
        if (value === 'default') {
            dispatch(getAllPokemons())
            //getPokemons para que muestre el render
        }
        else {

            dispatch(orderByName(value))

        }
    }
    //---------ORDEN POR ATAQUE----------------
    const orderByAttack = (event) => {
        let value = event.target.value

        if (value === 'default2') {
            dispatch(getAllPokemons())
            //getPokemons para que muestre el render

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
            dispatch(getAllPokemons())
            //getPokemons para que muestre el render

        }
        else {
            dispatch(getPokemonCreated(value))
        }
    }
    // --------------FILTRO POR TIPO--------------

    function filterforType(event) {
        let value = event.target.value
        if (value === 'All') {
            dispatch(getAllPokemons())
            //getPokemons para que muestre el render

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
                        <option className={style.option} key='api' value='api'>Trapped</option>
                    </select>
                </div>
                {/* -----------FILTRO POR TIPO-------------- */}
                <div>
                    <h5 className={style.sortfilter}>Filter by Type</h5>
                    <select className={style.select} onChange={event => filterforType(event)}>

                        <option className={style.option} key='All' value='All'>All</option>
                        {types && types.map(type => (
                            <option className={style.option} key={type.name} value={type.name}>{type.name}</option>

                        ))}
                    </select>
                </div>
            </div >

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