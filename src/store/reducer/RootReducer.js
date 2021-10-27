import {combineReducers} from 'redux';
import LoginReducer from './authReducer/LoginReducer';
import SignUpReducer from './authReducer/SignUpReducer';
import GlobalReducer from './globalReducer/globalReducer';
import SalesReducer from './sales/SalesReducer';
import ProfileReducer from './authReducer/ProfileReducer';

const RootReducer = combineReducers({
 global:GlobalReducer,
 sales:SalesReducer,
 auth:LoginReducer,
 signup:SignUpReducer,
 profile:ProfileReducer,
});
export default RootReducer;
