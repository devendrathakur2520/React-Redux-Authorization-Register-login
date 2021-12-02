import axios from "axios";
import React from "react";
import { getProducts } from "../action";
//import { logDeatails } from "../action";
//import { useDispatch, useSelector } from 'react-redux';



const client = axios.create({
    baseURL: 'https://localhost:8000',
});

client.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImR0aGFrdXJAYmVzdHBlZXJzLmNvbSIsInBhc3N3b3JkIjoiMTIzNCIsImlhdCI6MTYzODQ1MTk2NSwiZXhwIjoxNjM4NDU1NTY1fQ.wzaQZbxblGLUqXlhaVVX-R5dIe4nWlR9_wmlhefWBOg';

export const ProductsRequest = () => async (dispatch) => {
    try {
        const response = await client.get('/products');
        console.log(response.data)
        dispatch(getProducts("Products", response.data));
    } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
    }
}


