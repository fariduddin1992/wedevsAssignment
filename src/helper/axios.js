import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { getData } from './HelperFunction';
// import LocalStorageService from "./LocalStorageService";
// import router from "./router/router";

// LocalstorageService
// const localStorageService = LocalStorageService.getService();

// Add a request interceptor
axios.interceptors.request.use(async (config) => {
        const getToken = await getData('authData');
        
        const token = getToken.token;
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token; // as return full code with token type
            // config.headers['Accept'] = 'application/json';
            // config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    error => {
        console.log('axios error', error);
        Promise.reject(error)
    });

//Add a response interceptor
axios.interceptors.response.use((response) => {
    return response
}, function(error) {
    return Promise.reject(error);
});