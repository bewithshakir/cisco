import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

import setCurrentpUser from '../utils/setAuthToken';


// Login - Get User Token
export const loginUser = (history) => dispatch => {
    axios.defaults.headers = {
      'Content-Type':'text/plain'
    };

     axios
      .post('http://localhost:52000/api/auth/login', "test")
      .then(res => {
        // Save to localStorage
        const token = res.data.accessToken;
        // Set token to ls
       localStorage.setItem('jwtToken', token);
       
       
        // Set token to Auth header
        setAuthToken(token);
        
        // Decode token to get user data
    //    const decoded = jwt_decode(token);
        // Set current user
        
        dispatch(setCurrentpUser(token));
        history.push(`/dashboard?bugId=${this.state.inputVal}`);
      })
      .catch(err =>{}
        // dispatch({
        //   type: GET_ERRORS,
        //   payload: err.response.data
        // })
      );

      
      
};

// Set logged in user
export const setCurrentUser = token => {
    return {
      type: SET_CURRENT_USER,
      payload: {'jwtToken': token}
    };
};