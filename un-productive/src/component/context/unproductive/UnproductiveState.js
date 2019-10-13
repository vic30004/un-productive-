import React, { useReducer } from 'react';
import axios from 'axios';
import UnproductiveContext from './UnproductiveContext';
import UnproductiveReducer from './UnproductiveReducer';
import { GET_GAMES, ADD_NEW_GAME, GAME_ERROR } from '../types';

const UnproductiveState = props => {
  const initialState = {
    uGames: [],
    error: null
  };
  const [state, dispatch] = useReducer(UnproductiveReducer, initialState);

  // GET GAMES
  const getNewGame = async () => {
    try {
      const res = await axios.get('/api/unproductive');
      dispatch({ type: GET_GAMES, payload: res.data });
    } catch (err) {
      dispatch({ type: GAME_ERROR, payload: err.response.msg });
    }
  };

  //   ADD GAMES

  const addNewGame = async game => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/unproductive', game, config);
      dispatch({ type: ADD_NEW_GAME, payload: res.data });
    } catch (err) {
      dispatch({ type: GAME_ERROR, payload: err.response.msg });
    }
  };

  return (
    <UnproductiveContext.Provider
      value={{
        uGames: state.uGames,
        error: state.error,
        addNewGame,
        getNewGame
      }}
    >
      {props.children}
    </UnproductiveContext.Provider>
  );
};
export default UnproductiveState;
