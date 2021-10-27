import * as Types from '../../types/AuthTypes';
// Initial state
const initialState = {
  isLoading: false,
  status: false,
  message: '',
  data: {},
  inputData: {
    username: '',
    email: '',
    password: '',
  },
};

const SignUpReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case Types.SIGN_UP_INPUT_HANDELING:
      const inputDataSet = {...state.inputData};
      inputDataSet[action.payload.inputName] = action.payload.inputValue;
      return {
        ...state,
        inputData: inputDataSet,
      };
    case Types.HANDLE_SUBMIT_SIGN_UP:
      return {
        ...state,
        status: action.payload.status,
        isLoading: action.payload.isLoading,
        message: action.payload.message,
      };
    case Types.SIGN_UP_STATUS_CLEAN:
      return {
        ...state,
        status: false,
      };

    default:
      break;
  }
  return newState;
};

export default SignUpReducer;
