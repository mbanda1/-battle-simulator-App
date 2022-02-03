import {
  ADD_BATTLE_MESSAGE,
  ADD_BATTLE_SUCCESS,
  ADD_BATTLE_ERROR,
  GET_BATTLE_MESSAGE,
  GET_BATTLE_SUCCESS,
  GET_BATTLE_ERROR,
} from './battle.types';

const initialState = {
  isLoading: false,
  isAddBattleSuccess: false,
  isAddBattleLoading: false,
  isAddBattleError: false,
};

const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BATTLE_MESSAGE:
      return { ...state, isAddBattleLoading: true };
    case ADD_BATTLE_SUCCESS:
      return { ...state, isAddBattleSuccess: true, isAddBattleLoading: false };
    case ADD_BATTLE_ERROR:
      return {
        ...state,
        isAddBattleError: true,
        error: action.error,
        isAddBattleLoading: false,
      };

    case GET_BATTLE_MESSAGE:
      return { ...state, isLoading: true };
    case GET_BATTLE_SUCCESS:
      return {
        ...state,
        ...action.data,
        isLoading: false,
      };
    case GET_BATTLE_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default battleReducer;
