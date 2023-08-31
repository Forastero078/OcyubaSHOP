import { ADD_ALLCARRITO, ADD_ITEM, DELETE_ITEM, ADD_FAV, DELETE_FAV, FILTER_XPRECIO, FILTER_XTALLA } from "./actions";




const initialState = {

    inventario: [],
    inventarioBackUp: [],
    display: [],
    displayBackUp: [],
    carrito: [],
    carritoBackUp: [],
    myFavorites: [],
    myFavoritesBackUp: []


}



export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_ALLCARRITO:
            return {
                ...state,
                allPokemons: [...payload],
                allPokemonsBUp: [...payload]
            }
        case ADD_ITEM:
            return {
                ...state,
                myPokemons: [...payload],
                myPokemonsBUp: [...payload]
            }

        case DELETE_ITEM:

            const filtrado = state.myPokemons.filter((element) => element.id !== payload.id)
            return {
                ...state,
                myPokemons: filtrado,

            }
        case ADD_FAV:
            return {
                ...state,
                myPokemons: [...payload],
                myPokemonsBUp: [...payload]
            }

        case DELETE_FAV:

            const filtrado1 = state.myPokemons.filter((element) => element.id !== payload.id)
            return {
                ...state,
                myPokemons: filtrado,

            }

        case FILTER_XPRECIO:
            const { allPokemonsBUp } = state;
            console.log({ payload: payload })

            if (payload === 'Todos los Pokemónes') {
                return {
                    ...state,
                    allPokemons: [...state.allPokemonsBUp]
                }
            }

            let filter = allPokemonsBUp.filter((element) => {
                return element.pokeTypes[0].type.name === payload
            })



            return {
                ...state,
                allPokemons: [...filter]
            }

        case FILTER_XTALLA:

            let charSort;
            if (payload === 'orden alfabetico') {
                return { ...state }
            }

            if (payload === 'ascendente') {
                let { allPokemons } = state;
                charSort = allPokemons.sort((a, b) => a.name.localeCompare(b.nombre))
            } else if (payload === 'descendente') {
                let { allPokemons } = state;
                charSort = allPokemons.sort((a, b) => b.name.localeCompare(a.name));
            }

            return {
                ...state,
                allPokemons: [...charSort]
            };

        default:
            return state;
    }
}