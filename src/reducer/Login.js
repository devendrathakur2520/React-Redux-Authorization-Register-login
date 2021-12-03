import { LOGIN ,RESPONSE_STATUS} from "../action";

const initialState = {
    data: { email: '', password: '' },
    status:""
}

export default function Login(state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                data: action.payload,
            }
            case RESPONSE_STATUS:
            return {
                ...state,
                status: action.payload,
            }

        default:
            return state;
    }
}