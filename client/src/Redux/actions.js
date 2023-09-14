//📍 Define ACTIONS CREATORS y ACTIONS para obtener todos los pokemons(API+BD), para obtener los tipos de pokemons,para obtener UN pokemon por name o ID, para ordenarlos por nombre o por attaque, para filtrarlos por creacion o por type y para crear un nuevo pokemon.

import axios from 'axios';

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_ALL_TYPES = "GET_TYPES";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const ORDER_POKEMONS_BY_NAME = 'ORDER_POKEMONS_BY_NAME';
export const ORDER_POKEMONS_BY_ATTACK = 'ORDER_POKEMONS_BY_ATTACK';
export const GET_POKEMONS_CREATED = "GET_POKEMONS_CREATED";
export const GET_POKEMONS_NO_CREATED = "GET_POKEMONS_NO_CREATED";
export const GET_POKEMONS_FOR_TYPE = 'GET_POKEMONS_FOR_TYPE';
export const CREATE_POKEMON_SUCCESS = 'CREATE_POKEMON_SUCCESS';
export const CREATE_POKEMON_ERROR = "CREATE_POKEMON_ERROR";



export const getAllPokemons = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/pokemons");
            const pokemons = apiData.data;
            dispatch({
                type: GET_ALL_POKEMONS,
                payload: pokemons
            });
        } catch (error) {
            console.log('Error en action "getAllPokemons": ', error);
        }
    };
};

export const getAllTypes = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/pokemonsTypes");
            const types = apiData.data;
            dispatch({
                type: GET_ALL_TYPES,
                payload: types
            });
        } catch (error) {
            console.log('Error en action "getTypes": ', error);
        }
    };
};

export const getPokemons=()=>{
    return{
        type: GET_POKEMONS
    }
}

export const getPokemonID = (value) => {
    return async function (dispatch) {
        try {
            let apiData = await axios.get(`http://localhost:3001/pokemons/${value}`);
console.log(apiData);
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
            return alert('TOAST: There is not a pokemon with that ID, please try again')
        }
    };
};

export const getPokemonName = (value) => {
    return async function (dispatch) {
        try {
            let apiData = await axios.get(`http://localhost:3001/pokemons?name=${value}`);
            let pokemonData = apiData.data;

            if (!Array.isArray(pokemonData)) {
                // Si no es un array, transformarlo en un array
                pokemonData = [pokemonData];
            }
            dispatch({
                type: GET_POKEMON_BY_NAME,
                payload: pokemonData
            });
        }
        catch (error) {
            console.log('Error en action "getPokemonName": ', error);
            return alert('TOAST: There is not a pokemon with that NAME, please try again')
        }
    };
}

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

            throw error;
            //NIY: CREAR ACCION PARA QUE AVISE QUE NO SE POSTEO EL POKE
            //NIY: Lanzar el error nuevamente para que los componentes puedan manejarlo y hacer una toast

        };
    };
};

export const getPokemonForType = (value) => {
    return async (dispatch) => {

        dispatch({
            type: GET_POKEMONS_FOR_TYPE,
            payload: value
        });
    }

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

export const getPokemonCreated = (value) => {

    return async function (dispatch) {
        if (value === "db") {
            dispatch({
                type: GET_POKEMONS_CREATED,

            });
        } else {
            dispatch({
                type: GET_POKEMONS_NO_CREATED,

            });
        }
    };


};