import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import { tokenConfig } from "./authAction";
import { returnErrors } from "./errorAction";

export const getItems = () => dispatch => {
     console.log('1. fetching from itemAction');
     dispatch(setItemsLoading());
    console.log('4. GET item dispatch from itemAction');
     axios
          .get('/api/item')
          .then(res =>
               dispatch({
                    type: GET_ITEMS,
                    payload: res.data
               })
          )
          .catch(err =>
               dispatch(returnErrors(err.response.data,err.response.status))
          );

    console.log('5. item loaded,after call GET item from itemAction');

};
export const addItem = item => (dispatch,getState) => {
     console.log('add from itemAction');
     axios
          .post('/api/item', item, tokenConfig(getState))
          .then(res =>
               dispatch({
                    type: ADD_ITEM,
                    payload: res.data
               })
          )
          .catch(err =>
               dispatch(returnErrors(err.response.data,err.response.status))
          );
};
export const deleteItem = id => (dispatch,getState) => {
     console.log('delete');
     axios
          .delete(`/api/item/${id}`, tokenConfig(getState))
          .then(res =>
               dispatch({
                    type: DELETE_ITEM,
                    payload: id
               })
          )
          .catch(err =>
               dispatch(returnErrors(err.response.data,err.response.status))
          );
};

// export const getItems = ()  => {
//     console.log('fetching');
//    return {
//         type: GET_ITEMS        
//    };    
// };
// export const deleteItem = id => {
//      console.log('delete');
//     return {
//          type: DELETE_ITEM,
//          payload: id        
//     };    
//  };
//  export const addItem = item => {
//      console.log('add');
//     return {
//          type: ADD_ITEM,
//          payload: item        
//     };    
//  };
export const setItemsLoading = () => {
     console.log('2. call items_loading from itemAction');
     return {
          type: ITEMS_LOADING
     };
};