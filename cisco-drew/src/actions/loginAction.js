import axios from 'axios';
import { SET_CURRENT_USER, META_DATA } from './types';

// Login - Get User Token
export const loginUserAction = (history, bugId) => dispatch => {
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

       if (bugId) {
        localStorage.setItem('bugId', bugId);
       }
       
        
        dispatch({
          type: SET_CURRENT_USER,
          payload: {
            'token': token
          }
        });
      })
      .then(res => {
        if (history && bugId) {
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

