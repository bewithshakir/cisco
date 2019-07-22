import { combineReducers } from 'redux';

// import testReducer from './testReducer';
// import errorReducer from './errorReducer';
// import profileReducer from './profileReducer';
// import postReducer from './postReducer';
import authReducer from './authReducer';
import metaData from './metaDataReducer';
import bannerData from './dashboardReducer';

const rootReducers = combineReducers({
    auth: authReducer,
    metaData: metaData,
    bannerData: bannerData
});

export default rootReducers;