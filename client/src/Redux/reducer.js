//📍 Importa las Actions Creators y segun sea el caso, modifica el estado global del store
import {
    GET_ALL_POKEMONS,
    GET_POKEMONS,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_NAME,
    ORDER_POKEMONS_BY_NAME,
    ORDER_POKEMONS_BY_ATTACK,
    GET_POKEMONS_CREATED,
    GET_POKEMONS_NO_CREATED,
    CREATE_POKEMON_SUCCESS,
    GET_ALL_TYPES,
    GET_POKEMONS_FOR_TYPE
} from "./actions";

const initialState = {
    allPokemons: [],
    pokemonsRender: [],
    types: [],
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsRender: action.payload
            };
        case GET_POKEMONS:
            
            return {
                ...state,
                pokemonsRender: state.allPokemons
            }
        case GET_ALL_TYPES:
            return {
                ...state,
                types: action.payload

            };
        case GET_POKEMON_BY_ID:

            return {
                ...state,
                allPokemons: [...action.payload, ...state.allPokemons],
                pokemonsRender: action.payload
            };
        case GET_POKEMON_BY_NAME:
            return {
                ...state,
                allPokemons: [...action.payload, ...state.allPokemons],
                pokemonsRender: action.payload
            };
        case CREATE_POKEMON_SUCCESS:
            return {
                ...state,
                allPokemons: [action.payload, ...state.allPokemons],
                pokemonsRender: [action.payload, ...state.pokemonsRender]
            };
        case GET_POKEMONS_FOR_TYPE:
            const filteredPokemons = state.pokemonsRender.filter((pokemon) => {
                // Verificar si el Pokemon tiene la propiedad 'types' y si contiene el tipo seleccionado
                return pokemon.types && pokemon.types.includes(action.payload);
            });
            return {
                ...state,
                pokemonsRender: filteredPokemons
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

            clonedRenderAttack.sort(function (a, b) {
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
                pokemonsRender: clonedRenderAttack
            };
        case GET_POKEMONS_CREATED:
            const pokemonsCreated = state.allPokemons.filter(pokemon => pokemon.created === true)
            return {
                ...state,
                pokemonsRender: pokemonsCreated
            };
        case GET_POKEMONS_NO_CREATED:
            const pokemonsNoCreated = state.allPokemons.filter(pokemon => pokemon.created === false)
            return {
                ...state,
                pokemonsRender: pokemonsNoCreated
            };

        default:
            return { ...state };
    }
};
export default rootReducer;