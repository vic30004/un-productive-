import React, { useReducer } from 'react';
import ProductiveContext from './ProductiveContext';
import ProductiveReducer from './ProductiveReducer';
import {
  ADD_NEW_BOOK,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTER
} from '../types';


const ProductiveState = props=>{
    const initialState = {
        pBooks:[{
            author: 'James Brown',
            bookName: 'Blue',
            picture:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/James_Brown_Live_Hamburg_1973_1702730029.jpg',
            datePublished: '1970',
            userName: 'John Doe',
            id: Math.floor(Math.random() * 100) + 1
          },
          {
            author: 'James Brown',
            bookName: 'Blue',
            picture:
              'https://upload.wikimedia.org/wikipedia/commons/9/99/James_Brown_Live_Hamburg_1973_1702730029.jpg',
            datePublished: '1970',
            userName: 'John Doe',
            id: Math.floor(Math.random() * 100) + 1
          }
            ]
    };


    const [state, dispatch] = useReducer(ProductiveReducer, initialState);

    // ADD BOOKS

    // DELETE BOOKS

    // SET CURRENT BOOK

    // CLEAR CURRENT BOOK

    // UPDATE BOOK

    // FILTER BOOK

    // CLEAR FILTER

    return (
        <ProductiveContext.Provider
        value={{
            pBooks: state.pBooks
        }}
        >
            
            {props.children}

        </ProductiveContext.Provider>

    )

}

export default ProductiveState;