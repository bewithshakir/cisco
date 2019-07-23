import { combineReducers } from 'redux';

// import testReducer from './testReducer';
// import errorReducer from './errorReducer';
// import profileReducer from './profileReducer';
// import postReducer from './postReducer';
import loginReducer from './loginReducer';
import metaData from './metaDataReducer';
import { bannerReducer, reproStepsReducer, bugKeywordsReducer, relatedBugsReducer, logInfoReducer } from './dashboardReducer';

const rootReducers = combineReducers({
    loginData: loginReducer,
    metaData: metaData,
    bannerData: bannerReducer,
    reproStepsData: reproStepsReducer,
    relatedBugData: relatedBugsReducer,
    logInfoData: logInfoReducer,
    bugKeywordData: bugKeywordsReducer
});

export default rootReducers;