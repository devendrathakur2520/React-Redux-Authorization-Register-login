import { GET_PRODUCTS, SET_PRODUCTS_FILTERS } from "../action";

const initialState = {
    product: {
        records: [],
        filter: { page: 1, limit: 2 }
    }
}
export default function Products(state = initialState, action) {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                product: {
                    ...state.product,
                    ...action.payload
                }
            }
        case SET_PRODUCTS_FILTERS:
            return {
                ...state,
                product: {
                    ...state.product,
                    filter: {
                        ...state.product.filter,
                        ...action.payload,
                    }

                }
            }
        default:
            return state;
    }
}