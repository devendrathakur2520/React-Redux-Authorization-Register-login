import { GET_FAMILIES } from "../action";

const initialState = {
    families: [],

}
export default function Families(state = initialState, action) {
    switch (action.type) {
        case GET_FAMILIES:
            return {
                ...state,
                families: action.payload,
            }

        default:
            return state;
    }
}