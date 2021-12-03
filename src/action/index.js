export const LOG_DEATAILS = 'LOG_DEATAILS';
export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_LOCATION = 'GET_LOCATION';
export const GET_FAMILIES = 'GET_FAMILIES';
export const GET_TRANSACTION = 'GET_TRANSACTION';
export const  RESPONSE_STATUS= 'RESPONSE_STATUS';


export const  logDeatails= (payload) => ({ type: LOG_DEATAILS, payload });
export const  login= (payload) => ({ type: LOGIN, payload });
export const  setToken= (payload) => ({ type: SET_TOKEN, payload });
export const  getProducts= (payload) => ({ type: GET_PRODUCTS, payload });
export const  getLocation= (payload) => ({ type: GET_LOCATION, payload });
export const  getFamilies= (payload) => ({ type: GET_FAMILIES, payload });
export const  getTransaction= (payload) => ({ type: GET_TRANSACTION, payload });
export const  responseStatus= (payload) => ({ type: RESPONSE_STATUS, payload });
