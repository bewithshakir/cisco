import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';


// Login - Get User Token
export const loginUser = userData => dispatch => {
    
    /* axios
      .post('/api/users/login', userData)
      .then(res => {
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      ); */
      
      // Test
      const token = 'abcdef234ssdfasfasdf';
      localStorage.setItem('jwtToken', token);
      dispatch(setCurrentUser(token))
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: {'jwtToken': decoded}
    };
};