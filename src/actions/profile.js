import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import {
  FETCH_USER_PROFILE,
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS,
} from './actionTypes';

export function startUserProfileFtech() {
  return {
    type: FETCH_USER_PROFILE,
  };
}

export function userProfileSuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}

export function userProfileFailed(error) {
  return {
    type: USER_PROFILE_FAILURE,
    error,
  };
}

export function fetchUserProfile(userId) {
  return (dispatch) => {
    dispatch(startUserProfileFtech());

    const url = APIUrls.userProfile(userId);
    fetch(url, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(userProfileSuccess(data.data.user));
      });
  };
}
