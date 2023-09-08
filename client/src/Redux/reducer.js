import {
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    SET_CURRENT_PAGE,
    SET_TOTAL_PAGES,
    ORDER_POKEMONS_BY_NAME,
    ORDER_POKEMONS_BY_ATTACK
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
        case ORDER_POKEMONS_BY_ATTACK:
            clonedRender.sort(function (a, b) {
                const attackA = a.attack;
                const attackB = b.attack;
                if (action.payload === "best") {
                    return attackA.localeCompare(attackB);
                } else {
                    return attackB.localeCompare(attackA);
                }
            });

            return {
                ...state,
                pokemonsRender: clonedRender

            }








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