import { ADD_ARMY_MESSAGE, ADD_ARMY_SUCCESS, ADD_ARMY_ERROR } from './army.tyeps';

const initialState = {
  isAddArmySuccess: false,
  isAddArmyLoading: false,
  isAddArmyError: false,
};

const armyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARMY_MESSAGE:
      return { ...state, isAddArmyLoading: true };
    case ADD_ARMY_SUCCESS:
      return { ...state, isAddArmySuccess: true, isAddArmyLoading: false };
    case ADD_ARMY_ERROR:
      return {
        ...state,
        isAddArmyError: true,
        error: action.error,
        isAddArmyLoading: false,
      };

    default:
      return state;
  }
};

export default armyReducer;
