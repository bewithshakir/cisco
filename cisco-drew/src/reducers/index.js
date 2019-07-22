import { combineReducers } from 'redux';

// import testReducer from './testReducer';
// import errorReducer from './errorReducer';
// import profileReducer from './profileReducer';
// import postReducer from './postReducer';
import authReducer from './authReducer';

const rootReducers = combineReducers({
    auth: authReducer
});

export default rootReducers;