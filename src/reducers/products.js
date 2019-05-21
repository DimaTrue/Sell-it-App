import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_ITEM_INIT,
  FETCH_PRODUCT_ITEM_SUCCESS,
  FETCH_PRODUCT_ITEM_FAILURE,
} from '../action-types/products';

const init = {
  data: [],
  dataItem: {},
  isLoading: false,
  errorData: null,
  errorDataItem: null,
};

function products(state = init, action) {
  switch (action.type) {

    case FETCH_PRODUCTS_INIT:
      return { ...state, isLoading: true, };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, errorData: action.payload, isLoading: false, };

    case FETCH_PRODUCT_ITEM_INIT:
      return { ...state, isLoading: true, };

    case FETCH_PRODUCT_ITEM_SUCCESS:
      return { ...state, dataItem: action.payload, isLoading: false, };

    case FETCH_PRODUCT_ITEM_FAILURE:
      return { ...state, errorDataItem: action.payload, isLoading: false, };

    default:
      return state;
  }
}

export default products;