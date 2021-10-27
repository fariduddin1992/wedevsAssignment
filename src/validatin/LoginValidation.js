import {Alert} from 'react-native';
import {ToastAndroid } from "react-native";

export function LoginInputValidation(input) { 
   
   if(input.username == ''){
        ToastAndroid.show("Please Input Username !", ToastAndroid.SHORT);
        return false;
   }else if(input.password == ''){
        ToastAndroid.show("Please Input Password !", ToastAndroid.SHORT);
        return false;
   }
   return true;
    

    // let errorMsg = '';
  
    let errorMsg = {};
  
    
  
   
  
    let salesOrderError = {
      errorMsg: errorMsg,
    };
    //console.log(errorMsg);
    return salesOrderError;
  }