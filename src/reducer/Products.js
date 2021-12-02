import { GET_PRODUCTS } from "../action";

const initialState = {
    product: [],

}
export default function Products(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                product: action.payload,
            }

        default:
            return state;
    }
}