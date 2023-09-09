import {
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    SET_CURRENT_PAGE,
    SET_TOTAL_PAGES,
    ORDER_POKEMONS_BY_NAME,
    // ORDER_POKEMONS_BY_ATTACK,
    GET_POKEMONS_CREATED,
    GET_POKEMONS_API
} from "./actions";

const initialState = {
    pokemonsRender: [],
    currentPage: 1,
    totalPages: 1,
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMONS:
            return {
                ...state,
                pokemonsRender: action.payload
            };

        case GET_POKEMONS_CREATED:
            return {
                ...state,
                pokemonsRender: action.payload
            };

        case GET_POKEMONS_API:

            return {
                ...state,
                pokemonsRender: action.payload
            };
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonsRender: [...action.payload, ...state.pokemonsRender]
            }
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
        // case ORDER_POKEMONS_BY_ATTACK:
        //     const clonedRenderAttack = [...state.pokemonsRender];
        //     const isBest = action.payload === "best";

        //     clonedRenderAttack.sort(function (a, b) {
        //         const attackA = parseInt(a.attack);
        //         const attackB = parseInt(b.attack);
        //         if (isBest) {
        //             return attackB - attackA; // Ordenar de mayor a menor ataque (best)
        //         } else {
        //             return attackA - attackB; // Ordenar de menor a mayor ataque (worst)
        //         }
        //     });

        //     return {
        //         ...state,
        //         pokemonsRender: clonedRenderattack

        //     }

















        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.payload,
            };

        default:
            return { ...state };
    }
};
export default rootReducer;