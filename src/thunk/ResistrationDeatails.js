import axios from "axios";
import { logDeatails } from "../action";

export const submitDetails = (userData) => {
    return async (dispatch) => {
        const response = await axios.post("http://localhost:8000/auth/register", userData)

        console.log("ckjxsncx", response.data)

    }
}