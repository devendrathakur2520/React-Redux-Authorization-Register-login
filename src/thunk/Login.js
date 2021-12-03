import axios from "axios";
import { setToken,responseStatus } from "../action";

export const LoginDetails = (loginData) => {
    return async (dispatch) => {

        const response = await axios.post("http://localhost:8000/auth/login", loginData)
       
        console.log("token", response.status)
        dispatch(responseStatus(response.status))
        dispatch(setToken(response.data.access_token))
    }
}