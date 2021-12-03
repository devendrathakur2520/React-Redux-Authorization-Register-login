import { GET_LOCATION } from "../action";

const initialState = {
    location: [],

}
export default function Locations(state = initialState, action) {
    switch (action.type) {
        case GET_LOCATION:
            return {
                ...state,
                location: action.payload,
            }

        default:
            return state;
    }
}