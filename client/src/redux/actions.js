import axios from 'axios';

export const INVENTARIO = 'INVENTARIO';
export const ADD_ALLCARRITO = 'ADD_ALLCARRITO';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_FAV = 'ADD_FAV';
export const DELETE_FAV = 'DELETE_FAV';
export const FILTER_XPRECIO = 'FILTER_XPRECIO';
export const FILTER_XTALLA = 'FILTER_XTALLA';


export const allCarrito = () => {
   
   return async(dispatch) => {
   //      const response = await axios.get(`http://localhost:3001/pokemons/`);
   //      const { data } = response;

               

   
   //    return dispatch({
   //       type: ADD_ALLPOKEMONS,
   //    payload: data
   //   })  
   
 }
 }

export const addItem = () => {
   //  const endpoint = 'http://localhost:3001/mypokemons/';
   //  return (dispatch) => {
   //     axios.get(endpoint).then(({ data }) => {
         
   //        return dispatch({
   //           type: ADD_MYPOKEMONS,
   //           payload: data,
   //        });
   //     });
   //  };
 };

 export const deleteItem = (id) => {
   //  const endpoint = `http://localhost:3001/mypokemons/${id}`;
   //  return (dispatch) => {
   //     axios.delete(endpoint).then(({ data }) => {
   //        return dispatch({
   //           type: DELETE_MYPOKEMON,
   //           payload: data,
   //     });
   //     });
   //  };
 };

 export const addFavorite = () => {
   //  const endpoint = 'http://localhost:3001/mypokemons/';
   //  return (dispatch) => {
   //     axios.get(endpoint).then(({ data }) => {
         
   //        return dispatch({
   //           type: ADD_MYPOKEMONS,
   //           payload: data,
   //        });
   //     });
   //  };
 };

 export const deleteFavorite = (id) => {
   //  const endpoint = `http://localhost:3001/mypokemons/${id}`;
   //  return (dispatch) => {
   //     axios.delete(endpoint).then(({ data }) => {
   //        return dispatch({
   //           type: DELETE_MYPOKEMON,
   //           payload: data,
   //     });
   //     });
   //  };
 };

 export const filterXprecio = (pokeTypes) => {
   //  return {
   //      type: FILTER,
   //      payload: pokeTypes
   //  }
};

export const filterXtalla = (type) => {


   //  return {
   //      type: ORDER_ALFABETICO,
   //      payload: type
   //  }
};

export const orderAttack = (type) => {

   
   // return {
   //     type: ORDER_ATTACK,
   //     payload: type
   // }
};