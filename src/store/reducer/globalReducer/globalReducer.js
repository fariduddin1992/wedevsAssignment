import * as types from '../../actions/actionTypes';

const initialState = {
  defaultHomepage: '',
  isLoggedIn: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEFAULT_HOMEPAGE:
      return {
        ...state,
        defaultHomepage: action.payload.defaultHomepage,
      };
    case types.KEEP_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };

    default:
      return state;
  }
};

export default globalReducer;
