import {
  ADD_BATTLE_MESSAGE,
  ADD_BATTLE_SUCCESS,
  ADD_BATTLE_ERROR,
  GET_BATTLE_MESSAGE,
  GET_BATTLE_SUCCESS,
  GET_BATTLE_ERROR,
  CLEAR_MESSAGE,
} from './battle.types';

import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export const addBattle = () => ({
  type: ADD_BATTLE_MESSAGE,
});
export const addSuccessMessage = () => ({
  type: ADD_BATTLE_SUCCESS,
});

export const addErrorMessage = (error) => ({
  type: ADD_BATTLE_ERROR,
  error,
});

/****************************************************************** */
export const getBattle = () => ({
  type: GET_BATTLE_MESSAGE,
});
export const getSuccessMessage = (data) => ({
  type: GET_BATTLE_SUCCESS,
  data,
});

export const getErrorMessage = (data) => ({
  type: GET_BATTLE_ERROR,
  data,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

/**
 * Network components
 */
const Battles = {
  URL,
  getAllBattles: async function (url) {
    try {
      const data = await axios.get(url, { params: {} });
      return data;
    } catch (error) {
      throw error.response;
    }
  },

  addBattle: async function (url, data) {
    try {
      const data_1 = await axios.post(url, data);
      return data_1;
    } catch (error) {
      throw error.response;
    }
  },
};

/**
 * Add new battle action
 * @param {*} data
 * @returns
 */
export const addNewBattle = (data) => (dispatch) => {
  dispatch(addBattle());
  const url = 'http://localhost:3100/battles/add-one';

  return Battles.addBattle(url, data)
    .then((res) => {
      dispatch(addSuccessMessage());
      dispatch(getBattles());
      return res;
    })
    .catch(() => {
      dispatch(addErrorMessage('An Error Occurred!'));
      setTimeout(() => {
        dispatch(addErrorMessage());
      }, 1000);
    });
};

/**
 * Get all battles action
 * @returns
 */
export const getBattles = () => (dispatch) => {
  dispatch(getBattle());
  const url = 'http://localhost:3100/battles/get-many';

  return Battles.getAllBattles(url)
    .then((res = {}) => {
      dispatch(getSuccessMessage(res.data));
      return res.data;
    })
    .catch(() => {
      dispatch(getErrorMessage('An Error Occurred!'));
      setTimeout(() => {
        dispatch(getErrorMessage());
      }, 2000);
    });
};
