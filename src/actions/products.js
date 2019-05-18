import axios from "axios";
import {
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_ITEM_INIT,
  FETCH_PRODUCT_ITEM_SUCCESS,
  FETCH_PRODUCT_ITEM_FAILURE,
} from '../action-types/products';

const API_URL = `http://light-it-04.tk/api/posters/`;

export const fetchProducts = async dispatch => {
  dispatch({ type: FETCH_PRODUCTS_INIT });
  try {
    const data = await axios.get(API_URL);
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data.data.data, });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error })
  }
};

export const fetchProductItem = async (dispatch, index) => {
  dispatch({ type: FETCH_PRODUCT_ITEM_INIT });
  try {
    const data = await axios.get(API_URL + `${index}`);
    dispatch({ type: FETCH_PRODUCT_ITEM_SUCCESS, payload: data.data, });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_ITEM_FAILURE, payload: error })
  }
};

