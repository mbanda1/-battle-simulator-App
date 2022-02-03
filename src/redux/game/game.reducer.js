import {
  ADD_GAME_MESSAGE,
  ADD_GAME_SUCCESS,
  ADD_GAME_ERROR,
  GET_GAME_MESSAGE,
  GET_GAME_SUCCESS,
  GET_GAME_ERROR,
} from './game.type';

const initialState = {
  isLoading: false,
  isAddGameSuccess: false,
  isAddGameLoading: false,
  isAddGameError: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_MESSAGE:
      return { ...state, isLoading: true };
    case GET_GAME_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false,
      };
    case GET_GAME_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default gameReducer;
