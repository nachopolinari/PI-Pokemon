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

export const getPokemonID = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`);
        const pokemonID = apiData.data;
        dispatch({ type: GET_POKEMON_BY_ID, payload: pokemonID });
    };
};
