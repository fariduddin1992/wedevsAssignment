import * as types from '../actionTypes';
import {getData} from '../../../helper/helper_function';

export const getDefaultHomepage = () => async dispatch => {
  getData('defaultHomepage').then(data => {
    if (data.length !== 0) {
      dispatch({
        type: types.GET_DEFAULT_HOMEPAGE,
        payload: {
          defaultHomepage: data[0].defaultHomepage,
        },
      });
    } else {
      dispatch({
        type: types.GET_DEFAULT_HOMEPAGE,
        payload: {
          defaultHomepage: 'Customer',
        },
      });
    }
  });
};

export const isLoggedIn = () => async dispatch => {
  getData('loggedIn').then(data => {
    if (data.length !== 0) {
      dispatch({
        type: types.KEEP_LOGGED_IN,
        payload: {
          isLoggedIn: data[0].isLoggedIn,
        },
      });
    }
  });
};
