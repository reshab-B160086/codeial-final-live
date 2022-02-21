import {
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  isLoggedIn: false,
  iProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case SIGNUP_START:
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        inProgress: false,
        error: null,
      };
    case LOGIN_ERROR:
    case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    default:
      return state;
  }
}
