import { GET_TRANSACTION} from "../action";

const initialState = {
    transaction: [],

}
export default function Transaction(state = initialState, action) {
    switch (action.type) {
        case GET_TRANSACTION:
            return {
                ...state,
                transaction: action.payload,
            }

        default:
            return state;
    }
}