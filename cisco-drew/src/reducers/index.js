import { combineReducers } from 'redux';

import testReducer from './testReducer';
// import errorReducer from './errorReducer';
// import profileReducer from './profileReducer';
// import postReducer from './postReducer';

const rootReducers = combineReducers({
    test: testReducer
});

export default rootReducers;