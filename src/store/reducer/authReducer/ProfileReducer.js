import * as Types from '../../types/AuthTypes';
// Initial state
const initialState = {
  profileData:[],
  isLoading:false,
  dataLoading:false,
  status:false,
  inputData: {
    username: '',
    first_name:'',
    last_name:'',

  },
};

const ProfileReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case Types.GET_USER_DETAILS:
        const username = {...state.inputData};
        username.username = action.payload.data.name
      return {
        ...state,
        profileData: action.payload.data,
        dataLoading:action.payload.dataLoading,
        status:action.payload.isLoading,
        inputData:username

      };
    case Types.HANDLE_PROFILE_INPUT_CHANGE:
        const inputDataSet = {...state.inputData};
            inputDataSet[action.payload.inputName] = action.payload.inputValue;
      return {
        ...state,
        inputData: inputDataSet,
   
      };
    case Types.HANDLE_PROFILE_UPDATE:
       
      return {
        ...state,
        isLoading:action.payload.isLoading,
        status:action.payload.status,
        
      };

    default:
      break;
  }
  return newState;
};

export default ProfileReducer;
