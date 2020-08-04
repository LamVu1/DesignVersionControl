import {OPEN_MODAL, CLOSE_MODAL} from './ui_action';

const INITIAL_STATE = {
    hidden: true
};


const uiReducer = (oldstate=INITIAL_STATE, action)=>{
    Object.freeze(oldstate);

    switch(action.type){
        case OPEN_MODAL:
            return {
                ...oldstate,
                ui: !oldstate.ui,
                data: action.data}
        case CLOSE_MODAL:
            return{
                ...oldstate,
                ui: !oldstate.ui
            };
        default:
            return oldstate;
    }
};

export default uiReducer;