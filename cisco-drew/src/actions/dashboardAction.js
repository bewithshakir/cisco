import axios from 'axios';
import { GET_BANNER_DETAILS } from './types';


export const bannerDataAction = (token, bugId) => dispatch => {
    axios.defaults.headers = {
      'Content-Type':'text/plain',
      'x-access-token': token
    };
  
    axios.get(`http://localhost:52000/api/cdets/get_bug_desc/iot/${bugId}`)
      .then(res =>  {
          console.log('dasshboar', res)
        dispatch({
          type: GET_BANNER_DETAILS,
          payload: res.data
        });
      })
  };
  