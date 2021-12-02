import axios from "axios";
import React from "react";
import { setToken } from "../action";
//import { logDeatails } from "../action";
//import { useDispatch, useSelector } from 'react-redux';

export const loginDetails = (loginData) => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:8000/auth/login", loginData)

        console.log("token", response.data)
        dispatch(setToken(response.data.access_token))
    }
}