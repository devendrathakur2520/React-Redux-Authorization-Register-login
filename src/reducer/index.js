import { combineReducers } from 'redux';
import logData from './RegistrationForm';
import Login from './Login';
import Token from './Token';
import Products from './Products';
 const reducer = combineReducers({
    logData,
    Login,
    Token,
    Products
});
export default reducer;