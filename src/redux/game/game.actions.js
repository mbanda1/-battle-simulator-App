import {
  GET_GAME_MESSAGE,
  GET_GAME_SUCCESS,
  GET_GAME_ERROR,
} from './game.type';

import axios from 'axios';
const URL = process.env.REACT_APP_API_URL;

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
  const url = `${URL}/games/get-legit`;

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

