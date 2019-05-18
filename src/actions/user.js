import {
  LOG_IN,
  LOG_OUT,
} from '../action-types/user';

export const logIn = (dispatch) => {
  return dispatch({
    type: LOG_IN,
  });
};

export const logOut = (dispatch) => {
  return dispatch({
    type: LOG_OUT,
  });
};