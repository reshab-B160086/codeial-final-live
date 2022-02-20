import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import { LOGIN_ERROR, LOGIN_START, LOGIN_SUCCESS } from './actionTypes';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginfailed(errormessage) {
  return {
    type: LOGIN_ERROR,
    error: errormessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type':
          'application/x-www-form-urlencoded; charset=UTF-8;application/json',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        if (data.success) {
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginfailed(data.message));
      });
  };
}
