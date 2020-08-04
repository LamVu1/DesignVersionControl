import { combineReducers } from 'redux';
import entities from './entities_reducer';
import session from './session/session_reducer';
import ui from './ui/ui_reducer';

// import errors from './errors/errors_reducer'; 

const rootReducer = combineReducers({
    entities,
    session,
    ui
  });
  
  export default rootReducer;
  