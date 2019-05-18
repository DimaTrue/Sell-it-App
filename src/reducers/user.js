import {
  LOG_IN,
  LOG_OUT
} from '../action-types/user';

const init = {
  isLoading: false,
  isAuthentificated: false,
};

function user(state = init, action) {
  switch (action.type) {

    case LOG_IN:
      return { ...state, isAuthentificated: true }

    case LOG_OUT:
      return { ...state, isAuthentificated: false }

    default:
      return state;
  }
}

export default user;