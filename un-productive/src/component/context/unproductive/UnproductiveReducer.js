import { GET_GAMES, ADD_NEW_GAME, GAME_ERROR } from '../types';
export default (state, action) =>{
    switch (action.type) {
        case GET_GAMES: 
          return{
              ...state,
              uGames:action.payload,
              loading:false
          }   
        case ADD_NEW_GAME:
            return{
                ...state,
                uGames: [...state.uGames, action.payload],
                loading:false
            };
            case GAME_ERROR: 
              return{
                  ...state,
                  error: action.payload
              }
        default: 
        return state;
    }
}