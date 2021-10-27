import * as Types from '../../types/AuthTypes';
import axios from 'axios';
import * as base_path from '../../../../url.json';
import {ToastAndroid} from 'react-native';

export const profileInputHandle = (inputName, inputValue) => async dispatch => {
  let data = {
    inputName: inputName,
    inputValue: inputValue,
  };

  dispatch({type: Types.HANDLE_PROFILE_INPUT_CHANGE, payload: data});
};

export const getuserDetails = () => async dispatch => {
  const responseData = {
    status: false,
    dataLoading: true,
    message: '',
    data: [],
  };
  dispatch({type: Types.GET_USER_DETAILS, payload: responseData});
  try {
    await axios
      .get(`${base_path.base_url}wp-json/wp/v2/users/me`)
      .then(res => {
        if (res.status == 200) {
          responseData.status = true;
          responseData.dataLoading = false;
          responseData.data = res.data;
        } else {
          responseData.status = false;
          responseData.dataLoading = false;
        }
      })
      .catch(error => {
        responseData.status = false;
        responseData.dataLoading = false;
      });
  } catch (err) {
    responseData.status = false;
    responseData.dataLoading = false;
  }
  dispatch({type: Types.GET_USER_DETAILS, payload: responseData});
};
export const cleanStatus = () => async dispatch => {
  dispatch({type: Types.SIGN_UP_STATUS_CLEAN, payload: null});
};

export const handleProfileUpdate = inputData => async dispatch => {
  const responseData = {
    status: false,
    isLoading: true,
    message: '',
  };
  dispatch({type: Types.HANDLE_PROFILE_UPDATE, payload: responseData});
  try {
    await axios
      .post(`${base_path.base_url}wp-json/wp/v2/users/me`, inputData)
      .then(res => {
        if (res.status == 200) {
          responseData.status = true;
          responseData.isLoading = false;
          ToastAndroid.show(`Profile Update Successfully`, ToastAndroid.SHORT);
        } else {
          responseData.status = false;
          responseData.isLoading = false;
        }
      })
      .catch(error => {
        let message = error.response.data.message;
        responseData.status = false;
        responseData.isLoading = false;
      });
  } catch (err) {
    responseData.status = false;
    responseData.isLoading = false;
  }
  dispatch({type: Types.HANDLE_PROFILE_UPDATE, payload: responseData});
};
