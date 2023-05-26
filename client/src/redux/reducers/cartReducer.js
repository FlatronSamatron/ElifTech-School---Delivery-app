import {cartTypes} from '../types'

const initialState = {
    cartData: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case cartTypes.CHANGE_CART:
            return {...state, cartData: action.payload}
        default:
            return state
    }
}