import axios from 'axios';
import { META_DATA } from './types';


export const metaDataAction = (token) => dispatch => {
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
  