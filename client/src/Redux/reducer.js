import { GET_POKEMONS, GET_POKEMON_BY_ID } from "./actions";

const initialState = {
    pokemonsRender: []
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMONS:
            return {
                ...state,
                pokemonsRender: action.payload
            };
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonsRender: [action.payload, ...state.pokemonsRender]
            }
        default:
            return { ...state };
    }
};
export default rootReducer;