import React from 'react';
import reducer from './reducers';

export const Store = React.createContext();

export function StoreProvider(props) {
  const initialState = {
    products: {
      data: [],
      dataItem: {},
      isLoading: false,
      errorData: null,
      errorDataItem: null,
    },
    user: {
      isLoading: false,
      isLogin: !!localStorage.token,
      user: {},
    }
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}