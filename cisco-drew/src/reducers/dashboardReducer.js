import {
  GET_BANNER_DETAILS,
  GET_ERRORS,
  GET_REPRO_STEPS,
  GET_BUG_KEYWORDS,
  GET_RELATED_BUGS,
  GET_LOG_INFO
} from '../actions/types';


const initialState = {

};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BANNER_DETAILS:
      return action.payload;
    // case GET_ERRORS:
    //   return {
    //     isError: true,
    //     errorMsg: action.payload
    //   };
    default:
      return state;
  }
}

export const reproStepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPRO_STEPS:
      return action.payload;
    // case GET_ERRORS:
    //   return {
    //     isError: true,
    //     errorMsg: action.payload
    //   };
    default:
      return state;
  }
}

export const bugKeywordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUG_KEYWORDS:
      return action.payload;
    // case GET_ERRORS:
    //   return {
    //     isError: true,
    //     errorMsg: action.payload
    //   };
    default:
      return state;
  }
}

export const relatedBugsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RELATED_BUGS:
      return action.payload;
    // case GET_ERRORS:
    //   return {
    //     isError: true,
    //     errorMsg: action.payload
    //   };
    default:
      return state;
  }
}


export const logInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOG_INFO:
      return action.payload;
    // case GET_ERRORS:
    //   return {
    //     isError: true,
    //     errorMsg: action.payload
    //   };
    default:
      return state;
  }
}

