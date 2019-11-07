import axios from 'axios';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING}  from './types';

export const getItems = ()  => dispatch => {
     console.log('fetching');
     dispatch(setItemsLoading());
     axios
     .get('/api/item')
     .then(res =>
          dispatch({
               type:GET_ITEMS,
               payload: res.data
          })
     );
 };
export const addItem = item => dispatch => {
     console.log('add');
    axios
    .post('/api/item',item)  
    .then(res =>
          dispatch({
               type:ADD_ITEM,
               payload: res.data
          })
     );
 };
 export const deleteItem = id => dispatch => {
     console.log('delete');
    axios
    .delete(`/api/item/${id}`)
    .then(res =>
          dispatch({
               type:DELETE_ITEM,
               payload:id
          })
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
     console.log('add');
    return {
         type: ITEMS_LOADING
    };    
 };