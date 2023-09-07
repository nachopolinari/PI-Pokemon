import axios from 'axios';


export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";

export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/pokemons");
        const pokemons = apiData.data;
        dispatch({ type: GET_POKEMONS, payload: pokemons });
    };
};

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

