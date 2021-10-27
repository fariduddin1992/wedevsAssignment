import React, {Component} from 'react';
import * as Types from '../../types/AuthTypes';
import axios from 'axios';
import * as base_path from '../../../../url.json';
import {ToastAndroid} from 'react-native';

export const signupInputHandle = (inputName, inputValue) => async dispatch => {
  let data = {
    inputName: inputName,
    inputValue: inputValue,
  };

  dispatch({type: Types.SIGN_UP_INPUT_HANDELING, payload: data});
};
export const cleanStatus = () => async dispatch => {
  dispatch({type: Types.SIGN_UP_STATUS_CLEAN, payload: null});
};

export const handleSignUp = inputData => async dispatch => {
  const responseData = {
    status: false,
    isLoading: true,
    message: '',
  };

  dispatch({type: Types.HANDLE_SUBMIT_SIGN_UP, payload: responseData});

  try {
    await axios
      .post(`${base_path.base_url}wp-json/wp/v2/users/register`, inputData)
      .then(res => {
        if (res.data.code == 200) {
          responseData.status = true;
          responseData.isLoading = false;
          ToastAndroid.show(`${res.data.message}`, ToastAndroid.SHORT);
        } else {
          responseData.status = false;
          responseData.isLoading = false;
        }
      })
      .catch(error => {
        console.log(`error catch`, error);
        // let message = error.response.data.message;
        // responseData.status = false;
        // responseData.isLoading = false;
        // ToastAndroid.show(`${message}`, ToastAndroid.SHORT);
      });
  } catch (err) {
    responseData.status = false;
    responseData.isLoading = false;
  }
  dispatch({type: Types.HANDLE_SUBMIT_SIGN_UP, payload: responseData});
};
