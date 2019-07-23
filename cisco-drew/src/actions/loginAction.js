import axios from 'axios';
import { SET_CURRENT_USER, META_DATA } from './types';

// Login - Get User Token
export const loginUserAction = () => dispatch => {
    axios.defaults.headers = {
      'Content-Type':'text/plain'
    };

     axios
      .post('http://localhost:52000/api/auth/login')
      .then(res => {
        // Save to localStorage
        const token = res.data.accessToken;
        // Set token to ls
       localStorage.setItem('token', token);

        dispatch({
          type: SET_CURRENT_USER,
          payload: {
            'token': token
          }
        });
      })
      .catch(err =>{
        dispatch({
          type: 'GET_ERRORS',
          payload: 'error'
        })
      }
    );
};

