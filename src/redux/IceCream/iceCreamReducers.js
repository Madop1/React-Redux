import { BUY_ICECREAM } from "./iceCreamActions"

const initialState = {
    numberOfIceCream :20,
}
const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numberOfIceCream : state.numberOfIceCream - action.payload,
            }
        default: return state
    }
}
export default iceCreamReducer;