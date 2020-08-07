import {RECEIVE_ALL_ADMINS, RECEIVE_ADMIN, REMOVE_ADMIN} from './admins_action';

const adminsReducer = (oldstate={}, action)=>{
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_ALL_ADMINS:
            return action.comments;
        case RECEIVE_ADMIN:
            nextState = {...oldstate};
            
            nextState[action.comment.id] = action.comment
            // nextState = Object.assign({}, oldstate, {[action.comment.id]: action.comment})
            return nextState;
        case REMOVE_ADMIN:
            nextState = {...oldstate};
            
            nextState[action.comment.id] = action.comment
            return nextState;
        default:
            return oldstate;
    }
};

export default adminsReducer;