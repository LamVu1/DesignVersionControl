import {
    RECEIVE_ALL_GALLERIES,
    RECEIVE_GALLERY,
    UPDATE_GALLERY
  } from './galleries_action';




  // return Object.assign({},state, { [action.currentUser.id]:action.currentUser });


  const galleriesReducer = (oldstate = {}, action) => {
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type) {
        case RECEIVE_ALL_GALLERIES:
          return Object.assign({}, action.galleries);
        case RECEIVE_GALLERY:
          nextState = Object.assign({}, oldstate, action.gallery);
          return nextState;
        case UPDATE_GALLERY:
            return Object.assign({}, action.galleries);
        default:
            return oldstate;
    }
  };
  
  export default galleriesReducer;