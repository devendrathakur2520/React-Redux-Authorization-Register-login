import axios from "axios";
//import React from "react";
import { getProducts } from "../action";

const client = axios.create({
  baseURL: 'http://localhost:8000',

});
let token = JSON.parse(localStorage.getItem('token'))
//let strtoken=JSON.stringify(token)
console.log("dev", token)
client.defaults.headers.common['Authorization'] = `Bearer ${token} `;

export const ProductsRequest = (prevFilters) => async (dispatch) => {
  try {

    const params = ({
      _limit: prevFilters.limit,
    })
    const response = await client.get('/products' ,{params});
    dispatch(getProducts({records:response.data}));
    console.log(response.data)
  } catch (err) {
    // logs the error whatever error occured in try block
    console.log(err);
  }
}