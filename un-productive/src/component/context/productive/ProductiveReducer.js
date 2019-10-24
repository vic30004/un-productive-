import {
    GET_BOOKS,
    ADD_NEW_BOOK,
    DELETE_BOOK,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BOOK,
    FILTER_BOOKS,
    CLEAR_FILTER,
    BOOK_ERROR
  } from '../types';

  export default (state, action) =>{
      switch (action.type) {
          case GET_BOOKS: 
            return{
                ...state,
                pBooks:action.payload,
                loading:false
            }   
          case ADD_NEW_BOOK:
              return{
                  ...state,
                  pBooks: [...state.pBooks, action.payload],
                  loading:false
              };
              case BOOK_ERROR: 
                return{
                    ...state,
                    error: action.payload
                }
                
          default: 
          return state;
      }
  }