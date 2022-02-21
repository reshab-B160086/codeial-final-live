import { APIUrls } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from './actionTypes';

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

export function signup(email, password, confirmPassword, name) {
  console.log('inside signup');
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        if (data.success) {
          // dispatch action to save user
          localStorage.setItem('token', data.data.token);
          dispatch(signupSuccessfull(data.data.user));
          return;
        }
        console.log('failed');
        dispatch(signupFailed(data.message));
      });
  };
}

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessfull(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
