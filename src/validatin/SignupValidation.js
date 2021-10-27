import {Alert} from 'react-native';
import {ToastAndroid} from 'react-native';
import {Button, useToast, Center, NativeBaseProvider} from 'native-base';

export function SignupValidation(input) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  if (input.username == '') {
    ToastAndroid.show('Please Input Username !', ToastAndroid.SHORT);
    return false;
  } else if (input.email == '') {
    ToastAndroid.show('Please Input Your  Email !', ToastAndroid.SHORT);
    return false;
  } else if (reg.test(input.email) == false) {
    ToastAndroid.show('Please Input Your Valid Email !', ToastAndroid.SHORT);
    return false;
  } else if (input.password == '') {
    ToastAndroid.show('Please Input Password !', ToastAndroid.SHORT);
    return false;
  }
  return true;

  // let errorMsg = '';

  let errorMsg = {};

  let signupvalidationError = {
    errorMsg: errorMsg,
  };
  //console.log(errorMsg);
  return signupvalidationError;
}
