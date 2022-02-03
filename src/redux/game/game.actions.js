import {
  ADD_GAME_MESSAGE,
  ADD_GAME_SUCCESS,
  ADD_GAME_ERROR,
  GET_GAME_MESSAGE,
  GET_GAME_SUCCESS,
  GET_GAME_ERROR,
} from './game.type';

import axios from 'axios';

export const getGame = () => ({
  type: GET_GAME_MESSAGE,
});
export const getSuccessMessage = (data) => ({
  type: GET_GAME_SUCCESS,
  data,
});

export const getErrorMessage = (data) => ({
  type: GET_GAME_ERROR,
  data,
});

/**
 * Network components
 */
const Games = {
  URL,
  getAllGames: async function (url) {
    try {
      const data = await axios.get(url, { params: {} });
      return data;
    } catch (error) {
      throw error.response;
    }
  },
};

/**
 * Get all battles with atlest 3 armies
 * @returns
 */
export const getGames = () => (dispatch) => {
  dispatch(getGame());
  const url = 'http://localhost:3100/games/get-legit';

  return Games.getAllGames(url)
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

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const lauchGame = (data) => async (dispatch) => {
  dispatch(getGame());
  const url = 'http://localhost:3100/games/start-game';

  try {
    // logic
  } catch (e) {
    dispatch(getErrorMessage('An Error Occurred!'));
    setTimeout(() => {
      dispatch(getErrorMessage());
    }, 2000);
  }
};
