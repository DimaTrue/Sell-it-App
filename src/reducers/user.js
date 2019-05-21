import {
  LOG_IN_INIT,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from '../action-types/user';

const init = {
  user: {},
  isLoading: false,
  isLogin: !!localStorage.token,
};

function user(state = init, action) {
  switch (action.type) {

    case LOG_IN_INIT:
      return { ...state, isLoading: true, };

    case LOG_IN_SUCCESS:
      return { ...state, user: action.payload, isLogin: true, };

    case LOG_IN_FAILURE:
      return { ...state, user: action.payload, isLogin: false, };

    case LOG_OUT:
      localStorage.removeItem('token');
      return { ...state, isLogin: false };

    case FETCH_USER_INIT:
      return { ...state, isLoading: true, };

    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, isLoading: false, };

    case FETCH_USER_FAILURE:
      return { ...state, user: action.payload, isLoading: false, };

    default:
      return state;
  }
}

export default user;