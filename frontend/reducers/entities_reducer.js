import { combineReducers } from 'redux';

import usersReducer from './user/users_reducer';
// import productsReducer from './products/product_reducer';
// import cartReducer from './cart/cart_reducer';
// import likeReducer from './likes/like_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer
  });
  
  export default entitiesReducer;