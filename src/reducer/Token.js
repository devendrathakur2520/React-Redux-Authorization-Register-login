import { SET_TOKEN } from "../action";

const getTokenFromLocalStorage = () => {
    let getToken = localStorage.getItem("token") || "";
    return getToken;
};

const initialState = {
    token: getTokenFromLocalStorage(),
}
// const getLocalStorage = (token = '') => {
//     const data = JSON.stringify(token);
//     console.log("thakur", data)
//     localStorage.setItem('token', data);
// }
export default function Token(state = initialState, action) {

    switch (action.type) {
        case SET_TOKEN:
            return {
                state,
                ...action.payload
            }

        default:
            return state;
    }
}