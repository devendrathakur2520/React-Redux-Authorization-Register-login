import axios from "axios";
import React from "react";
import { getLocation } from "../action";

const client = axios.create({
    baseURL: 'http://localhost:8000',

});
let token = JSON.parse(localStorage.getItem('token'))

client.defaults.headers.common['Authorization'] = `Bearer ${token} `;

export const locationRequest = () => async (dispatch) => {
    try {
        const response = await client.get('/locations');
        dispatch(getLocation(response.data));
        console.log(response.data)
    } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
    }
}