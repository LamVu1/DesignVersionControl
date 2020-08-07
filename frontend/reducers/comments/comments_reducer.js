import {RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT} from './comments_action';

const commentsReducer = (oldstate={}, action)=>{
    
    let nextState;
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            nextState = {...oldstate};
            
            nextState[action.comment.id] = action.comment
            // nextState = Object.assign({}, oldstate, {[action.comment.id]: action.comment})
            return nextState;
        default:
            return oldstate;
    }
};

export default commentsReducer;