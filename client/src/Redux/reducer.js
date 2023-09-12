//📍 Importa las Actions Creators y segun sea el caso, modifica el estado global del store
import {
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    ORDER_POKEMONS_BY_NAME,
    ORDER_POKEMONS_BY_ATTACK,
    GET_POKEMONS_CREATED,
    GET_POKEMONS_NO_CREATED,
    CREATE_POKEMON_SUCCESS,
    GET_TYPES,
    GET_POKEMONS_FOR_TYPE
} from "./actions";

const initialState = {
    pokemonsRender: [],
    types: [],
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMONS:
            return {
                ...state,
                pokemonsRender: action.payload
            };
        case GET_TYPES:
            return {
                ...state,
                types: action.payload

            };
        case GET_POKEMONS_FOR_TYPE:
            return {
                ...state,
                pokemonsRender: action.payload
            };
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonsRender: [...action.payload, ...state.pokemonsRender]
            };
        case ORDER_POKEMONS_BY_NAME:
            const clonedRender = [...state.pokemonsRender];
            clonedRender.sort(function (a, b) {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (action.payload === "az") {
                    return nameA.localeCompare(nameB);
                } else {
                    return nameB.localeCompare(nameA);
                }
            });
            return {
                ...state,
                pokemonsRender: clonedRender
            };
        case ORDER_POKEMONS_BY_ATTACK:
            const clonedRenderAttack = [...state.pokemonsRender];
            const isBest = action.payload === "best";

            const ArrayRenderedAttack = clonedRenderAttack.sort(function (a, b) {
                const attackA = parseInt(a.attack);
                const attackB = parseInt(b.attack);
                if (isBest) {
                    return attackB - attackA; // Ordenar de mayor a menor ataque (best)
                } else {
                    return attackA - attackB; // Ordenar de menor a mayor ataque (worst)
                }
            });
            return {
                ...state,
                pokemonsRender: ArrayRenderedAttack
            };
        case GET_POKEMONS_CREATED:
            return {
                ...state,
                pokemonsRender: action.payload
            };
        case GET_POKEMONS_NO_CREATED:
            return {
                ...state,
                pokemonsRender: action.payload
            };
        case CREATE_POKEMON_SUCCESS:
            return { 
                ...state ,
                pokemonsRender: [action.payload, ...state.pokemonsRender]
            };
        default:
            return { ...state };
    }
};
export default rootReducer;