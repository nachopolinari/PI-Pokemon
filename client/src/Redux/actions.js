//📍 Define ACTIONS CREATORS y ACTIONS para obtener todos los pokemons(API+BD), para obtener los tipos de pokemons,para obtener UN pokemon por name o ID, para ordenarlos por nombre o por attaque, para filtrarlos por creacion o por type y para crear un nuevo pokemon.

import axios from 'axios';

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const ORDER_POKEMONS_BY_NAME = 'ORDER_POKEMONS_BY_NAME';
export const ORDER_POKEMONS_BY_ATTACK = 'ORDER_POKEMONS_BY_ATTACK';
export const GET_POKEMONS_CREATED = "GET_POKEMONS_CREATED";
export const GET_POKEMONS_NO_CREATED = "GET_POKEMONS_NO_CREATED";
export const GET_POKEMONS_FOR_TYPE = 'GET_POKEMONS_FOR_TYPE';
export const CREATE_POKEMON_SUCCESS = 'CREATE_POKEMON_SUCCESS';
export const CREATE_POKEMON_ERROR = "CREATE_POKEMON_ERROR";

export const getPokemons = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/pokemons");
            const pokemons = apiData.data;
            dispatch({
                type: GET_POKEMONS,
                payload: pokemons
            });
        } catch (error) {
            console.log('Error en action "getPokemons": ', error);
        }
    };
};
export const getTypes = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/pokemonsTypes");
            const types = apiData.data;
            dispatch({
                type: GET_TYPES,
                payload: types
            });
        } catch (error) {
            console.log('Error en action "getTypes": ', error);
        }
    };
};

export const getPokemonID = (query) => {
    return async function (dispatch) {

        try {
            let apiData;
            if (!isNaN(query)) {
                // Si query es un número, buscar por ID
                apiData = await axios.get(`http://localhost:3001/pokemons/${query}`);
            } else {
                // Si query es una cadena, buscar por nombre
                apiData = await axios.get(`http://localhost:3001/pokemons?name=${query}`);
            }
            let pokemonData = apiData.data;

            if (!Array.isArray(pokemonData)) {
                // Si no es un array, transformarlo en un array
                pokemonData = [pokemonData];
            }
            dispatch({
                type: GET_POKEMON_BY_ID,
                payload: pokemonData
            });
        } catch (error) {
            console.log('Error en action "getPokemonID": ', error);
        }
    };
};

export const getPokemonForType = (type) => {
    return async (dispatch) => {
        try {
            const pokemons = await axios.get(`http://localhost:3001/pokemonsTypes/${type}`);
            dispatch({
                type: GET_POKEMONS_FOR_TYPE,
                payload: pokemons.data
            });
        }
        catch (err) {
            console.log('Error en action "getPokemonForType": No hay pokemons con este type');
            //NIY: implementar cartel con msj para usuario
            return dispatch({
                type: GET_POKEMONS_FOR_TYPE,
                payload: []
            });
        }
    };
};

export const orderByName = (value) => {

    return ({
        type: ORDER_POKEMONS_BY_NAME,
        payload: value
    });
};

export const orderAttack = (value) => {
    return ({
        type: ORDER_POKEMONS_BY_ATTACK,
        payload: value
    });
};

export const getPokemonCreated = () => {

    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/pokemons");
            const pokemons = apiData.data;
            const pokemonCreated = pokemons.filter(pokemon => pokemon.created === true);
            dispatch({
                type: GET_POKEMONS_CREATED,
                payload: pokemonCreated
            });

        } catch (error) {
            console.log('Error en action "getPokemonCreated": No hay pokemons creados por el usuario');
        }
    };

};

export const getPokemonNoCreated = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/pokemons");
        const pokemons = apiData.data;
        const pokemonNoCreated = pokemons.filter(pokemon => pokemon.created === false);

        dispatch({ type: GET_POKEMONS_NO_CREATED, payload: pokemonNoCreated });
    };
};

export const postPokemon = (payload) => {
    return async function (dispatch) {
        try {
            const pokemonCreated = await axios.post(`http://localhost:3001/pokemonsPost`, payload);
            return dispatch({
                type: CREATE_POKEMON_SUCCESS,
                payload: pokemonCreated
            });
        }
        catch (error) {
            console.log('Error en action "postPokemon": no se ha creado el pokemon');
            dispatch({
                type: CREATE_POKEMON_ERROR,
                payload: error.message // O cualquier otra información de error que quieras proporcionar
            });
            throw error; 
            //NIY: CREAR ACCION PARA QUE AVISE QUE NO SE POSTEO EL POKE
            //NIY: Lanzar el error nuevamente para que los componentes puedan manejarlo si es necesario

        };
    };
};