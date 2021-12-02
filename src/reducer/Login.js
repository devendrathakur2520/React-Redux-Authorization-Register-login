import { LOGIN } from "../action";

const initialState = {
    data: { email: '', password: '' },

}

export default function Login(state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                data: action.payload,
            }

        default:
            return state;
    }
}