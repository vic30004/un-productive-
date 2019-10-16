import React, { useReducer } from 'react';
import axios from 'axios';
import ProductiveContext from './ProductiveContext';
import ProductiveReducer from './ProductiveReducer';
import {
  GET_BOOKS,
  ADD_NEW_BOOK,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_BOOKS,
  CLEAR_FILTER,
  BOOK_ERROR,

} from '../types';

const ProductiveState = props => {
  const initialState = {
    pBooks: [],
    error: null
  };

  const [state, dispatch] = useReducer(ProductiveReducer, initialState);

  //GET BOOKS
  const getNewBook = async () => {
    try {
      const res = await axios.get('/api/productive');
      dispatch({ type: GET_BOOKS  , payload: res.data });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response.msg });
    }
  };


  // ADD BOOKS
  const addNewBook = async book => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/productive', book, config);
      dispatch({ type: ADD_NEW_BOOK, payload: res.data });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response.msg });
    }
  };

  // DELETE BOOKS

  // SET CURRENT BOOK

  // CLEAR CURRENT BOOK

  // UPDATE BOOK

  // FILTER BOOK

  // CLEAR FILTER

  return (
    <ProductiveContext.Provider
      value={{
        pBooks: state.pBooks,
        addNewBook,
        error: state.error,
        getNewBook,
      }}
    >
      {props.children}
    </ProductiveContext.Provider>
  );
};

export default ProductiveState;
