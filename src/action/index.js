export const LOG_DEATAILS = 'LOG_DEATAILS';
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_PRODUCTS = 'GET_PRODUCTS';


export const  logDeatails= (payload) => ({ type: LOG_DEATAILS, payload });
export const  login= (payload) => ({ type: LOGIN, payload });
export const  setToken= (payload) => ({ type: SET_TOKEN, payload });
export const  getProducts= (payload) => ({ type: GET_PRODUCTS, payload });
