import {cartTypes} from "../types";

export const changeCart = (shop) => {
    return (dispatch) => {
        dispatch({type: cartTypes.CHANGE_CART, payload: shop})
    }
}