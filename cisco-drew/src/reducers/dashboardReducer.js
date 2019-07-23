import { GET_BANNER_DETAILS, GET_ERRORS } from '../actions/types';


const initialState = {
  
};

export const bannerReducer = (state= initialState, action) => {
  switch(action.type) {
    case GET_BANNER_DETAILS:
      return action.payload;
    case GET_ERRORS:
      return {
        isError: true,
        errorMsg: action.payload
      };
    default: 
      return state;
  }
}

