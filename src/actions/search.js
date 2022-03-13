import { APIUrls } from '../helpers/urls';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { FETCH_SEARCH_RESULT_SUCCESS } from './actionTypes';

export function searchUsers(searchText) {
  return (dispatch) => {
    const url = APIUrls.userSearch(searchText);
    fetch(url, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(searchResultSucess(data.data.users));
        } else {
          dispatch(searchResultSucess([]));
        }
      });
  };
}

export function searchResultSucess(users) {
  return {
    type: FETCH_SEARCH_RESULT_SUCCESS,
    users,
  };
}
