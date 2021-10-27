import * as Types from '../../types/AuthTypes';
// Initial state
const initialState = {
  isLoading: false,
  status: false,
  logoutStatus: false,
  isLogin: false,
  message: '',
  userData: null,
  data: {},
  tokenData: null,
  inputData: {
    username: '',
    password: '',
  },
};

const LoginReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case Types.AUTH_LOGIN_INPUT_HANDELING:
      const inputDataSet = {...state.inputData};
      inputDataSet[action.payload.inputName] = action.payload.inputValue;
      return {
        ...state,
        inputData: inputDataSet,
      };
    case Types.HANDLE_LOGIN:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        status: action.payload.status,
        isLogin: action.payload.status,
      };
    case Types.AUTH_LOGOUT_HANDLE:
      return {
        ...state,
        logoutStatus: true,
        isLogin: false,
        message: '',
        status: false,
        tokenData: null,
        // initialState,
      };

    default:
      break;
  }
  return newState;
};

export default LoginReducer;
