import { SET_TOKEN } from "../action";

const initialState = {
    token: '',
}
const getLocalStorage = (token = '') => {
    const data = JSON.stringify(token);
    console.log("thakur", data)
    localStorage.setItem('token', data);
}
export default function Token(state = initialState, action) {

    switch (action.type) {
        case SET_TOKEN:
            const token = [...state.token, action.payload]
            getLocalStorage(token);
            return {
                token,

            }
        default:
            return state;
    }
}