import { GET_BANNER_DETAILS } from '../actions/types';


const initialState = {
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BANNER_DETAILS:
      return action.payload;
    default:
      return state;
  }
};


