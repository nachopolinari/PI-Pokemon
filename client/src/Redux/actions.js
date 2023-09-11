import axios from 'axios';


export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const ORDER_POKEMONS_BY_NAME = 'ORDER_POKEMONS_BY_NAME';
export const ORDER_POKEMONS_BY_ATTACK = 'ORDER_POKEMONS_BY_ATTACK';
export const GET_POKEMONS_CREATED = "GET_POKEMONS_CREATED";
export const GET_POKEMONS_NO_CREATED = "GET_POKEMONS_NO_CREATED";
export const CREATE_POKEMON_SUCCESS = 'CREATE_POKEMON_SUCCESS';
export const GET_TYPES = "GET_TYPES";

export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/pokemons");
        const pokemons = apiData.data;
        dispatch({ type: GET_POKEMONS, payload: pokemons });
    };
};
export const getTypes = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/pokemonsTypes");
        console.log("apiData en actions:", apiData);
        const types = apiData.data;
        console.log("types en actions:", types);
        dispatch({ type: GET_TYPES, payload: types });
    };
}

export const getPokemonID = (query) => {
    return async function (dispatch) {
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
        dispatch({ type: GET_POKEMON_BY_ID, payload: pokemonData });
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
        const apiData = await axios.get("http://localhost:3001/pokemons");
        const pokemons = apiData.data;
        const pokemonCreated = pokemons.filter(pokemon => pokemon.created === true);

        dispatch({ type: GET_POKEMONS_CREATED, payload: pokemonCreated });
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
            const json = await axios.post(`http://localhost:3001/pokemonsPost`, payload);
            return dispatch({
                type: CREATE_POKEMON_SUCCESS,
                payload: json
            });
        }
        catch (err) {
            console.log(err);
            dispatch({
                type: "CREATE_POKEMON_ERROR",
                payload: err.message // O cualquier otra información de error que quieras proporcionar
            });
            throw err; // Lanzar el error nuevamente para que los componentes puedan manejarlo si es necesario

            //CREAR ACCION PARA QUE AVISE QUE NO SE POSTEO EL POKE
        };
    };
};
