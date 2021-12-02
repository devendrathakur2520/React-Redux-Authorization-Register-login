import axios from "axios";
import React from "react";
//import { logDeatails } from "../action";
import { useDispatch, useSelector } from 'react-redux';

export const submitDetails = (userData) => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:8000/auth/register", userData)

        console.log("ckjxsncx", response.data)
    }
}