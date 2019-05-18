import combineReducers from './combineReducers';
import products from './products';
import user from './user';


const reducer = combineReducers({
  products,
  user,
});

export default reducer;