import axios from "axios";
//import React from "react";
import { getTransaction } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:8000',

});
let token = JSON.parse(localStorage.getItem('token'))
//let strtoken=JSON.stringify(token)
// console.log("dev",strtoken)
client.defaults.headers.common['Authorization'] = `Bearer ${token} `;

export const TransactionRequest = () => async (dispatch) => {
    try {
        const response = await client.get('/transactions');
        dispatch(getTransaction(response.data));
        console.log(response.data)
    } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
    }
}