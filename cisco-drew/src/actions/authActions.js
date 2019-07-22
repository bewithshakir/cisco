import axios from 'axios';

import { SET_CURRENT_USER, META_DATA } from './types';

import setCurrentpUser from '../utils/setAuthToken';

// Set logged in user
export const setCurrentUser = token => {
  return {
    type: SET_CURRENT_USER,
    payload: {'jwtToken': token}
  };
};

// Login - Get User Token
export const loginUser = (history, bugId) => dispatch => {
  debugger
    axios.defaults.headers = {
      'Content-Type':'text/plain'
    };

     axios
      .post('http://localhost:52000/api/auth/login', "test")
      .then(res => {
        debugger
        // Save to localStorage
        const token = res.data.accessToken;
        // Set token to ls
       localStorage.setItem('jwtToken', token);
       
       
        // Set token to Auth header
        // setAuthToken(token);
        
        // Decode token to get user data
        // const decoded = jwt_decode(token);
        // Set current user
        
        dispatch({
          type: SET_CURRENT_USER,
          payload: {'jwtToken': token}
        });
        
      })
      .then(res => {
        debugger
        if (bugId) {
          history.push(`/dashboard?bugId=${bugId}`)
        }
        
      })
      .catch(err =>{
        dispatch({
          type: 'GET_ERRORS',
          payload: 'error'
        })
      }
      );
};

export const metaData = (token) => dispatch => {
  axios.defaults.headers = {
    'Content-Type':'text/plain',
    'x-access-token': token
  };

  axios.get('http://localhost:52000/api/app/metadata')
    .then(res =>  {
      console.log('resss', res)
      dispatch({
        type: META_DATA,
        payload: res
      });
    })
};

