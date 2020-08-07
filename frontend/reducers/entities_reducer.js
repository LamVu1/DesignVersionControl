import { combineReducers } from 'redux';

import usersReducer from './user/users_reducer';
import commentsReducer from './comments/comments_reducer';
import galleriesReducer from './galleries/galleries_reducer';
import adminsReducer from './admins/admins_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    galleries: galleriesReducer,
    comments: commentsReducer,
    admins: adminsReducer
  });
  
  export default entitiesReducer;