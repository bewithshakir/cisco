import axios from 'axios';
import {
  GET_BANNER_DETAILS,
  GET_ERRORS,
  GET_REPRO_STEPS,
  GET_BUG_KEYWORDS,
  GET_RELATED_BUGS,
  GET_LOG_INFO
} from './types';


export const bannerDataAction = (token, bugId, history) => dispatch => {
  if (token && bugId) {
    axios.defaults.headers = {
      'Content-Type': 'text/plain',
      'x-access-token': token
    };

    axios.get(`http://localhost:52000/api/cdets/get_bug_desc/iot/${bugId}`)
      .then(res => {
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
            history.push(`/dashboard?bugId=${bugId}`);
          }
        }

      })
  }

};

export const reproStepsAction = (token, bugId, piUser) => dispatch => {
  if (token && bugId && piUser) {
    axios.defaults.headers = {
      'Content-Type': 'text/plain',
      'x-access-token': token
    };
    axios.get(`http://localhost:52000/api/cdets/get_bug_repro_steps/iot/${bugId}/${piUser}`)
      .then(res => {
        if (res.data.err) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data.err
          });
        } else {
          dispatch({
            type: GET_REPRO_STEPS,
            payload: res.data
          });
        }

      })
  }
}


export const logInfoAction = (token, bugId) => dispatch => {
  if (token && bugId) {
    axios.defaults.headers = {
      'Content-Type': 'text/plain',
      'x-access-token': token
    };
    axios.get(`http://localhost:52000/api/cdets/get_bug_log_info/iot/${bugId}`)
      .then(res => {
        if (res.data.err) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data.err
          });
        } else {
          dispatch({
            type: GET_LOG_INFO,
            payload: res.data
          });
        }

      })
  }
}


export const relatedBugsAction = (token, bugId) => dispatch => {
  if (token && bugId) {
    axios.defaults.headers = {
      'Content-Type': 'text/plain',
      'x-access-token': token
    };
    axios.get(`http://localhost:52000/api/cdets/get_related_bugs/iot/${bugId}`)
      .then(res => {
        if (res.data.err) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data.err
          });
        } else {
          dispatch({
            type: GET_RELATED_BUGS,
            payload: res.data
          });
        }

      })
  }
}

export const bugKeywordsAction = (token, bugId) => dispatch => {
  if (token && bugId) {
    axios.defaults.headers = {
      'Content-Type': 'text/plain',
      'x-access-token': token
    };
    axios.get(`http://localhost:52000/api/cdets/get_bug_keywords/iot/${bugId}`)
      .then(res => {
        if (res.data.err) {
          dispatch({
            type: GET_ERRORS,
            payload: res.data.err
          });
        } else {
          dispatch({
            type: GET_BUG_KEYWORDS,
            payload: res.data
          });
        }

      })
  }
}




