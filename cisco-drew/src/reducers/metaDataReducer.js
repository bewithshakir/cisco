import { META_DATA } from '../actions/types';


const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case META_DATA:
      return action.payload;
    default:
      return state;
  }
};


