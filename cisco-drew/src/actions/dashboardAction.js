import axios from 'axios';
import { GET_BANNER_DETAILS, GET_ERRORS } from './types';


export const bannerDataAction = (token, bugId, history) => dispatch => {
  if (token && bugId) {
    
    axios.defaults.headers = {
      'Content-Type':'text/plain',
      'x-access-token': token
    };
    
    
  
    axios.get(`http://localhost:52000/api/cdets/get_bug_desc/iot/${bugId}`)
      .then(res =>  {
        if (res.data.err) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data.err
          });
        } else { 
          dispatch({
            type: GET_BANNER_DETAILS,
            payload: res.data
          });
          if (history) {
            history.push(`/dashboard?bugId=${bugId}`)
          }
        }
        
      })
  }
    
};
  