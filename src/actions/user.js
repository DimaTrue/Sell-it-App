import axios from "axios";
import {
  LOG_IN_INIT,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../action-types/user';

const API_URL = `http://light-it-04.tk/api/`;

export const logOut = (dispatch) => {
  return dispatch({
    type: LOG_OUT,
  });
};

export const logIn = async (values, dispatch) => {
  await dispatch({ type: LOG_IN_INIT });
  try {
    const result = await axios({
      method: 'POST',
      url: API_URL + `login/`,
      data: values,
    });
    dispatch({ type: LOG_IN_SUCCESS, payload: result.data.user, });
    localStorage.setItem('token', result.data.token);
  } catch (error) {
    dispatch({ type: LOG_IN_FAILURE, payload: error })
  }
};

export const fetchUser = async dispatch => {
  await dispatch({ type: FETCH_USER_INIT });
  try {
    const result = await axios({
      method: 'GET',
      url: API_URL + `profile/`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + localStorage.token,
      }
    });
    dispatch({ type: FETCH_USER_SUCCESS, payload: result.data, });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error })
  }
};
