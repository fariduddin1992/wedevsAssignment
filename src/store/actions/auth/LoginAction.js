import axios from 'axios';
import * as Types from '../../types/AuthTypes';
import * as base_path from '../../../../url.json';
import {Alert} from 'react-native';
import { getData, storeData } from '../../../helper/HelperFunction';
import {ToastAndroid } from "react-native"

export const inputAddHandling = (inputName, inputValue) => async dispatch => {
  let data = {
    inputName: inputName,
    inputValue: inputValue,
  };
  dispatch({type: Types.AUTH_LOGIN_INPUT_HANDELING, payload: data});
};
export const handleLogin = inputData => async dispatch => {
  const responseData = {
    status: false,
    isLoading: true,
    message: '',
    accessToken:''
  };

  dispatch({type: Types.HANDLE_LOGIN, payload: responseData});

  try {
    await axios
      .post(`${base_path.base_url}wp-json/jwt-auth/v1/token`, inputData)
      .then(res => {
        
        if (res.status == 200 && res.data.token !=="") {
            
            //data store in the async storage
            storeData(res.data, 'authData');
            storeData(true, 'loginStatus');
            responseData.status = true;
            responseData.accessToken = res.data.token
            responseData.isLoading=false
            ToastAndroid.show("Login successfully!", ToastAndroid.SHORT);
        } else {
            responseData.status = false;
            responseData.isLoading=false
            ToastAndroid.show("Username Or Password Doesnot match!", ToastAndroid.SHORT);
        }
      })
      .catch(error => {
        responseData.status = false;
        responseData.isLoading=false
        ToastAndroid.show("Username Or Password Doesnot match!", ToastAndroid.SHORT);
      });
  } catch (err) {
    responseData.status = false;
    responseData.isLoading=false
    
  }
  dispatch({type: Types.HANDLE_LOGIN, payload: responseData});
};
export const logoutAction = () => async dispatch => {
    dispatch({type: Types.AUTH_LOGOUT_HANDLE, payload: null});
};

