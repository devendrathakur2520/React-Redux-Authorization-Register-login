import { LOG_DEATAILS, SET_LOG_DEATAILS } from "../action";

const initialState = {
    data: { email: '', password: '' },

}
export default function logData(state = initialState, action) {
    switch (action.type) {
        case LOG_DEATAILS:
            return {
                ...state,
                data: action.payload,
            }

        default:
            return state;
    }
}