import { combineReducers } from 'redux';
import logData from './RegistrationForm';
import Login from './Login';
import Token from './Token';
import Products from './Products';
import Locations from './Location';
import Families from './Families';
import Transaction from './Transaction';
 const reducer = combineReducers({
    logData,
    Login,
    Token,
    Products,
    Locations,
    Families,
    Transaction
});
export default reducer;