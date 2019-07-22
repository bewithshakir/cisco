import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

import setCurrentpUser from '../utils/setAuthToken';


// Login - Get User Token
export const loginUser = userData => dispatch => {
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
        // setAuthToken(token);
        
        // Decode token to get user data
       // const decoded = jwt_decode(token);
        // Set current user
        
        // dispatch(setCurrentpUser(token));
        // axios.defaults.headers.common['x-access-token'] = token;
        // return axios.get('http://localhost:52000/api/app/metadata');
      })
      .then(res => {
        console.log('reeee', res)
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