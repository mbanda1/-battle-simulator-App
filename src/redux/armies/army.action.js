import { ADD_ARMY_MESSAGE, ADD_ARMY_SUCCESS, ADD_ARMY_ERROR } from './army.tyeps';

import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export const addArmy = () => ({
  type: ADD_ARMY_MESSAGE,
});
export const addSuccessMessage = () => ({
  type: ADD_ARMY_SUCCESS,
});

export const addErrorMessage = (error) => ({
  type: ADD_ARMY_ERROR,
  error,
});

/**
 * Network component
 */
const Armies = {
  URL,

  addArmy: async function (url, data) {
    try {
      const res = await axios.post(url, data);
      return res;
    } catch (error) {
      throw error.response;
    }
  },
};

/**
 * Add single army action
 * @param {*} data
 * @returns
 */
export const addNewArmy = (data) => (dispatch) => {
  dispatch(addArmy());
  const url = 'http://localhost:3100/armies/add-one';

  return Armies.addArmy(url, data)
    .then((res) => {
      dispatch(addSuccessMessage());
      return res;
    })
    .catch(() => {
      dispatch(addErrorMessage('An Error Occurred!'));
      setTimeout(() => {
        dispatch(addErrorMessage());
      }, 1000);
    });
};
